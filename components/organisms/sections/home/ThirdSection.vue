<template>
  <div class="flex w-full justify-center mt-32">
    <div class="max-w-7xl w-full p-4">
      <AtomsContainersDevicesContainer
        title="We Provide you streaming experience across various devices."
        description="Disfruta de nuestra plataforma en una variedad de dispositivos, incluyendo smartphones, tablets, smart TVs y computadoras."
      >
        <AtomsCardsDevicesCards
          v-for="device in devices"
          :key="device.id"
          :device="device"
          :description="device.description"
          :title="device.name"
        >
          <template #icon>
            <component :is="device.icon" />
          </template>
        </AtomsCardsDevicesCards>
      </AtomsContainersDevicesContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Component } from "vue";
import SmarthPhone from "@/components/svgs/SmarthPhone.vue";
import Gaming from "@/components/svgs/Gaming.vue";
import Laptop from "@/components/svgs/Laptop.vue";
import SmartTv from "@/components/svgs/SmartTv.vue";
import Tablet from "@/components/svgs/Tablet.vue";
import VrGlasses from "@/components/svgs/VrGlasses.vue";

interface Device {
  id: number;
  name: string;
  description: string;
  icon: Component;
}

const devices: Device[] = [
  {
    id: 1,
    name: "Smartphone",
    icon: SmarthPhone,
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 2,
    name: "Tablet",
    icon: Tablet,
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 3,
    name: "Smart TV",
    icon: SmartTv,
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 4,
    name: "Laptops",
    icon: Laptop,
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 5,
    name: "Gaming Consoles",
    icon: Gaming,
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 6,
    name: "VR Headsets",
    icon: VrGlasses,
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
];
</script>
