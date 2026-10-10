
/**
 * Greets someone by name.
 * greet("Ahmed") -> "Hello, Ahmed!"
 *
 * Written as a declaration — the `function greet(...)` form.
 *
 * @param {string} name
 * @returns {string}
 */
export function greet(name) {
  return `Hello, ${name}!`;
}

/**
 * Doubles a number.
 * double(21) -> 42
 *
 * Written as an ARROW function.
 *
 * @param {number} n
 * @returns {number}
 */
export const double = (n) => n * 2;

/**
 * Takes a percentage off a price.
 * applyDiscount(320, 25) -> 240
 * applyDiscount(200, 10) -> 180
 *
 * @param {number} amount
 * @param {number} percent
 * @returns {number}
 */
export const applyDiscount = (amount, percent) =>
  amount - (amount * percent) / 100;

/**
 * Formats an amount and currency.
 */
export const formatPrice = (amount, currency = "EGP") =>
  `${amount} ${currency}`;

/**
 * Calls a function on a value, then calls it again
 * on the result.
 */
export function applyTwice(fn, value) {
  return fn(fn(value));
}
