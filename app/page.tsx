"use client"

import { quotes } from "@/lib/quotes"
import TypingTest from "@/components/typing-test"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme={null} enableSystem={false}>
      <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-background">
        <div className="w-full max-w-3xl flex flex-col items-center">
          <TypingTest quotes={quotes} />
        </div>
      </main>
    </ThemeProvider>
  )
}
