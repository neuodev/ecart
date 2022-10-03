export let currFormat = new Intl.NumberFormat("us", {
  style: "currency",
  currency: "USD",
  notation: "standard",
  maximumFractionDigits: 2,
}).format;
