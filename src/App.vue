<template>
  <navigation/>
  <router-view/>
</template>

<style>

</style>

<script>

import navigation from '@/components/nav.vue'



export default {
  name: 'app',
  data(){
    return{
      isUserLoggedIn: false,
    }
  },
  mounted(){

  },
  components: {
    navigation
  },
}

</script>