export function useCommaFormater(value: string | number): string {
  let exchangeValue: number;

  if (typeof value === "string") {
    exchangeValue = parseInt(value, 10);
  } else {
    exchangeValue = value;
  }

  return exchangeValue.toLocaleString();
}
