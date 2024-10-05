<script setup lang="ts">
import type { Customer } from '@/global';
import { storeToRefs } from 'pinia';
import { useField, useForm } from 'vee-validate';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import * as yup from 'yup';
import { useCustomerStore } from '../../store/useCustomerStore';

const router = useRouter();
const route = useRoute();
const store = useCustomerStore();
const { customers } = storeToRefs(store);

// CRUD form data
const contacts = ref<Customer[]>([])

// Load contacts from localStorage on component mount
onMounted(() => {
  const savedContacts = localStorage.getItem('contacts')
  if (savedContacts) {
    contacts.value = JSON.parse(savedContacts)
  }
})

// Watch for changes in contacts and save to localStorage
watch(contacts, (newContacts) => {
  localStorage.setItem('contacts', JSON.stringify(newContacts))
}, { deep: true })

const schema = yup.object({
  name: yup.string().required('Name is required'),
  phone: yup.string().required('Phone is required'),
  address: yup.string()
});

const { handleSubmit, resetForm, setErrors } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    phone: '',
    address: ''
  }
});

const { value: name, errorMessage: nameError } = useField<string>('name');
const { value: phone, errorMessage: phoneError } = useField<string>('phone');
const { value: address } = useField<string>('address');

const editingId = ref<number | null>(route.params.id ? Number(route.params.id) : null);

const currentCustomer = computed(() => {
  if (editingId.value !== null) {
    return store.getCustomerById(editingId.value);
  }
  return null;
});

onMounted(() => {
  if (currentCustomer.value) {
    name.value = currentCustomer.value.name;
    phone.value = currentCustomer.value.phone;
    address.value = currentCustomer.value.address || '';
  }
});

const onSubmit = handleSubmit((values) => {
  if (editingId.value !== null) {
    if (checkUniquePhone(values.phone!, editingId.value)) {
      updateContact(values);
    } else {
      setErrors({ phone: 'Phone number already exists' });
    }
  } else {
    if (checkUniquePhone(values.phone!)) {
      addContact(values);
    } else {
      setErrors({ phone: 'Phone number already exists' });
    }
  }
  editingId.value = null;
});

const checkUniquePhone = (phone: string, editingId?: number) => {
  return !customers.value.some(customer => customer.phone === phone && customer.id !== editingId);
}

const addContact = (values: Partial<Customer>) => {
  const newCustomer: Customer = {
    id: Date.now(),
    name: values.name!,
    phone: values.phone!.trim(),
    address: values.address
  };
  store.addCustomer(newCustomer);
  resetForm();
  router.push('/customers');
};

const updateContact = (values: Partial<Customer>) => {
  if (editingId.value !== null) {
    const updatedCustomer: Customer = {
      id: editingId.value,
      name: values.name!,
      phone: values.phone!.trim(),
      address: values.address
    };
    store.updateCustomer(updatedCustomer);
  }
  resetForm();
  router.push('/customers');
};

</script>

<template>
  <div class="p-4 mx-auto prose md:px-6 prose-indigo sm:rounded-md h-screen">
    <p>
      <router-link to="/customers"> Back </router-link>
    </p>
    <h2>Add Customer</h2>
    <form @submit="onSubmit" class="mb-4 flex flex-col h-[calc(100%-140px)]">
      <div class="mb-2">
        <label for="name" class="block">Name:</label>
        <input id="name" v-model="name" type="text" class="w-full p-5 border rounded border-none" style="background: rgba(0, 0, 0, 0.05);">
        <p v-if="nameError" class="text-red-500 text-sm mt-1">{{ nameError }}</p>
      </div>
      <div class="mb-2">
        <label for="phone" class="block">Phone:</label>
        <InputText id="phone" v-model="phone" type="tel" class="w-full p-5 rounded border-none"  style="background: rgba(0, 0, 0, 0.05);"/>
        <p v-if="phoneError" class="text-red-500 text-sm mt-1">{{ phoneError }}</p>
      </div>
      <div class="mb-2">
        <label for="address" class="block">Address:</label>
        <input id="address" v-model="address" type="text" class="w-full p-5 border rounded border-none" style="background: rgba(0, 0, 0, 0.05);">
      </div>
      <button type="submit" class="p-5 w-full mt-auto text-white bg-blue-500 rounded hover:bg-blue-600">
        {{ editingId !== null ? 'Update Contact' : 'Add Contact' }}
      </button>
    </form>
    
  </div>
</template>
