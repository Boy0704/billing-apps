<template>
    <div class="wrapper">
        <app-sidebar v-if="isAuthenticated"/>
        <app-header v-if="isAuthenticated"/>
        <div class="page-wrapper" v-if="isAuthenticated">
            <div class="page-content">
                <Nuxt />
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/layout/Sidebar.vue';
import Header from '../components/layout/Header.vue';
import { mapGetters } from 'vuex'
export default {
    components: {
        'app-sidebar': Sidebar,
        'app-header': Header
    },
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser'])
    }

}
</script>