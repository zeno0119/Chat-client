<template>
    <div>
        <div v-for="el in logs" v-bind:key="el.timestamp" style="border: solid 1px;">
            <p>{{el.content}}</p>
        </div>
        <input type="text" v-model="content">
        <button v-on:click="post">post</button>
        <button v-on:click="get">update</button>
    </div>
</template>

<script>
    import axios from "axios"

    export default {
        data(){
            return {
                logs: "",
                content: ""
            }
        },
        methods: {
            post(){
                let params = new URLSearchParams()
                params.append("timestamp", new Date().toString())
                params.append("content", this.content)

                axios.post("http://localhost:8080/api/post", params)
                    .then(res => {
                        this.logs = res.data
                        console.log(res.data)
                    })
            },

            get(){
                axios.get("http://localhost:8080/api/get")
                    .then(res => {
                        this.logs = res.data
                        console.log(res)
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>