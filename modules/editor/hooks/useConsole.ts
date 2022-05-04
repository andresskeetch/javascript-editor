import { useEffect, useState } from "react";

const useConsole = () => {
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

export default useConsole;
