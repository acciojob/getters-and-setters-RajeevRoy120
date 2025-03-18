class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name(): string {
    return this._name;
  }

  // Setter for name
  set name(name: string) {
    this._name = name;
  }

  // Getter for age
  get age(): number {
    return this._age;
  }

  // Setter for age
  set age(age: number) {
    this._age = age;
  }
}

// Student class
class Student extends Person {
  study(): void {
    console.log(`${this.name} is studying`);
  }
}

// Teacher class
class Teacher extends Person {
  teach(): void {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

