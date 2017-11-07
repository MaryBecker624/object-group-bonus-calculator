var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

function EmployeeObject(oldObject) {
    this.name = oldObject.name;
    this.bonusPercentage = bonusPercentageCreator(oldObject.reviewRating, oldObject.employeeNumber, 
        oldObject.annualSalary);
    this.totalBonus = totalBonusCreator(oldObject.annualSalary, this.bonusPercentage);
    this.totalCompensation = totalCompensationCreator(oldObject.annualSalary, this.totalBonus);
}

function bonusPercentageCreator(currentRating, currentEmployeeNumber, currentAnnualIncome) {
    var bonusPercentage;
    if (currentRating <= 2) {
        bonusPercentage = 0;
    } else if (currentRating ==3) {
        bonusPercentage = 0.04;
    } else if (currentRating ==4) {
        bonusPercentage = 0.06;
    } else if (currentRating ==5) {
        bonusPercentage = 0.1;
    } 
    if (currentEmployeeNumber.length ==4){
        bonusPercentage += 0.05;
    }
    if (currentAnnualIncome>65000) {
        bonusPercentage-=0.01;
    }
    if (bonusPercentage > 0.13) {
        bonusPercentage = 0.13;
    }
    if (bonusPercentage<0) {
        bonusPercentage = 0;
    }
    return bonusPercentage;
}

function totalBonusCreator(currentAnnualIncome, currentBonusPercentage){
    return Math.floor(parseInt(currentAnnualIncome) * currentBonusPercentage);
}

function totalCompensationCreator (currentAnnualIncome, currentTotalBonus){
    return (parseInt(currentAnnualIncome) + currentTotalBonus);

}

function logEmployeeObjects(array){
    for (var i=0; i<array.length; i++){
        var output = new EmployeeObject(array[i]);
        console.log(output);
    }
}

logEmployeeObjects(employees);