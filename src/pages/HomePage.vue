<script setup>
import ButtonBasic from '@/components/ButtonBasic.vue'
import DeveloperCard from '@/components/DeveloperCard.vue'
import NumberStep from '@/components/NumberStep.vue'
import ResultBadge from '@/components/ResultBadge.vue'

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
    <!-- Header block -->
    <div class="w-80 max-w-[564px] min-w-64 inline-flex flex-col justify-start items-center gap-4">
      <!-- Title -->
      <div class="self-stretch flex flex-col justify-start items-center gap-2">
        <div
          class="self-stretch text-center justify-start text-5xl font-['SF_Pro_Display'] font-[600]"
        >
          Кредитный скоринг
        </div>
        <div
          class="self-stretch text-center justify-start text-base font-medium font-['SF_Pro_Display'] leading-[18px]"
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

      <div class="self-stretch inline-flex flex-col justify-center items-start gap-4">
        <div
          class="self-stretch text-center justify-start text-black text-base font-medium leading-[18px] font-['SF_Pro_Display']"
        >
          Мы разработали сервис, который анализирует данные заёмщика с помощью модели машинного
          обучения
        </div>
        <div
          class="self-stretch text-center justify-start text-base font-medium leading-[18px] font-['SF_Pro_Display']"
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

      <!-- Steps -->
      <div class="self-stretch inline-flex flex-col justify-center items-start gap-2">
        <!-- Step 1 -->
        <div class="self-stretch inline-flex justify-start items-center gap-2">
          <NumberStep :stepValue="1" />
          <span class="justify-start text-base font-medium font-['SF_Pro_Display'] leading-none"
            >Заполните форму</span
          >
        </div>

        <!-- Step 2 -->
        <div class="self-stretch inline-flex justify-start items-start gap-2">
          <NumberStep :stepValue="2" />
          <span class="justify-start text-base font-medium font-['SF_Pro_Display'] leading-none"
            >Данные анализируются моделью, обученной на тысячах реальных историй заёмщиков</span
          >
        </div>

        <!-- Step 3 -->
        <div class="self-stretch inline-flex justify-start items-center gap-2">
          <NumberStep :stepValue="3" />
          <span class="justify-start text-base font-medium font-['SF_Pro_Display'] leading-none"
            >Получаете результат</span
          >
        </div>
      </div>

      <div class="inline-flex justify-start items-center gap-4">
        <ResultBadge variant="safe" />
        <ResultBadge variant="risky" />
      </div>
    </div>

    <!-- Test version block -->
    <div class="self-stretch px-4 inline-flex flex-col justify-start items-center gap-4">
      <span class="text-black text-3xl font-semibold leading-loose">Тестовая версия</span>

      <div class="self-stretch inline-flex flex-col justify-start items-center gap-4">
        <div class="self-stretch inline-flex flex-col justify-start items-center">
          <div
            class="justify-start text-base font-medium text-center font-['SF_Pro_Display'] leading-none"
          >
            Хотите узнать, насколько вы надёжный заёмщик?
          </div>
          <div
            class="justify-start text-base font-medium text-center font-['SF_Pro_Display'] leading-none"
          >
            Заполните форму и получите результат за несколько секунд.
          </div>
        </div>

        <ButtonBasic label="Попробовать сейчас" />
      </div>
    </div>

    <!-- Our team block -->
    <div class="self-stretch px-4 inline-flex flex-col justify-start items-center gap-4">
      <span class="text-black text-3xl font-semibold leading-loose">Наша команда</span>

      <div class="inline-flex justify-start items-start gap-2">
        <DeveloperCard
          v-for="teamMember in teamMembers"
          :key="teamMember.avatarName"
          :firstName="teamMember.firstName"
          :lastName="teamMember.lastName"
          :role="teamMember.role"
          :avatarName="teamMember.avatarName"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
