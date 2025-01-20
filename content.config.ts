import { defineContentConfig, defineCollection, z } from '@nuxt/content'

// https://www.digitalocean.com/community/tools/glob

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: [{
        include: '1.index.md'
      }, 
      {
        include: '2.products/index.md'
      },
      {
        include: '3.about-us.md'
      },
      {
        include: '4.admin/**/*.md'
      },
      {
        include: '4.admin/*.yml'
      }]
    }),
    admin: defineCollection({
      type: 'page',
      source: 'admin/**/*.md',
      schema: z.object({
        title: z.string().trim(),
        sheets: z.array(z.string()),
        contentFolderPath: z.string()
      })
    }),
    products: defineCollection({
      type: 'page',
      source: {
        include: 'products/**/*.md',
        exclude: ['products/**/index.md']
      },
      schema: z.object({
        manufacturerSlug: z.string(),
        manufacturerName: z.string(),
        modelRange: z.string(),
        modelSeries: z.string(),
        modelCode: z.string(),
        supercedesModelCodes: z.array(z.string()),
        alsoReferredModelCodes: z.array(z.string()),
        GTIN: z.string(),
        productCode: z.string(),
        productSlug: z.string(),
        spCanonicalUrl: z.union([z.literal(''),z.string().trim().url()]),
        cpCanonicalUrl: z.union([z.string(), z.literal("")]),
        kpCanonicalUrl: z.union([z.string(), z.literal("")]),
        vInNom: z.array(z.union([z.literal(0), z.number()])),
        vInMin: z.number(),
        vInMax: z.number(),
        vSupplyMin: z.number(),
        vSupplyMax: z.number(),
        supplyPhase: z.string(),
        vOutNom: z.array(z.union([z.literal(0), z.number()])),
        vOutMin: z.number(),
        vOutMax: z.number(),
        iOutMin: z.number(),
        iOutMax: z.number(),
        pOutMax: z.number(),
        mountingStyles: z.array(z.string()),
        width: z.number(),
        height: z.number(),
        depth: z.number(),
        weight: z.number(),
        rackHeight: z.string(),
        HSCode: z.string(),
        accreditations: z.array(z.string()),
        listPrice: z.number(),
        handlingId: z.string(),
        features: z.array(z.string())
      })
    })
  }
})


