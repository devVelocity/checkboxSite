<template>
<template>
    <div class="w-full h-20 bg-green-900 flex pt-4 pb-4 lg:pl-40 lg:pr-40 items-center pl-4 pr-4 justify-between">
      <div>
        <h1 class="text-2xl text-white"><b>Task</b><span class="text-light">Track</span></h1>
      </div>
      <div>
        <router-link class="pr-8 pl-8 text-white text-opacity-70 hover:text-opacity-100 duration-100 bg-neutral-800 ml-4 mr-4 pt-2 pb-2 rounded-md bg-opacity-50 hover:bg-opacity-100" to="/">Home</router-link>
         <router-link v-if="!loggedIn" class="pr-8 pl-8 text-white text-opacity-70 hover:text-opacity-100 duration-100 bg-neutral-800 ml-4 mr-4 pt-2 pb-2 rounded-md bg-opacity-50 hover:bg-opacity-100" to="/board">Sign In / Register</router-link>
        <router-link v-if="loggedIn" class="pr-8 pl-8 text-white text-opacity-70 hover:text-opacity-100 duration-100 bg-neutral-800 ml-4 mr-4 pt-2 pb-2 rounded-md bg-opacity-50 hover:bg-opacity-100" to="/board">Your Board</router-link>
      </div>
    </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->

</template>

<script>
export default {
  name: 'nav',
  data(){
    return{
      loggedIn: false,
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
