<script lang="ts" setup>
import router from '@/router'

onMounted(() => {
  router.push({
    name: 'layanan.index',
  })
})
</script>

<template>
  <div>Welcome pages</div>
</template>
