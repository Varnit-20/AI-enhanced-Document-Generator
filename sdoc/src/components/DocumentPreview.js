import React from "react";
import { useStore } from "../lib/useStore";

export default function DocumentPreview() {
  const { state } = useStore();

  function onCopy() {
    navigator.clipboard.writeText(state.result || "");
    alert("Copied!");
  }

  function onDownload() {
    const blob = new Blob([state.result || ""], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "document.txt";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  return (
    <div className="card">
      <h3>Preview</h3>
      <pre>{state.result || "Your generated text will appear here."}</pre>
      <button className="btn" onClick={onCopy} disabled={!state.result}>
        Copy
      </button>{" "}
      <button className="btn" onClick={onDownload} disabled={!state.result}>
        Download
      </button>
    </div>
  );
}
