<template>
  <div class="max-w-7xl mx-auto px-4">
    <AtomsContainersSectionContainer
      title="Frequently Asked Questions"
      subtitle="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
    >
      <MoleculesCardQuestionCard
        v-for="(faq, index) in faqs"
        :key="index"
        :counterLabel="String(index + 1).padStart(2, '0')"
        :title="faq.title"
        :subtitle="faq.subtitle"
        class="py-3 border-b-2 border-red-gradient lg:border-none"
        :class="index < 6 ? 'border-b-2 border-red-gradient' : ''"
      />
    </AtomsContainersSectionContainer>
  </div>
</template>

<script setup lang="ts">
const faqs = [
  {
    title: "How does the system work?",
    subtitle:
      "Our system uses artificial intelligence to recommend movies based on your tastes and viewing habits.",
  },
  {
    title: "Can I customize my recommendations?",
    subtitle:
      "Yes, you can adjust your preferences in your profile so that the suggestions better suit you.",
  },
  {
    title: "Do I need a subscription?",
    subtitle:
      "Some basic features are free, but to access all recommendations you need a subscription.",
  },
  {
    title: "What data does the system use?",
    subtitle:
      "The system analyzes your viewing history and the ratings you give to movies.",
  },
  {
    title: "Can I share my lists?",
    subtitle:
      "Of course, you can create personalized lists and share them with your friends from the platform.",
  },
  {
    title: "Does it work on mobile devices?",
    subtitle:
      "Yes, the platform is optimized to work in mobile browsers and also has an app.",
  },
  {
    title: "What if I don’t like the recommendations?",
    subtitle:
      "You can mark movies as “not interested” and the system will learn from your choices.",
  },
  {
    title: "How often are recommendations updated?",
    subtitle:
      "Recommendations are constantly updated based on your activity and new additions to the catalog.",
  },
];
</script>

<style scoped>
.border-red-gradient {
  border-bottom: 2px solid;
  border-image: linear-gradient(to right, red, transparent) 1;
}
</style>
