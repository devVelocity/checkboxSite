<template>
    <div class="h-screen bg-black">

    </div>
</template>

<script>
    import { getAuth, onAuthStateChanged } from "firebase/auth"
    import { getDatabase } from "firebase/database";
    const database = getDatabase();
    export default {
        created(){
            const auth = getAuth()
            onAuthStateChanged(auth, (user) => {
                if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // this.$router.push("board")
                // ...
                } else {
                this.$router.push("/")
                // User is signed out
                // ...
                }
            })
        },
    }
</script>

<style scoped>

</style>