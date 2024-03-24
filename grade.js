// Function to prompt the user for input and validate it
function getStudentMarks() {
    let marks = parseFloat(prompt("Enter student marks (between 0 and 100):"));
    // Validate input
    while (isNaN(marks) || marks < 0 || marks > 100) {
        marks = parseFloat(prompt("Invalid input! Enter student marks (between 0 and 100):"));
    }
    return marks;
}

// Function to determine the grade based on the input marks
function calculateGrade(marks) {
    if (marks > 79) {
        return "A";
    } else if (marks >= 60 && marks <= 79) {
        return "B";
    } else if (marks >= 50 && marks <= 59) {
        return "C";
    } else if (marks >= 40 && marks <= 49) {
        return "D";
    } else {
        return "E";
    }
}

// Main function to execute the program
function main() {
    const studentMarks = getStudentMarks();
    const grade = calculateGrade(studentMarks);
    console.log("Grade:", grade);
}

// Execute the main function
main();