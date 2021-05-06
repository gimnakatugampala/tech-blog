<template>
    <div class="card" v-for="post in posts" :key="post.id">
        <SinglePost :post="post"/>
    </div>
</template>

<script>
import SinglePost from '@/components/SinglePost.vue'

export default {
    props:['posts'],
    components:{SinglePost},
    setup() {
        
    }
}
</script>

<style>
.card-body{
    background:rgb(189, 176, 176)
}
</style>

