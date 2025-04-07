// Toggle chatbot display
function toggleChatbot() {
    const bot = document.getElementById("insightChatbot");
    bot.style.display = bot.style.display === "flex" ? "none" : "flex";
  }
  
  // Send user message and handle bot response
  function sendMessage() {
    const input = document.getElementById("chatInput");
    const msg = input.value.trim();
    if (!msg) return;
  
    const chatBody = document.getElementById("chat-body");
  
    // Create user message
    const userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.innerText = msg;
    chatBody.appendChild(userMsg);
  
    input.value = "";
  
    // Call API and display bot response
    fetchInsightBotAPI(msg).then(response => {
      const botMsg = document.createElement("div");
      botMsg.className = "message bot";
      botMsg.innerText = response;
      chatBody.appendChild(botMsg);
      chatBody.scrollTop = chatBody.scrollHeight;
    });
  }
  
  // API Call Logic — Replace with your real API call
  async function fetchInsightBotAPI(message) {
    // Example static response — replace with real API call
    // Replace the following block:
    // ----------------------------------
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve("📘 Simulated reply for: " + message);
    //   }, 800);
    // });
    // ----------------------------------
  
    // 🔽 Use this block for real API integration
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      });
  
      const data = await response.json();
      return data.reply || "🤖 No reply from bot.";
    } catch (error) {
      return "❌ Error contacting Insight Bot API.";
    }
  }
  