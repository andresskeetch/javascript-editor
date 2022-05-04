import React from "react";
import Editor from "@monaco-editor/react";
import styles from "./styles.module.css";
import { DEFAULT_CODE, LINE_EDITOR } from "../../utilities/constants";
import { useConsole } from "../../hooks/useConsole";

export const MainEditor = () => {
  const { output, setOutPut } = useConsole();
  const onChangeEditor = (newValue?: string) => {
    setOutPut([]);
    eval(newValue || "");
  };

  return (
    <div className={styles.container}>
      <Editor
        height="100vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        width="50vw"
        defaultValue={DEFAULT_CODE}
        line={LINE_EDITOR}
        saveViewState={true}
        onChange={onChangeEditor}
      />
      <div className={styles.result}>
        {output.map((line: string, index: number) => {
          return (
            <div key={`result-line-${index}`}>
              {line ? JSON.stringify(line) : "..."}
            </div>
          );
        })}
      </div>
    </div>
  );
};
