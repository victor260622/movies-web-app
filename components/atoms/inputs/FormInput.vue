<template>
  <div :class="containerClass">
    <label v-if="label" :for="inputId" :class="labelClass">{{ label }}</label>

    <div class="relative">
      <span
        v-if="$slots.leftIcon"
        class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"
      >
        <slot name="leftIcon" />
      </span>

      <input
        ref="inputRef"
        :id="inputId"
        :type="effectiveType"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="innerValue"
        :name="name"
        @input="onInput"
        @blur="$emit('blur')"
        @focus="$emit('focus')"
        :class="baseInputClass"
        :aria-invalid="hasError ? 'true' : 'false'"
      />

      <button
        v-if="eyeIcons && type === 'password'"
        type="button"
        @click="togglePassword()"
        class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 focus:outline-none"
        :aria-label="showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'"
        :title="showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'"
      >
        <transition name="fade-scale" mode="out-in">
          <slot name="eye" :show="showPassword">
            <svg
              v-if="showPassword"
              key="eye-off"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-5.05 0-9.3-3.2-11-8 1.05-2.91 2.96-5.23 5.32-6.72M9.9 4.24A10.94 10.94 0 0 1 12 4c5.05 0 9.3 3.2 11 8-.64 1.77-1.63 3.34-2.86 4.62M14.12 14.12a3 3 0 1 1-4.24-4.24"
              />
              <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
            <svg
              v-else
              key="eye-on"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </slot>
        </transition>
      </button>

      <span
        v-else-if="$slots.rightIcon"
        class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
      >
        <slot name="rightIcon" />
      </span>
    </div>

    <p v-if="helperText || error" :class="helperClass">
      {{ hasError ? error : helperText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick, watch } from "vue";

interface Props {
  modelValue?: string | number;
  label?: string;
  helperText?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  id?: string;
  name?: string;
  disabled?: boolean;
  error?: string;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
  containerClassName?: string;
  eyeIcons?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  size: "md",
  fullWidth: true,
  disabled: false,
  eyeIcons: false,
  className: "",
  containerClassName: "",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
  (e: "blur"): void;
  (e: "focus"): void;
}>();

const inputRef = ref<HTMLInputElement | null>(null);
const innerValue = ref<string | number | undefined>(props.modelValue);
watch(
  () => props.modelValue,
  (v) => {
    innerValue.value = v;
  },
);

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  innerValue.value =
    props.type === "number" ? Number(target.value) : target.value;
  emit("update:modelValue", innerValue.value);
};

const sizeClasses = computed(() => {
  switch (props.size) {
    case "sm":
      return "py-2 text-sm";
    case "lg":
      return "py-3 text-base";
    default:
      return "py-2.5 text-base";
  }
});

const slots = useSlots();
const paddingLeft = computed(() => (hasLeftIcon.value ? "pl-10" : "pl-3"));
const paddingRight = computed(() =>
  hasRightIconOrEye.value ? "pr-10" : "pr-3",
);

const hasError = computed(() => Boolean(props.error));
const hasLeftIcon = computed(() => !!slots.leftIcon);
const hasRightIconOrEye = computed(() => !!slots.rightIcon || props.eyeIcons);

const widthClass = computed(() => (props.fullWidth ? "w-full" : "w-auto"));

const baseClasses = computed(() =>
  [
    "block rounded-md border shadow-sm placeholder-gray-400",
    "focus:outline-none focus:ring-2",
    "disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed",
    hasError.value
      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
      : "border-gray-300",
    paddingLeft.value,
    paddingRight.value,
    sizeClasses.value,
    widthClass.value,
    props.className,
  ]
    .filter(Boolean)
    .join(" "),
);

const labelClass = computed(() =>
  [
    "block font-medium text-gray-700 mb-1",
    props.size === "sm"
      ? "text-sm"
      : props.size === "lg"
        ? "text-base"
        : "text-sm",
  ].join(" "),
);

const helperClass = computed(() =>
  [
    "mt-1",
    props.size === "sm"
      ? "text-xs"
      : props.size === "lg"
        ? "text-sm"
        : "text-xs",
    hasError.value ? "text-red-600" : "text-gray-500",
  ].join(" "),
);

const showPassword = ref(false);
const effectiveType = computed(() =>
  props.type === "password" && showPassword.value ? "text" : props.type,
);
const togglePassword = async () => {
  const current = inputRef.value?.value;
  showPassword.value = !showPassword.value;
  await nextTick();
  if (inputRef.value && typeof current === "string") {
    inputRef.value.value = current;
  }
};

const inputId = computed(() => props.id || props.name || undefined);

const baseInputClass = baseClasses;
const containerClass = computed(() =>
  [props.fullWidth ? "w-full" : "inline-block", props.containerClassName]
    .filter(Boolean)
    .join(" "),
);
</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition:
    opacity 150ms ease,
    transform 150ms ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
