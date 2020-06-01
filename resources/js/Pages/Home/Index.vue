<template>

    <div class="row" v-if="businesses" >
        <Business v-for="(business, index) in businesses" v-bind:key="index" :business="business" />
    </div>
</template>

<script>
import Layout from '@/Shared/Layout'
import Business from '@/Pages/Home/Business'

export default {
    layout: (h, page) => h(Layout, [page]),

    layout: Layout, 
    components: {Business},
    data(){
        return {
            form: {}
        }
    },
    props: {
        businesses: {
            type: Array,
            default: []
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