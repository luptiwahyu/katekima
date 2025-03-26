import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => {
    return {
      form: {
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
      },
    }
  },
})
