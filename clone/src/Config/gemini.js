

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  // Use environment variables for security
  const apiKey =" AIzaSyBfe34rWIcNXjapY8S5DPcoe6mX23nYuaI"; // Store the API key in an environment variable
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
  
    const result = await chatSession.sendMessage(prompt); // Use the prompt variable here
    console.log(result.response.text); // Access text as a property
  }
  
  export default run;
  