import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "단기과열종목 지정조건을 계산하는 가장 쉬운 방법",
  description:
    "단기과열종목 지정조건인 주가상승률, 거래회전율, 주가변동성을 쉽게 계산하는 방법을 소개합니다.",
  openGraph: {
    title:
      "단기과열종목 지정조건을 계산하는 가장 쉬운 방법 | 단기과열종목 계산기 블로그",
    description:
      "단기과열종목 지정조건인 주가상승률, 거래회전율, 주가변동성을 쉽게 계산하는 방법을 소개합니다.",
    url: "https://overheat-checker-web.vercel.app/blog/easiest-way-to-calculate-overheated-stock-conditions",
    images: [
      {
        url: "/og-blog-post.png",
        width: 1200,
        height: 630,
        alt: "단기과열종목 지정조건을 계산하는 가장 쉬운 방법",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "단기과열종목 지정조건을 계산하는 가장 쉬운 방법",
    description:
      "단기과열종목 지정조건인 주가상승률, 거래회전율, 주가변동성을 쉽게 계산하는 방법을 소개합니다.",
    images: ["/og-blog-post.png"],
  },
  alternates: {
    canonical: "/blog/easiest-way-to-calculate-overheated-stock-conditions",
  },
};

export default function EasiestWayToCalculateOverheatedStockConditionsPage() {
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
              단기과열종목 지정조건을 계산하는 가장 쉬운 방법
            </h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>2025년 9월 9일</span>
            </div>
          </div>
        </div>

        {/* 글 내용 */}
        <article className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <p className="text-lg leading-relaxed">
            안녕하세요.
            <br />
            오늘은 단기과열종목 지정조건을 계산하는 방법에 대해 얘기해볼까
            합니다.
            <br />
            (계산하는 가장 쉬운 방법은 제일 하단에 있습니다)
          </p>

          <div className="space-y-4">
            <p className="leading-relaxed">
              먼저 모든 종목이 바로 단기과열종목에 지정되는 것은 아닙니다.
              <br />
              내가 관심있는 종목이 최근에 단기과열종목 지정예고 공시가
              나왔는지를 확인해보셔야 합니다.
            </p>

            <div className="my-8">
              <div className="flex justify-center">
                <img
                  src="/easiest-way.png"
                  alt="단기과열종목 지정예고 공시 예시"
                  className="max-w-full h-auto rounded-lg shadow-sm border border-border"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="leading-relaxed">
              위 사진처럼 단기과열종목(3거래일 단일가매매) 지정예고 공시가
              나오면 해당 종목은 공시에 언급된 지정예고일부터 특정 조건을
              만족하면 단기과열종목에 지정될 수 있는 상태가 됩니다.
            </p>

            <p className="leading-relaxed">
              예고일부터 10거래일동안 단기과열종목에 지정될 수 있는 상태이기
              때문에 공시가 있는지 주기적으로 확인하지 않으면 예고 상태인지
              모르고 있다가 단일가에 걸릴 수 있습니다.
            </p>

            <p className="leading-relaxed">
              유의해야 되는 부분은 투자경고종목이랑 동시에 지정이 되면
              단기과열은 해당되지 않는다는 점입니다.
            </p>

            <p className="leading-relaxed">
              동시에 지정이 되는 경우가 종종 있는데 투자경고가 단기과열보다
              우선해서 적용됩니다.
            </p>

            <p className="leading-relaxed">
              이를 이용해 단기과열을 피해가는 경우도 많습니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">지정 요건</h2>

            <p className="leading-relaxed">
              단기과열종목에 지정되는 조건은 공시에 나와있듯이 총 3가지가
              있습니다.
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              1. 주가상승률
            </h3>
            <p className="leading-relaxed">
              당일 종가가 직전 40거래일 종가 평균의 130% 이상이여야 합니다.
            </p>
            <p className="leading-relaxed">
              당연히 이를 계산하기 위해서는 직전 40거래일의 종가 데이터가 있어야
              하고 일일이 계산하기에는 번거로운 작업이 아닐 수 없습니다.
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              2. 거래회전율
            </h3>
            <p className="leading-relaxed">
              당일을 포함한 최근 2거래일 일별 거래회전율 평균이 직전 40거래일
              일별 거래회전율 평균의 600% 이상이여야 합니다.
            </p>
            <p className="leading-relaxed">
              당연히 이번에도 40거래일의 거래량 데이터가 필요합니다.
            </p>
            <p className="leading-relaxed">
              추가로 거래회전율 계산이 필요한데 거래회전율은 거래량 / 총주식수 *
              100 으로 계산할 수 있습니다.
              <br />
              다만 총주식수가 항상 동일하게 분모에 들어가기 때문에 약분이 되어서
              실제 계산에서는 총주식수가 없어도 계산이 가능합니다.
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              3. 주가변동성
            </h3>
            <p className="leading-relaxed">
              당일을 포함한 최근 2거래일 일별 주가변동성 평균이 직전 40거래일
              일별 주가변동성 평균의 150% 이상이여야 합니다.
            </p>
            <p className="leading-relaxed">
              주가변동성 계산법은 (최고가 - 최저가) ÷ ((최고가 + 최저가) ÷ 2) ×
              100 입니다.
              <br />
              주가변동성은 얼마나 위아래로 크게 움직였냐에 대한 지표이기 때문에
              미리 기준값을 계산하기가 어렵습니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              그런데 이걸 매번 할 수는 없어요..
            </h2>

            <p className="leading-relaxed">
              개인 투자자가 매번 이런 조건을 계산해가면서 투자를 하기는
              어렵잖아요.
            </p>

            <p className="leading-relaxed">
              계산을 해도 한두번이지 결국은 내일 어떻게 되는지도 모르는채 그냥
              구경하게 되더라구요.
            </p>

            <p className="leading-relaxed">
              그래서 직접 계산기를 만들었습니다.
            </p>

            <div className="text-center py-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                단기과열종목 계산기 바로가기
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>

            <p className="leading-relaxed">
              단기과열종목 계산기에서는 종목코드만 넣어주면 저 위의 조건들을
              모두 계산해서 지정 조건을 미리 보여드립니다.
            </p>

            <p className="leading-relaxed">
              종목코드는 네이버에 검색하시면 종목 옆에 있는 숫자 6자리입니다.
            </p>

            <div className="my-8">
              <div className="flex justify-center">
                <img
                  src="/easiest-way2.png"
                  alt="네이버에서 종목코드 확인하는 방법"
                  className="max-w-full h-auto rounded-lg shadow-sm border border-border"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="leading-relaxed">
              개인 투자자들이 조금 더 정보를 쉽게 받아들일 수 있는 다른 도구들도
              만들어 볼 예정입니다.
            </p>

            <p className="leading-relaxed">
              혹시나 "이런게 있으면 좋겠다"하는 의견있으시면 오른쪽 상단의
              문의하기 버튼을 통해 문의해주세요 :)
            </p>
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

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            계산기 사용해보기
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
