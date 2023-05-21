// 'use client'

import Blogcard from "@/components/heroCard/Blogcard/page";
import Container from "@/components/layout/container/page";
import Bannner from "@/components/heroCard/banner/page";
import { getCards } from "../sanity/config/post";

export default async function page() {
  const Sposts = await getCards();

  return (
    <>
      <Container>
        {/* {Sposts.length}
      {Sposts.map((post) => (
              <div key={post._id}>
                <Scard
                  title={post.title}
                  slug={post.slug}
                  image={post.image}
                  publishedAt={post.publishedAt}
                  authorName={post.author.name}
                  authorSlug={post.author.slug}
                  cat={post.category.title}
                  catSlug={post.category.slug}
                />
              </div>
            ))} */}
        {/* <button onClick={clickLoadMore}>Load More</button> */}
        {/* <div className="pt-2 grid lg:grid-cols-5 grid-cols-1">
          <div className="px-1 h-full w-full lg:col-span-3 col-span-1 lg:mb-0 mb-2">
            {Lposts.map((post) => (
              <div key={post._id}>
                <Lcard
                  title={post.title}
                  slug={'/posts/' + post.slug}
                  image={post.image}
                  publishedAt={post.publishedAt}
                  authorName={post.author.name}
                  authorSlug={post.author.slug}
                  cat={post.category.title}
                  catSlug={post.category.slug}
                />
              </div>
            ))}
          </div>
          <div className="px-1 lg:col-span-2 col-span-1">
            {Sposts.map((post) => (
              <div key={post._id}>
                <Scard
                  title={post.title}
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
          </div>
        </div> */}
        {/* <div className="flex mt-16 lg:flex-row flex-col mb-12">
          <div className="lg:h-5/6 h-full px-2 ">
            <Blog />
          </div>
          <div className="lg:h-1/6 h-full px-4 bg-gray-100 pt-12 ">
            <RightBlog />
          </div>
        </div> */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 bg-gray-50 mt-6">
          {Sposts.map((post) => (
            <div key={post._id}>
              <Blogcard
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
        </div>
        <Bannner />
      </Container>
    </>
  );
}
