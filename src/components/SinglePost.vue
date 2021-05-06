<template>
    <router-link :to="{name: 'Single',params:{ id:post.id}}">
    <h5 class="card-header">#{{post.id}} - {{post.title}}</h5>
    </router-link>
    <div class="card-body">
    <h5 class="card-title">{{post.body}}</h5>
    <a href="#" class="btn btn-primary mx-2" v-for="tags in post.tags">#{{tags}}</a>
  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    props:['post'],
    components: {
    Navbar
  },
  setup(){

  }

}
</script>

<style>

</style>