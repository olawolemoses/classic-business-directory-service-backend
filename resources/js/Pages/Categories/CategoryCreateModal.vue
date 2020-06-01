<template>
    <modal direction="right" ref="modal" title="Add new Category" @close="hide">

        <div class="card">
            <div class="card-body">

                <!-- Form -->
                <form @submit.prevent="submit">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control"  v-model="form.name" id="name" placeholder="Enter Category Name">
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
        name: 'CategoryCreateModal',
        props: {
            category: {
                type: Object,
                default: null
            }
        },
        components: {
        },
        data() {
            return {
                form: {},
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
            show(category = null) {
                console.log("category", this.category, category);
                this.form = {};
                if(!!this.category){
                    this.form = {
                        name: this.category.name
                    };

                    console.log("this.form", this.form);
                }   
                this.$refs.modal.show();
            },

            async submit() {
                this.loading = true;
                console.log("sending form", this.form);
                
                if(!!this.category){
                    console.log("category update", this.category.id, this.category);
                    this.loading = false;
                    this.$refs.modal.hide();
                    await this.$inertia.post(this.route('categories.update', {category: this.category.id}), this.form);
                }
                else{
                    console.log("category store");
                    this.loading = false;
                    this.$refs.modal.hide();                    
                    await this.$inertia.post(this.route('categories.store'), this.form);
                }
            },
        },
    }
</script>

<style scoped>

</style>
