'use strict';

console.log('====== Task 1 =====');
console.log('====== Task 1.1 =====');

function Plane(name, isFlying = false) {
    this.name = name;
    this.isFlying = isFlying;

    this.takeOff = function() {
      return this.isFlying = true;
    };

    this.land = function() {
        return this.isFlying = false;
    };
}

const plane1 = new Plane('BritishAirlines');
const plane2 = new Plane('Ryanair');
const plane3 = new Plane('MAU');
const plane4 = new Plane('Lufthansa');
const plane5 = new Plane('TurkishAirlines');

console.log('check plane1', plane1.name, plane1.isFlying);
console.log('check plane2', plane2.name, plane2.isFlying);
console.log('check plane3', plane3.name, plane3.isFlying);
console.log('check plane4', plane4.name, plane4.isFlying);
console.log('check plane5', plane5.name, plane5.isFlying);

const airport = {
    planes: [
        plane1,
        plane2,
        plane3,
        plane4,
        plane5
    ],
    getFlyingPlanes: function() {
      let planeFlight = this.planes.filter((el) => {
        return Object.values(el).includes(true);
      })
      return planeFlight.length;
    }
}
console.log('check airport', airport);
console.log('check airport method', airport.getFlyingPlanes());

plane1.takeOff();
plane3.takeOff();

console.log('plains in the air', airport.getFlyingPlanes());


const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const btn4 = document.getElementById('button4');
const btn5 = document.getElementById('button5');

btn1.addEventListener('click', () => {
  if (plane1.isFlying === false) {
    plane1.takeOff();
  }
  else {
    plane1.land();
  } 
  console.log(airport.planes);
  console.log('plains in the air', airport.getFlyingPlanes());
});

btn2.addEventListener('click', () => {
  if (plane2.isFlying === false) {
    plane2.takeOff();
  }
  else {
    plane2.land();
  } 
  console.log(airport.planes);
  console.log('plains in the air', airport.getFlyingPlanes());
});

btn3.addEventListener('click', () => {
  if (plane3.isFlying === false) {
    plane3.takeOff();
  }
  else {
    plane3.land();
  } 
  console.log(airport.planes);
  console.log('plains in the air', airport.getFlyingPlanes());
});

btn4.addEventListener('click', () => {
  if (plane4.isFlying === false) {
    plane4.takeOff();
  }
  else {
    plane4.land();
  } 
  console.log(airport.planes);
  console.log('plains in the air', airport.getFlyingPlanes());
});

btn5.addEventListener('click', () => {
  if (plane5.isFlying === false) {
    plane5.takeOff();
  }
  else {
    plane5.land();
  } 
  console.log(airport.planes);
  console.log('plains in the air', airport.getFlyingPlanes());
});

console.log('====== Task 1.2 =====');

function User(name, surname) {
    this.name = name;
    this.surname = surname;

    // this.getFullName = function() {
    //     return `${this.name} ${this.surname}`;
    // }
}

User.prototype.getFullName = function () {
    return `${this.name} ${this.surname}`;
  }

function Student(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;

    this.getCourse = function() {
        let currentYear = new Date().getFullYear();
        if (this.year >= 2018 && this.year != currentYear) {
            return currentYear - this.year;
        }
        else {
            console.log('You are not a student!');
        }
    }
}

const user = new User('Regina', 'Varybrus');

console.log('check user', user.name, user.surname);
console.log('fullname', user.getFullName());

const student = new Student('Ivan', 'Fomenko', 2019);
student.__proto__ = user;

console.log('check student', student.name, student.surname, student.year);
console.log('fullname', student.getFullName());
console.log('course', student.getCourse());

console.log('====== Task 2 =====');

class String {
    constructor(str) {
      this.str = str;
    }

    countAllUpperCase() {
      let reNotUpperCase = /[^A-Z]/g,
      upperCount = this.str.replace(reNotUpperCase, '').length;
      return upperCount;
    }
}

const string = new String('fsdjkJKHJKSFDkjjSJhjkHJGJHGHJ');

console.log('str', string.str);

string.countAllUpperCase();

console.log('method', string.countAllUpperCase());
