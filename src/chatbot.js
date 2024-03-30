import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        botId: '4351b517-de0f-400b-8935-1e5d52fbefc2',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '4351b517-de0f-400b-8935-1e5d52fbefc2',
      });

      // Event handling for chatbot events
      window.botpressWebChat.onEvent(function (event) {
        console.log('Botpress WebChat event:', event);
        // You can add logic here to handle different chatbot events
        // For example, hide or close the chatbot when the conversation ends
        if (event.type === 'end') {
          console.log('Conversation ended');
          // Add code here to hide or close the chatbot UI
        }
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Render the chatbot UI here
  return (
    <div className="chatbot-container">
      <div id="webchat" />
    </div>
  );
};

export default Chatbot;