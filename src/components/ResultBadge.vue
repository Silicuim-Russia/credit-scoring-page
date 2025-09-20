<!-- Badge that show is client safe or not -->
<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'safe',
  },
})
</script>

<template>
  <div
    class="w-36 h-36 px-4 py-6 bg-black rounded-3xl inline-flex flex-col justify-between items-start"
  >
    <!-- Texts -->
    <div class="self-stretch flex flex-col justify-start items-start gap-2 text-white">
      <div
        class="self-stretch justify-start text-[13.5] font-normal font-['SF_Pro_Display'] leading-none"
      >
        Заёмщик №1
      </div>
      <div
        class="self-stretch justify-start text-[19px] font-semibold font-['SF_Pro_Display'] leading-[16px]"
      >
        Надёжный
      </div>
    </div>

    <!-- Icons -->
    <div class="w-12 h-10 relative">
      <img class="left-[26.50px] top-0 absolute" src="/src/assets/icons/right-green.svg" />
      <img class="left-0 top-0 absolute" src="/src/assets/icons/left-green.svg" />
      <div
        class="left-[18.5px] top-[14.98px] absolute text-center justify-start text-(--accent-green-color) text-2xl font-normal font-['SF_Pro_Rounded'] leading-none"
      >
        $
      </div>
    </div>
  </div>
</template>
