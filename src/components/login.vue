<template>
    <div class="fixed top-0 w-screen h-8 z-50 flex items-center pl-8 pt-8">
        <h1 class="opacity-70 hover:opacity-100 duration-100 relative test">🡨 Go Back</h1>
    </div>
    <div id="logincomponent" class="fixed top-0 w-screen h-screen z-40 bg-gray-100 flex items-center justify-center">
        <div class="bg-gray-300 p-8 rounded-lg">
            <h1 class="text-3xl font-semibold text-gray-700">Login to your account</h1>
            <div class="mt-8">
                <input v-model="username" class="rounded-md w-full p-2 pl-2 pr-4" placeholder="Username">
                <input v-model="password" class="rounded-md w-full p-2 pl-2 pr-4 mt-3" placeholder="Password">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['isLoggedIn'],
        data(){
            return{
                username: "",
                password: ""
            }
        },
        methods:{
            logIn(){
                this.$root.isUserLoggedIn = true
                this.$emit('userHasLoggedIn')
            }
        }
    }
</script>

<style scoped>

</style>