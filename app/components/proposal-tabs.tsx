"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Accessibility, Cross, Droplets, MapPinned, Tractor } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { proposalThemes } from "@/content/campaign";

const icons = { agro: Tractor, agua: Droplets, desenvolvimento: MapPinned, inclusao: Accessibility, liberdade: Cross } as const;

export function ProposalTabs() {
  const [active, setActive] = useState<string>(proposalThemes[0].id);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const requested = window.location.hash.slice(1);
    if (proposalThemes.some((theme) => theme.id === requested)) setActive(requested);
  }, []);

  function handleChange(value: string) {
    setActive(value);
    window.history.replaceState(null, "", `#${value}`);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && panelRef.current) {
      gsap.fromTo(panelRef.current, { opacity: 0, x: 28 }, { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" });
    }
  }

  return (
    <Tabs className="proposal-tabs" value={active} onValueChange={handleChange} orientation="vertical">
      <TabsList className="proposal-tabs__list" aria-label="Temas das propostas">
        {proposalThemes.map((theme) => {
          const Icon = icons[theme.id];
          return (
            <TabsTrigger className="proposal-tabs__trigger" key={theme.id} value={theme.id}>
              <Icon aria-hidden="true" />
              <span>{theme.short}</span>
              <strong>{theme.index}</strong>
            </TabsTrigger>
          );
        })}
      </TabsList>
      <div className="proposal-tabs__panel" ref={panelRef}>
        {proposalThemes.map((theme) => (
          <TabsContent key={theme.id} value={theme.id}>
            <div className="proposal-tabs__title-row">
              <span>{theme.index}</span>
              <div><p>Tema prioritário</p><h2>{theme.title}</h2></div>
            </div>
            <p className="proposal-tabs__description">{theme.description}</p>
            <div className="proposal-framework">
              <article><span>01</span><h3>Problema</h3><p>{theme.problem}</p></article>
              <article><span>02</span><h3>Ação proposta</h3><p>{theme.action}</p></article>
              <article><span>03</span><h3>Impacto esperado</h3><p>{theme.impact}</p></article>
            </div>
            <div className="pending-callout" role="note">
              <strong>Conteúdo pendente de aprovação</strong>
              <p>Este tema está estruturado para receber o texto integral validado pela equipe. Os títulos do Instagram não foram convertidos em compromisso legislativo.</p>
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
