import Image from "next/image";
import img from "../public/img.png";

export default function Home() {
  return (
    <div>
      <h1>My Personal Website</h1>
      <Image src={img} alt="Sunset over a river" width={400} />
    </div>
  );
}
