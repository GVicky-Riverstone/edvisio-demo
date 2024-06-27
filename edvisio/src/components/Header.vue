<template>
    <div class="flex justify-between p-5 bg-white">
        <div class="px-20">
            <img src="/public/edvisio.png" alt="Edvisio" width="100">
        </div>
        <div class="flex items-center cursor-pointer group px-20">
            <LogoutIcon class="mr-2 group-hover:text-lg transition-all duration-300" />
            <span class="text-base font-semibold group-hover:text-green-700 transition-all duration-300">Log Out</span>
        </div>
    </div>
</template>

<script setup>
import LogoutIcon from '@/components/Icons/LogoutIcon.vue'
</script>
