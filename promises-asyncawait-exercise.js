function addStudentToClass(student) {
    return new Promise((resolve, reject) => {
        // Simulate adding the student to the class after a random delay
        const randomDelay = Math.floor(Math.random() * 4000) + 1000; // Random delay between 1 and 4 seconds. //simulates time it might take to process adding a student to a class.
        setTimeout(() => {
            if (student.age < 18) {
                reject("Student is too young to enroll in this class.");
            }   else {
                resolve("Student enrolled in the class.");
            }
        }, randomDelay); //specifies the delay before the code inside it is executed
    });
}

async function registerStudent(student) {
   try {
    const result = await addStudentToClass(student); 
    console.log(result);
   } catch (error) {
    console.error(error);
   }
}

//Example student objects
const students = [
    { name: "Manah", age: 18},
    { name: "Stefano", age: 16},
    { name: "Honesty", age: 22},
];

//Register each student
for (const student of students) {
    registerStudent(student);
}