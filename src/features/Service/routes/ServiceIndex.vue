<script lang="ts" setup>
import ServiceHistoryCard from '../components/ServiceHistoryCard.vue'
import type { TransactionDto } from '../types'

const data: TransactionDto[] = [
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
</script>

<template>
  <div>
    <ServiceHistoryCard :transaction="data[0]" />
  </div>
</template>
