<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <!-- Header -->
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-2xl font-bold text-gray-800">Жалобы клиентов</h1>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-6 flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white shadow">
      <div class="container mx-auto px-4 py-6 text-center">
        <p class="text-gray-500">© 2024 Room manager</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>
