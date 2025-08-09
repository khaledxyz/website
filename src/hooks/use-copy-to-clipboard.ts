// https://usehooks-ts.com/react-hook/use-copy-to-clipboard

import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";
import { toast } from "sonner";

type CopiedValue = string | null;

type CopyFn = (text: string) => Promise<boolean>;

export function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);
  const t = useTranslations("clipboard");

  const copy: CopyFn = useCallback(
    async (text) => {
      if (!navigator?.clipboard) {
        console.warn("Clipboard not supported");
        return false;
      }

      // Try to save to clipboard then save it in the state if worked
      try {
        await navigator.clipboard.writeText(text);
        setCopiedText(text);
        toast.success(t("success"));
        return true;
      } catch (error) {
        console.warn("Copy failed", error);
        setCopiedText(null);
        toast.error(t("error"));
        return false;
      }
    },
    [t],
  );

  return [copiedText, copy];
}
