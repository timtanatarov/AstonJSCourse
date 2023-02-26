function Company(name, salary) {
    Company.addStaff({name, salary});
    this.spend = function (value) {
        Company.store.staffList = Company.store.staffList.map((employee) => {
            employee.income = employee.name === name ? employee.income -= value : employee.income;
            return employee;
        });
        Company.store.money -= value;
    };
    this.income = function (value) {
        Company.store.staffList = Company.store.staffList.map(employee => {
            employee.income = employee.name === name ? employee.income += value - salary : employee.income;
            return employee;
        });
        Company.store.money += value - salary;
    };
};
Company.store = {
    staffList: [],
    countStaff: 0,
    money: 0,
};
Company.getLeaders = function () {
    const staffList = this.store.staffList;
    const max = this.store.staffList.reduce(
        (acc, {income}) => (acc > income ? acc : income), 0);
    return staffList.filter(({income}) => income === max);
};
Company.addStaff = function ({name, income = 0}) {
    this.store.staffList.push({name, income});
    this.store.countStaff += 1;
};


const alex = new Company('Alex', 1000);
const max = new Company('Max', 250);
const peter = new Company('Peter', 250);
const john = new Company('John', 250);

alex.income(500);
alex.spend(2500);

max.income(500);
peter.income(500);
peter.income(500);
john.income(750);

console.log(Company.store);

console.log(Company.getLeaders());