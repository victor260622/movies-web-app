<template>
  <div class="max-w-7xl mx-auto px-4">
    <AtomsContainersSectionContainer
      title="Elige tu plan"
      subtitle="Selecciona el plan que mejor se adapte a tus necesidades."
      :gridClass="'grid grid-cols-1 lg:grid-cols-3 gap-8'"
      :hasButtons="true"
      :isYearly="isYearly"
      :isMonthly="isMonthly"
      @yearly="handleYearly"
      @monthly="handleMonthly"
    >
      <MoleculesCardPriceCard
        title="Basic Plan"
        subtitle="Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."
        :price="isYearly ? '$99.99' : '$9.99'"
        :year="isYearly"
      >
        <template #custombuttons>
          <AtomsButtonsCustomButton size="lg" variant="primary">
            Choose Plan
          </AtomsButtonsCustomButton>
        </template>
      </MoleculesCardPriceCard>

      <MoleculesCardPriceCard
        title="Standard Plan"
        subtitle="Access to a wider selection of movies and shows, including most new releases and exclusive content"
        :price="isYearly ? '$129.99' : '$12.99'"
        :year="isYearly"
      >
        <template #custombuttons>
          <AtomsButtonsCustomButton size="lg" variant="primary">
            Choose Plan
          </AtomsButtonsCustomButton>
        </template>
      </MoleculesCardPriceCard>

      <MoleculesCardPriceCard
        title="Premium Plan"
        subtitle="Access to a widest selection of movies and shows, including all new releases and Offline Viewing"
        :price="isYearly ? '$149.99' : '$14.99'"
        :year="isYearly"
      >
        <template #custombuttons>
          <AtomsButtonsCustomButton size="lg" variant="primary">
            Choose Plan
          </AtomsButtonsCustomButton>
        </template>
      </MoleculesCardPriceCard>
    </AtomsContainersSectionContainer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let isYearly = ref(false);
let isMonthly = ref(true);

function handleYearly() {
  isYearly.value = true;
  isMonthly.value = false;
}

function handleMonthly() {
  isYearly.value = false;
  isMonthly.value = true;
}
</script>
