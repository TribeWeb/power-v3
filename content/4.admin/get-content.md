---
title: Get Products
navigation:
  icon: i-lucide-file-text
  badge:
  label: Get Content
sheets:
  - Unique
  - Products
  - dc-dc-converters
contentFolderPath: '../../content/2.products'
---

# Get Products from Google Sheets

Get the products from Google Sheets and create `.md` files in the `content` folder.

contentFolderPath: <ProseCode>{{ $doc.contentFolderPath }}</ProseCode>

::google-sheets{:sheets="sheets" :contentFolderPath="contentFolderPath"}
::
