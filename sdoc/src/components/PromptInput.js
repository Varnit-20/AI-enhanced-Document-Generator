import React, { useState } from "react";
import { generateDocument } from "../lib/api";
import { useStore } from "../lib/useStore";

export default function PromptInput() {
  const { state, setState } = useStore();
  const [loading, setLoading] = useState(false);

  async function onGenerate() {
    if (!state.prompt.trim()) return alert("Please enter a prompt");
    setLoading(true);
    try {
      const res = await generateDocument(state.prompt);
      setState((prev) => ({ ...prev, result: res }));
    } catch (err) {
      console.error(err);
      alert("Generation failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <h3>Prompt</h3>
      <textarea
        placeholder="Describe the document you want..."
        value={state.prompt}
        onChange={(e) => setState((prev) => ({ ...prev, prompt: e.target.value }))}
      />
      <br />
      <button className="btn" onClick={onGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>
    </div>
  );
}
