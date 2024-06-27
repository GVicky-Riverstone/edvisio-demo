<template>
    <div class="flex flex-col h-screen w-screen">
        <div class="w-full border-r bg-white">
            <Header />
        </div>
        <div class="flex-1 flex flex-col w-full overflow-auto bg-gray-100">
            <div class="flex justify-center items-center flex-1">
                <div class="w-10/12 h-auto my-7 bg-white shadow-md shadow-gray-400 rounded-sm p-4">
                    <slot />
                </div>
            </div>
        </div>
        <div class="w-full border-r bg-white">
            <Footer />
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
// import Body from '@/components/Body.vue'
import Footer from '@/components/Footer.vue'
</script>
