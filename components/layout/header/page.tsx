import News from "@/components/layout/header/news/page";
import Social from "@/components/layout/header/social/page";

export default function page() {
  return (
    <div className="bg-black py-4 pr-2 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="basis-1/4 ">
          <Social />
        </div>
        <div className="basis-3/4 ">
          <News />
        </div>
      </div>
    </div>
  );
}
