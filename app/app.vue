<script setup lang="ts">

const items = ref([
  {
    label: 'Guide',
    icon: 'i-lucide-book-open',
    to: '/getting-started',
    children: [
      {
        label: 'Introduction',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'i-lucide-house'
      },
      {
        label: 'Installation',
        description: 'Learn how to install and configure Nuxt UI in your application.',
        icon: 'i-lucide-cloud-download'
      },
      {
        label: 'Icons',
        icon: 'i-lucide-smile',
        description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
      },
      {
        label: 'Colors',
        icon: 'i-lucide-swatch-book',
        description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
        description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
      }
    ]
  },
  {
    label: 'Composables',
    icon: 'i-lucide-database',
    to: '/composables',
    children: [
      {
        label: 'defineShortcuts',
        icon: 'i-lucide-file-text',
        description: 'Define shortcuts for your application.',
        to: '/composables/define-shortcuts'
      },
      {
        label: 'useModal',
        icon: 'i-lucide-file-text',
        description: 'Display a modal within your application.',
        to: '/composables/use-modal'
      },
      {
        label: 'useSlideover',
        icon: 'i-lucide-file-text',
        description: 'Display a slideover within your application.',
        to: '/composables/use-slideover'
      },
      {
        label: 'useToast',
        icon: 'i-lucide-file-text',
        description: 'Display a toast within your application.',
        to: '/composables/use-toast'
      }
    ]
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    to: '/components',
    active: true,
    children: [
      {
        label: 'Link',
        icon: 'i-lucide-file-text',
        description: 'Use NuxtLink with superpowers.',
        to: '/components/link'
      },
      {
        label: 'Modal',
        icon: 'i-lucide-file-text',
        description: 'Display a modal within your application.',
        to: '/components/modal'
      },
      {
        label: 'NavigationMenu',
        icon: 'i-lucide-file-text',
        description: 'Display a list of links.',
        to: '/components/navigation-menu'
      },
      {
        label: 'Pagination',
        icon: 'i-lucide-file-text',
        description: 'Display a list of pages.',
        to: '/components/pagination'
      },
      {
        label: 'Popover',
        icon: 'i-lucide-file-text',
        description: 'Display a non-modal dialog that floats around a trigger element.',
        to: '/components/popover'
      },
      {
        label: 'Progress',
        icon: 'i-lucide-file-text',
        description: 'Show a horizontal bar to indicate task progression.',
        to: '/components/progress'
      }
    ]
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    badge: '3.8k',
    to: 'https://github.com/nuxt/ui',
    target: '_blank'
  },
  {
    label: 'Help',
    icon: 'i-lucide-circle-help',
    disabled: true
  }
])

const route = useRoute()

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('landing'), {
  transform: data => data.map(item => ({ ...item, to: item.path })) || [],
})
// const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('admin'), {
  // transform: data => data.find(item => item.path === '/products')?.children || [],
// })
// const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('content'), {
//   server: false,
// })

const color = 'white'

// useHead({
//   meta: [
//     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//     { key: 'theme-color', name: 'theme-color', content: color },
//   ],
//   link: [
//     { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
//     { rel: 'canonical', href: `https://content3.nuxt.dev${withoutTrailingSlash(route.path)}` },
//   ],
//   htmlAttrs: {
//     lang: 'en',
//   },
// })

// useServerSeoMeta({
//   ogSiteName: 'Nuxt Content',
//   twitterCard: 'summary_large_image',
// })

provide('navigation', navigation)
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator color="#FFF" />

    <AppHeader :links="navigation" /> 

    <NuxtLayout>
     <pre> {{ navigation }} </pre>
      <NuxtPage />
    </NuxtLayout>

    <AppFooter />

    <!-- <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly> -->
  </UApp>
</template>