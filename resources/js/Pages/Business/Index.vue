<template>
<div class="row justify-content-center">
    
    <div class="col-12 col-lg-16">
        <div id="tables">

            <!-- Header -->


            <!-- Card -->
            <div class="card">
                
                <div class="card-header mt-md-5">
                    <!-- Title -->
                    <h1 class="header-title">
                        Business
                    </h1>
                </div>                
                <div class="card-body">

                        <button class="btn btn-outline-primary align-self-end" @click="$refs.modal.show()">
                            Create Business
                        </button>

                    <!-- Table -->
                    <div class="table-responsive">
                        <div  v-if="$page.errors.name" class="alert alert-danger alert-dismissible fade show my-4" role="alert">
                            <strong>{{ $page.errors.name[0] }}</strong> 

                            <!-- Button -->
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>

                        <table class="table table-sm table-striped my-4">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Business Name</th>
                                <th scope="col">Business contact</th>
                                <th scope="col">Business email</th>
                                <th scope="col">Business Phone</th>
                                <th scope="col">Views</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(business, index) in businesses" v-bind:key="index"> 
                                <th scope="row">{{ index + 1 }}</th>
                                <td>
                                    <inertia-link :href="route('business.show', {business: business.id})">
                                        {{ business.name }}
                                    </inertia-link>
                                </td>
                                <td>{{ business.contact }}</td>
                                <td>{{ business.email }}</td>
                                <td>{{ business.phones }}</td>
                                <td>{{ business.views }}</td>
                                <td>{{ business.ratings }}</td>
                                <td>{{ business.status == "1" ? 'Active' : 'Not Active' }}</td>
                                <td>  
                                    <a :href="'#!'" @click="editBusiness(business)">Edit</a> | 
                                     <a :href="'#!'" @click="deleteBusiness(business)">Delete</a> |
                                     <a :href="'#!'" @click="toggleBusiness(business)">{{ business.status == "1" ? 'Deactivate' : 'Activate' }}</a> 
                                </td>
                            </tr>
                            </tbody>
                        </table>
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

export default {
    layout: (h, page) => h(Layout, [page]),
    layout: Layout,
    computed: {
        componentName() {
            return "business-create-modal";
        },             
        componentProps() {
            if (this.business) {
                console.log("customer---x", this.business)
                return {
                    business: this.business
                };
            } 
            else 
                return {}; // return empty object
        },

    },    
    created(){
        console.log("businesses =>", this.businesses, this.errors);
    },
    props: {
        businesses: {
            type: Array,
            default: []
        },
        errors: {
            type: Object
        }
    },   
    watch :{
        errors: function (newVal, oldVal) {
            console.log('Prop changed: ', newVal, ' | was: ', oldVal);
        },
    },    
    components: {BusinessCreateModal},
    data(){
        return {
            form: {
                email: "",
                password: ""
            },
            business: null,
        }
    },
    methods: {
        editBusiness(business) {
            this.business = business;
            console.log("checking",this.business);
            this.$nextTick(() => this.$refs.modal.show(business));
        }, 
        async toggleBusiness(business) {
            this.business = business;
            console.log("checking",this.business);
            await this.$inertia.post(this.route('business.activate', {business: this.business.id}));
        }, 
        async deleteBusiness(business) {
            this.loading = true;
            console.log("business store", business);
            this.loading = false;
            this.$refs.modal.hide();                    
            await this.$inertia.delete(this.route('business.delete', {business: business.id}));
        },      
    }
}
</script>