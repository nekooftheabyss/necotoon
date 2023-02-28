<template>
  <footer class="p-4 w-full font-azonix mt-8">
    <div
      class="border-t-[0.5px] border-primary-500/60 w-full py-4 relative transition-colors duration-500 ease-in-out mx-auto mt-4"
    >
      <div class="absolute inset-0 -top-4 flex justify-center items-start z-10">
        <div class="relative flex justify-center items-center">
          <div
            class="absolute bg-white dark:bg-zinc-900 rounded-full blur-md w-16 h-16 z-10"
          />
          <img
            src="/icon_dark.svg"
            class="cursor-help w-8 h-8 z-20 relative"
            @click="switchMode"
          />
        </div>
      </div>
      <div class="flex items-center justify-center relative z-20 text-xs text-zinc-500">
        © {{ COPYRIGHT_SINCE }} - {{ new Date().getFullYear() }}
        {{ COPYRIGHT_OWNER }}
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
const colorModes = ["preferred", "dark", "light"];
const colorMode = useColorMode();
const current = ref(0);
const switchMode = () => {
  if (current.value === 2) current.value = 0;
  else current.value += 1;
  colorMode.preference = colorModes[current.value];
};
</script>
