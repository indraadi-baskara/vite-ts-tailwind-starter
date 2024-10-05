<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Customer List</h1>
    
    <div class="mb-6">
      <input
        v-model="searchQuery"
        @input="searchCustomers"
        placeholder="Search customers..."
        class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <ul class="space-y-4">
      <li v-for="customer in filteredCustomers" :key="customer.id" 
          class="bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
        <span class="font-semibold">{{ customer.name }}</span> - {{ customer.phone }}
      </li>
    </ul>

    <p v-if="filteredCustomers.length === 0" class="text-gray-500 text-center mt-4">
      No customers found.
    </p>
  </div>
</template>

<script>
import { loadCustomersFromLocalStorage } from '@/utils/customerUtils';

export default {
  name: 'ListCustomerPage',
  data() {
    return {
      customers: [],
      searchQuery: '',
      filteredCustomers: []
    }
  },
  created() {
    this.customers = loadCustomersFromLocalStorage()
    this.filteredCustomers = this.customers
  },
  methods: {
    searchCustomers() {
      this.filteredCustomers = this.customers.filter(customer =>
        customer.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        customer.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  }
}
</script>
