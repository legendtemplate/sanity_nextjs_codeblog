import {structure} from './sanity/desk/index'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {colorInput} from '@sanity/color-input'
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
    deskTool({structure}),
    colorInput(),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
