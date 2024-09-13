import type { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";

import { RootProvider } from "fumadocs-ui/provider";
import { I18nProvider } from "fumadocs-ui/i18n";
import { DocsLayout } from "fumadocs-ui/layout";

import { Inter } from "next/font/google";

import { pageTree } from "@/app/source";
import { Logo } from "../components/logo";

import "fumadocs-ui/style.css";
import "../global.css";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DreamRust - WIKI",
  description: "DreamRust - WIKI",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Layout({
  params: { lang },
  children,
}: {
  params: { lang: string };
  children: ReactNode;
}) {
  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body>
        <NextUIProvider>
          <I18nProvider
            locale={lang}
            locales={[
              {
                name: "English",
                locale: "en",
              },
              {
                name: "Русский",
                locale: "ru",
              },
              {
                name: "Українська",
                locale: "uk",
              },
            ]}
            translations={
              {
                ru: {
                  toc: "Содержимое",
                  search: "Поиск",
                  lastUpdate: "Последнее обновление",
                  searchNoResult: "Ничего не найдено",
                  previousPage: "Предыдущая страница",
                  nextPage: "Следующая страница",
                  chooseLanguage: "Поменять язык",
                },
                uk: {
                  toc: "Зміст",
                  search: "Пошук",
                  lastUpdate: "Останнї оновлення",
                  searchNoResult: "Нічого не знайдено",
                  previousPage: "Попередня сторінка",
                  nextPage: "Наступна сторінка",
                  chooseLanguage: "Змінити мову",
                },
              }[lang]
            }
          >
            <RootProvider>
              <DocsLayout
                tree={pageTree[lang]}
                nav={{
                  title: <Logo />,
                  url: `/${lang}`,
                }}
                i18n
              >
                {children}
              </DocsLayout>
            </RootProvider>
          </I18nProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
