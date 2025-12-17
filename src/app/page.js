import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" text-2xl font-semibold text-black">
      <h1>
        lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum
        dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet
        consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur
        adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing
        elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum
        dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet
        consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur
        adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing
        elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum
        dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet
        consectetur adipisicing elit.
      </h1>
      <Link href="/about"> Go to About Page </Link>
    </div>
  );
}
