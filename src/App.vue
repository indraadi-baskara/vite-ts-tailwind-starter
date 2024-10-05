<script setup lang="ts">
import { RouterView } from 'vue-router'; // Import RouterView
import { useCustomerStore } from './store/useCustomerStore';

const store = useCustomerStore();

onMounted(() => {
  store.getInitApp()
})

</script>
<template>
  <RouterView /> 
</template>
