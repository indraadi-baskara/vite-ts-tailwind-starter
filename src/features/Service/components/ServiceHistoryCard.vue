<script lang="ts" setup>
import type { TransactionDto } from '../types'

type Props = {
  transaction: TransactionDto
}

defineProps<Props>()
</script>

<template>
  <div>
    <div>
      <p>{{ transaction.price }}</p>
      <p>
        <span>{{ transaction.createdAt }}</span>
        <span>{{ transaction.id }}</span>
      </p>
    </div>

    <div>
      <button>
        {{ 'Paid Off' }}
      </button>
    </div>
  </div>
</template>
