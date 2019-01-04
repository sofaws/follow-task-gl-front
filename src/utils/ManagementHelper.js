/**
 * calculates the skid of a task
 * @param estimated (second)
 * @param imputed (second)
 * @param raf (second)
 * @returns {number}
 */
export function getSkid(estimated: number, imputed: number, raf: number) {
  return imputed + raf - estimated;
}

/**
 * Calculate the progress of a task
 * @param imputed (second)
 * @param raf (second)
 * @returns {number}
 */
export function getProgress(imputed: number, raf: number) {
  return imputed / (imputed + raf);
}

/**
 * Calculate the % progress of a task
 * @param imputed (second)
 * @param raf (second)
 * @returns {string}
 */
export function getPourcentProgress(imputed: number, raf: number) {
  if (!imputed || (!raf && raf !== 0)) {
    return "Calcul impossible";
  }

  return `${Math.round(getProgress(imputed, raf) * 100)}%`;
}

/**
 * Return the sum of array imputations
 * @param consumed
 * @returns {object}
 */
export function getSumConsumed(consumed: object) {
  if (!consumed) return null;
  return Object.values(consumed).reduce(
      (accumulator, currentValue) => accumulator + currentValue.time,
      0
  );
}

/**
 * Calcul the cost
 * @param consumed (second)
 * @param cost
 * @returns {number}
 */
export function calculCost(consumed, cost) {
  return (consumed / 3600) * cost;
}
