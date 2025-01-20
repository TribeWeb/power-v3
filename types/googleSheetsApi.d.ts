  declare type GoogleSheetsApiValues = string[][]

declare interface GoogleSheetsApiResult {
  values: GoogleSheetsApiValues
}

declare interface ProductObject {
  [key: string]: string
}

  declare type TransformedGoogleSheetsApiResult = ProductObject[]
