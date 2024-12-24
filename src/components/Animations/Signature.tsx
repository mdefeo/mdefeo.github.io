import React, { useEffect } from "react";
import { playSignatureAnimation } from "../../utils/animations";
import { ReactComponent as MarcelloSVG } from "../../assets/signature.svg";

const Signature: React.FC = () => {
  useEffect(() => {
    playSignatureAnimation();
  }, []);

  return (
    <div className="signature-wrapper">
      <MarcelloSVG className="signature-svg w-auto h-7 ml-3" />
    </div>
  );
};

export default Signature;
