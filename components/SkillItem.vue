<template>
    <div class="text-center">
        <span class="h5">{{label}}</span>
        <div>
            <fa v-for="(i, index) in new Array(5)" :key="index"
                :icon="level-1 >= index ? ['fas', 'plus-circle'] : ['far', 'circle']"
                class="text-secondary"
                style="font-size: 30px;"
            />
        </div>
        <p class="mt-2">
            <slot/>
        </p>
    </div>
</template>

<script>
export default {
    props: ['label', 'level'],
}
</script>