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
      <SignaturePath style={{ stroke: "black", fill: "black" }} className="signature-svg w-44 left-20 top-8 absolute" />
    </div>
  );
};

export default Signature;