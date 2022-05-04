import { useEffect, useState } from "react";

export const useConsole = () => {
  const [output, setOutPut] = useState<string[]>([]);

  useEffect(() => {
    console.log = function () {
      const args = arguments;
      setOutPut((prev) => [...prev, ...(args as any)]);
    };
  }, []);

  return {
    output,
    setOutPut,
  };
};
