import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/type">By type</Link>
      <Link href="/generation">By generation</Link>
    </div>
  );
};

export default Home;
