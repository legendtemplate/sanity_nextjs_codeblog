import { getPost } from "@/sa/schemas/posts/util/page";
import { PortableText } from "@portabletext/react";
import Write from "../../components/heroCard/write/page";
import Container from "@/components/layout/container/page";
type Props = {
  params: { slug: string };
};
interface PropsData {
  _id: string;
  title: string;
  slug: string;
}
export default async function Page({ params }: Props) {
  const post = await getPost(params.slug);

  return (
    <Container>
      <div className="md:w-3/4 w-full mt-5">
        <Write
          title={post.title}
          image={post.image}
          publishedAt={post.publishedAt}
          authorName={post.author.name}
          authorSlug={post.author.slug}
          cat={post.category.title}
          catSlug={post.category.slug}
        />
        <div className="text-lg text-gray-700 mt-10 content">
          <PortableText value={post.body} />
        </div>
        <div className="tag flex mr-4 py-6">
            <span className="text-xl text-red-500 mt-1 pr-12">Tags: </span>
            <ul  className="flex">
          {post.tag.map((tag: PropsData) => (
              <li className="" key={tag._id}>
                <a className=" bg-red-400 rounded text-white py-2 px-3 mr-2 inline-block" href={tag.slug}>{tag.title}</a>
              </li>
          ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
