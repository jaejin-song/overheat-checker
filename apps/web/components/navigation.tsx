"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@repo/ui/components/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="font-bold text-lg text-foreground hover:text-foreground/80 transition-colors"
          >
            단기과열종목 계산기
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              asChild
              variant="outline"
              size="sm"
              className="bg-transparent"
            >
              <Link href="/contact">문의하기</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기/닫기"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-3">
              <div className="px-3 py-2 flex justify-between items-center">
                <span className="text-sm font-medium">테마 설정</span>
                <ThemeToggle />
              </div>
              <div className="px-3 py-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                >
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    문의하기
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
