/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const costPerDay = 40;
  const middleTermStart = 3;
  const middleTermFinish = 6;
  const basicDiscount = 20;
  const longTerm = 7;
  const additionalDiscount = 50;
  const baseRentalCost = costPerDay * days;

  if (days >= middleTermStart && days <= middleTermFinish) {
    return baseRentalCost - basicDiscount;
  }

  if (days >= longTerm) {
    return baseRentalCost - additionalDiscount;
  }

  return baseRentalCost;
}

module.exports = calculateRentalCost;
