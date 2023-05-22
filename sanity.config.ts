// plugins
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {codeInput} from '@sanity/code-input'
import {colorInput} from '@sanity/color-input'

import {defineConfig} from 'sanity'
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: schema,
  },
  
  plugins: [
    deskTool(),
    codeInput(),
    colorInput(),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
