<script>
import AppNavbar from './components/AppNavbar.vue';
import AppHome from './pages/AppHome.vue';
import AppFooter from './components/AppFooter.vue'
export default {
    components: {
        AppNavbar,
        AppHome,
        AppFooter,
    }
}
</script>

<template>
    <AppNavbar />

    <router-view></router-view>

    <AppFooter />
</template>

<style scoped></style>
