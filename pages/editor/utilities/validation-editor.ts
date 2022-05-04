export const IsComment = (line: string) => {
  return line.startsWith("//");
};

export const IsInstruction = (line: string) => {
  return line.includes("=");
};

export const ValidateCode = (code?: string) => {
  if (!code) {
    return "";
  }

  const lines = code.split("\n");

  const newCodes = lines.map((line, index) => {
    if (IsInstruction(line)) {
      return line;
    }

    if (IsComment(line) || !line) {
      return "";
    }
    return `fillArray(${line}, ${index});`;
  });

  return newCodes.join("\n");
};
