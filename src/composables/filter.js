import { computed, ref } from 'vue'

const postFilter = (posts) =>{
    const search = ref('')

    const postMatch = computed(() =>{
        return posts.value.filter((post) => post.include(search.value))
    })

    return {search ,postMatch}

}

export default postFilter