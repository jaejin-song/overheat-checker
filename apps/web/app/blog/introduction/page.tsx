import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "단기과열종목 계산기를 만들어봤습니다",
  description:
    "단기과열종목 지정 조건을 쉽게 확인할 수 있는 계산기를 만든 이유와 사용법을 소개합니다.",
  openGraph: {
    title: "단기과열종목 계산기를 만들어봤습니다 | 단기과열종목 계산기 블로그",
    description:
      "단기과열종목 지정 조건을 쉽게 확인할 수 있는 계산기를 만든 이유와 사용법을 소개합니다.",
    url: "https://overheat-checker-web.vercel.app/blog/overheat-calculator-introduction",
    images: [
      {
        url: "/og-blog-post.png",
        width: 1200,
        height: 630,
        alt: "단기과열종목 계산기를 만들어봤습니다",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "단기과열종목 계산기를 만들어봤습니다",
    description:
      "단기과열종목 지정 조건을 쉽게 확인할 수 있는 계산기를 만든 이유와 사용법을 소개합니다.",
    images: ["/og-blog-post.png"],
  },
  alternates: {
    canonical: "/blog/overheat-calculator-introduction",
  },
};

export default function OverheatCalculatorIntroductionPage() {
  return (
    <div className="bg-background p-4 pt-20">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* 헤더 */}
        <div className="space-y-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            블로그로 돌아가기
          </Link>

          <div className="space-y-3 border-b border-border pb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              단기과열종목 계산기를 만들어봤습니다
            </h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>2025년 9월 8일</span>
            </div>
          </div>
        </div>

        {/* 글 내용 */}
        <article className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <p className="text-lg leading-relaxed">
            안녕하세요.
            <br />
            단기과열종목 계산기를 만들어서 소개하는 글을 써보고자 합니다.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">왜 만들었나</h2>

            <p className="leading-relaxed">
              저도 주식 투자를 하는데, 단기과열종목 지정 조건을 확인하는게 너무
              귀찮았습니다.
              <br />
              단기과열종목에 걸리면 3일간 단일가거래에 걸리기 때문에 신경이
              쓰이더군요.
            </p>

            <p className="leading-relaxed">
              그런데 단기과열종목 계산을 위해서는 지난 40영업일 동안의 종가와
              거래량 데이터가 필요합니다.
              <br />
              또한, 주가상승률, 거래회전율, 주가변동성 등을 계산해야 하는데
              개인투자자가 이걸 일일이 하기는 너무 어려습니다...
            </p>

            <p className="leading-relaxed">
              그리고 네이버 종목토론방 보면 항상 "내일 단일가다" "아니다" 이런
              얘기들이 많더라구요.
              <br />
              이게 그렇게 어려운건 아닌데 (돈이 안돼서 그렇겠죠..?) 쉽게
              계산해주는 서비스 하나 정도는 있으면 좋지 않을까 해서 직접
              만들었습니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              어떤 서비스인가
            </h2>

            <p className="leading-relaxed">
              단기과열종목 계산기라고 이름 지었습니다.
            </p>

            <div>
              <p className="font-semibold mb-3">사용법은 간단합니다:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>종목 코드 입력</li>
                <li>검색 버튼 클릭</li>
                <li>결과 확인</li>
                <li>끝입니다.</li>
              </ol>
            </div>

            <div className="my-8">
              <p className="mb-4 text-center text-muted-foreground">
                종목코드를 검색만 하면 아래처럼 결과를 계산해서 보여드립니다.
              </p>
              <div className="flex justify-center">
                <img
                  src="/introduction.png"
                  alt="단기과열종목 계산기 결과 화면 스크린샷"
                  className="max-w-full h-auto rounded-lg shadow-sm border border-border"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="leading-relaxed">
              단기과열종목 지정 조건인 주가상승률, 거래회전율, 주가변동성 이
              3가지 조건을 자동으로 계산해줍니다.
              <br />
              40일치 데이터 수집부터 복잡한 공식 적용까지 한번에 가능합니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">주의사항</h2>

            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>가격 괴리율로 인한 단기과열 예고는 계산 안 됩니다.</li>
              <li>실제 단기과열 예고는 공시로 확인해야 합니다.</li>
              <li>그냥 참고용입니다. 투자 권유 아님</li>
            </ul>

            <p className="leading-relaxed">
              단기과열 지정되면 3일간 단일가거래 걸리는거 다들 아시죠?
              <br />
              그래서 미리 체크해보는 용도로 쓰시면 될 것 같습니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">링크</h2>

            <div className="text-center py-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                👉 단기과열종목 계산기 바로가기
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>

            <div className="text-center space-y-2 text-muted-foreground">
              <p>직접 써보시고 피드백 있으면 언제든 연락주세요.</p>
              <p>혹시 버그나 개선사항 있으면 알려주시면 고치겠습니다.</p>
            </div>
          </div>
        </article>

        {/* 면책조항 */}
        <div className="border-t border-border pt-6">
          <p className="text-sm text-muted-foreground text-center">
            <strong>※ 면책:</strong> 본 서비스는 정보 제공 목적이며 투자 권유가
            아닙니다. 투자는 본인 책임입니다.
          </p>
        </div>

        {/* 네비게이션 */}
        <div className="flex justify-between items-center pt-8 border-t border-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            블로그 목록으로
          </Link>
        </div>
      </div>
    </div>
  );
}
