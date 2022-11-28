<script setup lang="ts">


import { reactive } from 'vue'

const menus = reactive({
    active: 0,
    menusList: [
        {
            index: 0,
            name: "Home",
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                `
        },
        {
            index: 1,
            name: "Explore",
            icon: `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>

                `
        },
        {
            index: 6,
            name: "Notifications",
            icon: `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
            </svg>

                `
        },
        {
            index: 2,
            name: "Favorite",
            icon: `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
                `
        },
        {
            index: 3,
            name: "Direct",
            icon: `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
                `
        },
        {
            index: 4,
            name: "Stars",
            icon: `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
                `
        },
        {
            index: 5,
            name: "Settings",
            icon: `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
                `
        },
    ]
})


const props = defineProps({
    isExpanded: {
        type: Boolean,
        required: true
    }
})


</script>
<template>
    <div :class="`w-full h-full flex flex-col ${props.isExpanded ? 'p-10' : 'p-2'}`">
        <div class="profile flex flex-col justify-center items-center">
            <div
                :class="`avatar rounded-full bg-ll-base dark:bg-ld-base ${props.isExpanded ? 'w-35 h-35' : 'w-12 h-12'} border-2 border-ll-border dark:border-ld-border relative`">
                <img src="https://picsum.photos/seed/picsum/200/300" class="w-full h-full  rounded-full object-cover"
                    alt="">

                <div
                    :class="`${props.isExpanded ? 'w-8 h-8 border-4 right-0 bottom-3' : 'w-5 h-5 border-2 -right-2 bottom-0'}  bg-ll-primary rounded-full   absolute  border-ll-base dark:border-ld-base text-white flex justify-center items-center`">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                </div>
            </div>
            <p v-if="props.isExpanded" class="text-2xl font-bold text-gray-800 dark:text-gray-300">Lukebana</p>
            <p class="-mt-1" v-if="props.isExpanded">The creator of this platform</p>
        </div>

        <div v-if="props.isExpanded"
            class="w-full flex justify-between mt-5 pb-5 border-b border-ll-border dark:border-ld-border">
            <div class="flex flex-col justify-center items-center">
                <p class="text-2xl font-bold text-gray-800 dark:text-gray-300">255</p>
                <p class="-mt-1">Posts</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <p class="text-2xl font-bold text-gray-800 dark:text-gray-300">298.45K</p>
                <p class="-mt-1">Followers</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <p class="text-2xl font-bold text-gray-800 dark:text-gray-300">20.5M</p>
                <p class="-mt-1">Following</p>
            </div>
        </div>
        <ul :class="`flex flex-col w-full pt-5 ${props.isExpanded ? '' : 'justify-center flex '}`">
            <li v-for="(menu, index) in menus.menusList" :key="menu.name"
                :class="` w-full py-2  flex items-center ${props.isExpanded ? 'mb-2' : 'justify-center mb-5'} ${menu.index == menus.active ? 'text-ll-primary' : ''} cursor-pointer active:scale-95 transform transition-transform select-none`"
                @click="menus.active = menu.index">
                <div v-html="menu.icon"></div>
                <p v-if="props.isExpanded" class="ml-5">{{ menu.name }}</p>

            </li>
        </ul>

        <button
            class="bg-ll-primary dark:bg-ld-primary text-white rounded-lg py-3 px-2 active:scale-95 transform transition-transform flex items-center justify-center">
            <p v-if="props.isExpanded">Share on Space</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" :class="`${props.isExpanded ? 'w-6 h-6 ml-5' : 'w-full h-full'}`">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>

        </button>
    </div>
</template>
<script lang="ts">
export default {

}
</script>
