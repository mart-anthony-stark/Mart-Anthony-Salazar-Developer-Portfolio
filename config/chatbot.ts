// MessageParser starter code
export class MessageParser {
  actionProvider: any;
  state: any;
  constructor(actionProvider: any, state: any) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message: any) {
    const lowerCaseMessage = message.toLowerCase();
    const greetings = ["hello", "hi", "annyeong"];
    const ages = ["how old"];

    // Greetings
    if (greetings.some((word: string) => lowerCaseMessage.includes(word))) {
      this.actionProvider.greet();
    }

    // Asks how old
    if (ages.some((word: string) => lowerCaseMessage.includes(word))) {
    }
  }
}

// ActionProvider starter code
export class ActionProvider {
  createChatBotMessage: any;
  setState: any;
  createClientMessage: any;
  stateRef: any;
  createCustomMessage: any;
  constructor(
    createChatBotMessage: any,
    setStateFunc: any,
    createClientMessage: any,
    stateRef: any,
    createCustomMessage: any,
    ...rest: any
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }
  greet = () => {
    const replies = ["Hi, friend", "Hello!"];
    const greetingMessage = this.createChatBotMessage(
      replies[Math.floor(Math.random() * replies.length)]
    );
    this.updateChatbotState(greetingMessage);
  };
  introduce = () => {
    const greetingMessage = this.createChatBotMessage(
      "Mart Anthony Salazar is a BSIT student and also a freelance web developer in the Philippines."
    );
    this.updateChatbotState(greetingMessage);
  };

  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
  updateChatbotState = (message: string) => {
    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}
