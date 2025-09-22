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
  <div class="w-56 h-32 p-4 bg-black rounded-3xl inline-flex flex-col justify-between items-start">
    <div class="self-stretch inline-flex justify-start items-start">
      <div class="flex-1 inline-flex flex-col justify-start items-end gap-2">
        <div
          class="self-stretch justify-start text-white text-xl font-medium font-['SF_Pro_Display'] leading-tight"
        >
          {{ props.firstName }} <br />{{ props.lastName }}
        </div>
        <div
          class="self-stretch justify-start text-white/60 text-xs font-medium font-['SF_Pro_Display'] leading-3"
        >
          {{ props.role }}
        </div>
      </div>
      <img class="w-10 h-10 rounded-xl" :src="`/avatars/${props.avatarName}`" />
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
