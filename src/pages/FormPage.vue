<script setup>
import ButtonBasic from '@/components/ButtonBasic.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const stepCounter = ref(1)

const nextStep = () => {
  if (stepCounter.value < 7) {
    stepCounter.value += 1
  }
}

const prevStep = () => {
  if (stepCounter.value > 1) {
    stepCounter.value -= 1
  }
}

const pushHome = () => {
  router.push({ name: 'home' })
}

const gender = [
  { id: 'M', label: 'Мужской' },
  { id: 'F', label: 'Женский' },
]
const selectedGender = ref(gender[0].id)

const ownRealty = [
  { id: 'Y', label: 'Да, владею' },
  { id: 'N', label: 'Отсутствует' },
]
const selectedOwnRealty = ref(ownRealty[0].id)

const ownCar = [
  { id: 'Y', label: 'Да, владею' },
  { id: 'N', label: 'Отсутствует' },
]
const selectedOwnCar = ref(ownCar[0].id)

const incomeType = [
  { id: 'Working', label: 'Работающий' },
  { id: 'Pensioner', label: 'Пенсионер' },
  { id: 'State servant', label: 'Госслужащий' },
  { id: 'Student', label: 'Студент' },
  { id: 'Commercial associate', label: 'Коммерческий сотрудник' },
]
const selectedIncomeType = ref(incomeType[0].id)

const educationType = [
  { id: 'Higher education', label: 'Высшее' },
  { id: 'Academic degree', label: 'Учёная степень' },
  { id: 'Incomplete higher', label: 'Незаконченное высшее' },
  { id: 'Lower secondary', label: 'Неполное среднее' },
  { id: 'Secondary / secondary special', label: 'Среднее специальное' },
]
const selectedEducationType = ref(educationType[0].id)

const familyStatus = [
  { id: 'Married', label: 'Женат / замужем' },
  { id: 'Separated', label: 'Разведен(а)' },
  { id: 'Civil marriage', label: 'Гражданский брак' },
  { id: 'Widow', label: 'Вдовец / вдова' },
  { id: 'Single / not married', label: 'Холост / не замужем' },
]
const selectedFamilyStatus = ref(familyStatus[0].id)

const housingType = [
  { id: 'With parents', label: 'С родителями' },
  { id: 'House / apartment', label: 'Дом / квартира' },
  { id: 'Rented apartment', label: 'Арендованная квартира' },
  { id: 'Office apartment', label: 'Офисная квартира' },
  { id: 'Municipal apartment', label: 'Муниципальная квартира' },
]
const selectedHousingType = ref(housingType[0].id)

const occupationType = [
  { id: 'Laborers', label: 'Рабочий' },
  { id: 'Core staff', label: 'Ключевой персонал' },
  { id: 'Accountants', label: 'Бухгалтер' },
  { id: 'Managers', label: 'Менеджер' },
  { id: 'Drivers', label: 'Водитель' },
  { id: 'Sales staff', label: 'Отдел продаж' },
  { id: 'Cleaning staff', label: 'Уборщик' },
  { id: 'Cooking staff', label: 'Повар' },
  { id: 'Medicine staff', label: 'Медицинский работник' },
  { id: 'Security staff', label: 'Охранник' },
  { id: 'High skill tech staff', label: 'Технический специалист' },
  { id: 'Waiters/barmen staff', label: 'Официанты / бармены' },
  { id: 'Realty agents', label: 'Агент по недвижимости' },
  { id: 'HR staff', label: 'HR-специалист' },
  { id: 'IT staff', label: 'IT-специалист' },
]
const selectedOccupationType = ref(occupationType[0].id)

const birthdayDate = ref('2000-01-01')
const familyMembers = ref(0)
const children = ref(0)
const daysEmployed = ref(0)
const yearIncome = ref(0)

const sendDataToAnalyse = () => {
  const dateToday = new Date()
  const dateBirth = new Date(birthdayDate.value)

  const jsonData = {
    code_gender: selectedGender.value,
    flag_own_car: selectedOwnCar.value,
    flag_own_realty: selectedOwnRealty.value,
    name_income_type: selectedIncomeType.value,
    name_education_type: selectedEducationType.value,
    name_family_status: selectedFamilyStatus.value,
    name_housing_type: selectedHousingType.value,
    occupation_type: selectedOccupationType.value,
    amt_income_total: yearIncome.value,
    cnt_children: children.value,
    cnt_family_members: familyMembers.value,
    days_birth: -Math.floor((dateToday.getTime() - dateBirth.getTime()) / (1000 * 60 * 60 * 24)),
    days_employed: -Math.floor(daysEmployed.value),
    flag_mobil: 1,
    flag_work_phone: 1,
    flag_phone: 1,
    flag_email: 1,
  }
}
</script>

<template>
  <div class="w-full h-screen inline-flex justify-center items-start">
    <div
      class="w-full min-h-full self-stretch max-w-[720px] min-w-64 p-4 inline-flex flex-col justify-start items-center gap-[16px] self-center"
    >
      <!-- Header stepper -->
      <div class="self-stretch inline-flex flex-col justify-start items-center gap-1">
        <span
          class="self-stretch text-center justify-start text-black text-[20px] font-semibold font-['SF_Pro_Display'] leading-[20px] tracking-[-0.0075rem]"
          >Заполните все поля, чтобы узнать свой результат</span
        >
        <span
          class="justify-start text-black text-[16px] font-medium font-['SF_Pro_Display'] leading-[18px] tracking-[-0.015rem]"
          >Шаг {{ stepCounter }} из 7</span
        >
      </div>

      <!-- Step 1 -->
      <div
        v-if="stepCounter === 1"
        class="w-full gap-[16px] inline-flex flex-col justify-start items-center"
      >
        <!-- Birthday -->
        <div
          class="self-stretch min-w-[256px] inline-flex flex-col justify-start items-start gap-[8px]"
        >
          <div
            class="justify-start text-medium text-[16px] font-['SF_Pro_Display'] leading-[18px] tracking-[-0.0075rem]"
          >
            Дата рождения
          </div>
          <input
            v-model="birthdayDate"
            type="date"
            class="outline-none min-w-[128px] tracking-[-0.015rem] bg-black text-white px-4 py-3 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer flex-1 sm:flex-none text-[16px] font-['SF_Pro_Display'] leading-[18px]"
          />
        </div>

        <!-- Gender -->
        <div class="self-stretch inline-flex flex-col justify-start items-start gap-[8px]">
          <div
            class="justify-start text-medium text-[16px] font-['SF_Pro_Display'] leading-[18px] tracking-[-0.0075rem]"
          >
            Пол
          </div>
          <div
            class="self-stretch inline-flex justify-start items-start gap-2 flex-wrap content-start"
          >
            <div
              v-for="item in gender"
              :key="item.id"
              :class="selectedGender === item.id ? 'bg-black text-white' : 'bg-black/5 text-black'"
              @click="selectedGender = item.id"
              class="min-w-[128px] px-4 py-3 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer flex-1 sm:flex-none"
            >
              <div class="justify-start text-[16px] font-['SF_Pro_Display'] leading-[18px]">
                {{ item.label }}
              </div>
            </div>
          </div>
        </div>

        <!-- Realty -->
        <div class="self-stretch inline-flex flex-col justify-start items-start gap-[8px]">
          <div
            class="justify-start text-medium text-[16px] font-['SF_Pro_Display'] leading-[18px] tracking-[-0.0075rem]"
          >
            Наличие недвижимости
          </div>
          <div
            class="self-stretch inline-flex justify-start items-start gap-2 flex-wrap content-start"
          >
            <div
              v-for="item in ownRealty"
              :key="item.id"
              :class="
                selectedOwnRealty === item.id ? 'bg-black text-white' : 'bg-black/5 text-black'
              "
              @click="selectedOwnRealty = item.id"
              class="min-w-[128px] px-4 py-3 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer flex-1 sm:flex-none"
            >
              <div class="justify-start text-[16px] font-['SF_Pro_Display'] leading-[18px]">
                {{ item.label }}
              </div>
            </div>
          </div>
        </div>

        <!-- Car -->
        <div class="self-stretch inline-flex flex-col justify-start items-start gap-[8px]">
          <div
            class="justify-start text-medium text-[16px] font-['SF_Pro_Display'] leading-[18px] tracking-[-0.0075rem]"
          >
            Наличие автомобиля
          </div>
          <div
            class="self-stretch inline-flex justify-start items-start gap-2 flex-wrap content-start"
          >
            <div
              v-for="item in ownCar"
              :key="item.id"
              :class="selectedOwnCar === item.id ? 'bg-black text-white' : 'bg-black/5 text-black'"
              @click="selectedOwnCar = item.id"
              class="min-w-[128px] px-4 py-3 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer flex-1 sm:flex-none"
            >
              <div class="justify-start text-[16px] font-['SF_Pro_Display'] leading-[18px]">
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
        <div
          class="self-stretch min-w-[256px] inline-flex flex-col justify-start items-start gap-[8px]"
        >
          <div
            class="justify-start text-medium text-[16px] font-['SF_Pro_Display'] leading-[18px] tracking-[-0.0075rem]"
          >
            Кол-во человек в семье
          </div>
          <input
            type="number"
            v-model="familyMembers"
            class="w-full outline-none min-w-[128px] tracking-[-0.015rem] bg-black text-white px-4 py-3 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer flex-1 sm:flex-none text-[18px] font-['SF_Pro_Display'] leading-[18px]"
          />
        </div>

        <div
          class="self-stretch min-w-[256px] inline-flex flex-col justify-start items-start gap-[8px]"
        >
          <div
            class="justify-start text-medium text-[16px] font-['SF_Pro_Display'] leading-[18px] tracking-[-0.0075rem]"
          >
            Кол-во детей в семье
          </div>
          <input
            type="number"
            v-model="children"
            class="w-full outline-none min-w-[128px] tracking-[-0.015rem] bg-black text-white px-4 py-3 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer flex-1 sm:flex-none text-[18px] font-['SF_Pro_Display'] leading-[18px]"
          />
        </div>

        <div
          class="self-stretch min-w-[256px] inline-flex flex-col justify-start items-start gap-[8px]"
        >
          <div
            class="justify-start text-medium text-[16px] font-['SF_Pro_Display'] leading-[18px] tracking-[-0.0075rem]"
          >
            Опыт работы (в днях)
          </div>
          <input
            type="number"
            v-model="daysEmployed"
            class="w-full outline-none min-w-[128px] tracking-[-0.015rem] bg-black text-white px-4 py-3 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer flex-1 sm:flex-none text-[18px] font-['SF_Pro_Display'] leading-[18px]"
          />
        </div>

        <div
          class="self-stretch min-w-[256px] inline-flex flex-col justify-start items-start gap-[8px]"
        >
          <div
            class="justify-start text-medium text-[16px] font-['SF_Pro_Display'] leading-[18px] tracking-[-0.0075rem]"
          >
            Годовой доход ($)
          </div>
          <input
            type="number"
            v-model="yearIncome"
            class="w-full outline-none min-w-[128px] tracking-[-0.015rem] bg-black text-white px-4 py-3 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer flex-1 sm:flex-none text-[18px] font-['SF_Pro_Display'] leading-[18px]"
          />
        </div>
      </div>

      <!-- Step 3 -->
      <div
        v-if="stepCounter === 3"
        class="self-stretch inline-flex flex-col justify-start items-center gap-1"
      >
        <div class="self-stretch min-w-64 flex flex-col justify-start items-start gap-1">
          <div
            class="justify-start text-medium text-[16px] font-['SF_Pro_Display'] leading-[18px] tracking-[-0.0075rem]"
          >
            Тип дохода
          </div>
          <div
            class="self-stretch inline-flex justify-start items-start gap-2 flex-wrap content-start"
          >
            <div
              v-for="item in incomeType"
              :key="item.id"
              :class="
                selectedIncomeType === item.id ? 'bg-black text-white' : 'bg-black/5 text-black'
              "
              @click="selectedIncomeType = item.id"
              class="min-w-[128px] px-4 py-3 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer flex-1 sm:flex-none"
            >
              <div class="justify-start text-[16px] font-['SF_Pro_Display'] leading-[18px]">
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
        <div class="self-stretch inline-flex flex-col justify-start items-start gap-[8px]">
          <div
            class="justify-start text-medium text-[16px] font-['SF_Pro_Display'] leading-[18px] tracking-[-0.0075rem]"
          >
            Образование
          </div>
          <div
            class="self-stretch inline-flex justify-start items-start gap-2 flex-wrap content-start"
          >
            <div
              v-for="item in educationType"
              :key="item.id"
              :class="
                selectedEducationType === item.id ? 'bg-black text-white' : 'bg-black/5 text-black'
              "
              @click="selectedEducationType = item.id"
              class="min-w-[128px] px-4 py-3 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer flex-1 sm:flex-none"
            >
              <div class="justify-start text-[16px] font-['SF_Pro_Display'] leading-[18px]">
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
        <div class="self-stretch inline-flex flex-col justify-start items-start gap-[8px]">
          <div
            class="justify-start text-medium text-[16px] font-['SF_Pro_Display'] leading-[18px] tracking-[-0.0075rem]"
          >
            Семейное положение
          </div>
          <div
            class="self-stretch inline-flex justify-start items-start gap-2 flex-wrap content-start"
          >
            <div
              v-for="item in familyStatus"
              :key="item.id"
              :class="
                selectedFamilyStatus === item.id ? 'bg-black text-white' : 'bg-black/5 text-black'
              "
              @click="selectedFamilyStatus = item.id"
              class="min-w-[128px] px-4 py-3 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer flex-1 sm:flex-none"
            >
              <div class="justify-start text-[16px] font-['SF_Pro_Display'] leading-[18px]">
                {{ item.label }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 6 -->
      <div
        v-if="stepCounter === 6"
        class="self-stretch inline-flex flex-col justify-start items-center gap-1"
      >
        <div class="self-stretch inline-flex flex-col justify-start items-start gap-[8px]">
          <div
            class="justify-start text-medium text-[16px] font-['SF_Pro_Display'] leading-[18px] tracking-[-0.0075rem]"
          >
            Место проживания
          </div>
          <div
            class="self-stretch inline-flex justify-start items-start gap-2 flex-wrap content-start"
          >
            <div
              v-for="item in housingType"
              :key="item.id"
              :class="
                selectedHousingType === item.id ? 'bg-black text-white' : 'bg-black/5 text-black'
              "
              @click="selectedHousingType = item.id"
              class="min-w-[128px] px-4 py-3 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer flex-1 sm:flex-none"
            >
              <div class="justify-start text-[16px] font-['SF_Pro_Display'] leading-[18px]">
                {{ item.label }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="stepCounter === 7"
        class="self-stretch inline-flex flex-col justify-start items-center gap-1"
      >
        <div class="self-stretch inline-flex flex-col justify-start items-start gap-[8px]">
          <div
            class="justify-start text-medium text-[16px] font-['SF_Pro_Display'] leading-[18px] tracking-[-0.0075rem]"
          >
            Род занятий
          </div>
          <div
            class="self-stretch inline-flex justify-start items-start gap-2 flex-wrap content-start"
          >
            <div
              v-for="item in occupationType"
              :key="item.id"
              :class="
                selectedOccupationType === item.id ? 'bg-black text-white' : 'bg-black/5 text-black'
              "
              @click="selectedOccupationType = item.id"
              class="w-full min-w-[128px] px-4 py-3 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer sm:flex-none"
            >
              <div class="justify-start text-[16px] font-['SF_Pro_Display'] leading-[18px]">
                {{ item.label }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom button -->
      <div
        class="sticky bottom-0 left-0 w-full h-full pb-[8px] flex justify-center items-end gap-2 z-10"
      >
        <ButtonBasic
          v-if="stepCounter === 1"
          @click="pushHome"
          label="На главную"
          :isFullWidth="true"
        />
        <ButtonBasic v-if="stepCounter >= 2" @click="prevStep" label="Назад" :isFullWidth="true" />
        <ButtonBasic
          v-if="stepCounter < 7"
          @click="nextStep"
          label="Продолжить"
          :isFullWidth="true"
        />
        <ButtonBasic
          v-if="stepCounter === 7"
          @click="sendDataToAnalyse"
          label="Завершить"
          :isFullWidth="true"
        />
      </div>
    </div>
  </div>
</template>
