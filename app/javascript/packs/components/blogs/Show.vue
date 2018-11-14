<template>
    <div class="container">
        <label>Title: {{title}} </label>

        <label>Content</label>
        {{content}}
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
    mounted: function() {
        this.getPost();
    },
    methods: {
        getPost: function() {
            const id = String(this.$route.path).replace(/\/blogs\//, '');

            axios.get('/api/posts/' + id).then((response) => {
                this.title = response.data.title;
                this.content = response.data.title;
            }, (error) => {
                alert(error);
            })
        }
    }

}
</script>