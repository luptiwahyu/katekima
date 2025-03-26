<template>
  <main>
    <div class="text-2xl pb-4">List</div>

    <div v-if="list.loading">
      <div class="space-y-[7px]">
        <Skeleton class="h-[30px] w-full" v-for="i in 11" :key="i" />
      </div>
      <Skeleton class="h-[36px] w-[115px] mt-7" />
    </div>

    <div v-if="!list.loading">
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
              <Button variant="link" class="text-xs h-0">Edit</Button>
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

const router = useRouter()

function viewDetail(name) {
  router.push({ name: 'berry-detail', params: { id: name } })
}

const berry = useBerryStore()
berry.getList()

const list = berry.list

function prev() {
  list.pageNumber--
  list.pageOffset -= 10
  berry.getList()
}

function next() {
  list.pageNumber++
  list.pageOffset += 10
  berry.getList()
}

function sequence(index) {
  return index + (list.pageLimit * list.pageNumber - list.pageLimit + 1)
}

function add() {
  router.push({ name: 'berry-create' })
}
</script>