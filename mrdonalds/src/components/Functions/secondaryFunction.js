export const totalPriceItems = order => order.price * order.count;

export const formatCurrency = val => val.toLocaleString('ru-KZ', {
    style: 'currency', currency: 'KZT', maximumFractionDigits: 0
  });