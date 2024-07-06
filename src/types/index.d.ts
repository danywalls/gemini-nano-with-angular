export {};

declare global {
  interface AISession {
    promptStreaming: (prompt: string) => AsyncIterableIterator<string>;
    destroy: () => void;
  }
  interface AI {
    canCreateGenericSession: () => Promise<string>;
    canCreateTextSession: () => Promise<string>;
    createGenericSession: () => Promise<AISession>;
    createTextSession: () => Promise<AISession>;
    defaultGenericSessionOptions: () => object;
    defaultTextSessionOptions: () => object;
  }
  interface Window {
    ai: AI
  }
}



