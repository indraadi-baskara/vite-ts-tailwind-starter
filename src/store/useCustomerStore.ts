import type { Customer } from '@/global'
import { defineStore } from 'pinia'

export const useCustomerStore = defineStore('customer', () => {
  const customers = ref<Customer[]>([])

  const getInitApp = () => {
    const newCustomers = JSON.parse(localStorage.getItem('customers') || '[]')
    customers.value = newCustomers
  }

  const getCustomers = () => {
    return customers.value
  }

  const getCustomerById = (id: number) => {
    return customers.value.find((customer: Customer) => customer.id === id)
  }

  const addCustomer = (customer: Customer) => {
    customers.value.push(customer)
    localStorage.setItem('customers', JSON.stringify(customers.value))
  }

  const updateCustomer = (customer: Customer) => {
    const index = customers.value.findIndex(c => c.id === customer.id)
    if (index !== -1) {
      customers.value[index] = customer
      localStorage.setItem('customers', JSON.stringify(customers.value))
    }
  }

  const deleteCustomer = (id: number) => {
    customers.value = customers.value.filter(c => c.id !== id)
    localStorage.setItem('customers', JSON.stringify(customers.value))
  }

  function test() {
    console.log("check test")
  }

  return {
    customers,
    getInitApp,
    test,
    getCustomers,
    getCustomerById,
    addCustomer,
    updateCustomer,
    deleteCustomer,
  }
})