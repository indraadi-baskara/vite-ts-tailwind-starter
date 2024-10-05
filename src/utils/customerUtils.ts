export function loadCustomersFromLocalStorage() {
  const storedContacts = localStorage.getItem('contacts')
  if (storedContacts) {
    try {
      return JSON.parse(storedContacts)
    } catch (error) {
      console.error('Error parsing contacts from localStorage:', error)
      return []
    }
  }
  return []
}