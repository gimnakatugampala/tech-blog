<template>
  <div class="home">
   <Navbar />
   <div class="container mt-5">

     <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Search Post" aria-label="Example text with button addon" aria-describedby="button-addon1">
</div>

     <div v-if="posts.length">
     <PostList :posts="posts"/>
     </div>
      <div v-else>
       <h1>Loading...</h1>
      </div>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import PostList from '@/components/PostList.vue'
import getPosts from '../composables/getPosts.js'



export default {
  name: 'Home',
  components: {
    Navbar,
    PostList
  },
  setup(){

    const {posts ,error ,load} = getPosts()
    // const {search ,postMatch} = postFilter(posts)

    // console.log(posts.value)

    load()

    return {posts}
  }
}

</script>
