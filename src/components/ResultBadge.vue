<script setup>
const { variant, size } = defineProps({
  variant: {
    type: String,
    default: 'pending', // safe | risky | pending
  },
  size: {
    type: String,
    default: 'small', // small | medium
  },
})

const variantConfig = {
  safe: {
    label: 'Надёжный',
    leftIcon: '/src/assets/icons/left-green.svg',
    rightIcon: '/src/assets/icons/right-green.svg',
    color: 'var(--accent-green-color)',
  },
  risky: {
    label: 'Рисковый',
    leftIcon: '/src/assets/icons/left-red.svg',
    rightIcon: '/src/assets/icons/right-red.svg',
    color: 'var(--accent-red-color)',
  },
  pending: {
    label: 'Обработка...',
    desc: 'Пожалуйста, подождите',
  },
}
</script>

<template>
  <div
    :class="size === 'small' ? 'w-36 h-36' : 'w-72 h-40'"
    class="px-4 py-6 bg-black rounded-3xl inline-flex flex-col justify-between items-start"
  >
    <!-- Texts -->
    <div
      :class="size === 'small' ? 'items-start' : ' items-center'"
      class="self-stretch inline-flex flex-col justify-start text-white gap-1"
    >
      <span
        :class="size === 'small' ? 'text-[14px] leading-[14px]' : 'text-[20px] leading-[20px]'"
        class="justify-start font-normal font-['SF_Pro_Display'] tracking-[-0.01488rem]"
      >
        Ваш статус
      </span>
      <span
        :class="size === 'small' ? 'text-[20px]  leading-[16px]' : 'text-[30px]  leading-[30px]'"
        class="justify-start font-semibold font-['SF_Pro_Display']"
      >
        {{ variantConfig[variant].label }}
      </span>
    </div>

    <!-- Icons -->
    <div
      :class="size === 'small' ? 'items-start' : 'items-center'"
      class="self-stretch inline-flex flex-col justify-start"
    >
      <div v-if="variant !== 'pending'" class="w-12 h-10 relative">
        <img class="left-[26.50px] top-0 absolute" :src="variantConfig[variant].rightIcon" />
        <img class="left-0 top-0 absolute" :src="variantConfig[variant].leftIcon" />
        <div
          :class="
            variant === 'safe' ? ' text-(--accent-green-color)' : ' text-(--accent-red-color)'
          "
          class="left-[18.5px] top-[14.98px] absolute text-center justify-start text-2xl font-normal font-['SF_Pro_Rounded'] leading-none"
        >
          $
        </div>
      </div>
      <span
        v-else
        class="self-stretch text-center justify-start text-white/40 text-[20px] font-medium font-['SF_Pro_Display'] leading-[20px]"
        >{{ variantConfig[variant].desc }}
      </span>
    </div>
  </div>
</template>
