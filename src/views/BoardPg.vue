<template>
    <div>
        <h1>Board Pg</h1>
    </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth"
const auth = getAuth()

    export default {
        mounted(){
            onAuthStateChanged(auth)
            .then((user) => {
                if (!user){
                    this.$router.push("/")
                }
            })
        }
    }
</script>

<style scoped>

</style>