<script setup lang="ts">


const props = defineProps({
    oneColumn: Boolean,
    showPostComposer: {
        type: Boolean,
        required: true
    }
})

const feedPosts: IPost[] = reactive(Posts);

let leftPosts: IPost[] = reactive([]);
let rightPosts: IPost[] = reactive([]);

watch(feedPosts, (val) => {
    sortList();
});

onMounted(sortList);

function sortList() {

    feedPosts.forEach((post, index) => {
        if ((index % 2) != 0) {
            leftPosts.push(post);
        } else {
            rightPosts.push(post);
        }
    });
}


</script>

<template >
    <div
        :class="`grid-cols-1 w-full grid ${props.oneColumn ? 'md:grid-cols-1 px-20 pt-5' : 'md:grid-cols-2'} transition-all`">
        <div
            :class="` transition-all ${props.oneColumn ? 'col-span-1' : 'col-span-1 md:col-span-2 mt-2'}  ${props.showPostComposer ? 'h-70 p-5' : 'h-0 p-0'} overflow-hidden mx-2 bg-ll-neutral dark:bg-ld-neutral rounded-md  flex flex-col relative`">
            <textarea class="w-full h-full rounded-md bg-ll-base dark:bg-ld-base p-4 outline-none text-lg"
                placeholder="What's happening?" resize="none"></textarea>
            <div class="w-full flex items-center justify-between pt-3 ">
                <div class="flex">
                    <button @click="$emit('onMenuClick')"
                        class="w-10 h-10 mr-2 border rounded-md flex justify-center items-center  border-ll-border dark:border-ld-border bg-ll-base dark:bg-ld-base dark:text-gray-500 active:scale-95 transition-transform transform">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </button>
                    <button @click="$emit('onMenuClick')"
                        class="w-10 h-10 mr-2 border rounded-md flex justify-center items-center  border-ll-border dark:border-ld-border bg-ll-base dark:bg-ld-base dark:text-gray-500 active:scale-95 transition-transform transform">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                        </svg>
                    </button>
                </div>
                <div class="flex">

                    <button
                        class=" text-sm px-3 py-2 bg-ll-primary text-white dark:bg-ld-primary rounded-md flex items-center active:scale-95 transform transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>

                        Share
                    </button>
                </div>


            </div>
            <button @click="$.emit('onCloseComposePost')"
                class="w-8 h-8 absolute -top-0 -right-1 bg-ll-neutral dark:bg-ld-neutral text-sm  border-ll-border dark:border-ld-border border   rounded-full flex items-center mr-2 active:scale-95 transform transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-full h-full">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </button>
        </div>
        <div class="flex flex-col p-2 ">
            <Post v-for="(post, index) in rightPosts" :post="post" :key="index"></Post>
        </div>
        <div class="flex flex-col p-2 ">
            <Post v-for="(post, index) in leftPosts" :post="post" :key="index"></Post>
        </div>

    </div>
</template>
<script lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import Post from '../components/Post.vue';
import { IPost } from '../types';
import { Posts } from './processFeedPosts';

export default {
    components: { Post }
}
</script>
