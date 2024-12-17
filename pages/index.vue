<template>
  <NuxtLayout class="space-y-6">
    <div v-if="complaints.length === 0" class="text-center text-gray-500">
      <p>Пока нет жалоб.</p>
    </div>

    <div v-else>
      <div class="flex flex-col gap-3 max-h-[70vh] overflow-y-auto">
        <div
          v-for="complaint in complaints"
          :key="complaint.id"
          class="bg-white p-4 rounded-lg shadow"
        >
          <h2 class="text-lg font-semibold">{{ complaint.title }}</h2>
          <p class="text-gray-600">{{ complaint.description }}</p>
          <div class="flex gap-3 mt-3">
            <span class="font-light text-lg">{{ complaint.name }}</span>
            <span class="font-light text-lg"> {{ complaint.contact }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="fixed bottom-24 right-4 space-x-4">
      <button
        @click="shareComplaintLink"
        class="bg-green-500 text-white px-4 py-2 rounded-full shadow"
      >
        Поделиться ссылкой
      </button>
      <button
        @click="openComplaintForm"
        class="bg-blue-500 text-white px-4 py-2 rounded-full shadow"
      >
        Подать жалобу
      </button>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useComplaintsStore } from "~/stores/complaints";

const complaintsStore = useComplaintsStore();
const complaints = ref(complaintsStore.complaints);

const openComplaintForm = () => {
  navigateTo("/complaint");
};

const shareComplaintLink = () => {
  const link = window.location.origin + "/complaint";
  if (navigator.share) {
    navigator.share({
      title: "Подать жалобу",
      text: "Поделитесь ссылкой для подачи жалобы",
      url: link,
    });
  } else {
    alert(`Скопируйте ссылку: ${link}`);
  }
};
</script>

<style scoped>
/* Дополнительные стили, если необходимо */
</style>
