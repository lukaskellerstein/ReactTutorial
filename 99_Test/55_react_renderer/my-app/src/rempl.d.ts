declare module "rempl" {
  export function createPublisher(
    name: string,
    requestUI: (
      settings: any,
      callback: (error: Error | null, type: string, value: string) => void
    ) => void
  ): Publisher;
  export function getSubscriber(): Subscriber;
  export function getHost(): {
    activate(): void;
  };
  export interface Publisher {
    publish(...args: any): void;
  }
  export interface Subscriber {}
}
