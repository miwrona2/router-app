<template>
    <div class="about">
            <h1>About</h1>
        <p>{{ aboutContent }}</p>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            aboutContent: 'Some text in about section'
        }
    }
}
</script>
