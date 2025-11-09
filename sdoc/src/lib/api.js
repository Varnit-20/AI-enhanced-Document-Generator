export async function generateDocument(prompt) {
  await new Promise((r) => setTimeout(r, 600));
  return `# Generated Document\n\n**Prompt:** ${prompt}\n\nThis is a mock generated document. Replace this with a real API call.`;
}


// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://127.0.0.1:8000", // your backend URL
// });

// export const generateDocument = async (prompt) => {
//   const res = await API.post("/generate", { prompt });
//   return res.data;
// };


// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://127.0.0.1:8000", // must match backend port
// });

// export const generateDocument = async (prompt) => {
//   const res = await API.post("/generate", { prompt });
//   return res.data; // should return { document: ... }
// };
