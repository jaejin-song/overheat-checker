import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { format } from "date-fns";
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  AlertTriangle,
  Calculator,
  Target,
} from "lucide-react";

interface StockStatsProps {
  stats: {
    avgPrice: number;
    highPrice: number;
    lowPrice: number;
    requiredPrice: number;
    requiredTurnoverRate: number;
    requiredVolatility: number;
    avgTurnoverRate: number;
    avgVolatility: number;
    minTomorrowTurnoverRate: number;
    todayTurnoverRate: number;
    sharesOutstanding: number;
    minTradingVolume: number;
    baseDate?: string;
    targetDate?: string;
    isMarketClosed: boolean;
  };
}

export function StockStats({ stats }: StockStatsProps) {
  const formatPrice = (price: number) => `₩${price.toLocaleString()}`;
  const formatVolume = (volume: number) => `${volume.toLocaleString()}주`;
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "yyyy년 M월 dd일");
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              40영업일 종가 평균
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatPrice(stats.avgPrice)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              40영업일 최고가
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatPrice(stats.highPrice)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              40영업일 최저가
            </CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatPrice(stats.lowPrice)}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <Target className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-blue-800">
            {stats.targetDate ? formatDate(stats.targetDate) : "목표일"}{" "}
            단기과열종목 지정 필요 수치
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-blue-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-800">
                필요 종가
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700">
                {formatPrice(stats.requiredPrice)}
              </div>
              <p className="text-xs text-blue-600">
                당일 종가가 기준치 이상이어야 합니다.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-800">
                필요 최소 거래량
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700">
                {formatVolume(stats.minTradingVolume)}
              </div>
              <p className="text-xs text-blue-600">
                당일 거래량이 기준치 이상이어야 합니다.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-800">
                필요 주가변동성
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700">
                {stats.requiredVolatility.toFixed(2)}%
              </div>
              <p className="text-xs text-blue-600">
                최근 2일 평균이 기준치 이상이어야 합니다.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-4 p-3 bg-blue-100 rounded-md">
          <p className="text-sm text-blue-800">
            <strong>기준:</strong>{" "}
            {stats.baseDate ? formatDate(stats.baseDate) : "데이터"}까지의
            40영업일 데이터를 기준으로 계산
            {stats.isMarketClosed
              ? " (장 마감 후 - 다음 영업일 조건)"
              : " (장중 - 당일 조건)"}
          </p>
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="h-5 w-5 text-orange-600" />
          <h3 className="text-lg font-semibold text-orange-800">
            단기과열종목 지정 조건
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-orange-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-800">
                ① 주가상승률 조건
              </CardTitle>
              <Calculator className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium text-orange-700 mb-2">
                당일 종가 ≥ 40거래일 평균 × 130%
              </p>
              <p className="text-xs text-orange-600">
                40거래일 종가 평균: {formatPrice(stats.avgPrice)}
              </p>
              <p className="text-xs text-orange-600">
                필요 종가: {formatPrice(stats.requiredPrice)}
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-800">
                ② 거래회전율 조건
              </CardTitle>
              <Calculator className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium text-orange-700 mb-2">
                최근 2일 평균 ≥ 40거래일 평균 × 600%
              </p>
              <p className="text-xs text-orange-600">
                40거래일 평균: {stats.avgTurnoverRate.toFixed(3)}%
              </p>
              <p className="text-xs text-orange-600">
                필요 수준: {stats.requiredTurnoverRate.toFixed(3)}%
              </p>
              <div className="bg-orange-50 p-2 rounded text-xs text-orange-700 mt-2">
                <p className="font-medium mb-1">거래회전율 계산법:</p>
                <p>거래량 ÷ 총주식수 × 100</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-800">
                ③ 주가변동성 조건
              </CardTitle>
              <Calculator className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium text-orange-700 mb-2">
                최근 2일 평균 ≥ 40거래일 평균 × 150%
              </p>
              <p className="text-xs text-orange-600">
                40거래일 평균: {stats.avgVolatility.toFixed(2)}%
              </p>
              <p className="text-xs text-orange-600">
                필요 수준: {stats.requiredVolatility.toFixed(2)}%
              </p>
              <div className="bg-orange-50 p-2 rounded text-xs text-orange-700 mt-2">
                <p className="font-medium mb-1">주가변동성 계산법:</p>
                <p>(최고가 - 최저가) ÷ ((최고가 + 최저가) ÷ 2) × 100</p>
                <p className="mt-1 text-orange-600">
                  예시: 최고가 10,000원, 최저가 9,000원
                  <br />
                  변동성 = (10,000 - 9,000) ÷ 9,500 × 100 = 10.53%
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-4 p-3 bg-orange-100 rounded-md">
          <p className="text-sm text-orange-800">
            <strong>참고:</strong> 위 3가지 조건을 모두 만족하고, 해당일 종가가
            직전 거래일 및 예고일 전일 종가 대비 상승할 경우 단기과열종목으로
            지정됩니다.
          </p>
          <p className="text-sm text-orange-800 mt-2">
            <strong>※</strong> 투자경고종목 또는 투자위험종목(익일 지정예정 종목
            포함)인 경우에는 위 요건을 적용하지 않습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
