"use client";

import { useEffect, useState } from "react";
import { playSignatureAnimation } from "@/utils/animations/signatureAnimation";
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
      <SignaturePath style={{ stroke: "black", fill: "black" }} className="signature-svg w-auto h-7 ml-3" />
    </div>
  );
};

export default Signature;
