// Constants for tax rates, NHIF, and NSSF deductions
const taxRates = [
    { minIncome: 0, maxIncome: 24000, taxRate: 0.1 },
    { minIncome: 24001, maxIncome: 32333, taxRate: 0.25 },
    { minIncome: 32334, maxIncome: 40467, taxRate: 0.3 },
    { minIncome: 40468, maxIncome: 48000, taxRate: 0.32 },
    { minIncome: 48001, maxIncome: Infinity, taxRate: 0.34 }
];

const nhifRates = [
    { minIncome: 0, maxIncome: 5999, nhifDeduction: 150 },
    { minIncome: 6000, maxIncome: 7999, nhifDeduction: 300 },
    // Add more NHIF rate ranges here...
    { minIncome: 500000, maxIncome: Infinity, nhifDeduction: 5000 }
];

const nssfRate = 0.06; // NSSF deduction rate

// Function to calculate tax based on income
function calculateTax(income) {
    let tax = 0;
    for (let i = 0; i < taxRates.length; i++) {
        if (income > taxRates[i].minIncome) {
            const taxableAmount = Math.min(income, taxRates[i].maxIncome) - taxRates[i].minIncome;
            tax += taxableAmount * taxRates[i].taxRate;
        } else {
            break;
        }
    }
    return tax;
}

// Function to calculate NHIF deduction based on income
function calculateNHIFDeduction(income) {
    let nhifDeduction = 0;
    for (let i = 0; i < nhifRates.length; i++) {
        if (income > nhifRates[i].minIncome) {
            nhifDeduction = nhifRates[i].nhifDeduction;
        } else {
            break;
        }
    }
    return nhifDeduction;
}

// Function to calculate NSSF deduction based on income
function calculateNSSF(income) {
    return income * nssfRate;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const tax = calculateTax(grossSalary);
    const nhifDeduction = calculateNHIFDeduction(grossSalary);
    const nssfDeduction = calculateNSSF(grossSalary);
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

    console.log("Gross Salary:", grossSalary.toFixed(2));
    console.log("Tax (PAYE):", tax.toFixed(2));
    console.log("NHIF Deduction:", nhifDeduction.toFixed(2));
    console.log("NSSF Deduction:", nssfDeduction.toFixed(2));
    console.log("Net Salary:", netSalary.toFixed(2));
}

