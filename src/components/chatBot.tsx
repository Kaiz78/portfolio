import { useEffect } from 'react';

declare global {
    interface Window {
        botpressWebChat: any;
    }
  }


 

const ChatbotComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "Portfolio",
        "botConversationDescription": "Assistance Chat conversation",
        "botId": "19d5295d-2209-4d44-95ab-ad0b11067943",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "19d5295d-2209-4d44-95ab-ad0b11067943",
        "webhookId": "5ede527b-b06e-4487-9ad6-1888cd325c4c",
        "lazySocket": true,
        "themeName": "prism",
        "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/62bd843f-5a3e-4afd-b545-579e4cea90fa/v74410/style.css",
        "frontendVersion": "v1",
        "useSessionStorage": true,
        "enableConversationDeletion": true,
        "theme": "prism",
        "themeColor": "#2563eb"

      });



    };

 
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Ajoutez les dépendances nécessaires si nécessaire

  return (
    <div>
      
    </div>
  );
};

export default ChatbotComponent;