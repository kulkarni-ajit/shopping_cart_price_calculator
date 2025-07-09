/**
 * Formats given price in Paise to Rupee
 * @param paisa Input value in Paise
 * @returns The converted value in Rupee
 */
export function formatToRupees(paisa: number): string {
  return `Rs. ${(paisa / 100).toFixed(2)}`;
}
