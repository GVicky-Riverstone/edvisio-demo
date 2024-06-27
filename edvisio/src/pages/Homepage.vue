<template>
    <div class="flex h-full divide-x divide-gray-400">
        <div class="w-1/5 text-base text-justify leading-normal p-5">
            <p>
                Welcome, Temeka Adams. From here, you can change your password, 
                check the status of pending applications and edit, continue or 
                cancel incomplete applications. Simply click on the appropriate 
                icon to get started. During a first session, if your school has 
                already initiated and certified an application for you, please 
                click on the green pencil icon below to edit and complete your application. 
                If you are initiating the application yourself, please click on the button 
                that says “Start a new TuitionFlex Application”.
            </p>
        </div>
        <div class="flex flex-col px-5 flex-1">
            <div class="flex justify-between space-x-4 border-b-2 pb-2 mb-4 text-sm font-semibold divide-x divide-gray-400">
                <div :class="{'text-green-700': selectedTab === 'main'}" @click="selectedTab = 'main'" class="flex gap-1 px-2 cursor-pointer">
                    <InformationIcon />
                    MAIN INFORMATION
                </div>
                <div :class="{'text-green-700': selectedTab === 'pending'}" @click="selectedTab = 'pending'" class="flex gap-1 px-2 cursor-pointer">
                    <DocumentIcon />
                    PENDING APPLICATIONS
                </div>
                <div :class="{'text-green-700': selectedTab === 'incomplete'}" @click="selectedTab = 'incomplete'" class="flex gap-1 px-2 cursor-pointer">
                    <DocumentIcon />
                    INCOMPLETE APPLICATIONS
                </div>
                <div :class="{'text-green-700': selectedTab === 'complete'}" @click="selectedTab = 'complete'" class="flex gap-1 px-2 cursor-pointer">
                    <DocumentIcon />
                    COMPLETE APPLICATIONS
                </div>
            </div>
            <div class="flex-1">
                <div v-if="selectedTab === 'main'">
                    <div class="p-6 bg-white rounded-sm shadow-md shadow-gray-400">
                        <div class="mb-3  p-4 bg-gray-100 rounded-sm shadow-md shadow-gray-100 divide-y divide-gray-400">
                          <div class="flex justify-between items-center mb-2">
                            <span class="text-gray-700 font-semibold">Applicant Name</span>
                            <span>Temeka Adams</span>
                          </div>
                          <div>
                                <div class="flex justify-between items-center my-2">
                                    <span class="text-gray-700 font-semibold">Applicant ID</span>
                                    <span>*****1839</span>
                                </div>
                                <button class="px-3 py-1.5 bg-gray-100 hover:bg-white text-green-700 border text-sm font-semibold border-green-700 rounded-sm transition">
                                    CHANGE PASSWORD
                                </button>
                          </div>
                        </div>
                        <div class="mb-3 p-4 bg-gray-100 rounded-sm shadow-md shadow-gray-100 divide-y divide-gray-400">
                            <div>
                                <h2 class="text-lg font-semibold text-gray-800">Mailing Address</h2>
                                <div class="py-2 flex justify-between">
                                    <span class="text-gray-600">Address</span>
                                    <div>755 Odana Ln, Madison, CA, 53711</div>
                                </div>
                            </div>
                            <div class="py-2 flex justify-between">
                                <span class="text-gray-600">City</span>
                                <div>Madison</div>
                            </div>
                            <div class="py-2 flex justify-between">
                                <span class="text-gray-600">State</span>
                                <div>California</div>
                            </div>
                            <div class="py-2 flex justify-between">
                                <span class="text-gray-600">Zip Code</span>
                                <div>53711</div>
                            </div>
                        </div>
                        <div class="mb-3 p-4 bg-gray-100 rounded-sm shadow-md shadow-gray-100 divide-y divide-gray-400">
                            <div>
                                <h2 class="text-lg font-semibold text-gray-800">Permanent Address</h2>
                                <div class="py-2 flex justify-between">
                                  <span class="text-gray-600">Address</span>
                                  <div>755 Odana Ln, Madison, CA, 53711</div>
                                </div>
                            </div>
                            <div class="py-2 flex justify-between">
                                <span class="text-gray-600">City</span>
                                <div>Madison</div>
                            </div>
                            <div class="py-2 flex justify-between">
                                <span class="text-gray-600">State</span>
                                <div>California</div>
                            </div>
                            <div class="py-2 flex justify-between">
                                <span class="text-gray-600">Zip Code</span>
                                <div>53711</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="selectedTab === 'pending'">Pending Applications Form</div>
                <div v-if="selectedTab === 'incomplete'">Incomplete Applications Form</div>
                <div v-if="selectedTab === 'complete'">Complete Applications Form</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import InformationIcon from '@/components/Icons/InformationIcon.vue'
import DocumentIcon from '@/components/Icons/DocumentIcon.vue'

const selectedTab = ref('main');
</script>

<style scoped>
.bg-gray-50 {
    background-color: #f9fafb;
}
.bg-white {
    background-color: #ffffff;
}
.text-gray-600 {
    color: #4b5563;
}
.text-gray-700 {
    color: #374151;
}
.text-gray-800 {
    color: #1f2937;
}
.text-green-700 {
    color: #047857;
}
</style>