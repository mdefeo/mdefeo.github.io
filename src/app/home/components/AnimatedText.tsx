"use client";

import React from "react";
import { signatureAndTextAnimation } from "@/utils/signatureAndTextAnimation";
import AnimatedTextProps from "@/interfaces/AnimatedTextProps";

const AnimatedText: React.FC<AnimatedTextProps> = ({ textRef }) => {
  React.useLayoutEffect(() => {
    const textElements = textRef.current?.querySelectorAll<HTMLElement>(
      ".phrase"
    );
    if (textElements) {
      signatureAndTextAnimation(".signature-wrapper", textElements);
    }
  }, [textRef]);

  return null;
};

export default AnimatedText;
