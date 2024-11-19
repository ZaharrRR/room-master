<template>
  <NuxtLayout class="space-y-6">
    <h1 class="text-2xl font-bold">Подать жалобу</h1>

    <form @submit.prevent="submitComplaint" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Имя</label
        >
        <input
          v-model="name"
          type="text"
          id="name"
          class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label for="contact" class="block text-sm font-medium text-gray-700"
          >Контактная информация (номер телефона или email)</label
        >
        <input
          v-model="contact"
          type="text"
          id="contact"
          class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label for="title" class="block text-sm font-medium text-gray-700"
          >Заголовок</label
        >
        <input
          v-model="title"
          type="text"
          id="title"
          class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label for="description" class="block text-sm font-medium text-gray-700"
          >Описание</label
        >
        <textarea
          v-model="description"
          id="description"
          rows="4"
          class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-md shadow"
        >
          Отправить
        </button>
      </div>
    </form>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useComplaintsStore } from "~/stores/complaints";

const complaintsStore = useComplaintsStore();

const name = ref("");
const contact = ref("");
const title = ref("");
const description = ref("");

const submitComplaint = () => {
  complaintsStore.addComplaint({
    id: Date.now(), // Просто для примера
    name: name.value,
    contact: contact.value,
    title: title.value,
    description: description.value,
  });

  // Очистка формы
  name.value = "";
  contact.value = "";
  title.value = "";
  description.value = "";

  // Перенаправление на главную страницу
  navigateTo("/");
};
</script>

<style scoped>
/* Дополнительные стили, если необходимо */
</style>
