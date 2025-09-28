document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.getElementById('chat-window');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.innerHTML = `<div class="message-bubble">${message}</div>`;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    // Initial bot message
    appendMessage('bot', 'Hi there! I\'m your SF Credit Union banking assistant. How can I help you today?');

    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;

        appendMessage('user', message);
        userInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            appendMessage('bot', botResponse);
        }, 500);
    }

    function getBotResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();

        if (lowerCaseMessage.includes('hours')) {
            return 'Our current lobby hours are Monday - Friday, 9:00 AM to 4:00 PM.';
        } else if (lowerCaseMessage.includes('location')) {
            return 'You can find us at 123 Main Street, San Francisco, CA. We also have several ATM locations listed on our website.';
        } else if (lowerCaseMessage.includes('account')) {
            return 'Are you asking about opening a new account, or managing an existing one?';
        } else if (lowerCaseMessage.includes('loan')) {
            return 'We offer various loan options, including personal loans, auto loans, and mortgages. What type of loan are you interested in?';
        } else if (lowerCaseMessage.includes('contact')) {
            return 'You can call us at (123) 456-7890 or visit our contact page on the website.';
        } else if (lowerCaseMessage.includes('balance')) {
            return 'To check your account balance, please log in to your online banking portal or use our mobile app.';
        } else if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
            return 'Hello! How can I assist you with your banking needs today?';
        } else {
            return 'I am still learning and may not have the answer to that specific question. Please visit our FAQ page or contact customer support for more assistance.';
        }
    }
});