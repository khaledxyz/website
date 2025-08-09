import { useTranslations } from "next-intl";
import Link from "next/link";
import { MaxWidth } from "./max-width";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="mt-auto py-5">
      <MaxWidth>
        <p>
          {t("builtBy")}{" "}
          <Link
            href="https://github.com/khaledxyz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif underline"
          >
            khaledxyz.
          </Link>{" "}
          {t("sourceCodeAvailable")}{" "}
          <Link
            href="https://github.com/khaledxyz/website"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif underline"
          >
            {t("github")}.
          </Link>{" "}
        </p>
      </MaxWidth>
    </footer>
  );
}
