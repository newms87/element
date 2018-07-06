/**
 * Emits a bubbling event on a target element
 *
 * @param typeArg
 * @param target
 */
export function emitBubble(typeArg, target) {
  return target.dispatchEvent(new Event(typeArg), {bubbles: true});
}
