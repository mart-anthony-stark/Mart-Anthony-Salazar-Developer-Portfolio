
// MessageParser starter code
export class MessageParser {
  actionProvider: any;
  state: any;
  constructor(actionProvider: any, state: any) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message: any) {
    console.log(message);
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
}

