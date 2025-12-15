<template>
  <div class="bg-[#1A1A1A] rounded-[12px] p-5 w-full">
    <div class="mb-4 flex items-center justify-between">
      <slot name="header" />
    </div>
    <div>
      <slot name="content" />
    </div>
  </div>
</template>
