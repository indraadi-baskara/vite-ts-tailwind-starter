<script lang="ts" setup>
import ServiceHistoryCard from '../components/ServiceHistoryCard.vue'
import type { TransactionDto } from '../types'

const transactions: TransactionDto[] = [
  {
    price: 100,
    currency: 'USD',
    id: 'abc123',
    createdAt: '2024-10-05T10:00:00Z',
  },
  {
    price: 150,
    currency: 'USD',
    id: 'xyz321',
    createdAt: '2024-10-05T10:00:00Z',
  },
  {
    price: 200,
    currency: 'EUR',
    id: 'def456',
    createdAt: '2024-10-03T15:30:00Z',
  },
  {
    price: 250,
    currency: 'EUR',
    id: 'uvw654',
    createdAt: '2024-10-03T15:30:00Z',
  },
  {
    price: 300,
    currency: 'JPY',
    id: 'ghi789',
    createdAt: '2024-10-01T09:45:00Z',
  },
  {
    price: 350,
    currency: 'JPY',
    id: 'rst987',
    createdAt: '2024-10-01T09:45:00Z',
  },
]

const transactionsByDate = transactions.reduce(
  (acc, current) => {
    const timestamp = new Date(current.createdAt).toUTCString().split(' ').splice(0, 4).join(' ')
    const items = [...(acc[timestamp]?.items || []), current]
    const total = items.reduce((acc, current) => {
      return acc + current.price
    }, 0)

    return {
      ...acc,
      [timestamp]: {
        date: timestamp,
        total: `USD ${total}`,
        items,
      },
    }
  },
  {} as Record<
    string,
    {
      date: string
      total: string
      items: TransactionDto[]
    }
  >
)
</script>

<template>
  <div class="p-6 grid gap-y-2.5">
    <div v-for="transactionDate in transactionsByDate" :key="transactionDate.date" class="pb-5 grid gap-y-3.5">
      <div class="flex justify-between gap-x-6 items-center text-[#2A3256]">
        <p class="text-xs leading-[14px]">{{ transactionDate.date }}</p>
        <p class="font-medium text-base leading-[18px]">{{ transactionDate.total }}</p>
      </div>

      <div class="grid gap-y-2.5">
        <ServiceHistoryCard
          v-for="transaction in transactionsByDate[transactionDate.date].items"
          :key="transaction.id"
          :transaction
        />
      </div>
    </div>
  </div>
</template>
