import { groq } from "next-sanity";

export const react = groq`*[_type == "post" && filter == "React Js"  && defined(slug.current)]{
  _id,
  filter,
      title,
      "slug": slug.current,
      publishedAt,
      body,
      "image": mainImage.asset->url,
      author->{
        name,
        "slug": slug.current,
      },
      category->{
        title,
        "slug": slug.current,
      },
      tag[]->{
        title,
        "slug": slug.current,
      }
}`

// import { createClient, groq } from "next-sanity";
// import { Card } from "../../types/index";
// import clientConfig from './client/config'

// export async function getpostLCard(): Promise<Card[]> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "cardPost" && filter == "Large"]{
//       _id,
//       title,
//       filter,
//       "slug": slug.current,
//       publishedAt,
//       "image": mainImage.asset->url,
//       author->{
//         name,
//         "slug": slug.current,
//       },
//       category->{
//         title,
//         "slug": slug.current,
//       },
//       tag[]->{
//         title,
//         "slug": slug.current,
//       }
//     }`
//   )
// }



// export async function getpostWrittenArea(slug: string): Promise<Card> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "cardPost" && slug.current == $slug][0]{
//       _id,
//       title,
//       filter,
//       "slug": slug.current,
//       publishedAt,
//       "image": mainImage.asset->url,
//       author->{
//         name,
//         "slug": slug.current,
//       },
//       category->{
//         title,
//         "slug": slug.current,
//       },
//       tag[]->{
//         title,
//         "slug": slug.current,
//       }
//     }`,
//     { slug }
//   )
// }

// export async function getProject(slug: string): Promise<Card> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "project" && slug.current == $slug][0]{
//       _id,
//       _createdAt,
//       name,
//       "slug": slug.current,
//       "image": image.asset->url,
//       url,
//       content
//     }`,
//     { slug }
//   )
// }




// import { createClient, groq } from "next-sanity";

// import { Card } from '@/types/sanity/Card'
// import clientConfig from "./client/config";


// export async function getLCards(): Promise<Card[]> {
//     return createClient(clientConfig).fetch(
//       groq`*[_type == "cardPost" && filter == "Large"]{
//         _id,
//         title,
//         filter,
//         "slug": slug.current,
//         publishedAt,
//         body,
//         "image": mainImage.asset->url,
//         author->{
//           name,
//           "slug": slug.current,
//         },
//         category->{
//           title,
//           "slug": slug.current,
//         },
//         tag[]->{
//           title,
//           "slug": slug.current,
//         }
//       }`
//     )
//   }

//   export async function getSCards(): Promise<Card[]> {
//     return createClient(clientConfig).fetch(
//       groq`*[_type == "cardPost" && filter == "Small"]{
//         _id,
//         title,
//         filter,
//         "slug": slug.current,
//         publishedAt,
//         body,
//         "image": mainImage.asset->url,
//         author->{
//           name,
//           "slug": slug.current,
//         },
//         category->{
//           title,
//           "slug": slug.current,
//         },
//         tag[]->{
//           title,
//           "slug": slug.current,
//         }
//       }`
//     )
//   }

//   export async function getCard(slug: string): Promise<Card> {
//     return createClient(clientConfig).fetch(
//       groq`*[_type == "cardPost" && slug.current == $slug][0]{
//         _id,
//         title,
//         body,
//         "slug": slug.current,
//         publishedAt,
//         "image": mainImage.asset->url,
//         author->{
//           name,
//           "slug": slug.current,
//         },
//         category->{
//           title,
//           "slug": slug.current,
//         },
//         tag[]->{
//           title,
//           "slug": slug.current,
//         }
//       }`,
//       { slug }
//     )
//   }