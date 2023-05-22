export const apiVersion =  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-20'
export const projectId =  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'g2fjurly'
export const dataset =  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
