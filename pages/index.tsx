import type { NextPage } from "next";

import { PageSEO } from "@/components/SEO";
import Posts from "@/layouts/Posts";

const Blog: NextPage = () => {
  return (
    <>
      <PageSEO />
      <main className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
        <Posts posts={[]} />
      </main>
    </>
  );
};

export default Blog;
