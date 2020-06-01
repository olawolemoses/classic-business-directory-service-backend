<template>
    <modal direction="right" ref="modal" title="Add new business" @close="hide">

        <div class="card">
            <div class="card-body">

                <!-- Form -->
                <form @submit.prevent="submit">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control"  v-model="form.name" id="name" placeholder="Enter Business Name">
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Description</label>
                        <textarea v-model="form.description" placeholder="Enter Description..." class="form-control"></textarea>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">url</label>
                        <input type="text" class="form-control"  v-model="form.url" id="url" placeholder="Enter Business url">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">contact</label>
                        <input type="text" class="form-control"  v-model="form.contact" id="contact" placeholder="Enter Business contact">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">email</label>
                        <input type="email" class="form-control"  v-model="form.email" id="email" placeholder="Enter Business email">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">phones</label>
                        <input type="text" class="form-control"  v-model="form.phones" id="phones" placeholder="Enter Business phones">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">address</label>
                        <input type="text" class="form-control"  v-model="form.address" id="address" placeholder="Enter Business address">
                    </div>
                    
                    <div class="form-group">
                        <label for="exampleInputEmail1">City</label>
                        <input type="text" class="form-control"  v-model="form.city" id="city" placeholder="Enter City">
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">State</label>
                        <input type="text" class="form-control"  v-model="form.state" id="state" placeholder="Enter state">
                    </div>                    
                    <div class="form-group">
                        <label for="exampleInputEmail1">Country</label>
                        <input type="text" class="form-control"  v-model="form.country" id="Country" placeholder="Enter Country">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Images</label>
                        <input type="file" @change="onImagePicked($event)" class="form-control"  multiple="multiple" accept="image/*" id="images" />
                    </div>

                <div class="image-preview" v-if="images.length" >
                    <img width="50px" v-for="(image, index) in images" :src="image.url" v-bind:key="index" />
                </div>                    

                    <!-- Button -->
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    </modal>


</template>

<script>
    export default {
        name: 'BusinessCreateModal',
        props: {
            business: {
                type: Object,
                default: null
            }
        },
        components: {
        },
        data() {
            return {
                form: {
                    image: ""
                },
                loading: false,
                image: null,
                images: [],
                mode: "create"
            };
        },
        computed: {
            errors() {
                return this.$page.errors;
            },
        },
        methods: {
            hide() {
                this.$refs.modal.hide();
                this.form = {};
            },
            show(business = null) {
                console.log("property", this.business);
                this.form = {};
                if(!!this.business){
                    this.form = {
                        name: this.business.name,
                        url: this.business.url,
                        description: this.business.description,
                        contact: this.business.contact,
                        email: this.business.email,
                        phones: this.business.phones,
                        address: this.business.address,
                        city: this.business.city,
                        state: this.business.state,
                        country: this.business.country,
                        images: this.business.images,
                        status: this.business.status
                    }

                    const toDataURL = url => fetch(url)
                        .then(response => response.blob())
                        .then(blob => new Promise((resolve, reject) => {
                            const reader = new FileReader()
                            reader.onloadend = () => resolve(reader.result);
                            reader.onerror = reject;
                            reader.readAsDataURL(blob);
                        }));

                        const images = this.business.images;
                        images.map( image => {
                                toDataURL(image).then(dataUrl => this.images.push({url: dataUrl}))
                        });
                    console.log("this.form", this.form);
                }   
                this.$refs.modal.show();
            },

            async submit() {
                this.loading = true;
                this.form.images = this.images;
                console.log("sending form", this.form, this.images);
                
                if(!!this.business){
                    console.log("business update", this.business.id, this.business);
                    this.loading = false;
                    this.$refs.modal.hide();
                    await this.$inertia.post(this.route('business.update', {business: this.business.id}), this.form);
                }
                else{
                    console.log("business store");
                    this.loading = false;
                    this.$refs.modal.hide();                    
                    await this.$inertia.post(this.route('business.store'), this.form);
                }
            },

            onImagePicked(event){
                const filesArray =  Array.from((event.target).files);
                const file = filesArray[0];
                console.log('files -->', filesArray);

                if (this.mode === 'create') {
                    if (filesArray.length > 0 ) {
                        for (let fil of filesArray) {

                            let reader = new FileReader();
                            reader.onload = () => {
                                console.log('in reader', reader.result );
                                this.images.push({
                                    url: reader.result  // Base64 string for preview image
                                });
                            };
                            console.log('fil ===>', fil);
                            reader.readAsDataURL(fil);
                        }
                    }
                } else {
                    const reader = new FileReader();
                    reader.onload = () => {
                        this.imagePreview = reader.result;
                    };
                    reader.readAsDataURL(file);
                }
            },            
        },
    }
</script>

<style scoped>

</style>
