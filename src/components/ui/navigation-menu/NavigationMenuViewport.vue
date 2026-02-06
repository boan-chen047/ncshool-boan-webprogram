<script setup lang="ts">
import type { NavigationMenuViewportProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  NavigationMenuViewport,
  useForwardProps,
} from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<NavigationMenuViewportProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div class="absolute left-0 top-full flex justify-center">
    <NavigationMenuViewport
      v-bind="forwardedProps"
      :class="
        cn(
          'origin-top-center relative mt-1.5 overflow-hidden rounded-md border-none bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90  hover:bg-white/30  focus:bg-white/20 data-[active]:bg-white/20 data-[state=open]:bg-white/80  z-10',
          
          /* 👇 修正重點 1：高度 (Height) */
          /* 同時支援 reka 和 radix 兩種變數名稱，避免高度為 0 */
          'h-[var(--reka-navigation-menu-viewport-height,var(--radix-navigation-menu-viewport-height))]',
          
          /* 👇 修正重點 2：寬度 (Width) */
          'w-full md:w-[var(--reka-navigation-menu-viewport-width,var(--radix-navigation-menu-viewport-width))]',
          
          /* 👇 修正重點 3：位置 (Left) */
          'left-[var(--reka-navigation-menu-viewport-left,var(--radix-navigation-menu-viewport-left))]',
          
          props.class,
        )
      "
    />
  </div>
</template>
