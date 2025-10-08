<script setup>
const props = defineProps({
  stepValue: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div
    class="min-w-[24px] min-h-[24px] bg-black rounded-lg inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden"
  >
    <div
      class="justify-start text-white text-base font-medium font-['SF_Pro_Display'] leading-none"
    >
      {{ props.stepValue }}
    </div>
  </div>
</template>
