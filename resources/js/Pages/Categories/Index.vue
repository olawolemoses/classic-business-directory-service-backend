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
                        Categories
                    </h1>
                </div>                
                <div class="card-body">

                        <button class="btn btn-outline-primary align-self-end" @click="$refs.modal.show()">
                            Create Category
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
                                <th scope="col">Name</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(category, index) in categories" v-bind:key="index"> 
                                <th scope="row">{{ index + 1 }}</th>
                                <td>{{ category.name }}</td>
                                <td>  
                                    <a :href="'#!'" @click="editCategory(category)">edit</a> | 
                                     <a :href="'#!'" @click="deleteCategory(category)">delete</a> 
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
import CategoryCreateModal from "./CategoryCreateModal";

export default {
    layout: (h, page) => h(Layout, [page]),
    layout: Layout,
    computed: {
        componentName() {
            return "category-create-modal";
        },             
        componentProps() {
            if (this.category) {
                console.log("customer---x", this.category)
                return {
                    category: this.category
                };
            } 
            else 
                return {}; // return empty object
        },

    },    
    created(){
        console.log("categories =>", this.categories, this.errors);
    },
    props: {
        categories: {
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
    components: {CategoryCreateModal},
    data(){
        return {
            form: {
                email: "",
                password: ""
            },
            category: null,
        }
    },
    methods: {
        editCategory(category) {
            this.category = category;
            console.log("checking",this.category);
            this.$nextTick(() => this.$refs.modal.show(category));
        }, 
        async deleteCategory(category) {
            this.loading = true;
            console.log("category store", category);
            this.loading = false;
            this.$refs.modal.hide();                    
            await this.$inertia.delete(this.route('categories.delete', {category: category.id}));
        },      
    }
}
</script>