<template>
    <div class="wrapper">
       <Nuxt/>
    </div>
</template>

<script>

export default {
   head() {
       return {
           title: 'Login',
           bodyAttrs: {
               class: 'bg-login'
           }
       }
   },
}
</script>