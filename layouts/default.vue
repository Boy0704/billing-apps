<template>
    <div class="wrapper">
        <app-sidebar />
        <app-header />
        <div class="page-wrapper">
            <div class="page-content">
                <Nuxt/>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/layout/Sidebar.vue';
import Header from '../components/layout/Header.vue';
export default {
    components: {
        'app-sidebar': Sidebar,
        'app-header': Header
    }
}
</script>