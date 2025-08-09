import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export function MaxWidth({ className, children }: Props) {
  return (
    <div className={cn("max-w-3xl mx-auto px-5", className)}>{children}</div>
  );
}
