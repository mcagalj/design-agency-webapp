import { ReactNode, MouseEvent } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  secondary?: boolean;
  ghost?: boolean;
  className?: string;
  iconClassName?: string;
};

const Button = ({
  children,
  className,
  iconClassName,
  onClick,
  secondary,
  ghost,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "transition duration-300 ease-in-out",
        "group flex items-center space-x-2 max-w-min whitespace-nowrap",
        "px-6 py-3 rounded-sm font-heading font-medium",
        "bg-brand-stroke-weak text-brand-black",
        {
          "bg-brand text-white": secondary,
          "border border-brand-stroke-strong bg-brand-fill-bg text-brand-text-weak":
            ghost,
        },
        "hover:opacity-90",
        className
      )}
      onClick={onClick}
    >
      <span>{children}</span>
      <ChevronRight
        className={cn(
          "w-3 h-3 stroke-[3] transition-transform duration-300 ease-in-out transform",
          "group-hover:translate-x-1",
          iconClassName
        )}
      />
    </button>
  );
};

export default Button;
