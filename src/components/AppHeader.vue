<template>
  <nav class="bg-indigo-900 sticky top-0">
    <div class="mx-auto px-6">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-start">
          <div class="flex shrink-0 items-center">
            <SidebarTrigger class="text-white hover:bg-indigo-700 hover:text-white" />
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- Language -->
          <div class="mr-8">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="ghost" class="text-white hover:bg-indigo-700 hover:text-white">
                  <img :src="activeFlag()" alt="flag-id" class="w-4 mr-2">
                  {{ activeLang === 'id' ? 'Indonesia' : 'English (US)' }}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem @click="onSelectLang('id')">
                  <img src="/src/assets/images/flag-id.png" alt="flag-id" class="w-4 mr-2">
                  Indonesia
                </DropdownMenuItem>
                <DropdownMenuItem @click="onSelectLang('us')">
                  <img src="/src/assets/images/flag-us.png" alt="flag-us" class="w-4 mr-2">
                  English (US)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <!-- Profile -->
          <div class="relative">
            <div>
              <button type="button" class="relative flex rounded-full text-sm hover:bg-indigo-700 p-2"
                id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">Open user menu</span>
                <img class="size-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="">

                <span class="leading-8 ml-2 text-white">John Doe</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>

<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ref } from 'vue'

const activeLang = ref('us')

function onSelectLang(lang: string) {
  activeLang.value = lang
}

function activeFlag() {
  return activeLang.value === 'id' ? '/src/assets/images/flag-id.png' : '/src/assets/images/flag-us.png'
}
</script>