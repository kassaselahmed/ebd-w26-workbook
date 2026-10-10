
import dayjs from "dayjs";

/**
 * Lays a date out the way people write it here.
 */
export function formatDate(dateString) {
  return dayjs(dateString).format("DD/MM/YYYY");
}

/**
 * Returns the year a date falls in.
 */
export function yearOf(dateString) {
  return dayjs(dateString).year();
}

/**
 * Returns a date after adding the specified number of days.
 */
export function addDays(dateString, days) {
  return dayjs(dateString).add(days, "day").format("YYYY-MM-DD");
}

/**
 * The package chosen from the npm registry.
 */
export const myPackage = "lodash";
