
<script setup lang="ts">

import { defineProps, PropType, reactive } from 'vue'
import { IPost } from '../types';
import { extractHashtags } from '../utils';

const props = defineProps({
    post: {
        type: Object as PropType<IPost>,
        required: true
    }
})



function generateDescription() {
    let description = props.post.description.trim().split('\n').join('<br>');


    description = description.replace(/#(\S*)/g, '<a class="text-ll-primary" href="/search/$1">#$1</a>');



    return description;


}




</script>
<template >

    <div class="w-full p-5 bg-ll-neutral dark:bg-ld-neutral rounded-md flex flex-col mb-4">
        <div class="flex justify-between">
            <div class="flex items-center">
                <div
                    class="avatar rounded-full bg-ll-base dark:bg-ld-base w-15 h-15 border-2 border-ll-border dark:border-ld-border relative ">
                    <img src="https://picsum.photos/seed/picsum/200/300"
                        class="w-full h-full  rounded-full object-cover" alt="">
                </div>
                <div class="flex flex-col ml-2">
                    <p class="text-2xl font-bold text-gray-800 dark:text-gray-300">Lukebana</p>
                    <p class="-mt-1">@luk3d</p>
                </div>

                <div class="flex text-ll-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-6 h-6 -mt-4 ml-2">
                        <path fill-rule="evenodd"
                            d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clip-rule="evenodd" />
                    </svg>
                    <p class="-mt-4 ml-2 text-gray-500 ">1h</p>
                </div>
            </div>
            <button class="active:scale-95 transform transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd"
                        d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                        clip-rule="evenodd" />
                </svg>

            </button>
        </div>

        <div v-if="props.post.pictures.length > 0"
            :class="`images w-full h-70 bg-ll-neutral dark:bg-ld-neutral rounded-xl my-4 overflow-hidden grid ${(props.post.pictures.length > 1) ? 'grid-cols-2' : 'grid-cols-1'} gap-2`">
            <div class="h-full">
                <img :src="`${props.post.pictures[0]}`" class="w-full h-70   object-cover" alt="">
            </div>
            <div v-if="props.post.pictures.length > 1" :class="`
            
            h-70 grid ${props.post.pictures.length == 2 ? 'grid-cols-1 grid-rows-1' : ''} 
             ${props.post.pictures.length == 3 ? 'grid-cols-1 grid-rows-2' : ''} 
            ${props.post.pictures.length == 4 ? 'grid-cols-2 grid-rows-2' : ''} 
            

            gap-2`">
                <img v-if="props.post.pictures.length > 1" :src="`${props.post.pictures[1]}`"
                    :class="`w-full h-full   object-cover ${props.post.pictures.length == 3 && 'row-span-1 col-span-1 h-full'}`"
                    alt="">
                <img v-if="props.post.pictures.length > 2" :src="`${props.post.pictures[2]}`"
                    :class="`w-full h-full   object-cover ${props.post.pictures.length == 3 && 'row-span-2 col-span-1'}`"
                    alt="">
                <img v-if="props.post.pictures.length > 3" :src="`${props.post.pictures[3]}`"
                    :class="`w-full h-full   object-cover ${props.post.pictures.length == 4 && 'col-span-2'}`" alt="">
                <img v-if="props.post.pictures.length > 4" :src="`${props.post.pictures[4]}`"
                    :class="`w-full h-2/4   object-cover ${props.post.pictures.length == 5 && 'col-span-3 row-span-1'}`"
                    alt="">

            </div>
        </div>
        <p v-html="generateDescription()" :class="`${props.post.pictures.length == 0 ? ' my-4 text-xl' : ''}`"></p>

        <div class="flex justify-between pt-4 border-t border-ll-border dark:border-ld-border mt-4">
            <button class="flex items-center active:scale-95 transform transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                </svg>
                <p class="ml-2">2.8k</p>
            </button>
            <button class="flex items-center active:scale-95 transform transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>

                <p class="ml-2">1.2k</p>
            </button>
            <button class="flex items-center active:scale-95 transform transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>

                <p class="ml-2">20.17k</p>
            </button>
            <button class="flex items-center active:scale-95 transform transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                </svg>
            </button>
        </div>
    </div>

</template>
<script lang="ts">
export default {

}
</script>
<style lang="">
    
</style>