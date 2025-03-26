<template>
  <SidebarProvider>
    <AppSidebar />
    <main class="w-full">
      <AppHeader />
      <div class="p-8">
        <RouterView />
      </div>
      <AppFooter />
    </main>
  </SidebarProvider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar from './components/AppSidebar.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>
