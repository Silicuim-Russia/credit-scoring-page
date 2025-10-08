<script setup>
const props = defineProps({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  avatarName: {
    type: String,
    required: true,
  },
  githubLink: {
    type: String,
    default: '',
  },
  telegramLink: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div
    class="w-[224px] h-[150px] p-4 bg-black rounded-3xl inline-flex flex-col justify-between items-start"
  >
    <div class="self-stretch inline-flex justify-start items-start">
      <div class="flex-1 inline-flex flex-col justify-start items-end gap-1">
        <div
          class="self-stretch justify-start text-white text-base font-medium font-['SF_Pro_Display'] leading-[18px] tracking-[-0.01488rem]"
        >
          {{ props.firstName }} <br />{{ props.lastName }}
        </div>
        <div
          class="self-stretch justify-start text-white/50 text-base font-medium font-['SF_Pro_Display'] leading-[18px] tracking-[-0.01488rem]"
        >
          {{ props.role }}
        </div>
      </div>
      <img class="w-[58px] h-[58px] rounded-xl" :src="`/avatars/${props.avatarName}`" />
    </div>

    <div class="inline-flex justify-start items-start gap-2">
      <a
        :href="props.githubLink"
        class="w-8 h-8 bg-white rounded-xl inline-flex justify-center items-center gap-2.5"
        ><img src="/src/assets/icons/github.svg"
      /></a>

      <a
        :href="props.telegramLink"
        class="w-8 h-8 bg-white rounded-xl inline-flex justify-center items-center gap-2.5"
        ><img src="/src/assets/icons/telegram.svg"
      /></a>
    </div>
  </div>
</template>
