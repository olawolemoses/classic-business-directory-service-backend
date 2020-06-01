<template>
<div class="row justify-content-center">
    
    
    <div class="col-12 col-lg-6">
        <div id="tables">

            <!-- Header -->


            <!-- Card -->
            <div class="card">
                
                <div class="card-header mt-md-5">
                    <!-- Title -->
                    <h1 class="header-title">
                        {{ business.name }}

                    </h1>
                </div>                
                <div class="card-body">

                    <!-- Table -->
                    <div class="table-responsive">
                        <div  v-if="errors.name" class="alert alert-danger alert-dismissible fade show my-4" role="alert">
                            <strong>{{ errors.name[0] }}</strong> 

                            <!-- Button -->
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>

                        <table class="table table-sm table-striped my-4">
                            <tbody>
                            <tr>
                                <th scope="col">Business Name</th>
                                <td>{{ business.name }}</td>
                            </tr>
                            <tr>
                                <th scope="col">Business contact</th>
                                <td>{{ business.contact }}</td>
                            </tr>
                            <tr>                                
                                <th scope="col">Business email</th>
                                <td>{{ business.email }}</td>
                            </tr>
                            <tr>
                                <th scope="col">Business Phone</th>
                                <td>{{ business.phones }}</td>
                            </tr>
                            <tr>
                                <th scope="col">Views</th>
                                <td>{{ business.views }}</td>
                            </tr>
                            <tr>
                                <th scope="col">Rating</th>
                                <td>{{ business.ratings }}</td>
                            </tr>
                            <tr>
                                <th scope="col">Status</th>
                                <td>{{ business.status == "1" ? 'Active' : 'Not Active' }}</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>

                    <button class="btn btn-outline-primary align-self-end" @click="$refs.modal.show()">
                        Edit Business
                    </button>
                </div>
            </div>

        </div>
    </div>

    <div class="col-12 col-lg-6">
        <div id="tables">

            <!-- Header -->


            <!-- Card -->
            <div class="card">
                
                <div class="card-header mt-md-5">
                    <!-- Title -->
                    <h4 class="header-title">
                       Categories
                    </h4>
                </div>                
                <div class="card-body">

                        <div  v-if="caterrors.category" class="alert alert-danger fade show my-4" role="alert">
                            <strong>{{ caterrors.category }}</strong> 
                        </div>

                        <div  v-if="$page.flash.error" class="alert alert-danger fade show my-4" role="alert">
                            <strong>{{ $page.flash.error }}</strong> 
                        </div>

        
                    <form @submit.prevent="submit">
                        <!-- 'property_id', 'user_id', 'units', 'type', 'amount', 'reference', 'payment_method' -->

                        <div class="form-group">
                                <label class="form-check-label" for="type-house">Add Category</label>

                                <Autocomplete :items="categories"
                                    filterby="name"
                                    @change="onChange"
                                    title="Look for a category"
                                    @selected="categorySelected"/>
                        </div>

                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">Add</button>                
                        </div>

                    </form>

                    <!-- Table -->
                    <div class="table-responsive">
                        <table class="table table-sm table-striped my-4">
                            <tbody>
                                <tr  v-for="(category, index) in businessCategories" v-bind:key="index">
                                    <td>{{ category.name }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="card">
                
                <div class="card-header mt-md-5">
                    <!-- Title -->
                    <h4 class="header-title">
                       Portfolio
                    </h4>
                </div> 

                <div class="card-body" v-for="(image, index) in images" v-bind:key="index">
                    <div> 
                        <img width="50px" :src="image" />
                    </div>
                </div>
            </div>

        </div>
    </div>

    <component :is="componentName" v-bind="componentProps"  ref="modal"></component>
</div>
</template>

<script>
import Layout from '@/Shared/Layout'
import BusinessCreateModal from "./BusinessCreateModal";
import Autocomplete from "@/components/Autocomplete";

export default {
    layout: (h, page) => h(Layout, [page]),
    layout: Layout,
    computed: {
        componentName() {
            return "business-create-modal";
        },             
        componentProps() {
            if (this.business) {
                console.log("customer---x", this.business, this.categories, this.businessCategories)
                return {
                    business: this.business
                };
            } 
            else 
                return {}; // return empty object
        },
        images: function () {
            const images = this.business.images.map( image => image);
            console.log("images", images);
           return images;
        },
    },    
    created(){
        console.log("business =>", this.business, this.errors);
        if(this.$page.flash.error){
            this.caterrors.category = $page.flash.error;
        }
    },
    props: {
        business: {
            type: Object,
            default: {}
        },
        categories: Array,
        businessCategories: Array,
        errors: {
            type: Object
        }
    },    
    components: {BusinessCreateModal, Autocomplete},
    data(){
        return {
            form: {
                category_id: "",
                business_id: this.business.id,
                password: ""
            },
            caterrors: {
                category: ""
            }
        }
    },
    methods: {
        editBusiness(business) {
            console.log("checking",this.business);
            this.$nextTick(() => this.$refs.modal.show(this.business));
        }, 
        async toggleBusiness() {
            console.log("checking",this.business);
            await this.$inertia.post(this.route('business.activate', {business: this.business.id}));
        }, 
        async deleteBusiness() {
            this.loading = true;
            console.log("business store", this.business);
            this.loading = false;
            this.$refs.modal.hide();                    
            await this.$inertia.delete(this.route('business.delete', {business: this.business.id}));
        },      
        categorySelected(category) {
            console.log(`Category Selected:\nid: ${category.id}\n`);
            const hasCategory = this.businessCategories.some( cat => cat.id == category.id);
            console.log("has category", hasCategory);
            if (hasCategory){
                console.log("has category", hasCategory);
                this.caterrors.category = "Category already added";
                console.log(this.caterrors);
                return;
            }
            this.caterrors.category = "";
            this.form.category_id = category.id;
        },
        hide() {
            this.form = {};
        },        
        onChange(value) {
        // do something with the current value
        },      
        async submit() {
            this.loading = true;
            console.log("sending form", this.form);
            console.log("category business store");
            
            this.loading = false;
            if(this.form.category_id == ""){
                this.caterrors.category = ["Pick a new Category"];
                return;
            }
            await this.$inertia.post(this.route('business.addCategory', {business: this.business.id, category: this.form.category_id}));
        },           
    }
}
</script>