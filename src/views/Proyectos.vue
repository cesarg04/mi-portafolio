<script setup>



</script>

<template>
  <div
    v-motion
    :initial="{
      opacity: 0,
      y: 2000,
    }"
    :enter="{
      opacity: 1,
      y: 0,
    }"
  class="h-40 w-40 bg-red-500 rounded">
    1
  </div>
</template>