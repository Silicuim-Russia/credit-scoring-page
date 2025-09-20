<script setup>
import ButtonBasic from '@/components/ButtonBasic.vue'
import ResultBadge from '@/components/ResultBadge.vue'
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

    <ResultBadge />
  </div>
</template>

<style scoped></style>
