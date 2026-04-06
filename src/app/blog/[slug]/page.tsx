import { getBlogPosts, getPost } from "@/lib/data/blog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import Link from "next/link";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }

  const { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
  const ogImage = image ? `${baseURL}${image}` : `${baseURL}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseURL}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <section
      id="blog"
      className="flex flex-col justify-center items-center mx-auto min-h-screen py-12 w-full"
    >
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex flex-col justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDistanceToNow(new Date(post.metadata.publishedAt), {
              addSuffix: true,
              locale: fr,
            })}
          </p>
        </Suspense>
        <Link href="/blog" className="text-sm text-neutral-400 dark:text-neutral-600 underline">
          Voir tous les articles
        </Link>
      </div>
      <article
        className="prose-sm md:prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.source }}
      />

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseURL}${post.metadata.image}`
              : `${baseURL}/og?title=${post.metadata.title}`,
            url: `${baseURL}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Droninside",
            },
          }),
        }}
      />
    </section>
  );
}
