<template>
    <div class="flex justify-around p-4 text-gray-600  font-semibold text-base bg-white">
        <div>
            For program related questions, please contact your school.
        </div>
        <div class="flex flex-col gap-2">
            <div>
                For technical/system related questions, please call TuitionFlex Customer Service at
            </div>
            <div class="flex">
                <PhoneIcon />
                <span>&nbsp;&nbsp;(866) 758-7123</span>
            </div>
            <div>or write us at</div>
            <div class="flex">
                <EmailIcon />
                <span>&nbsp;&nbsp;customerservice@tuitionflex.com</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import PhoneIcon from '@/components/Icons/PhoneIcon.vue'
import EmailIcon from '@/components/Icons/EmailIcon.vue'

</script>
