<template>
  <div class="container">
    <input type="text" v-model="user">
    <button v-on:click="login">Login</button>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    data() {
      return {
        user: "",
        address: "https://go-chat-zeno0119.herokuapp.com"
      }
    },
    methods: {
      login: function(){
        let params = new URLSearchParams()
        params.append("user", this.user)
        axios.post(this.address + "/api/login", params)
                .then(() => {
                  this.$router.push('/chat/')
                })
      }
    }
  }
</script>

<style>
</style>
