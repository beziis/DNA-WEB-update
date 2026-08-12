// Fallback global JSX IntrinsicElements to prevent editor errors when @types/react isn't picked up
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
