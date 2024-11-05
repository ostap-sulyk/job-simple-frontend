<script setup lang="ts">
const { data: company, error } = await useFetch("/api/wealthsimple");

if (error.value) {
    console.error("Error fetching data:", error.value);
}
</script>

<template>
    <div v-if="company" class="w-svw h-svh p-8">
        <h1 class="font-bold text-xl">{{ company.name }}</h1>
        <div
            v-for="opening in company.openings"
            :key="opening._id"
            class="py-2"
        >
            <a class="py-2" :href="opening.url">{{ opening.jobtitle }}</a>
        </div>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>
