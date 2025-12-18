<template>
  <AtomsCardsDetailsCard>
    <AtomsContainersLabelContainer :item="yearArr">
      <div class="flex items-center gap-2 text-white">
        <SvgsCalendar />
        <p>Released Year</p>
      </div>
    </AtomsContainersLabelContainer>
    <AtomsContainersLabelContainer :item="languageArr">
      <div class="flex items-center gap-2 text-white">
        <SvgsLenguaje />
        <p>Available Languages</p>
      </div>
    </AtomsContainersLabelContainer>
    <AtomsContainersRatingsContainer :item="props.ratings">
      <div class="flex items-center gap-2 text-white">
        <SvgsStar />
        <p>Ratings</p>
      </div>
    </AtomsContainersRatingsContainer>
    <AtomsContainersLabelContainer :item="genreArr">
      <div class="flex items-center gap-2 text-white">
        <SvgsGeneres />
        <p>Gernes</p>
      </div>
    </AtomsContainersLabelContainer>
  </AtomsCardsDetailsCard>
</template>

<script setup lang="ts">
import type { Rating } from "~/types/movie";

const props = defineProps<{
  year: string | number | string[];
  ratings: Rating[];
  language: string | string[];
  genre: string | string[];
}>();

function normalize(value: string | string[] | number): string[] {
  if (Array.isArray(value)) return value;
  if (typeof value === "number") return [String(value)];
  if (typeof value === "string") {
    return value
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);
  }
  return [];
}

const yearArr = normalize(props.year);
const languageArr = normalize(props.language);
const genreArr = normalize(props.genre);
</script>
