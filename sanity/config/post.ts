import { createClient, groq } from "next-sanity";
import { Post } from '@/types/sanity/Post'
import clientConfig from "./client/config";
import {react} from './data'

// react page
export async function getReact(): Promise<Post[]> {
  return createClient(clientConfig).fetch(react);
}

// home page

export async function getCards(): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`    *[_type == 'post'][0...10] {
      _id,
      title,
      description,
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
  )
}

// written area
export async function getCard(slug: string): Promise<Post> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      body,
      "slug": slug.current,
      publishedAt,
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
    }`,
    { slug }
  )
}