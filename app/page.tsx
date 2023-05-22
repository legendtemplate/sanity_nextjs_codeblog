
import { getPosts } from "@/sa/schemas/posts/util/page";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/heroCard/Blogcard/page";
import { PortableText } from '@portabletext/react';

export default async function page() {
  const projects = await getPosts();

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-5">
      {projects.map((post) => (
        <div key={post._id}>
          <BlogCard
            title={post.title}
            bio={post.description}
            slug={post.slug}
            image={post.image}
            publishedAt={post.publishedAt}
            authorName={post.author.name}
            authorSlug={post.author.slug}
            cat={post.category.title}
            catSlug={post.category.slug}
          />
        </div>
      ))}
      
      {/* <PortableText value={post.body} /> */}
    </div>
  );
}


