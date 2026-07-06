const API_KEY = "AQ.Ab8RN6IRBoCUparYQnsMb9jp300nyGpX0tok2C9UNetqVw-0EA";

async function askGemini(prompt) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ]
      })
    }
  );

  const data = await response.json();

  if (data.error) {
    return "❌ Error: " + data.error.message;
  }

  return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
}

async function generate() {
  const topic = document.getElementById("topic").value;
  const lang = document.getElementById("language").value;
  const cat = document.getElementById("category").value;

  document.getElementById("output").innerText = "Generating...";
