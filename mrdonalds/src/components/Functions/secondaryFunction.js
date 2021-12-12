export const totalPriceItems = order => { return order.price * order.count };

export const formatCurrency = val => {
  return val.toLocaleString('ru-KZ', {
    style: 'currency', currency: 'KZT', maximumFractionDigits: 0
  })
};