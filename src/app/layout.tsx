import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { fonts } from "@/config/fonts.config";
import { cn } from "@/lib/utils";
import "devicon/devicon.min.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Script from "next/script";
import "./globals.css";
export { metadata } from "@/config/metadata.config";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className={cn(fonts, "font-sans flex flex-col min-h-screen mt-5")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <Navigation />
            <main className="space-y-14 py-16">{children}</main>
            <Footer />
            <Toaster position="bottom-center" richColors />
            {process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL &&
              process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
                <Script
                  strategy="beforeInteractive"
                  src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
                  data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
                />
              )}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
