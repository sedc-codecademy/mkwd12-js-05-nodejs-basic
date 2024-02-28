console.log("it's alive");

//Async-Await recap
const fetchPosts = async () => {
  const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await postsRes.json();

  //   console.log(posts);

  return posts;
};

const fetchTodos = async () => {
  const todosRes = await fetch("https://jsonplaceholder.typicode.com/todos");

  //   console.log(todosRes);

  const todos = await todosRes.json();

  return todos;
};

const fetchData = async () => {
  try {
    const posts = await fetchPosts();
    const todos = await fetchTodos();

    console.log("From the fetch data function");
    console.log("Posts", posts);
    console.log("Todos", todos);
  } catch (error) {
    console.error(error);
  }
};

fetchData();

const student = {
  firstName: "John",
  lastName: "Doe",
  age: 101,
  grades: {
    basicHtml: 5,
    basicJs: 1,
    advancedJs: 0,
  },
};

const { firstName: studentFirstName, lastName: studentLastName } = student;

const printStudentInfo = ({
  firstName,
  lastName,
  age,
  grades: { basicHtml, basicJs, advancedJs },
}) => {
  console.log(`Student name: ${firstName} ${lastName}, Age: ${age}`);
  console.log("Student grades:");
  console.log(`BasicHTML: ${basicHtml}`);
  console.log(`BasicJS: ${basicJs}`);
  console.log(`AdvancedJS: ${advancedJs}`);
};

printStudentInfo(student);

//Copying arrays and objects

const person = {
  firstName: "Borche",
  lastName: "Borisovski",
  age: "Enough",
};

const personCopy = { ...person };

const personCopy2 = person;

const studentCopy = JSON.parse(JSON.stringify(student));

const leftArr = [1, 2, [3, 4], 5];
const rightArr = [6, 7, 8, 9, 10];

const combinedArr = [...leftArr, ...rightArr];

class Person {
  #idNumber = "1234ASDF";

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  printFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  static checkPersonAge(person) {
    if (!(person instanceof Person)) return;

    return person.age > 18 ? "Person is an adult" : "Person is a minor";
  }
}

const borche = new Person("Borche", "Borisovski", 31);

borche.printFullName();

console.log(Person.checkPersonAge(borche));
