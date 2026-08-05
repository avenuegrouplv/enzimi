import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
}

export function SEOHead({ title, description }: SEOHeadProps) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Enzimi - Bio-Fermentēti Dzērieni`;
    } else {
      document.title = "Enzimi | Bio-Fermentēti Dzērieni un Pakalpojumi";
    }

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", description);
      }
    }
  }, [title, description]);

  return null;
}

export default SEOHead;
