const BOTNAME = `Marvis`;
import MyAvatar from "./bot_components/MyAvatar";
// Config starter code

import { createChatBotMessage } from "react-chatbot-kit";

export const config = {
  initialMessages: [createChatBotMessage(`Hello world! I'm ${BOTNAME}`, {})],
  customComponents: {
    // Replaces the default header
    header: () => (
      <div className="react-chatbot-kit-chat-header">Chat with me</div>
    ),
    // Replaces the default bot avatar
    botAvatar: (props: any) => <MyAvatar {...props} />,
    // Replaces the default bot chat message container
    //  botChatMessage: (props) => <MyCustomChatMessage {...props} />,
    // Replaces the default user icon
    //  userAvatar: (props) => <MyCustomAvatar {...props} />,
    // Replaces the default user chat message
    //  userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
  },
};
