<template>
    <div class="row">
        <div class="col-md-6 offset-md-3 my-5">
            
            <div class="form-group">
                <div class="card">

                    <div class="card-body">
                        <h3 class="text-center my-4">Admin Login</h3>
                        
                        <div class="form-group">
                           
                            <input v-model="form.email" placeholder="Email" type="text" class="form-control">
                        </div>


                        <div class="form-group">
                            <input v-model="form.password" placeholder="Password" type="password" class="form-control">
                        </div>


                        <div class="form-group text-center">
                            <button @click="loginUser" class="btn btn-primary form-control">
                                Login
                            </button>
                        </div>

                    </div>                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    data(){
        return {
            form: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        loginUser() {
            console.log(this.form);
            this.$inertia.post(this.route('login'), this.form);      
        }
    }
}
</script>