<script setup lang="ts">

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
    <div class="w-full grid grid-cols-2 ">
        <div class="flex flex-col p-2 ">
            <Post v-for="(post, index) in leftPosts" :post="post" :key="index"></Post>
        </div>
        <div class="flex flex-col p-2 ">
            <Post v-for="(post, index) in rightPosts" :post="post" :key="index"></Post>
        </div>
    </div>
</template>
<script lang="ts">
import { onMounted, reactive, watch } from 'vue';
import Post from '../components/Post.vue';
import { IPost } from '../types';
import { Posts } from './processFeedPosts';

export default {
    components: { Post }
}
</script>
