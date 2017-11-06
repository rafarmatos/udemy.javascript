// Function constructor

 var Person = function (name, yearOfBirth, job) {
     this.name = name;
     this.yearOfBirth = yearOfBirth;
     this.job = job;
 }

 Person.prototype.calculateAge = function () {
     console.log(2016 - this.yearOfBirth)
 }

 Person.prototype.lastName = 'Smith';

 var john = new Person('John', 1990, 'teacher');
 john.calculateAge();

 var jane = new Person('jane', 1969, 'designer');
 jane.calculateAge();

 console.log(john.lastName);
 console.log(jane.lastName);