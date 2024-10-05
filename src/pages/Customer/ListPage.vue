<template>
  <div class="max-w-4xl mx-auto p-6 relative h-screen w-full">
    <p>
      <router-link to="/"> Back </router-link>
    </p>
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

    <!-- New button -->
    <div class="mt-8 text-center absolute bottom-5 left-0 right-0">
      <button @click="redirectToAddCustomer" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Add New Customer
      </button>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useCustomerStore } from '../../store/useCustomerStore';

export default {
  name: 'ListCustomerPage',
  setup() {
    const store = useCustomerStore();
    const { customers } = storeToRefs(store);
    return { customers };
  },
  data() {
    return {
      searchQuery: '',
      filteredCustomers: []
    }
  },
  created() {
    this.filteredCustomers = this.customers;
  },
  methods: {
    searchCustomers() {
      this.filteredCustomers = this.customers.filter(customer =>
        customer.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        customer.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    },
    redirectToAddCustomer() {
      this.$router.push('/add-customer')
    }
  }
}
</script>
