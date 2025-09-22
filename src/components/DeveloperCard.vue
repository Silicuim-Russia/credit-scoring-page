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
    class="min-w-[224px] p-4 bg-black rounded-3xl inline-flex flex-col justify-between items-start gap-2"
  >
    <div class="self-stretch inline-flex justify-start items-start">
      <div class="flex-1 inline-flex flex-col justify-start items-end gap-2">
        <div
          class="self-stretch justify-start text-white text-xl font-medium font-['SF_Pro_Display'] leading-tight tracking-[-0.00625rem]"
        >
          {{ props.firstName }} <br />{{ props.lastName }}
        </div>
        <div
          class="self-stretch justify-start text-white/60 text-xs md:text-[16px] font-medium font-['SF_Pro_Display'] leading-3 md:leading-[16px] tracking-[-0.00625rem]"
        >
          {{ props.role }}
        </div>
      </div>
      <img class="w-[50px] h-[50px] rounded-xl" :src="`/avatars/${props.avatarName}`" />
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
