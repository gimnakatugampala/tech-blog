<template>
  <div class="home">
   <Navbar />
   <div class="container mt-5">
     <Filter />
     <PostList />
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Filter from '@/components/Filter.vue'
import PostList from '@/components/PostList.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Filter,
    PostList
  }
}
</script>
