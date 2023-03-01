<template>
  <div
    class="min-h-screen flex flex-col dark:bg-stone-900 dark:text-white tracking-wide leading-6 transition-colors duration-500 ease-in-out"
  >
    <div class="py-4 flex items-center justify-center">
      <img
        :src="$colorMode.preference == `dark` ? `/icon_dark.webp` : `/icon.webp`"
        class="h-24 relative"
      />
    </div>
    <main class="flex-1">
      <div class="border-t border-b border-primary-500 py-1">
        <div class="mx-auto max-w-7xl"><UiNavPane /></div>
      </div>
      <slot />
    </main>
    <UiFab :right="false" :links="links" />
    <UiFooter />
  </div>
</template>
<script setup lang="ts">
const links = [
  {
    name: "Home",
    icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M 9 22 L 9 12 L 15 12 L 15 22 Z",
    href: "/",
  },
  {
    name: "Manga",
    icon: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M 4 22 4 15",
    href: "/manga",
  },
];
</script>
