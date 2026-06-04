"use client";

import LiquidGlass from "liquid-glass-react";
import { useRef } from "react";

interface GlassProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  mode?: "standard" | "polar" | "prominent" | "shader";
}

export function GlassNavbar({ children, className, style }: GlassProps) {
  return (
    <LiquidGlass
      displacementScale={45}
      blurAmount={0.15}
      saturation={160}
      aberrationIntensity={1.5}
      elasticity={0.2}
      cornerRadius={999}
      style={{
        position: "fixed",
        top: "18px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 40px)",
        maxWidth: "1060px",
        zIndex: 9000,
        ...style,
      }}
      className={className}
    >
      {children}
    </LiquidGlass>
  );
}

export function GlassCard({ children, className, style, onClick }: GlassProps) {
  return (
    <LiquidGlass
      displacementScale={55}
      blurAmount={0.08}
      saturation={140}
      aberrationIntensity={2}
      elasticity={0.35}
      cornerRadius={24}
      onClick={onClick}
      style={style}
      className={className}
    >
      {children}
    </LiquidGlass>
  );
}

export function GlassButton({ children, className, style, onClick }: GlassProps) {
  return (
    <LiquidGlass
      displacementScale={40}
      blurAmount={0.1}
      saturation={150}
      aberrationIntensity={1.5}
      elasticity={0.15}
      cornerRadius={999}
      padding="8px 24px"
      onClick={onClick}
      style={style}
      className={className}
    >
      {children}
    </LiquidGlass>
  );
}
