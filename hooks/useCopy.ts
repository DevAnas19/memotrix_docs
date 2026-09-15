import { useState, useCallback } from "react";

export function useCopy(timeout = 1500) {
  const [copied, setCopied] = useState<boolean>(false);

  const copy = useCallback((text: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    });
  }, [timeout]);

  return { copied, copy };
}
