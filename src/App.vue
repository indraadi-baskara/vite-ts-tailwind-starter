<script setup lang="ts">
import { RouterView } from 'vue-router'; // Import RouterView

// See vite.config.ts for details about automatic imports
const route = useRoute()

useHead({
  title: () => route.meta.title || 'Vite + Vue Template',
  meta: [
    {
      property: 'og:title',
      content: () => route.meta.title,
    },
    {
      name: 'twitter:title',
      content: () => route.meta.title,
    },
  ],
})

</script>
<template>
  <RouterView /> <!-- Replace ContactForm with RouterView -->
</template>
