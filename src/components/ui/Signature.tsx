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
      <SignaturePath style={{ stroke: "#29344E", fill: "#29344E" }} className="signature-svg w-full text-neutral absolute" />
    </div>
  );
};

export default Signature;