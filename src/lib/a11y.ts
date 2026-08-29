export type FixId = "name-button" | "heading-order" | "focus-trap";

export type Level = {
  id: string;
  title: string;
  blurb: string;
  required: FixId[];
};

export const LEVELS: Level[] = [
  {
    id: "icon-only",
    title: "The icon-only submit",
    blurb: "A heart icon. Sighted users guess. VoiceOver says 'button'.",
    required: ["name-button"],
  },
  {
    id: "headings",
    title: "Headings by font size",
    blurb: "An h3 jumped in before any h2. The outline is a maze.",
    required: ["heading-order"],
  },
  {
    id: "trap",
    title: "The modal that never lets go",
    blurb: "Tab cycles the page behind the dialog. There is no escape key.",
    required: ["focus-trap"],
  },
  {
    id: "combo",
    title: "The vibe-coded checkout",
    blurb: "All three at once. This is what ships when nobody checks.",
    required: ["name-button", "heading-order", "focus-trap"],
  },
];

export function remaining(required: FixId[], enabled: readonly FixId[]): FixId[] {
  return required.filter((id) => !enabled.includes(id));
}

export function passed(required: FixId[], enabled: readonly FixId[]): boolean {
  return remaining(required, enabled).length === 0;
}
