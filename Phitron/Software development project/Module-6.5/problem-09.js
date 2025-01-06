function monthlySavings(allPayments, livingCost) {
    if (!Array.isArray(allPayments) || typeof livingCost !== 'number') {
        return "invalid input";
    }

    let totalEarnings = 0;
    for (let payment of allPayments) {
        if (typeof payment !== 'number') {
            return "invalid input";
        }
        if (payment >= 3000) {
            totalEarnings += payment - (payment * 0.2); 
        } else {
            totalEarnings += payment; 
        }
    }

    const savings = totalEarnings - livingCost;

    if (savings < 0) {
        return "earn more";
    } else {
        return savings;
    }
}

console.log(monthlySavings([1000, 2000, 3000], 5400)); 
console.log(monthlySavings([1000, 2000, 2500], 5000)); 
console.log(monthlySavings([900, 2700, 3400], 10000)); 
console.log(monthlySavings(100, [900, 2700, 3400]));  
