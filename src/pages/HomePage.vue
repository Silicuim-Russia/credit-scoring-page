<script setup>
import ButtonBasic from '@/components/ButtonBasic.vue'
import DeveloperCard from '@/components/DeveloperCard.vue'
import NumberStep from '@/components/NumberStep.vue'
import ResultBadge from '@/components/ResultBadge.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isDesktop = window.innerWidth > 640

const startForm = () => {
  router.push({ name: 'form' })
}

const teamMembers = [
  {
    firstName: 'Дмитрий',
    lastName: 'Кантур',
    role: 'Fullstack, Design',
    avatarName: 'dima.png',
    githubLink: 'https://github.com/noobweer',
    telegramLink: 'https://t.me/noobweer',
  },
  {
    firstName: 'Александр',
    lastName: 'Евдокимов',
    role: 'Data Scientist, backend',
    avatarName: 'sanya.png',
    githubLink: 'https://github.com/Alexhoup27',
    telegramLink: 'https://t.me/houp_27',
  },
]

const sourcesLinks = [
  {
    icon: 'github',
    desc: 'backend repo',
    url: '',
  },
  {
    icon: 'github',
    desc: 'frontend repo',
    url: '',
  },
  {
    icon: 'figma',
    desc: 'figma design',
    url: '',
  },
  {
    icon: 'collab',
    desc: 'google collab',
    url: '',
  },
]
</script>

<template>
  <div class="w-full pb-[16px] inline-flex flex-col justify-start items-center gap-8">
    <!-- Hero block -->
    <div
      class="w-full px-4 pt-10 pb-5 inline-flex justify-center items-center gap-12 flex-wrap content-center"
    >
      <div class="w-full max-w-[550px] inline-flex flex-col justify-start items-center gap-4">
        <span
          class="self-stretch text-center justify-start text-black text-5xl font-semibold font-['SF_Pro_Display'] leading-[48px]"
          >Кредитный скоринг</span
        >
        <div class="w-full w-[546px] text-center justify-start tracking-[-0.015rem]">
          <span class="text-black text-base font-medium font-['SF_Pro_Display'] leading-[18px]"
            >Проверь, как тебя видят банки: </span
          ><span
            class="text-[var(--accent-green-color)] text-base font-semibold font-['SF_Pro_Display'] leading-[18px]"
            >надёжный</span
          ><span class="text-black text-base font-medium font-['SF_Pro_Display'] leading-[18px]">
            заёмщик или клиент с </span
          ><span
            class="text-[var(--accent-red-color)] text-base font-semibold font-['SF_Pro_Display'] leading-[18px]"
            >рисками</span
          ><span class="text-black text-base font-medium font-['SF_Pro_Display'] leading-[18px]"
            >? Получи объективную оценку своей кредитоспособности за пару секунд.</span
          >
        </div>
        <ButtonBasic label="Попробовать сейчас" @click="startForm" />
      </div>
    </div>

    <!-- About project block -->
    <div class="self-stretch inline-flex flex-col justify-start items-center gap-2">
      <span class="text-black text-3xl font-semibold leading-loose">О проекте</span>

      <div
        class="w-full max-w-[660px] pl-3 pr-1.5 pt-1.5 pb-2 relative rounded inline-flex justify-start items-start gap-2.5 overflow-hidden"
      >
        <div class="w-[660px] h-16 left-0 top-0 absolute bg-black/10"></div>
        <div class="w-[3px] h-16 left-0 top-0 absolute bg-black"></div>
        <div
          class="self-stretch justify-start text-black text-base font-normal font-['SF_Pro_Display'] leading-[18px]"
        >
          Мы разработали сервис, который анализирует данные заёмщика с помощью модели машинного
          обучения, чтобы оценить его кредитную надёжность.
        </div>
      </div>
      <span
        class="text-center justify-start text-black text-base font-medium font-['SF_Pro_Display'] leading-[18px] tracking-[-0.015rem]"
        >Ссылки на исходный код и остальные ресурсы
      </span>
      <div class="inline-flex justify-start items-start gap-2">
        <a
          v-for="link in sourcesLinks"
          :key="link.url"
          :href="link.url"
          class="w-8 h-8 bg-black rounded-xl inline-flex justify-center items-center gap-2.5 overflow-hidden"
          ><img :src="`/src/assets/icons/${link.icon}.svg`" class="w-[24px] h-[24px]"
        /></a>
      </div>
    </div>

    <!-- How it works block -->
    <div class="self-stretch px-4 inline-flex flex-col justify-start items-center gap-4">
      <span class="text-black text-3xl font-semibold leading-loose">Как это работает</span>

      <div
        class="self-stretch inline-flex justify-center items-center gap-8 flex-wrap content-center"
      >
        <ResultBadge v-if="isDesktop" variant="safe" size="small" />
        <!-- Steps -->
        <div
          class="max-w-[328px] self-stretch flex flex-col justify-center items-center gap-2 mx-auto sm:mx-0"
        >
          <!-- Step 1 -->
          <div class="inline-flex justify-start items-start gap-2">
            <NumberStep :stepValue="1" />
            <span
              class="justify-start text-black text-base font-medium font-['SF_Pro_Display'] leading-[18px] tracking-[-0.015rem]"
              >Укажите базовую информацию о себе и своём финансовом поведении</span
            >
          </div>

          <!-- Step 2 -->
          <div class="inline-flex justify-start items-start gap-2">
            <NumberStep :stepValue="2" />
            <span
              class="justify-start text-black text-base font-medium font-['SF_Pro_Display'] leading-[18px] tracking-[-0.015rem]"
              >Модель машинного обучения сопоставляет ваши данные с тысячами аналогичных
              случаев</span
            >
          </div>

          <!-- Step 3 -->
          <div class="inline-flex justify-start items-start gap-2">
            <NumberStep :stepValue="3" />
            <span
              class="justify-start text-black text-base font-medium font-['SF_Pro_Display'] leading-[18px] tracking-[-0.015rem]"
              >Система выдаёт персональную оценку — вы надёжный заёмщик или рискованный для
              банка</span
            >
          </div>
        </div>
        <ResultBadge v-if="isDesktop" variant="risky" size="small" />
      </div>
    </div>

    <!-- Test version block -->
    <div class="self-stretch px-4 inline-flex flex-col justify-start items-center gap-4">
      <span class="text-black text-3xl font-semibold leading-loose">Тестовая версия</span>

      <div class="self-stretch inline-flex flex-col justify-start items-center gap-4">
        <div class="self-stretch inline-flex flex-col justify-start items-center gap-2">
          <div
            class="self-stretch text-center justify-start text-black text-base font-medium font-['SF_Pro_Display'] leading-[18px] tacking-[-0.015rem]"
          >
            Хотите узнать, насколько вы надёжный заёмщик?
          </div>
          <div
            class="self-stretch text-center justify-start text-black text-base font-medium font-['SF_Pro_Display'] leading-[18px] tacking-[-0.015rem]"
          >
            Пройдите тест — это займёт всего пару минут
          </div>
        </div>

        <ButtonBasic label="Попробовать сейчас" @click="startForm" />
      </div>
    </div>

    <!-- Our team block -->
    <div class="self-stretch px-4 inline-flex flex-col justify-start items-center gap-4">
      <span class="text-black text-3xl font-semibold leading-loose">Наша команда</span>

      <div class="self-stretch flex flex-wrap justify-center items-center gap-2">
        <DeveloperCard
          v-for="teamMember in teamMembers"
          :key="teamMember.avatarName"
          :firstName="teamMember.firstName"
          :lastName="teamMember.lastName"
          :role="teamMember.role"
          :avatarName="teamMember.avatarName"
          :githubLink="teamMember.githubLink"
          :telegramLink="teamMember.telegramLink"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
