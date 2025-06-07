class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }

    addEmployee = function (employee) {
        const e = this.employees.find(({id}) => id === employee.id); // e - employee was found
        if (!e) {
            this._employees.push(employee);
        } else {
            alert(`Employee with ID ${employee.id} already exists in this company`);
        }
        return !e;
    }

    removeEmployee = function (id) {
        const index = this._employees.findIndex(e => e.id === id);
        if (index >= 0) {
            this._employees.splice(index, 1);
        }
        return index >= 0;
    }

    get size() {
        return this._employees.length;
    }


    get minAge() {
        const agesAr = [...this.employees.map(emp => +emp.age)];
        return Math.min(...agesAr);
    }

    get maxAge() {
        return Math.max(...this.employees.map(emp => emp.age));
    }

    get averageAge() {
        return this.employees.reduce((sum, emp) => sum + emp.age, 0) / this.size;
    }

    get totalSalary() {
        return this.employees.reduce((sum, emp) => sum + emp.salary, 0);
    }

    get averageSalary() {
        return this.employees.reduce((sum, emp) => sum + emp.salary, 0) / this.size;
    }
}