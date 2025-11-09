import React, { useState } from "react";
import PromptInput from "../components/PromptInput";
import DocumentPreview from "../components/DocumentPreview";
import { generateDocument } from "../lib/api";

export default function Generate() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState(""); // store only text, not object
  const [loading, setLoading] = useState(false);

  // Function to call backend and generate the document
  const handleGenerate = async () => {
  if (!prompt.trim()) return;
  setLoading(true);
  try {
    console.log("🟡 Sending prompt:", prompt);
    const data = await generateDocument(prompt);
    console.log("🟢 Response from backend:", data);
    setResult(data.document || "No document generated.");
  } catch (err) {
    console.error("🔴 Error generating document:", err);
    setResult("❌ Error generating document. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          AI Document Generator
        </h1>

        {/* Input Section */}
        <PromptInput
          prompt={prompt}
          setPrompt={setPrompt}
          handleGenerate={handleGenerate}
          loading={loading}
        />

        {/* Output Section */}
        <DocumentPreview
          result={result}
          loading={loading}
        />
      </div>
    </div>
  );
}
