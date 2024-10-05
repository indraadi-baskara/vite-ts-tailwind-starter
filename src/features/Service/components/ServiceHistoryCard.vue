<script lang="ts" setup>
import type { TransactionDto } from '../types'

type Props = {
  transaction: TransactionDto
}

defineProps<Props>()
</script>

<template>
  <div class="bg-white rounded-[20px] px-5 py-[18px] flex gap-x-8 justify-between">
    <div class="text-[#2A3256]">
      <p class="font-medium text-base leading-[18px]">{{ transaction.currency }}{{ transaction.price }}</p>
      <p class="text-xs leading-[14px] flex items-center gap-x-1">
        <span>{{ '10.00 AM' }}</span>
        <span>-</span>
        <span class="uppercase">#{{ transaction.id }}</span>
      </p>
    </div>

    <button
      class="text-xs leading-[14px] text-white uppercase bg-gradient-to-l from-[#1A72DD] to-[#0D62CA] py-2 px-6 rounded-[5px]"
    >
      {{ 'Paid Off' }}
    </button>
  </div>
</template>
