// LL9.js
export function wait(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}