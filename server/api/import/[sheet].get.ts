export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const sheet = getRouterParam(event, 'sheet')

  try {
    const googleApiKey = config.googleApiKey
    const spreadsheetId = config.spreadsheetId
    const sheetRange = `${sheet}!A:AQ`

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetRange}?key=${googleApiKey}`
    const getRows = await $fetch(url)
    return getRows
  }
  catch (err) {
    console.error(err)
  }
  return {}
})
