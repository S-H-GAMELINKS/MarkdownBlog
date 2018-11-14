<template>
    <div class="container">
        <form>
            <div class="form-group">
                <label>Tittle</label>
                <input class="form-control" v-model="title" placeholder="Input your post title ......">
            </div>
            <div class="form-group">
                <label>Content</label>
                <textarea class="form-control" rows="20"  v-model="content" placeholder="Input your post content ......"></textarea>
            </div>
        </form>
        <p>
            <button type="button" class="btn btn-primary" v-on:click="createPost">Create</button>
        </p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data: function() {
        return {
            title: "",
            content: ""
        }
    },
    methods: {
        createPost: function() {
            axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content');
            axios.defaults.headers['content-type'] = 'application/json';

            axios.post('/api/posts', {post: {title: this.title, content: this.content}}).then((response) => {
                alert("Success!");
            }, (error) => {
                alert(error);
            })
        }
    }

}
</script>