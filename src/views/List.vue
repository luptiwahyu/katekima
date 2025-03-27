<template>
  <main>
    <div class="text-2xl pb-4">List</div>

    <div v-if="list.loading">
      <Skeleton class="h-[34px] w-[152px] mb-[16px]" />
      <div class="space-y-[7px]">
        <Skeleton class="h-[30px] w-full" v-for="i in 11" :key="i" />
      </div>
      <Skeleton class="h-[36px] w-[115px] mt-7" />
    </div>

    <div v-if="!list.loading">
      <div class="pb-4">
        <select
          class="h-[34px] w-[150px] bg-slate-50 rounded border-r-8 border-transparent px-4 text-sm outline outline-gray-200"
          @change="onChangePageSize" v-model="filterPageLimit">
          <option v-for="opt in pageEntries" :key="opt.value" :value="opt.value">{{ opt.name }}</option>
        </select>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead class="w-[120px]">#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead class="w-[300px] text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="(item, itemIdx) in list.data" :key="itemIdx">
            <TableCell>
              {{ sequence(itemIdx) }}
            </TableCell>
            <TableCell>{{ item.name }}</TableCell>
            <TableCell class="text-center">
              <Button variant="link" class="text-xs h-0" @click="viewDetail(item.name)">
                View
              </Button>
              <Button variant="link" class="text-xs h-0" @click="edit(item.name)">Edit</Button>
              <Button variant="link" class="text-xs h-0 text-red-500" @click="remove(sequence(itemIdx), item.name)">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div class="grid grid-cols-2 mt-5">
        <div class="col-span-1">
          <Button class="bg-indigo-900 hover:bg-indigo-700" @click="add()">
            <Plus /> Add New
          </Button>
        </div>
        <div class="col-span-1 justify-items-end">
          <Pagination :items-per-page="10" :total="list.count">
            <PaginationList class="flex items-center gap-1">
              <PaginationPrev :disabled="list.pageNumber <= 1" @click="prev()"
                class="bg-indigo-900 text-white hover:bg-indigo-700 hover:text-white" />
              <PaginationNext :disabled="list.pageNumber >= list.pageTotal" @click="next()"
                class="bg-indigo-900 text-white hover:bg-indigo-700 hover:text-white" />
            </PaginationList>
          </Pagination>
        </div>
      </div>
    </div>

  </main>
</template>

<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import {
  Button,
} from '@/components/ui/button'

import {
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination'

import { useRouter } from 'vue-router'
import { useBerryStore } from '@/stores/berry'
import { Skeleton } from '@/components/ui/skeleton'
import { Plus } from 'lucide-vue-next'
import { notify } from 'notiwind'
import { computed } from 'vue'

const router = useRouter()

function viewDetail(name: string) {
  router.push({ name: 'berry-detail', params: { id: name } })
}

function edit(name: string) {
  router.push({ name: 'berry-edit', params: { id: name } })
}

const berry = useBerryStore()
berry.getList()

const list = berry.list

function prev() {
  list.pageNumber--
  list.pageOffset -= list.pageLimit
  berry.getList()
}

function next() {
  list.pageNumber++
  list.pageOffset += list.pageLimit
  berry.getList()
}

function sequence(index: number) {
  return index + (list.pageLimit * list.pageNumber - list.pageLimit + 1)
}

function add() {
  router.push({ name: 'berry-create' })
}

function remove(id: number, name: string) {
  berry.delete(id).then((response) => {
    if (response.status === 200) {
      const idx = list.data.findIndex((i) => i.name === name)
      if (idx >= 0) list.data.splice(idx, 1)
      alertSuccess()
    } else {
      alertError()
    }
  })
}

function alertError() {
  notify(
    {
      group: 'error',
      title: 'Uh oh! Something went wrong.',
      text: 'There was a problem with your request.',
    },
    3000,
  )
}

function alertSuccess() {
  notify(
    {
      group: 'success',
      title: 'Success',
      text: 'Your berry was deleted',
    },
    3000,
  )
}

const pageEntries = [
  { value: 10, name: '10 Entries' },
  { value: 20, name: '20 Entries' },
  { value: 30, name: '30 Entries' },
]

const filterPageLimit = computed({
  get() {
    return list.pageLimit
  },
  set(newValue) {
    list.pageLimit = newValue
  }
})

function onChangePageSize() {
  list.pageNumber = 1
  list.pageOffset = 0
  berry.getList()
}
</script>