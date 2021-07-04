<template>
    <b-row class="my-4">
        <b-col sm=6>
            <table>
                <tr v-if="title" class="h5">
                    <td class="text-center"><fa v-if="'icon' in title" :icon="title.icon" style="font-size: 30px"/></td>
                    <td>{{title.value}}</td>
                </tr>
                <tr v-if="date" class="h5 text-secondary">
                    <td class="text-center"><fa :icon="['far', 'calendar-alt']" style="font-size: 30px"/></td>
                    <td>{{date}}</td>
                </tr>
            </table>
        </b-col>
        <b-col sm=6>
            <table>
                <tr v-if="place" class="h5">
                    <td class="text-center"><fa v-if="'icon' in place" :icon="place.icon" style="font-size: 30px"/></td>
                    <td>{{place.value}}</td>
                </tr>
                <tr v-if="location" class="h5 text-secondary">
                    <td class="text-center"><fa :icon="['fas', 'map-marker-alt']" style="font-size: 30px"/></td>
                    <td>{{location}}</td>
                </tr>
            </table>
        </b-col>
        <b-col>
            <slot/>
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: ['title','date', 'place', 'location']
}
</script>