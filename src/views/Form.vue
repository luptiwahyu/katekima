<template>
  <main>
    <div class="text-2xl pb-4">{{ title }}</div>

    <div v-if="loadingDetail" class="space-y-[10px]">
      <Skeleton class="h-[18px] w-[40px]" />
      <Skeleton class="h-[34px] w-1/2" />
    </div>

    <div v-if="!loadingDetail" class="w-1/2 space-y-6">
      <div class="space-y-1">
        <label class="font-medium text-sm">Name</label>
        <Input type="text" v-model="form.title" />
      </div>

      <Button class="bg-indigo-900 hover:bg-indigo-700" @click="back()">
        <ChevronLeft /> Back
      </Button>

      <Button class="float-right" :disabled="!form.title || loading" @click="onSave(form)">
        <Loader2 v-show="loading" class="w-4 h-4 mr-2 animate-spin" />
        <Send v-show="!loading" />
        Save
      </Button>
    </div>

  </main>
</template>

<script setup lang="ts">
import { Send, ChevronLeft, Loader2 } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { useRouter, useRoute } from 'vue-router'
import { Input } from '@/components/ui/input'
import { ref, computed } from 'vue'
import { useBerryStore } from '@/stores/berry'
import { notify } from 'notiwind'
import { Skeleton } from '@/components/ui/skeleton'

const router = useRouter()
const route = useRoute()

function back() {
  router.push({ name: 'berry' })
}

const formType = route.name === 'berry-create' ? 'create' : 'edit'
const title = formType === 'create' ? 'Create' : 'Edit'

const berry = useBerryStore()
const form = berry.form
const loading = ref(false)

if (formType === 'create') resetForm()

if (formType === 'edit') {
  berry.getDetail(route.params.id)
    .then(() => {
      const detail = berry.detail
      berry.$patch({
        form: {
          id: detail.data.id,
          title: detail.data.name,
        },
      })
    })
    .catch(() => {
      alertError()
    })
}

const loadingDetail = computed(() => {
  return berry.detail.loading
})

interface Berry {
  id: number,
  title: string,
}

function onSave(data: Berry) {
  if (formType === 'create') onCreate(data)
  else if (formType === 'edit') onUpdate(data)
}

function onCreate(data: Berry) {
  loading.value = true
  berry.create(data)
    .then((response) => {
      return response.json()
    })
    .then(() => {
      alertSuccess()
      resetForm()
    })
    .catch(() => {
      alertError()
    })
    .finally(() => {
      loading.value = false
    })

}

function onUpdate(data: Berry) {
  loading.value = true
  berry.update(data)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      if (data.status === 'error') alertError()
      else alertSuccess()
    })
    .catch(() => {
      alertError()
    })
    .finally(() => {
      loading.value = false
    })

}

function resetForm() {
  berry.$patch({ form: { title: '' } })
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
  const status = formType === 'create' ? 'created' : 'edited'
  notify(
    {
      group: 'success',
      title: 'Success',
      text: `Your berry was ${status}.`,
    },
    3000,
  )
}
</script>