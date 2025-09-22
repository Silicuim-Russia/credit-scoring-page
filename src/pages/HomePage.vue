<script setup>
import ButtonBasic from '@/components/ButtonBasic.vue'
import DeveloperCard from '@/components/DeveloperCard.vue'
import NumberStep from '@/components/NumberStep.vue'
import ResultBadge from '@/components/ResultBadge.vue'
import { ref } from 'vue'

const isMobile = ref(window.innerWidth <= 400)

const teamMembers = [
  {
    firstName: 'Дмитрий',
    lastName: 'Кантур',
    role: 'Frontend, backend',
    avatarName: 'dima.png',
    githubLink: 'https://github.com/noobweer',
    telegramLink: 'https://t.me/noobweer',
  },
  {
    firstName: 'Александр',
    lastName: 'Евдокимов',
    role: 'Data Scientist',
    avatarName: 'sanya.png',
    githubLink: 'https://github.com/Alexhoup27',
    telegramLink: 'https://t.me/houp_27',
  },
]
</script>

<template>
  <div class="w-full py-[16px] inline-flex flex-col justify-start items-center gap-8">
    <!-- Hero section -->
    <div
      v-if="!isMobile"
      class="self-stretch p-4 inline-flex justify-center items-center gap-12 flex-wrap content-center"
    >
      <!-- Left side illustrations -->
      <div class="w-72 h-60 relative">
        <img
          class="w-32 h-32 left-[280px] top-[128px] absolute origin-top-left rotate-180 rounded-3xl"
          src="/illustrations/illust1.jpg"
        />
        <img
          class="w-32 h-32 left-0 top-[112px] absolute rounded-3xl"
          src="/illustrations/illust2.jpg"
        />
      </div>
      <!-- Hero info -->
      <div class="max-w-[564px] min-w-64 inline-flex flex-col justify-start items-center gap-4">
        <!-- Title -->
        <div class="self-stretch flex flex-col justify-start items-center gap-2">
          <div
            class="self-stretch text-center justify-start text-5xl font-['SF_Pro_Display'] font-[600]"
          >
            Кредитный скоринг
          </div>
          <div
            class="self-stretch text-center justify-start text-base md:text-[20px] font-medium font-['SF_Pro_Display'] leading-[18px] md:leading-[28px] tracking-[-0.00625rem]"
          >
            Узнай, насколько надёжным заёмщиком считают тебя банки
          </div>
        </div>

        <!-- Buttons -->
        <div
          class="w-full max-w-96 inline-flex justify-center items-start gap-2 flex-wrap content-start"
        >
          <ButtonBasic label="Узнать больше" />
          <ButtonBasic variant="outline" label="Попробовать" />
        </div>
      </div>
      <!-- Right side illustrations -->
      <div class="w-72 h-60 relative">
        <img class="w-32 h-32 left-0 top-0 absolute rounded-3xl" src="/illustrations/illust3.jpg" />
        <img
          class="w-32 h-32 left-[152px] top-[112px] absolute rounded-3xl"
          src="/illustrations/illust4.jpg"
        />
      </div>
    </div>

    <!-- Hero info -->
    <div
      v-else
      class="max-w-[564px] min-w-64 inline-flex flex-col justify-start items-center gap-4"
    >
      <!-- Title -->
      <div class="self-stretch flex flex-col justify-start items-center gap-2">
        <div
          class="self-stretch text-center justify-start text-5xl font-['SF_Pro_Display'] font-[600]"
        >
          Кредитный скоринг
        </div>
        <div
          class="self-stretch text-center justify-start text-base md:text-[20px] font-medium font-['SF_Pro_Display'] leading-[18px] md:leading-[28px] tracking-[-0.00625rem]"
        >
          Узнай, насколько надёжным заёмщиком считают тебя банки
        </div>
      </div>

      <!-- Buttons -->
      <div
        class="w-full max-w-96 inline-flex justify-center items-start gap-2 flex-wrap content-start"
      >
        <ButtonBasic label="Узнать больше" />
        <ButtonBasic variant="outline" label="Попробовать" />
      </div>
    </div>

    <!-- About project block -->
    <div class="self-stretch inline-flex flex-col justify-start items-center gap-2">
      <span class="text-black text-3xl font-semibold leading-loose">О проекте</span>

      <div
        class="md:max-w-[600px] self-stretch flex flex-col justify-center items-center gap-4 mx-auto tracking-[-0.00625rem]"
      >
        <div
          class="self-stretch text-center justify-start text-black text-base font-medium md:text-[20px] leading-[18px] md:leading-[28px] font-['SF_Pro_Display']"
        >
          Мы разработали сервис, который анализирует данные заёмщика с помощью модели машинного
          обучения
        </div>
        <div
          class="self-stretch text-center justify-start text-base font-medium md:text-[20px] leading-[18px] md:leading-[28px] font-['SF_Pro_Display']"
        >
          <span class="text-black">Достаточно заполнить форму, и система покажет прогноз: </span
          ><span class="text-(--accent-green-color)">надёжный</span
          ><span class="text-black"> ли вы клиент или есть </span
          ><span class="text-(--accent-red-color)">риски</span
          ><span class="text-black"> для банка</span>
        </div>
      </div>
    </div>

    <!-- How it works block -->
    <div class="self-stretch px-4 inline-flex flex-col justify-start items-center gap-4">
      <span class="text-black text-3xl font-semibold leading-loose">Как это работает</span>

      <div
        class="self-stretch inline-flex justify-center items-center gap-8 flex-wrap content-center"
      >
        <!-- Steps -->
        <div
          class="max-w-[328px] self-stretch flex flex-col justify-center items-center gap-2 mx-auto sm:mx-0"
        >
          <!-- Step 1 -->
          <div class="self-stretch inline-flex justify-start items-center gap-2">
            <NumberStep :stepValue="1" />
            <span
              class="justify-start text-base md:text-[20px] font-medium font-['SF_Pro_Display'] leading-none md:leading-[28px] tracking-[-0.00625rem]"
              >Заполняете форму</span
            >
          </div>

          <!-- Step 2 -->
          <div class="self-stretch inline-flex justify-start items-start gap-2">
            <NumberStep :stepValue="2" />
            <span
              class="justify-start text-base md:text-[20px] font-medium font-['SF_Pro_Display'] leading-none md:leading-[28px] tracking-[-0.00625rem]"
              >Данные анализируются моделью, обученной на тысячах реальных историй заёмщиков</span
            >
          </div>

          <!-- Step 3 -->
          <div class="self-stretch inline-flex justify-start items-center gap-2">
            <NumberStep :stepValue="3" />
            <span
              class="justify-start text-base md:text-[20px] font-medium font-['SF_Pro_Display'] leading-none md:leading-[28px] tracking-[-0.00625rem]"
              >Получаете результат</span
            >
          </div>
        </div>

        <!-- Badges -->
        <div class="inline-flex justify-start items-center gap-4">
          <ResultBadge variant="safe" />
          <ResultBadge variant="risky" />
        </div>
      </div>
    </div>

    <!-- Test version block -->
    <div class="self-stretch px-4 inline-flex flex-col justify-start items-center gap-4">
      <span class="text-black text-3xl font-semibold leading-loose">Тестовая версия</span>

      <div class="self-stretch inline-flex flex-col justify-start items-center gap-4">
        <div class="self-stretch inline-flex flex-col justify-start items-center gap-2">
          <div
            class="justify-start text-base md:text-[20px] font-medium text-center font-['SF_Pro_Display'] leading-none md:leading-[28px] tracking-[-0.00625rem]"
          >
            Хотите узнать, насколько вы надёжный заёмщик?
          </div>
          <div
            class="justify-start text-base md:text-[20px] font-medium text-center font-['SF_Pro_Display'] leading-none md:leading-[28px] tracking-[-0.00625rem]"
          >
            Заполните форму и получите результат за несколько секунд
          </div>
        </div>

        <ButtonBasic label="Попробовать сейчас" />
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
