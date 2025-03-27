import { defineStore } from 'pinia'

export const useBerryStore = defineStore('berry', {
  state: () => {
    return {
      list: {
        loading: true,
        data: [],
        count: 0,
        pageNumber: 1,
        pageOffset: 0,
        pageLimit: 10,
        pageTotal: 0,
      },
      detail: {
        loading: true,
        data: {},
      },
      form: {
        id: '',
        title: '',
      },
    }
  },
  actions: {
    async getList() {
      this.list.loading = true

      const url = `https://pokeapi.co/api/v2/berry?limit=${this.list.pageLimit}&offset=${this.list.pageOffset}`
      const response = await (await fetch(url)).json()

      this.list.data = response.results
      this.list.count = response.count
      this.list.pageTotal = Math.ceil(this.list.count / this.list.pageLimit)

      /**
       * setTimeout ini hanya bertujuan
       * untuk menunjukan loading
       * karena responsenya terlalu cepat
       */
      setTimeout(() => {
        this.list.loading = false
      }, 300)
    },
    getDetail(name: string) {
      return new Promise((resolve, reject) => {
        this.detail.loading = true
        const url = `https://pokeapi.co/api/v2/berry/${name}`
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            this.detail.data = data
            resolve(this.detail.data)
          })
          .catch((error) => {
            reject(error)
          })
          .finally(() => {
            /**
             * setTimeout ini hanya bertujuan
             * untuk menunjukan loading
             * karena responsenya terlalu cepat
             */
            setTimeout(() => {
              this.detail.loading = false
            }, 300)
          })
      })
    },
    create(form: object) {
      return fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    },
    update(form: { id: number; title: string }) {
      const data = { title: form.title }
      return fetch(`https://fakestoreapi.com/products/${form.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    },
    delete(id: number) {
      return fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE',
      })
    },
  },
})
