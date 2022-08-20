import Link from "@/components/Link";
import siteMetadata from "@/data/siteMetadata";
import formatDate from "@/lib/utils/formatDate";

interface IAuthorProps {
  name: string;
  biography?: string;
  photo?: string;
}

interface ISEOProps {
  title: string;
  description: string;
  keywords: string;
  image?: string;
}

interface IPostProps {
  title: string;
  slug: string;
  coverImage: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: [];
  author: IAuthorProps;
  seo: ISEOProps;
}
export interface IPostsProps {
  posts: IPostProps[];
}

const Posts = ({ posts }: IPostsProps): JSX.Element => {
  return (
    <>
      <header className="mt-16 sm:text-center">
        <h1 className="text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold">
          Últimas notas
        </h1>
        <p className="text-lg text-slate-700 mt-4">
          {siteMetadata.description}
        </p>
      </header>

      {!posts.length && (
        <div className="mt-16 text-lg sm:text-center">
          {"Nenhuma nota encontrada."}
        </div>
      )}

      <div className="relative mt-16 sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
        {posts.length > 0 && (
          <>
            <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 sm:block"></div>
            <div className="space-y-16">
              {posts.map((post) => {
                const { slug, date, title, excerpt } = post;

                return (
                  <article key={slug} className="relative group">
                    <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70"></div>
                    <svg
                      viewBox="0 0 9 9"
                      className="hidden absolute right-full mr-6 top-2 text-slate-200 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
                    >
                      <circle
                        cx="4.5"
                        cy="4.5"
                        r="4.5"
                        stroke="currentColor"
                        className="fill-white"
                        strokeWidth="2"
                      ></circle>
                    </svg>
                    <div className="relative">
                      <h3 className="text-base font-semibold tracking-tight text-slate-900 pt-8 lg:pt-0">
                        {title}
                      </h3>
                      <div
                        className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: excerpt }}
                      />
                      <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                        <dd className="whitespace-nowrap text-sm leading-6">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                    </div>

                    <Link
                      href={`/blog/${slug}`}
                      className="flex items-center text-sm text-sky-500 font-medium"
                    >
                      <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></span>
                    </Link>
                  </article>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Posts;
