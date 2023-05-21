// // "use client"
// import { getCard } from "../../sanity/config/sanity-utils";
// import { PortableText } from "@portabletext/react";
// import Write from "@/components/heroCard/write/page";
// import Image from "next/image";
// import Container from "@/components/layout/container/page";

// type Props = {
//   params: { slug: string };
// };

// export default async function Page({ params }: Props) {
//   const page = await getCard(params.slug);

//   return (
//     <Container>
//       <div className="grid lg:grid-cols-3 grid-cols-1 py-4 gap-4">
//         <div className="col-span-2 mt-2">
//           <Write
//             title={page.title}
//             image={page.image}
//             publishedAt={page.publishedAt}
//             authorName={page.author.name}
//             authorSlug={page.author.slug}
//             cat={page.category.title}
//             catSlug={page.category.slug}
//           />
//           <PortableText value={page.body} />

//           <div className="navigation-wrap justify-between flex">
//             <a className="prev" href="#">
//               <span className="lnr lnr-arrow-left"></span>Prev Post
//             </a>
//             <a className="next" href="#">
//               Next Post<span className="lnr lnr-arrow-right"></span>
//             </a>
//           </div>
//         </div>
//         <div className="mt-2">2</div>
//       </div>
//     </Container>
//   );
// }
import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
