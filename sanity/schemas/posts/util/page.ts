import { createClient, groq } from "next-sanity";
import clientConfig from "../../../config/client-config";
import { Post } from "../types/page";

export async function getPosts(): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"]{
            _id,
            title,
            filter,
            description,
            publishedAt,
            "slug": slug.current,
            career,
            "image": image.asset->url,
            body,
            author->{
              _id,
              name,
              "slug": slug.current,
              career,
              "image": image.asset->url,
              description
            },
            category->{
              _id,
              title,
              "slug": slug.current
            },
            tag[]->{
              _id,
              title,
              "slug": slug.current
            }
    }`
  );
}

export async function getPost(slug: string): Promise<Post> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      filter,
      description,
      publishedAt,
      "slug": slug.current,
      career,
      "image": image.asset->url,
      body,
      author->{
        _id,
        name,
        "slug": slug.current,
        career,
        "image": image.asset->url,
        description
      },
      category->{
        _id,
        title,
        "slug": slug.current
      },
      tag[]->{
        _id,
        title,
        "slug": slug.current
      },
    }`,
    { slug }
  );
}
