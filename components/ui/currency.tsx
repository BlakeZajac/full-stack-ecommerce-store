"use client";

import { useState, useEffect } from "react";
import { formatter } from "@/lib/utils";

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className="font-medium">{formatter.format(Number(value))}</div>;
};

export default Currency;
