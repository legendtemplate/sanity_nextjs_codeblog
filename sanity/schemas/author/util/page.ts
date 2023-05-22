import { createClient, groq } from "next-sanity";
import clientConfig from "../../../config/client-config";
import { Author } from "../types/page";

export async function getPages(): Promise<Author[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "author"]{
        author->{
            _id,
            name,
            "slug": slug.current,
            career,
            "image": image.asset->url,
            description
          }
    }`
  );
}

export async function getPage(slug: string): Promise<Author> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "author" && slug.current == $slug][0]{
        author->{
            _id,
            name,
            "slug": slug.current,
            career,
            "image": image.asset->url,
            description
          }
    }`,
    { slug }
  );
}
