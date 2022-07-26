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
  components: {
    navigation
  }
}

</script>