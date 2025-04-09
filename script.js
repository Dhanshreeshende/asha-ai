// Toggle chatbot visibility
function toggleChatbot() {
  const chatbot = document.getElementById('chatbotContainer');
  chatbot.classList.toggle('visible');
}

// Send message function
function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();
  
  if (message) {
      // Add user message to chat
      addMessage(message, 'user');
      
      // Clear input
      input.value = '';
      
      // Simulate bot response (in a real app, you'd call your backend)
      setTimeout(() => {
          const botResponse = getBotResponse(message);
          addMessage(botResponse, 'bot');
      }, 500);
  }
}

// Handle Enter key press
function handleKeyPress(event) {
  if (event.key === 'Enter') {
      sendMessage();
  }
}

// Add message to chat
function addMessage(text, sender) {
  const messagesDiv = document.getElementById('chatbotMessages');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
  messageDiv.textContent = text;
  messagesDiv.appendChild(messageDiv);
  
  // Scroll to bottom
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Simple bot response logic (replace with actual API calls in production)
function getBotResponse(message) {
  const lowerMsg = message.toLowerCase();
  
  if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
      return "Hello there! How can I assist you today?";
  }
  
  if (lowerMsg.includes('job') || lowerMsg.includes('career')) {
      return "I can help with job opportunities. What field are you interested in?";
  }
  
  if (lowerMsg.includes('mentor') || lowerMsg.includes('guidance')) {
      return "We have several mentorship programs available. Are you looking for technical or career guidance?";
  }
  
  if (lowerMsg.includes('women') && (lowerMsg.includes('empower') || lowerMsg.includes('support'))) {
      return "Here are some great resources for women's empowerment:\n1. WomenWhoCode.org\n2. LeanIn.org\n3. AnitaB.org";
  }
  
  return "I'm not sure I understand. Could you ask about jobs, mentorship, or career advice?";
}
