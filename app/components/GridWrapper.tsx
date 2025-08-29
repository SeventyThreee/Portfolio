import clsx from "clsx";

export function GridWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        className,
        "relative w-full px-4 sm:px-6 md:px-8 lg:px-0",
        "before:absolute before:top-0 before:h-px before:bg-border-primary/50",
        "before:left-0 before:right-0 lg:before:inset-x-0",
        "after:absolute after:bottom-0 after:h-px after:bg-border-primary/50",
        "after:left-0 after:right-0 lg:after:inset-x-0"
      )}
    >
      <div className="mx-auto w-full max-w-7xl">
        {children}
      </div>
    </div>
  );
}