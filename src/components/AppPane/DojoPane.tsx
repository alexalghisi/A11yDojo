import { Button } from "@/components/ui/button";
import { LEVELS, passed, type FixId } from "@/lib/a11y";
import { useDojoStore } from "@/store/dojoStore";

const FIXES: { id: FixId; label: string }[] = [
  { id: "name-button", label: "Name the button" },
  { id: "heading-order", label: "Fix heading order" },
  { id: "focus-trap", label: "Trap focus in the dialog" },
];

export function DojoPane() {
  const index = useDojoStore((state) => state.index);
  const enabled = useDojoStore((state) => state.enabled);
  const toggle = useDojoStore((state) => state.toggle);
  const level = LEVELS[index]!;
  const ok = passed(level.required, enabled);

  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-2">
      <div className="overflow-auto p-5">
        <p className="text-[12px] text-muted-foreground">Level {String(index + 1)}</p>
        <h2 className="text-[18px] font-semibold tracking-tight">{level.title}</h2>
        <p className="mt-2 text-[13px] text-muted-foreground">{level.blurb}</p>
        <div
          className="mt-6 rounded-md border border-border p-4"
          data-testid="preview"
          data-named={enabled.includes("name-button") ? "yes" : "no"}
          data-headings={enabled.includes("heading-order") ? "yes" : "no"}
          data-trap={enabled.includes("focus-trap") ? "yes" : "no"}
        >
          {enabled.includes("heading-order") ? (
            <h2 className="text-[15px] font-medium">Checkout</h2>
          ) : (
            <h3 className="text-[15px] font-medium">Checkout</h3>
          )}
          <p className="mt-2 text-[13px] text-muted-foreground">Pay and leave. Or try.</p>
          <button
            className="mt-3 h-10 w-10 rounded-full bg-primary text-primary-foreground"
            aria-label={enabled.includes("name-button") ? "Submit order" : undefined}
            type="button"
          >
            ♥
          </button>
          <p className="mt-3 text-[12px] text-muted-foreground">
            {enabled.includes("focus-trap")
              ? "Tab stays in the dialog."
              : "Tab leaks to the page behind the modal."}
          </p>
        </div>
      </div>
      <aside className="space-y-3 border-t border-border bg-sidebar p-5 md:border-t-0 md:border-l">
        {FIXES.map((fix) => (
          <Button
            key={fix.id}
            variant={enabled.includes(fix.id) ? "default" : "outline"}
            className="h-9 w-full rounded-md justify-start text-[13px]"
            data-testid={`fix-${fix.id}`}
            onClick={() => toggle(fix.id)}
          >
            {fix.label}
          </Button>
        ))}
        <p className="pt-2 text-[14px] font-medium" data-testid="status">
          {ok ? "Level clear" : "Still failing WCAG"}
        </p>
      </aside>
    </div>
  );
}
