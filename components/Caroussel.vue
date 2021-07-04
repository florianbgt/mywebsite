<template>
    <div class="mx-auto" style="max-width: 150px">
        <b-carousel :interval="3000" class="w-100">
            <b-carousel-slide v-for="image in images" :key="image.path">
                <template v-slot:img>
                    <nuxt-img :src="image.path" :alt="image.alt" style="width: 100%; height: 100px; object-fit: contain"/>
                </template>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                {path: '/vuejs.png', alt: 'vue.js'},
                {path: '/nuxtjs.png', alt: 'nuxt.js'},
                {path: '/django.png', alt: 'django'},
                {path: '/python.png', alt: 'python'},
                {path: '/javascript.png', alt: 'javascript'},
                {path: '/docker.png', alt: 'docker'}
            ]
        }
    }
}
</script>