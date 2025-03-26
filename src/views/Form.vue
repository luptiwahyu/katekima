<template>
  <main>
    <div class="text-2xl pb-4">Create</div>

    <form class="w-1/2 space-y-6" @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="username" :validate-on-blur="!isFieldDirty">
        <!-- Title -->
        <FormItem>
          <FormLabel>Title</FormLabel>
          <FormControl>
            <Input type="text" v-bind="componentField" v-model="formData.title" />
          </FormControl>
          <FormMessage />
        </FormItem>

        <!-- Price -->
        <FormItem>
          <FormLabel>Price</FormLabel>
          <FormControl>
            <NumberField :default-value="0" :format-options="priceFormatOption" v-model="formData.price">
              <NumberFieldContent>
                <NumberFieldInput />
              </NumberFieldContent>
            </NumberField>
          </FormControl>
          <FormMessage />
        </FormItem>

        <!-- Description -->
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Textarea v-model="formData.description" />
          </FormControl>
          <FormMessage />
        </FormItem>

        <!-- Category -->
        <FormItem>
          <FormLabel>Category</FormLabel>
          <FormControl>
            <select
              class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
              v-model="formData.category">
              <option v-for="(option, optionIdx) in categories" :key="optionIdx" :value="option">{{ option }}</option>
            </select>
          </FormControl>
          <FormMessage />
        </FormItem>

        <!-- Image -->
        <FormItem>
          <FormLabel>Image</FormLabel>
          <FormControl>
            <Input type="file" :value="formData.image" />
          </FormControl>
          <FormMessage />
        </FormItem>

      </FormField>

      <Button variant="destructive" @click="back">
        <X /> Cancel
      </Button>

      <Button type="submit" class="float-right">
        <Send /> Save
      </Button>
    </form>

  </main>
</template>

<script setup lang="ts">
import { Send, X } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { useRouter } from 'vue-router'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast/use-toast'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { h } from 'vue'
import * as z from 'zod'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldInput,
} from '@/components/ui/number-field'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { useProductStore } from '@/stores/product'

const router = useRouter()

function back() {
  router.push({ name: 'berry' })
}

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
}))

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
})

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
]

const priceFormatOption = {
  style: 'currency',
  currency: 'IDR',
  currencyDisplay: 'code',
  currencySign: 'accounting',
}

const product = useProductStore()
const formData = product.form
</script>