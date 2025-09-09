import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Calendar, Clock, User, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "블로그",
  description:
    "단기과열종목에 대한 유용한 정보와 주식시장 관련 인사이트를 제공하는 블로그입니다.",
  openGraph: {
    title: "블로그 | 단기과열종목 계산기",
    description:
      "단기과열종목에 대한 유용한 정보와 주식시장 관련 인사이트를 제공하는 블로그입니다.",
    url: "https://overheat-checker-web.vercel.app/blog",
    images: [
      {
        url: "/og-blog.png",
        width: 1200,
        height: 630,
        alt: "블로그 - 단기과열종목 계산기",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "블로그 | 단기과열종목 계산기",
    description:
      "단기과열종목에 대한 유용한 정보와 주식시장 관련 인사이트를 제공하는 블로그입니다.",
    images: ["/og-blog.png"],
  },
  alternates: {
    canonical: "/blog",
  },
};

const blogPosts = [
  {
    id: 1,
    title: "단기과열종목 지정조건을 계산하는 가장 쉬운 방법",
    excerpt:
      "단기과열종목 지정조건인 주가상승률, 거래회전율, 주가변동성을 쉽게 계산하는 방법을 소개합니다. 개인투자자가 매번 계산하기 어려운 복잡한 조건들을 간단하게 확인해보세요.",
    date: "2025-09-09",
    category: "블로그",
    slug: "easiest-way",
  },
  {
    id: 2,
    title: "단기과열종목 계산기를 만들어봤습니다",
    excerpt:
      "단기과열종목 지정 조건을 쉽게 확인할 수 있는 계산기를 만든 이유와 사용법을 소개합니다. 40일치 데이터부터 복잡한 공식까지 한 번에 계산해드립니다.",
    date: "2025-09-08",
    category: "블로그",
    slug: "introduction",
  },
];

const categories = ["전체", "블로그", "업데이트"];

export default function BlogPage() {
  return (
    <div className="bg-background p-4 pt-20">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* 헤더 */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">블로그</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            서비스 사용법 및 단기과열종목에 대한 유용한 정보를 제공합니다
          </p>
        </div>

        {/* 카테고리 필터 */}
        {/* <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === "전체"
                  ? "bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-100"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* 블로그 포스트 목록 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-100 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </CardDescription>

                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="inline-flex items-center text-blue-600 text-sm font-medium">
                      자세히 보기
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* 더 많은 포스트 로드 버튼 */}
        {/* <div className="text-center py-8">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors inline-flex items-center gap-2">
            <BookOpen className="h-4 w-4" />더 많은 글 보기
          </button>
        </div> */}

        {/* 메인 페이지로 돌아가기 */}
        <div className="text-center py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-medium"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            메인 페이지로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
