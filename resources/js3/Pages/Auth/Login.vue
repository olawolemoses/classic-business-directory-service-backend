<template>
    <div class="row">
        <div class="col-md-6 offset-md-3 my-5">
            
        

            <div class="form-group">
                <div class="card">
                    <form @submit.prevent="submit">
                        <div class="card-body">
                            <h3 class="text-center my-4">
                                    <svg viewBox="0 0 512 512" height="50" class="text-center"
                style="enable-background:new 0 0 512 512;"> <path style="fill:#52D6C6;"
                d="M398.723,512H42.428c-7.797,0-14.176-6.379-14.176-14.176V50.953V14.176
                C28.252,6.379,34.631,0,42.428,0h85.04H384.53h85.04c7.797,0,14.176,6.379,14.176,14.176v483.647
                c0,7.797-6.379,14.176-14.176,14.176h-25.119h-45.728V512z"/> <path
                style="opacity:0.1;enable-background:new    ;"
                d="M469.571,0h-43.578v440.069c0,7.797-6.379,14.177-14.176,14.177h-25.119
                H340.97H28.252v43.577c0,7.797,6.379,14.177,14.177,14.177h356.296h45.729h25.119c7.797,0,14.176-6.379,14.176-14.177V14.176
                C483.747,6.379,477.368,0,469.571,0z"/> <rect x="95.195" y="88.952" style="fill:#FFFFFF;"
                width="64.023" height="64.023"/> <rect x="95.195" y="215.335" style="fill:#F597C6;" width="64.023"
                height="64.023"/> <g> <rect x="95.195" y="341.718" style="fill:#FFFFFF;" width="64.023"
                height="64.023"/> <rect x="206.933" y="88.952" style="fill:#FFFFFF;" width="216.544"
                height="64.023"/> <rect x="206.933" y="215.335" style="fill:#FFFFFF;" width="216.544"
                height="64.023"/> <rect x="206.933" y="341.718" style="fill:#FFFFFF;" width="216.544"
                height="64.023"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g>
                </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
                CBDS Login</h3>
                            
                            <div class="form-group">
                                <input v-model="form.email" placeholder="Email" type="text" class="form-control">
                            </div>
                            <div v-if="$page.errors.email">{{ $page.errors.email[0] }}</div>


                            <div class="form-group">
                                <input v-model="form.password" placeholder="Password" type="password" class="form-control">
                            </div>
                            <div v-if="$page.errors.password">{{ $page.errors.password[0] }}</div>

                            <div class="form-group text-center">
                                <button type="submit" class="btn btn-primary form-control">
                                    Login
                                </button>
                            </div>

                        </div>
                    </form>             
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Layout from '@/Shared/Layout'

export default {
    layout: (h, page) => h(Layout, [page]),

    layout: Layout,

    props: {
        errors: Object,
    },
    watch :{
        errors: function (newVal, oldVal) {
            console.log('Prop changed: ', newVal, ' | was: ', oldVal)
        },
    },
    data(){
        return {
            form: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
         async submit() {
            console.log(this.form);
            await this.$inertia.post(this.route('login'), this.form);   
        },   
    }
}
</script>