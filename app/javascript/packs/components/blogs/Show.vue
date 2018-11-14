<template>
    <div class="container">
        <p><h1>Title: {{title}} </h1></p>

        <p><h2>Content</h2></p>
        <vue-simple-markdown :source="content" v-highlight>{{content}}</vue-simple-markdown>
    </div>
</template>

<script>
import axios from 'axios';
import { VueSimpleMarkdown } from 'vue-simple-markdown';

export default {
    data: function() {
        return {
            title: "",
            content: ""
        }
    },
    components: {
        'vue-simple-markdown': VueSimpleMarkdown
    },
    mounted: function() {
        this.getPost();
    },
    methods: {
        getPost: function() {
            const id = String(this.$route.path).replace(/\/blogs\//, '');

            axios.get('/api/posts/' + id).then((response) => {
                this.title = response.data.title;
                this.content = response.data.content;
            }, (error) => {
                alert(error);
            })
        }
    }

}
</script>