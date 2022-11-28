<script setup lang="ts">


import { reactive } from 'vue'

const trendings = reactive([
    {
        index: 0,
        gender: 'Entertainment',
        label: '#DCcomics',
        stats: '87,9 mil Posts'
    },
    {
        index: 0,
        gender: 'Entertainment',
        label: '#Marvel',
        stats: '75,9 mil Posts'
    },
    {
        index: 0,
        gender: 'Anime',
        label: '#Naruto',
        stats: '25,9 mil Posts'
    },

])


</script>
<template>
    <div class="w-full h-full flex flex-col py-5 px-5 bg-ll-base dark:bg-ld-base">

        <ul class="w-full bg-ll-neutral dark:bg-ld-neutral p-5 rounded-md mb-5">
            <li class="dark:text-gray-200 text-gray-700 text-xl  border-b pb-3 border-ll-border dark:border-ld-border">
                <p>Worldwide Trending</p>
            </li>
            <li class="mb-4">
                <p class="text-xl dark:text-gray-200 text-gray-700 font-bold">#Desencantada</p>
                <p class="text-sm">Original film, Watch now on HBO Max </p>
            </li>
            <li class="mb-4" v-for="(trending, index) in trendings" :key="index">
                <p class="text-sm">{{ index + 1 }} - {{ trending.gender }} </p>
                <p class="text-xl dark:text-gray-200 text-gray-700 font-bold">{{ trending.label }}</p>
                <p class="text-sm">{{ trending.stats }}</p>
            </li>
        </ul>
        <ul class="w-full bg-ll-neutral dark:bg-ld-neutral p-5 rounded-md mb-5">
            <li
                class="dark:text-gray-200 text-gray-700 text-xl  border-b pb-3 border-ll-border dark:border-ld-border mb-4">
                <p>Who to follow</p>
            </li>
            <div v-for="(item) in [0, 1, 2, 3]" :key="item" class="flex items-center mb-4">
                <div
                    class="avatar rounded-full bg-ll-base dark:bg-ld-base w-15 h-15 border-2 border-ll-border dark:border-ld-border relative ">
                    <img :src="`https://picsum.photos/id/${21 + item}/200/200`"
                        class="w-full h-full  rounded-full object-cover" alt="">
                </div>
                <div class="flex flex-col ml-2">
                    <p class="text-xl font-bold text-gray-800 dark:text-gray-300">Lukebana</p>
                    <p class="-mt-1">@luk3d</p>
                </div>

                <div class="flex text-ll-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-6 h-6 -mt-4 ml-2">
                        <path fill-rule="evenodd"
                            d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </ul>

    </div>
</template>
<script lang="ts">
export default {

}
</script>
