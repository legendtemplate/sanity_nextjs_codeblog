
import Today from "./today/page";
import Latest from "./latest/page";
import Banner from "./banner/page";

export default function page() {
  return (
    <div className="lg:mr-4 mr-0">
      <Today />
      <Latest />
      <Banner />
    </div>
  );
}
