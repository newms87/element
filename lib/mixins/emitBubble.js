"use strict";

exports.__esModule = true;
exports.emitBubble = emitBubble;
/**
 * Emits a bubbling event on a target element
 *
 * @param typeArg
 * @param target
 */
function emitBubble(typeArg, target) {
  return target.dispatchEvent(new Event(typeArg), { bubbles: true });
}