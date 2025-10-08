<script setup>
import ButtonBasic from '@/components/ButtonBasic.vue'
import { ref } from 'vue'

const stepCounter = ref(1)

const nextStep = () => {
  if (stepCounter.value < 6) {
    stepCounter.value += 1
  }
}

const prevStep = () => {
  if (stepCounter.value > 1) {
    stepCounter.value -= 1
  }
}

const gender = [
  { id: 'M', label: 'Мужской' },
  { id: 'F', label: 'Женский' },
]
const selectedGender = ref(gender[0].id)

const ownRealty = [
  { id: 'Y', label: 'Есть' },
  { id: 'N', label: 'Отсутствует' },
]
const selectedOwnRealty = ref(ownRealty[0].id)

const ownCar = [
  { id: 'Y', label: 'Есть' },
  { id: 'N', label: 'Отсутствует' },
]
const selectedOwnCar = ref(ownCar[0].id)

const workPhone = [
  { id: 'Y', label: 'Есть' },
  { id: 'N', label: 'Отсутствует' },
]
const selectedWorkPhone = ref(workPhone[0].id)

const email = [
  { id: 'Y', label: 'Есть' },
  { id: 'N', label: 'Отсутствует' },
]
const selectedEmail = ref(email[0].id)

const incomeType = [
  { id: 'Working', label: 'Работающий' },
  { id: 'Commercial associate', label: 'Коммерческий сотрудник' },
  { id: 'Pensioner', label: 'Пенсионер' },
  { id: 'State servant', label: 'Госслужащий' },
  { id: 'Student', label: 'Студент' },
]
const selectedIncomeType = ref(incomeType[0].id)

const educationType = [
  { id: 'Secondary / secondary special', label: 'Среднее / среднее специальное' },
  { id: 'Higher education', label: 'Высшее' },
  { id: 'Incomplete higher', label: 'Незаконченное высшее' },
  { id: 'Lower secondary', label: 'Начальное' },
  { id: 'Academic degree', label: 'Академическая степень' },
]
const selectedEducationType = ref(educationType[0].id)

const familyStatus = [
  { id: 'Single / not married', label: 'Холост / не замужем' },
  { id: 'Married', label: 'Женат / замужем' },
  { id: 'Civil marriage', label: 'Гражданский брак' },
  { id: 'Separated', label: 'Разведен(а)' },
  { id: 'Widow', label: 'Вдовец / вдова' },
]
const selectedFamilyStatus = ref(familyStatus[0].id)
</script>

<template>
  <div
    class="w-full max-w-[790px] self-stretch inline-flex flex-col justify-start items-center gap-4 py-4 px-2"
  >
    <!-- Header stepper -->
    <div class="self-stretch inline-flex flex-col justify-start items-center gap-1">
      <span
        class="justify-start text-black text-[20px] font-bold font-['SF_Pro_Display'] leading-[20px] tracking-[-0.01488rem]"
        >Шаг {{ stepCounter }} из 7</span
      >
      <span
        class="self-stretch text-center justify-start text-black text-[16px] font-medium font-['SF_Pro_Display'] leading-[16px] tracking-[-0.006rem]"
        >Заполните все поля для анализа</span
      >
    </div>

    <!-- Step 1 -->
    <div
      v-if="stepCounter === 1"
      class="w-full gap-[16px] inline-flex flex-col justify-start items-center"
    >
      <!-- Gender -->
      <div class="self-stretch min-w-64 flex flex-col justify-start items-start gap-1">
        <div class="justify-start text-black text-lg font-['SF_Pro_Display'] leading-7">Пол</div>
        <div class="self-stretch inline-flex justify-start items-start gap-2">
          <div
            v-for="item in gender"
            :key="item.id"
            :class="
              selectedGender === item.id
                ? 'outline outline-[1.50px] outline-offset-[-1.50px] outline-black'
                : ''
            "
            @click="selectedGender = item.id"
            class="flex-1 h-10 px-4 bg-black/5 rounded inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
          >
            <div class="justify-start text-black text-lg font-['SF_Pro_Display'] leading-7">
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>

      <!-- Realty -->
      <div class="self-stretch min-w-64 flex flex-col justify-start items-start gap-1">
        <div class="justify-start text-black text-lg font-['SF_Pro_Display'] leading-7">
          Наличие недвижимости
        </div>
        <div class="self-stretch inline-flex justify-start items-start gap-2">
          <div
            v-for="item in ownRealty"
            :key="item.id"
            :class="
              selectedOwnRealty === item.id
                ? 'outline outline-[1.50px] outline-offset-[-1.50px] outline-black'
                : ''
            "
            @click="selectedOwnRealty = item.id"
            class="flex-1 h-10 px-4 bg-black/5 rounded inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
          >
            <div class="justify-start text-black text-lg font-['SF_Pro_Display'] leading-7">
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>

      <!-- Car -->
      <div class="self-stretch min-w-64 flex flex-col justify-start items-start gap-1">
        <div class="justify-start text-black text-lg font-['SF_Pro_Display'] leading-7">
          Наличие автомобиля
        </div>
        <div class="self-stretch inline-flex justify-start items-start gap-2">
          <div
            v-for="item in ownCar"
            :key="item.id"
            :class="
              selectedOwnCar === item.id
                ? 'outline outline-[1.50px] outline-offset-[-1.50px] outline-black'
                : ''
            "
            @click="selectedOwnCar = item.id"
            class="flex-1 h-10 px-4 bg-black/5 rounded inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
          >
            <div class="justify-start text-black text-lg font-['SF_Pro_Display'] leading-7">
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>

      <!-- Work phone -->
      <div class="self-stretch min-w-64 flex flex-col justify-start items-start gap-1">
        <div class="justify-start text-black text-lg font-['SF_Pro_Display'] leading-7">
          Рабочий номер телефона
        </div>
        <div class="self-stretch inline-flex justify-start items-start gap-2">
          <div
            v-for="item in workPhone"
            :key="item.id"
            :class="
              selectedWorkPhone === item.id
                ? 'outline outline-[1.50px] outline-offset-[-1.50px] outline-black'
                : ''
            "
            @click="selectedWorkPhone = item.id"
            class="flex-1 h-10 px-4 bg-black/5 rounded inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
          >
            <div class="justify-start text-black text-lg font-['SF_Pro_Display'] leading-7">
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>

      <!-- Email -->
      <div class="self-stretch min-w-64 flex flex-col justify-start items-start gap-1">
        <div class="justify-start text-black text-lg font-['SF_Pro_Display'] leading-7">
          Электронная почта
        </div>
        <div class="self-stretch inline-flex justify-start items-start gap-2">
          <div
            v-for="item in email"
            :key="item.id"
            :class="
              selectedEmail === item.id
                ? 'outline outline-[1.50px] outline-offset-[-1.50px] outline-black'
                : ''
            "
            @click="selectedEmail = item.id"
            class="flex-1 h-10 px-4 bg-black/5 rounded inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
          >
            <div class="justify-start text-black text-lg font-['SF_Pro_Display'] leading-7">
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 2 -->
    <div
      v-if="stepCounter === 2"
      class="self-stretch inline-flex flex-col justify-start items-center gap-1"
    >
      <div class="self-stretch min-w-64 flex flex-col justify-start items-start gap-1">
        <div class="justify-start text-black text-lg font-['SF_Pro_Display'] leading-7">
          Тип дохода
        </div>
        <div
          class="self-stretch inline-flex justify-center items-start gap-2 flex-wrap content-start"
        >
          <div
            v-for="item in incomeType"
            :key="item.id"
            :class="
              selectedIncomeType === item.id
                ? 'outline outline-[1.50px] outline-offset-[-1.50px] outline-black'
                : ''
            "
            @click="selectedIncomeType = item.id"
            class="flex-1 h-10 min-w-64 px-4 bg-black/5 rounded inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
          >
            <div class="justify-start text-black text-lg font-['SF_Pro_Display'] leading-7">
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 3 -->
    <div
      v-if="stepCounter === 3"
      class="self-stretch inline-flex flex-col justify-start items-center gap-1"
    >
      <div class="self-stretch min-w-64 flex flex-col justify-start items-start gap-1">
        <div class="justify-start text-black text-lg font-['SF_Pro_Display'] leading-7">
          Уровень образования
        </div>
        <div
          class="self-stretch inline-flex justify-center items-start gap-2 flex-wrap content-start"
        >
          <div
            v-for="item in educationType"
            :key="item.id"
            :class="
              selectedEducationType === item.id
                ? 'outline outline-[1.50px] outline-offset-[-1.50px] outline-black'
                : ''
            "
            @click="selectedEducationType = item.id"
            class="flex-1 h-10 min-w-64 px-4 bg-black/5 rounded inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
          >
            <div class="justify-start text-black text-lg font-['SF_Pro_Display'] leading-7">
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 4 -->
    <div
      v-if="stepCounter === 4"
      class="self-stretch inline-flex flex-col justify-start items-center gap-1"
    >
      <div class="self-stretch min-w-64 flex flex-col justify-start items-start gap-1">
        <div class="justify-start text-black text-lg font-['SF_Pro_Display'] leading-7">
          Семейное положение
        </div>
        <div
          class="self-stretch inline-flex justify-center items-start gap-2 flex-wrap content-start"
        >
          <div
            v-for="item in familyStatus"
            :key="item.id"
            :class="
              selectedFamilyStatus === item.id
                ? 'outline outline-[1.50px] outline-offset-[-1.50px] outline-black'
                : ''
            "
            @click="selectedFamilyStatus = item.id"
            class="flex-1 h-10 min-w-64 px-4 bg-black/5 rounded inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
          >
            <div class="justify-start text-black text-lg font-['SF_Pro_Display'] leading-7">
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 5 -->
    <div
      v-if="stepCounter === 5"
      class="self-stretch inline-flex flex-col justify-start items-center gap-1"
    >
      STEP 5
    </div>

    <div
      v-if="stepCounter === 6"
      class="self-stretch inline-flex flex-col justify-start items-center gap-1"
    >
      STEP 6
    </div>

    <!-- Bottom button -->
    <div class="w-full inline-flex absolute gap-2 bottom-2 px-2">
      <ButtonBasic v-if="stepCounter >= 2" @click="prevStep" label="Назад" />
      <ButtonBasic @click="nextStep" label="Продолжить" :isFullWidth="true" />
    </div>
  </div>
</template>
