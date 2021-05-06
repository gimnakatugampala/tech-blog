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
import { ref } from 'vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Filter,
    PostList
  },
  setup(){
    const posts = ref([])
    const error = ref(null)

    const load = async () =>{
      try{
        let data = await fetch('http://localhost:3000/blogs')
        if(!data.ok){
          throw Error('No Data Available!')
        }
        posts.value = await data.json();
      }
      catch(err){
        error.value = err.message
        console.log(error.value)
      }
    }

    load()

    return {posts}
  }
}

</script>
