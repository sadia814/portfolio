document.getElementById("open-chat").addEventListener("click", () => {
  document.getElementById("chatbox").classList.remove("hidden");
});

// Allow sending message with Enter key
document.getElementById("userInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent newline if input is textarea
    sendMessage();
  }
});

function getBotResponse(input) {
  input = input.toLowerCase().trim();
  if (!input || input.length < 2) {
  return "Hi there! Try asking me about Sadia’s skills, projects, or contact info.";
}

  
  const stretchedHello = /^h+e+l+l*o+$/;
const stretchedHey = /^h+e+y+$/;


  if (stretchedHello.test(input) || input.includes("hello") || /\bhi\b/.test(input)) {
    return "Hello there! I am Sadia's assistant, how can I help you?";
  } else if (stretchedHey.test(input) || input.includes("hey")) {
    return "Hey! I am Sadia's assistant, how can I help you?";
  } else if (input.includes("skills") || input.includes("skill") ) {
    return "Sadia is skilled in HTML, CSS, JavaScript, React, and learning Python.";
  } 
  else if (
  input.includes("your name") ||
  input.includes("introduction") ||
  input.includes("intro") ||
  input.includes("yourself") ||
  input.includes("who are you") ||
  input.includes("give me your intro") ||
  input.includes("introduce")
) {
  return "Hi! I'm Sadia, a Software Engineering student passionate about web development, backend, and AI integration. I’ve built this chatbot to showcase my skills. Ask me about my projects, skills, or how to contact me!";
}

  
  else if (input.includes("projects")) {
    return "Check out Sadia’s projects on GitHub: https://github.com/yourusername";
  } else if (input.includes("contact")) {
    return "You can contact Sadia at sadiaabdulmajeed4545@gmail.com or on LinkedIn.";
  } 
  else if (input.includes("education") || input.includes("study")){
    return "Sadia is pursuing a BS in Software Engineering at UCP.";
  } else if (input.includes("experience") || input.includes("internship")) {
    return "Sadia has worked on academic and personal projects, and is actively looking for internship opportunities.";
  } else if (input.includes("interests") || input.includes("passion")) {
    return "Sadia is passionate about web development, Python, AI, and creating impactful digital solutions.";
  } else if (input.includes("goals") || input.includes("future")) {
    return "Sadia aims to become a full-stack developer and explore AI integration in web platforms.";}
  else {
    return "I'm not sure how to answer that. Try asking about skills, projects, or contact.";
  }
}

function sendMessage() {
  const inputField = document.getElementById("userInput");
  const userInput = inputField.value.trim();
  if (!userInput) return;

  const chatlog = document.getElementById("chatlog");

  // Append user message with bubble
  const userBubble = document.createElement("div");
  userBubble.className = "chat-bubble user";
  userBubble.textContent = `You: ${userInput}`;
  chatlog.appendChild(userBubble);

  // Get bot response and append with bubble
  const response = getBotResponse(userInput);
  const botBubble = document.createElement("div");
  botBubble.className = "chat-bubble bot";
  botBubble.textContent = `sadiaAI: ${response}`;
  chatlog.appendChild(botBubble);

  const time = new Date().toLocaleTimeString();
botBubble.textContent =  `sadiaAI (${time}) : ${response}` ;


  // Clear input
  inputField.value = "";

  // Scroll to bottom
  chatlog.scrollTop = chatlog.scrollHeight;
}
