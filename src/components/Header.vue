<template>
  <div class="navbar bg-gray-200">
    <div class="flex-1">
      <button class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          class="inline-block h-5 w-5 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-4">
        <li>
          <details>
            <summary>Indonesia</summary>
            <ul class="bg-white rounded-t-none p-2">
              <li class="bg-white"><a>Indonesia</a></li>
              <li class="bg-white"><a>English</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
    <div class="flex-none">
      <div class="avatar">
        <div class="w-8 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        <span class="px-4 leading-8">Username</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>