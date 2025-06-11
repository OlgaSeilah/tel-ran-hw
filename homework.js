// ---------- Original ----------
let group = {
    title: 'Java 61',
    students: ['Adassa', 'Alisa', 'Anna', 'Irina', 'Maria', 'Nadezhda', 'Olga', 'Sofia',
        'Tamara', 'Tatiana', 'Tatyana', 'Seilah', 'Julia'],
    showList: function () {
        const show = function (name) {
            console.log(`${this.title}: ${name}`)
        }
        this.students.forEach(show);
    }
}

// ---------- context loss -> fix by adding arrow func ----------
let group = {
    title: 'Java 61',
    students: ['Adassa', 'Alisa', 'Anna', 'Irina', 'Maria', 'Nadezhda', 'Olga', 'Sofia',
        'Tamara', 'Tatiana', 'Tatyana', 'Seilah', 'Julia'],
    showList: function ()  {
        const show =  (name) => {
            console.log(`${this.title}: ${name}`)
        }
        this.students.forEach(show);
    }
}

// ---------- context loss -> fix by adding context at current point where it is lost ----------
let group = {
    title: 'Java 61',
    students: ['Adassa', 'Alisa', 'Anna', 'Irina', 'Maria', 'Nadezhda', 'Olga', 'Sofia',
        'Tamara', 'Tatiana', 'Tatyana', 'Seilah', 'Julia'],
    showList: function () {
        let self = this;
        console.log(self)
        const show = function (name) {
            console.log(`${this.title}: ${name}`)
            console.log(self)
        }
        this.students.forEach(show.bind(this));
    }
}

// ---------- context loss -> fix by using one func showList instead of using showList + show ----------
let group = {
    title: 'Java 61',
    students: ['Adassa', 'Alisa', 'Anna', 'Irina', 'Maria', 'Nadezhda', 'Olga', 'Sofia',
        'Tamara', 'Tatiana', 'Tatyana', 'Seilah', 'Julia'],
    showList: function () {
        this.students.forEach(student => {
            console.log(`${this.title}: ${student}`);})
    }
}


// Unmodified
group.showList();
const newGroup = group;
group = null;
console.log('==========');
newGroup.showList();