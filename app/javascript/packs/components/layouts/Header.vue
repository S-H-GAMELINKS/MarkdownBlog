<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <router-link to="/" class="navbar-brand">Markdown Blog</router-link>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <router-link to="/" class="dropdown-item">Top</router-link>
                    <router-link to="/about" class="dropdown-item">About</router-link>
                    <router-link to="/contact" class="dropdown-item">Contact</router-link>
                    <router-link to="/blogs" class="dropdown-item">Blogs</router-link>
                    <router-link to="/blogs/new" class="dropdown-item">New Post</router-link>
                </div>
            </div>
        </nav>
    </div>
</template>