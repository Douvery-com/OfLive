export function getStatusMessage(status: any) {
  switch (status) {
    case 0:
      return 'Order created';
    case 1:
      return 'Order packed';
    case 2:
      return 'Order shipped';
    case 3:
      return 'Order in transit';
    case 4:
      return 'Order delivered';
    case 5:
      return 'Order completed';
    default:
      return 'Unknown status';
  }
}

export function calculateCartDetails(car_product: any) {
  const taxRate = 0.1; // Por ejemplo, un impuesto del 10%
  const shippingCost = 0; // Establece un costo de envío fijo, si es necesario

  const subTotalA = car_product.productResults.reduce(
    (accumulator: any, item: any) => {
      return accumulator + item.priceXquantity;
    },
    0
  );

  const descounts = car_product.productResults.reduce(
    (accumulator: any, item: any) => {
      return accumulator + (item.priceXquantity - item.totalPrice);
    },
    0
  );

  const subTotal = parseFloat((subTotalA - descounts).toFixed(2));
  const tax = parseFloat((subTotal * taxRate).toFixed(2));
  const total = parseFloat((subTotal + tax + shippingCost).toFixed(2));
  return {
    subTotalA,
    descounts,
    subTotal,
    tax,
    shippingCost,
    total,
  };
}
