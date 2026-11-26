import { SectionDivider } from "@/components/ui/section-divider";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  decorated?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  decorated = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        decorated && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wide text-brand">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-balance font-semibold tracking-tight",
          decorated
            ? "mt-1 text-[1.75rem] leading-snug text-brand md:text-[2.125rem]"
            : "mt-1 text-2xl text-ink",
        )}
      >
        {title}
      </h2>
      {decorated ? <SectionDivider /> : null}
      {description ? (
        <p
          className={cn(
            "text-base leading-relaxed text-muted",
            decorated ? "mt-5" : "mt-3",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
