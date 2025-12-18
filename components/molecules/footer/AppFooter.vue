<script setup lang="ts">
import type { NuxtLink } from "#components";
</script>

<template>
  <footer class="bg-[#0F0F0F] text-white py-12 px-6 lg:px-20">
    <div
      class="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-10"
    >
      <AtomsContainersFooterColumn
        title="Home"
        :links="['Categories', 'Devices', 'Pricing', 'FAQ']"
      />
      <AtomsContainersFooterColumn
        title="Movies"
        :links="['Genres', 'Trending', 'New Release', 'Popular']"
      />
      <AtomsContainersFooterColumn
        title="Shows"
        :links="['Genres', 'Trending', 'New Release', 'Popular']"
      />
      <AtomsContainersFooterColumn title="Support" :links="['Contact Us']" />
      <AtomsContainersFooterColumn
        title="Subscription"
        :links="['Plans', 'Features']"
      />
      <AtomsContainersFooterColumn title="Connect With Us">
        <div class="flex gap-4 mt-2">
          <NuxtLink to="#" class="text-[#999] hover:text-white">
            <SvgsLinkdin />
          </NuxtLink>
          <NuxtLink to="#" class="text-[#999] hover:text-white">
            <SvgsTwitter />
          </NuxtLink>
          <NuxtLink to="#" class="text-[#999] hover:text-white">
            <SvgsFacebook />
          </NuxtLink>
        </div>
      </AtomsContainersFooterColumn>
    </div>

    <div
      class="max-w-7xl mx-auto border-t border-[#333] pt-6 text-sm text-[#999] flex flex-col lg:flex-row justify-between items-center gap-4"
    >
      <p>©2023 streamvib, All Rights Reserved</p>
      <div class="flex gap-4">
        <a href="#" class="hover:text-white">Terms of Use</a>
        <a href="#" class="hover:text-white">Privacy Policy</a>
        <a href="#" class="hover:text-white">Cookie Policy</a>
      </div>
    </div>
  </footer>
</template>
