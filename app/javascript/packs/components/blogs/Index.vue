<template>
    <div class="container">
        <p v-for="(post, key, index) in posts" :key=index>
            <router-link :to="{name: 'show', params: {id: post.id}}"><h1>{{post.title}}</h1></router-link>
            <router-link :to="{name: 'edit', params: {id: post.id}}">Edit</router-link>
            <button type="button" class="btn btn-primary" v-on:click="deletePost(post.id)">Delete</button>
        </p>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data: function() {
        return {
            posts: []
        }
    },
    mounted: function() {
        this.getPosts();
    },
    methods: {
        getPosts: function() {
            axios.get('/api/posts').then((response) => {
                for(var i = 0; i < response.data.length; i++) {
                    this.posts.push(response.data[i]);
                }
            }, (error) => {
                console.log(error);
            })
        },
        deletePost: function(id) {
            axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content');
            axios.defaults.headers['content-type'] = 'application/json';

            axios.delete('/api/posts/' + String(id)).then((response) => {

                for(var i = 0; i < this.posts.length; i++) {
                    if(this.posts[i].id === id) {
                        this.posts.slice(1, id);
                    }
                }

                alert("Delete it!");
            }, (error) => {
                alert(error);
            })
        }
    }

}
</script>

<style>

</style>
