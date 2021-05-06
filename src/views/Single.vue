<template>
<Navbar />
<div class="container mt-5">
    <div class="card">
        <h5 class="card-header">#{{post.id}} - {{post.title}}</h5>
    <div class="card-body">
    <h5 class="card-title">{{post.body}}</h5>
    <a href="#" class="btn btn-primary mx-2" v-for="tags in post.tags">#{{tags}}</a>
    </div>
    </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import getPost from '../composables/getPost.js'


export default {
    props:['id'],
    components:{
        Navbar
    },
    setup(props){
        const {post,error,load} = getPost(props.id)
        load();

        return  {post,error}
        
    }

}
</script>

<style>

</style>