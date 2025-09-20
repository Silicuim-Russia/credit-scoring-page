<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  label: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    v-if="props.variant === 'primary'"
    class="px-[24px] py-[16px] bg-black rounded-3xl inline-flex justify-start items-start gap-2.5"
  >
    <div
      class="text-white text-[16px] lg:text-[20px] font-[500] leading-none font-['SF_Pro_Display']"
    >
      {{ props.label }}
    </div>
  </div>

  <div
    v-if="props.variant === 'outline'"
    class="px-[24px] py-[16px] bg-white rounded-3xl outline-[1.50px] outline-offset-[-1.50px] outline-black inline-flex justify-start items-start gap-2.5"
  >
    <div
      class="text-black text-[16px] lg:text-[20px] font-[500] leading-none font-['SF_Pro_Display']"
    >
      {{ props.label }}
    </div>
  </div>
</template>
