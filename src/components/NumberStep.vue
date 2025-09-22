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
    class="min-w-[32px] min-h-[32px] bg-black rounded-xl inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden"
  >
    <div
      class="justify-start text-white text-[20px] font-semibold font-['SF_Pro_Display'] leading-[28px]"
    >
      {{ props.stepValue }}
    </div>
  </div>
</template>
