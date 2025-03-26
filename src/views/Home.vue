<template>
  <div>
    <div class="text-3xl">Welcome</div>
    <Button class="mt-4" @click="viewList">
      <Sheet /> View Berry List
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Sheet } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()

function viewList() {
  router.push({ name: 'berry' })
}
</script>