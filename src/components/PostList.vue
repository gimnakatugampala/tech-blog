<template>
    <div class="card" v-for="post in posts" :key="post.id">
    <h5 class="card-header">#{{post.id}} - {{post.title}}</h5>
    <div class="card-body">
    <h5 class="card-title">{{post.body}}</h5>
    <a href="#" class="btn btn-primary mx-2" v-for="tags in post.tags">#{{tags}}</a>
  </div>
</div>
</template>

<script>
export default {
    props:['posts'],
    setup(posts) {
        console.log(posts)
    }
}
</script>

<style>
.card-body{
    background:rgb(189, 176, 176)
}
</style>

