<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <inertia-link class="navbar-brand" :href="route('home')">
                    <svg viewBox="0 0 512 512" height="25" class="text-center"
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
            </inertia-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item" v-if="!$page.auth.user">
                        <inertia-link class="nav-link" :href="route('login')">
                            login
                        </inertia-link>
                    </li>
                    <li class="nav-item" v-if="$page.auth.user">
                        <span class="nav-link">
                            Welcome, {{ $page.auth.user.name }}
                        </span>
                    </li>


                    <li class="nav-item">
                        <inertia-link class="nav-link" method="get" :href="route('categories')">
                            Categories
                        </inertia-link>
                    </li>                    

                    <li class="nav-item">
                        <inertia-link class="nav-link" method="get" :href="route('business')">
                            Businesses
                        </inertia-link>
                    </li>                    

                    <li class="nav-item" v-if="$page.auth.user">
                        <inertia-link class="nav-link" method="post" :href="route('logout')">
                            logout
                        </inertia-link>
                    </li>
                    
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Welcome Admin!
                        </a>

                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Logout</a>            
                        </div>
                    </li> -->


                </ul>
                <form @submit.prevent="submit" class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" v-model="form.q" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>        
    </div>    
</template>

<script>
export default {
    mounted(){
        console.log("this.page", this.$page);
    },
    data(){
        return {
            form: {}
        }
    },    
     methods: {
        async submit() {
            this.loading = true;
            console.log("sending form", this.form);
            await this.$inertia.post(this.route('search'), this.form);
        }, 
     }
}
</script>