"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Alert, AlertDescription } from "@repo/ui/components/alert";
import { Loader2 } from "lucide-react";
import { StockChart } from "@/components/stock-chart";
import { StockStats } from "@/components/stock-stats";
import { StructuredData } from "@/components/structured-data";
import { ServiceError } from "@/components/service-error";

interface StockData {
  date: string;
  close: number;
  high: number;
  low: number;
  volume: number;
}

interface StockInfo {
  symbol: string;
  name: string;
  data: StockData[];
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
  };
}

export default function HomeContent() {
  const [stockSymbol, setStockSymbol] = useState("");
  const [stockInfo, setStockInfo] = useState<StockInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isServiceError, setIsServiceError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stockSymbol.trim()) return;

    setLoading(true);
    setError("");
    setStockInfo(null);
    setIsServiceError(false);

    try {
      const response = await fetch("/api/stock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symbol: stockSymbol.trim() }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        
        // 서버 에러 (5xx) 또는 Yahoo API 관련 에러인 경우 서비스 에러로 처리
        if (response.status >= 500 || 
            errorData.message?.includes("Yahoo") || 
            errorData.message?.includes("API") ||
            errorData.message?.includes("network") ||
            errorData.message?.includes("timeout")) {
          setIsServiceError(true);
          return;
        }
        
        throw new Error(errorData.message || "주식 데이터를 가져오는데 실패했습니다.");
      }

      const data = await response.json();
      
      // 데이터 유효성 검증 - Yahoo API에서 불완전한 데이터가 올 수 있음
      if (!data || !data.data || data.data.length === 0) {
        setIsServiceError(true);
        return;
      }
      
      setStockInfo(data);
    } catch (err) {
      if (err instanceof TypeError && err.message.includes("fetch")) {
        // 네트워크 에러인 경우 서비스 에러로 처리
        setIsServiceError(true);
      } else {
        setError(
          err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setIsServiceError(false);
    setError("");
    handleSubmit({ preventDefault: () => {} } as React.FormEvent);
  };

  // 서비스 에러가 발생한 경우 에러 페이지만 표시
  if (isServiceError) {
    return (
      <>
        <StructuredData />
        <div className="bg-background p-4 pt-20">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold text-foreground">
                단기과열종목 계산기
              </h1>
              <p className="text-muted-foreground">
                단기과열종목 지정예고 종목이 실제로 단기과열종목에 지정되는 조건을
                미리 계산해보세요
              </p>
            </div>
            <ServiceError onRetry={handleRetry} />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <StructuredData />
      <div className="bg-background p-4 pt-20">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-foreground">
              단기과열종목 계산기
            </h1>
            <p className="text-muted-foreground">
              단기과열종목 지정예고 종목이 실제로 단기과열종목에 지정되는 조건을
              미리 계산해보세요
            </p>
          </div>

          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>종목 검색</CardTitle>
              <CardDescription>
                <p>단기과열종목 지정 조건을 확인할 종목 코드를 입력하세요.</p>
                <p>(예: 005930, 000660, 035420)</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="종목 코드 입력 (예: 005930)"
                  value={stockSymbol}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setStockSymbol(e.target.value)
                  }
                  disabled={loading}
                />
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      조건 계산 중...
                    </>
                  ) : (
                    "단기과열종목 조건 계산"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {error && (
            <Alert variant="destructive" className="max-w-2xl mx-auto">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {stockInfo && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">
                        {stockInfo.name} ({stockInfo.symbol})
                      </CardTitle>
                      <CardDescription>
                        단기과열종목 지정 조건 분석
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <StockChart data={stockInfo.data} />
                </CardContent>
              </Card>

              <StockStats stats={stockInfo.stats} />
            </div>
          )}

          <div className="max-w-4xl mx-auto mt-12 py-8 border-t border-border">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                투자 유의사항
              </h3>
              <div className="text-xs text-muted-foreground space-y-2 leading-relaxed">
                <p>
                  본 서비스는 단기과열종목 지정 조건 계산을 위한 참고 정보를
                  제공하며, 투자 권유나 매매 추천을 목적으로 하지 않습니다.
                </p>
                <p>
                  가격괴리율로 인한 단기과열종목 지정예고는 계산 대상에서
                  제외됩니다.
                </p>
                <p>
                  모든 투자 결정은 이용자 본인의 판단과 책임하에 이루어져야
                  하며, 본 정보를 바탕으로 한 투자 결과에 대해 당사는 어떠한
                  책임도 지지 않습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
