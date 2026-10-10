
/**
 * The name of a product.
 *
 * @param {object} product
 * @returns {string}
 */
export function productName(product) {
  return product.name;
}

/**
 * Reads whichever field it is asked for.
 *
 * @param {object} product
 * @param {string} field
 * @returns {*} whatever is stored under that key
 */
export function getField(product, field) {
  return product[field];
}

/**
 * The city a student lives in.
 *
 * @param {object} student
 * @returns {string}
 */
export function studentCity(student) {
  return student.address.city;
}

/**
 * A one-line summary of a product.
 *
 * @param {object} product
 * @returns {string}
 */
export function summarize(product) {
  const { name, price } = product;
  return `${name} costs ${price} EGP`;
}

/**
 * A copy of a product with a different price.
 *
 * @param {object} product
 * @param {number} newPrice
 * @returns {object}
 */
export function withPrice(product, newPrice) {
  return { ...product, price: newPrice };
}
