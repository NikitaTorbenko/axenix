<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import icArrowRight from "shared/ui/Ico/ic_arrow-right.svg";
import { watch } from "vue";
import { ref } from "vue";

interface IProps {
  title: string;
  subtitle: string;
  isStopPropagation?: boolean;
  isOpen?: boolean;
  click?: () => void;
}

const props = defineProps<IProps>();

const isOpen = ref(false);
const isAnimate = ref(false);
const { width } = useWindowSize();

watch(
  () => props.isOpen,
  () => {
    props.isOpen ? showPopup() : hidePopup();
  }
);

const showPopup = () => {
  isOpen.value = true;
  setTimeout(() => {
    isAnimate.value = true;
  }, 1);
};

const hidePopup = () => {
  isAnimate.value = false;
  setTimeout(() => {
    isOpen.value = false;
  }, 200);
};
</script>
<template>
  <div class="flex flex-col gap-2 duration-300">
    <div
      @click="() => props.click?.()"
      class="bg-white h-[56px] min-h-[56px] min-[1440px]:h-[100px] min-[1440px]:min-h-[100px] flex justify-between cursor-pointer duration-300 hover:scale-x-[1.02]"
    >
      <div
        @click="!isStopPropagation ? (isOpen ? hidePopup() : showPopup()) : null"
        class="flex justify-between px-6 items-center w-full opacity-50 duration-300 cursor-pointer hover:opacity-100"
      >
        <div>
          <h4 class="text-xl font-bold">{{ props.title }}</h4>
          <p v-if="width > 1440" class="text-base font-medium">
            {{ props.subtitle }}
          </p>
        </div>
        <icArrowRight />
      </div>
    </div>
    <div
      class="bg-white duration-300 px-4 py-6 relative"
      v-if="isOpen"
      :class="
        isAnimate
          ? 'h-full opacity-100 duration-300'
          : 'h-0 opacity-0 duration-300'
      "
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>
<style lang="scss"></style>
