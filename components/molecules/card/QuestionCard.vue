<template>
    <div class="">
        <div class="flex justify-center gap-4 w-full items-center">
        <AtomsContainersCounterContainer :label="counterLabel" />
        <div class="flex flex-col flex-1 justify-center">
            <AtomsContainersQuestionContainer
            :title="title"
            :subtitle="subtitle"
            />
        </div>
        <AtomsButtonsMoreActionsButton :more="isActive" @click="toggleActive" />
    </div>
    <div class="h-[40px]">

        <AtomsSlidersSubTitleSlide class="ml-20" :show="isActive">
        {{ subtitle }}
        </AtomsSlidersSubTitleSlide>
    </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ counterLabel: string; title: string; subtitle: string }>();

const isActive = ref(false);

function toggleActive() {
  isActive.value = !isActive.value;
}
</script>

