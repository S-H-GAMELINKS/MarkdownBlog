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
            <button type="button" class="btn btn-primary" v-if="creatable" v-on:click="createPost">Create</button>
            <button type="button" class="btn btn-primary" v-if="editable" v-on:click="editPost">Update</button>
        </p>
    </div>
</template>

<script>
import axios from 'axios';
import router from '../../router/router';

export default {
    data: function() {
        return {
            title: "",
            content: "",
            creatable: false,
            editable: false
        }
    },
    mounted: function() {
        this.checkAddress();
        if(this.editable) {
            this.getPost();
        }
    },
    methods: {
        checkAddress: function() {
            const url = String(this.$route.path);

            if(url.match(/edit/)) {
                this.editable = true;
            } else {
                this.creatable = true;
            }
        },
        getPost: function() {
            const id = String(this.$route.path).replace(/\/blogs\//, '').replace(/\/edit/, '');

            axios.get('/api/posts/' + id).then((response) => {
                this.title = response.data.title;
                this.content = response.data.title;
            }, (error) => {
                alert(error);
            })
        },
        createPost: function() {
            axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content');
            axios.defaults.headers['content-type'] = 'application/json';

            axios.post('/api/posts', {post: {title: this.title, content: this.content}}).then((response) => {
                alert("Success!");
                router.push({path: '/blogs'});
            }, (error) => {
                alert(error);
            })
        },
        editPost: function() {
            axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content');
            axios.defaults.headers['content-type'] = 'application/json';

            const id = String(this.$route.path).replace(/\/blogs\//, '').replace(/\/edit/, '');

            axios.put('/api/posts/' + id, {post: {title: this.title, content: this.content}}).then((response) => {
                alert("Success!");
                router.push({path: '/blogs'});
            }, (error) => {
                alert(error);
            })
        }
    }

}
</script>