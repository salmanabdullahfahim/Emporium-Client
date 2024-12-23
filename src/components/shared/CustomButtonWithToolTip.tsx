import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ReusableButtonProps extends ButtonProps {
  icon?: React.ReactNode;
  loading?: boolean;
  text: string;
  iconPosition?: "left" | "right";
}

const CustomButtonWithToolTip: React.FC<ReusableButtonProps> = ({
  children,
  icon,
  loading,
  className,
  text,
  onClick,
  variant,
  iconPosition = "left",
  ...props
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={onClick}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-md transition",
              loading && "opacity-50 cursor-not-allowed",
              className,
            )}
            variant={variant}
            {...props}
          >
            {loading ? (
              <span className="animate-spin">
                <AiOutlineLoading3Quarters className="text-primary" />
              </span>
            ) : iconPosition === "left" && icon ? (
              <span>{icon}</span>
            ) : null}

            {children}

            {!loading && iconPosition === "right" && icon ? (
              <span>{icon}</span>
            ) : null}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomButtonWithToolTip;
