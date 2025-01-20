<script setup lang="ts">
import { productSchema } from '../../../app/utils/transformZod'
// ['Unique', 'AC-DC', 'ToDo'] in the frontmatter of the page

interface Props {
  sheets: string[]
  contentFolderPath: string
}

const { sheets = ['sheet1'], contentFolderPath = '../../content' } = defineProps<Props>()

const state = reactive({
  sheet: undefined
})

// https://content3.nuxt.dev/docs/collections/types#schema-overrides
// title, description (in body?), navigation || slug, folder, layout

function transformToArrayOfObjects(values: GoogleSheetsApiValues) {
  const transformed = values.map((value) => {
    const keys: string[] = values[0] || ['']
    const row: Product = {}
    value.map((_, j: number) => {
      const key: string = keys[j] || ''
      row[key] = value[j]
    })
    return row
  })
  return transformed.splice(1)
}

const { data: products, status, execute } = useFetch(() => `/api/import/${state.sheet}`, {
  immediate: false, 
  watch: false,
  transform: (googleSheetsApiResult: GoogleSheetsApiReturn) => {
    return transformToArrayOfObjects(googleSheetsApiResult.values)
  }
})

const productsLength = computed(() => products.value?.length || 0)
const logsLength = computed(() => logs.value?.length || 0)

const logs = ref<string[]>([])
async function start(arr: Product[]) {
  const transformed = arr.map(async (productObject: Product) => {
    const payload = productSchema.parse(productObject)
    const log = await $fetch<string>(`/api/write?path=${contentFolderPath}&folder=${state.sheet}`, {
      method: 'POST',
      body: payload
    })
    return logs.value.push(log)
  })
  return transformed
}
</script>

<template>
  <UContainer>
    <UForm
      :state="state"
      class="space-y-4"
    >
      <UFormField
        label="Google Sheet name"
        name="sheet"
      >
        <USelect
          v-model="state.sheet"
          :items="sheets"
          label="Name of sheet to import"
          icon="i-heroicons-document-chart-bar-20-solid"
          class="w-60"
        />
      </UFormField>
      <UFormField>
        <UButton
          label="Get product data from google sheets"
          icon="i-heroicons-document-arrow-down-20-solid"
          :disabled="status === 'pending' || !state.sheet"
          :loading="status === 'pending'"
          @click.prevent="execute()"
        />
      </UFormField>
      <UFormField>
        <UButton
          v-if="products?.length"
          label="Write data to files"
          icon="i-heroicons-document-plus-20-solid"
          :disabled="!products"
          @click.prevent="start(products)"
        />
      </UFormField>
    </UForm>
    <UProgress class="mt-6"
    :modelValue="logsLength"
    :max="productsLength"
    status
    :getValueLabel="((value: number, max: number) => `${value} of ${max}`)"
  />
    <UCollapsible class="flex flex-col gap-2 w-full mt-6">
    <UButton
      label="Writing progress"
      color="neutral"
      variant="subtle"
      trailing-icon="i-lucide-chevron-down"
      block
    />

    <template #content>
      <pre class="text-xs">{{ logs }}</pre>
    </template>
  </UCollapsible>
    <UCard
      v-for="(product, p) in products"
      :key="p"
      class="mt-6"
    >
      <template #header>
        <div> {{ product.productCode }}</div>
      </template>

      <div
        v-for="(val, key, i) in product"
        :key="i"
      >
        <b>{{ key }} :</b> {{ val }}
      </div>

      <template #footer>
        <div>---</div>
      </template>
    </UCard>
  </UContainer>
</template>
