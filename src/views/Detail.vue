<template>
  <main>
    <div class="text-2xl pb-4">Detail</div>

    <div v-if="detail.loading">
      <div class="space-y-[7px]">
        <Skeleton class="h-[30px] w-1/2" v-for="i in 10" :key="i" />
      </div>
      <Skeleton class="h-[36px] w-[90px] mt-7" />
    </div>

    <div v-if="!detail.loading">
      <div class="grid grid-cols-6 mb-4">
        <div class="col-span-1 font-bold">Name</div>
        <div class="col-span-5">{{ detail.data.name }}</div>
      </div>
      <div class="grid grid-cols-6 mb-4">
        <div class="col-span-1 font-bold">Size</div>
        <div class="col-span-5">{{ detail.data.size }}</div>
      </div>
      <div class="grid grid-cols-6 mb-4">
        <div class="col-span-1 font-bold">Flavors</div>
        <div class="col-span-5">
          {{detail.data.flavors.map((i) => i.flavor.name).join(', ')}}
        </div>
      </div>
      <div class="grid grid-cols-6 mb-4">
        <div class="col-span-1 font-bold">Smoothness</div>
        <div class="col-span-5">{{ detail.data.smoothness }}</div>
      </div>
      <div class="grid grid-cols-6 mb-4">
        <div class="col-span-1 font-bold">Soil Dryness</div>
        <div class="col-span-5">{{ detail.data.soil_dryness }}</div>
      </div>
      <div class="grid grid-cols-6 mb-4">
        <div class="col-span-1 font-bold">Growth Time</div>
        <div class="col-span-5">{{ detail.data.growth_time }}</div>
      </div>
      <div class="grid grid-cols-6 mb-4">
        <div class="col-span-1 font-bold">Max Harvest</div>
        <div class="col-span-5">{{ detail.data.max_harvest }}</div>
      </div>
      <div class="grid grid-cols-6 mb-4">
        <div class="col-span-1 font-bold">Natural Gift Type</div>
        <div class="col-span-5">{{ detail.data.natural_gift_type.name }}</div>
      </div>
      <div class="grid grid-cols-6 mb-4">
        <div class="col-span-1 font-bold">Natural Gift Power</div>
        <div class="col-span-5">{{ detail.data.natural_gift_power }}</div>
      </div>

      <Button class="mt-4 bg-indigo-900 hover:bg-indigo-700" @click="back">
        <ChevronLeft /> Back
      </Button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useRouter, useRoute } from 'vue-router'
import { ChevronLeft } from 'lucide-vue-next'
import { useBerryStore } from '@/stores/berry'
import { Skeleton } from '@/components/ui/skeleton'

const router = useRouter()
const route = useRoute()

function back() {
  router.push({ name: 'berry' })
}

const berry = useBerryStore()
berry.getDetail(route.params.id)

const detail = berry.detail
</script>