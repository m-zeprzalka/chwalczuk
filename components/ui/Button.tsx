// components/ui/Button.tsx
import { motion } from "framer-motion";
import { buttonVariants } from "@/utils/motion";

interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ComponentType<any>;
  variant?: "primary" | "secondary";
  className?: string;
}

export const Button = ({
  children,
  icon: Icon,
  variant = "primary",
  className = "",
}: ButtonProps) => (
  <motion.button
    whileHover="hover"
    initial="initial"
    className={`group relative px-8 py-4 rounded-lg inline-flex items-center gap-3 text-lg font-medium overflow-hidden ${
      variant === "primary" ? "bg-blue-500" : "border border-white/20"
    } ${className}`}
  >
    <span className="relative z-10">{children}</span>
    {Icon && (
      <Icon className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    )}
    <motion.div
      variants={buttonVariants}
      className={`absolute inset-0 ${
        variant === "primary" ? "bg-blue-600" : "bg-white/10"
      }`}
    />
  </motion.button>
);
