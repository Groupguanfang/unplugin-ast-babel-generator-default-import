export function HelloWorld() {
  return (target: new (...args: unknown[]) => unknown) => target;
}

@HelloWorld()
export class TestService {}
