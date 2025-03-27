import { defineStore } from 'pinia'

export const defaultForm = () => {
  return {
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  }
}

export const useProductStore = defineStore('product', {
  state: () => {
    return {
      form: defaultForm(),
    }
  },
  actions: {
    create(formData: object) {
      const payload = JSON.stringify(formData)
      return fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      })
    },
  },
})
