<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import type { NavigationMenuItem } from '@nuxt/ui'
 
const props = defineProps<{
  links: NavigationMenuItem[]
}>()

const { value: mode } = useColorMode()
const config = useRuntimeConfig().public

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const items = computed(() => props.links.map(({ icon, ...link }) => link))

defineShortcuts({
  meta_g: () => {
    window.open('https://github.com/nuxt/ui/tree/v3', '_blank')
  }
})
</script>

<template>
  <UHeader :ui="{ left: 'min-w-0' }" mode="drawer" :menu="{ shouldScaleBackground: true }">
    <template #left>
      <NuxtLink to="/" class="flex items-end gap-2 font-bold text-xl text-[var(--ui-text-highlighted)] min-w-0 focus-visible:outline-[var(--ui-primary)] shrink-0" aria-label="Nuxt UI">
        <ClientOnly> 
          <AppLogo
            v-bind="{ class: 'md:h-10 h-7 w-auto m-auto' }"
            primary="rgb(var(--color-primary-DEFAULT)"
            :accent="mode==='light' ? 'rgb(var(--color-primary-accentLight)' : 'rgb(var(--color-primary-accentDark)'"
          />
        </ClientOnly>
      <span class="font-feature text-3xl md:text-4xl text-gray-500 dark:text-gray-200"><span class="text-primary">Key</span>Power </span>

      </NuxtLink>
    </template>

    <!-- <UNavigationMenu :items="items" /> -->
    <UNavigationMenu :items="links" class="w-120 justify-center" highlight /> 

    <template #right>
      <UTooltip text="Search" :kbds="['meta', 'K']">
        <UContentSearchButton />
      </UTooltip>

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']" class="hidden lg:flex">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <template #content>
      <UNavigationMenu orientation="vertical" :items="links" class="-mx-2.5" />

      <USeparator type="dashed" class="mt-4 mb-6" />

      <!-- <div class="flex flex-col gap-2 w-[calc(100%+1.25rem)] mb-5.5 -mx-2.5">
        <FrameworkSelect />
        <ModuleSelect />
      </div> -->

      <UContentNavigation :navigation="navigation" highlight :ui="{ linkTrailingBadge: 'font-semibold uppercase' }">
        <template #link-title="{ link }">
          <span class="inline-flex items-center gap-0.5">
            {{ link.title }}

            <sup v-if="link.module === 'ui-pro' && link.path.startsWith('/components')" class="text-[8px] font-medium text-(--ui-primary)">PRO</sup>
          </span>
        </template>
      </UContentNavigation>
    </template>
  </UHeader>
</template>