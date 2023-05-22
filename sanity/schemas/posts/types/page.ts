import { PortableTextBlock } from "sanity"

export type Post = {
  _id: string,
  title: string,
  filter: string,
  description: string,
  slug: string,
  publishedAt: number,
  image: string,
  body: PortableTextBlock[],
  author :{
    name: string,
    slug: string,
    career: string,
    image: string,
    description: string,
  },
  category :{
    _id: string,
    title: string,
    slug: string,
  },
  tag : {
    map(arg0: (tag: PropsData) => import("react").JSX.Element): import("react").ReactNode;
    _id: string,
    title: string,
    slug: string,
  },
};