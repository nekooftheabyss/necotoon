<template>
  <span
    :class="`
              ${
                type === 'success'
                  ? 'bg-black/20 text-green-200 border-l-2 border-green-800'
                  : type === 'info'
                  ? 'bg-black/20 text-blue-200 border-l-2 border-blue-800'
                  : type === 'warning'
                  ? 'bg-black/20 text-yellow-200 border-l-2 border-yellow-800'
                  : type === 'error'
                  ? 'text-rose-400'
                  : type === 'gray'
                  ? 'bg-black/20 text-gray-200 border-l-2 border-gray-800'
                  : 'bg-primary-500 border-2 border-black text-black'
              }
          text-xs
          font-medium
          flex
          items-center
          px-1.5
          py-0.5
          rounded
            `"
  >
    <slot />
  </span>
</template>
<script setup lang="ts">
const { type } = defineProps<{
  type?: "success" | "info" | "warning" | "error" | "gray";
}>();
</script>
