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
  isFullWidth: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button
    @click="$emit('click')"
    v-if="props.variant === 'primary'"
    :class="props.isFullWidth ? 'w-full' : ''"
    class="cursor-pointer px-[24px] py-[16px] bg-black hover:bg-zinc-900 rounded-3xl inline-flex justify-center items-center gap-2.5"
  >
    <div
      class="text-white text-[16px] md:text-[20px] font-[500] leading-none font-['SF_Pro_Display']"
    >
      {{ props.label }}
    </div>
  </button>

  <button
    @click="$emit('click')"
    v-if="props.variant === 'outline'"
    :class="props.isFullWidth ? 'w-full' : ''"
    class="cursor-pointer px-[24px] py-[16px] bg-white hover:bg-zinc-100 rounded-3xl outline-[1.50px] outline-offset-[-1.50px] outline-black inline-flex justify-start items-start gap-2.5"
  >
    <div
      class="text-black text-[16px] md:text-[20px] font-[500] leading-none font-['SF_Pro_Display']"
    >
      {{ props.label }}
    </div>
  </button>
</template>
