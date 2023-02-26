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
