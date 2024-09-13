import { map } from "@/.map";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { i18n } from "@/i18n";
import { icons } from "lucide-react";
import { createElement } from "react";

export const { getPage, getPages, getLanguages, pageTree } = loader({
  baseUrl: "/",
  rootDir: "docs",
  source: createMDXSource(map),
  i18n,
  icon(icon) {
    if (!icon) {
      return;
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});
