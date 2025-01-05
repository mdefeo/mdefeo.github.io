"use client";

import { useEffect, useState } from "react";
import { playSignatureAnimation } from "@/animations/signatureAnimation";
import { SignaturePath } from "./SignaturePath";

const Signature = ({ onComplete }: { onComplete?: () => void }) => {
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    if (!hasRun) {
      playSignatureAnimation(() => {
        setHasRun(true);
        if (onComplete) onComplete();
      });
    }
  }, [hasRun, onComplete]);

  return (
    <div className="signature-wrapper">
      <SignaturePath style={{ stroke: "#4A4C5C", fill: "#4A4C5C" }} className="signature-svg w-48 text-primary-content left-20 top-10 absolute" />
    </div>
  );
};

export default Signature;