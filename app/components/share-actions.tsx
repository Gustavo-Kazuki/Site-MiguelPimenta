"use client";

import { useState } from "react";
import { Check, Copy, Share2 } from "lucide-react";

export function ShareActions() {
  const [copied, setCopied] = useState(false);

  async function share() {
    const data = { title: "Miguel Pimenta 2077", text: "Conheça o site de Miguel Pimenta.", url: window.location.origin };
    try {
      if (navigator.share) {
        await navigator.share(data);
        return;
      }
      await navigator.clipboard.writeText(data.url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // O visitante pode cancelar o compartilhamento sem gerar um erro visível.
    }
  }

  return (
    <button className="share-button" type="button" onClick={share}>
      {copied ? <Check aria-hidden="true" /> : <Share2 aria-hidden="true" />}
      {copied ? "Link copiado" : "Compartilhar este site"}
      {!copied && <Copy className="share-button__secondary" aria-hidden="true" />}
    </button>
  );
}
