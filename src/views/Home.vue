<template>
  <div class="home">
   <Navbar />
   <div class="container mt-5">
     <Filter />
     <PostList :posts="posts"/>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Filter from '@/components/Filter.vue'
import PostList from '@/components/PostList.vue'
import getPosts from '../composables/getPosts.js'


export default {
  name: 'Home',
  components: {
    Navbar,
    Filter,
    PostList
  },
  setup(){

    const {posts ,error ,load} = getPosts()

    load()

    return {posts}
  }
}

</script>
