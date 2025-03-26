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
    }
  },
  actions: {
    async getList() {
      this.list.loading = true

      const url = `https://pokeapi.co/api/v2/berry?limit=${this.list.pageLimit}&offset=${this.list.pageOffset}`
      const response = await (await fetch(url)).json()

      console.log('response: ', response)

      this.list.data = response.results
      this.list.count = response.count
      this.list.pageTotal = Math.ceil(this.list.count / this.list.pageLimit)

      setTimeout(() => {
        this.list.loading = false
      }, 300)
    },
    async getDetail(name: string) {
      this.detail.loading = true
      const url = `https://pokeapi.co/api/v2/berry/${name}`
      const response = await (await fetch(url)).json()

      console.log('response: ', response)

      this.detail.data = response
      console.log('this.detail.data: ', this.detail.data)

      setTimeout(() => {
        this.detail.loading = false
      }, 300)
    },
  },
})
