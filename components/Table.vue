<template>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-slate-50">
        <thead>
          <tr>
            <th
              v-for="(property, index) in properties"
              :key="index"
              class="border p-2"
            >
              {{ property }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, itemIndex) in 0" :key="itemIndex">
            <td
              v-for="(property, propIndex) in properties"
              :key="propIndex"
              class="border p-2"
            >
              {{ item[property] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
    let properties = ['CD', 'ICD'] 
  </script>
  