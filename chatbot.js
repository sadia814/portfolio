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
  } else if (input.includes("skills") || input.includes("skill")) {
    return "Sadia is skilled in HTML, CSS, JavaScript, React, and learning Python.";
  } else if (
    input.includes("your name") ||
    input.includes("introduction") ||
    input.includes("intro") ||
    input.includes("yourself") ||
    input.includes("who are you") ||
    input.includes("give me your intro") ||
    input.includes("introduce")
  ) {
    return "Hi! I'm Sadia, a Software Engineering student passionate about web development, backend, and AI integration. I’ve built this chatbot to showcase my skills. Ask me about my projects, skills, or how to contact me!";
  } else if (input.includes("projects")) {
    return "Check out Sadia’s projects on GitHub: https://github.com/yourusername";
  } else if (input.includes("contact")) {
    return "You can contact Sadia at sadiaabdulmajeed4545@gmail.com or on LinkedIn.";
  } else if (
    input.includes("education") ||
    input.includes("study") ||
    input.includes("degree") ||
    input.includes("what are you studying") ||
    input.includes("which degree")
  ) {
    return "Sadia is pursuing a Bachelor's degree (BS) in Software Engineering at the University of Central Punjab (UCP).";
  } else if (input.includes("experience") || input.includes("internship")) {
    return "Sadia has worked on academic and personal projects, and is actively looking for internship opportunities.";
  } else if (input.includes("interests") || input.includes("passion")) {
    return "Sadia is passionate about web development, Python, AI, and creating impactful digital solutions.";
  } else if (input.includes("goals") || input.includes("future")) {
    return "Sadia aims to become a full-stack developer and explore AI integration in web platforms.";
  }

  // Additional Questions
  else if (input.includes("location") || input.includes("where are you from")) {
    return "Sadia is from Lahore, Pakistan.";
  } else if (input.includes("github")) {
    return "Visit Sadia's GitHub profile: https://github.com/yourusername";
  } else if (input.includes("linkedin")) {
    return "Here is Sadia's LinkedIn profile: https://linkedin.com/in/sadiaabdulmajeed";
  } else if (input.includes("languages you know") || input.includes("coding languages")) {
    return "Sadia knows HTML, CSS, JavaScript, C++, and is learning Python.";
  } else if (input.includes("frameworks") || input.includes("libraries")) {
    return "Sadia has experience with React and is exploring Flask.";
  } else if (input.includes("hobbies") || input.includes("free time")) {
    return "Sadia enjoys coding, exploring AI, and designing interfaces.";
  } else if (input.includes("what can you do") || input.includes("features")) {
    return "I can tell you about Sadia’s skills, education, projects, goals, and how to contact her.";
  } else if (input.includes("why you created") || input.includes("purpose") || input.includes("create")) {
    return "This chatbot was created by Sadia to demonstrate her web and backend integration skills!";
  } else if (input.includes("resume") || input.includes("cv")) {
    return "You can request Sadia’s resume by contacting her via email or LinkedIn.";
  } else if (input.includes("currently working on") || input.includes("current project")) {
    return "Sadia is currently working on a chatbot project that uses Python and JavaScript!";
  } else if (input.includes("strengths") || input.includes("strong points")) {
    return "Sadia’s strengths are creativity, problem-solving, continuous learning, and attention to detail.";
  } else if (input.includes("weakness") || input.includes("improve")) {
    return "Sadia believes in turning weaknesses into strengths. She's currently focusing on mastering backend development.";
  } else if (input.includes("favorite language") || input.includes("love coding in")) {
    return "Sadia enjoys working with JavaScript and is developing a love for Python!";
  } else if (input.includes("teamwork") || input.includes("collaborate")) {
    return "Sadia is a team player who enjoys collaborating on creative and technical projects.";
  } else if (input.includes("freelance") || input.includes("available for freelance")) {
    return "Sadia is open to freelance opportunities. Feel free to contact her through email or LinkedIn.";
  } else if (input.includes("certificate") || input.includes("certification")) {
    return "Sadia has completed several certifications in web development and is continuously learning.";
  } else if (input.includes("motivation") || input.includes("why coding")) {
    return "Sadia loves building useful tools and bringing ideas to life, which is why she chose software engineering.";
  }

  // Default fallback
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
  const time = new Date().toLocaleTimeString();
  botBubble.textContent = `sadiaAI (${time}) : ${response}`;
  chatlog.appendChild(botBubble);

  // Clear input
  inputField.value = "";

  // Scroll to bottom
  chatlog.scrollTop = chatlog.scrollHeight;
}


