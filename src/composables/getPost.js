import { ref } from 'vue'

const getPost = (id) => {
    const post = ref([])
    const error = ref(null)

    const load = async () =>{
      try{
        let data = await fetch('http://localhost:3000/blogs/'+id)
        if(!data.ok){
          throw Error('The Post Not Found!')
        }
        post.value = await data.json();
      }
      catch(err){
        error.value = err.message
        console.log(error.value)
      }
    }
    return {post,error,load}
}

export default getPost