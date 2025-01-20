import { z } from 'zod'

const writeQuery = z.object({
  path: z.string(),
  folder: z.string()
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { path, folder } = await getValidatedQuery(event, (query) => writeQuery.parse(query))
  
  try {
    return writeFile(body, path, folder)
  }
  catch (err) {
    console.error(err)
  }

  return {}
})
