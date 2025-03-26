<template>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <div class="text-2xl px-2 mb-4 justify-items-center cursor-pointer" @click="goHome">
          <img src="/src/assets/images/berry-logo.png" alt="berry-logo" class="w-[120px]">
        </div>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton asChild :isActive="active(item.url)">
                <RouterLink :to="{ name: item.url }">
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>

<script setup lang="ts">
import { Home, Cherry } from "lucide-vue-next"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { useRouter, RouterLink, useRoute } from 'vue-router'

const items = [
  {
    title: 'Home',
    url: 'home',
    icon: Home,
  },
  {
    title: 'Berry',
    url: 'berry',
    icon: Cherry,
  },
]

const router = useRouter()
const route = useRoute()

function active(url: string) {
  if (route.name) return route.name.includes(url)
}

function goHome() {
  router.push({ name: 'home' })
}
</script>