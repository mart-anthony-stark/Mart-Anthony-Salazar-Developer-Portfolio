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

    if (
      lowerCaseMessage
        .split(" ")
        .some((word: string) => greetings.includes(word))
    ) {
      this.actionProvider.greet();
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
  greet() {
    const replies = ["Hi, friend", "Hello!"];
    const greetingMessage = this.createChatBotMessage(
      replies[Math.floor(Math.random() * replies.length)]
    );
    this.updateChatbotState(greetingMessage);
  }
  updateChatbotState(message: string) {
    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}
