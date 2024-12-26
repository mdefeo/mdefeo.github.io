"use client";

import { useEffect } from "react";
import { playSignatureAnimation } from "@/utils/signatureAnimation";
import { SignaturePath } from "./SignaturePath";

const Signature = () => {
  useEffect(() => {
    playSignatureAnimation();
  }, []);

  return (
    <div className="signature-wrapper">
      <SignaturePath style={{ stroke: "black", fill: "black" }} className="signature-svg w-auto h-7 ml-3" />
    </div>
  );
};

export default Signature;