<template>
    <div id="app">
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'about',
        components: {
            Footer
        }
    }
</script>