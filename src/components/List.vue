<template>
  <div class="p-8">
    <div class="text-2xl pb-4">Title</div>
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-slate-100">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          <tr class="hover:bg-slate-100">
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          <tr class="hover:bg-slate-100">
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="join pt-5">
      <button class="join-item btn btn-sm">1</button>
      <button class="join-item btn btn-sm btn-active">2</button>
      <button class="join-item btn btn-sm">3</button>
      <button class="join-item btn btn-sm">4</button>
      <button class="join-item btn btn-sm">5</button>
    </div>

  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>