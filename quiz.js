let selectedQuiz = '';
let databaseQuizVariant = 1;
let dataStructureQuizVariant = 1;
let dcQuizVariant = 1;
let bigdataQuizVariant = 1;
let dmQuizVariant = 1;
let db2QuizVariant = 1;
let irQuizVariant = 1;
let biQuizVariant = 1;
let issQuizVariant = 1;
let plQuizVariant = 1;
let ethicsQuizVariant = 1;
let sqQuizVariant = 1;
let dsQuizVariant = 1;




let navigationStack = [{ view: 'quiz-selection', title: 'Select Quiz Category' }];
let quizInProgress = false;
let currentQuestionIndex = 0;
let totalQuestions = 0;
let score = 0;
let userAnswers = [];
let timeLimit = 0;
let startTime;
let timerInterval;


let userStats = JSON.parse(localStorage.getItem('userStats')) || {
    totalQuizzes: 0,
    totalScore: 0,
    bestScore: 0,
    totalTime: 0,
    recentQuizzes: []
};


function updateStatsDisplay() {
    document.getElementById('total-quizzes').textContent = userStats.totalQuizzes;
    document.getElementById('average-score').textContent = userStats.totalQuizzes > 0 ?
        Math.round(userStats.totalScore / userStats.totalQuizzes) + '%' : '0%';
    document.getElementById('best-score').textContent = userStats.bestScore + '%';

    const totalMinutes = Math.floor(userStats.totalTime / 60);
    const totalSeconds = userStats.totalTime % 60;
    document.getElementById('total-time').textContent = `${totalMinutes}m ${totalSeconds}s`;


    const recentPerformance = document.getElementById('recent-performance');
    recentPerformance.innerHTML = '';

    if (userStats.recentQuizzes.length === 0) {
        recentPerformance.innerHTML = '<p>No quizzes taken yet</p>';
    } else {
        userStats.recentQuizzes.slice(0, 3).forEach(quiz => {
            const quizElement = document.createElement('div');
            quizElement.className = 'stat-item';
            quizElement.innerHTML = `
                        <span>${quiz.name}</span>
                        <span class="stat-value">${quiz.score}%</span>
                    `;
            recentPerformance.appendChild(quizElement);
        });
    }
}


function updateUserStats(quizName, score, timeTaken) {
    userStats.totalQuizzes++;
    userStats.totalScore += score;
    userStats.bestScore = Math.max(userStats.bestScore, score);
    userStats.totalTime += timeTaken;

    userStats.recentQuizzes.unshift({
        name: quizName,
        score: score,
        date: new Date().toLocaleDateString()
    });

    if (userStats.recentQuizzes.length > 5) {
        userStats.recentQuizzes.pop();
    }

    localStorage.setItem('userStats', JSON.stringify(userStats));
    updateStatsDisplay();
}


document.addEventListener('DOMContentLoaded', function () {
    updateStatsDisplay();

    const savedGlassMode = localStorage.getItem('glassMode') === 'true';
    const glassToggleCheckbox = document.getElementById('glass-status');

    if (glassToggleCheckbox) {
        glassToggleCheckbox.checked = savedGlassMode;
        document.body.classList.toggle('glass-mode-on', savedGlassMode);
    }
    const checkbox = document.getElementById("status");
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        checkbox.checked = true;
    }

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});











const databaseQuestions1 = [

    {
        question: "What is a database?",
        options: ["A collection of unrelated data", "A collection of related data", "A program that retrieves data", "A storage medium for documents"],
        answer: 1
    },
    {
        question: "Which of the following is a function of a DBMS?",
        options: ["Text editing", "Defining the database", "Printing documents", "Browsing the internet"],
        answer: 1
    },

];

const databaseQuestions2 = [

    {
        question: "What is the primary purpose of data abstraction in database systems?",
        options: [
            "To improve data storage efficiency",
            "To hide details of physical data storage",
            "To increase data redundancy",
            "To enhance data retrieval speed"
        ],
        answer: 1
    },
    {
        question: "Which of the following describes a conceptual data model?",
        options: [
            "It describes how data is physically stored.",
            "It is used for database implementation in DBMS.",
            "It describes the database structure in an understandable way for most users.",
            "It focuses on data retrieval operations."
        ],
        answer: 2
    },
    {
        question: "What is an example of a representational data model?",
        options: [
            "Entity-Relationship Model",
            "Hierarchical Model",
            "Physical Data Model",
            "Conceptual Data Model"
        ],
        answer: 1
    },
    {
        question: "What does the term 'database schema' refer to?",
        options: [
            "The actual data stored in the database",
            "The description of the database structure",
            "The physical storage of data",
            "The current state of the database"
        ],
        answer: 1
    },
    {
        question: "In the context of databases, what is a 'database state'?",
        options: [
            "The schema of the database",
            "The current set of data in the database",
            "A backup of the database",
            "The data model used"
        ],
        answer: 1
    },
    {
        question: "What is the primary function of an access path in a database?",
        options: [
            "To define the schema of the database",
            "To ensure data integrity",
            "To make searching for records efficient",
            "To store data physically"
        ],
        answer: 2
    },
    {
        question: "Which level of the three-schema architecture describes the physical storage structure?",
        options: [
            "External Level",
            "Logical Level",
            "Internal Level",
            "Conceptual Level"
        ],
        answer: 2
    },
    {
        question: "What is logical data independence?",
        options: [
            "The ability to change physical storage without affecting the logical schema",
            "The ability to change the logical schema without affecting external schemas",
            "The ability to change external schemas without affecting the logical schema",
            "The ability to change data types in the database"
        ],
        answer: 1
    },
    {
        question: "What does physical data independence allow?",
        options: [
            "Changes to the logical schema without affecting external schemas",
            "Changes to the internal schema without affecting the logical schema",
            "Changes to the database state without affecting the schema",
            "Changes to the external schema without affecting the internal schema"
        ],
        answer: 1
    },
    {
        question: "What characterizes a two-tier client/server architecture?",
        options: [
            "It has three distinct layers of processing.",
            "It separates user interface and application programs from the database.",
            "It allows for multiple databases to be accessed simultaneously.",
            "It is primarily used for web applications."
        ],
        answer: 1
    },
    {
        question: "In a three-tier architecture, what is the role of the application server?",
        options: [
            "To store the database",
            "To manage user interfaces",
            "To run application programs and manage business rules",
            "To handle data backups"
        ],
        answer: 2
    },
    {
        question: "What is the main benefit of a three-tier architecture in database systems?",
        options: [
            "Increased data redundancy",
            "Simplified database design",
            "Improved security and easier application updates",
            "Faster data retrieval"
        ],
        answer: 2
    },
    {
        question: "Which of the following is NOT a characteristic of the database approach?",
        options: [
            "Use of a catalog for schema storage",
            "Data independence",
            "Support for multiple user views",
            "Fixed data structures"
        ],
        answer: 3
    },
    {
        question: "What does a schema diagram typically display?",
        options: [
            "The actual data in the database",
            "The complete physical storage details",
            "Names of record types and some constraints",
            "The current state of the database"
        ],
        answer: 2
    },
    {
        question: "Which of the following best describes the physical data model?",
        options: [
            "It focuses on user interactions with the database.",
            "It describes how data is stored as files in the computer.",
            "It is used for designing user interfaces.",
            "It defines the relationships among data entities."
        ],
        answer: 1
    },

    {
        question: "Data abstraction in database systems aims to improve data storage efficiency.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "The entity-relationship model is an example of a representational data model.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "The current set of data in a database is called the database schema.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "The internal level of the three-schema architecture describes the physical storage structure.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "Logical data independence allows changes to the logical schema without affecting external schemas.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "Physical data independence allows changes to the database state without affecting the schema.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "In a two-tier client/server architecture, the application server runs application programs and manages business rules.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "The main benefit of a three-tier architecture is increased data redundancy.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "A schema diagram typically displays the actual data in the database.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "The physical data model focuses on how data is stored as files in the computer.",
        options: ["True", "False"],
        answer: 0
    }

];

const databaseQuestions3 = [
    {
        "question": "Which of the following is NOT a key concept in the relational model?",
        "options": [
            "Tuple",
            "Degree",
            "Hierarchical node",
            "Domain"
        ],
        "answer": 2
    },
    {
        "question": "What does the degree of a relation refer to?",
        "options": [
            "Number of tuples in a relation",
            "Number of attributes in a relation",
            "The primary key of the relation",
            "The number of foreign keys in a relation"
        ],
        "answer": 1
    },
    {
        "question": "In the relational model, a domain is:",
        "options": [
            "A set of tables in the database",
            "A set of allowable values for one or more attributes",
            "The primary key of a table",
            "A unique identifier for a row"
        ],
        "answer": 1
    },
    {
        "question": "What is a super key in a relational database?",
        "options": [
            "A key that contains foreign keys only",
            "A key that uniquely identifies a tuple and may contain redundant attributes",
            "A key that is always a primary key",
            "A key that contains no attributes"
        ],
        "answer": 1
    },
    {
        "question": "Primary key can be null.",
        "options": [
            "True",
            "False"
        ],
        "answer": 1
    },
    {
        "question": "Which operation can potentially violate referential integrity?",
        "options": [
            "Select",
            "Insert",
            "Delete",
            "Update"
        ],
        "answer": 2
    },
    {
        "question": "The referential integrity constraint ensures that:",
        "options": [
            "A tuple’s primary key can be NULL",
            "Foreign key values must exist in the referenced relation or be NULL",
            "Each attribute in a relation must be unique",
            "Relations can have composite attributes"
        ],
        "answer": 1
    },
    {
        "question": "Which of the following is NOT allowed in a relational model?",
        "options": [
            "NULL values",
            "Composite attributes",
            "Unique keys",
            "Atomic values"
        ],
        "answer": 1
    },
    {
        "question": "In the relational model, each attribute in a relation must have a unique name.",
        "options": [
            "True",
            "False"
        ],
        "answer": 0
    },
    {
        "question": "Foreign key can be repeat value.",
        "options": [
            "True",
            "False"
        ],
        "answer": 0
    },
    {
        "question": "Super keys always contain redundant attributes.",
        "options": [
            "True",
            "False"
        ],
        "answer": 1
    },
    {
        "question": "In a valid database state, all defined integrity constraints must be satisfied.",
        "options": [
            "True",
            "False"
        ],
        "answer": 0
    },
    {
        "question": "Updating a foreign key does not affect referential integrity.",
        "options": [
            "True",
            "False"
        ],
        "answer": 1
    },
    {
        "question": "Unique key can be null.",
        "options": [
            "True",
            "False"
        ],
        "answer": 0
    },
    {
        "question": " the property information table:\n\n| PropertyNo | Address           | Type  | Rooms | Rent | OwnerNo |\n|------------|-------------------|-------|-------|------|---------|\n| PA14       | 16 Holhead House   | House | 6     | 650  | C046    |\n| PL94       | 6 Argyll St.       | Flat  | 4     | 400  | C087    |\n| PG4        | 6 Lawrence St.     | Flat  | 3     | 350  | C040    |\n| PG36       | 2 Manor Rd         | Flat  | 3     | 375  | C093    |\n| PG21       | 18 Dale Rd         | House | 5     | 600  | C087    |\n| PG16       | 5 Novar Dr.        | Flat  | 4     | 450  | C093    |\n\nDegree of relation is:",
        "options": [
            "7",
            "8",
            "9",
            "6"
        ],
        "answer": 3
    },

    {
        question: " the property information table:\n\n| PropertyNo | Address           | Type  | Rooms | Rent | OwnerNo |\n|------------|-------------------|-------|-------|------|---------|\n| PA14       | 16 Holhead House   | House | 6     | 650  | C046    |\n| PL94       | 6 Argyll St.       | Flat  | 4     | 400  | C087    |\n| PG4        | 6 Lawrence St.     | Flat  | 3     | 350  | C040    |\n| PG36       | 2 Manor Rd         | Flat  | 3     | 375  | C093    |\n| PG21       | 18 Dale Rd         | House | 5     | 600  | C087    |\n| PG16       | 5 Novar Dr.        | Flat  | 4     | 450  | C093    |\n\nCardinality of relation :",
        options: [
            "7",
            "8",
            "6",
            "9"
        ],
        answer: 2
    },

    {
        "question": "In the Employees table (emp): | EmpID | EmpName      | Salary | DeptNo | \n|-------|--------------|--------|--------| \n| 1234  | Ahmed Salem  | 2000   | 1      | \n| 2456  | Maha Karim   | 3000   | 1      | \n| 4658  | Sherif Maged | 2500   | 2      | \n| 9840  | Yasser Amin  | 4000   | 2      | \n| 3945  | Magda Farid  | 5000   | 3      | \nIn the Departments table (Dep): | DeptNo | DeptName        | \n|--------|-----------------| \n| 1      | Sales           | \n| 2      | Human Resource  | \n| 3      | Finance         | \n| 4      | Warehouses      | \nWhat is the primary key in the Employees table?",
        "options": [
            "EmpID",
            "Salary",
            "EmpName",
            "DeptNo"
        ],
        "answer": 0
    },

    {
        "question": "In the Employees table (emp): | EmpID | EmpName      | Salary | DeptNo | \n|-------|--------------|--------|--------| \n| 1234  | Ahmed Salem  | 2000   | 1      | \n| 2456  | Maha Karim   | 3000   | 1      | \n| 4658  | Sherif Maged | 2500   | 2      | \n| 9840  | Yasser Amin  | 4000   | 2      | \n| 3945  | Magda Farid  | 5000   | 3      | \nIn the Departments table (Dep): | DeptNo | DeptName        | \n|--------|-----------------| \n| 1      | Sales           | \n| 2      | Human Resource  | \n| 3      | Finance         | \n| 4      | Warehouses      | \nWhich of the following represents the foreign key in the Employees table?",
        "options": [
            "EmpID",
            "DeptNo",
            "DeptName",
            "Salary"
        ],
        "answer": 1
    },
    {
        "question": "In the Employees table (emp): | EmpID | EmpName      | Salary | DeptNo | \n|-------|--------------|--------|--------| \n| 1234  | Ahmed Salem  | 2000   | 1      | \n| 2456  | Maha Karim   | 3000   | 1      | \n| 4658  | Sherif Maged | 2500   | 2      | \n| 9840  | Yasser Amin  | 4000   | 2      | \n| 3945  | Magda Farid  | 5000   | 3      | \nIn the Departments table (Dep): | DeptNo | DeptName        | \n|--------|-----------------| \n| 1      | Sales           | \n| 2      | Human Resource  | \n| 3      | Finance         | \n| 4      | Warehouses      | \nHow can the department name where a specific employee works be retrieved?",
        "options": [
            "By joining the Employees table with the DeptNo column",
            "By using the EmpID column",
            "By searching in the Departments table using DeptName only",
            "It is not possible to retrieve the department name from the existing tables"
        ],
        "answer": 0
    },
    {
        "question": "In the Employees table (emp): | EmpID | EmpName      | Salary | DeptNo | \n|-------|--------------|--------|--------| \n| 1234  | Ahmed Salem  | 2000   | 1      | \n| 2456  | Maha Karim   | 3000   | 1      | \n| 4658  | Sherif Maged | 2500   | 2      | \n| 9840  | Yasser Amin  | 4000   | 2      | \n| 3945  | Magda Farid  | 5000   | 3      | \nIn the Departments table (Dep): | DeptNo | DeptName        | \n|--------|-----------------| \n| 1      | Sales           | \n| 2      | Human Resource  | \n| 3      | Finance         | \n| 4      | Warehouses      | \nWhich of the following departments has no employees according to the tables?",
        "options": [
            "Sales",
            "Human Resource",
            "Finance",
            "Warehouses"
        ],
        "answer": 3
    },
    {
        "question": "In the Employees table (emp): | EmpID | EmpName      | Salary | DeptNo | \n|-------|--------------|--------|--------| \n| 1234  | Ahmed Salem  | 2000   | 1      | \n| 2456  | Maha Karim   | 3000   | 1      | \n| 4658  | Sherif Maged | 2500   | 2      | \n| 9840  | Yasser Amin  | 4000   | 2      | \n| 3945  | Magda Farid  | 5000   | 3      | \nIn the Departments table (Dep): | DeptNo | DeptName        | \n|--------|-----------------| \n| 1      | Sales           | \n| 2      | Human Resource  | \n| 3      | Finance         | \n| 4      | Warehouses      | \nThere can be more than one employee with the same EmpID in the Employees table.",
        "options": [
            "True",
            "False"
        ],
        "answer": 1
    },
    {
        "question": "In the Employees table (emp): | EmpID | EmpName      | Salary | DeptNo | \n|-------|--------------|--------|--------| \n| 1234  | Ahmed Salem  | 2000   | 1      | \n| 2456  | Maha Karim   | 3000   | 1      | \n| 4658  | Sherif Maged | 2500   | 2      | \n| 9840  | Yasser Amin  | 4000   | 2      | \n| 3945  | Magda Farid  | 5000   | 3      | \nIn the Departments table (Dep): | DeptNo | DeptName        | \n|--------|-----------------| \n| 1      | Sales           | \n| 2      | Human Resource  | \n| 3      | Finance         | \n| 4      | Warehouses      | \nEach employee must belong to a department, so the DeptNo field in the Employees table cannot be NULL.",
        "options": [
            "True",
            "False"
        ],
        "answer": 0
    },
    {
        "question": "In the Employees table (emp): | EmpID | EmpName      | Salary | DeptNo | \n|-------|--------------|--------|--------| \n| 1234  | Ahmed Salem  | 2000   | 1      | \n| 2456  | Maha Karim   | 3000   | 1      | \n| 4658  | Sherif Maged | 2500   | 2      | \n| 9840  | Yasser Amin  | 4000   | 2      | \n| 3945  | Magda Farid  | 5000   | 3      | \nIn the Departments table (Dep): | DeptNo | DeptName        | \n|--------|-----------------| \n| 1      | Sales           | \n| 2      | Human Resource  | \n| 3      | Finance         | \n| 4      | Warehouses      | \nThere is a one-to-many relationship between the Departments and Employees tables.",
        "options": [
            "True",
            "False"
        ],
        "answer": 0
    },
    {
        "question": "In the Employees table (emp): | EmpID | EmpName      | Salary | DeptNo | \n|-------|--------------|--------|--------| \n| 1234  | Ahmed Salem  | 2000   | 1      | \n| 2456  | Maha Karim   | 3000   | 1      | \n| 4658  | Sherif Maged | 2500   | 2      | \n| 9840  | Yasser Amin  | 4000   | 2      | \n| 3945  | Magda Farid  | 5000   | 3      | \nIn the Departments table (Dep): | DeptNo | DeptName        | \n|--------|-----------------| \n| 1      | Sales           | \n| 2      | Human Resource  | \n| 3      | Finance         | \n| 4      | Warehouses      | \nA new department can be added to the Departments table without any employees being assigned to it initially.",
        "options": [
            "True",
            "False"
        ],
        "answer": 0
    },
    {
        "question": "In the Employees table (emp): | EmpID | EmpName      | Salary | DeptNo | \n|-------|--------------|--------|--------| \n| 1234  | Ahmed Salem  | 2000   | 1      | \n| 2456  | Maha Karim   | 3000   | 1      | \n| 4658  | Sherif Maged | 2500   | 2      | \n| 9840  | Yasser Amin  | 4000   | 2      | \n| 3945  | Magda Farid  | 5000   | 3      | \nIn the Departments table (Dep): | DeptNo | DeptName        | \n|--------|-----------------| \n| 1      | Sales           | \n| 2      | Human Resource  | \n| 3      | Finance         | \n| 4      | Warehouses      | \nThe combination of EmpID and DeptNo can serve as a composite key in the Employees table.",
        "options": [
            "True",
            "False"
        ],
        "answer": 1
    },
    {
        "question": "In the Employees table (emp): | EmpID | EmpName      | Salary | DeptNo | \n|-------|--------------|--------|--------| \n| 1234  | Ahmed Salem  | 2000   | 1      | \n| 2456  | Maha Karim   | 3000   | 1      | \n| 4658  | Sherif Maged | 2500   | 2      | \n| 9840  | Yasser Amin  | 4000   | 2      | \n| 3945  | Magda Farid  | 5000   | 3      | \nIn the Departments table (Dep): | DeptNo | DeptName        | \n|--------|-----------------| \n| 1      | Sales           | \n| 2      | Human Resource  | \n| 3      | Finance         | \n| 4      | Warehouses      | \nThe DeptNo column in the Employees table is a primary key.",
        "options": [
            "True",
            "False"
        ],
        "answer": 1
    }
];




const databaseQuestions4 = [

    {
        question: "What is a database?",
        options: ["A collection of unrelated data", "A collection of related data", "A program that retrieves data", "A storage medium for documents"],
        answer: 1
    },
    {
        question: "Which of the following is a function of a DBMS?",
        options: ["Text editing", "Defining the database", "Printing documents", "Browsing the internet"],
        answer: 1
    },
    {
        question: "What is the primary purpose of a Database Management System (DBMS)?",
        options: ["To create images", "To manage data efficiently", "To play music", "To manage emails"],
        answer: 1
    },
    {
        question: "Which of the following is a disadvantage of file-based systems?",
        options: ["Easy data sharing", "High data integrity", "Data duplication", "Automatic backup"],
        answer: 2
    },
    {
        question: "What does data consistency in a database imply?",
        options: ["Data stored in different formats", "Data is consistent across different files", "Any update is performed once and is available to all users", "Multiple copies of data exist"],
        answer: 2
    },
    {
        question: "What does a database catalog contain?",
        options: ["List of all employees", "Metadata", "User passwords", "System logs"],
        answer: 1
    },
    {
        question: "Which of the following is not a DBMS function?",
        options: ["Manipulating data", "Sharing the database", "Protecting the database", "Compiling code"],
        answer: 3
    },
    {
        question: "What is atomicity in the context of databases?",
        options: ["The ability to store large files", "The ability to process transactions entirely or not at all", "The ability to share data among users", "The ability to create backups"],
        answer: 1
    },
    {
        question: "What type of language is used to specify the structure of a database?",
        options: ["Data Manipulation Language (DML)", "Data Definition Language (DDL)", "Data Query Language (DQL)", "Procedural Language"],
        answer: 1
    },
    {
        question: "Which of the following is a disadvantage of using a database?",
        options: ["High performance", "Complexity", "Ease of use", "Small size"],
        answer: 1
    },
    {
        question: "Which users primarily interact with the database to satisfy their data needs?",
        options: ["Database Designers", "End Users", "Database Administrators", "Systems Analysts"],
        answer: 1
    },
    {
        question: "Which of the following is an advantage of a database system?",
        options: ["Data redundancy", "Limited data sharing", "Improved data integrity", "Atomicity problems"],
        answer: 2
    },
    {
        question: "What is a 'view' in the context of databases?",
        options: ["A different program", "A subset of the database", "A backup of the database", "A query language"],
        answer: 1
    },
    {
        question: "Which of the following tasks is not typically handled by a Database Administrator (DBA)?",
        options: ["Authorizing access to the database", "Designing the database", "Monitoring database use", "Developing applications"],
        answer: 3
    },
    {
        question: "When is it more desirable to use regular files instead of a database?",
        options: ["For complex, ever-changing applications", "For embedded systems with limited storage capacity", "For large multi-user environments", "For systems requiring high security"],
        answer: 1
    },
    {
        question: "Data is always consistent in a file-based system.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "A DBMS allows multiple users to access data simultaneously.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "A database application is a program that interacts with the database.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "The physical structure of data is independent of application programs in a DBMS.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "In a database, data redundancy is increased to improve performance.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "A file-based system is more efficient than a database in handling complex data relationships.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "A DBMS does not provide any security mechanisms to protect data.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "Sharing a database can only be done by a single user at a time.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "The cost of implementing a DBMS is usually lower than using a file-based system.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "Data integrity in a database is easier to achieve than in a file-based system.",
        options: ["True", "False"],
        answer: 0
    },
    {
        "question": "Which of the following is NOT a key concept in the relational model?",
        "options": [
            "Tuple",
            "Degree",
            "Hierarchical node",
            "Domain"
        ],
        "answer": 2
    },
    {
        "question": "What does the degree of a relation refer to?",
        "options": [
            "Number of tuples in a relation",
            "Number of attributes in a relation",
            "The primary key of the relation",
            "The number of foreign keys in a relation"
        ],
        "answer": 1
    },
    {
        "question": "In the relational model, a domain is:",
        "options": [
            "A set of tables in the database",
            "A set of allowable values for one or more attributes",
            "The primary key of a table",
            "A unique identifier for a row"
        ],
        "answer": 1
    },
    {
        "question": "What is a super key in a relational database?",
        "options": [
            "A key that contains foreign keys only",
            "A key that uniquely identifies a tuple and may contain redundant attributes",
            "A key that is always a primary key",
            "A key that contains no attributes"
        ],
        "answer": 1
    },
    {
        "question": "Primary key can be null.",
        "options": [
            "True",
            "False"
        ],
        "answer": 1
    },
    {
        "question": "Which operation can potentially violate referential integrity?",
        "options": [
            "Select",
            "Insert",
            "Delete",
            "Update"
        ],
        "answer": 2
    },
    {
        "question": "The referential integrity constraint ensures that:",
        "options": [
            "A tuple’s primary key can be NULL",
            "Foreign key values must exist in the referenced relation or be NULL",
            "Each attribute in a relation must be unique",
            "Relations can have composite attributes"
        ],
        "answer": 1
    },
    {
        "question": "Which of the following is NOT allowed in a relational model?",
        "options": [
            "NULL values",
            "Composite attributes",
            "Unique keys",
            "Atomic values"
        ],
        "answer": 1
    },
    {
        "question": "In the relational model, each attribute in a relation must have a unique name.",
        "options": [
            "True",
            "False"
        ],
        "answer": 0
    },
    {
        "question": "Foreign key can be repeat value.",
        "options": [
            "True",
            "False"
        ],
        "answer": 0
    },
    {
        "question": "Super keys always contain redundant attributes.",
        "options": [
            "True",
            "False"
        ],
        "answer": 1
    },
    {
        "question": "In a valid database state, all defined integrity constraints must be satisfied.",
        "options": [
            "True",
            "False"
        ],
        "answer": 0
    },
    {
        "question": "Updating a foreign key does not affect referential integrity.",
        "options": [
            "True",
            "False"
        ],
        "answer": 1
    },
    {
        "question": "Unique key can be null.",
        "options": [
            "True",
            "False"
        ],
        "answer": 0
    },
    {
        "question": " the property information table:\n\n| PropertyNo | Address           | Type  | Rooms | Rent | OwnerNo |\n|------------|-------------------|-------|-------|------|---------|\n| PA14       | 16 Holhead House   | House | 6     | 650  | C046    |\n| PL94       | 6 Argyll St.       | Flat  | 4     | 400  | C087    |\n| PG4        | 6 Lawrence St.     | Flat  | 3     | 350  | C040    |\n| PG36       | 2 Manor Rd         | Flat  | 3     | 375  | C093    |\n| PG21       | 18 Dale Rd         | House | 5     | 600  | C087    |\n| PG16       | 5 Novar Dr.        | Flat  | 4     | 450  | C093    |\n\nDegree of relation is:",
        "options": [
            "7",
            "8",
            "9",
            "6"
        ],
        "answer": 3
    },
    {
        question: " the property information table:\n\n| PropertyNo | Address           | Type  | Rooms | Rent | OwnerNo |\n|------------|-------------------|-------|-------|------|---------|\n| PA14       | 16 Holhead House   | House | 6     | 650  | C046    |\n| PL94       | 6 Argyll St.       | Flat  | 4     | 400  | C087    |\n| PG4        | 6 Lawrence St.     | Flat  | 3     | 350  | C040    |\n| PG36       | 2 Manor Rd         | Flat  | 3     | 375  | C093    |\n| PG21       | 18 Dale Rd         | House | 5     | 600  | C087    |\n| PG16       | 5 Novar Dr.        | Flat  | 4     | 450  | C093    |\n\nCardinality of relation :",
        options: [
            "7",
            "8",
            "6",
            "9"
        ],
        answer: 2
    },
    {
        "question": "In the Employees table (emp): | EmpID | EmpName      | Salary | DeptNo | \n|-------|--------------|--------|--------| \n| 1234  | Ahmed Salem  | 2000   | 1      | \n| 2456  | Maha Karim   | 3000   | 1      | \n| 4658  | Sherif Maged | 2500   | 2      | \n| 9840  | Yasser Amin  | 4000   | 2      | \n| 3945  | Magda Farid  | 5000   | 3      | \nIn the Departments table (Dep): | DeptNo | DeptName        | \n|--------|-----------------| \n| 1      | Sales           | \n| 2      | Human Resource  | \n| 3      | Finance         | \n| 4      | Warehouses      | \nWhat is the primary key in the Employees table?",
        "options": [
            "EmpID",
            "Salary",
            "EmpName",
            "DeptNo"
        ],
        "answer": 0
    },
    {
        "question": "In the Employees table (emp): | EmpID | EmpName      | Salary | DeptNo | \n|-------|--------------|--------|--------| \n| 1234  | Ahmed Salem  | 2000   | 1      | \n| 2456  | Maha Karim   | 3000   | 1      | \n| 4658  | Sherif Maged | 2500   | 2      | \n| 9840  | Yasser Amin  | 4000   | 2      | \n| 3945  | Magda Farid  | 5000   | 3      | \nIn the Departments table (Dep): | DeptNo | DeptName        | \n|--------|-----------------| \n| 1      | Sales           | \n| 2      | Human Resource  | \n| 3      | Finance         | \n| 4      | Warehouses      | \nWhich of the following represents the foreign key in the Employees table?",
        "options": [
            "EmpID",
            "DeptNo",
            "DeptName",
            "Salary"
        ],
        "answer": 1
    },
    {
        "question": "In the Employees table (emp): | EmpID | EmpName      | Salary | DeptNo | \n|-------|--------------|--------|--------| \n| 1234  | Ahmed Salem  | 2000   | 1      | \n| 2456  | Maha Karim   | 3000   | 1      | \n| 4658  | Sherif Maged | 2500   | 2      | \n| 9840  | Yasser Amin  | 4000   | 2      | \n| 3945  | Magda Farid  | 5000   | 3      | \nIn the Departments table (Dep): | DeptNo | DeptName        | \n|--------|-----------------| \n| 1      | Sales           | \n| 2      | Human Resource  | \n| 3      | Finance         | \n| 4      | Warehouses      | \nHow can the department name where a specific employee works be retrieved?",
        "options": [
            "By joining the Employees table with the DeptNo column",
            "By using the EmpID column",
            "By searching in the Departments table using DeptName only",
            "It is not possible to retrieve the department name from the existing tables"
        ],
        "answer": 0
    },
    {
        "question": "In the Employees table (emp): | EmpID | EmpName      | Salary | DeptNo | \n|-------|--------------|--------|--------| \n| 1234  | Ahmed Salem  | 2000   | 1      | \n| 2456  | Maha Karim   | 3000   | 1      | \n| 4658  | Sherif Maged | 2500   | 2      | \n| 9840  | Yasser Amin  | 4000   | 2      | \n| 3945  | Magda Farid  | 5000   | 3      | \nIn the Departments table (Dep): | DeptNo | DeptName        | \n|--------|-----------------| \n| 1      | Sales           | \n| 2      | Human Resource  | \n| 3      | Finance         | \n| 4      | Warehouses      | \nWhich of the following departments has no employees according to the tables?",
        "options": [
            "Sales",
            "Human Resource",
            "Finance",
            "Warehouses"
        ],
        "answer": 3
    },
    {
        "question": "In the Employees table (emp): | EmpID | EmpName      | Salary | DeptNo | \n|-------|--------------|--------|--------| \n| 1234  | Ahmed Salem  | 2000   | 1      | \n| 2456  | Maha Karim   | 3000   | 1      | \n| 4658  | Sherif Maged | 2500   | 2      | \n| 9840  | Yasser Amin  | 4000   | 2      | \n| 3945  | Magda Farid  | 5000   | 3      | \nIn the Departments table (Dep): | DeptNo | DeptName        | \n|--------|-----------------| \n| 1      | Sales           | \n| 2      | Human Resource  | \n| 3      | Finance         | \n| 4      | Warehouses      | \nThere can be more than one employee with the same EmpID in the Employees table.",
        "options": [
            "True",
            "False"
        ],
        "answer": 1
    },
    {
        "question": "In the Employees table (emp): | EmpID | EmpName      | Salary | DeptNo | \n|-------|--------------|--------|--------| \n| 1234  | Ahmed Salem  | 2000   | 1      | \n| 2456  | Maha Karim   | 3000   | 1      | \n| 4658  | Sherif Maged | 2500   | 2      | \n| 9840  | Yasser Amin  | 4000   | 2      | \n| 3945  | Magda Farid  | 5000   | 3      | \nIn the Departments table (Dep): | DeptNo | DeptName        | \n|--------|-----------------| \n| 1      | Sales           | \n| 2      | Human Resource  | \n| 3      | Finance         | \n| 4      | Warehouses      | \nEach employee must belong to a department, so the DeptNo field in the Employees table cannot be NULL.",
        "options": [
            "True",
            "False"
        ],
        "answer": 0
    },
    {
        "question": "In the Employees table (emp): | EmpID | EmpName      | Salary | DeptNo | \n|-------|--------------|--------|--------| \n| 1234  | Ahmed Salem  | 2000   | 1      | \n| 2456  | Maha Karim   | 3000   | 1      | \n| 4658  | Sherif Maged | 2500   | 2      | \n| 9840  | Yasser Amin  | 4000   | 2      | \n| 3945  | Magda Farid  | 5000   | 3      | \nIn the Departments table (Dep): | DeptNo | DeptName        | \n|--------|-----------------| \n| 1      | Sales           | \n| 2      | Human Resource  | \n| 3      | Finance         | \n| 4      | Warehouses      | \nThere is a one-to-many relationship between the Departments and Employees tables.",
        "options": [
            "True",
            "False"
        ],
        "answer": 0
    },
    {
        "question": "In the Employees table (emp): | EmpID | EmpName      | Salary | DeptNo | \n|-------|--------------|--------|--------| \n| 1234  | Ahmed Salem  | 2000   | 1      | \n| 2456  | Maha Karim   | 3000   | 1      | \n| 4658  | Sherif Maged | 2500   | 2      | \n| 9840  | Yasser Amin  | 4000   | 2      | \n| 3945  | Magda Farid  | 5000   | 3      | \nIn the Departments table (Dep): | DeptNo | DeptName        | \n|--------|-----------------| \n| 1      | Sales           | \n| 2      | Human Resource  | \n| 3      | Finance         | \n| 4      | Warehouses      | \nA new department can be added to the Departments table without any employees being assigned to it initially.",
        "options": [
            "True",
            "False"
        ],
        "answer": 0
    },
    {
        "question": "In the Employees table (emp): | EmpID | EmpName      | Salary | DeptNo | \n|-------|--------------|--------|--------| \n| 1234  | Ahmed Salem  | 2000   | 1      | \n| 2456  | Maha Karim   | 3000   | 1      | \n| 4658  | Sherif Maged | 2500   | 2      | \n| 9840  | Yasser Amin  | 4000   | 2      | \n| 3945  | Magda Farid  | 5000   | 3      | \nIn the Departments table (Dep): | DeptNo | DeptName        | \n|--------|-----------------| \n| 1      | Sales           | \n| 2      | Human Resource  | \n| 3      | Finance         | \n| 4      | Warehouses      | \nThe combination of EmpID and DeptNo can serve as a composite key in the Employees table.",
        "options": [
            "True",
            "False"
        ],
        "answer": 1
    },
    {
        "question": "In the Employees table (emp): | EmpID | EmpName      | Salary | DeptNo | \n|-------|--------------|--------|--------| \n| 1234  | Ahmed Salem  | 2000   | 1      | \n| 2456  | Maha Karim   | 3000   | 1      | \n| 4658  | Sherif Maged | 2500   | 2      | \n| 9840  | Yasser Amin  | 4000   | 2      | \n| 3945  | Magda Farid  | 5000   | 3      | \nIn the Departments table (Dep): | DeptNo | DeptName        | \n|--------|-----------------| \n| 1      | Sales           | \n| 2      | Human Resource  | \n| 3      | Finance         | \n| 4      | Warehouses      | \nThe DeptNo column in the Employees table is a primary key.",
        "options": [
            "True",
            "False"
        ],
        "answer": 1
    },
    {
        question: "What is the primary purpose of data abstraction in database systems?",
        options: [
            "To improve data storage efficiency",
            "To hide details of physical data storage",
            "To increase data redundancy",
            "To enhance data retrieval speed"
        ],
        answer: 1
    },
    {
        question: "Which of the following describes a conceptual data model?",
        options: [
            "It describes how data is physically stored.",
            "It is used for database implementation in DBMS.",
            "It describes the database structure in an understandable way for most users.",
            "It focuses on data retrieval operations."
        ],
        answer: 2
    },
    {
        question: "What is an example of a representational data model?",
        options: [
            "Entity-Relationship Model",
            "Hierarchical Model",
            "Physical Data Model",
            "Conceptual Data Model"
        ],
        answer: 1
    },
    {
        question: "What does the term 'database schema' refer to?",
        options: [
            "The actual data stored in the database",
            "The description of the database structure",
            "The physical storage of data",
            "The current state of the database"
        ],
        answer: 1
    },
    {
        question: "In the context of databases, what is a 'database state'?",
        options: [
            "The schema of the database",
            "The current set of data in the database",
            "A backup of the database",
            "The data model used"
        ],
        answer: 1
    },
    {
        question: "What is the primary function of an access path in a database?",
        options: [
            "To define the schema of the database",
            "To ensure data integrity",
            "To make searching for records efficient",
            "To store data physically"
        ],
        answer: 2
    },
    {
        question: "Which level of the three-schema architecture describes the physical storage structure?",
        options: [
            "External Level",
            "Logical Level",
            "Internal Level",
            "Conceptual Level"
        ],
        answer: 2
    },
    {
        question: "What is logical data independence?",
        options: [
            "The ability to change physical storage without affecting the logical schema",
            "The ability to change the logical schema without affecting external schemas",
            "The ability to change external schemas without affecting the logical schema",
            "The ability to change data types in the database"
        ],
        answer: 1
    },
    {
        question: "What does physical data independence allow?",
        options: [
            "Changes to the logical schema without affecting external schemas",
            "Changes to the internal schema without affecting the logical schema",
            "Changes to the database state without affecting the schema",
            "Changes to the external schema without affecting the internal schema"
        ],
        answer: 1
    },
    {
        question: "What characterizes a two-tier client/server architecture?",
        options: [
            "It has three distinct layers of processing.",
            "It separates user interface and application programs from the database.",
            "It allows for multiple databases to be accessed simultaneously.",
            "It is primarily used for web applications."
        ],
        answer: 1
    },
    {
        question: "In a three-tier architecture, what is the role of the application server?",
        options: [
            "To store the database",
            "To manage user interfaces",
            "To run application programs and manage business rules",
            "To handle data backups"
        ],
        answer: 2
    },
    {
        question: "What is the main benefit of a three-tier architecture in database systems?",
        options: [
            "Increased data redundancy",
            "Simplified database design",
            "Improved security and easier application updates",
            "Faster data retrieval"
        ],
        answer: 2
    },
    {
        question: "Which of the following is NOT a characteristic of the database approach?",
        options: [
            "Use of a catalog for schema storage",
            "Data independence",
            "Support for multiple user views",
            "Fixed data structures"
        ],
        answer: 3
    },
    {
        question: "What does a schema diagram typically display?",
        options: [
            "The actual data in the database",
            "The complete physical storage details",
            "Names of record types and some constraints",
            "The current state of the database"
        ],
        answer: 2
    },
    {
        question: "Which of the following best describes the physical data model?",
        options: [
            "It focuses on user interactions with the database.",
            "It describes how data is stored as files in the computer.",
            "It is used for designing user interfaces.",
            "It defines the relationships among data entities."
        ],
        answer: 1
    },

    {
        question: "Data abstraction in database systems aims to improve data storage efficiency.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "The entity-relationship model is an example of a representational data model.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "The current set of data in a database is called the database schema.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "The internal level of the three-schema architecture describes the physical storage structure.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "Logical data independence allows changes to the logical schema without affecting external schemas.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "Physical data independence allows changes to the database state without affecting the schema.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "In a two-tier client/server architecture, the application server runs application programs and manages business rules.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "The main benefit of a three-tier architecture is increased data redundancy.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "A schema diagram typically displays the actual data in the database.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "The physical data model focuses on how data is stored as files in the computer.",
        options: ["True", "False"],
        answer: 0
    }

];



const databaseQuestion5 =
    [
        {
            "question": "Which SQL statement is used to retrieve data from a database?",
            "options": ["SELECT", "INSERT", "DELETE", "UPDATE"],
            "answer": 0
        },
        {
            "question": "Which clause is used to filter records in a query?",
            "options": ["ORDER BY", "WHERE", "GROUP BY", "JOIN"],
            "answer": 1
        },
        {
            "question": "What is the correct syntax to create a new database?",
            "options": ["CREATE DATABASE database_name", "NEW DATABASE database_name", "MAKE DATABASE database_name", "DATABASE CREATE database_name"],
            "answer": 0
        },
        {
            "question": "Which of these is a valid data type in SQL Server?",
            "options": ["number", "int", "string", "chararray"],
            "answer": 1
        },
        {
            "question": "Which command is used to remove a table from a database?",
            "options": ["DELETE", "DROP TABLE", "REMOVE", "CLEAR"],
            "answer": 1
        },
        {
            "question": "What does the COUNT() function do?",
            "options": ["Counts rows", "Sums numeric columns", "Returns maximum value", "Counts columns"],
            "answer": 0
        },
        {
            "question": "What does the DISTINCT keyword do?",
            "options": ["Returns unique values", "Filters rows", "Groups data", "Joins tables"],
            "answer": 0
        },
        {
            "question": "What is the primary key?",
            "options": ["A column with duplicate values", "A unique identifier for rows", "A foreign key", "An encrypted column"],
            "answer": 1
        },
        {
            "question": "Which function returns the current date and time?",
            "options": ["NOW()", "GETDATE()", "CURDATE()", "SYSDATE()"],
            "answer": 1
        },
        {
            "question": "What is the default value of the IDENTITY property in SQL Server?",
            "options": ["(1, 0)", "(0, 1)", "(1, 1)", "(0, 0)"],
            "answer": 2
        },
        {
            "question": "Which of the following is used to add a row to a table?",
            "options": ["INSERT", "ADD", "MERGE", "PUSH"],
            "answer": 0
        },
        {
            "question": "Which SQL keyword is used to sort the result set?",
            "options": ["ORDER BY", "SORT BY", "ARRANGE BY", "GROUP BY"],
            "answer": 0
        },
        {
            "question": "Which operator is used for pattern matching?",
            "options": ["=", "LIKE", "IN", "EXISTS"],
            "answer": 1
        },
        {
            "question": "What does the JOIN keyword do?",
            "options": ["Filters data", "Combines rows from multiple tables", "Deletes rows", "Groups data"],
            "answer": 1
        },
        {
            "question": "Which of these is not a valid SQL statement?",
            "options": ["CREATE", "SELECT", "REMOVE", "INSERT"],
            "answer": 2
        },
        {
            "question": "What does NULL mean in SQL?",
            "options": ["Zero", "Empty string", "Missing or undefined value", "False"],
            "answer": 2
        },
        {
            "question": "Which SQL function is used to find the largest value?",
            "options": ["MIN", "MAX", "COUNT", "AVG"],
            "answer": 1
        },
        {
            "question": "What is the purpose of the ALTER TABLE command?",
            "options": ["To add or modify table structure", "To delete a table", "To rename a table", "To change data in a table"],
            "answer": 0
        },
        {
            "question": "Which keyword is used to remove duplicate rows?",
            "options": ["UNIQUE", "DISTINCT", "FILTER", "DELETE"],
            "answer": 1
        },
        {
            "question": "What is the output of SELECT 10 % 3 in SQL Server?",
            "options": ["0", "1", "3", "10"],
            "answer": 1
        },
        {
            "question": "Which SQL clause is used to group records that have the same values?",
            "options": ["ORDER BY", "GROUP BY", "WHERE", "HAVING"],
            "answer": 1
        },
        {
            "question": "Which command is used to update existing records in a table?",
            "options": ["ALTER", "UPDATE", "MODIFY", "SET"],
            "answer": 1
        },
        {
            "question": "What does the HAVING clause do in SQL?",
            "options": ["Filters grouped data", "Filters individual rows", "Sorts data", "Joins tables"],
            "answer": 0
        },
        {
            "question": "What is a foreign key in a database?",
            "options": ["A unique column", "A column that links to another table", "A table identifier", "An index"],
            "answer": 1
        },
        {
            "question": "What is the purpose of the TRUNCATE TABLE command?",
            "options": ["Remove a table", "Delete all rows in a table", "Remove specific rows", "Clear all columns in a table"],
            "answer": 1
        },
        {
            "question": "Which SQL operator tests for the existence of rows in a subquery?",
            "options": ["EXISTS", "IN", "ANY", "ALL"],
            "answer": 0
        },
        {
            "question": "What is a view in SQL?",
            "options": ["A temporary table", "A virtual table", "A stored procedure", "A database schema"],
            "answer": 1
        },
        {
            "question": "Which SQL keyword is used to combine the results of two queries?",
            "options": ["JOIN", "UNION", "MERGE", "INTERSECT"],
            "answer": 1
        },
        {
            "question": "What is the purpose of indexing in SQL?",
            "options": ["To store data", "To speed up data retrieval", "To prevent duplicate data", "To secure data"],
            "answer": 1
        },
        {
            "question": "What does the UNIQUE constraint do?",
            "options": ["Allows null values", "Ensures all values are different", "Links tables together", "Defines a foreign key"],
            "answer": 1
        },
        {
            "question": "Which command removes all rows from a table without logging individual row deletions?",
            "options": ["DELETE", "TRUNCATE", "DROP", "CLEAR"],
            "answer": 1
        },
        {
            "question": "Which SQL function is used to calculate the average value of a numeric column?",
            "options": ["SUM", "COUNT", "AVG", "MAX"],
            "answer": 2
        },
        {
            "question": "Which SQL keyword is used to rename a column in the result set?",
            "options": ["RENAME", "AS", "ALTER", "SET"],
            "answer": 1
        },
        {
            "question": "What does the LEFT JOIN operation do?",
            "options": [
                "Returns all rows from the left table and matching rows from the right table",
                "Returns rows that exist in both tables",
                "Returns rows from the right table only",
                "Returns all rows from both tables"
            ],
            "answer": 0
        },
        {
            "question": "Which SQL keyword is used to test if a value matches a specific list of values?",
            "options": ["LIKE", "IN", "BETWEEN", "EXISTS"],
            "answer": 1
        },
        {
            "question": "What does the DATEDIFF function do?",
            "options": [
                "Calculates the difference between two dates",
                "Returns the current date",
                "Adds days to a date",
                "Formats a date value"
            ],
            "answer": 0
        },
        {
            "question": "What does the CONCAT function do in SQL?",
            "options": [
                "Joins multiple strings into one",
                "Splits a string into parts",
                "Converts a string to uppercase",
                "Reverses a string"
            ],
            "answer": 0
        },
        {
            "question": "Which SQL statement is used to limit the number of rows returned?",
            "options": ["LIMIT", "TOP", "FETCH", "ROWNUM"],
            "answer": 0
        },
        {
            "question": "Which of these is a DDL (Data Definition Language) command?",
            "options": ["SELECT", "INSERT", "CREATE", "UPDATE"],
            "answer": 2
        },
        {
            "question": "What is the purpose of the DEFAULT constraint in SQL?",
            "options": [
                "To ensure all values are unique",
                "To specify a default value if no value is provided",
                "To define a primary key",
                "To enforce a relationship between tables"
            ],
            "answer": 1
        },

        {
            "question": "Which SQL function is used to return the number of rows in a table?",
            "options": ["SUM", "COUNT", "ROWNUM", "LENGTH"],
            "answer": 1
        },
        {
            "question": "What does the INNER JOIN operation do?",
            "options": [
                "Combines rows from two tables only when there is a match in both tables",
                "Returns all rows from the left table",
                "Returns all rows from the right table",
                "Returns all rows from both tables regardless of matching"
            ],
            "answer": 0
        },
        {
            "question": "What is a primary key in a database?",
            "options": [
                "A column with duplicate values",
                "A unique identifier for each record",
                "A link between two tables",
                "An index for fast retrieval"
            ],
            "answer": 1
        },
        {
            "question": "Which SQL keyword is used to remove a table from the database?",
            "options": ["DELETE", "REMOVE", "DROP", "TRUNCATE"],
            "answer": 2
        },
        {
            "question": "What does the DISTINCT keyword do in a SELECT statement?",
            "options": [
                "Sorts the rows by a column",
                "Filters out duplicate rows",
                "Groups rows based on a condition",
                "Joins multiple tables"
            ],
            "answer": 1
        },
        {
            "question": "Which SQL clause is used to filter rows after grouping data?",
            "options": ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
            "answer": 1
        },
        {
            "question": "What is the purpose of the ORDER BY clause in SQL?",
            "options": [
                "To group records with the same values",
                "To filter rows based on a condition",
                "To sort the result set in ascending or descending order",
                "To limit the number of rows returned"
            ],
            "answer": 2
        },
        {
            "question": "What does the BETWEEN operator do in SQL?",
            "options": [
                "Filters rows within a specific range",
                "Joins two tables",
                "Returns rows matching a specific pattern",
                "Adds a condition to the query"
            ],
            "answer": 0
        },
        {
            "question": "Which SQL clause is used to specify the condition for filtering rows in a SELECT query?",
            "options": ["HAVING", "WHERE", "FROM", "GROUP BY"],
            "answer": 1
        },
        {
            "question": "What is the difference between DELETE and TRUNCATE commands?",
            "options": [
                "DELETE removes rows selectively; TRUNCATE removes all rows",
                "DELETE removes all rows; TRUNCATE is selective",
                "DELETE removes the table; TRUNCATE clears specific columns",
                "DELETE clears the table structure; TRUNCATE removes duplicates"
            ],
            "answer": 0
        },
        {
            "question": "Which SQL function returns the maximum value in a column?",
            "options": ["MAX", "MIN", "SUM", "COUNT"],
            "answer": 0
        },
        {
            "question": "Which command is used to add a new column to an existing table?",
            "options": ["ADD", "ALTER", "INSERT", "UPDATE"],
            "answer": 1
        },
        {
            "question": "What is the purpose of a composite key?",
            "options": [
                "To link two tables together",
                "To enforce a unique identifier using multiple columns",
                "To store multiple rows in a single column",
                "To speed up query performance"
            ],
            "answer": 1
        },
        {
            "question": "Which SQL command is used to combine rows from multiple tables based on a related column?",
            "options": ["JOIN", "UNION", "MERGE", "INTERSECT"],
            "answer": 0
        },
        {
            "question": "What does the SQL wildcard '%' represent in a LIKE statement?",
            "options": [
                "Zero or more characters",
                "A single character",
                "A digit only",
                "A range of characters"
            ],
            "answer": 0
        },
        {
            "question": "What is the purpose of the UNIQUE constraint in SQL?",
            "options": [
                "To ensure all values in a column are different",
                "To specify a default value",
                "To allow duplicate values",
                "To define a primary key"
            ],
            "answer": 0
        },
        {
            "question": "Which SQL clause is used to return rows with no NULL values in a specific column?",
            "options": ["NOT NULL", "IS NOT NULL", "NO NULL", "EXCLUDE NULL"],
            "answer": 1
        },
        {
            "question": "Which SQL aggregate function is used to find the total sum of a numeric column?",
            "options": ["SUM", "COUNT", "AVG", "MAX"],
            "answer": 0
        },
        {
            "question": "Which SQL keyword is used to check if a value is null?",
            "options": ["IS NULL", "IS EMPTY", "CHECK NULL", "NULL"],
            "answer": 0
        },
        {
            "question": "What is the purpose of a FOREIGN KEY constraint?",
            "options": [
                "To link two tables together",
                "To enforce unique values in a column",
                "To define a default value",
                "To set a primary key"
            ],
            "answer": 0
        },

        {
            "question": "What is the purpose of the GROUP BY clause in SQL?",
            "options": [
                "To filter rows based on a condition",
                "To group rows with the same values in specified columns",
                "To sort the result set in ascending or descending order",
                "To combine rows from multiple tables"
            ],
            "answer": 1
        },
        {
            "question": "What does the UNION operator do in SQL?",
            "options": [
                "Combines the results of two queries and removes duplicates",
                "Joins two tables based on a related column",
                "Combines rows within the same table",
                "Returns only matching rows from two queries"
            ],
            "answer": 0
        },
        {
            "question": "Which SQL clause is used to limit the number of rows returned by a query?",
            "options": ["LIMIT", "WHERE", "OFFSET", "ROWNUM"],
            "answer": 0
        },
        {
            "question": "What does the HAVING clause do in SQL?",
            "options": [
                "Filters grouped rows based on a condition",
                "Filters rows before grouping",
                "Sorts rows in the result set",
                "Combines results of two queries"
            ],
            "answer": 0
        },
        {
            "question": "Which SQL keyword is used to update data in a table?",
            "options": ["MODIFY", "ALTER", "UPDATE", "REPLACE"],
            "answer": 2
        },
        {
            "question": "What is the purpose of the INDEX in a database?",
            "options": [
                "To enforce unique values in a column",
                "To improve the speed of data retrieval",
                "To define the structure of a table",
                "To remove duplicate rows"
            ],
            "answer": 1
        },
        {
            "question": "What is the purpose of the DEFAULT constraint in SQL?",
            "options": [
                "To enforce unique values",
                "To provide a fallback value if none is specified",
                "To link tables together",
                "To set a primary key"
            ],
            "answer": 1
        },
        {
            "question": "What does the SQL keyword IS NOT NULL do?",
            "options": [
                "Filters rows with non-NULL values",
                "Filters rows with NULL values",
                "Removes NULL values from the table",
                "Replaces NULL values with defaults"
            ],
            "answer": 0
        },
        {
            "question": "What is the purpose of the SQL AVG function?",
            "options": [
                "To calculate the total sum of a column",
                "To find the average value of a numeric column",
                "To count the number of rows in a table",
                "To return the highest value in a column"
            ],
            "answer": 1
        },
        {
            "question": "What does the TRUNCATE command do in SQL?",
            "options": [
                "Deletes all rows from a table without logging individual row deletions",
                "Removes specific rows based on a condition",
                "Deletes the table from the database",
                "Clears duplicate rows from a table"
            ],
            "answer": 0
        },
        {
            "question": "What does the SQL COUNT function do?",
            "options": [
                "Counts the number of rows in a table",
                "Counts the number of non-NULL values in a column",
                "Counts the distinct values in a column",
                "Counts the total number of columns"
            ],
            "answer": 1
        },
        {
            "question": "Which type of join returns all rows when there is a match in one of the tables?",
            "options": [
                "INNER JOIN",
                "LEFT JOIN",
                "RIGHT JOIN",
                "FULL OUTER JOIN"
            ],
            "answer": 3
        },
        {
            "question": "What is the main function of a foreign key in SQL?",
            "options": [
                "To ensure uniqueness of values in a column",
                "To link two tables together",
                "To ensure no NULL values in a column",
                "To store large amounts of data"
            ],
            "answer": 1
        },
        {
            "question": "Which of the following is a correct syntax for creating a new table in SQL?",
            "options": [
                "CREATE NEW TABLE table_name",
                "CREATE TABLE table_name ()",
                "TABLE CREATE table_name",
                "MAKE TABLE table_name"
            ],
            "answer": 1
        },
        {
            "question": "Which SQL keyword is used to remove a table from the database?",
            "options": [
                "REMOVE",
                "DROP",
                "DELETE",
                "CLEAR"
            ],
            "answer": 1
        },
        {
            "question": "What is the purpose of the SQL UNION ALL operator?",
            "options": [
                "Combines the results of two queries, including duplicates",
                "Removes duplicates from the result set",
                "Joins multiple tables based on foreign keys",
                "Returns only matching rows from both queries"
            ],
            "answer": 0
        },
        {
            "question": "What is the purpose of the SQL DISTINCT keyword?",
            "options": [
                "Filters out NULL values",
                "Ensures rows are unique",
                "Combines multiple rows",
                "Sorts rows in ascending order"
            ],
            "answer": 1
        },
        {
            "question": "Which clause is used to sort the results of a SQL query?",
            "options": [
                "ORDER BY",
                "GROUP BY",
                "SORT BY",
                "FILTER BY"
            ],
            "answer": 0
        },
        {
            "question": "What is the function of the SQL SUBSTRING() function?",
            "options": [
                "Returns a specified portion of a string",
                "Replaces part of a string with another string",
                "Finds the length of a string",
                "Converts a string to uppercase"
            ],
            "answer": 0
        },
        {
            "question": "Which operator is used to find values that match a pattern in SQL?",
            "options": [
                "LIKE",
                "MATCH",
                "IN",
                "EXISTS"
            ],
            "answer": 0
        },
        {
            "question": "Which SQL clause is used to group rows that have the same values?",
            "options": [
                "GROUP BY",
                "ORDER BY",
                "DISTINCT",
                "HAVING"
            ],
            "answer": 0
        },
        {
            "question": "What does the SQL AVG() function do?",
            "options": [
                "Calculates the average value of a column",
                "Calculates the sum of a column",
                "Counts the number of rows",
                "Finds the maximum value in a column"
            ],
            "answer": 0
        },
        {
            "question": "Which keyword is used to define a primary key in SQL?",
            "options": [
                "PRIMARY KEY",
                "FOREIGN KEY",
                "UNIQUE",
                "NOT NULL"
            ],
            "answer": 0
        },
        {
            "question": "Which SQL command is used to remove all rows from a table without deleting the table?",
            "options": [
                "DELETE",
                "TRUNCATE",
                "REMOVE",
                "DROP"
            ],
            "answer": 1
        },
        {
            "question": "What is the default sorting order for the ORDER BY clause in SQL?",
            "options": [
                "Ascending",
                "Descending",
                "Random",
                "No sorting"
            ],
            "answer": 0
        },
        {
            "question": "Which SQL function is used to return the current date and time?",
            "options": [
                "GETDATE()",
                "CURRENT_DATE()",
                "NOW()",
                "SYSDATE()"
            ],
            "answer": 0
        },
        {
            "question": "What does the SQL INSERT INTO statement do?",
            "options": [
                "Inserts new data into a table",
                "Retrieves data from a table",
                "Updates existing data in a table",
                "Deletes data from a table"
            ],
            "answer": 0
        },
        {
            "question": "What is the purpose of the SQL BETWEEN operator?",
            "options": [
                "Filters data within a specific range",
                "Joins two tables together",
                "Filters data based on multiple conditions",
                "Matches a specific pattern"
            ],
            "answer": 0
        },
        {
            "question": "Which of the following is a valid SQL data type for storing text?",
            "options": [
                "VARCHAR",
                "TEXT",
                "CHAR",
                "STRING"
            ],
            "answer": 0
        },
        {
            "question": "What does the SQL LIMIT clause do?",
            "options": [
                "Limits the number of rows returned by a query",
                "Limits the size of data in a column",
                "Sets the maximum value of a column",
                "Restricts access to certain rows"
            ],
            "answer": 0
        },
        {
            "question": "What is a foreign key used for in SQL?",
            "options": [
                "To create a relationship between two tables",
                "To enforce uniqueness in a column",
                "To store duplicate values",
                "To optimize query performance"
            ],
            "answer": 0
        },
        {
            "question": "Which function is used to return the highest value in a column in SQL?",
            "options": [
                "MAX()",
                "MIN()",
                "COUNT()",
                "AVG()"
            ],
            "answer": 0
        },
        {
            "question": "What does the SQL DROP command do?",
            "options": [
                "Deletes a table or database",
                "Removes all rows from a table",
                "Deletes a column from a table",
                "Updates a table schema"
            ],
            "answer": 0
        },
        {
            "question": "Which SQL statement is used to modify existing records in a table?",
            "options": [
                "UPDATE",
                "MODIFY",
                "EDIT",
                "ALTER"
            ],
            "answer": 0
        },
        {
            "question": "What is the function of the SQL ISNULL() function?",
            "options": [
                "Replaces NULL values with a specified value",
                "Checks if a column value is NULL",
                "Counts the number of NULL values in a column",
                "Converts NULL values to zero"
            ],
            "answer": 0
        },
        {
            "question": "Which of these is a valid SQL constraint to ensure that values in a column are unique?",
            "options": [
                "UNIQUE",
                "PRIMARY KEY",
                "NOT NULL",
                "FOREIGN KEY"
            ],
            "answer": 0
        },
        {
            "question": "Which SQL clause is used to filter the records before applying aggregation?",
            "options": [
                "WHERE",
                "HAVING",
                "GROUP BY",
                "FILTER"
            ],
            "answer": 0
        },
        {
            "question": "Which SQL operator is used to compare a value to a list of values?",
            "options": [
                "IN",
                "LIKE",
                "BETWEEN",
                "IS NULL"
            ],
            "answer": 0
        },
        {
            "question": "Which SQL clause is used to sort the result set in a specific order?",
            "options": [
                "ORDER BY",
                "GROUP BY",
                "HAVING",
                "DISTINCT"
            ],
            "answer": 0
        },
        {
            "question": "What is the use of the SQL EXCEPT operator?",
            "options": [
                "Returns the difference between two result sets",
                "Combines two result sets",
                "Returns records that match in both result sets",
                "Removes duplicates from a result set"
            ],
            "answer": 0
        }

    ];


const databaseQuestion6 = [
    {
        question: "What does DDL stand for?",
        options: [
            "Data Definition Language",
            "Data Dynamic Language",
            "Data Description Language",
            "Data Deployment Language"
        ],
        answer: 0
    },
    {
        question: "Which of the following is not a DDL command?",
        options: ["CREATE", "SELECT", "ALTER", "DROP"],
        answer: 1
    },
    {
        question: "What does the CREATE command do in SQL Server?",
        options: [
            "Modifies an existing table",
            "Deletes a table",
            "Creates a new table or database",
            "Retrieves data"
        ],
        answer: 2
    },
    {
        question: "How do you create a table in SQL Server?",
        options: [
            "CREATE DATABASE myTable;",
            "CREATE TABLE myTable (Column1 INT, Column2 VARCHAR(50));",
            "ADD TABLE myTable;",
            "INSERT INTO myTable;"
        ],
        answer: 1
    },
    {
        question: "What does the ALTER command do?",
        options: [
            "Adds or removes columns from a table",
            "Changes data in a table",
            "Deletes a database",
            "Creates a backup"
        ],
        answer: 0
    },
    {
        question: "What is the syntax to rename a column using ALTER?",
        options: [
            "ALTER TABLE table_name RENAME COLUMN old_name TO new_name;",
            "ALTER TABLE table_name ALTER COLUMN old_name new_name;",
            "ALTER TABLE table_name RENAME new_name TO old_name;",
            "None of the above"
        ],
        answer: 0
    },
    {
        question: "Which command deletes a table from the database?",
        options: ["ERASE", "REMOVE", "DROP", "DELETE"],
        answer: 2
    },
    {
        question: "What happens when a table is dropped?",
        options: [
            "Only the data is deleted",
            "The table structure is preserved",
            "Both table structure and data are removed",
            "Nothing happens"
        ],
        answer: 2
    },
    {
        question: "Which command is used to delete all data from a table but keep the structure?",
        options: ["TRUNCATE", "DROP", "DELETE", "REMOVE"],
        answer: 0
    },
    {
        question: "Which command is used to modify the structure of an existing table?",
        options: ["CREATE", "UPDATE", "ALTER", "MODIFY"],
        answer: 2
    },
    {
        question: "What does the DROP DATABASE command do?",
        options: [
            "Deletes all tables in the database",
            "Deletes the database and all its contents",
            "Deletes only the schema",
            "Only deletes empty databases"
        ],
        answer: 1
    },
    {
        question: "How can you change the data type of a column in SQL Server?",
        options: [
            "MODIFY COLUMN",
            "ALTER TABLE table_name ALTER COLUMN column_name new_data_type;",
            "CHANGE DATA TYPE",
            "ALTER TYPE column_name new_data_type;"
        ],
        answer: 1
    },
    {
        question: "Which of the following is not true about the TRUNCATE command?",
        options: [
            "It resets the identity column",
            "It removes all rows in a table",
            "It preserves table structure",
            "It can be rolled back"
        ],
        answer: 3
    },
    {
        question: "What is a primary key in SQL Server?",
        options: [
            "A column that holds unique values",
            "A column that allows duplicate values",
            "A column that can be NULL",
            "A foreign key column"
        ],
        answer: 0
    },
    {
        question: "Which command is used to add a new primary key?",
        options: [
            "ALTER TABLE table_name ADD PRIMARY KEY (column_name);",
            "ADD PRIMARY KEY (column_name);",
            "MODIFY PRIMARY KEY;",
            "UPDATE PRIMARY KEY;"
        ],
        answer: 0
    },
    {
        question: "What does the UNIQUE constraint do?",
        options: [
            "Prevents duplicate values in a column",
            "Ensures that all rows are unique",
            "Allows NULL values in a primary key",
            "Prevents updates to the column"
        ],
        answer: 0
    },
    {
        question: "What is the default constraint in SQL Server?",
        options: [
            "Allows duplicate values",
            "Provides a default value if none is specified",
            "Automatically updates values",
            "Prevents NULL values"
        ],
        answer: 1
    },
    {
        question: "How do you remove a column from a table?",
        options: [
            "DROP COLUMN column_name;",
            "ALTER TABLE table_name DROP COLUMN column_name;",
            "DELETE column_name FROM table_name;",
            "REMOVE COLUMN column_name;"
        ],
        answer: 1
    },
    {
        question: "What does the CHECK constraint do?",
        options: [
            "Ensures column values meet a specific condition",
            "Checks for NULL values",
            "Ensures only unique values are allowed",
            "Prevents data from being updated"
        ],
        answer: 0
    },
    {
        question: "How do you create a foreign key?",
        options: [
            "ALTER TABLE table_name ADD FOREIGN KEY (column_name) REFERENCES parent_table (parent_column);",
            "CREATE FOREIGN KEY column_name;",
            "ADD FOREIGN KEY TO table_name;",
            "INSERT FOREIGN KEY;"],

        answer: 0
    },
    {
        question: "Which statement about the PRIMARY KEY is true?",
        options: [
            "It allows NULL values",
            "A table can have multiple primary keys",
            "It ensures unique and non-null values",
            "It is optional in every table"
        ],
        answer: 2
    },
    {
        question: "What is a schema in SQL Server?",
        options: [
            "A backup file",
            "A logical grouping of database objects",
            "A table data type",
            "A query result set"
        ],
        answer: 1
    },
    {
        question: "How do you create a schema?",
        options: [
            "CREATE TABLE schema_name;",
            "CREATE SCHEMA schema_name;",
            "ADD SCHEMA schema_name;",
            "INSERT INTO schema_name;"
        ],
        answer: 1
    },
    {
        question: "Which command is used to rename a table?",
        options: [
            "RENAME TABLE old_name TO new_name;",
            "ALTER TABLE old_name RENAME TO new_name;",
            "EXEC sp_rename 'old_name', 'new_name';",
            "MODIFY TABLE old_name TO new_name;"
        ],
        answer: 2
    },
    {
        question: "Can the TRUNCATE command be rolled back?",
        options: [
            "Yes, always",
            "No, never",
            "Yes, if inside a transaction",
            "No, but only for specific cases"
        ],
        answer: 2
    },
    {
        question: "Which statement about indexes is true?",
        options: [
            "They are part of DDL commands",
            "Indexes cannot be created on primary keys",
            "Indexes improve query performance",
            "Indexes are mandatory for all tables"
        ],
        answer: 2
    },
    {
        question: "How do you delete a constraint?",
        options: [
            "ALTER TABLE table_name DROP CONSTRAINT constraint_name;",
            "REMOVE CONSTRAINT constraint_name;",
            "DELETE CONSTRAINT constraint_name;",
            "ALTER TABLE DROP PRIMARY KEY constraint_name;"
        ],
        answer: 0
    },
    {
        question: "What is the difference between DROP and TRUNCATE?",
        options: [
            "DROP removes only data, TRUNCATE removes structure",
            "DROP deletes structure, TRUNCATE deletes data only",
            "Both are identical",
            "DROP is slower than TRUNCATE"
        ],
        answer: 1
    },
    {
        question: "How do you set a column as NOT NULL?",
        options: [
            "ALTER TABLE table_name MODIFY COLUMN column_name NOT NULL;",
            "CREATE COLUMN column_name NOT NULL;",
            "ALTER TABLE table_name ALTER COLUMN column_name NOT NULL;",
            "UPDATE table_name SET NOT NULL;"
        ],
        answer: 2
    },
    {
        question: "How do you create an index?",
        options: [
            "CREATE INDEX index_name ON table_name(column_name);",
            "ADD INDEX ON table_name(column_name);",
            "INSERT INDEX table_name(column_name);",
            "INDEX column_name table_name;"
        ],
        answer: 0
    },
    {
        question: "Can you rename a constraint in SQL Server?",
        options: [
            "Yes, using ALTER TABLE RENAME CONSTRAINT",
            "Yes, using sp_rename",
            "No, constraints cannot be renamed",
            "Yes, by updating system tables"
        ],
        answer: 1
    },
    {
        question: "What happens when you drop a column with foreign key references?",
        options: [
            "The column is dropped",
            "The drop fails unless references are removed",
            "The foreign key constraint is automatically dropped",
            "Nothing happens"
        ],
        answer: 1
    },
    {
        question: "What is a composite key?",
        options: [
            "A single primary key",
            "A combination of multiple foreign keys",
            "A primary key consisting of two or more columns",
            "A backup for the primary key"
        ],
        answer: 2
    },
    {
        question: "What is the default schema in SQL Server?",
        options: ["System", "dbo", "master", "default_schema"],
        answer: 1
    },
    {
        question: "Which command creates a new database?",
        options: [
            "CREATE DATABASE database_name;",
            "ADD DATABASE database_name;",
            "INSERT DATABASE database_name;",
            "ALTER DATABASE database_name;"
        ],
        answer: 0
    },
    {
        question: "How do you delete a schema?",
        options: [
            "DROP SCHEMA schema_name;",
            "DELETE SCHEMA schema_name;",
            "REMOVE SCHEMA schema_name;",
            "ALTER SCHEMA schema_name DELETE;"
        ],
        answer: 0
    },
    {
        question: "Can a primary key column have duplicate values?",
        options: [
            "Yes, always",
            "No, never",
            "Yes, if combined with UNIQUE constraint",
            "Yes, in some databases"
        ],
        answer: 1
    },
    {
        question: "How do you list all tables in a schema?",
        options: [
            "SELECT * FROM schema_name;",
            "SHOW TABLES;",
            "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'schema_name';",
            "EXEC SHOW TABLES;"
        ],
        answer: 2
    },
    {
        question: "What is a clustered index?",
        options: [
            "An index that allows duplicate values",
            "An index where rows are stored in physical order",
            "An index that exists only for primary keys",
            "A secondary index"
        ],
        answer: 1
    },
    {
        question: "What does INFORMATION_SCHEMA store?",
        options: [
            "Database metadata",
            "User data",
            "Index data",
            "Backup logs"
        ],
        answer: 0
    }
];










const dataStructureQuestions = [
    {
        question: "Process of inserting an element in a stack is called:",
        options: ["Create", "Push", "Evaluation", "Pop"],
        answer: 1
    },
    {
        question: "Process of removing an element from a stack is called:",
        options: ["Create", "Push", "Evaluation", "Pop"],
        answer: 3
    },
    {
        question: "In a stack, if a user tries to remove an element from an empty stack, it is called:",
        options: ["Underflow", "Empty collection", "Overflow", "Garbage Collection"],
        answer: 0
    },
    {
        question: "Pushing an element into a stack already having five elements and a size limit of 5 will cause:",
        options: ["Underflow", "User flow", "Overflow", "Crash"],
        answer: 2
    },
    {
        question: "Which of the following is not an application of stack?",
        options: ["A parentheses balancing program", "Tracking of local variables at run time", "Compiler Syntax Analyzer", "Data transfer between two asynchronous processes"],
        answer: 3
    },
    {
        question: "The maximum number of parentheses that appear on the stack at any one time when analyzing (()(())(())) is:",
        options: ["1", "2", "3", "4 or more"],
        answer: 2
    },
    {
        question: "What is the value of the postfix expression 6 3 2 4 + - * ?",
        options: ["1", "40", "74", "-18"],
        answer: 3
    },
    {
        question: "The maximum number of symbols that will appear on the stack at one time during the conversion of 4 + 3*(6*3-12) from infix to postfix notation is:",
        options: ["1", "2", "3", "4"],
        answer: 3
    },
    {
        question: "The data structure required to check whether an expression contains balanced parentheses is:",
        options: ["Stack", "Queue", "Array", "Tree"],
        answer: 0
    },
    {
        question: "The postfix form of the expression (A+B)*(C*D-E)*F/G is:",
        options: ["AB+CD*E-FG/**", "AB+CD*E-F**G/", "AB+CD*E-*F*G/", "AB+CDE*-*F*G/"],
        answer: 2
    },
    {
        question: "The process of accessing data stored in a serial access memory is similar to manipulating data on a:",
        options: ["Heap", "Binary Tree", "Array", "Stack"],
        answer: 3
    },
    {
        question: "The postfix form of A*B+C/D is:",
        options: ["*AB/CD+", "AB*CD/+", "A*BC+/D", "ABCD+/*"],
        answer: 1
    },
    {
        question: "Which data structure is needed to convert infix notation to postfix notation?",
        options: ["Stack", "Queue", "Branch", "Tree"],
        answer: 0
    },
    {
        question: "The prefix form of A-B/(C*D^E) is:",
        options: ["-/*^ACBDE", "-ABCD*^DE", "-A/B*C^DE", "-A/BC*^DE"],
        answer: 2
    },
    {
        question: "The prefix form of the infix expression (p + q) - (r * t) is:",
        options: ["+ pq - *rt", "-+pqr*t", "-+pq*rt", "-+*pqrt"],
        answer: 2
    },
    {
        question: "Which data structure is used for implementing recursion?",
        options: ["List", "Queue", "Array", "Stack"],
        answer: 3
    },
    {
        question: "The result of evaluating the postfix expression 5 4 6 + * 4 9 3 / + * is:",
        options: ["600", "350", "650", "588"],
        answer: 1
    },
    {
        question: "Convert the infix expression (A+B^D)/(E-F)+G to postfix:",
        options: ["(ABD^+EF-/G+)", "(ABD+^EF-/G+)", "(ABD^+EF/-G+)", "(ABDEF+^/-G+)"],
        answer: 0
    },
    {
        question: "Convert the infix expression x+y*z+(p*q+r)*s to postfix form:",
        options: ["xyz*+pq*r+s*+", "xyz*+pq*r+s+*", "xyz+*pq*r+s*+", "xyzp+**qr+s*+"],
        answer: 0
    },
    {
        question: "Which of the following is not an inherent application of stack?",
        options: ["Reversing a string", "Evaluation of postfix expression", "Implementation of recursion", "Job scheduling"],
        answer: 3
    },
    {
        question: "The result of evaluating the postfix expression 10 5 +60 6 /*8- is:",
        options: ["284", "213", "142", "71"],
        answer: 2
    },
    {
        question: "If elements 'A', 'B', 'C', and 'D' are placed in a stack and are deleted one at a time, what is the order of removal?",
        options: ["ABCD", "DCBA", "DCAB", "ABDC"],
        answer: 1
    },
    {
        question: "Suppose a stack is implemented with a linked list instead of an array. What would be the time complexity of push and pop operations?",
        options: ["O(1) for insertion and O(n) for deletion", "O(1) for insertion and O(1) for deletion", "O(n) for insertion and O(1) for deletion", "O(n) for insertion and O(n) for deletion"],
        answer: 1
    },
    {
        question: "To evaluate an expression without any embedded function calls:",
        options: ["As many stacks as the height of the expression tree are needed", "One stack is enough", "Two stacks are needed", "A Turing machine is needed in the general case"],
        answer: 1
    }
];

const dataStructureQuestions2 = [
];

const dataStructureQuestions3 = [
];












const dcQuestions1 = [
    {
        question: "Communication between a computer and keyboard involves transmission.",
        options: ["Simplex", "Automatic", "Full-duplex", "Half-duplex"],
        answer: 0
    },
    {
        question: "Which of the following isn’t a type of transmission mode?",
        options: ["Half-duplex", "Full-duplex", "Simplex", "physical"],
        answer: 3
    },
    {
        question: "A transmission that generally involves dedicated circuits.",
        options: ["Half-duplex", "Simplex", "Semi-duplex", "Full-duplex"],
        answer: 1
    },
    {
        question: "A transmission mode that can transmit data in both directions but transmits in only one direction at a time.",
        options: ["Full-duplex", "Semi-duplex", "Simplex", "Half-duplex"],
        answer: 3
    },
    {
        question: "Telephone networks operate in this mode.",
        options: ["Simplex", "Semi-duplex", "Full-duplex", "Half-duplex"],
        answer: 2
    },
    {
        question: "A walkie-talkie operates in ________.",
        options: ["Half-duplex", "Full-duplex", "Simplex", "Semi-duplex"],
        answer: 0
    },
    {
        question: "Data can flow only in one direction all the time in a _____ mode.",
        options: ["Half-duplex", "None of these", "Simplex", "Full-duplex"],
        answer: 2
    },
    {
        question: "Data can flow in both directions all the time in a _____ mode.",
        options: ["Full-duplex", "None of these", "Simplex", "Half-duplex"],
        answer: 0
    },
    {
        question: "Both stations can transmit and receive data simultaneously in ______.",
        options: ["Full-duplex mode", "Unicode", "Simplex mode", "Half-duplex mode"],
        answer: 0
    },
    {
        question: "A _____ is the physical path over which a message travels.",
        options: ["path", "medium", "protocol", "route"],
        answer: 1
    },
    {
        question: "Which of these elements is not involved in the process of communication?",
        options: ["pipe", "sender", "message", "channel"],
        answer: 0
    },
    {
        question: "A ______ set of rules that governs data communication is called ______.",
        options: ["protocols", "standards", "RFCs", "Servers"],
        answer: 0
    },
    {
        question: "A ______ is the person who transmits a message.",
        options: ["Receiver", "Sender", "Message", "Transmission medium"],
        answer: 1
    },
    {
        question: "Which of the following is not one of the components of a data communication system?",
        options: ["Medium", "Sender", "Message", "All of the choices are correct"],
        answer: 3
    },
    {
        question: "The function of the data transmission element is ______.",
        options: ["To transfer data from one element to another", "To process the data", "To modify the data", "To separate the signal hidden in the noise"],
        answer: 0
    },
    {
        question: "Any set of digits or alphabets are generally referred to as ______.",
        options: ["Characters", "Symbols", "Bits", "Bytes"],
        answer: 0
    },
    {
        question: "What is a pixel?",
        options: ["Pixel is the element of a digital image", "Pixel is the cluster of a digital image", "Pixel is the element of an analog image", "Pixel is the cluster of an analog image"],
        answer: 0
    },
    {
        question: "Which color model is used for most computer model and video systems?",
        options: ["RGB", "RYB", "CMU", "HSV"],
        answer: 0
    },
    {
        question: "What does ASCII stand for?",
        options: ["American Standard Code for Information Interchange", "American Scientific Code for Information Interchange", "American Scientific Code for Interchanging Information", "American Standard Code for Interchanging Information"],
        answer: 0
    },
    {
        question: "The largest geographic area a wide area network (WAN) can span is ______.",
        options: ["A town", "A state", "A country", "The world"],
        answer: 3
    },
    {
        question: "A data communication system spanning states, countries, or the whole world is a ______.",
        options: ["WAN", "LAN", "MAN", "PAN"],
        answer: 0
    },
    {
        question: "WAN stands for ______.",
        options: ["World area network", "Web area network", "Wide area network", "Web access network"],
        answer: 2
    },
    {
        question: "What is the purpose of a WAN?",
        options: ["To allow computers to communicate with each other in the same area", "To allow computers to communicate with each other anywhere in the world", "To allow computers to communicate with each other in the same country", "To allow computers to communicate with each other in the home"],
        answer: 1
    },
    {
        question: "Wide Area Networks (WANs) ______.",
        options: ["Cover a large geographical area", "Use cables, telephone lines, satellites, and radio waves to connect", "Are used by international organizations", "All 3 options"],
        answer: 3
    },
    {
        question: "The World Wide Web (WWW) is the largest ______.",
        options: ["Local Area Network (LAN)", "Wide Area Network (WAN)", "Metropolitan Area Network (MAN)"],
        answer: 1
    },
    {
        question: "How is software reliability defined?",
        options: ["Time", "Quality", "Efficiency", "Speed"],
        answer: 0
    },
    {
        question: "A local area network (LAN) is defined by ______.",
        options: ["The geometric size of the network", "The maximum number of hosts in the network and/or the geometric size of the network", "The maximum number of hosts in the network", "The topology of the network"],
        answer: 1
    },
    {
        question: "WLAN stands for ______.",
        options: ["Wireless Local Area Network", "Wire Lost Area Network", "Wired Local Area Network", "Wireless Local Ambiguity Network"],
        answer: 0
    },
    {
        question: "Which of the following is not one of the network criteria?",
        options: ["Performance", "Reliability", "Security", "All of the choices are correct"],
        answer: 3
    },
    {
        question: "Which of the following is a small single-site network?",
        options: ["LAN", "DSL", "MAN", "WAN"],
        answer: 0
    },
    {
        question: "A term that refers to the way in which the nodes of a network are linked together is called ______.",
        options: ["Network", "Topology", "Connection", "Interconnection"],
        answer: 1
    },
    {
        question: "Three or more devices share a link in a ______ connection.",
        options: ["Unipoint", "Multipoint", "Point to point", "Simplex"],
        answer: 1
    },
    {
        question: "______ topology requires multiple connections.",
        options: ["Star", "Mesh", "Ring", "Bus"],
        answer: 3
    },
    {
        question: "The participating computers in a network are referred to as ______.",
        options: ["Clients", "Servers", "Nodes", "CPUs"],
        answer: 2
    },
    {
        question: "A topology that is responsible for describing the geometric arrangement of components that make up the LAN is ______.",
        options: ["Complex", "Physical", "Logical", "Incremental"],
        answer: 1
    },
    {
        question: "Which network topology requires a central controller or hub?",
        options: ["Star", "Mesh", "Ring", "Bus"],
        answer: 0
    }
];




const dcQuestions2 = [
    {
        question: "In TCP/IP, a message at the application layer is encapsulated in a packet at the ____ layer.",
        options: ["network", "transport", "data-link", "physical"],
        answer: 1
    },
    {
        question: "In TCP/IP, a message at the transport layer is encapsulated in a packet at the ____ layer.",
        options: ["network", "transport", "data-link", "physical"],
        answer: 0
    },
    {
        question: "In TCP/IP, a message belonging to the network layer is decapsulated from a packet at the ____ layer.",
        options: ["network", "transport", "data-link", "physical"],
        answer: 2
    },
    {
        question: "In TCP/IP, a message belonging to the transport layer is decapsulated from a packet at the ____ layer.",
        options: ["network", "transport", "data-link", "physical"],
        answer: 1
    },
    {
        question: "Which layer does the data link layer take packets from and encapsulate them into frames for transmission?",
        options: ["transport layer", "application layer", "network layer", "physical layer"],
        answer: 2
    },
    {
        question: "How many levels of addressing is provided in TCP/IP protocol?",
        options: ["One", "Two", "Three", "Four"],
        answer: 3
    },
    {
        question: "PROTOCOL LAYERING is applied when communication is ____.",
        options: ["large", "simple", "complex", "complicated"],
        answer: 2
    },
    {
        question: "The network layer is concerned with........ of data.",
        options: ["packets", "frames", "bits", "bytes"],
        answer: 0
    },
    {
        question: "The packet of information at the application layer is called........",
        options: ["packets", "frames", "message", "segment"],
        answer: 2
    },
    {
        question: "The data link layer takes the packets from...... and encapsulates them into frames for transmission.",
        options: ["network layer", "physical layer", "transport layer", "application layer"],
        answer: 0
    },
    {
        question: "The TCP/IP protocol suite consists of........ layers.",
        options: ["two", "three", "five", "six"],
        answer: 2
    },
    {
        question: "A router is involved in........ layers of the TCP/IP protocol suite.",
        options: ["two", "three", "five", "four"],
        answer: 1
    },
    {
        question: "A link-layer switch is involved in ......... layers of the TCP/IP protocol suite.",
        options: ["two", "three", "five", "four"],
        answer: 0
    },
    {
        question: "The transport-layer packet in the TCP/IP protocol suite is called........",
        options: ["a message", "a datagram", "a segment or a user datagram", "a frame"],
        answer: 2
    },
    {
        question: "The......... layer is responsible for the delivery of a message from one process to another.",
        options: ["physical", "transport", "network", "application"],
        answer: 1
    },
    {
        question: "OSI stands for ______.",
        options: ["open system interconnection", "operating system interface", "optical service implementation", "open service Internet"],
        answer: 0
    },
    {
        question: "The number of layers in ISO OSI reference model is ______.",
        options: ["4", "5", "6", "7"],
        answer: 3
    },
    {
        question: "TCP/IP model does not have ____ layer but OSI model have this layer.",
        options: ["session layer", "transport layer", "application layer", "network layer"],
        answer: 0
    },
    {
        question: "Which of the following layers is an addition to OSI model when compared with TCP IP model?",
        options: ["session layer", "Presentation layer", "application layer", "Session and Presentation layer"],
        answer: 3
    },
    {
        question: "In OSI model, when data is sent from device A to device B, the 5th layer to receive data at B is ____.",
        options: ["application layer", "Transport layer", "Session layer", "Link layer"],
        answer: 2
    },
    {
        question: "Which one of the following protocol delivers/stores mail to receiver server?",
        options: ["simple mail transfer protocol", "post office protocol", "hypertext transfer protocol", "internet mail access protocol"],
        answer: 0
    },
    {
        question: "In the TCP/IP protocol suite, which of the following is an application layer protocol?",
        options: ["The User Datagram Protocol (UDP)", "The Internet Protocol (IP)", "The Transmission Control Protocol(TCP)", "The File Transfer Protocol (FTP)"],
        answer: 3
    },
    {
        question: "In the TCP/IP protocol suite, which of the following is a transport-layer protocol?",
        options: ["The Internet Protocol (IP)", "The Internet Control Message Protocol (ICMP)", "The Address Resolution Protocol (ARP)", "The Transmission Control Protocol (TCP)"],
        answer: 3
    },
    {
        question: "In the TCP/IP protocol suite, which of the following is a network layer protocol?",
        options: ["The Stream Control Transmission Protocol (SCTP)", "The Internet Protocol (IP)", "The Secure Shell (SSH)", "User Datagram Protocol (UDP)"],
        answer: 1
    },
    {
        question: "In the TCP/IP protocol suite, the ...... layer is responsible for moving frames from one hop (node) to the next.",
        options: ["physical", "data-link", "transport", "network"],
        answer: 1
    },
    {
        question: "In the TCP/IP protocol suite, the physical layer is concerned with the movement of ....... over the physical medium.",
        options: ["programs", "dialogs", "protocols", "bits"],
        answer: 3
    },
    {
        question: "In the TCP/IP protocol suite, a port number is the identifier at the.........",
        options: ["application layer", "network layer", "transport layer", "physical layer"],
        answer: 2
    },
    {
        question: "In the TCP/IP protocol suite, a logical address is the identifier at the........",
        options: ["network layer", "transport layer", "data-link layer", "application layer"],
        answer: 0
    },
    {
        question: "The Internet Protocol (IP) is ...... protocol.",
        options: ["a unreliable", "a connection-oriented", "a reliable and connection-oriented"],
        answer: 0
    },
    {
        question: "The application layer in the TCP/IP protocol suite is usually considered to be the combination of ....... layers in the OSI model.",
        options: ["application, presentation, and session", "application, transport, and network", "application, data-link, and physical", "network, data-link, and physical"],
        answer: 0
    },
    {
        question: "In TCP/IP, a logical connection between an entity at the network layer can be made with another entity at the ............ layer.",
        options: ["network", "transport", "data-link", "physical"],
        answer: 0
    },
    {
        question: "In TCP/IP, a logical connection between an entity at the data-link layer can be made with another entity at the ......... layer.",
        options: ["network", "transport", "data-link", "physical"],
        answer: 2
    },
    {
        question: "Which is not a application layer protocol?",
        options: ["HTTP", "SMTP", "FTP", "TCP"],
        answer: 3
    },
    {
        question: "Application layer offers ......... service.",
        options: ["End to end", "Process to process", "None of the mentioned", "Both End to end and Process to process"],
        answer: 3
    },
    {
        question: "Which of the following is an application layer service?",
        options: ["Network virtual terminal", "All of the mentioned", "File transfer, access, and management", "Mail service"],
        answer: 1
    },
    {
        question: "Electronic mail uses which Application layer protocol?",
        options: ["HTTP", "SMTP", "FTP", "SIP"],
        answer: 1
    },
    {
        question: "The physical layer is concerned with.....",
        options: ["bit-by-bit delivery", "process to process delivery", "application to application delivery", "port to port delivery"],
        answer: 0
    },
    {
        question: "HTTP is ...... protocol.",
        options: ["application layer", "transport layer", "network layer", "data link layer"],
        answer: 0
    },
    {
        question: "Which level is the network layer in the OSI model?",
        options: ["Third level", "Fourth level", "Second level", "Fifth layer"],
        answer: 0
    },
    {
        question: "ICMP stands for.......",
        options: ["Internet Coordinate Message Protocol", "Internet Control Message Protocol", "Interconnect Control Message Protocol", "Interconnect Coordinate Message Protocol"],
        answer: 1
    }
];










const bigdataQuestions1 = [
    {
        "question": "What is a primary characteristic of big data?",
        "options": ["Small volume", "Centralized storage", "Unchanging structure", "High diversity and distribution"],
        "answer": 3
    },
    {
        "question": "What feature does Apache Spark provide that MapReduce lacks?",
        "options": ["Batch processing", "Iterative processing", "NoSQL capabilities", "Schema-on-read flexibility"],
        "answer": 1
    },
    {
        "question": "Which of the following is NOT typically associated with Hadoop?",
        "options": ["Low-latency real-time processing", "Distributed data storage", "Fault-tolerance", "Batch processing"],
        "answer": 0
    },
    {
        "question": "What does YARN enable in Hadoop 2?",
        "options": ["Only MapReduce processing", "Management of cluster resources for various applications", "Exclusive access to storage nodes", "Limited scalability for big data"],
        "answer": 1
    },
    {
        "question": "Why is MapReduce still studied despite newer frameworks?",
        "options": ["It is the only option for interactive queries.", "It provides foundational concepts in data processing.", "It cannot scale for large datasets.", "It requires complex configurations."],
        "answer": 1
    },
    {
        "question": "In Hadoop, what is 'schema-on-read' primarily designed for?",
        "options": ["Structured data analysis", "Real-time data streaming", "Flexible interpretation of unstructured data", "Enforcing predefined data structures"],
        "answer": 2
    },
    {
        "question": "Which tool is commonly used for interactive SQL on Hadoop?",
        "options": ["Spark Streaming", "Apache Tez", "MapReduce", "Apache Flink"],
        "answer": 3
    },
    {
        "question": "Which type of data processing requires low latency and is best achieved with stream processing?",
        "options": ["Historical data analysis", "Log file analysis", "Credit card transaction validation", "Batch processing"],
        "answer": 2
    },
    {
        "question": "What is the role of the 'reduce' function in MapReduce?",
        "options": ["To split datasets for faster processing", "To aggregate intermediate outputs", "To directly query the dataset", "To convert data into structured format"],
        "answer": 1
    },
    {
        "question": "Which platform can index and serve search queries on Hadoop clusters?",
        "options": ["Spark SQL", "Apache Storm", "Solr", "Samza"],
        "answer": 2
    },
    {
        "question": "Which of the following is a primary advantage of data locality in Hadoop?",
        "options": ["Increased storage capacity", "Reduced network bandwidth usage", "Enhanced data normalization", "Direct access to remote databases"],
        "answer": 1
    },
    {
        "question": "In a Hadoop ecosystem, how does Spark differ from MapReduce in handling data?",
        "options": ["Spark is faster due to in-memory processing.", "MapReduce is faster due to disk-based processing.", "Spark cannot handle large datasets.", "MapReduce has built-in iterative processing."],
        "answer": 0
    },
    {
        "question": "What is the primary use of Apache Flink?",
        "options": ["Batch processing only", "In-memory data analytics", "Real-time data processing and analysis", "Data storage management"],
        "answer": 2
    },
    {
        "question": "Which of these frameworks is specifically designed for real-time data stream processing?",
        "options": ["Apache Tez", "Apache Samza", "Apache Hive", "Apache HDFS"],
        "answer": 1
    },
    {
        "question": "What is a key feature of the 'shared-nothing' architecture in MapReduce?",
        "options": ["All tasks depend on each other.", "Tasks are independent with no dependencies.", "Tasks must be rerun in sequence.", "Only one task runs at a time."],
        "answer": 1
    },
    {
        "question": "Which of the following types of data is NOT ideal for RDBMS?",
        "options": ["Highly normalized data", "Frequently updated data", "Structured XML data", "Large-scale unstructured data"],
        "answer": 3
    },
    {
        "question": "In Hadoop, how does 'schema-on-read' differ from traditional RDBMS schema management?",
        "options": ["Requires predefined schema at load time", "Allows data structure to be defined during read", "Involves static data definitions", "Processes data in a relational format only"],
        "answer": 1
    },
    {
        "question": "Which of these statements accurately describes 'grid computing' compared to Hadoop?",
        "options": ["Focuses on low-level data flow control", "Only supports small datasets", "Prioritizes data over computational power", "Relies on data locality for efficiency"],
        "answer": 3
    },
    {
        "question": "Why is normalization challenging in a Hadoop environment?",
        "options": ["It leads to data duplication.", "It complicates high-speed data access.", "It reduces data diversity.", "It limits schema flexibility."],
        "answer": 1
    },
    {
        "question": "Which is a key differentiator of Spark compared to MapReduce for machine learning tasks?",
        "options": ["Spark uses disk storage exclusively.", "Spark allows data processing in real time.", "MapReduce is more memory-efficient.", "MapReduce supports continuous query updates."],
        "answer": 1
    },
    {
        "question": "Which of the following is a key advantage of Apache Spark compared to MapReduce?",
        "options": ["It relies solely on disk storage.", "It provides faster iterative processing due to in-memory processing.", "It focuses only on batch processing without interactive analysis support.", "It exclusively uses HDFS for data storage."],
        "answer": 1
    },
    {
        "question": "When comparing Flink to MapReduce, what is a main advantage of Flink in data processing?",
        "options": ["It supports only batch processing.", "It supports real-time and interactive data processing.", "It does not handle large data sets effectively.", "It is not suitable for iterative processing."],
        "answer": 1
    },
    {
        "question": "What is the main difference between MapReduce and Spark in terms of data processing efficiency?",
        "options": ["MapReduce is faster due to its interactive data processing.", "Spark is more efficient for iterative processing as it keeps data in memory.", "Spark is slower because all data is stored on disk.", "MapReduce is faster because it uses caching."],
        "answer": 1
    },
    {
        "question": "Why is Flink more suitable for applications that require quick response times compared to MapReduce?",
        "options": ["It relies only on batch processing.", "It supports continuous data streaming with low latency.", "It primarily relies on HDFS for storage.", "It depends on non-interactive analysis."],
        "answer": 1
    },
    {
        "question": "When handling streaming data, which of the following distinguishes Apache Flink from Apache Spark?",
        "options": ["Spark does not support continuous streaming.", "Flink offers native processing for unbounded data streams.", "MapReduce is faster than both Flink and Spark.", "Spark relies entirely on disk storage for data."],
        "answer": 1
    },
    {
        "question": "What is the key difference between MapReduce and Spark regarding storage and memory use?",
        "options": ["MapReduce depends on in-memory processing to increase speed.", "Spark exclusively stores data on disk.", "MapReduce stores data on disk and reloads it with each iteration.", "Spark does not support large-scale data processing."],
        "answer": 2
    },
    {
        "question": "What is a major drawback of MapReduce compared to Spark in handling iterative algorithms?",
        "options": ["MapReduce cannot process large data sets.", "It needs to load data from disk for each iteration, making it slower.", "It does not support disk-based storage.", "It is unsuitable for batch processing."],
        "answer": 1
    },
    {
        "question": "Which feature makes Spark more efficient for machine learning tasks compared to MapReduce?",
        "options": ["Spark uses in-memory caching, reducing disk reads.", "MapReduce is more efficient in processing large files.", "Spark lacks support for iterative processing.", "MapReduce has in-built support for real-time analytics."],
        "answer": 0
    },
    {
        "question": "In which way does Flink outperform Spark for stateful stream processing?",
        "options": ["Flink offers lower latency and supports stateful stream operations natively.", "Spark’s streaming capabilities are more advanced for continuous updates.", "Flink relies heavily on batch processing.", "Spark allows faster batch analysis in real-time applications."],
        "answer": 0
    },
    {
        "question": "What is a primary reason for using Spark over MapReduce in big data analytics?",
        "options": ["Spark’s exclusive reliance on disk storage for faster retrieval.", "Spark’s ability to store intermediate data in memory for iterative tasks.", "MapReduce’s advantage in real-time processing.", "MapReduce’s native support for streaming operations."],
        "answer": 1
    },
    {
        "question": "HTML",
        "options": ["Structured Data", "Semi-structured Data", "Unstructured Data", "Cannot be classified"],
        "answer": 1
    },
    {
        "question": "XML",
        "options": ["Structured Data", "Semi-structured Data", "Unstructured Data", "Cannot be classified"],
        "answer": 1
    },
    {
        "question": "Excel",
        "options": ["Structured Data", "Semi-structured Data", "Unstructured Data", "Cannot be classified"],
        "answer": 0
    },
    {
        "question": "JSON",
        "options": ["Structured Data", "Semi-structured Data", "Unstructured Data", "Cannot be classified"],
        "answer": 1
    },
    {
        "question": "Images",
        "options": ["Structured Data", "Semi-structured Data", "Unstructured Data", "Cannot be classified"],
        "answer": 2
    },
    {
        "question": "Python (for code)",
        "options": ["Structured Data", "Semi-structured Data", "Unstructured Data", "All of this"],
        "answer": 2
    }
];





const bigdataQuestions2 = [

    {
        question: "What is Hadoop primarily designed for?",
        options: ["Web scraping", "Distributed processing of large data sets", "Database transactions", "Real-time data analysis"],
        answer: 1
    },
    {
        question: "Which programming language is Hadoop primarily written in?",
        options: ["Python", "Java", "R", "C++"],
        answer: 1
    },
    {
        question: "The Hadoop Distributed File System (HDFS) primarily supports:",
        options: ["Single-machine storage", "Distributed data storage", "Cloud-based storage only", "Local disk storage only"],
        answer: 1
    },
    {
        question: "Which of the following is a function of YARN in the Hadoop ecosystem?",
        options: ["Data compression", "Job scheduling and resource management", "Data indexing", "File replication"],
        answer: 1
    },
    {
        question: "The MapReduce model is divided into which two main phases?",
        options: ["Map and Split", "Map and Reduce", "Split and Aggregate", "Shuffle and Aggregate"],
        answer: 1
    },
    {
        question: "What is the purpose of the Mapper function in MapReduce?",
        options: ["Aggregating results", "Reading and processing input data", "Managing data locality", "Scheduling tasks"],
        answer: 1
    },
    {
        question: "In MapReduce, which phase typically reduces the data volume by combining values?",
        options: ["Map", "Combine", "Shuffle", "Reduce"],
        answer: 3
    },
    {
        question: "What does fault tolerance in Hadoop mean?",
        options: ["The system stops when a node fails", "The system continues to operate even if some nodes fail", "Data is lost if a node fails", "Hadoop does not support fault tolerance"],
        answer: 1
    },
    {
        question: "Data locality in Hadoop refers to:",
        options: ["Storing data only on a single server", "Processing data close to where it is stored", "Running tasks on remote servers", "Using cloud storage for data"],
        answer: 1
    },
    {
        question: "Why is the default HDFS block size 128 MB?",
        options: ["To minimize file size", "To align with network bandwidth", "To ensure fault tolerance", "To optimize data processing efficiency"],
        answer: 3
    },
    {
        question: "Which component handles the scheduling and resource allocation in Hadoop?",
        options: ["HDFS", "YARN", "Mapper", "Reducer"],
        answer: 1
    },
    {
        question: "Map tasks in MapReduce typically store output:",
        options: ["Directly in HDFS", "On local disk", "In the cloud", "In the memory of the main node"],
        answer: 1
    },
    {
        question: "A good split size in MapReduce processing is often:",
        options: ["512 bytes", "64 MB", "128 MB", "1 GB"],
        answer: 2
    },
    {
        question: "Which of the following is an advantage of Hadoop’s data replication?",
        options: ["Faster network transfer", "Reduced processing speed", "Improved reliability and availability", "Cost reduction"],
        answer: 2
    },
    {
        question: "The reduce phase in MapReduce aims to:",
        options: ["Distribute data across nodes", "Aggregate and summarize data", "Duplicate data for redundancy", "Transform data into splits"],
        answer: 1
    },
    {
        question: "The MapReduce combiner function is used to:",
        options: ["Filter data records", "Minimize data transferred between map and reduce tasks", "Split data into smaller blocks", "Replicate data for fault tolerance"],
        answer: 1
    },
    {
        question: "Which statement is true about the Shuffle phase in MapReduce?",
        options: ["It occurs after the reduce phase", "It transfers data from mappers to reducers", "It happens before data is split", "It combines data into a single output"],
        answer: 1
    },
    {
        question: "What advantage does MapReduce’s use of 'key-value pairs' provide?",
        options: ["Simple data sorting only", "Easy data partitioning and parallel processing", "Improved data security", "Enhanced real-time processing"],
        answer: 1
    },
    {
        question: "In a Hadoop cluster, if a node fails, Hadoop:",
        options: ["Stops processing immediately", "Reschedules tasks to other nodes", "Reboots the entire system", "Deletes the data on that node"],
        answer: 1
    },
    {
        question: "Why does Hadoop emphasize using commodity hardware?",
        options: ["To reduce costs", "For faster processing", "To minimize scalability", "To use high-performance machines"],
        answer: 0
    },
    {
        question: "What is the main function of the MapReduce framework?",
        options: ["Compressing data for storage", "Parallel processing of large data sets", "Storing data in local nodes", "Managing cloud resources"],
        answer: 1
    },
    {
        question: "Map tasks run on nodes where:",
        options: ["HDFS data blocks are located", "Job scheduling occurs", "Data backups are stored", "Cloud data is processed"],
        answer: 0
    },
    {
        question: "Why might a combiner function improve MapReduce performance?",
        options: ["By eliminating map tasks", "By reducing data shuffled across the network", "By decreasing disk storage requirements", "By increasing the number of reduce tasks"],
        answer: 1
    },
    {
        question: "Data locality helps in minimizing:",
        options: ["Network bandwidth usage", "Number of map tasks", "Reduce task load", "HDFS storage needs"],
        answer: 0
    },
    {
        question: "Which aspect of Hadoop ensures high availability of data?",
        options: ["YARN’s job scheduling", "Data locality optimization", "Data replication in HDFS", "Using cloud storage"],
        answer: 2
    },
    {
        question: "The primary purpose of Hadoop is to process data in real-time.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "MapReduce divides data processing into the 'map' and 'reduce' phases.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "Data is stored in HDFS as fixed-size blocks, typically 128 MB.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "YARN is responsible for data replication in Hadoop clusters.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "Hadoop’s fault tolerance means that lost data cannot be recovered.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "Map tasks in Hadoop are generally performed close to the data to reduce network traffic.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "Reducers process data before Mappers in the MapReduce framework.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "HDFS writes the output of map tasks directly to cloud storage for redundancy.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "Data locality in Hadoop aims to run tasks on the node where the data resides.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "The MapReduce combiner function can be used to minimize network data transfer between map and reduce phases.",
        options: ["True", "False"],
        answer: 0
    }


]





const bigdataQuestions3 = [
    {
        question: "Which component in Hadoop is responsible for reading data in MapReduce?",
        options: ["InputSplitter", "RecordSplitter", "DataParser", "BlockReader"],
        answer: 0
    },
    {
        question: "What is the purpose of the RecordReader in MapReduce?",
        options: ["To split input data into records", "To assign keys to data records", "To read and parse records", "To sort data records"],
        answer: 2
    },
    {
        question: "Which of the following InputFormats is used for processing binary data?",
        options: ["TextInputFormat", "NLineInputFormat", "KeyValueInputFormat", "SequenceFileInputFormat"],
        answer: 3
    },
    {
        question: "The default separator in KeyValueTextInputFormat is:",
        options: ["Space", "Tab", "Comma", "Colon"],
        answer: 1
    },
    {
        question: "NLineInputFormat ensures:",
        options: ["Each line is processed individually", "Mappers receive a fixed number of lines as input", "Each line has a unique key", "Lines are skipped based on byte offsets"],
        answer: 1
    },
    {
        question: "What is the primary function of a Mapper in a word count example?",
        options: ["Counts lines", "Counts words", "Sorts words", "Filters text"],
        answer: 1
    },
    {
        question: "In the Hadoop architecture, serialization is used for:",
        options: ["Converting data into human-readable form", "Converting structured objects into byte streams", "Storing data locally", "Simplifying data structures"],
        answer: 1
    },
    {
        question: "Deserialization in Hadoop refers to:",
        options: ["Converting byte streams back into structured objects", "Compressing data for storage", "Encrypting data for security", "Converting data to binary"],
        answer: 0
    },
    {
        question: "Why does Hadoop use classes like IntWritable instead of Java’s int?",
        options: ["Java’s int is faster but heavier", "Writable classes are more efficient for Hadoop", "Java’s int is not compatible with Hadoop", "Writables make Hadoop slower"],
        answer: 1
    },
    {
        question: "Which of these is a disadvantage of Hadoop?",
        options: ["Inexpensive hardware", "High latency in data access", "Supports multiple data types", "Efficient for small files"],
        answer: 1
    },
    {
        question: "A SequenceFile in Hadoop is designed to solve which problem?",
        options: ["High memory usage for NameNode", "Block allocation issues", "Redundant data storage", "Difficulties in serialization"],
        answer: 0
    },
    {
        question: "To process a large file in parallel in MapReduce, you should:",
        options: ["Use the default InputFormat", "Use a single mapper", "Avoid splitting the file", "Use SequenceFileInputFormat"],
        answer: 3
    },
    {
        question: "Which InputFormat is typically used for reading lines of text as key-value pairs?",
        options: ["SequenceFileInputFormat", "KeyValueInputFormat", "TextInputFormat", "BinaryInputFormat"],
        answer: 1
    },
    {
        question: "In a word count program, the Reducer takes as input:",
        options: ["Key-value pairs of words and counts", "Text-only data", "Binary data", "Map outputs without a key"],
        answer: 0
    },
    {
        question: "The default block size in HDFS is generally:",
        options: ["64 KB", "128 MB", "256 KB", "512 MB"],
        answer: 1
    },
    {
        question: "Which format is best for storing small binary files?",
        options: ["TextInputFormat", "SequenceFileInputFormat", "KeyValueTextInputFormat", "CSVInputFormat"],
        answer: 1
    },
    {
        question: "How does SequenceFile help manage memory in NameNode?",
        options: ["Uses compression for small files", "Combines many small files into one large file", "Converts files into binary format", "Divides large files into smaller blocks"],
        answer: 1
    },
    {
        question: "When NLineInputFormat is set with N=2, each mapper receives:",
        options: ["Two bytes of data", "Two lines of data", "Two files of data", "Two splits of data"],
        answer: 1
    },
    {
        question: "In MapReduce, a 'split' refers to:",
        options: ["A method to divide processing", "A file divided by block size", "A file segment for mappers", "A line in the file"],
        answer: 2
    },
    {
        question: "The reduce method’s purpose in a word count program is to:",
        options: ["Write data to HDFS", "Accumulate and output word counts", "Filter out duplicate words", "Assign keys to words"],
        answer: 1
    },
    {
        question: "True or False: Hadoop’s TextInputFormat is the default input format.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: KeyValueTextInputFormat is used when input records contain tab-separated key-value pairs.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: SequenceFile is ideal for handling large files with structured records only.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: Serialization in Hadoop converts structured data into binary.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: NLineInputFormat allows each mapper to receive a variable number of lines.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: The Mapper and Reducer classes in Hadoop must use the same key and value types.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: Hadoop is most efficient for processing a large number of small files.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: Writable classes in Hadoop are used to enable lightweight serialization.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: Hadoop’s HDFS is designed to have a large number of small blocks.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: In MapReduce, each mapper processes only one line of input by default.",
        options: ["True", "False"],
        answer: 1
    }
];



const bigdataQuestions4 = [
    {
        question: "What is the role of the InputSplitter class in Hadoop's MapReduce?",
        options: ["Writing data to HDFS", "Splitting input data for processing", "Reading data in JSON format", "Managing cache memory"],
        answer: 1
    },
    {
        question: "Which of the following is NOT a component of reading data in MapReduce?",
        options: ["InputSplitter", "RecordReader", "InputFormat", "DataMapper"],
        answer: 3
    },
    {
        question: "In MapReduce, what is 'side data'?",
        options: ["Data stored on the server side", "Auxiliary data needed by a job for processing", "User-generated data", "Temporary data"],
        answer: 1
    },
    {
        question: "Which technique is used to pass small pieces of metadata in MapReduce?",
        options: ["Distributed cache", "Job configuration", "HDFS replication", "File splitter"],
        answer: 1
    },
    {
        question: "Which of these is a method for managing side data in MapReduce?",
        options: ["Job configuration and InputFormat", "Distributed cache and Job configuration", "HDFS replication and RecordReader", "Data nodes and RecordReader"],
        answer: 1
    },
    {
        question: "What is the default size of the Hadoop Distributed Cache?",
        options: ["1 GB", "5 GB", "10 GB", "20 GB"],
        answer: 2
    },
    {
        question: "The distributed cache mechanism in Hadoop is primarily used for:",
        options: ["Storing metadata", "Caching large datasets in memory", "Copying files to nodes for use in tasks", "Managing MapReduce jobs"],
        answer: 2
    },
    {
        question: "Which of the following classes in MapReduce helps with serializing objects?",
        options: ["DistributedCache", "DefaultStringifier", "JobConf", "InputFormat"],
        answer: 1
    },
    {
        question: "What file format is typically used in the distributed cache for lookup tables?",
        options: ["CSV", "JSON", "XML", "No specific format is required"],
        answer: 3
    },
    {
        question: "What is the purpose of the setup method in a MapReduce Reducer?",
        options: ["To initialize resources before tasks begin", "To split data into blocks", "To send data to HDFS", "To finalize the MapReduce job"],
        answer: 0
    },
    {
        question: "Which method in MapReduce helps to manage the lifecycle and dependencies of cached files?",
        options: ["DefaultStringifier", "Context Configuration", "DistributedCache", "InputFormat"],
        answer: 2
    },
    {
        question: "Which join operation in MapReduce is performed during the map phase?",
        options: ["Reduce-side join", "Map-side join", "Shuffle join", "Output join"],
        answer: 1
    },
    {
        question: "Which join type in MapReduce requires input to be partitioned and sorted by key?",
        options: ["Map-side join", "Reduce-side join", "Shuffle join", "Input join"],
        answer: 0
    },
    {
        question: "Which MapReduce feature supports joining large datasets without a predefined structure?",
        options: ["Distributed cache", "Shuffle", "Reduce-side join", "Map-side join"],
        answer: 2
    },
    {
        question: "In a Reduce-side join, what is used as the map output key?",
        options: ["Random number", "Data type", "Join key", "Input format"],
        answer: 2
    },
    {
        question: "In MapReduce, Distributed Cache files are copied to each data node only once per job.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "A Map-side join is generally more efficient than a Reduce-side join.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "The RecordReader class in MapReduce is responsible for writing data to HDFS.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "The Hadoop Distributed Cache is used primarily for storing large, complex datasets permanently.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "Reduce-side joins require both datasets to go through the shuffle phase in MapReduce.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "Suppose we have two massive datasets, each containing billions of records, and we need to join them using a multi-column join condition. What is the most suitable approach for this scenario?",
        options: ["Traditional database SQL", "Distributed cache", "MapReduce join with multiple parallel processes", "All of the above"],
        answer: 2
    },
    {
        question: "If we have a large dataset and a small reference dataset that we need to use to filter the large dataset, what is the most efficient technique to minimize response time and optimize performance?",
        options: ["Join using traditional database SQL", "Use a distributed cache to store the reference data", "Perform the join using MapReduce with custom filters", "All of the above"],
        answer: 1
    },
    {
        question: "We have massive historical data that we want to join with real-time data to provide instant analytics. Which of the following methods is best suited to achieve real-time performance?",
        options: ["Traditional SQL with temporary operations", "Distributed cache with real-time data handling", "MapReduce with periodic updates", "A combination of distributed caching and real-time analytics"],
        answer: 3
    },
    {
        question: "When we have multiple small datasets in different data sources and we need to perform a join while ensuring high data quality and accuracy, what is the optimal approach for this scenario?",
        options: ["Traditional database SQL", "Use a distributed cache to perform the join", "Create data streams using MapReduce for small data processing", "All of the above"],
        answer: 0
    },
    {
        question: "If our data is distributed across multiple data centers around the world and we need to join this data while minimizing latency, which technique is best suited to achieve this goal?",
        options: ["Traditional SQL on a single server", "Distributed cache across multiple locations", "MapReduce with data distribution management", "A combination of distributed caching and MapReduce operations"],
        answer: 3
    }
]






const bigdataQuestions5 = [
    {
        question: "What is the primary function of HDFS in Hadoop?",
        options: ["Data analysis", "File storage for large files", "Low-latency data access", "Hardware management"],
        answer: 1
    },
    {
        question: "Which component is NOT a core part of Hadoop?",
        options: ["HDFS", "YARN", "MapReduce", "Spark"],
        answer: 3
    },
    {
        question: "In HDFS, how many default replicas are created for each data block?",
        options: ["1", "2", "3", "4"],
        answer: 2
    },
    {
        question: "What type of hardware does HDFS operate on?",
        options: ["Custom, high-performance hardware", "Commodity hardware", "Cloud-based hardware only", "Proprietary servers"],
        answer: 1
    },
    {
        question: "Which application is more suitable for low-latency data access instead of HDFS?",
        options: ["YARN", "Spark", "HBase", "MapReduce"],
        answer: 2
    },
    {
        question: "Which of the following is NOT suitable for HDFS?",
        options: ["Large data files", "High throughput data access", "Low-latency applications", "Data replication"],
        answer: 2
    },
    {
        question: "The NameNode in HDFS is primarily responsible for:",
        options: ["Storing data blocks", "Managing file system metadata", "Replicating data", "Node failure management"],
        answer: 1
    },
    {
        question: "Which scheduling policy is NOT used in YARN?",
        options: ["FIFO Scheduler", "Priority Scheduler", "Capacity Scheduler", "Fair Scheduler"],
        answer: 1
    },
    {
        question: "Which component in YARN allocates resources to applications?",
        options: ["Node Manager", "Application Manager", "Resource Manager", "NameNode"],
        answer: 2
    },
    {
        question: "What is a container in YARN?",
        options: ["A single node in the cluster", "A physical storage unit for data", "A collection of resources such as RAM, CPU cores, and disks", "A redundant backup of a job"],
        answer: 2
    },
    {
        question: "What does YARN stand for?",
        options: ["Yet Another Resource Network", "Yet Another Resource Negotiator", "Your Advanced Resource Network", "Your Algorithmic Resource Negotiator"],
        answer: 1
    },
    {
        question: "Which YARN component schedules applications according to policy?",
        options: ["NameNode", "Node Manager", "Application Master", "Scheduler"],
        answer: 3
    },
    {
        question: "Which of these is NOT a function of the Node Manager in YARN?",
        options: ["Reporting node health", "Allocating resources for tasks", "Managing the life cycle of containers", "Scheduling tasks in the cluster"],
        answer: 3
    },
    {
        question: "In the context of YARN, what is an Application Master responsible for?",
        options: ["Storing file system metadata", "Scheduling jobs in the cluster", "Managing the execution of tasks within containers", "Monitoring cluster health"],
        answer: 2
    },
    {
        question: "Which YARN scheduling policy divides cluster resources into multiple queues?",
        options: ["FIFO Scheduler", "Capacity Scheduler", "Fair Scheduler", "Priority Scheduler"],
        answer: 1
    },
    {
        question: "HDFS is designed to operate on high-cost, custom hardware only.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "YARN separates resource management from the data processing component.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "The NameNode in HDFS holds the actual data blocks.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "MapReduce in Hadoop 1 managed both job scheduling and task progress monitoring.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "In YARN, the equivalent of a TaskTracker from MapReduce 1 is a Node Manager.",
        options: ["True", "False"],
        answer: 0
    }
]




const bigdataQuestions6 = [

    {
        question: "What is the primary purpose of Apache Hive?",
        options: ["Real-time transaction processing", "Big data warehousing and analytics on Hadoop", "Stream processing of IoT data", "Graph database management"],
        answer: 1,
        explanation: "Hive was built by Facebook for data warehousing on top of Hadoop, enabling SQL-like querying of large datasets stored in HDFS."
    },

    {
        question: "Which company originally created Apache Hive?",
        options: ["Google", "Amazon", "Facebook", "Microsoft"],
        answer: 2,
        explanation: "Facebook created Hive to allow analysts with SQL skills to query huge volumes of data stored in Hadoop."
    },

    {
        question: "What is the key difference between Hive's 'schema on read' and traditional databases' 'schema on write'?",
        options: ["Hive validates data when loaded, traditional DBs when queried", "Traditional DBs validate data when loaded, Hive when queried", "Both validate data at query time", "Both validate data at load time"],
        answer: 1,
        explanation: "Traditional databases enforce schema at load time (schema on write), while Hive validates data when queried (schema on read)."
    },

    {
        question: "Which execution engine is NOT supported by Hive?",
        options: ["MapReduce", "Apache Tez", "Apache Spark", "Apache Kafka"],
        answer: 3,
        explanation: "Hive supports MapReduce (default), Tez, and Spark as execution engines, but not Kafka (which is for stream processing)."
    },

    {
        question: "What type of updates does traditional Hive primarily support?",
        options: ["Fine-grained cell updates", "Coarse-grained row/partition updates", "Real-time streaming updates", "In-place file updates"],
        answer: 1,
        explanation: "Traditional Hive uses coarse-grained updates, rewriting entire rows or partitions rather than updating individual cells."
    },

    {
        question: "From which version did Hive introduce ACID transactions?",
        options: ["Hive 0.10", "Hive 0.13", "Hive 0.14", "Hive 1.0"],
        answer: 2,
        explanation: "ACID transactions were introduced in Hive 0.13, with finer-grained updates becoming possible from version 0.14."
    },

    {
        question: "What is the default Metastore configuration in Hive?",
        options: ["Remote Metastore", "Local Metastore with MySQL", "Embedded Metastore with Derby", "Cloud Metastore"],
        answer: 2,
        explanation: "The default embedded Metastore uses Derby database running in the same JVM as Hive service."
    },

    {
        question: "Which file format is optimized for columnar storage and used with Hive ACID tables?",
        options: ["CSV", "JSON", "ORC (Optimized Row Columnar)", "Parquet"],
        answer: 2,
        explanation: "ORC file format is optimized for columnar storage and works well with Hive's ACID transactional features."
    },

    {
        question: "What is Beeline in Hive?",
        options: ["A web interface", "A JDBC-based command line interface", "A visualization tool", "A data ingestion tool"],
        answer: 1,
        explanation: "Beeline is a JDBC-based CLI that can connect to HiveServer2, serving as an alternative to the traditional CLI."
    },

    {
        question: "Which component of Hive architecture is responsible for converting HiveQL to execution plans?",
        options: ["Metastore", "Driver", "Compiler", "Execution Engine"],
        answer: 2,
        explanation: "The Query Compiler parses HiveQL, performs semantic analysis, and converts queries into execution plans (MapReduce/Tez/Spark jobs)."
    },

    {
        question: "What is the main advantage of 'schema on read'?",
        options: ["Faster query performance", "Faster initial data load", "Better data consistency", "Automatic indexing"],
        answer: 1,
        explanation: "Schema on read enables faster initial data loading since data is simply copied/moved without validation or transformation."
    },

    {
        question: "Which of these is a Hive alternative that uses HBase as its underlying storage?",
        options: ["Apache Drill", "Presto", "Apache Phoenix", "Spark SQL"],
        answer: 2,
        explanation: "Apache Phoenix provides SQL access to HBase, converting queries into HBase scans."
    },

    {
        question: "What limitation does the embedded Metastore configuration have?",
        options: ["It requires MySQL", "It only works with HDFS", "It allows only one Hive session at a time", "It doesn't support ACID"],
        answer: 2,
        explanation: "The embedded Derby database in default Metastore allows only one session at a time to access the Metastore."
    },

    {
        question: "How does Hive handle data in managed tables?",
        options: ["Leaves data in original location", "Moves data to Hive warehouse directory", "Stores data in memory only", "Encrypts data in transit"],
        answer: 1,
        explanation: "For managed tables, Hive moves data into its warehouse directory (hdfs://user/hive/warehouse/)."
    },

    {
        question: "What is HiveServer2's improvement over the original HiveServer?",
        options: ["Supports only MapReduce", "Adds authentication and multi-user concurrency", "Eliminates need for Metastore", "Uses only embedded Derby"],
        answer: 1,
        explanation: "HiveServer2 added authentication and better support for multiple concurrent users compared to the original HiveServer."
    },

    {
        question: "Which optimization technique does Hive's query optimizer apply?",
        options: ["Predicate pushdown", "Data encryption", "Automatic partitioning", "Real-time indexing"],
        answer: 0,
        explanation: "Hive's optimizer uses predicate pushdown (filtering data early) and join optimization to improve query performance."
    },

    {
        question: "What does Hive use for its metadata storage?",
        options: ["HDFS", "Local file system", "Relational database", "In-memory cache"],
        answer: 2,
        explanation: "Hive stores metadata (table schemas, partitions, etc.) in a relational database (Metastore), not in HDFS."
    },

    {
        question: "Which client allows programming language interaction via Thrift?",
        options: ["JDBC Driver", "ODBC Driver", "Thrift Client", "CLI"],
        answer: 2,
        explanation: "The Thrift Client allows applications in various languages to interact with HiveServer via Thrift protocol."
    },

    {
        question: "What is the main trade-off with coarse-grained updates in Hive?",
        options: ["Better ACID compliance", "Higher performance for small changes", "Performance overhead for large datasets", "Automatic indexing"],
        answer: 2,
        explanation: "Coarse-grained updates rewrite entire rows/partitions, causing performance overhead when updating large datasets."
    },

    {
        question: "Which Hive alternative was created by Facebook and uses a DAG execution engine?",
        options: ["Apache Drill", "Presto", "Impala", "Apache Phoenix"],
        answer: 1,
        explanation: "Presto is Facebook's distributed SQL query engine that uses a custom DAG execution model."
    },

    {
        question: "How does Hive handle DELETE operations in ACID tables?",
        options: ["Physical deletion from files", "Marks rows as deleted in delta files", "Moves data to trash directory", "Archives old partitions"],
        answer: 1,
        explanation: "With ACID, deletes are stored as markers in delta files, which are later merged by compaction jobs."
    },

    {
        question: "What is the purpose of the Hive Driver?",
        options: ["Stores metadata", "Executes MapReduce jobs", "Receives queries and initiates processing", "Manages HDFS storage"],
        answer: 2,
        explanation: "The Driver receives queries from clients and coordinates the compilation, optimization, and execution process."
    },

    {
        question: "Which statement about external tables is true?",
        options: ["Hive manages data location", "Data is moved to warehouse directory", "Hive only references external data location", "Cannot be partitioned"],
        answer: 2,
        explanation: "External tables point to data outside Hive's warehouse directory; Hive doesn't manage or move this data."
    },

    {
        question: "What problem does remote Metastore configuration solve?",
        options: ["Eliminates need for database", "Allows multiple Hive services to share Metastore", "Makes Hive faster than Impala", "Enables schema on write"],
        answer: 1,
        explanation: "Remote Metastore allows multiple Hive services to access a shared Metastore, enabling better concurrency and management."
    },

    {
        question: "Which Hive component monitors query execution progress?",
        options: ["Metastore", "Compiler", "Execution Engine", "Driver"],
        answer: 2,
        explanation: "The Execution Engine monitors job progress when queries are submitted to Hadoop/Tez/Spark."
    },

    {
        question: "What is Impala's key advantage over Hive on MapReduce?",
        options: ["Better ACID support", "Interactive query performance", "More SQL features", "Built-in machine learning"],
        answer: 1,
        explanation: "Impala provides much faster interactive query performance by using dedicated daemons instead of MapReduce batch jobs."
    },

    {
        question: "How can you switch Hive's execution engine to Spark?",
        options: ["SET hive.execution.engine=spark;", "USE spark;", "CONFIGURE engine spark;", "ALTER SESSION SET engine=spark;"],
        answer: 0,
        explanation: "The command 'SET hive.execution.engine=spark;' switches Hive's execution engine to Spark."
    },

    {
        question: "What does Hive use for authentication in HiveServer2?",
        options: ["Kerberos", "LDAP only", "No authentication", "Built-in user database"],
        answer: 0,
        explanation: "HiveServer2 supports various authentication methods including Kerberos for secure access."
    },

    {
        question: "Which is NOT a Hive service?",
        options: ["CLI", "HiveServer2", "Beeline", "HDFS"],
        answer: 3,
        explanation: "HDFS is Hadoop's file system, not a Hive service. CLI, HiveServer2, and Beeline are Hive services."
    },

    {
        question: "What happens when you load data into a managed table?",
        options: ["Data is copied to HDFS", "Data is moved to warehouse directory", "Data remains in place", "Data is compressed automatically"],
        answer: 1,
        explanation: "Loading data into managed tables moves the data files into Hive's warehouse directory for that table."
    },

    {
        question: "Which database is commonly used with local Metastore?",
        options: ["Derby", "SQLite", "MySQL", "PostgreSQL"],
        answer: 2,
        explanation: "MySQL is a popular choice for local Metastore configuration, running separately from Hive service."
    },

    {
        question: "What type of operations does Hive's traditional architecture optimize for?",
        options: ["Real-time updates", "Full-table scans and batch processing", "Transactional consistency", "Graph traversals"],
        answer: 1,
        explanation: "Hive was designed for batch processing with full-table scans, not real-time transactions."
    },

    {
        question: "Which component allows BI tools to connect to Hive?",
        options: ["Thrift Client", "JDBC Driver", "ODBC Driver", "CLI"],
        answer: 2,
        explanation: "ODBC Driver enables Business Intelligence tools that support ODBC protocol to connect to Hive."
    },

    {
        question: "What is the benefit of predicate pushdown?",
        options: ["Reduces network traffic", "Increases data redundancy", "Simplifies query syntax", "Enables real-time processing"],
        answer: 0,
        explanation: "Predicate pushdown applies filters early in processing, reducing data movement and improving performance."
    },

    {
        question: "How does Hive handle concurrent writes with ACID?",
        options: ["Uses table/partition level locking", "Allows unlimited concurrent writes", "Uses optimistic locking only", "Doesn't support concurrent writes"],
        answer: 0,
        explanation: "Hive ACID tables support table and partition level locking to manage concurrent write operations."
    },

    {
        question: "What makes external tables useful?",
        options: ["Better performance", "Data ownership remains outside Hive", "Automatic compression", "Built-in indexing"],
        answer: 1,
        explanation: "External tables allow querying data in place without Hive taking ownership, useful for shared datasets."
    },

];


const bigdataQuestions7 = [

    {
        question: "Where does Hive typically store table metadata?",
        options: ["In HDFS", "In a relational database (Metastore)", "In local file system only", "In memory cache"],
        answer: 1,
        explanation: "Hive stores metadata (schema, partitions, etc.) in a relational database called the Metastore, not in HDFS."
    },

    {
        question: "What happens to data when it is loaded into a managed table in Hive?",
        options: ["It remains in its original location", "It is moved to Hive's warehouse directory", "It is deleted from HDFS", "It is compressed automatically"],
        answer: 1,
        explanation: "For managed tables, Hive moves data into its warehouse directory (e.g., hdfs://user/hive/warehouse/)."
    },

    {
        question: "When you drop an external table in Hive, what happens to the data?",
        options: ["Data is deleted", "Data is moved to trash", "Data remains untouched; only metadata is removed", "Data is archived"],
        answer: 2,
        explanation: "Dropping an external table only removes metadata from Hive; the actual data files remain in their original location."
    },

    {
        question: "Which clause is used to create an external table in Hive?",
        options: ["MANAGED TABLE", "EXTERNAL TABLE", "TEMPORARY TABLE", "LOCAL TABLE"],
        answer: 1,
        explanation: "The 'EXTERNAL' keyword is used to create an external table, e.g., CREATE EXTERNAL TABLE ..."
    },

    {
        question: "What is the default storage format in Hive?",
        options: ["ORC", "Parquet", "Text format", "Sequence file"],
        answer: 2,
        explanation: "Text format is Hive's default storage format, with fields delimited by specified characters."
    },

    {
        question: "Which storage format is binary and column-oriented?",
        options: ["CSV", "JSON", "ORC", "Avro (row-oriented)"],
        answer: 2,
        explanation: "ORC (Optimized Row Columnar) is a binary, column-oriented storage format optimized for Hive."
    },

    {
        question: "What is the main benefit of partitioning in Hive?",
        options: ["Reduces storage space", "Improves query performance by scanning only relevant partitions", "Automatically compresses data", "Enables real-time updates"],
        answer: 1,
        explanation: "Partitioning allows queries to scan only relevant partitions instead of the entire table, improving performance."
    },

    {
        question: "Which command enables dynamic partitioning in Hive?",
        options: ["SET hive.exec.dynamic.partition=true", "SET hive.exec.dynamic.partition.mode=nonstrict", "ENABLE PARTITIONING", "ALTER TABLE ... PARTITION BY"],
        answer: 1,
        explanation: "Setting 'hive.exec.dynamic.partition.mode=nonstrict' allows dynamic partitioning during INSERT operations."
    },

    {
        question: "What is bucketing in Hive?",
        options: ["Splitting data into directories based on column values", "Dividing data into files based on hash function of a column", "Compressing data into blocks", "Replicating data across nodes"],
        answer: 1,
        explanation: "Bucketing divides data into a fixed number of files (buckets) based on a hash function on a column."
    },

    {
        question: "Which property must be set to enforce bucketing during data insertion?",
        options: ["hive.enforce.bucketing=true", "hive.bucketing.enabled=yes", "SET bucketing=on", "ENFORCE BUCKETS"],
        answer: 0,
        explanation: "Setting 'hive.enforce.bucketing=true' ensures data is physically bucketed according to the bucket definition."
    },

    {
        question: "What is a key advantage of bucketing over partitioning?",
        options: ["Unlimited number of buckets", "Better compression", "Controlled number of files (buckets) regardless of distinct values", "Automatic indexing"],
        answer: 2,
        explanation: "Bucketing allows you to specify a fixed number of buckets, avoiding the 'too many directories' problem of partitioning."
    },

    {
        question: "Which clause is used to define bucketing in a CREATE TABLE statement?",
        options: ["PARTITIONED BY", "CLUSTERED BY ... INTO ... BUCKETS", "BUCKETED BY", "HASHED BY"],
        answer: 1,
        explanation: "The CLUSTERED BY ... INTO ... BUCKETS clause defines bucketing columns and the number of buckets."
    },

    {
        question: "When should you use managed tables in Hive?",
        options: ["When data is shared with other tools", "When you want Hive to manage the data lifecycle", "When data must remain in original location", "When using external storage like S3"],
        answer: 1,
        explanation: "Managed tables are best when Hive is the sole tool managing the data (creation, deletion, storage)."
    },

    {
        question: "What is the purpose of the LOCATION clause in an external table?",
        options: ["Specifies Hive's warehouse directory", "Specifies where Hive should store metadata", "Specifies the external data path in HDFS or other filesystems", "Defines the Metastore location"],
        answer: 2,
        explanation: "The LOCATION clause points to the external data path; Hive does not move or manage data there."
    },

    {
        question: "Which storage format is human-readable?",
        options: ["ORC", "Parquet", "Text format", "Sequence file"],
        answer: 2,
        explanation: "Text format (e.g., CSV, TSV) is human-readable, unlike binary formats like ORC or Parquet."
    },

    {
        question: "What happens if you drop a managed table?",
        options: ["Only metadata is deleted", "Data and metadata are both deleted", "Data is moved to external location", "Table is archived"],
        answer: 1,
        explanation: "Dropping a managed table removes both metadata (from Metastore) and data (from warehouse directory)."
    },

    {
        question: "Which of these is a row-oriented binary format?",
        options: ["ORC", "Parquet", "Avro", "RCFile"],
        answer: 2,
        explanation: "Avro is a row-oriented binary format, while ORC and Parquet are column-oriented."
    },

    {
        question: "What is the main benefit of column-oriented formats?",
        options: ["Faster for reading entire rows", "Better for queries that access few columns", "Easier schema evolution", "Smaller memory footprint"],
        answer: 1,
        explanation: "Column-oriented formats are efficient when queries access only a subset of columns, reducing I/O."
    },

    {
        question: "How does Hive determine which bucket a row belongs to?",
        options: ["Random distribution", "Round-robin", "Hash function on the bucketed column", "Alphabetical order"],
        answer: 2,
        explanation: "Hive uses a hash function on the bucketed column to assign each row to a specific bucket."
    },

    {
        question: "What is a common use case for external tables?",
        options: ["When Hive should manage data deletion", "When multiple tools need to access the same dataset", "When data must be compressed automatically", "When using only HiveQL for processing"],
        answer: 1,
        explanation: "External tables are ideal when data is shared across multiple tools (e.g., Pig, Spark, Hive)."
    },

    {
        question: "Which statement is true about partitioning and bucketing?",
        options: ["Both control the number of output files", "Partitioning uses hash function, bucketing uses column values", "Bucketing can be applied on partitioned tables", "Partitioning always improves performance more than bucketing"],
        answer: 2,
        explanation: "Bucketing can be applied on partitioned tables to further organize data within each partition."
    },

    {
        question: "What is the effect of SET hive.exec.dynamic.partition.mode=nonstrict?",
        options: ["Disables partitioning", "Allows dynamic partitioning without specifying all partition columns", "Forces strict schema validation", "Enables automatic bucket merging"],
        answer: 1,
        explanation: "This setting allows dynamic partitioning where partition column values are determined at runtime from the data."
    },

    {
        question: "Which format typically offers better compression: text or binary?",
        options: ["Text format", "Binary format (e.g., ORC)", "Both are similar", "Depends on data type"],
        answer: 1,
        explanation: "Binary formats like ORC/Parquet provide better compression due to columnar storage and encoding schemes."
    },

    {
        question: "In bucketing, records with the same bucketed column value will:",
        options: ["Be randomly distributed", "Always be in the same bucket", "Be stored in different partitions", "Be deleted"],
        answer: 1,
        explanation: "Hive's hash function ensures that identical values in the bucketed column always land in the same bucket."
    },

    {
        question: "What is a disadvantage of partitioning with high-cardinality columns?",
        options: ["Too few directories", "Too many small files/directories, straining NameNode", "Data duplication", "Slower hash computation"],
        answer: 1,
        explanation: "High-cardinality partitioning creates many small partitions, leading to many HDFS directories and NameNode overhead."
    },

];


const bigdataQuestions8 = [

    {
        question: "What is Apache Spark primarily designed to be?",
        options: ["A database management system", "A cluster computing platform that is fast and general-purpose", "A web server framework", "A virtualization tool"],
        answer: 1,
        explanation: "Apache Spark is a fast, general-purpose cluster computing platform designed for large-scale data processing."
    },

    {
        question: "Which of the following is NOT a key characteristic of Spark?",
        options: ["Speed (in-memory computation)", "Generality (supports multiple workloads)", "Ease of use (multiple APIs)", "Requires Hadoop to run"],
        answer: 3,
        explanation: "Spark can run independently without Hadoop; it simply supports Hadoop data sources and YARN/Mesos cluster managers."
    },

    {
        question: "What is the core abstraction in Spark?",
        options: ["DataFrame", "Dataset", "Resilient Distributed Dataset (RDD)", "Graph"],
        answer: 2,
        explanation: "RDD (Resilient Distributed Dataset) is Spark's fundamental data structure—an immutable, distributed collection of objects."
    },

    {
        question: "Which Spark component is used for structured data processing?",
        options: ["Spark Streaming", "Spark SQL", "MLlib", "GraphX"],
        answer: 1,
        explanation: "Spark SQL is Spark's module for structured data processing, supporting SQL and HiveQL queries."
    },

    {
        question: "What type of processing does Spark Streaming handle?",
        options: ["Batch processing", "Real-time stream processing", "Graph processing", "Machine learning only"],
        answer: 1,
        explanation: "Spark Streaming processes live data streams in real-time, such as log files or message queues."
    },

    {
        question: "Which library provides machine learning functionality in Spark?",
        options: ["Spark SQL", "Spark Streaming", "MLlib", "GraphX"],
        answer: 2,
        explanation: "MLlib is Spark's scalable machine learning library offering algorithms like classification, regression, and clustering."
    },

    {
        question: "What does GraphX specialize in?",
        options: ["Stream processing", "Graph processing and parallel computations", "SQL queries", "Data ingestion"],
        answer: 1,
        explanation: "GraphX is a library for graph processing (e.g., social networks) and graph-parallel computations."
    },

    {
        question: "Which cluster manager is included with Spark itself?",
        options: ["YARN", "Mesos", "Standalone Scheduler", "Kubernetes"],
        answer: 2,
        explanation: "Spark includes its own simple cluster manager called the Standalone Scheduler."
    },

    {
        question: "What is a key feature of RDDs?",
        options: ["Mutable", "Immutable", "Single-partition only", "Stored only on disk"],
        answer: 1,
        explanation: "RDDs are immutable; once created, they cannot be changed. Transformations create new RDDs."
    },

    {
        question: "What are the two types of operations on RDDs?",
        options: ["Input and Output", "Transformations and Actions", "Read and Write", "Map and Reduce"],
        answer: 1,
        explanation: "RDDs support Transformations (create new RDDs) and Actions (return results to driver or save data)."
    },

    {
        question: "What is lazy evaluation in Spark?",
        options: ["Immediate execution of transformations", "Transformations are executed only when an action is called", "Actions are delayed until transformations complete", "Only narrow transformations are lazy"],
        answer: 1,
        explanation: "Spark uses lazy evaluation: transformations are not executed until an action is triggered."
    },

    {
        question: "Which transformation is considered 'narrow'?",
        options: ["groupByKey", "reduceByKey", "map", "join"],
        answer: 2,
        explanation: "map() is a narrow transformation; it processes data within a single partition without shuffling."
    },

    {
        question: "Which transformation is considered 'wide'?",
        options: ["filter", "map", "union", "reduceByKey"],
        answer: 3,
        explanation: "reduceByKey is a wide transformation requiring data shuffling across partitions."
    },

    {
        question: "What does the filter(func) transformation do?",
        options: ["Applies a function to each element", "Selects elements where func returns true", "Flattens nested structures", "Samples data randomly"],
        answer: 1,
        explanation: "filter(func) returns a new RDD containing only elements for which func returns true."
    },

    {
        question: "Which action returns all elements to the driver program?",
        options: ["count()", "collect()", "take(n)", "first()"],
        answer: 1,
        explanation: "collect() returns all elements of the RDD as an array to the driver program."
    },

    {
        question: "What does countByKey() action do?",
        options: ["Counts total elements", "Counts elements per key in (K,V) RDDs", "Returns first key", "Samples by key"],
        answer: 1,
        explanation: "countByKey() returns a hash map of (K, Int) pairs counting occurrences of each key."
    },

    {
        question: "Which storage system is NOT natively supported by Spark?",
        options: ["HDFS", "Amazon S3", "Local filesystem", "Microsoft SQL Server (without connector)"],
        answer: 3,
        explanation: "Spark supports Hadoop-compatible systems (HDFS, S3, local FS) but needs connectors for databases like SQL Server."
    },

    {
        question: "What is the benefit of tight integration in Spark's stack?",
        options: ["Each component runs independently", "Improvements in core engine benefit all components", "Requires separate deployment for each library", "Limited functionality per component"],
        answer: 1,
        explanation: "Tight integration means optimizations in Spark Core improve SQL, MLlib, Streaming, etc., automatically."
    },

    {
        question: "Which language is NOT supported by Spark APIs?",
        options: ["Python", "Java", "Scala", "C++"],
        answer: 3,
        explanation: "Spark provides APIs for Python, Java, Scala, R, and SQL, but not for C++."
    },

    {
        question: "What is the purpose of coalesce(numPartitions)?",
        options: ["Increase partitions with shuffling", "Decrease partitions without full shuffle", "Sort partitions", "Join two RDDs"],
        answer: 1,
        explanation: "coalesce() reduces the number of partitions without a full shuffle, optimizing data locality."
    },

    {
        question: "Which transformation performs a Cartesian product?",
        options: ["join", "union", "cartesian", "intersection"],
        answer: 2,
        explanation: "cartesian() returns all possible pairs between elements of two RDDs."
    },

    {
        question: "What does saveAsTextFile(path) do?",
        options: ["Saves RDD as binary sequence file", "Saves RDD as text lines", "Saves RDD as Java objects", "Collects RDD to driver"],
        answer: 1,
        explanation: "saveAsTextFile() writes each RDD element as a text line, calling toString() on each."
    },

    {
        question: "What is a partition in Spark?",
        options: ["A subset of nodes in cluster", "A logical division of an RDD distributed across nodes", "A type of transformation", "A storage format"],
        answer: 1,
        explanation: "Partitions are chunks of an RDD distributed across cluster nodes for parallel processing."
    },

    {
        question: "Which action returns the first element of an RDD?",
        options: ["take(1)", "first()", "Both first() and take(1)", "collect()[0]"],
        answer: 2,
        explanation: "Both first() and take(1) return the first element, but first() is semantically clearer."
    },

    {
        question: "What is the difference between repartition() and coalesce()?",
        options: ["coalesce() always shuffles, repartition() doesn't", "repartition() can increase partitions with shuffle, coalesce() reduces without full shuffle", "They are identical", "repartition() is for sorting only"],
        answer: 1,
        explanation: "repartition() reshuffles data to increase/decrease partitions; coalesce() reduces partitions minimizing shuffle."
    },

    {
        question: "Which transformation is used to remove duplicates?",
        options: ["distinct()", "unique()", "dropDuplicates()", "filterDuplicates()"],
        answer: 0,
        explanation: "distinct() returns a new RDD with duplicate elements removed."
    },

    {
        question: "What does the flatMap(func) transformation do?",
        options: ["Maps each element to one output", "Maps each element to 0 or more outputs (returns a sequence)", "Flattens partitions only", "Maps keys only"],
        answer: 1,
        explanation: "flatMap() applies a function that returns a sequence for each element, flattening the results."
    },

    {
        question: "Which component enables combining SQL with complex analytics in Spark?",
        options: ["Spark Core", "Spark SQL", "Spark Streaming", "GraphX"],
        answer: 1,
        explanation: "Spark SQL allows mixing SQL queries with programmatic RDD operations in a single application."
    },

    {
        question: "What is the primary advantage of in-memory computation in Spark?",
        options: ["Lower cost", "Faster processing for iterative algorithms", "Better compression", "Easier debugging"],
        answer: 1,
        explanation: "In-memory computation significantly speeds up iterative algorithms and interactive queries."
    },

    {
        question: "Which transformation is used to combine two RDDs by key?",
        options: ["union", "join", "cogroup", "cartesian"],
        answer: 1,
        explanation: "join() combines two (K,V) and (K,W) RDDs into (K, (V,W)) pairs."
    },

    {
        question: "What does foreach(func) action do?",
        options: ["Returns a result to driver", "Applies func to each element for side effects", "Counts elements", "Saves RDD to file"],
        answer: 1,
        explanation: "foreach() applies a function to each element, typically for side effects like writing to external storage."
    },

    {
        question: "Which of these is a wide transformation?",
        options: ["map", "filter", "sample", "groupByKey"],
        answer: 3,
        explanation: "groupByKey is a wide transformation requiring data shuffling across partitions."
    },

    {
        question: "What is the role of the Driver program in Spark?",
        options: ["Stores RDD partitions", "Runs tasks on worker nodes", "Manages job execution and coordination", "Acts as a cluster manager"],
        answer: 2,
        explanation: "The Driver program runs the main() function, creates SparkContext, and coordinates job execution."
    },

    {
        question: "Which file format is NOT directly supported by Spark?",
        options: ["Text files", "SequenceFiles", "Parquet", "Excel files (.xlsx)"],
        answer: 3,
        explanation: "Spark supports text, SequenceFiles, Parquet, Avro, etc., but not Excel files without additional libraries."
    },

    {
        question: "What is the purpose of takeSample() action?",
        options: ["Takes first n elements", "Takes a random sample of elements", "Takes ordered elements", "Takes elements by key"],
        answer: 1,
        explanation: "takeSample() returns a random sample of elements from the RDD, with or without replacement."
    },

];


const bigdataQuestions9 = [

    {
        question: "What is the primary purpose of broadcast variables in Spark?",
        options: ["To distribute large read-only data efficiently to all worker nodes", "To store mutable variables across tasks", "To perform reductions across partitions", "To cache RDDs in memory"],
        answer: 0,
        explanation: "Broadcast variables allow efficient distribution of large, read-only data to all nodes in the cluster, reducing network overhead."
    },

    {
        question: "How are broadcast variables created in Spark?",
        options: ["SparkContext.broadcast(v)", "SparkSession.broadcast(v)", "Broadcast.create(v)", "sc.createBroadcast(v)"],
        answer: 0,
        explanation: "Broadcast variables are created using SparkContext.broadcast(v), where 'v' is the variable to be broadcast."
    },

    {
        question: "What is the main benefit of caching/persisting an RDD in Spark?",
        options: ["Reduces storage space", "Speeds up future actions on the same data", "Encrypts data", "Compresses data automatically"],
        answer: 1,
        explanation: "Caching stores RDD partitions in memory or disk, allowing faster access for subsequent operations, especially in iterative algorithms."
    },

    {
        question: "Which storage level stores RDD as deserialized Java objects in memory only?",
        options: ["MEMORY_ONLY", "MEMORY_AND_DISK", "DISK_ONLY", "MEMORY_ONLY_SER"],
        answer: 0,
        explanation: "MEMORY_ONLY stores RDD as deserialized Java objects in JVM memory; if memory is insufficient, some partitions are recomputed."
    },

    {
        question: "Which storage level replicates each partition on two cluster nodes?",
        options: ["MEMORY_ONLY_2", "MEMORY_AND_DISK_SER", "DISK_ONLY", "MEMORY_ONLY_SER"],
        answer: 0,
        explanation: "Levels ending with '_2' (e.g., MEMORY_ONLY_2) replicate each partition on two nodes for fault tolerance."
    },

    {
        question: "What is a DataFrame in Spark?",
        options: ["A low-level distributed collection of Java objects", "A distributed collection of data organized into named columns", "A strongly-typed collection of Scala/Java objects", "A graph structure for social networks"],
        answer: 1,
        explanation: "DataFrame is a distributed collection of data organized into named columns, similar to a table in a relational database."
    },

    {
        question: "What is a key advantage of Datasets over DataFrames?",
        options: ["Support for Python and R", "Compile-time type safety", "No schema required", "Lazy evaluation"],
        answer: 1,
        explanation: "Datasets provide compile-time type safety, catching errors early in development, unlike DataFrames which are schema-based at runtime."
    },

    {
        question: "Which API is optimized with Catalyst optimizer in Spark?",
        options: ["RDD only", "DataFrame and Dataset", "GraphX only", "Spark Streaming"],
        answer: 1,
        explanation: "DataFrame and Dataset APIs use Catalyst optimizer for query optimization and performance improvements."
    },

    {
        question: "Which of the following is NOT a valid save mode in Spark SQL?",
        options: ["ErrorIfExists", "Append", "Overwrite", "Skip"],
        answer: 3,
        explanation: "Valid save modes are ErrorIfExists (default), Append, Overwrite, and Ignore (not Skip)."
    },

    {
        question: "What is the role of the driver process in Spark architecture?",
        options: ["Executes tasks on worker nodes", "Manages cluster resources", "Runs the main() function, schedules tasks, and coordinates executors", "Stores cached data"],
        answer: 2,
        explanation: "The driver process executes the main program, schedules tasks across executors, and manages the Spark application."
    },

    {
        question: "Which component is responsible for actually executing tasks in Spark?",
        options: ["Driver", "Cluster Manager", "Executor", "Spark Session"],
        answer: 2,
        explanation: "Executors run on worker nodes and execute tasks assigned by the driver, reporting back results."
    },

    {
        question: "What is SparkSession in Spark 2.0+?",
        options: ["A low-level API for RDDs", "The unified entry point for working with structured data", "A cluster manager", "A storage level"],
        answer: 1,
        explanation: "SparkSession is the unified entry point for DataFrame/Dataset APIs, replacing SQLContext and HiveContext."
    },

    {
        question: "How is SparkSession typically created?",
        options: ["SparkSession.create()", "SparkSession.builder().appName().getOrCreate()", "new SparkSession()", "SparkContext.createSession()"],
        answer: 1,
        explanation: "SparkSession is built using the builder pattern: SparkSession.builder().appName('name').getOrCreate()."
    },

    {
        question: "What is the relationship between SparkContext and SparkSession in Spark 2.0+?",
        options: ["They are the same", "SparkSession contains SparkContext", "SparkContext replaces SparkSession", "They are independent"],
        answer: 1,
        explanation: "In Spark 2.x, SparkSession encapsulates SparkContext, SQLContext, and HiveContext for unified access."
    },

    {
        question: "Which language does NOT support Dataset API?",
        options: ["Scala", "Java", "Python", "R"],
        answer: 2,
        explanation: "Dataset API is only available in Scala and Java due to its compile-time type safety; Python and R support DataFrames only."
    },

    {
        question: "What is the default save mode in Spark SQL?",
        options: ["Append", "Overwrite", "ErrorIfExists", "Ignore"],
        answer: 2,
        explanation: "ErrorIfExists is the default save mode; it throws an error if data already exists at the target location."
    },

    {
        question: "Which storage level is most CPU-intensive to read due to serialization?",
        options: ["MEMORY_ONLY", "MEMORY_ONLY_SER", "DISK_ONLY", "MEMORY_AND_DISK"],
        answer: 1,
        explanation: "MEMORY_ONLY_SER stores serialized objects, saving space but requiring CPU for deserialization when reading."
    },

    {
        question: "What is a key difference between RDD and DataFrame?",
        options: ["RDD has schema, DataFrame does not", "DataFrame has schema, RDD does not", "RDD is faster for SQL queries", "DataFrame is lower-level"],
        answer: 1,
        explanation: "DataFrame has a schema (column names and types), while RDD is an unstructured collection of objects."
    },

    {
        question: "Which cluster manager is built into Spark?",
        options: ["YARN", "Mesos", "Standalone Scheduler", "Kubernetes"],
        answer: 2,
        explanation: "Spark includes its own built-in cluster manager called Standalone Scheduler."
    },

    {
        question: "What does SaveMode.Ignore do?",
        options: ["Overwrites existing data", "Appends new data", "Throws an error if data exists", "Does nothing if data exists"],
        answer: 3,
        explanation: "SaveMode.Ignore skips saving if data already exists, similar to 'CREATE TABLE IF NOT EXISTS' in SQL."
    },

    {
        question: "Which component serializes objects in Datasets efficiently?",
        options: ["Java Serializer", "Kryo", "Encoder", "Parquet"],
        answer: 2,
        explanation: "Datasets use specialized Encoders for efficient serialization, enabling operations without full deserialization."
    },

    {
        question: "What is the purpose of the Catalyst optimizer?",
        options: ["Manage cluster resources", "Optimize query execution plans for DataFrames/Datasets", "Schedule tasks", "Broadcast variables"],
        answer: 1,
        explanation: "Catalyst optimizer optimizes query plans for DataFrames/Datasets, improving performance through transformations like predicate pushdown."
    },

    {
        question: "Which of these is a valid deployment mode for Spark?",
        options: ["Local", "Standalone", "YARN", "All of the above"],
        answer: 3,
        explanation: "Spark supports local mode, standalone cluster mode, and cluster managers like YARN and Mesos."
    },

    {
        question: "What is broadcast variable's .value() method used for?",
        options: ["To update the variable", "To retrieve the broadcasted data", "To delete the variable", "To serialize the variable"],
        answer: 1,
        explanation: "broadcastVar.value() returns the broadcasted data on worker nodes."
    },

    {
        question: "Which storage level spills excess partitions to disk?",
        options: ["MEMORY_ONLY", "MEMORY_AND_DISK", "DISK_ONLY", "MEMORY_ONLY_SER"],
        answer: 1,
        explanation: "MEMORY_AND_DISK stores partitions in memory; if memory is full, spills remaining partitions to disk."
    },

    {
        question: "What does the driver submit to the cluster manager?",
        options: ["Serialized RDD graph/tasks", "Raw data files", "Executable binaries", "SQL queries only"],
        answer: 0,
        explanation: "The driver submits a serialized representation of the computation (RDD graph) to the cluster manager for task scheduling."
    },

    {
        question: "Which is true about SparkContext?",
        options: ["It is the entry point for RDDs, accumulators, and broadcast variables", "It replaces SparkSession in Spark 2.0", "It is only used for SQL queries", "It runs on worker nodes"],
        answer: 0,
        explanation: "SparkContext is the legacy entry point for low-level operations like creating RDDs, accumulators, and broadcast variables."
    },

    {
        question: "What is a limitation of using RDDs compared to DataFrames?",
        options: ["No support for caching", "No schema or built-in optimization", "Cannot be distributed", "Limited to Java only"],
        answer: 1,
        explanation: "RDDs lack schema and do not benefit from Catalyst optimizer, making them less efficient for structured data processing."
    },

    {
        question: "When is data deleted in Overwrite save mode?",
        options: ["After writing new data", "Before writing new data", "Never", "Only if new data is larger"],
        answer: 1,
        explanation: "In Overwrite mode, existing data is deleted before writing new data; note that this is not atomic."
    },

    {
        question: "What does SaveMode.Append do?",
        options: ["Replaces existing data", "Adds new data to existing data", "Ignores new data", "Throws an error"],
        answer: 1,
        explanation: "Append mode adds the contents of the DataFrame to existing data without deleting anything."
    },

];


const dmQuestions1 = [
    {
        "question": "Which of the following best defines data mining?",
        "options": ["Extracting data directly from primary storage", "Discovering patterns in large datasets", "Archiving data systematically", "Organizing data into tables"],
        "answer": 1
    },
    {
        question: "What is an alternative term commonly used for data mining?",
        options: ["Data structuring", "Knowledge Discovery in Databases (KDD)", "Systematic Data Archiving (SDA)", "Information Transformation"],
        answer: 1
    },
    {
        question: "In data mining, which term refers to data that is continuously generated in real-time?",
        options: ["Static data", "Data streams", "Historical data", "Transactional data"],
        answer: 1
    },
    {
        question: "Which data mining task focuses on grouping objects based on similarities?",
        options: ["Classification", "Association analysis", "Clustering", "Prediction"],
        answer: 2
    },
    {
        question: "What type of data is used to identify clusters in customer segmentation?",
        options: ["Text data", "Spatiotemporal data", "Transactional data", "Multimedia data"],
        answer: 2
    },
    {
        question: "Which model is used to predict continuous variables based on other variable values?",
        options: ["Regression", "Classification", "Clustering", "Association"],
        answer: 0
    },
    {
        question: "Which of these methods is NOT typically used in classification?",
        options: ["Decision Trees", "Naïve Bayesian Classification", "Neural Networks", "Apriori Algorithm"],
        answer: 3
    },
    {
        question: "In association analysis, which metric reflects how often items appear together in transactions?",
        options: ["Confidence", "Lift", "Association", "Support"],
        answer: 3
    },
    {
        question: "Which algorithm is commonly used for frequent pattern mining in association analysis?",
        options: ["Support Vector Machine", "Apriori", "Decision Tree", "K-means"],
        answer: 1
    },
    {
        question: "What is a primary goal of data preprocessing in data mining?",
        options: ["To model data for better prediction", "To remove noise and inconsistent data", "To visualize data clusters", "To apply association rules"],
        answer: 1
    },
    {
        question: "Which of these is an example of a supervised learning technique?",
        options: ["Clustering", "Classification", "Anomaly Detection", "Data Transformation"],
        answer: 1
    },
    {
        question: "What do we call a data mining technique that predicts unknown or future values?",
        options: ["Description", "Prediction", "Association", "Clustering"],
        answer: 1
    },
    {
        question: "Which of the following best describes 'outlier analysis'?",
        options: ["Classifying normal data points", "Detecting deviations from expected behavior", "Identifying highly frequent data patterns", "Organizing data into clusters"],
        answer: 1
    },
    {
        question: "The Knowledge Discovery in Databases (KDD) process involves:",
        options: ["Creating databases with specific queries", "Using neural networks to extract knowledge", "Identifying non-trivial patterns from large data sets", "Setting up transactional databases for e-commerce"],
        answer: 2
    },
    {
        question: "What is a major issue in data mining regarding privacy?",
        options: ["Scalability", "Network efficiency", "Security and ethical concerns in data handling", "Format conversion of multimedia data"],
        answer: 2
    },
    {
        question: "What kind of data is typically used in social network analysis?",
        options: ["Transactional data", "Graph data", "Textual data", "Multimedia data"],
        answer: 1
    },
    {
        question: "In clustering, maximizing intra-cluster similarity means:",
        options: ["Minimizing distances within clusters", "Enhancing inter-cluster similarity", "Maximizing distances between clusters", "Ignoring similarities within clusters"],
        answer: 0
    },
    {
        question: "Which task would most likely use decision trees for analysis?",
        options: ["Identifying outliers", "Transaction grouping", "Classification", "Frequent itemset discovery"],
        answer: 2
    },
    {
        question: "An example of an anomaly detection application is:",
        options: ["Market segmentation", "Sales forecasting", "Credit card fraud detection", "Product recommendation"],
        answer: 2
    },
    {
        question: "In data mining, what is often the first step before any analysis?",
        options: ["Visualization", "Data transformation", "Data cleaning and preprocessing", "Decision tree generation"],
        answer: 2
    },
    {
        question: "The efficiency of a data mining algorithm is mainly affected by:",
        options: ["The amount of data", "User input", "Hardware constraints only", "The chosen database type"],
        answer: 0
    },
    {
        question: "Which data mining technique is most appropriate for categorizing news articles?",
        options: ["Clustering", "Regression", "Classification", "Association Analysis"],
        answer: 2
    },
    {
        question: "What type of learning is clustering considered?",
        options: ["Supervised learning", "Semi-supervised learning", "Unsupervised learning", "Rule-based learning"],
        answer: 2
    },
    {
        question: "Which data mining application involves determining correlations among customer buying patterns?",
        options: ["Classification", "Clustering", "Association analysis", "Regression analysis"],
        answer: 2
    },
    {
        question: "In association rule mining, what does confidence represent?",
        options: ["The probability of items appearing individually", "The probability of items appearing together", "The strength of a rule based on pattern occurrence", "The ability to classify data based on rules"],
        answer: 1
    },
    {
        question: "Data mining is only concerned with structured data from relational databases.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "Anomaly detection is essential for identifying rare events in data mining.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "Regression techniques are best suited for predicting discrete class labels.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "Decision trees can be applied in both classification and regression tasks.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "Privacy concerns in data mining only apply to personal data.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "Clustering techniques require labeled data to group similar items.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "K-means is an example of a clustering algorithm that requires specifying the number of clusters.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "Outliers in data are always errors that need to be removed.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "Data preprocessing in data mining is primarily focused on visualizing data trends.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "Data mining tasks can be either predictive or descriptive in nature.",
        options: ["True", "False"],
        answer: 0
    }

]



const dmQuestions2 = [
    {
        question: "What is a data object?",
        options: ["A table column", "An entity in a dataset", "A unique attribute", "A categorical variable"],
        answer: 1
    },
    {
        question: "Which of these is an example of a nominal attribute?",
        options: ["Temperature", "Height", "Hair color", "Salary"],
        answer: 2
    },
    {
        question: "Attributes in data can also be referred to as:",
        options: ["Relations", "Variables", "Entities", "Rows"],
        answer: 1
    },
    {
        question: "A nominal attribute with only two states (0 and 1) is called:",
        options: ["Binary", "Continuous", "Ordinal", "Ratio-scaled"],
        answer: 0
    },
    {
        question: "Which attribute type has a meaningful order but unknown magnitude between values?",
        options: ["Nominal", "Ordinal", "Ratio", "Interval"],
        answer: 1
    },
    {
        question: "What is the main difference between interval and ratio-scaled attributes?",
        options: ["Interval scales have a true zero point", "Ratio scales have a true zero point", "Interval scales measure categorical data", "Ratio scales cannot be used with binary data"],
        answer: 1
    },
    {
        question: "Attributes like temperature (Celsius) or calendar dates are examples of:",
        options: ["Ratio-scaled attributes", "Interval-scaled attributes", "Nominal attributes", "Ordinal attributes"],
        answer: 1
    },
    {
        question: "Continuous attributes are typically represented as:",
        options: ["Integer variables", "Binary variables", "Floating-point variables", "Ordinal values"],
        answer: 2
    },
    {
        question: "Measures like mean, median, and mode are used to describe:",
        options: ["Dispersion of data", "Central tendency", "Proximity measures", "Data similarity"],
        answer: 1
    },
    {
        question: "Which statistic describes the spread of data values?",
        options: ["Mode", "Mean", "Variance", "Median"],
        answer: 2
    },
    {
        question: "The measure of central tendency that is most affected by extreme values is:",
        options: ["Median", "Mode", "Mean", "Range"],
        answer: 2
    },
    {
        question: "What is the Interquartile Range (IQR)?",
        options: ["The difference between maximum and minimum values", "The range of the middle 50% of data", "The average of the data set", "The difference between the mean and median"],
        answer: 1
    },
    {
        question: "A data value that lies beyond 1.5 times the IQR from the quartiles is considered:",
        options: ["A mode", "A boxplot value", "An outlier", "A median"],
        answer: 2
    },
    {
        question: "Which graphical tool is used to represent a five-number summary of data?",
        options: ["Histogram", "Scatter plot", "Boxplot", "Line graph"],
        answer: 2
    },
    {
        question: "In a symmetric distribution, the mean, median, and mode are:",
        options: ["Different", "Aligned", "Equal to the standard deviation", "Skewed to the left"],
        answer: 1
    },
    {
        question: "A measure that describes how different two data objects are is called:",
        options: ["Similarity", "Dissimilarity", "Dispersion", "Central tendency"],
        answer: 1
    },
    {
        question: "Which is not a common measure of dissimilarity?",
        options: ["Euclidean distance", "Manhattan distance", "Mode distance", "Jaccard coefficient"],
        answer: 2
    },
    {
        question: "The Manhattan distance is also known as:",
        options: ["Euclidean distance", "Minkowski distance", "City block distance", "Ordinal distance"],
        answer: 2
    },
    {
        question: "What is the purpose of normalizing data before calculating distance?",
        options: ["To reduce the data to binary form", "To assign higher weights to larger values", "To place data within a standard range", "To increase the data spread"],
        answer: 2
    },
    {
        question: "Cosine similarity is commonly used for comparing:",
        options: ["Categorical data", "Nominal attributes", "Numeric matrices", "Document term-frequency vectors"],
        answer: 3
    },
    {
        question: "In proximity measures for binary attributes, the Jaccard coefficient is used for:",
        options: ["Symmetric binary variables", "Ordinal data only", "Asymmetric binary variables", "Data normalization"],
        answer: 2
    },
    {
        question: "In a dataset with mixed attribute types, dissimilarity is often calculated by:",
        options: ["Excluding non-numeric data", "Using the sum of all similarity values", "Applying a weighted formula", "Calculating the range of each variable"],
        answer: 2
    },
    {
        question: "The Euclidean distance between two points is equivalent to:",
        options: ["The sum of their absolute differences", "The cosine of the angle between them", "The straight-line distance between them", "The difference in their ranks"],
        answer: 2
    },
    {
        question: "For ordinal data, what transformation is applied before measuring distance?",
        options: ["Mapping to ranks", "Binarization", "Mean calculation", "Subtracting median"],
        answer: 0
    },
    {
        question: "In cosine similarity, a cosine value close to 1 indicates that the two vectors:",
        options: ["Have no similarity", "Are closely matched", "Are perpendicular", "Have negative correlation"],
        answer: 1
    },
    {
        question: "True or False: In data mining, data objects are also known as tuples or instances.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: A binary attribute always represents an ordinal scale.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: An asymmetric binary attribute gives equal importance to both states.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: In interval-scaled attributes, there is no true zero point.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: Continuous attributes can only have a finite number of values.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: The median is generally unaffected by extreme values.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: Boxplots are graphical tools that display mean, range, and mode.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: A dissimilarity matrix records the distance between pairs of objects.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: Euclidean distance is best used with binary attributes.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: Cosine similarity measures the angle between two vectors to determine similarity.",
        options: ["True", "False"],
        answer: 0
    }
];





const dmQuestions3 = [
    {
        question: "What is a common issue with real-world databases?",
        options: [
            "They are always complete",
            "They have perfect accuracy",
            "They often contain noisy, missing, or inconsistent data",
            "They are generally small in size"
        ],
        answer: 2
    },
    {
        question: "Which of the following is NOT a measure of data quality?",
        options: ["Completeness", "Consistency", "Precision", "Believability"],
        answer: 2
    },
    {
        question: "Data cleaning in data preprocessing includes:",
        options: [
            "Removing all data",
            "Adding duplicate data",
            "Identifying and removing outliers",
            "Ignoring all missing values"
        ],
        answer: 2
    },
    {
        question: "Which type of missing data occurs randomly without any pattern?",
        options: [
            "Missing Completely at Random (MCAR)",
            "Missing at Random (MAR)",
            "Missing Not at Random (MNAR)",
            "None of the above"
        ],
        answer: 0
    },
    {
        question: "What is one technique to handle missing data?",
        options: [
            "Always ignore the data set",
            "Fill with a global constant or mean",
            "Randomly delete values",
            "Duplicate missing values"
        ],
        answer: 1
    },
    {
        question: "In binning methods, 'equal-width binning' refers to:",
        options: [
            "Dividing the data range into bins of equal element count",
            "Assigning each bin a different width",
            "Dividing the data range into intervals of equal size",
            "No division of data"
        ],
        answer: 2
    },
    {
        question: "How does the clustering method help handle noisy data?",
        options: [
            "By adding more noise",
            "By grouping data and removing outliers",
            "By transforming data into a single value",
            "By duplicating noisy values"
        ],
        answer: 1
    },
    {
        question: "Data integration often faces the 'entity identification' problem, which involves:",
        options: [
            "Removing all duplicate data",
            "Identifying different names for the same entity",
            "Ensuring every entity is unique",
            "Converting data into binary format"
        ],
        answer: 1
    },
    {
        question: "Which of the following is an example of derived data?",
        options: ["Customer ID", "Annual revenue", "Product name", "Birthdate"],
        answer: 1
    },
    {
        question: "A 'correlation coefficient' measures:",
        options: [
            "The range of data",
            "The relationship strength between two variables",
            "The sum of all values",
            "Data accuracy"
        ],
        answer: 1
    },
    {
        question: "Which imputation method is commonly used for categorical data?",
        options: ["Mean", "Mode", "Median", "Regression"],
        answer: 1
    },
    {
        question: "What does the term 'bin boundaries' refer to in binning?",
        options: [
            "Binning by mean values",
            "Smoothing data by using closest boundary values",
            "Creating bins with random values",
            "Assigning bins based on central tendency"
        ],
        answer: 1
    },
    {
        question: "Data scrubbing in data cleaning refers to:",
        options: [
            "Detecting errors based on domain knowledge",
            "Ignoring all noisy data",
            "Grouping data with errors",
            "Adding duplicate records"
        ],
        answer: 0
    },
    {
        question: "Which missing data type can be predicted based on other variables in the data set?",
        options: ["MCAR", "MAR", "MNAR", "Imputed"],
        answer: 1
    },
    {
        question: "In equal-depth binning, each bin:",
        options: [
            "Contains the same number of samples",
            "Has equal-sized intervals",
            "Has random values",
            "Contains only outliers"
        ],
        answer: 0
    },
    {
        question: "The Chi-Square test is useful for:",
        options: [
            "Analyzing correlation between numeric data only",
            "Testing relationships between nominal data",
            "Measuring missing data",
            "Data discretization"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of correlation analysis in data preprocessing?",
        options: [
            "To verify data redundancy",
            "To delete duplicated data",
            "To increase data variance",
            "To ignore irrelevant data"
        ],
        answer: 0
    },
    {
        question: "The process of reducing the number of attributes in a data set is called:",
        options: [
            "Data transformation",
            "Data compression",
            "Dimensionality reduction",
            "Data discretization"
        ],
        answer: 2
    },
    {
        question: "Which data transformation technique involves scaling data to a smaller range?",
        options: ["Imputation", "Normalization", "Binning", "Regression"],
        answer: 1
    },
    {
        question: "Consistency in data quality refers to:",
        options: [
            "All data having the same accuracy",
            "Having uniform data across records",
            "Data containing outliers",
            "Missing data across multiple sources"
        ],
        answer: 1
    },
    {
        question: "True or False: Data cleaning is an essential step to ensure data accuracy and consistency.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: Missing Completely at Random (MCAR) data can be ignored without biasing the analysis.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: A correlation coefficient of 0 indicates no relationship between two variables.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: Binning is only applicable to categorical data for smoothing.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: Data integration involves combining data from multiple sources into a coherent data store.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: Normalization is a method to handle missing values.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: Data auditing is a process used to identify rules and relationships within data to detect violators.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: Data discretization is the process of converting continuous data into categorical data.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: Outliers are often removed to reduce noise in data preprocessing.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: In data reduction, data compression and dimensionality reduction are common techniques.",
        options: ["True", "False"],
        answer: 0
    }
];








const db2Questions1 = [
    {
        question: "Which type of storage is typically the fastest in a storage hierarchy?",
        options: ["Magnetic disks", "Primary storage", "Secondary storage", "Tertiary storage"],
        answer: 1
    },
    {
        question: "Which type of storage is volatile?",
        options: ["Optical disk", "Flash memory", "Cache memory", "Magnetic tape"],
        answer: 2
    },
    {
        question: "What is the primary reason for using secondary storage for databases?",
        options: ["Low cost", "Faster access time", "Large storage capacity", "Persistent storage requirements"],
        answer: 3
    },
    {
        question: "Which device must data be brought to before CPU processing?",
        options: ["Magnetic tape", "Main memory", "Optical disk", "Hard disk"],
        answer: 1
    },
    {
        question: "Which of the following terms describes a circular track on a disk?",
        options: ["Sector", "Cylinder", "Platter", "Track"],
        answer: 3
    },
    {
        question: "Which component is responsible for reading and writing on disk platters?",
        options: ["Disk controller", "Read-write head", "Disk arm", "Block manager"],
        answer: 1
    },
    {
        question: "In a single-sided disk with one read-write head, data is:",
        options: ["Stored on both sides of the platter", "Accessible only on a single side of the disk", "Divided into partitions", "Divided into sectors"],
        answer: 1
    },
    {
        question: "Which concept allows multiple concurrent processes to access a buffer?",
        options: ["Single buffering", "Double buffering", "Buffering of blocks", "Interleaved buffering"],
        answer: 3
    },
    {
        question: "Buffer management uses which strategy to track page access?",
        options: ["Pin-count", "Dirty bit", "Time-stamp", "Track marker"],
        answer: 0
    },
    {
        question: "What does 'cylinder' in disk terminology refer to?",
        options: ["Single disk platter", "Disk with multiple tracks", "Group of tracks on different platters with the same radius", "Circular magnetic storage unit"],
        answer: 2
    },
    {
        question: "Which method of buffering is used to minimize rotational delay and seek time?",
        options: ["Single buffering", "Cylinder caching", "Double buffering", "Sector linking"],
        answer: 1
    },
    {
        question: "Buffer replacement policies include all of the following except:",
        options: ["FIFO", "LIFO", "LRU", "Clock policy"],
        answer: 1
    },
    {
        question: "When a page is unpinned, its pin-count becomes:",
        options: ["1", "Negative", "Zero", "None of the above"],
        answer: 2
    },
    {
        question: "Which buffer replacement strategy tracks the least recently used page?",
        options: ["FIFO", "LRU", "Clock", "Priority"],
        answer: 1
    },
    {
        question: "What is the usual unit for data transfer between main memory and disk?",
        options: ["Sector", "Track", "Block", "Cylinder"],
        answer: 2
    },
    {
        question: "Which buffer replacement strategy uses a rotating hand to mark buffers?",
        options: ["FIFO", "Clock policy", "LRU", "LIFO"],
        answer: 1
    },
    {
        question: "In the clock replacement policy, when the buffer’s flag is set to zero:",
        options: ["The buffer is replaced immediately", "It is prioritized for replacement", "The flag resets all other buffers", "The buffer is locked for access"],
        answer: 1
    },
    {
        question: "Disk formatting organizes disk storage into:",
        options: ["Equal-size sectors", "Disk packs", "Disk blocks", "Disk heads"],
        answer: 0
    },
    {
        question: "In which scenario is buffering most effective?",
        options: ["When one process runs", "With parallel processes", "With single-threaded tasks", "On tertiary storage"],
        answer: 1
    },
    {
        question: "In buffer management, which condition necessitates a write-back operation?",
        options: ["When dirty bit is off", "When page pin-count is zero", "When dirty bit is on", "When data is read-only"],
        answer: 2
    },
    {
        question: "If a block’s dirty bit is 1, it means the block:",
        options: ["Is frequently accessed", "Has been modified", "Is ready for replacement", "Is not used often"],
        answer: 1
    },
    {
        question: "What is required for continuous data transfer between disk blocks?",
        options: ["Sequential buffering", "Double buffering", "Cylinder caching", "Multi-disk reading"],
        answer: 0
    },
    {
        question: "The hardware address of a block does NOT contain:",
        options: ["Cylinder number", "Track number", "Block number", "Sector frequency"],
        answer: 3
    },
    {
        question: "Which is not an advantage of secondary storage?",
        options: ["High-speed access", "Large capacity", "Cost-effectiveness", "Durability"],
        answer: 0
    },
    {
        question: "In which buffer replacement policy is the oldest page replaced first?",
        options: ["FIFO", "LRU", "Clock", "Time-priority"],
        answer: 0
    },
    {
        question: "The main purpose of secondary storage is to provide a persistent, long-term storage option.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "Magnetic disks are considered non-volatile storage.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "Data in main memory is slower to access than data on magnetic disks.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "Buffering can speed up the read and write processes on disk.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "A dirty bit of 0 means a block has not been modified.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "Disk blocks are typically organized into cylinders for efficient data retrieval.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "Double buffering eliminates rotational delay for all data transfers.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "The FIFO policy replaces the page with the most recent access time.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "The pin-count in buffer management indicates the number of users currently accessing the page.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "In the clock buffer replacement policy, buffers with a flag of 1 are replaced first.",
        options: ["True", "False"],
        answer: 1
    }

];






const db2Questions2 = [
    {
        question: "What is the purpose of a file header in a database?",
        options: ["Storing the data records", "Containing metadata about the file", "Indexing records", "Storing images"],
        answer: 1
    },
    {
        question: "Which of the following is NOT a common data type for records?",
        options: ["Numeric", "String", "BLOBs", "Schema"],
        answer: 3
    },
    {
        question: "The blocking factor (bfr) represents:",
        options: ["Total number of records in a file", "Average number of records per block", "Number of sectors per track", "Total size of each block"],
        answer: 1
    },
    {
        question: "In an unspanned record organization:",
        options: ["Records cannot cross block boundaries", "Records can cross block boundaries", "All records are variable length", "Files are stored sequentially"],
        answer: 0
    },
    {
        question: "Which allocation type is fastest for reading an entire file?",
        options: ["Linked", "Indexed", "Contiguous", "Random"],
        answer: 2
    },
    {
        question: "A spanned record organization is required when:",
        options: ["Record size is smaller than block size", "Record size exceeds block size", "All records are of fixed length", "Disk blocks are indexed"],
        answer: 1
    },
    {
        question: "The term 'heap file' refers to:",
        options: ["Unordered file organization", "Indexed file organization", "Sequential file organization", "BLOB file organization"],
        answer: 0
    },
    {
        question: "What is the advantage of indexed allocation?",
        options: ["Simplicity", "High speed for sequential access", "Allows expansion without reorganization", "Eliminates the need for data pointers"],
        answer: 2
    },
    {
        question: "Which data structure is essential for sequential file organization?",
        options: ["Stack", "Queue", "Linked List", "Array"],
        answer: 2
    },
    {
        question: "What operation is required to delete a record in a heap file?",
        options: ["Sorting the records", "Marking it as deleted", "Removing the record physically", "Moving all records up"],
        answer: 1
    },
    {
        question: "A linear search is necessary for which type of file?",
        options: ["Heap files", "Ordered files", "Hashed files", "Indexed files"],
        answer: 0
    },
    {
        question: "Which of the following would improve file insertion efficiency?",
        options: ["Sorting the file continuously", "Using heap files", "Using overflow files", "Using a backup file"],
        answer: 1
    },
    {
        question: "The main disadvantage of linked allocation is:",
        options: ["It uses more disk space", "It slows down file expansion", "It makes file reading slower", "It requires indexing"],
        answer: 2
    },
    {
        question: "What does a 'find' operation in a file system do?",
        options: ["Deletes a record", "Points to a record in memory", "Sorts records", "Reads multiple records at once"],
        answer: 1
    },
    {
        question: "The correct blocking factor (bfr) for unspanned records with a block size of 512 bytes and record size of 101 bytes is:",
        options: ["5", "6", "7", "8"],
        answer: 0
    },
    {
        question: "Why is binary search more efficient in ordered files?",
        options: ["Records are unsorted", "Records are sorted", "It uses a hashing algorithm", "It reads all blocks at once"],
        answer: 1
    },
    {
        question: "To perform a scan operation, the system:",
        options: ["Reads the file from the beginning", "Reads specific record data", "Inserts a new record", "Modifies a record"],
        answer: 0
    },
    {
        question: "Which of the following is used to store a variable number of fields in a record?",
        options: ["Fixed-length fields", "Unspanned blocks", "Spanned blocks", "Blocking factor"],
        answer: 2
    },
    {
        question: "What happens during the 'close' operation on a file?",
        options: ["The file pointer is reset", "Buffers are released", "Records are reorganized", "The file is saved"],
        answer: 1
    },
    {
        question: "Which file organization is ideal for records that need to be accessed in order?",
        options: ["Heap file", "Ordered file", "Hashed file", "Sequential file"],
        answer: 3
    },
    {
        question: "True or False: Spanned records are used when records are larger than a single block.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: A heap file organization is also known as a sequential file.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: Linked allocation makes file reading faster but makes it hard to expand files.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: Contiguous allocation involves pointers to connect different blocks of a file.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: A blocking factor helps determine the average number of records per block.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: In unspanned records, a record can be split across multiple blocks.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: Indexed allocation is usually slower for sequential file reading.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: Inserting a record into an ordered file is generally time-consuming.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: Record deletion in a heap file typically requires marking the record instead of moving all records.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: Binary search can be used with unordered files for efficient searching.",
        options: ["True", "False"],
        answer: 1
    }
];



const db2Questions3 = [



    {
        question: "What is the primary purpose of using hash functions in a database?",
        options: ["To compress data", "To organize records into specific memory locations", "To encrypt data", "To increase storage capacity"],
        answer: 1
    },
    {
        question: "In hashing, what condition is ideal for minimizing collisions?",
        options: ["Using a large number of hash functions", "Distributing records uniformly across the address space", "Grouping similar records in the same location", "Reducing the number of records in each bucket"],
        answer: 1
    },
    {
        question: "Which of the following is correct about collision handling with open addressing?",
        options: ["Uses a linked list", "Searches sequentially for an empty slot", "Adds the record at the start of the table", "Deletes all colliding records"],
        answer: 1
    },
    {
        question: "In chaining, how are collisions handled?",
        options: ["By creating a pointer to additional storage locations", "By dividing records into smaller parts", "By duplicating the record in another location", "By expanding memory size"],
        answer: 0
    },
    {
        question: "What is the benefit of using the function h(K) = K mod M in hashing?",
        options: ["Speeds up computations", "Assigns unique addresses to each value", "Transforms values into a limited range", "Groups records in a single location"],
        answer: 2
    },
    {
        question: "What is an advantage of using dynamic hashing?",
        options: ["Reduces memory usage", "Improves data access speed", "Reduces collisions as the file expands", "Supports multiple simultaneous users"],
        answer: 2
    },
    {
        question: "Which of the following is true about internal hashing?",
        options: ["It occurs in main memory", "Uses disks to store records", "Requires all collisions to direct to the same location", "Utilizes dynamic hashing"],
        answer: 0
    },
    {
        question: "When a new record causes a bucket to overflow, what is the appropriate collision resolution technique?",
        options: ["Delete the oldest record", "Use open addressing", "Apply a secondary hash function", "Compress all records in the bucket"],
        answer: 1
    },
    {
        question: "Which statement best describes extendible hashing?",
        options: ["It uses a fixed hash table size", "It creates overflow buckets for each collision", "It dynamically expands the directory when needed", "It uses two hash functions for each record"],
        answer: 2
    },
    {
        question: "What is a common issue with linear probing in open addressing?",
        options: ["Increased memory cost", "High collision frequency", "Complexity in handling duplicates", "Unavailability of empty slots"],
        answer: 1
    },
    {
        question: "In chaining, where are overflow records stored?",
        options: ["In a linked list attached to the original bucket", "In main memory only", "In a compressed format within the bucket", "Directly after the previous record"],
        answer: 0
    },
    {
        question: "What is the primary goal of a good hash function?",
        options: ["To group similar records together", "To uniformly distribute records across address space", "To create long chains", "To double the available memory"],
        answer: 1
    },
    {
        question: "In extendible hashing, what does the 'global depth' represent?",
        options: ["The number of records in a bucket", "The number of bits used for indexing", "The total memory available", "The count of buckets used"],
        answer: 1
    },
    {
        question: "Which technique allows hash tables to handle more records without restructuring the entire table?",
        options: ["Linear probing", "Open addressing", "Extendible hashing", "Fixed-depth hashing"],
        answer: 2
    },
    {
        question: "In dynamic hashing, how is the hash table modified when more records are added?",
        options: ["The directory size increases", "Existing records are deleted", "Buckets are split or merged", "A fixed limit is imposed on new entries"],
        answer: 2
    },
    {
        question: "What does a 'find' operation in a file system do?",
        options: ["Deletes a record", "Points to a record in memory", "Sorts records", "Reads multiple records at once"],
        answer: 1
    },
    {
        question: "Why is binary search more efficient in ordered files?",
        options: ["Records are unsorted", "Records are sorted", "It uses a hashing algorithm", "It reads all blocks at once"],
        answer: 1
    },
    {
        question: "To perform a scan operation, the system:",
        options: ["Reads the file from the beginning", "Reads specific record data", "Inserts a new record", "Modifies a record"],
        answer: 0
    },
    {
        question: "Why can collisions occur in hashing?",
        options: ["Because hash functions are designed to be unique", "Because address space is smaller than hash field space", "Due to high capacity of hash tables", "Hashing does not allow duplicate keys"],
        answer: 1
    },
    {
        question: "Which of the following is NOT a collision resolution technique?",
        options: ["Open addressing", "Chaining", "Linear probing", "Mirroring"],
        answer: 3
    },
    {
        question: "What is chaining in hashing?",
        options: ["It links multiple hash tables", "It creates overflow positions for colliding records", "It deletes repeated records", "It compresses keys into buckets"],
        answer: 1
    },
    {
        question: "Which statement is true about multiple hashing?",
        options: ["Uses only one hash function", "Replaces open addressing", "Uses a secondary hash function after a collision", "Creates multiple copies of a record"],
        answer: 2
    },
    {
        question: "What is a bucket in external hashing?",
        options: ["A group of hashed records", "A reserved memory space", "An independent record", "A series of empty slots"],
        answer: 0
    },
    {
        question: "In a bucket, what happens when it overflows?",
        options: ["New data is discarded", "An additional linked list is created", "Data in the bucket is compressed", "Data is moved to main memory"],
        answer: 1
    },
    {
        question: "Static hashing is characterized by:",
        options: ["Constantly changing number of buckets", "Fixed number of buckets", "Flexible address space", "Dynamic directory"],
        answer: 1
    },
    {
        question: "Which of these best describes open addressing?",
        options: ["Uses separate slots for every collision", "Uses chaining for all records", "Searches for an empty position sequentially", "Hashes all records to the same position"],
        answer: 2
    },
    {
        question: "A common challenge in open addressing is:",
        options: ["Lack of memory", "Inefficient use of buckets", "Deletion issues", "Too many chains"],
        answer: 2
    },
    {
        question: "What does the term 'local depth' in extendible hashing represent?",
        options: ["Number of records in a bucket", "Bits used to index directory entries", "Overflow blocks needed", "Level of data compression"],
        answer: 1
    },
    {
        question: "When does the directory in extendible hashing double in size?",
        options: ["After a bucket overflow", "During a memory read", "When memory is full", "With the addition of a new record"],
        answer: 0
    },
    {
        question: "In extendible hashing, reducing the directory size by half is called:",
        options: ["Merging", "Halving", "Compaction", "Chaining"],
        answer: 1
    },
    {
        question: "What typically defines a 'key' in hashing?",
        options: ["A record identifier", "Memory space", "A type of collision", "A bucket pointer"],
        answer: 0
    },
    {
        question: "A hash table's load factor is generally considered ideal between:",
        options: ["0.3 and 0.5", "0.5 and 0.7", "0.7 and 0.9", "0.9 and 1.0"],
        answer: 2
    },
    {
        question: "Which hashing type dynamically expands with data?",
        options: ["Extendible hashing", "Static hashing", "Linear hashing", "RAID hashing"],
        answer: 0
    },
    {
        question: "In linear probing, which issue is most common?",
        options: ["Slow data access", "High collision frequency", "High memory cost", "Frequent expansion"],
        answer: 1
    },
    {
        question: "The difference between a primary and secondary hash function is:",
        options: ["Purpose of addressing storage", "Speed of calculation", "Response to collisions", "Storage cost"],
        answer: 2
    }
]





const db2Questions4 = [
    {
        question: "What is the primary storage in a computer system?",
        options: ["Magnetic disks", "CPU main memory", "Flash memory", "Removable media"],
        answer: 1
    },
    {
        question: "Which type of storage is characterized as non-volatile?",
        options: ["Cache memory", "Primary storage", "Secondary storage", "Tertiary storage"],
        answer: 2
    },
    {
        question: "What is the purpose of file organization in databases?",
        options: ["To determine how records are accessed", "To increase storage capacity", "To encrypt data", "To improve network speed"],
        answer: 0
    },
    {
        question: "What does DBMS stand for?",
        options: ["Database Management System", "Data Backup Management System", "Digital Backup Management Software", "Data Base Management Software"],
        answer: 0
    },
    {
        question: "Which of the following is NOT a type of secondary storage?",
        options: ["Hard disk drive", "Flash memory", "Cache", "Magnetic tape"],
        answer: 2
    },
    {
        question: "What is a sector on a disk?",
        options: ["A track divided into smaller blocks", "A collection of bytes", "The entire disk surface", "A fixed-size unit of data"],
        answer: 3
    },
    {
        question: "Which characteristic defines a block in the context of disk storage?",
        options: ["It is a hardware-level abstraction", "It is managed by the CPU", "It consists of multiple sectors", "Both A and C"],
        answer: 3
    },
    {
        question: "What is the purpose of buffering in data management?",
        options: ["To increase the size of data", "To speed up data transfer processes", "To reduce the number of records", "To encrypt data"],
        answer: 1
    },
    {
        question: "Which of the following is a buffer replacement strategy?",
        options: ["First-in-first-out (FIFO)", "Last-in-first-out (LIFO)", "Random access", "Sequential access"],
        answer: 0
    },
    {
        question: "What does the term 'dirty bit' refer to in buffer management?",
        options: ["A flag indicating that a page has been modified", "A method of data encryption", "A type of storage device", "A measure of access time"],
        answer: 0
    },
    {
        question: "What is the main reason most databases are stored on secondary storage?",
        options: ["They can be easily accessed", "They are too large for main memory", "They need constant updates", "They are volatile"],
        answer: 1
    },
    {
        question: "How is data organized on a magnetic disk?",
        options: ["In random order", "In concentric circles called tracks", "In a linear fashion", "In a three-dimensional array"],
        answer: 1
    },
    {
        question: "What is the main function of the read/write head in a disk drive?",
        options: ["To format the disk", "To read and write data magnetically", "To manage the disk's physical layout", "To encrypt data"],
        answer: 1
    },
    {
        question: "Which of the following describes a cylinder in disk storage?",
        options: ["A single track on one platter", "All tracks of the same diameter on all platters", "A collection of sectors", "A buffer in memory"],
        answer: 1
    },
    {
        question: "What is double buffering?",
        options: ["Using two disks for redundancy", "Using two buffers to read and write data simultaneously", "A method for compressing data", "A technique for encrypting data"],
        answer: 1
    },
    {
        question: "What happens when a block is replaced in a buffer?",
        options: ["It is deleted permanently", "It is written back to disk if modified", "It is stored in a cache", "It is encrypted"],
        answer: 1
    },
    {
        question: "What does the term 'seek time' refer to?",
        options: ["The time taken for the CPU to process data", "The time taken to locate the correct track on a disk", "The time taken to read data from memory", "The time taken to transfer data over a network"],
        answer: 1
    },
    {
        question: "Which of the following is a characteristic of a hard disk drive?",
        options: ["It is volatile", "It has low storage capacity", "It provides slow access to data", "It is primarily used for temporary data"],
        answer: 2
    },
    {
        question: "What is the main advantage of using cache memory?",
        options: ["It is non-volatile", "It increases data transfer speeds", "It holds permanent data", "It is cheaper than secondary storage"],
        answer: 1
    },
    {
        question: "In disk storage, what does formatting do?",
        options: ["Increases the storage capacity", "Divides tracks into equal-sized disk blocks", "Encrypts the data", "Compresses the data"],
        answer: 1
    },
    {
        question: "What is a common block size range for disk storage?",
        options: ["128 bytes to 256 bytes", "512 bytes to 4096 bytes", "1024 bytes to 2048 bytes", "1 KB to 2 KB"],
        answer: 1
    },
    {
        question: "Which type of storage is typically used for long-term data retention?",
        options: ["Cache memory", "Primary storage", "Secondary storage", "Tertiary storage"],
        answer: 2
    },
    {
        question: "What is the purpose of the buffer manager in a DBMS?",
        options: ["To manage disk space", "To handle requests for data and manage buffers", "To encrypt data", "To increase processing speed"],
        answer: 1
    },
    {
        question: "What is the main function of a disk I/O controller?",
        options: ["To manage CPU operations", "To control the transfer of data between memory and disk", "To encrypt data", "To format disks"],
        answer: 1
    },
    {
        question: "Which of the following strategies is efficient for buffer management?",
        options: ["Random replacement", "Least recently used (LRU)", "Last-in-first-out (LIFO)", "Sequential access"],
        answer: 1
    },
    {
        question: "What does a 'pin-count' indicate in buffer management?",
        options: ["The number of times a page has been accessed", "The size of the buffer", "The amount of data in a block", "The speed of the disk"],
        answer: 0
    },
    {
        question: "What is the result of a 'write-back' operation in buffer management?",
        options: ["Data is deleted from the buffer", "Data is written from the buffer to the disk", "Data is compressed", "Data is encrypted"],
        answer: 1
    },
    {
        question: "What is the main disadvantage of using LRU as a buffer replacement strategy?",
        options: ["It requires less memory", "It is simple to implement", "It requires maintaining a table of access times", "It has a high access speed"],
        answer: 2
    },
    {
        question: "What is the primary reason for using secondary storage in databases?",
        options: ["It is faster than primary storage", "It is volatile and temporary", "It is less expensive and can store larger amounts of data", "It has a higher access speed"],
        answer: 2
    },
    {
        question: "How does double buffering improve data transfer?",
        options: ["By reducing the size of data", "By allowing simultaneous reading and writing", "By compressing data during transfer", "By encrypting data"],
        answer: 1
    }
]



const db2Questions5 = [
    {
        question: "What is a record?",
        options: ["A single data value", "A collection of related data values", "A data type", "A file descriptor"],
        answer: 1
    },
    {
        question: "Which of the following is NOT a data type mentioned in the document?",
        options: ["Numeric", "String", "Object", "Boolean"],
        answer: 2
    },
    {
        question: "What does BLOB stand for?",
        options: ["Binary Large Object", "Basic Large Object", "Binary Local Object", "Basic Local Object"],
        answer: 0
    },
    {
        question: "What are variable-length records?",
        options: ["Records with fixed sizes", "Records that can vary in size based on their fields", "Records that cannot be modified", "Records only containing numbers"],
        answer: 1
    },
    {
        question: "What is the blocking factor (bfr)?",
        options: ["Number of records in a file", "Average number of file records stored in a disk block", "Size of a record", "Size of a block"],
        answer: 1
    },
    {
        question: "In which situation is record spanning mandatory?",
        options: ["When records are of fixed length", "When the record size is less than the block size", "When record size is greater than block size", "When records are unstructured"],
        answer: 2
    },
    {
        question: "What is the purpose of a file header?",
        options: ["To store data records", "To describe the file and its contents", "To store user permissions", "To define the file format"],
        answer: 1
    },
    {
        question: "Which allocation method allows file blocks to be allocated to consecutive disk blocks?",
        options: ["Linked allocation", "Indexed allocation", "Contiguous allocation", "Random allocation"],
        answer: 2
    },
    {
        question: "What is a disadvantage of linked allocation?",
        options: ["Files cannot be expanded", "Reading the whole file is slow", "Requires contiguous disk space", "Difficult to implement"],
        answer: 1
    },
    {
        question: "Which type of file organization allows for efficient searching but is expensive for insertion?",
        options: ["Unordered file organization", "Ordered file organization", "Hashed file organization", "Sequential file organization"],
        answer: 1
    },
    {
        question: "What is the average access time for a file of b blocks under basic file organizations dependent on?",
        options: ["The number of records", "The size of the blocks", "The type of file organization", "The block transfer rate"],
        answer: 2
    },
    {
        question: "What is the correct blocking factor for fixed-length records if the block size is 512 bytes and record size is 101 bytes?",
        options: ["6", "5", "4", "7"],
        answer: 1
    },
    {
        question: "What happens during a linear search for a record?",
        options: ["All records are searched simultaneously", "Records are sorted first", "Each file block is copied into a buffer and searched", "Only the first record is checked"],
        answer: 2
    },
    {
        question: "What does the term 'heap file' refer to?",
        options: ["Files with sorted records", "Files with unordered records", "Files that use indexed allocation", "Files that are read-only"],
        answer: 1
    },
    {
        question: "Which operation is used to insert a new record in a file?",
        options: ["Find", "Read", "Insert", "Delete"],
        answer: 2
    },
    {
        question: "Which of the following is a characteristic of ordered files?",
        options: ["Records are stored in random order", "Insertion is efficient", "Records are kept physically sorted", "They require no sorting for reading"],
        answer: 2
    },
    {
        question: "What is the capacity of a track if the sector size is 512 bytes and there are 16947 sectors per track?",
        options: ["8 MB", "100 MB", "512 KB", "1 GB"],
        answer: 0
    },
    {
        question: "What does the term 'unspanned records' mean?",
        options: ["Records that can span multiple blocks", "Records that cannot cross block boundaries", "Records that are stored in a heap", "Records that are indexed"],
        answer: 1
    },
    {
        question: "What is the effect of using deletion markers in ordered files?",
        options: ["They improve access times", "They reduce the need for periodic reorganization", "They simplify record insertion", "They eliminate the need for a file header"],
        answer: 1
    },
    {
        question: "Which of the following is NOT a technique for allocating file blocks on disk?",
        options: ["Contiguous allocation", "Linked allocation", "Indexed allocation", "Random allocation"],
        answer: 3
    },
    {
        question: "What is the primary advantage of indexed allocation?",
        options: ["Fast insertion", "Efficient searching", "Requires less disk space", "Simplifies file management"],
        answer: 1
    },
    {
        question: "Which operation completes file access by releasing buffers?",
        options: ["Open", "Close", "Read", "Find"],
        answer: 1
    },
    {
        question: "What is the disadvantage of using a heap file for searching?",
        options: ["Fast insertion", "Requires sorting", "Expensive linear search", "Limited storage capacity"],
        answer: 2
    },
    {
        question: "In which file organization is a binary search used?",
        options: ["Heap file", "Ordered file", "Hashed file", "Unordered file"],
        answer: 1
    },
    {
        question: "What is the main goal of good file organization?",
        options: ["To maximize disk space usage", "To minimize access time", "To simplify record formats", "To allow for unlimited records"],
        answer: 1
    },
    {
        question: "Which type of file organization is best for random access?",
        options: ["Ordered file", "Heap file", "Hashed file", "Sequential file"],
        answer: 2
    },
    {
        question: "What is the average number of records per block for variable-length records?",
        options: ["Fixed", "Variable", "Constant", "None of the above"],
        answer: 1
    },
    {
        question: "What is a common issue with ordered files during deletion?",
        options: ["They are difficult to read", "They require frequent reorganization", "They cannot be modified", "They are always full"],
        answer: 1
    },
    {
        question: "How does the blocking factor affect disk space utilization?",
        options: ["Higher blocking factor leads to more unused space", "Lower blocking factor leads to better utilization", "It has no effect on utilization", "It determines the record size"],
        answer: 1
    },
    {
        question: "Which of the following statements about file headers is true?",
        options: ["They contain only the file name", "They include information about the file format", "They are not necessary for file operations", "They can be ignored by the DBMS"],
        answer: 1
    }
]




const db2Questions6 = [

    {
        question: "Which search algorithm checks each element sequentially until a match is found?",
        options: ["Binary search", "Sequential search", "Index search", "Hash search"],
        answer: 1,
        explanation: "Sequential search (linear search) examines each element one by one from the beginning until it finds the target or reaches the end."
    },

    {
        question: "What is the average time complexity of sequential search for an array of N elements when the value is in the array?",
        options: ["O(1)", "O(log N)", "O(N/2)", "O(N^2)"],
        answer: 2,
        explanation: "On average, sequential search examines N/2 elements when the value is present in the array."
    },

    {
        question: "Binary search requires the array to be:",
        options: ["Unsorted", "Sorted", "Partitioned", "Hashed"],
        answer: 1,
        explanation: "Binary search works only on sorted arrays, as it repeatedly divides the search interval in half."
    },

    {
        question: "What is the maximum number of comparisons needed for binary search on an array of N elements?",
        options: ["N", "N/2", "log₂N", "N²"],
        answer: 2,
        explanation: "Binary search performs at most log₂N comparisons because it halves the search space each time."
    },

    {
        question: "Which search method is faster for large sorted arrays?",
        options: ["Sequential search", "Binary search", "Both are similar", "Depends on data distribution"],
        answer: 1,
        explanation: "Binary search (O(log N)) is significantly faster than sequential search (O(N)) for large sorted arrays."
    },

    {
        question: "What is an index in database terms?",
        options: ["A copy of the entire table", "A set of pages with pointers to data pages", "A backup file", "A log of transactions"],
        answer: 1,
        explanation: "An index is an auxiliary structure containing pointers to data pages, similar to a book index."
    },

    {
        question: "What is a dense index?",
        options: ["Index with entries for some search key values", "Index with entries for every search key value", "Index with no duplicates", "Index stored in memory only"],
        answer: 1,
        explanation: "A dense index has an entry for every search key value (and thus every record) in the data file."
    },

    {
        question: "What is a sparse index?",
        options: ["Index with entries for every block anchor", "Index with entries for every record", "Index with no pointers", "Index stored on disk only"],
        answer: 0,
        explanation: "A sparse index has entries only for some key values—typically one per data block (the block anchor)."
    },

    {
        question: "Which index type can be built on an unsorted file?",
        options: ["Primary index", "Clustering index", "Dense index", "Sparse index"],
        answer: 2,
        explanation: "Dense index can be created on an unsorted file because it has an entry for every record."
    },

    {
        question: "Which index type requires the data file to be sorted?",
        options: ["Dense index", "Sparse index", "Secondary index", "All of the above"],
        answer: 1,
        explanation: "Sparse index requires the data file to be sorted because it uses block anchors (first record per block)."
    },

    {
        question: "In a primary index, what is a 'block anchor'?",
        options: ["The last record in a block", "The first record in a block", "The middle record in a block", "The smallest key in a block"],
        answer: 1,
        explanation: "Block anchor is the first record in a data block; its key value is stored in the primary index entry for that block."
    },

    {
        question: "A primary index is an example of which type of index?",
        options: ["Dense index", "Sparse index", "Secondary index", "Hash index"],
        answer: 1,
        explanation: "Primary index is sparse because it has one entry per data block, not per record."
    },

    {
        question: "Given: record size R=150 bytes, block size B=512 bytes, r=30,000 records. What is the blocking factor (Bfr)?",
        options: ["3", "30", "40", "50"],
        answer: 0,
        explanation: "Bfr = B div R = 512 div 150 = 3 records per block (integer division)."
    },

    {
        question: "Using the same values (R=150, B=512, r=30,000), how many data blocks (b) are needed?",
        options: ["1,000", "10,000", "15,000", "30,000"],
        answer: 1,
        explanation: "b = r / Bfr = 30,000 / 3 = 10,000 blocks."
    },

    {
        question: "If index entry size Rᵢ=16 bytes and block size B=512, what is the index blocking factor (Bfrᵢ)?",
        options: ["16", "32", "64", "128"],
        answer: 1,
        explanation: "Bfrᵢ = B div Rᵢ = 512 div 16 = 32 entries per block."
    },

    {
        question: "For 30,000 index entries and Bfrᵢ=32, how many index blocks are needed?",
        options: ["938", "1,000", "1,500", "2,000"],
        answer: 0,
        explanation: "bᵢ = r / Bfrᵢ = 30,000 / 32 = 937.5 ≈ 938 blocks."
    },

    {
        question: "How many block accesses are needed for binary search on an index with 938 blocks?",
        options: ["9", "10", "11", "12"],
        answer: 1,
        explanation: "log₂(938) ≈ 9.87 → 10 block accesses (rounded up)."
    },

    {
        question: "What is the average linear search cost for 10,000 data blocks?",
        options: ["500", "5,000", "10,000", "20,000"],
        answer: 1,
        explanation: "Average linear search cost = b/2 = 10,000/2 = 5,000 block accesses."
    },

    {
        question: "Which index is defined on the ordering key field of an ordered file?",
        options: ["Secondary index", "Clustering index", "Primary index", "Hash index"],
        answer: 2,
        explanation: "Primary index is defined on the ordering key field of a sorted data file."
    },

    {
        question: "Which index allows duplicate values for the ordering field?",
        options: ["Primary index", "Clustering index", "Secondary index", "Unique index"],
        answer: 1,
        explanation: "Clustering index is used when many records can have the same value for the ordering field."
    },

    {
        question: "Which index can be created on any non-ordering field?",
        options: ["Primary index", "Clustering index", "Secondary index", "Sparse index"],
        answer: 2,
        explanation: "Secondary index can be specified on any field that is not the ordering key field."
    },

    {
        question: "What is a major problem with primary indexes?",
        options: ["Large size", "Slow search", "Insertion and deletion overhead", "Complex implementation"],
        answer: 2,
        explanation: "Insertions and deletions in primary indexes require reorganizing data and updating index entries."
    },

    {
        question: "Which solution helps manage insertions in a primary index?",
        options: ["Use an unordered overflow file", "Rebuild index every time", "Ignore new records", "Use only deletion"],
        answer: 0,
        explanation: "An unordered overflow file stores new records temporarily to reduce reorganization overhead."
    },

    {
        question: "What does a single-level index contain?",
        options: ["Data records", "<field value, pointer to record> entries", "Only keys", "Only pointers"],
        answer: 1,
        explanation: "A single-level index consists of entries with field values and pointers to corresponding records."
    },

    {
        question: "Why is an index file smaller than the data file?",
        options: ["Contains fewer records", "Entries are smaller (key + pointer only)", "Compressed", "Stored in memory"],
        answer: 1,
        explanation: "Index entries are much smaller than full data records, so the index occupies fewer disk blocks."
    },

    {
        question: "Which index type is 'non-dense'?",
        options: ["Dense index", "Secondary index", "Primary index", "All indexes are dense"],
        answer: 2,
        explanation: "Primary index is non-dense (sparse) because it has one entry per block, not per record."
    },

    {
        question: "Problem: Ordered file with r=300,000, B=4,096, R=100. What is bfr?",
        options: ["40", "41", "50", "100"],
        answer: 0,
        explanation: "bfr = ⌊B/R⌋ = ⌊4,096/100⌋ = 40 records per block."
    },

    {
        question: "Same file: how many blocks (b) are needed?",
        options: ["7,500", "10,000", "15,000", "30,000"],
        answer: 0,
        explanation: "b = ⌈r/bfr⌉ = ⌈300,000/40⌉ = 7,500 blocks."
    },

    {
        question: "Primary index: V=9 bytes, P=6 bytes, B=4,096. What is Rᵢ?",
        options: ["9", "15", "6", "24"],
        answer: 1,
        explanation: "Rᵢ = V + P = 9 + 6 = 15 bytes per index entry."
    },

    {
        question: "How many index blocks (bᵢ) for rᵢ=7,500 and bfrᵢ=273?",
        options: ["27", "28", "30", "35"],
        answer: 1,
        explanation: "bᵢ = ⌈rᵢ/bfrᵢ⌉ = ⌈7,500/273⌉ = ⌈27.47⌉ = 28 blocks."
    },

    {
        question: "Total block accesses using primary index: binary search on index + data block = ?",
        options: ["5+1=6", "13+1=14", "10+1=11", "28+1=29"],
        answer: 0,
        explanation: "Binary search on index (28 blocks) needs ⌈log₂28⌉=5 accesses, plus 1 for data block = 6 total."
    },

];


const db2Questions7 = [

    {
        question: "What type of index is defined on an ordered data file with a non-key ordering field?",
        options: ["Primary index", "Clustering index", "Secondary index", "Unique index"],
        answer: 1,
        explanation: "Clustering index is used when the data file is ordered on a non-key field (field with duplicate values)."
    },

    {
        question: "How many index entries does a clustering index typically have?",
        options: ["One per data block", "One per distinct field value", "One per record", "One per file"],
        answer: 1,
        explanation: "Clustering index has one entry for each distinct value of the indexing field, pointing to the first block with that value."
    },

    {
        question: "What is the blocking factor (bfrᵢ) for a clustering index with B=4,096 bytes and Rᵢ=11 bytes (5-byte Zipcode + 6-byte pointer)?",
        options: ["372", "273", "512", "1000"],
        answer: 0,
        explanation: "bfrᵢ = ⌊B/Rᵢ⌋ = ⌊4096/11⌋ = 372 entries per block."
    },

    {
        question: "For a clustering index with 1,000 entries and bfrᵢ=372, how many index blocks (bᵢ) are needed?",
        options: ["2", "3", "4", "5"],
        answer: 1,
        explanation: "bᵢ = ⌈rᵢ/bfrᵢ⌉ = ⌈1000/372⌉ = ⌈2.69⌉ = 3 blocks."
    },

    {
        question: "Which index type is always dense?",
        options: ["Primary index", "Clustering index", "Secondary index on a key field", "Sparse index"],
        answer: 2,
        explanation: "Secondary index on a key field is dense—it has one entry for each record in the data file."
    },

    {
        question: "What is the main advantage of a secondary index?",
        options: ["Smaller size", "Faster than primary index", "Allows efficient search on non-ordering fields", "No insertion overhead"],
        answer: 2,
        explanation: "Secondary index enables efficient searching on fields that are not used for physical ordering of the file."
    },

    {
        question: "In Example 3, how many block accesses are needed for a linear search on 7,500 blocks?",
        options: ["3,750", "7,500", "1,099", "12"],
        answer: 0,
        explanation: "Average linear search cost = b/2 = 7,500/2 = 3,750 block accesses."
    },

    {
        question: "For the dense secondary index in Example 3, how many index entries (rᵢ) are there?",
        options: ["7,500", "300,000", "1,099", "273"],
        answer: 1,
        explanation: "Dense secondary index has one entry per record: rᵢ = 300,000."
    },

    {
        question: "How many index blocks (bᵢ) for the dense secondary index with bfrᵢ=273 and rᵢ=300,000?",
        options: ["1,099", "1,100", "1,500", "2,000"],
        answer: 0,
        explanation: "bᵢ = ⌈rᵢ/bfrᵢ⌉ = ⌈300,000/273⌉ = ⌈1098.9⌉ = 1,099 blocks."
    },

    {
        question: "What is the total block accesses using binary search on this secondary index (1,099 blocks) plus data block?",
        options: ["11+1=12", "10+1=11", "12+1=13", "5+1=6"],
        answer: 0,
        explanation: "Binary search on 1,099 blocks needs ⌈log₂1099⌉=11 accesses + 1 data block = 12 total."
    },

    {
        question: "Which index type provides logical ordering without physical ordering?",
        options: ["Primary index", "Clustering index", "Secondary index", "All indexes"],
        answer: 2,
        explanation: "Secondary index provides logical ordering by the indexing field, regardless of physical record order."
    },

    {
        question: "What is a multi-level index?",
        options: ["Index on multiple fields", "Index with multiple entries per block", "Index to an index (hierarchical)", "Index with duplicate values"],
        answer: 2,
        explanation: "A multi-level index is created by making a primary index to the first-level index, forming a hierarchy."
    },

    {
        question: "What is 'fan-out' (fo) in multi-level indexes?",
        options: ["Number of index levels", "Number of entries per index block (bfrᵢ)", "Number of data blocks", "Height of tree"],
        answer: 1,
        explanation: "Fan-out (fo) = bfrᵢ = number of index entries per block; determines how many ways the search space splits."
    },

    {
        question: "In Example 4, what is the fan-out (fo) for the multilevel index?",
        options: ["273", "1,099", "5", "3"],
        answer: 0,
        explanation: "fo = bfrᵢ = 273 (same as in Example 3)."
    },

    {
        question: "How many second-level blocks (b₂) for b₁=1,099 and fo=273?",
        options: ["3", "4", "5", "6"],
        answer: 2,
        explanation: "b₂ = ⌈b₁/fo⌉ = ⌈1099/273⌉ = ⌈4.03⌉ = 5 blocks."
    },

    {
        question: "How many third-level blocks (b₃) for b₂=5 and fo=273?",
        options: ["1", "2", "3", "5"],
        answer: 0,
        explanation: "b₃ = ⌈b₂/fo⌉ = ⌈5/273⌉ = ⌈0.018⌉ = 1 block (top level)."
    },

    {
        question: "Total block accesses in multi-level index with t=3 levels?",
        options: ["t = 3", "t+1 = 4", "t-1 = 2", "fo+1 = 274"],
        answer: 1,
        explanation: "Access one block per level (t=3) + one data block = 4 total accesses."
    },

    {
        question: "What problem do dynamic multilevel indexes (B-trees/B+-trees) solve?",
        options: ["Large index size", "Inefficient search", "Insertion/deletion overhead in ordered indexes", "Duplicate values"],
        answer: 2,
        explanation: "B-trees/B+-trees handle insertions and deletions efficiently by allowing partial block occupancy and rebalancing."
    },

    {
        question: "In a B-tree of order p=3, what is the maximum number of keys per node?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        explanation: "Maximum keys = p-1 = 3-1 = 2 keys per node."
    },

    {
        question: "What is the minimum occupancy for B-tree nodes (except root)?",
        options: ["25%", "50%", "75%", "100%"],
        answer: 1,
        explanation: "B-tree nodes are kept at least 50% full to maintain balance and efficiency."
    },

    {
        question: "Where are data pointers stored in a B+-tree?",
        options: ["In all nodes", "Only in leaf nodes", "Only in root", "In internal nodes only"],
        answer: 1,
        explanation: "In B+-trees, pointers to data records exist only in leaf nodes; internal nodes contain search keys and tree pointers."
    },

    {
        question: "What is an advantage of B+-trees over B-trees?",
        options: ["Shorter height (fewer levels)", "Faster insertion", "No deletion overhead", "Smaller node size"],
        answer: 0,
        explanation: "B+-trees can have fewer levels because internal nodes pack more keys (no data pointers), increasing fan-out."
    },

    {
        question: "Which tree structure supports both range searches and equality searches?",
        options: ["Hash index", "B-tree/B+-tree", "Linked list", "Sequential file"],
        answer: 1,
        explanation: "B-trees and B+-trees support both range queries (ordered traversal) and equality searches."
    },

    {
        question: "What happens when a B-tree node becomes overfull during insertion?",
        options: ["Records are deleted", "Node is split", "Tree is rebuilt", "Insertion is rejected"],
        answer: 1,
        explanation: "When a B-tree node exceeds its capacity, it splits into two nodes, which may propagate upward."
    },

    {
        question: "What happens when a B-tree node becomes less than half full after deletion?",
        options: ["It is merged with neighbors", "It is deleted", "It is split", "It is ignored"],
        answer: 0,
        explanation: "If a node falls below 50% occupancy, it may be merged with adjacent nodes to maintain balance."
    },

    {
        question: "In B+-trees, leaf nodes are often linked to support:",
        options: ["Faster insertion", "Ordered sequential access", "Higher fan-out", "Data compression"],
        answer: 1,
        explanation: "Leaf nodes in B+-trees are linked to allow efficient ordered traversal (range queries)."
    },

    {
        question: "Which index type is 'nondense' and uses block anchors?",
        options: ["Secondary index", "Clustering index", "Primary index", "Both primary and clustering"],
        answer: 3,
        explanation: "Both primary and clustering indexes are nondense (sparse) and use block anchors (first record per block or per value)."
    },

    {
        question: "For a clustering index on Zipcode with 1,000 distinct values, how many block accesses are needed for binary search on the index?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        explanation: "With 3 index blocks, binary search needs ⌈log₂3⌉ = 2 block accesses."
    },

    {
        question: "What is the typical use of an overflow file in index management?",
        options: ["Store deleted records", "Handle insertions without immediate reorganization", "Backup index", "Store metadata"],
        answer: 1,
        explanation: "Overflow files temporarily store new records to reduce frequent reorganization due to insertions."
    },

    {
        question: "In Table 17.1, which index type is used when the indexing field is a key but not used for physical ordering?",
        options: ["Primary index", "Clustering index", "Secondary index (Key)", "Secondary index (NonKey)"],
        answer: 2,
        explanation: "Secondary index (Key) is for a key field that is not used for physical ordering of the file."
    },

    {
        question: "What does 'fan-out' determine in multi-level indexes?",
        options: ["Index height", "Search speed", "Number of children per node", "All of the above"],
        answer: 3,
        explanation: "High fan-out reduces index height, increases search speed, and determines how many children an internal node can have."
    },

    {
        question: "Which statement about B-trees is FALSE?",
        options: ["All leaf nodes are at same level", "Nodes are kept at least half full", "Data pointers exist in all nodes", "Support range queries"],
        answer: 2,
        explanation: "In B-trees, data pointers exist at all levels; in B+-trees, they exist only at leaf nodes."
    },

    {
        question: "In Example 4, how many levels (t) does the multilevel index have?",
        options: ["1", "2", "3", "4"],
        answer: 2,
        explanation: "With b₁=1,099, b₂=5, b₃=1, there are 3 index levels (first, second, third)."
    },

    {
        question: "What is the main disadvantage of secondary indexes compared to primary indexes?",
        options: ["Larger size and longer search time", "Cannot handle duplicates", "Require sorted data", "No deletion support"],
        answer: 0,
        explanation: "Secondary indexes are larger (dense) and may require more block accesses, but they enable search on non-ordering fields."
    },

    {
        question: "When does a B-tree insertion cause a split to propagate to the root?",
        options: ["Always", "When leaf is full", "When internal nodes are full up to root", "Never"],
        answer: 2,
        explanation: "Splitting propagates upward when nodes are full at each level, potentially increasing tree height."
    },

    {
        question: "What is the key difference between B-tree and B+-tree internal nodes?",
        options: ["B-tree internal nodes have data pointers", "B+-tree internal nodes have more keys", "B-tree internal nodes are smaller", "No difference"],
        answer: 1,
        explanation: "B+-tree internal nodes have only search keys and tree pointers (no data pointers), allowing more keys per node and higher fan-out."
    },

];

const db2Questions8 = [
    {
        question: "Which of the following is an intermediate language used within DBMS for query processing?",
        options: ["SQL", "Relational Algebra", "Python", "Java"],
        answer: 1,
        explanation: "Relational Algebra is a procedural language used internally by DBMS, unlike SQL which is declarative and used at the application level."
    },
    {
        question: "Which operation selects a subset of tuples from a relation based on a condition?",
        options: ["PROJECT", "SELECT", "JOIN", "UNION"],
        answer: 1,
        explanation: "SELECT (σ) is used to filter tuples horizontally based on a condition."
    },
    {
        question: "Which operation removes duplicate tuples by default?",
        options: ["SELECT", "PROJECT", "RENAME", "CARTESIAN PRODUCT"],
        answer: 1,
        explanation: "PROJECT (π) eliminates duplicate tuples because relations are defined as sets."
    },
    {
        question: "Which operation is used to rename a relation or its attributes?",
        options: ["σ", "π", "ρ", "×"],
        answer: 2,
        explanation: "ρ (rho) is the rename operator in relational algebra."
    },
    {
        question: "Which set operation requires the relations to be type-compatible?",
        options: ["UNION only", "INTERSECTION only", "SET DIFFERENCE only", "All of the above"],
        answer: 3,
        explanation: "UNION, INTERSECTION, and SET DIFFERENCE all require type compatibility."
    },
    {
        question: "Which operation is commutative?",
        options: ["SET DIFFERENCE", "CARTESIAN PRODUCT", "UNION", "PROJECT"],
        answer: 2,
        explanation: "UNION is commutative: R ∪ S = S ∪ R."
    },
    {
        question: "If R has 3 tuples and S has 4 tuples, how many tuples will R × S have?",
        options: ["7", "12", "1", "0"],
        answer: 1,
        explanation: "Cartesian product yields n_R * n_S tuples: 3 * 4 = 12."
    },
    {
        question: "Which clause in SQL corresponds to the PROJECT operation?",
        options: ["WHERE", "FROM", "SELECT", "GROUP BY"],
        answer: 2,
        explanation: "The SELECT clause in SQL specifies the attributes to project."
    },
    {
        question: "Which operation is used to combine tuples from two relations in a combinatorial way?",
        options: ["JOIN", "UNION", "CARTESIAN PRODUCT", "INTERSECTION"],
        answer: 2,
        explanation: "Cartesian product combines every tuple from R with every tuple from S."
    },
    {
        question: "Which of the following is NOT a unary relational operation?",
        options: ["SELECT", "PROJECT", "RENAME", "INTERSECTION"],
        answer: 3,
        explanation: "INTERSECTION is a binary set operation, not a unary relational operation."
    },
    {
        question: "In relational algebra, the result of a query is always:",
        options: ["A number", "A relation", "A tuple", "An attribute"],
        answer: 1,
        explanation: "Relational algebra operations always return a relation."
    },
    {
        question: "Which symbol is used for the SELECT operation?",
        options: ["π", "σ", "ρ", "∪"],
        answer: 1,
        explanation: "σ (sigma) denotes the SELECT operation."
    },
    {
        question: "Which operation is used to select specific columns from a relation?",
        options: ["SELECT", "PROJECT", "RENAME", "JOIN"],
        answer: 1,
        explanation: "PROJECT (π) selects columns (attributes) vertically."
    },
    {
        question: "If a PROJECT operation includes a key attribute, the number of tuples:",
        options: ["Increases", "Decreases", "Remains the same", "Becomes zero"],
        answer: 2,
        explanation: "If the projected list includes a key, duplicates are avoided and tuple count stays the same as the original relation."
    },
    {
        question: "Which operation is equivalent to logical AND between two relations?",
        options: ["UNION", "INTERSECTION", "DIFFERENCE", "PRODUCT"],
        answer: 1,
        explanation: "INTERSECTION returns tuples that are in both relations."
    },
    {
        question: "Which operation is associative?",
        options: ["UNION", "DIFFERENCE", "PROJECT", "SELECT"],
        answer: 0,
        explanation: "UNION is associative: R ∪ (S ∪ T) = (R ∪ S) ∪ T."
    },
    {
        question: "Which SQL keyword is used to eliminate duplicates in a query result?",
        options: ["UNIQUE", "DISTINCT", "ONLY", "SINGLE"],
        answer: 1,
        explanation: "DISTINCT eliminates duplicate rows in SQL, similar to PROJECT in relational algebra."
    },
    {
        question: "Which of the following is a binary operation?",
        options: ["SELECT", "PROJECT", "RENAME", "JOIN"],
        answer: 3,
        explanation: "JOIN is a binary operation that combines two relations."
    },
    {
        question: "Which set operation is NOT commutative?",
        options: ["UNION", "INTERSECTION", "SET DIFFERENCE", "CARTESIAN PRODUCT"],
        answer: 2,
        explanation: "SET DIFFERENCE is not commutative: R − S ≠ S − R."
    },
    {
        question: "If R has 5 attributes and S has 3, how many attributes will R × S have?",
        options: ["8", "15", "2", "5"],
        answer: 0,
        explanation: "Cartesian product degree = sum of attributes: 5 + 3 = 8."
    },
    {
        question: "Which operation corresponds to a vertical partition of a relation?",
        options: ["SELECT", "PROJECT", "UNION", "JOIN"],
        answer: 1,
        explanation: "PROJECT creates a vertical partition by selecting columns."
    },
    {
        question: "Which operation can be cascaded in any order?",
        options: ["SELECT", "PROJECT", "UNION", "JOIN"],
        answer: 0,
        explanation: "SELECT operations are commutative and can be cascaded in any order."
    },
    {
        question: "In SQL, renaming of attributes is done using:",
        options: ["RENAME", "AS", "TO", "SET"],
        answer: 1,
        explanation: "The AS keyword is used for aliasing (renaming) in SQL."
    },
    {
        question: "Which operation is used to find employees in department 5 with salary > 30000?",
        options: ["σ Dno=5 AND Salary>30000", "π Dno=5 AND Salary>30000", "ρ Dno=5 AND Salary>30000", "∪ Dno=5 AND Salary>30000"],
        answer: 0,
        explanation: "σ denotes SELECT with a compound condition."
    },
    {
        question: "Which of the following is a formal foundation for relational operations?",
        options: ["SQL", "Relational Algebra", "Calculus", "Boolean Algebra"],
        answer: 1,
        explanation: "Relational Algebra provides the formal foundation for relational model operations."
    },
    {
        question: "Which operation returns tuples from R that are not in S?",
        options: ["UNION", "INTERSECTION", "DIFFERENCE", "PRODUCT"],
        answer: 2,
        explanation: "DIFFERENCE (R − S) returns tuples in R but not in S."
    },
    {
        question: "If π A (R) is performed, and A is not a key, the result:",
        options: ["May have fewer tuples than R", "Will have more tuples than R", "Will have the same tuples as R", "Is always empty"],
        answer: 0,
        explanation: "Projection without a key may remove duplicates, reducing tuple count."
    },
    {
        question: "Which operation does NOT require type compatibility?",
        options: ["UNION", "INTERSECTION", "CARTESIAN PRODUCT", "DIFFERENCE"],
        answer: 2,
        explanation: "CARTESIAN PRODUCT does not require type compatibility."
    },
    {
        question: "Which of the following is used in query optimization?",
        options: ["SQL", "Relational Algebra", "Java", "HTML"],
        answer: 1,
        explanation: "Relational Algebra is used for query optimization in RDBMS."
    },
    {
        question: "Which symbol denotes the PROJECT operation?",
        options: ["σ", "π", "ρ", "∩"],
        answer: 1,
        explanation: "π (pi) denotes PROJECT."
    },
    {
        question: "Which operation can be used to combine SELECT and PROJECT into one expression?",
        options: ["RENAME", "JOIN", "Nesting", "UNION"],
        answer: 2,
        explanation: "Operations can be nested into a single relational algebra expression."
    },
    {
        question: "In relational algebra, a relation is defined as a:",
        options: ["Set of tuples", "List of tuples", "Bag of tuples", "Array of tuples"],
        answer: 0,
        explanation: "In the formal model, a relation is a set of tuples (no duplicates)."
    },
    {
        question: "Which operation is performed first in π A (σ B=5 (R))?",
        options: ["PROJECT", "SELECT", "RENAME", "UNION"],
        answer: 1,
        explanation: "SELECT (σ) is applied first to filter tuples, then PROJECT (π) is applied."
    },
    {
        question: "Which of the following is a procedural query language?",
        options: ["SQL", "Relational Algebra", "QBE", "XQuery"],
        answer: 1,
        explanation: "Relational Algebra is procedural; SQL is declarative."
    },
    {
        question: "Which operation is used to retrieve names of dependents of female employees?",
        options: ["SELECT only", "PROJECT only", "SELECT and PROJECT", "JOIN and PROJECT"],
        answer: 3,
        explanation: "It requires JOIN (or Cartesian + SELECT) and PROJECT to get names."
    }
];


const db2Questions9 = [
  {
    question: "What is the main purpose of the JOIN operation in relational algebra?",
    options: [
      "To remove duplicate tuples",
      "To combine related tuples from two relations",
      "To sort data",
      "To rename attributes"
    ],
    answer: 1,
    explanation: "JOIN combines related tuples from two relations based on a condition."
  },
  {
    question: "Which operation is equivalent to Cartesian Product followed by SELECT?",
    options: [
      "PROJECT",
      "UNION",
      "JOIN",
      "DIVISION"
    ],
    answer: 2,
    explanation: "JOIN is a shortcut for Cartesian Product followed by a selection condition."
  },
  {
    question: "An EQUI-JOIN uses which comparison operator?",
    options: ["<", ">", "=", "≠"],
    answer: 2,
    explanation: "EQUI-JOIN uses only equality (=) comparisons."
  },
  {
    question: "What is removed in a NATURAL JOIN compared to an EQUI-JOIN?",
    options: [
      "Unmatched tuples",
      "Duplicate join attributes",
      "Null values",
      "Primary keys"
    ],
    answer: 1,
    explanation: "NATURAL JOIN removes duplicate join attributes."
  },
  {
    question: "NATURAL JOIN requires join attributes to have:",
    options: [
      "Same values only",
      "Same data type only",
      "Same name",
      "Primary key constraint"
    ],
    answer: 2,
    explanation: "Join attributes must have the same name."
  },
  {
    question: "Which join keeps all tuples from the left relation?",
    options: [
      "Right outer join",
      "Full outer join",
      "Natural join",
      "Left outer join"
    ],
    answer: 3,
    explanation: "Left outer join keeps all tuples from the left relation."
  },
  {
    question: "Which join keeps tuples from both relations even if no match exists?",
    options: [
      "Left outer join",
      "Right outer join",
      "Full outer join",
      "Equi-join"
    ],
    answer: 2,
    explanation: "Full outer join keeps all tuples from both relations."
  },
  {
    question: "What happens to unmatched tuples in NATURAL JOIN?",
    options: [
      "Kept with NULLs",
      "Removed",
      "Duplicated",
      "Moved to another relation"
    ],
    answer: 1,
    explanation: "Unmatched tuples are removed in NATURAL JOIN."
  },
  {
    question: "Theta-Join allows which type of condition?",
    options: [
      "Only equality",
      "Only inequality",
      "Any comparison operator",
      "No condition"
    ],
    answer: 2,
    explanation: "Theta-Join allows <, >, =, ≠, ≤, ≥."
  },
  {
    question: "If θ is '=', the Theta-Join becomes:",
    options: [
      "Natural Join",
      "Equi-Join",
      "Outer Join",
      "Division"
    ],
    answer: 1,
    explanation: "Theta-Join with '=' is Equi-Join."
  },

  {
    question: "Retrieve the names of employees who work in the 'Research' department.",
    options: [
      "π FNAME,LNAME (EMPLOYEE)",
      "σ DNAME='Research' (DEPARTMENT)",
      "π FNAME,LNAME (EMPLOYEE ⋈ DEPARTMENT)",
      "π FNAME,LNAME (σ DNAME='Research' (DEPARTMENT ⋈ EMPLOYEE))"
    ],
    answer: 3,
    explanation: "Select Research department then join with EMPLOYEE and project names."
  },
  {
    question: "Which operation is best to find employees who have NO dependents?",
    options: [
      "JOIN",
      "INTERSECTION",
      "SET DIFFERENCE",
      "CARTESIAN PRODUCT"
    ],
    answer: 2,
    explanation: "SET DIFFERENCE is used to exclude employees with dependents."
  },
  {
    question: "Which operation is mainly used in DIVISION?",
    options: [
      "Find any matching tuple",
      "Find tuples related to ALL values in another relation",
      "Remove duplicates",
      "Group attributes"
    ],
    answer: 1,
    explanation: "DIVISION finds tuples related to ALL values in another relation."
  },
  {
    question: "DIVISION is useful for queries like:",
    options: [
      "Employees working on at least one project",
      "Employees working on exactly one project",
      "Employees working on all projects of another employee",
      "Employees with highest salary"
    ],
    answer: 2,
    explanation: "DIVISION answers 'for all' type queries."
  },
  {
    question: "Which symbol represents the aggregate function operation?",
    options: ["σ", "π", "ℱ", "⋈"],
    answer: 2,
    explanation: "ℱ represents aggregate function operation."
  },
  {
    question: "Which of the following is NOT an aggregate function?",
    options: ["SUM", "AVG", "COUNT", "SELECT"],
    answer: 3,
    explanation: "SELECT is not an aggregate function."
  },
  {
    question: "What does COUNT do in relational algebra?",
    options: [
      "Counts distinct values only",
      "Counts rows without removing duplicates",
      "Counts only non-null values",
      "Counts attributes"
    ],
    answer: 1,
    explanation: "COUNT counts rows without removing duplicates."
  },
  {
    question: "Grouping with aggregation allows:",
    options: [
      "Multiple SELECT conditions",
      "Aggregate results per group",
      "Removal of duplicates",
      "Natural join execution"
    ],
    answer: 1,
    explanation: "Grouping computes aggregates per group."
  },
  {
    question: "DNO ℱCOUNT SSN, AVG Salary (EMPLOYEE) means:",
    options: [
      "One result for all employees",
      "Grouping employees by DNO",
      "Grouping employees by salary",
      "Joining EMPLOYEE with DEPARTMENT"
    ],
    answer: 1,
    explanation: "Employees are grouped by department number."
  },
  {
    question: "Which join pads unmatched tuples with NULL values?",
    options: [
      "Natural Join",
      "Equi-Join",
      "Outer Join",
      "Theta-Join"
    ],
    answer: 2,
    explanation: "Outer joins pad unmatched tuples with NULLs."
  },
  {
    question: "Which operation is commutative?",
    options: [
      "JOIN",
      "DIVISION",
      "SET DIFFERENCE",
      "CARTESIAN PRODUCT"
    ],
    answer: 3,
    explanation: "Cartesian product is commutative."
  },
  {
    question: "Which query retrieves projects that John Smith works on?",
    options: [
      "σ fname='John' (EMPLOYEE)",
      "π pname (PROJECT)",
      "π pname (σ fname='John' (EMPLOYEE) ⋈ WORKS_ON ⋈ PROJECT)",
      "π fname (EMPLOYEE)"
    ],
    answer: 2,
    explanation: "Select John Smith, join with WORKS_ON and PROJECT, then project project names."
  },
  {
    question: "To find employees earning more than their supervisors, we need:",
    options: [
      "Self join on EMPLOYEE",
      "Natural join",
      "Division",
      "Set difference"
    ],
    answer: 0,
    explanation: "Self-join is needed to compare employee and supervisor salaries."
  },
  {
    question: "Which operation removes attributes but keeps tuples?",
    options: ["SELECT", "PROJECT", "JOIN", "DIVISION"],
    answer: 1,
    explanation: "PROJECT removes attributes."
  },
  {
    question: "Which operation removes tuples but keeps attributes?",
    options: ["SELECT", "PROJECT", "JOIN", "RENAME"],
    answer: 0,
    explanation: "SELECT removes tuples."
  },
  {
    question: "Which operation changes only attribute names?",
    options: ["JOIN", "RENAME", "PROJECT", "SELECT"],
    answer: 1,
    explanation: "RENAME changes attribute names."
  },
  {
    question: "Which operation summarizes numeric values?",
    options: ["JOIN", "DIVISION", "AGGREGATION", "RENAME"],
    answer: 2,
    explanation: "Aggregation summarizes numeric values."
  },
  {
    question: "Which query finds total hours per project?",
    options: [
      "π pname (PROJECT)",
      "γ pname, SUM(hours) (WORKS_ON ⋈ PROJECT)",
      "σ hours > 10 (WORKS_ON)",
      "π hours (WORKS_ON)"
    ],
    answer: 1,
    explanation: "Grouping by project name and summing hours."
  }
];



const db2Questions10 = [
  {
    question: "What is the main goal of query optimization?",
    options: [
      "Validate SQL syntax",
      "Reduce storage size",
      "Choose the best execution strategy",
      "Convert SQL to relational algebra"
    ],
    answer: 2,
    explanation: "Query optimization selects the most efficient execution strategy."
  },
  {
    question: "Which component is responsible for query optimization in DBMS?",
    options: [
      "Query processor",
      "Query optimizer",
      "Parser",
      "Validator"
    ],
    answer: 1,
    explanation: "The query optimizer selects the best execution plan."
  },
  {
    question: "Which data structure is commonly used to represent queries internally?",
    options: [
      "Linked list",
      "Graph only",
      "Tree",
      "Hash table"
    ],
    answer: 2,
    explanation: "Queries are commonly represented as query trees."
  },
  {
    question: "Which step comes first in processing a high-level query?",
    options: [
      "Optimization",
      "Execution",
      "Scanning and parsing",
      "Code generation"
    ],
    answer: 2,
    explanation: "The query is first scanned, parsed, and validated."
  },
  {
    question: "What does the parser check?",
    options: [
      "Attribute existence",
      "Semantic correctness",
      "Syntax correctness",
      "Cost estimation"
    ],
    answer: 2,
    explanation: "Parser checks whether the query follows grammar rules."
  },
  {
    question: "What is the role of the validator?",
    options: [
      "Check syntax",
      "Check execution plan",
      "Check semantic correctness",
      "Optimize joins"
    ],
    answer: 2,
    explanation: "Validator ensures attributes and relations exist."
  },
  {
    question: "What is a query tree?",
    options: [
      "Graph of SQL keywords",
      "Execution plan only",
      "Tree representing relational algebra expression",
      "Index structure"
    ],
    answer: 2,
    explanation: "Query tree represents relational algebra operations."
  },
  {
    question: "Leaf nodes in a query tree represent:",
    options: [
      "Operations",
      "Relations",
      "Conditions",
      "Indexes"
    ],
    answer: 1,
    explanation: "Leaf nodes represent base relations."
  },
  {
    question: "Internal nodes in a query tree represent:",
    options: [
      "Relations",
      "Indexes",
      "Operations",
      "Tuples"
    ],
    answer: 2,
    explanation: "Internal nodes represent relational algebra operations."
  },
  {
    question: "Why are query trees preferred over query graphs?",
    options: [
      "They are smaller",
      "They represent execution order",
      "They are easier to draw",
      "They store cost values"
    ],
    answer: 1,
    explanation: "Query trees represent a specific execution order."
  },

  // Heuristics
  {
    question: "Which heuristic rule should be applied first?",
    options: [
      "JOIN before SELECT",
      "PROJECT before SELECT",
      "SELECT and PROJECT as early as possible",
      "CARTESIAN PRODUCT first"
    ],
    answer: 2,
    explanation: "Early SELECT and PROJECT reduce intermediate results."
  },
  {
    question: "Why should SELECT operations be moved down the query tree?",
    options: [
      "Increase attributes",
      "Reduce number of tuples",
      "Increase cost accuracy",
      "Simplify syntax"
    ],
    answer: 1,
    explanation: "SELECT reduces number of tuples early."
  },
  {
    question: "Replacing CARTESIAN PRODUCT + SELECT with JOIN improves:",
    options: [
      "Correctness",
      "Storage",
      "Efficiency",
      "Normalization"
    ],
    answer: 2,
    explanation: "JOIN is more efficient than Cartesian product."
  },
  {
    question: "Which SELECT should be applied first?",
    options: [
      "Less restrictive",
      "More restrictive",
      "Randomly",
      "After JOIN"
    ],
    answer: 1,
    explanation: "More restrictive SELECT reduces data size faster."
  },
  {
    question: "What does selectivity measure?",
    options: [
      "Number of attributes",
      "Query complexity",
      "Fraction of tuples selected",
      "Execution time"
    ],
    answer: 2,
    explanation: "Selectivity is the fraction of tuples satisfying a condition."
  },

  // مسائل (Problems)
  {
    question: "Applying SELECT before JOIN mainly reduces:",
    options: [
      "Number of attributes",
      "Number of tuples",
      "Disk blocks",
      "Indexes"
    ],
    answer: 1,
    explanation: "SELECT reduces the number of tuples."
  },
  {
    question: "Moving PROJECT operations down the query tree reduces:",
    options: [
      "Tuples only",
      "Attributes only",
      "Cost estimation",
      "Indexes"
    ],
    answer: 1,
    explanation: "PROJECT reduces number of attributes."
  },
  {
    question: "Which transformation breaks a conjunctive SELECT condition into multiple SELECTs?",
    options: [
      "Cascade of π",
      "Cascade of σ",
      "Commutativity of π",
      "Join replacement"
    ],
    answer: 1,
    explanation: "Cascade of σ splits conjunctive conditions."
  },
  {
    question: "Which operation is commutative in relational algebra optimization?",
    options: [
      "σ",
      "π",
      "−",
      "÷"
    ],
    answer: 0,
    explanation: "SELECT operations are commutative."
  },
  {
    question: "In a sequence of π operations:",
    options: [
      "All are needed",
      "Only the first matters",
      "Only the last matters",
      "None matter"
    ],
    answer: 2,
    explanation: "Only the last PROJECT matters."
  },

  // Execution plans
  {
    question: "What is materialized evaluation?",
    options: [
      "Streaming results directly",
      "Storing intermediate results",
      "Using indexes only",
      "Parallel execution"
    ],
    answer: 1,
    explanation: "Intermediate results are stored temporarily."
  },
  {
    question: "What is pipelined evaluation?",
    options: [
      "Storing intermediate relations",
      "Executing joins only",
      "Passing results directly to next operation",
      "Using disk-based execution"
    ],
    answer: 2,
    explanation: "Results are passed directly without storing."
  },
  {
    question: "Which evaluation reduces I/O overhead?",
    options: [
      "Materialized",
      "Pipelined",
      "Sequential",
      "Indexed"
    ],
    answer: 1,
    explanation: "Pipelined evaluation reduces I/O."
  },
  {
    question: "Materialized evaluation is preferred when:",
    options: [
      "Memory is limited",
      "Intermediate results reused",
      "Real-time processing",
      "Streaming data"
    ],
    answer: 1,
    explanation: "Stored results can be reused."
  },

  // Cost-based optimization
  {
    question: "Cost-based optimization chooses plans based on:",
    options: [
      "Syntax rules",
      "Heuristic rules only",
      "Estimated execution cost",
      "Query length"
    ],
    answer: 2,
    explanation: "It compares estimated execution costs."
  },
  {
    question: "Which is NOT a cost component?",
    options: [
      "Disk I/O cost",
      "Memory usage cost",
      "Communication cost",
      "Normalization cost"
    ],
    answer: 3,
    explanation: "Normalization cost is not a query cost."
  },
  {
    question: "Catalog information helps optimizer estimate:",
    options: [
      "Syntax errors",
      "Security violations",
      "Query cost",
      "User privileges"
    ],
    answer: 2,
    explanation: "Catalog stores statistics used for cost estimation."
  },
  {
    question: "Which statistic estimates attribute distribution?",
    options: [
      "Index levels",
      "Histograms",
      "Blocking factor",
      "File size"
    ],
    answer: 1,
    explanation: "Histograms describe data distribution."
  },
  {
    question: "Selectivity is mainly used to estimate:",
    options: [
      "Join order",
      "Selection cardinality",
      "Index depth",
      "Tuple size"
    ],
    answer: 1,
    explanation: "Selectivity estimates number of selected records."
  },

  // Cost formulas
  {
    question: "Which SELECT method scans all blocks?",
    options: [
      "Binary search",
      "Primary index search",
      "Linear search",
      "Hash search"
    ],
    answer: 2,
    explanation: "Linear search scans all file blocks."
  },
  {
    question: "Binary search is efficient when data is:",
    options: [
      "Hashed",
      "Sorted",
      "Unordered",
      "Distributed"
    ],
    answer: 1,
    explanation: "Binary search requires sorted data."
  },
  {
    question: "Which method retrieves a single record using hash key?",
    options: [
      "S1",
      "S2",
      "S3a",
      "S3b"
    ],
    answer: 3,
    explanation: "S3b uses hash key with cost ≈ 1."
  },
  {
    question: "Using a primary index to retrieve a single record has cost:",
    options: [
      "b",
      "log₂b",
      "x + 1",
      "1"
    ],
    answer: 2,
    explanation: "Primary index search cost is x + 1."
  }
];





const irQuestions1 = [

    {
        question: "In the Boolean retrieval model, documents are retrieved based on:",
        options: ["Weighted relevance", "Boolean expressions", "Neural networks", "Probabilistic relevance"],
        answer: 1
    },
    {
        question: "The inverted index is used because:",
        options: ["It reduces retrieval time by organizing term lists", "It prioritizes frequently used terms", "It discards irrelevant terms", "It duplicates document entries"],
        answer: 0
    },
    {
        question: "An inverted index stores:",
        options: ["Only document titles", "A list of terms and their frequencies", "A list of terms with document IDs", "Document metadata only"],
        answer: 2
    },
    {
        question: "The process of breaking down a document into individual terms is called:",
        options: ["Parsing", "Normalization", "Tokenization", "Aggregation"],
        answer: 2
    },
    {
        question: "The Boolean retrieval model considers each document as:",
        options: ["A set of sentences", "A set of words", "A cluster of phrases", "A set of paragraphs"],
        answer: 1
    },
    {
        question: "Which IR system is based on Boolean logic and has been widely used commercially?",
        options: ["Ranked retrieval", "Neural retrieval", "Boolean retrieval", "Fuzzy retrieval"],
        answer: 2
    },
    {
        question: "When combining search results, intersecting postings lists is essential for:",
        options: ["OR queries", "AND queries", "NOT queries", "Complex searches"],
        answer: 1
    },
    {
        question: "In the Boolean model, 'OR' between terms indicates:",
        options: ["Only one term must appear", "Both terms must appear", "Excluding both terms", "Grouping terms by category"],
        answer: 0
    },
    {
        question: "For optimization, queries should be processed in order of:",
        options: ["Decreasing term frequency", "Random order", "Increasing document frequency", "No particular order"],
        answer: 2
    },
    {
        question: "The term frequency (tf) is important for:",
        options: ["Exact Boolean matches", "Optimizing the search algorithm", "Weighting term relevance", "Generating token IDs"],
        answer: 2
    },
    {
        question: "In Boolean search, an extended query (like 'madding OR crowd') typically:",
        options: ["Has no frequency limits", "Is organized by frequency to optimize processing", "Is processed faster than regular queries", "Uses tokenization to match exact phrases"],
        answer: 1
    },
    {
        question: "In WestLaw’s Boolean search, '/3' specifies:",
        options: ["Within 3 paragraphs", "Within 3 words", "Exactly 3 times", "Excludes the term after it"],
        answer: 1
    },
    {
        question: "Inverted indexes are particularly effective because they:",
        options: ["Reduce the memory needed for storage", "Simplify the process of intersecting postings", "Increase accuracy of results", "Provide predictive search capability"],
        answer: 1
    },
    {
        question: "The document frequency indicates:",
        options: ["Number of words per document", "Frequency of a term across documents", "Total characters in a document", "Search relevance score"],
        answer: 1
    },
    {
        question: "The merging of postings lists is essential in Boolean retrieval to:",
        options: ["Rank results", "Exclude stop words", "Match multiple terms in a query", "Organize terms alphabetically"],
        answer: 2
    },
    {
        question: "The term 'stopping' in Boolean retrieval often refers to:",
        options: ["Storing important words", "Excluding common words", "Sorting search results", "Detecting errors"],
        answer: 1
    },
    {
        question: "An indexer processes documents by:",
        options: ["Extracting metadata only", "Sorting them alphabetically", "Breaking down and storing terms", "Compiling a list of all document IDs"],
        answer: 2
    },
    {
        question: "The Boolean model is preferred in legal searches like WestLaw because:",
        options: ["It provides approximate results", "It allows for precise control of search terms", "It is faster than other models", "It excludes proximity operators"],
        answer: 1
    },
    {
        question: "True or False: Boolean retrieval models rely solely on the terms 'AND' and 'OR.'",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: A Boolean retrieval model is considered precise since documents either match or do not.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: In Boolean retrieval, 'tokenization' refers to assigning documents unique IDs.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: The inverted index lists only the most frequent terms in each document.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: Boolean operators are irrelevant in a term-document incidence matrix.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: Stemming in text processing helps match different forms of a root word.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: Query optimization in Boolean retrieval often starts with the highest-frequency terms.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: Stop words like 'the' or 'and' are usually excluded from Boolean searches.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: Variable-size posting lists in an inverted index improve flexibility and memory use.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: Proximity operators ensure terms are adjacent in the search results.",
        options: ["True", "False"],
        answer: 1
    }


]




const irQuestions2 = [

    {
        "question": "True or False: Tokenization involves dividing text into individual units called tokens.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "True or False: Stop words are commonly excluded from indexes due to their high informational content.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "True or False: Stemming converts different forms of a word to a common base form.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "True or False: A term-document count matrix records only the presence or absence of terms.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "True or False: The 'bag-of-words' model preserves the order of words in a document.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "True or False: Term frequency (tf) refers to the number of times a term appears in a document.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "True or False: The inverse document frequency (idf) increases for terms that appear frequently in the collection.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "True or False: tf-idf weighting combines both term frequency and document frequency to measure term importance.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "True or False: Inverted indexes map terms to lists of documents containing those terms.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "True or False: Zone indexes are only used for document titles.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "True or False: Case folding converts all letters in a document to uppercase.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "True or False: In skip lists, pointers are used to speed up the search in postings lists.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "True or False: Cosine similarity is used to compare vector representations of documents.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "True or False: A positional index only records the frequency of terms, not their positions.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "True or False: A document's length affects its vector representation in the vector space model.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "True or False: tf-idf weighting is unaffected by term frequency within the document.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "True or False: In ranked retrieval, documents are sorted based on their relevance to the query.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "True or False: Document frequency is used to assign higher weights to commonly occurring terms.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "True or False: Phrase queries are a feature that can be implemented using positional indexes.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "True or False: Zone weighting allows specific document zones to impact the retrieval score differently.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "True or False: Stemming algorithms, like Porter’s, reduce words to their grammatical roots.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "True or False: Parametric search uses document metadata fields to refine queries.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "True or False: In the vector space model, each term is an axis in a high-dimensional space.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "True or False: Cosine similarity values range from -1 to 1.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "True or False: Weighted zone scoring uses only Boolean values in calculations.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "True or False: High-frequency terms are usually assigned high weights to increase their impact.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "True or False: Normalization in IR can involve converting uppercase letters to lowercase.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "True or False: The use of stop lists reduces the size of postings lists.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "True or False: In tf-idf, 'tf' stands for 'total frequency.'",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "True or False: Vector similarity scores can help to filter irrelevant documents.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "What is the purpose of tokenization in information retrieval?",
        "options": ["To remove irrelevant words", "To break text into terms for indexing", "To count term frequency", "To calculate document relevance"],
        "answer": 1
    },
    {
        "question": "In tf-idf, what does 'idf' measure?",
        "options": ["The frequency of terms in a document", "The importance of a term in the collection", "The overall length of a document", "The relevance of a document"],
        "answer": 1
    },
    {
        "question": "The primary function of an inverted index is to:",
        "options": ["Match documents based on keyword frequencies", "Store metadata information for all documents", "Link each term to documents containing that term", "Order documents by relevance score"],
        "answer": 2
    },
    {
        "question": "Which model considers documents as vectors in high-dimensional space?",
        "options": ["Binary Model", "Positional Model", "Boolean Model", "Vector Space Model"],
        "answer": 3
    },
    {
        "question": "What role do skip pointers play in postings lists?",
        "options": ["They help in tokenizing text", "They improve search speed by skipping non-relevant postings", "They reduce document length", "They help with case folding"],
        "answer": 1
    },
    {
        "question": "Weighted zone scoring assigns weights to:",
        "options": ["Each term in a document", "Each query term equally", "Different document zones", "Specific stop words"],
        "answer": 2
    },
    {
        "question": "A 'bag of words' approach treats documents as:",
        "options": ["Ordered sequences of terms", "Unordered collections of terms", "A single vector representation", "A Boolean vector"],
        "answer": 1
    },
    {
        "question": "In the vector space model, document similarity is often measured using:",
        "options": ["Jaccard Index", "Cosine Similarity", "Euclidean Distance", "Manhattan Distance"],
        "answer": 1
    },
    {
        "question": "Normalization in text processing can involve:",
        "options": ["Tokenizing text", "Removing accents and punctuation", "Sorting terms alphabetically", "Applying a dictionary"],
        "answer": 1
    },
    {
        "question": "In zone-based indexing, which of the following might be a document zone?",
        "options": ["Paragraph spacing", "Font style", "Author's name", "Text color"],
        "answer": 2
    },
    {
        "question": "What is a primary purpose of using tf-idf weighting?",
        "options": ["To prioritize terms based on document length", "To increase relevance by considering term rarity", "To reduce overall indexing time", "To ensure uniform weighting for each document"],
        "answer": 1
    },
    {
        "question": "Which technique is commonly used to reduce inflectional forms of words?",
        "options": ["Tokenization", "Stemming", "Stop-word filtering", "Zoning"],
        "answer": 1
    },
    {
        "question": "What is the 'tf' component in tf-idf?",
        "options": ["Term frequency in a document", "Total frequency across documents", "Frequency of common terms only", "Frequency of rare terms only"],
        "answer": 0
    },
    {
        "question": "Which index type supports phrase queries effectively?",
        "options": ["Biword Index", "Binary Index", "Positional Index", "Document Frequency Index"],
        "answer": 2
    },
    {
        "question": "Cosine similarity is used in IR because it compensates for differences in:",
        "options": ["Term length", "Document length", "Term occurrence", "Metadata fields"],
        "answer": 1
    },
    {
        "question": "Which of the following best defines 'term-document incidence'?",
        "options": ["The presence of a term in all documents", "A matrix showing term occurrences in documents", "A list of documents sorted by length", "The frequency of terms in a given document"],
        "answer": 1
    },
    {
        "question": "In an IR system, 'stemming' is important for:",
        "options": ["Matching related words in queries and documents", "Filtering high-frequency words", "Sorting documents by date", "Converting tokens into binary vectors"],
        "answer": 0
    },
    {
        "question": "Why are stop words often removed in indexing?",
        "options": ["They are rarely used in queries", "They reduce indexing accuracy", "They consume indexing space without adding much meaning", "They affect tf-idf weighting directly"],
        "answer": 2
    },
    {
        "question": "Weighted zone scoring calculates a document's score based on:",
        "options": ["The overall length of each document", "The contribution of various document zones", "The most common terms only", "The number of rare terms in the document"],
        "answer": 1
    },
    {
        "question": "Which of the following describes inverse document frequency (idf) best?",
        "options": ["The count of terms in a document", "A measure of a term's rarity across documents", "The average frequency of a term", "The position of a term within documents"],
        "answer": 1
    }
]








const irQuestions3 = [
    {
        question: "True or False: Tokenization is the process of breaking text into smaller units called tokens, which are often individual words.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: Zone indexing only applies to metadata fields like author or date and does not consider the main body of the document.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: Weighted zone scoring assigns each document a score between 0 and 1 based on Boolean matches in different zones.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: The bag-of-words model considers the order of words in a document when creating vectors.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: In ranked retrieval models, the system returns a ranked list of documents based on relevance to the query.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "Which of the following best defines 'zone indexing'?",
        options: [
            "Dividing documents by file type",
            "Creating separate indexes for specific parts of documents like title and abstract",
            "Assigning weights to words based on their frequency",
            "Sorting documents by date"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of using weighted zone scoring in information retrieval?",
        options: [
            "To filter documents by metadata only",
            "To enhance scoring based on specific document regions like title or abstract",
            "To identify stop words",
            "To eliminate irrelevant documents"
        ],
        answer: 1
    },
    {
        question: "In the context of ranked retrieval, which of these is true?",
        options: [
            "The system returns a set of documents without a specific order",
            "The system ranks documents in order of relevance",
            "Only exact matches to the query are retrieved",
            "Documents are ranked based on document length alone"
        ],
        answer: 1
    },
    {
        question: "The term 'bag-of-words model' refers to:",
        options: [
            "A model that includes only unique words from each document",
            "A model that disregards word order but counts term frequency",
            "A model that segments documents into phrases",
            "A method that considers synonyms in retrieval"
        ],
        answer: 1
    },
    {
        question: "Which of the following terms is used to refer to the frequency of a term in a document?",
        options: [
            "Zone frequency",
            "Term Weight",
            "Term Frequency (tf)",
            "Log-frequency"
        ],
        answer: 2
    }
]





const irQuestions4 = [
    {
        question: "IR objective is to retrieve _______ the relevant documents.",
        options: ["All", "Specified number", "Half", "None of the above"],
        answer: 0
    },
    {
        question: "In information retrieval the term 'relevant' is used to represent an item",
        options: ["Exactly match information needed", "Partially matches information needed", "Both a and b", "None of the above"],
        answer: 2
    },
    {
        question: "______ is an example of Information retrieval systems.",
        options: ["Digital library", "Search engines", "Mail", "All of the above"],
        answer: 3
    },
    {
        question: "When having a document with identified zones it can be classified",
        options: ["Structured", "Unstructured", "Semi-structured", "None of the above"],
        answer: 2
    },
    {
        question: "When deciding where the new document will be added to the existing topics.",
        options: ["Clustering", "Classification", "Opinion mining", "All of the above"],
        answer: 1
    },
    {
        question: "Suggesting preferable restaurants is one of the tasks handled by information retrieval.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "Which of the following are not handled by Information retrieval",
        options: ["Documents", "Databases", "Text files", "None of the above"],
        answer: 1
    },
    {
        question: "What are the tokens of 'information, retrieval & database'?",
        options: ["1) Information 2) retrieval 3) database", "1) Information 2) retrieval & database", "1) Information, retrieval & database", "None of the above"],
        answer: 0
    },
    {
        question: "_______ is used for finding research information about specific topics.",
        options: ["Library catalog", "Web search service", "Abstracting and indexing system", "All of the above"],
        answer: 2
    },
    {
        question: "_______ is an instance of a sequence of characters.",
        options: ["Token", "Stop word", "Normalization", "All of the above"],
        answer: 0
    },
    {
        question: "The retrieved material of IR is usually _______.",
        options: ["Documents", "Videos", "Data", "None of the above"],
        answer: 0
    },
    {
        question: "The retrieved information in Database is ________ Data.",
        options: ["Structured", "Unstructured", "Semi-structured", "None of the above"],
        answer: 0
    },
    {
        question: "Finding a file on a computer is an example of search systems.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "Each word of the query is called ________.",
        options: ["Keyword", "String", "Text", "None of the above"],
        answer: 0
    },
    {
        question: "A data structure that improves the speed of word retrieval.",
        options: ["Representation", "Indexing", "Comparison", "None of the above"],
        answer: 1
    },
    {
        question: "In Boolean search algorithm the default precedence ordering of operations is ________.",
        options: ["OR then AND then NOT", "NOT then AND then OR", "AND then NOT then OR"],
        answer: 1
    },
    {
        question: "In Proximity searching algorithms the default direction of search is forward only.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "What is the retrieved result of 'Computer OR Information NOT Data'?",
        options: ["Selects all items that discuss computer and/or information that do not discuss data", "Selects all items that discuss computer and information that do not discuss data", "Selects all items that discuss computer or information that do not discuss data"],
        answer: 0
    },
    {
        question: "What is the retrieved result of 'Information AND NOT (Retrieval AND Extraction)'?",
        options: ["Selects all items that discuss information and/or retrieval that do not discuss extraction", "Selects all items that discuss information and do not discuss both of retrieval and extraction", "Selects all items that discuss information only"],
        answer: 1
    },
    {
        question: "___________ are typically short and focused on specific area of interest.",
        options: ["Queries", "Profiles", "Token"],
        answer: 0
    },
    {
        question: "The objective of ________ is to allow for a mapping between a user's specified need and the items in the information database that will answer that need.",
        options: ["Search capabilities", "Browse capabilities", "Miscellaneous capabilities"],
        answer: 0
    },
    {
        question: "What are the tokens of 'fish and chips'?",
        options: ["1) fish 2) chips", "1) fish 2) and 3) chips", "1) fishandchips"],
        answer: 0
    },
    {
        question: "Document parsing may have ____ format in IR system.",
        options: ["Multiple", "One", "Maximum 4", "None of the above"],
        answer: 0
    },
    {
        question: "When applying Porter algorithm rules, what will the following word be stemmed to: Duplicatable would be ____________.",
        options: ["Duplic", "Duplicate", "Duplicatable", "None of the above"],
        answer: 0
    },
    {
        question: "When applying Porter algorithm rules, what will the following word be stemmed to: applicable would be ____________.",
        options: ["Application", "Applic", "Applicability", "None of the above"],
        answer: 1
    },
    {
        question: "When applying Porter algorithm rules, what will the following word be stemmed to: eating would be ____________.",
        options: ["Eat", "Eats", "Eating", "None of the above"],
        answer: 0
    }
]






const irQuestions5 = [

    {
        question: "What is the primary purpose of Parametric Search?",
        options: ["To perform full-text search only.", "To combine full-text queries with filtering based on metadata fields (e.g., date, language).", "To execute pure Boolean operations (AND, OR, NOT).", "To calculate similarity between query and document."],
        answer: 1,
        explanation: "Parametric search allows users to combine a keyword search with constraints on specific document metadata fields, like a date range or file format."
    },

    {
        question: "In the Bag of Words model, what is ignored in the document representation?",
        options: ["The term frequency (TF).", "The relative importance of terms.", "The order of words in the document.", "The document's metadata."],
        answer: 2,
        explanation: "The Bag of Words model disregards word order and syntactic structure, representing a document only as an unordered multiset of its terms."
    },

    {
        question: "What does the 'tf' in tf-idf stand for?",
        options: ["Total Frequency", "Term Frequency", "Text Feature", "Token Factor"],
        answer: 1,
        explanation: "'tf' stands for Term Frequency, which is the raw count of how many times a term appears in a specific document."
    },

    {
        question: "The Inverse Document Frequency (idf) of a term increases when:",
        options: ["The term appears in more documents.", "The total number of documents (N) decreases.", "The term appears in fewer documents.", "The term frequency within a document is high."],
        answer: 2,
        explanation: "idf = log(N/df). Therefore, idf increases as the document frequency (df) decreases, meaning the term is rare across the collection."
    },

    {
        question: "In the Vector Space Model, how is a collection of documents conceptually viewed?",
        options: ["As a set of tables in a database.", "As points or vectors in a high-dimensional space where each term is an axis.", "As nodes in a graph network.", "As a sorted list based on publication date."],
        answer: 1,
        explanation: "The VSM represents documents as vectors in a space where each unique term in the vocabulary corresponds to a dimension. Documents are points in this space."
    },

    {
        question: "Which metric is commonly used to measure similarity between two document vectors, compensating for document length?",
        options: ["Euclidean Distance", "Manhattan Distance", "Dot Product", "Cosine Similarity"],
        answer: 3,
        explanation: "Cosine similarity measures the cosine of the angle between two vectors. It is length-normalized, so it compares vector direction (content) irrespective of their magnitude (length)."
    },

    {
        question: "What is a 'zone' in information retrieval indexing?",
        options: ["A type of stop word list.", "A specific ranking algorithm.", "An identified region within a document, like Title or Abstract.", "The physical storage location of an index."],
        answer: 2,
        explanation: "A zone is a clearly defined, free-text region of a document (e.g., Title, Author, Abstract) that can be indexed separately to allow field-specific searching."
    },

    {
        question: "In Weighted Zone Scoring, if a query term appears in the Title (weight=0.4) and Body (weight=0.5) of a document, but not in the Author field (weight=0.1), what is the document's score?",
        options: ["0.5", "0.9", "1.0", "0.4"],
        answer: 1,
        explanation: "Score = sum(zone_weight * match_score). Match score is 1 for present, 0 for absent. So, Score = (0.4*1) + (0.5*1) + (0.1*0) = 0.9."
    },

    {
        question: "Why is raw term frequency (tf) often transformed using a logarithm in scoring?",
        options: ["To make very common terms (stop words) more important.", "To ensure relevance increases linearly with frequency.", "To dampen the extreme effect of very high frequencies.", "To decrease the weight of rare terms."],
        answer: 2,
        explanation: "Log-frequency weighting (e.g., 1 + log(tf)) compresses the scale. A term appearing 100 times is not 100 times more important than appearing once, and the log reflects this diminishing return."
    },

    {
        question: "What does a high 'idf' value indicate about a term?",
        options: ["The term is very common across the document collection.", "The term is highly informative and discriminating.", "The term has a high frequency within individual documents.", "The term is likely a stop word."],
        answer: 1,
        explanation: "A high idf means the term appears in very few documents (low df). Such rare terms are often good discriminators between documents and carry more informational value."
    },

    {
        question: "In the context of ranked retrieval, what does a free-text query typically consist of?",
        options: ["A complex Boolean expression with operators.", "A formal query language statement.", "One or more words in a natural language.", "A specific document identifier."],
        answer: 2,
        explanation: "Ranked retrieval systems commonly accept free-text queries, which are simple one or multi-word queries as a user would naturally phrase them, without requiring special operators."
    },

    {
        question: "The final score for a document under the tf-idf scoring scheme is calculated as:",
        options: ["The sum of tf-idf weights for all terms in the document.", "The sum of tf-idf weights for query terms present in the document.", "The average idf of all terms in the query.", "The product of tf and idf for the most frequent query term."],
        answer: 1,
        explanation: "The relevance score for a document given a query is the sum of the tf-idf weights for each term that appears in both the query and the document: Score(q, d) = Σ_{t in q∩d} tf-idf_{t,d}."
    },

    {
        question: "Which of the following is NOT a characteristic of the Vector Space Model?",
        options: ["Documents and queries are represented as vectors.", "It can handle partial matching and ranking.", "It inherently considers the semantic meaning of words.", "It uses cosine similarity for comparing vectors."],
        answer: 2,
        explanation: "The basic VSM treats terms as independent dimensions and does not understand semantics or relationships between words (e.g., 'car' and 'automobile'). It is a statistical, not semantic, model."
    },

    {
        question: "The document frequency (df) of a term is defined as:",
        options: ["The total number of times the term appears in the entire collection.", "The maximum frequency of the term in any single document.", "The number of documents that contain the term at least once.", "The ratio of term frequency to collection frequency."],
        answer: 2,
        explanation: "Document Frequency (df_t) is a collection-wide statistic: it counts how many documents contain the term t, regardless of how many times it appears in each."
    },

    {
        question: "What is the key advantage of ranked retrieval over Boolean retrieval?",
        options: ["It always returns fewer documents.", "It provides a relevance-ordered list, allowing for partial matches.", "It executes queries much faster.", "It requires more complex query syntax from the user."],
        answer: 1,
        explanation: "Ranked retrieval's main benefit is returning documents in order of estimated relevance. This accommodates partial matches and is more forgiving and effective for user needs than the all-or-nothing Boolean model."
    },

    {
        question: "Cosine similarity between two identical, non-zero vectors is always:",
        options: ["0", "0.5", "1", "-1"],
        answer: 2,
        explanation: "The cosine of the angle between two identical vectors is 0 degrees. cos(0°) = 1, representing perfect similarity."
    },

    {
        question: "In a term-document matrix, what does a cell value of '0' in a binary incidence matrix signify?",
        options: ["The term is very important in that document.", "The term is absent from that document.", "The term's tf-idf weight is zero.", "The document is not relevant to any query."],
        answer: 1,
        explanation: "A binary incidence matrix uses 1s and 0s to indicate the mere presence or absence of a term in a document. A '0' means the term does not appear in that document."
    },

    {
        question: "What is the primary function of a zone index?",
        options: ["To store the posting lists for all terms.", "To record which zone (e.g., title, author) each occurrence of a term appears in.", "To calculate the idf for each term.", "To perform length normalization on document vectors."],
        answer: 1,
        explanation: "A zone index extends the standard inverted index by tagging each term occurrence with its zone location. This enables structured queries like 'find term X in the title'."
    },

    {
        question: "Which formula correctly represents the tf-idf weight for term t in document d?",
        options: ["tf_{t,d} / idf_t", "(1 + log(tf_{t,d})) * log(N/df_t)", "df_t * tf_{t,d}", "idf_t / tf_{t,d}"],
        answer: 1,
        explanation: "A standard tf-idf formulation uses log-frequency for tf (to dampen raw counts) and logarithmic idf. The weight is their product: w_{t,d} = (1 + log10(tf_{t,d})) * log10(N/df_t)."
    },

    {
        question: "If two documents have the same bag of words, the cosine similarity between their vector representations will be:",
        options: ["0", "Between 0 and 1, depending on length.", "1", "Impossible to determine without idf."],
        answer: 2,
        explanation: "If two documents contain exactly the same terms with the same frequencies (identical bags of words), their vector representations are identical in direction. Cosine similarity of a vector with itself is 1."
    },

    {
        question: "The 'dampening' effect in idf calculation is achieved by using:",
        options: ["A square root function.", "A logarithmic function.", "A reciprocal function (1/x).", "A minimum frequency threshold."],
        answer: 1,
        explanation: "Using log(N/df) instead of just N/df dampens the scale. The difference between idf for df=1 and df=10 is less extreme with a log, making weights more manageable."
    },

    {
        question: "In the provided example for Weighted Zone Scoring (query: 'shakespeare'), why was the document score 0.8?",
        options: ["The term appeared in all zones.", "The term appeared only in the body (weight=0.5).", "The term appeared in title (0.3) and body (0.5), giving 0.3+0.5=0.8.", "The term's idf was very high."],
        answer: 2,
        explanation: "The score is the sum of the weights of the zones where the query term is found. Here, it was found in Title (weight 0.3) and Body (weight 0.5), so score = 0.8."
    },

    {
        question: "What problem does the Vector Space Model's cosine similarity directly address?",
        options: ["The polysemy of words.", "The synonymy of words.", "The variability in document lengths.", "The need for Boolean operators."],
        answer: 2,
        explanation: "By normalizing vectors to unit length, cosine similarity measures the angle between them, effectively comparing their *direction* (content proportion) independent of their *magnitude* (document length)."
    },

    {
        question: "A term that appears in every document of a collection (a stop word) will have an idf value of:",
        options: ["0", "1", "log(N)", "A very high number"],
        answer: 0,
        explanation: "If df_t = N, then idf_t = log(N/N) = log(1) = 0. This correctly assigns zero discriminating power to terms that appear everywhere."
    },

    {
        question: "Which of these is a correct statement about parametric and zone indexes?",
        options: ["They are only useful for Boolean retrieval.", "They allow searching within specific document fields or regions.", "They replace the need for tf-idf weighting.", "They are the same as a positional index."],
        answer: 1,
        explanation: "Parametric indexes handle structured metadata fields (e.g., date, language), while zone indexes handle free-text regions (e.g., title, abstract). Both enable field/region-specific searching."
    },

    {
        question: "When moving from a binary incidence matrix to a count matrix, what additional information is captured?",
        options: ["The order of terms.", "The number of occurrences (frequency) of each term in each document.", "The document's metadata.", "The idf weight for each term."],
        answer: 1,
        explanation: "A count matrix (or term-frequency matrix) replaces the binary 0/1 values with integer counts (tf), capturing how many times each term appears in each document."
    },

    {
        question: "For a given query, the vector space model score for a document is equivalent to:",
        options: ["The Euclidean distance between the query and document vectors.", "The dot product of the length-normalized query and document vectors.", "The Manhattan distance between the vectors.", "The ratio of matching terms."],
        answer: 1,
        explanation: "Cosine similarity is calculated as the dot product of the length-normalized vectors. For scoring, we often compute the dot product of the (tf-idf weighted) query vector and document vector, which, when both are normalized, is the cosine similarity."
    },

    {
        question: "In log-frequency weighting, if tf_{t,d} = 10, what is the resulting weight w_{t,d}?",
        options: ["10", "2", "1.3", "1"],
        answer: 1,
        explanation: "w = 1 + log10(tf). 1 + log10(10) = 1 + 1 = 2."
    },

    {
        question: "What is a key limitation of the bag-of-words model?",
        options: ["It cannot handle stop words.", "It ignores word order and phrase structure.", "It overweights rare terms.", "It requires manual indexing."],
        answer: 1,
        explanation: "The bag-of-words model's major limitation is that it discards all information about the order, proximity, and syntactic structure of words, treating 'John loves Mary' and 'Mary loves John' as identical."
    },

    {
        question: "The 'weighted zone scoring' method is best described as a:",
        options: ["Ranked retrieval model for free-text queries.", "Method for scoring Boolean queries against documents with zones.", "Core component of the Vector Space Model.", "Technique for calculating idf."],
        answer: 1,
        explanation: "Weighted zone scoring is a method to assign a relevance score to a document for a Boolean query, based on which pre-defined zones (like title, abstract) contain the query terms, with different weights per zone."
    },

    {
        question: "If the angle between a query vector and a document vector is 90 degrees, their cosine similarity is:",
        options: ["1", "0.5", "0", "-1"],
        answer: 2,
        explanation: "cos(90°) = 0. This indicates orthogonality and no similarity based on the term weights used."
    },

    {
        question: "Which of the following is TRUE about document frequency (df) and collection frequency (cf)?",
        options: ["For a given term, df is always greater than cf.", "df counts documents, while cf counts total term occurrences.", "They are always equal for common terms.", "High df always means high idf."],
        answer: 1,
        explanation: "Document Frequency (df) is the number of documents containing the term. Collection Frequency (cf) is the total number of times the term appears in the entire collection. They are different measures."
    },

    {
        question: "In the vector space, sparsity refers to the fact that:",
        options: ["Most documents are very short.", "Most term-document tf-idf values are zero.", "The vocabulary size is small.", "Queries are typically long."],
        answer: 1,
        explanation: "In large vocabularies, any single document contains only a tiny fraction of all possible terms. Therefore, in the term-document matrix, the vast majority of entries (tf or tf-idf values) are zero, creating sparse vectors."
    },

    {
        question: "For a ranked retrieval system using tf-idf, what is the default score for a document containing none of the query terms?",
        options: ["A very high negative score.", "0", "1", "It is excluded from results."],
        answer: 1,
        explanation: "The score is the sum of tf-idf weights for overlapping terms. If there is no overlap, the sum is zero."
    },

    {
        question: "What role does the denominator play in the cosine similarity formula?",
        options: ["It penalizes long documents.", "It amplifies the effect of rare terms.", "It length-normalizes the vectors before taking their dot product.", "It calculates the idf component."],
        answer: 2,
        explanation: "The denominator (the product of the Euclidean lengths of the two vectors) scales the raw dot product down, effectively comparing the vectors as if they were both scaled to unit length. This removes the bias from document length."
    },

    {
        question: "Which statement best describes the relationship between parametric indexes and zone indexes?",
        options: ["They are two names for the same concept.", "Parametric indexes are for numeric/date fields, zone indexes are for free-text document regions.", "Zone indexes are a subset of parametric indexes.", "Parametric indexes require zone indexes to function."],
        answer: 1,
        explanation: "Both are types of structured indexing. Parametric indexes typically handle fields with a finite set of values (metadata). Zone indexes handle specified free-text regions within the document body."
    },

    {
        question: "Why might a system use a combination of weighted zone scoring and tf-idf scoring?",
        options: ["Weighted zone scoring is obsolete.", "To first filter by zone matches, then rank by tf-idf within that set.", "Tf-idf is only for Boolean models.", "Zone scoring provides the final ranked list."],
        answer: 1,
        explanation: "A system could use a Boolean query with weighted zone scoring as an initial filter (e.g., must have query term in title), and then use tf-idf scoring from the Vector Space Model to rank the documents that pass that filter."
    },

    {
        question: "A key idea behind tf-idf weighting is that the importance of a term to a document is:",
        options: ["Inversely proportional to its frequency in the document.", "Proportional to its frequency in the document and inversely proportional to how common it is in the collection.", "Only dependent on its position in the document.", "Solely determined by its document frequency."],
        answer: 1,
        explanation: "This is the core intuition: tf-idf increases with the term's frequency within the document (tf) and decreases with its commonness across documents (inverse of df, captured by idf)."
    },

    {
        question: "In the provided 'car insurance' example, which query term contributed the most to the final document score (0.85) and why?",
        options: ["'auto', because it had the highest tf in the document.", "'best', because it had a high idf.", "'car', because it was in both query and doc.", "'insurance', because its high idf (3.0) combined with its tf-wt (1.3) gave a high tf-idf."],
        answer: 3,
        explanation: "Looking at the table: 'insurance' had the highest tf-idf weight in the document (3.9) and a high normalized weight (0.80). Its contribution to the dot product was 0.63, the largest of the three matching terms."
    },

    {
        question: "The primary output of a ranked retrieval system is:",
        options: ["A set of documents matching a Boolean expression.", "A single best-matching document.", "A list of documents sorted by relevance to the query.", "A list of terms related to the query."],
        answer: 2,
        explanation: "The defining characteristic of ranked retrieval is that it returns an ordered list (ranking) of documents, typically from most to least relevant, rather than an unordered set."
    },

    {
        question: "How does the vector space model handle a multi-term query?",
        options: ["By processing each term separately and intersecting results.", "By creating a single query vector where each dimension holds the weight (e.g., tf-idf) for that query term.", "By requiring the user to specify Boolean operators.", "By only using the most frequent term in the query."],
        answer: 1,
        explanation: "The query is treated as a 'pseudo-document' and converted into a vector in the same term-space as the documents. The weight for each term in the query vector can be its tf-idf (often just idf or 1 for presence)."
    },

    {
        question: "What is the purpose of adding '1' in the log-frequency weight formula (1 + log10(tf))?",
        options: ["To ensure the weight is positive for tf=1.", "To make sure the weight is 0 when tf=0.", "To double the importance of all terms.", "To prevent taking the log of zero."],
        answer: 0,
        explanation: "For tf=1, log10(1)=0. Adding 1 ensures the weight is 1, not 0, giving a non-zero contribution for a single occurrence, which is reasonable. It also smoothly interpolates between tf=0 (weight=0) and tf=1 (weight=1)."
    },

    {
        question: "In the context of the Vector Space Model, what does a high-dimensional space imply?",
        options: ["It is computationally cheap to process.", "Each document vector has many non-zero entries.", "The number of unique terms (vocabulary size) is very large.", "Cosine similarity cannot be calculated."],
        answer: 2,
        explanation: "High-dimensionality refers to having one dimension per unique term in the vocabulary. For web-scale collections, this can mean millions of dimensions, though vectors remain sparse."
    },

    {
        question: "Which of these is a direct application of the Vector Space Model?",
        options: ["Spell checking.", "Document clustering.", "Grammar parsing.", "Speech recognition."],
        answer: 1,
        explanation: "By representing documents as vectors, the VSM enables geometric operations. Document clustering groups documents based on the proximity (e.g., cosine similarity) of their vectors in the space."
    },

    {
        question: "If a document is very long and contains many common words, its raw term frequency vector might suggest high similarity to many queries. How does tf-idf weighting mitigate this?",
        options: ["By using idf to downweight common terms, reducing their contribution.", "By ignoring document length completely.", "By increasing the weight of all terms in long documents.", "By only considering the title zone."],
        answer: 0,
        explanation: "Common words (high df) have low idf. So even if their tf is high in a long document, their tf-idf product remains low. This reduces the undue influence of frequent, non-discriminative words in long documents."
    },

    {
        question: "Compared to the binary incidence model, what is the main advantage of the count (tf) model?",
        options: ["It uses less storage space.", "It can distinguish between a document where a term appears once vs. many times.", "It executes Boolean queries faster.", "It automatically handles synonyms."],
        answer: 1,
        explanation: "The count model captures term frequency, allowing ranking algorithms to favor documents where a query term appears more frequently, which is often a signal of greater relevance."
    },

    {
        question: "For the calculation of cosine similarity, the vectors involved are typically:",
        options: ["Raw term frequency (tf) vectors.", "Binary incidence vectors.", "Tf-idf weighted vectors.", "Vectors of zone weights."],
        answer: 2,
        explanation: "While cosine similarity can be applied to any vector representation, in standard VSM for IR, documents and queries are first converted to their tf-idf (or similar) weighted vectors before computing cosine similarity for scoring."
    },

    {
        question: "What information does a zone index add to a standard inverted index posting?",
        options: ["The sentence number where the term appears.", "The font style of the term.", "An identifier for the document zone (e.g., <T>, <A>) where the occurrence is located.", "The timestamp of when the document was indexed."],
        answer: 2,
        explanation: "A zone index augments the standard posting list. Instead of just (docID), entries might be (docID, <TITLE>) or (docID, <ABSTRACT>), allowing the search to be restricted to specific zones."
    },

    {
        question: "In the progression Binary -> Count -> Tf-idf, what is the general trend in the richness of the document representation?",
        options: ["It becomes simpler and more efficient.", "It incorporates less information about term distribution.", "It incorporates more information about term importance and discriminative power.", "It moves away from numerical representation."],
        answer: 2,
        explanation: "Binary: only presence/absence. Count: adds within-document frequency. Tf-idf: further refines by weighting frequency with a log and downweighting terms common across the collection (idf), creating a richer, more nuanced representation."
    },

    {
        question: "The final score of 0.85 in the 'car insurance' example is a:",
        options: ["Binary match score.", "Cosine similarity value.", "Raw dot product value.", "Zone weight sum."],
        answer: 1,
        explanation: "The calculation shown (0.85) is the result of the dot product of the normalized query and document tf-idf vectors, which is their cosine similarity. It's the final relevance score."
    },

];




const irQuestions6 = [

    {
        question: "What are the three main aspects used to measure a search engine's performance?",
        options: ["Speed, Cost, Quality", "Efficiency, Effectiveness, Usability", "Indexing, Searching, Caching", "Precision, Recall, F-measure"],
        answer: 1,
        explanation: "The three key aspects are Efficiency (speed of indexing/searching), Effectiveness (quality of results), and Usability (expressiveness of query language)."
    },

    {
        question: "When evaluating relevance, what is the assessment based on?",
        options: ["The exact words in the query", "The information need behind the query", "The number of documents retrieved", "The indexing speed"],
        answer: 1,
        explanation: "Relevance is judged relative to the user's underlying information need, not just whether the document contains the query words."
    },

    {
        question: "What is Precision in information retrieval?",
        options: ["Fraction of relevant documents that are retrieved", "Fraction of retrieved documents that are relevant", "Total number of relevant documents", "Speed of retrieving documents"],
        answer: 1,
        explanation: "Precision = (relevant retrieved) / (retrieved). It measures the accuracy of the retrieved set."
    },

    {
        question: "What is Recall in information retrieval?",
        options: ["Fraction of relevant documents that are retrieved", "Fraction of retrieved documents that are relevant", "Total number of retrieved documents", "Time taken to retrieve all relevant documents"],
        answer: 0,
        explanation: "Recall = (relevant retrieved) / (relevant). It measures the completeness of the retrieved set."
    },

    {
        question: "In the context of Precision and Recall, what does 'tp' stand for?",
        options: ["Total precision", "True positive", "Temporary precision", "Term presence"],
        answer: 1,
        explanation: "tp = true positives = number of relevant documents that are retrieved."
    },

    {
        question: "Why is Accuracy generally not used to evaluate IR systems?",
        options: ["It is too difficult to compute", "It is misleading when the data is highly imbalanced (many nonrelevant documents)", "It only measures speed, not quality", "It requires human assessors"],
        answer: 1,
        explanation: "In IR, the number of nonrelevant documents (tn) is usually huge, so accuracy can be high even if the system retrieves no relevant documents, making it a poor measure of effectiveness."
    },

    {
        question: "How can a system achieve high recall but low precision?",
        options: ["By retrieving very few documents", "By retrieving all documents for all queries", "By using a very strict query", "By ignoring stop words"],
        answer: 1,
        explanation: "If you retrieve every document in the collection, you will get all relevant documents (high recall), but also many nonrelevant ones (low precision)."
    },

    {
        question: "What is the F₁ measure?",
        options: ["The arithmetic mean of Precision and Recall", "The weighted harmonic mean of Precision and Recall with equal weight", "The difference between Precision and Recall", "The product of Precision and Recall"],
        answer: 1,
        explanation: "F₁ = 2PR / (P + R). It is the harmonic mean of Precision and Recall, balancing both equally."
    },

    {
        question: "What does a precision-recall curve show?",
        options: ["The speed of the retrieval system", "The trade-off between Precision and Recall at different retrieval cutoffs", "The size of the document collection", "The number of queries processed per second"],
        answer: 1,
        explanation: "A precision-recall curve plots Precision against Recall as more documents are retrieved, showing how Precision typically decreases as Recall increases."
    },

    {
        question: "Why is averaging performance over multiple queries important?",
        options: ["To reduce computation time", "To get a single performance measure that generalizes across different information needs", "To increase recall", "To improve indexing speed"],
        answer: 1,
        explanation: "A single query's precision-recall graph can be noisy or unrepresentative. Averaging over many queries gives a more reliable estimate of system performance."
    },

    {
        question: "What is a common benchmark used for IR evaluation?",
        options: ["ISO Standards", "TREC (Text REtrieval Conference)", "Google PageRank", "IEEE 754"],
        answer: 1,
        explanation: "TREC, run by NIST, provides standard document collections, queries, and relevance judgments for evaluating IR systems."
    },

    {
        question: "In the confusion matrix for IR, what does 'fp' represent?",
        options: ["False precision", "False positive (nonrelevant documents retrieved)", "Full precision", "Future prediction"],
        answer: 1,
        explanation: "fp = false positives = number of nonrelevant documents that are retrieved."
    },

    {
        question: "Which measure is more focused on the system's ability to return only relevant items?",
        options: ["Recall", "Precision", "F-measure", "Accuracy"],
        answer: 1,
        explanation: "Precision focuses on the purity of the retrieved set—how many of the returned items are actually relevant."
    },

    {
        question: "What does the F-measure combine?",
        options: ["Speed and accuracy", "Precision and Recall", "Indexing time and query time", "Relevance and novelty"],
        answer: 1,
        explanation: "The F-measure (and specifically F₁) is a single score that harmonizes Precision and Recall into one metric."
    },

    {
        question: "What is a typical trend between Precision and Recall as more documents are retrieved?",
        options: ["Both increase", "Precision increases, Recall decreases", "Precision decreases, Recall increases", "Both decrease"],
        answer: 2,
        explanation: "As you retrieve more documents to increase Recall (find more relevant items), Precision usually decreases because you include more nonrelevant items."
    },

    {
        question: "What is the main limitation of using only Precision for evaluation?",
        options: ["It ignores the system's ability to find all relevant documents", "It is too slow to compute", "It depends on query length", "It requires special hardware"],
        answer: 0,
        explanation: "A system could have high Precision by retrieving only a few highly relevant documents, but miss many other relevant ones (low Recall)."
    },

    {
        question: "How is 'Relevant' defined in TREC-style evaluations?",
        options: ["By automated algorithms", "By the query words matched", "By human expert assessors", "By the document's publication date"],
        answer: 2,
        explanation: "In standard benchmarks like TREC, human assessors judge whether a document is relevant to the information need, not just the query."
    },

    {
        question: "What does the '11-point precision' refer to?",
        options: ["Precision at 11 different recall levels (0.0, 0.1, ..., 1.0)", "Precision after 11 documents are retrieved", "Precision for queries with 11 terms", "The 11th version of the precision measure"],
        answer: 0,
        explanation: "11-point precision is a standard method where Precision is measured at 11 standard Recall levels (0%, 10%, ..., 100%) and then averaged across queries."
    },

    {
        question: "Which component of IR evaluation measures how well the query language can express complex needs?",
        options: ["Efficiency", "Effectiveness", "Usability", "Reliability"],
        answer: 2,
        explanation: "Usability includes the expressiveness of the query language—how easily and powerfully users can formulate their information needs."
    },

    {
        question: "If a system retrieves 10 documents, 7 of which are relevant, and there are 20 relevant documents in total, what is its Recall?",
        options: ["0.7", "0.35", "0.5", "0.2"],
        answer: 1,
        explanation: "Recall = relevant retrieved / relevant = 7 / 20 = 0.35."
    },

];






const biQuestions1 = [

    {
        question: "What is the main goal of Business Intelligence (BI)?",
        options: ["Increase storage capacity", "Enable interactive access to data for analysis", "Reduce data redundancy", "Enhance transaction processing"],
        answer: 1
    },
    {
        question: "BI initially emerged from:",
        options: ["CRM systems", "MIS reporting systems in the 1970s", "Online transaction processing", "Cloud computing"],
        answer: 1
    },
    {
        question: "Which component is not part of the BI architecture?",
        options: ["Data Warehouse", "Business Analytics", "Customer Relationship Management", "Business Performance Management"],
        answer: 2
    },
    {
        question: "The main purpose of a data warehouse is to:",
        options: ["Store transactional data", "Perform real-time updates", "Store and organize historical data", "Optimize inventory management"],
        answer: 2
    },
    {
        question: "OLTP stands for:",
        options: ["On-Line Transaction Processing", "Operational Level Technology Processing", "On-Level Technology Performance", "Offline Transaction Process"],
        answer: 0
    },
    {
        question: "What does OLAP primarily support?",
        options: ["Real-time updates", "Routine transaction processing", "Complex queries and data analysis", "Inventory management"],
        answer: 2
    },
    {
        question: "Which of the following describes Normalization?",
        options: ["Merging data to reduce storage", "Arranging data to eliminate redundancy", "Combining multiple tables for faster retrieval", "Creating backup copies of data"],
        answer: 1
    },
    {
        question: "Which of the following is NOT an identified style of BI by MicroStrategy, Corp.?",
        options: ["Cube analysis", "Data mining", "Ad-hoc queries", "Enterprise resource planning"],
        answer: 3
    },
    {
        question: "Descriptive Analytics is primarily concerned with:",
        options: ["Predicting future outcomes", "Optimizing current processes", "Understanding past and present trends", "Automating business operations"],
        answer: 2
    },
    {
        question: "Which analytics type aims to predict future customer behavior?",
        options: ["Descriptive", "Predictive", "Prescriptive", "Diagnostic"],
        answer: 1
    },
    {
        question: "Which analytics type focuses on making decisions to improve system performance?",
        options: ["Predictive", "Descriptive", "Prescriptive", "Diagnostic"],
        answer: 2
    },
    {
        question: "A BI dashboard is an example of which BI component?",
        options: ["Data Warehouse", "Business Analytics", "User Interface", "Data Mining"],
        answer: 2
    },
    {
        question: "Which term describes the process of optimizing a database to remove redundancy?",
        options: ["Denormalization", "Aggregation", "Normalization", "Fragmentation"],
        answer: 2
    },
    {
        question: "Which BI component measures and monitors Key Performance Indicators (KPIs)?",
        options: ["Data Warehouse", "Business Analytics", "Business Performance Management (BPM)", "User Interface"],
        answer: 2
    },
    {
        question: "Which of the following is a benefit of BI?",
        options: ["Reduced data storage", "Faster, more accurate reporting", "Increased data redundancy", "Increased transaction processing speed"],
        answer: 1
    },
    {
        question: "In which decade was the term “Business Intelligence” (BI) coined?",
        options: ["1970s", "1980s", "1990s", "2000s"],
        answer: 1
    },
    {
        question: "Which is primarily responsible for handling a company’s routine ongoing transactions?",
        options: ["OLAP", "Data Warehouse", "OLTP", "CRM"],
        answer: 2
    },
    {
        question: "Which of these processes combines tables to make data retrieval faster?",
        options: ["Normalization", "Denormalization", "Data Mining", "Aggregation"],
        answer: 1
    },
    {
        question: "Data Scientist skills often include:",
        options: ["Business process automation", "Basic Excel and SQL skills", "Advanced statistics and machine learning", "Inventory management"],
        answer: 2
    },
    {
        question: "A data analyst primarily works with:",
        options: ["Predictive analytics", "Business process management", "Data compilation and reporting", "Automated decision systems"],
        answer: 2
    },
    {
        question: "What does “DSS” stand for in BI terminology?",
        options: ["Data Science Systems", "Decision Support Systems", "Data Service System", "Decision Security Service"],
        answer: 1
    },
    {
        question: "Which BI style allows for 'slice-and-dice' analysis?",
        options: ["Cube analysis", "Enterprise reporting", "Ad-hoc queries", "Data mining"],
        answer: 0
    },
    {
        question: "In BI, “real-time view of corporate performance” is primarily provided by:",
        options: ["Ad-hoc reporting", "OLAP systems", "Online Transaction Processing", "Dashboards and portals"],
        answer: 3
    },
    {
        question: "What technology became prominent in BI by 2005?",
        options: ["Cloud storage", "Artificial Intelligence", "Data visualization", "Simple databases"],
        answer: 2
    },
    {
        question: "Data integrity is harder to maintain in:",
        options: ["OLAP systems", "Normalized tables", "Denormalized structures", "Real-time dashboards"],
        answer: 2
    },
    {
        question: "True or False: BI helps decision-makers analyze both historical and current data.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: OLTP systems are primarily used for complex, ad-hoc analysis.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: Denormalization reduces data redundancy.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: Predictive analytics aims to optimize current business performance.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: The user interface in BI architecture is typically used for storage.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: Data scientists usually require programming skills in languages like Python or R.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: Descriptive analytics helps in understanding trends and causes in data.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: Data warehouses are used mainly for transaction processing.",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "True or False: In normalization, data is structured to reduce redundancy and improve integrity.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "True or False: Dashboards provide a static view of business performance metrics.",
        options: ["True", "False"],
        answer: 1
    }
]





const biQuestions2 =


    [
        {
            "question": "What is a primary purpose of a data warehouse?",
            "options": ["Real-time processing", "Decision support", "Web browsing", "Transaction processing"],
            "answer": 1
        },
        {
            "question": "Which term describes data structured for analysis in data warehousing?",
            "options": ["OLTP", "Metadata", "OLAP", "E-commerce"],
            "answer": 2
        },
        {
            "question": "A data warehouse’s 'subject-oriented' nature primarily refers to:",
            "options": ["Storing daily transactions", "Organizing data by topics like sales and customers", "Enabling frequent data updates", "Supporting marketing activities only"],
            "answer": 1
        },
        {
            "question": "In a data warehouse, integration ensures that:",
            "options": ["All data is in real-time", "Data is updated hourly", "Data from different sources have a consistent format", "All data is anonymized"],
            "answer": 2
        },
        {
            "question": "Time-variant data in a warehouse means:",
            "options": ["Data is always current", "Data shows historical trends", "Data changes every week", "Only current year data is stored"],
            "answer": 1
        },
        {
            "question": "Which of the following is a characteristic of data warehousing?",
            "options": ["Nonvolatile data", "Real-time processing only", "High update frequency", "Unstructured data collection"],
            "answer": 0
        },
        {
            "question": "What is a dependent data mart?",
            "options": ["A data source external to the data warehouse", "A subset of the warehouse derived directly from it", "A data storage for real-time analytics", "A non-integrated collection of reports"],
            "answer": 1
        },
        {
            "question": "Which ETL process involves converting data to fit the warehouse structure?",
            "options": ["Extraction", "Transformation", "Load", "Integration"],
            "answer": 1
        },
        {
            "question": "A key benefit of a data warehouse is:",
            "options": ["Increased data entry speeds", "Real-time data modifications", "Centralized data for decision-making", "Personalized data storage for each department"],
            "answer": 2
        },
        {
            "question": "Data in an Operational Data Store (ODS) is typically:",
            "options": ["Historical", "Updated in real-time", "Subject to regular archiving", "Deleted frequently"],
            "answer": 1
        },
        {
            "question": "Which is a main component of a data warehouse?",
            "options": ["Database logs", "Middleware tools", "Social media plugins", "Data tables only"],
            "answer": 3
        },
        {
            "question": "Metadata in a data warehouse is used to:",
            "options": ["Store transaction data", "Describe the structure and rules for data use", "Automatically update all data", "Store unrelated information"],
            "answer": 1
        },
        {
            "question": "In ETL, the process of loading means:",
            "options": ["Gathering new data", "Storing transformed data in the warehouse", "Editing raw data", "Validating data changes"],
            "answer": 1
        },
        {
            "question": "Which is NOT a characteristic of a data warehouse?",
            "options": ["Time-variant data", "Integration of sources", "Volatile data", "Nonvolatile data"],
            "answer": 2
        },
        {
            "question": "What is Dimensional Modeling used for?",
            "options": ["Data cleaning", "Enhancing OLTP databases", "Structuring data for BI analysis", "Reducing storage requirements"],
            "answer": 2
        },
        {
            "question": "In a dimensional model, a 'fact' represents:",
            "options": ["Historical records only", "Business measurements like sales or expenses", "A type of metadata", "Data structure only"],
            "answer": 1
        },
        {
            "question": "Dimensions in a data warehouse:",
            "options": ["Define the context for facts", "Are numerical measurements only", "Cannot be organized hierarchically", "Are temporary data only"],
            "answer": 0
        },
        {
            "question": "Which component of the ETL process reads data from various sources?",
            "options": ["Extraction", "Transformation", "Load", "Cleansing"],
            "answer": 0
        },
        {
            "question": "In a data warehouse, 'granularity' refers to:",
            "options": ["Data type restrictions", "The level of detail in data", "Database size", "Update frequency"],
            "answer": 1
        },
        {
            "question": "A fact table typically consists of:",
            "options": ["Only primary keys", "Keys and measurements", "Metadata only", "Hierarchical dimensions"],
            "answer": 1
        },
        {
            "question": "True or False: A data warehouse can change or update data once it is stored.",
            "options": ["True", "False"],
            "answer": 1
        },
        {
            "question": "True or False: Dimensional modeling is a logical design technique for organizing data in BI.",
            "options": ["True", "False"],
            "answer": 0
        },
        {
            "question": "True or False: Operational Data Stores (ODS) are used for short-term decision-making.",
            "options": ["True", "False"],
            "answer": 0
        },
        {
            "question": "True or False: Metadata in a data warehouse is unimportant for business intelligence applications.",
            "options": ["True", "False"],
            "answer": 1
        },
        {
            "question": "True or False: ETL stands for Extraction, Transaction, and Loading.",
            "options": ["True", "False"],
            "answer": 1
        },
        {
            "question": "True or False: A data mart is smaller than an enterprise data warehouse and focuses on a single subject.",
            "options": ["True", "False"],
            "answer": 0
        },
        {
            "question": "True or False: A nonvolatile data warehouse means data cannot be overwritten or changed after being added.",
            "options": ["True", "False"],
            "answer": 0
        },
        {
            "question": "True or False: An independent data mart is created from an existing enterprise data warehouse.",
            "options": ["True", "False"],
            "answer": 1
        },
        {
            "question": "True or False: Data granularity is the degree to which data can be aggregated.",
            "options": ["True", "False"],
            "answer": 0
        },
        {
            "question": "True or False: Real-time data processing is a characteristic of all data warehouses.",
            "options": ["True", "False"],
            "answer": 1
        }

    ]









const biQuestions3 =
    [
        {
            "question": "Which schema type is known for having a central fact table connected to multiple dimension tables?",
            "options": ["Snowflake schema", "Star schema", "Galaxy schema", "Hybrid schema"],
            "answer": 1
        },
        {
            "question": "The main purpose of the fact table in a star schema is to:",
            "options": ["Store metadata about dimensions", "Contain measures and metrics for decision analysis", "Link dimension tables together", "Manage database transactions"],
            "answer": 1
        },
        {
            "question": "In a star schema, dimension tables are:",
            "options": ["Denormalized", "Normalized", "Linked to each other", "Used only for indexing"],
            "answer": 0
        },
        {
            "question": "Which schema is more optimized for query performance and has simpler design requirements?",
            "options": ["Snowflake schema", "Hybrid schema", "Star schema", "Galaxy schema"],
            "answer": 2
        },
        {
            "question": "What is a characteristic of the snowflake schema?",
            "options": ["Denormalized dimension tables", "Dimension tables linked in a hierarchical structure", "Simpler design than the star schema", "High data redundancy"],
            "answer": 1
        },
        {
            "question": "A major advantage of the snowflake schema is:",
            "options": ["Lower disk space usage due to normalization", "Faster query response than star schema", "Reduced table complexity", "Direct links between fact tables"],
            "answer": 0
        },
        {
            "question": "In a star schema, the foreign keys in the fact table:",
            "options": ["Refer to other fact tables", "Link to the primary keys in dimension tables", "Are unused during queries", "Are only used for data integrity checks"],
            "answer": 1
        },
        {
            "question": "Which of the following best describes 'data redundancy' in a star schema?",
            "options": ["All data is stored only once", "Duplicate data is minimized due to normalization", "Some data may be repeated across tables", "Tables contain only unique data entries"],
            "answer": 2
        },
        {
            "question": "The snowflake schema is considered more complex than the star schema because:",
            "options": ["It does not use foreign keys", "It normalizes dimensions, resulting in more tables", "It has no dimension tables", "It relies on real-time data updates"],
            "answer": 1
        },
        {
            "question": "What type of schema typically supports ad hoc querying and easy maintenance?",
            "options": ["Snowflake schema", "Star schema", "Hybrid schema", "ER schema"],
            "answer": 1
        },
        {
            "question": "In data warehousing, a 'conformed dimension' refers to:",
            "options": ["A unique dimension used in only one schema", "A dimension shared across multiple fact tables", "A measure in the fact table", "An index used to speed up queries"],
            "answer": 1
        },
        {
            "question": "Which schema would be best suited for a data mart with simple one-to-many relationships?",
            "options": ["Star schema", "Snowflake schema", "Multidimensional schema", "ER schema"],
            "answer": 0
        },
        {
            "question": "Which of the following is a shared characteristic of both star and snowflake schemas?",
            "options": ["High data redundancy", "A central fact table surrounded by dimensions", "Use of normalized dimension tables only", "Faster updates for transactional systems"],
            "answer": 1
        },
        {
            "question": "In an enterprise setting, multiple fact tables connected to shared dimensions are typical of:",
            "options": ["A multi-fact star model", "A normalized schema", "An ER schema", "A hybrid snowflake model"],
            "answer": 0
        },
        {
            "question": "Entity-relationship (ER) modeling is generally more suited for:",
            "options": ["Analytical processing in data warehouses", "Transactional systems (OLTP)", "Dimensional modeling in BI", "Generating ad hoc reports"],
            "answer": 1
        },
        {
            "question": "Dimensional modeling is primarily used in:",
            "options": ["OLTP systems", "Business intelligence (BI) applications", "Real-time data processing", "Document databases"],
            "answer": 1
        },
        {
            "question": "In dimensional modeling, data redundancy is:",
            "options": ["Eliminated entirely", "Maintained to support complex analysis", "Considered an error to be corrected", "Caused by normalized dimension tables"],
            "answer": 1
        },
        {
            "question": "Which type of schema would require the most joins during queries?",
            "options": ["Star schema", "Snowflake schema", "Hybrid schema", "Multi-fact schema"],
            "answer": 1
        },
        {
            "question": "The fact table in a dimensional model:",
            "options": ["Stores only unique keys", "Contains both foreign keys and measures", "Is only used for primary key data", "Uses only denormalized data"],
            "answer": 1
        },
        {
            "question": "In a snowflake schema, dimension tables:",
            "options": ["Are all denormalized", "Are split into multiple related tables", "Contain only foreign keys", "Must all link directly to the fact table"],
            "answer": 1
        },
        {
            "question": "True or False: The snowflake schema has a simpler design than the star schema.",
            "options": ["True", "False"],
            "answer": 1
        },
        {
            "question": "True or False: In a star schema, dimension tables have a one-to-many relationship with the fact table.",
            "options": ["True", "False"],
            "answer": 0
        },
        {
            "question": "True or False: Dimensional modeling is best suited for transactional systems rather than business intelligence applications.",
            "options": ["True", "False"],
            "answer": 1
        },
        {
            "question": "True or False: The star schema is optimized for query performance by reducing the number of joins needed.",
            "options": ["True", "False"],
            "answer": 0
        },
        {
            "question": "True or False: Normalized dimension tables in a snowflake schema reduce data redundancy.",
            "options": ["True", "False"],
            "answer": 0
        }
    ]







const biQuestions4 =
    [
        {
            "question": "Which term refers to the definition of what a single row in a fact table will represent?",
            "options": ["Dimension", "Measure", "Granularity", "Hierarchy"],
            "answer": 2
        },
        {
            "question": "In a fact table, what does the grain represent?",
            "options": ["Level of normalization", "Level of information detail", "Type of schema used", "Dimension hierarchy"],
            "answer": 1
        },
        {
            "question": "Which type of fact table records data at each individual business event level?",
            "options": ["Periodic fact", "Transaction fact", "Accumulating fact", "Aggregate fact"],
            "answer": 1
        },
        {
            "question": "Which fact table type is known for capturing the status of facts at regular time intervals?",
            "options": ["Transaction fact", "Periodic fact", "Accumulating fact", "Snapshot fact"],
            "answer": 3
        },
        {
            "question": "A transaction fact table typically grows very quickly because:",
            "options": ["It has a high level of granularity", "It stores data at a monthly level", "It only records totals", "It uses multiple dimensions"],
            "answer": 0
        },
        {
            "question": "An example of a periodic fact table would be:",
            "options": ["Recording each purchase at a store", "Summarizing daily account balances at month-end", "Calculating a final shipping date", "Tracking customer feedback scores"],
            "answer": 1
        },
        {
            "question": "Which fact type captures all key events in a process from beginning to end, updating each step as it progresses?",
            "options": ["Transaction fact", "Periodic fact", "Accumulating fact", "Event fact"],
            "answer": 2
        },
        {
            "question": "Which of these characteristics applies to an accumulating fact table?",
            "options": ["Records one row per transaction", "Stores data for a defined process with multiple milestones", "Records only a snapshot at a single point in time", "Does not change once the row is created"],
            "answer": 1
        },
        {
            "question": "Which of the following scenarios would most likely use an accumulating fact table?",
            "options": ["Tracking daily sales", "Monitoring insurance claim processing stages", "Logging website visits", "Recording monthly inventory"],
            "answer": 1
        },
        {
            "question": "Additive measures in fact tables allow for:",
            "options": ["Summing values across all dimensions", "Summing values across only some dimensions", "Dividing values across dimensions", "Storing non-numeric data"],
            "answer": 0
        },
        {
            "question": "A measure like 'account balance' that cannot be summed across time is known as:",
            "options": ["Additive", "Semi-additive", "Non-additive", "Derived"],
            "answer": 1
        },
        {
            "question": "Which type of fact cannot be added across any dimensions due to its nature, often involving ratios or percentages?",
            "options": ["Additive fact", "Semi-additive fact", "Non-additive fact", "Snapshot fact"],
            "answer": 2
        },
        {
            "question": "Which is a characteristic of derived facts in a fact table?",
            "options": ["Derived facts are always additive", "Derived facts require complex relationships", "Derived facts are calculated from other measures", "Derived facts are stored as textual data only"],
            "answer": 2
        },
        {
            "question": "An example of a derived fact could be:",
            "options": ["Profit margin percentage", "Total sales amount after applying a discount", "The transaction date", "Customer ID"],
            "answer": 0
        },
        {
            "question": "Textual facts in a fact table generally store:",
            "options": ["Dates only", "Quantitative data", "Descriptive data or flags", "Calculations of additive facts"],
            "answer": 2
        },
        {
            "question": "What type of measure can be summed across all dimensions?",
            "options": ["Additive", "Non-additive", "Semi-additive", "Derived"],
            "answer": 0
        },
        {
            "question": "Which measure type is challenging to aggregate across all dimensions?",
            "options": ["Additive measure", "Semi-additive measure", "Derived measure", "Non-additive measure"],
            "answer": 1
        },
        {
            "question": "The grain of a fact table affects which of the following?",
            "options": ["Number of dimensions available", "Schema type used", "Querying speed only", "Reporting hierarchy only"],
            "answer": 0
        },
        {
            "question": "What does a transaction fact table primarily capture?",
            "options": ["The entire life cycle of a process", "Data snapshots over time", "Individual business events or transactions", "Summaries for each quarter"],
            "answer": 2
        },
        {
            "question": "Which of these fact types would you use to analyze monthly sales trends?",
            "options": ["Transaction fact", "Periodic fact", "Accumulating fact", "Snapshot fact"],
            "answer": 3
        },
        {
            "question": "Which type of fact table is often used to track event milestones such as 'order placed,' 'order shipped,' and 'order delivered'?",
            "options": ["Periodic fact", "Transaction fact", "Accumulating fact", "Snapshot fact"],
            "answer": 2
        },
        {
            "question": "In data warehousing, what does granularity refer to?",
            "options": ["Database storage format", "Level of data detail in the fact table", "Data redundancy in dimension tables", "Frequency of data updates"],
            "answer": 1
        },
        {
            "question": "In which fact table type is each new transaction represented by a single row?",
            "options": ["Transaction fact", "Periodic fact", "Accumulating fact", "Aggregate fact"],
            "answer": 0
        },
        {
            "question": "Which fact type is best for representing the latest status of a fact as of a certain date?",
            "options": ["Transaction fact", "Periodic fact", "Accumulating fact", "Snapshot fact"],
            "answer": 3
        },
        {
            "question": "In data modeling, what term refers to facts created from performing calculations on other fact measures?",
            "options": ["Additive facts", "Derived facts", "Non-additive facts", "Semi-additive facts"],
            "answer": 1
        },
        {
            "question": "True or False: Granularity in a fact table always refers to the amount of data in each column.",
            "options": ["True", "False"],
            "answer": 1
        },
        {
            "question": "True or False: A transaction fact table is known for storing a record for the entire process lifecycle.",
            "options": ["True", "False"],
            "answer": 1
        },
        {
            "question": "True or False: Periodic fact tables capture snapshots of data for specific time intervals.",
            "options": ["True", "False"],
            "answer": 0
        },
        {
            "question": "True or False: Semi-additive measures can be aggregated across all dimensions, including time.",
            "options": ["True", "False"],
            "answer": 1
        },
        {
            "question": "True or False: Accumulating fact tables are often used to analyze processes with clear stages or milestones.",
            "options": ["True", "False"],
            "answer": 0
        },
        {
            "question": "Which SQL function is used to get the current date and time?",
            "options": [
                "GETDATE()",
                "NOW()",
                "CURDATE()",
                "SYSDATE()"
            ],
            "answer": 0
        },
        {
            "question": "What is the purpose of the SQL UPDATE statement?",
            "options": [
                "To delete data from a table",
                "To modify existing data in a table",
                "To add new data to a table",
                "To retrieve data from a table"
            ],
            "answer": 1
        },
        {
            "question": "What is the default sorting order used in the ORDER BY clause?",
            "options": [
                "Descending",
                "Ascending",
                "Alphabetical",
                "Random"
            ],
            "answer": 1
        },
        {
            "question": "Which of the following is true about a SQL Primary Key?",
            "options": [
                "It can contain NULL values",
                "It uniquely identifies each row in a table",
                "It can contain duplicate values",
                "It is an optional constraint"
            ],
            "answer": 1
        },
        {
            "question": "What does the SQL HAVING clause do?",
            "options": [
                "Filters rows before grouping",
                "Groups rows based on a specified condition",
                "Filters groups after aggregation",
                "Sorts the rows"
            ],
            "answer": 2
        },
        {
            "question": "Which SQL command is used to add a new row of data to a table?",
            "options": [
                "INSERT",
                "ADD",
                "INSERT INTO",
                "PUT"
            ],
            "answer": 0
        },
        {
            "question": "What is the purpose of the SQL BETWEEN operator?",
            "options": [
                "Filters the result set by matching a pattern",
                "Checks if a value falls within a given range",
                "Combines results from two queries",
                "Specifies conditions for joining tables"
            ],
            "answer": 1
        },
        {
            "question": "Which data type is used in SQL to store variable-length strings?",
            "options": [
                "CHAR",
                "VARCHAR",
                "TEXT",
                "STRING"
            ],
            "answer": 1
        },
        {
            "question": "What is a subquery in SQL?",
            "options": [
                "A query that is embedded inside another query",
                "A query that runs in parallel to another query",
                "A query that returns only one column",
                "A query that modifies data in multiple tables"
            ],
            "answer": 0
        },
        {
            "question": "What does the SQL LIMIT clause do?",
            "options": [
                "Limits the number of rows returned in a query",
                "Limits the range of values returned in a column",
                "Limits the size of the database",
                "Limits the execution time of a query"
            ],
            "answer": 0
        },
        {
            "question": "Which SQL function is used to return the total sum of a numeric column?",
            "options": [
                "SUM()",
                "TOTAL()",
                "COUNT()",
                "AVG()"
            ],
            "answer": 0
        },
        {
            "question": "Which of the following SQL clauses is used to filter results after the GROUP BY operation?",
            "options": [
                "WHERE",
                "HAVING",
                "FILTER",
                "GROUP BY"
            ],
            "answer": 1
        },
        {
            "question": "What does the SQL LIKE operator do?",
            "options": [
                "Matches exact values",
                "Matches patterns in a column",
                "Filters results by range",
                "Joins tables based on a condition"
            ],
            "answer": 1
        },
        {
            "question": "What is the function of the SQL DISTINCT keyword?",
            "options": [
                "Removes duplicate values from the result set",
                "Joins multiple tables",
                "Groups data by unique values",
                "Sorts results in ascending order"
            ],
            "answer": 0
        },
        {
            "question": "Which of the following is a valid way to declare a column as a foreign key in SQL?",
            "options": [
                "FOREIGN KEY (column_name) REFERENCES table_name",
                "REFERENCES table_name (column_name)",
                "PRIMARY KEY (column_name)",
                "CONSTRAINT FOREIGN KEY table_name"
            ],
            "answer": 0
        },
        {
            "question": "Which of these SQL commands is used to remove a table from a database?",
            "options": [
                "DROP TABLE",
                "DELETE TABLE",
                "REMOVE TABLE",
                "CLEAR TABLE"
            ],
            "answer": 0
        },
        {
            "question": "Which SQL command is used to modify the structure of an existing table?",
            "options": [
                "ALTER TABLE",
                "MODIFY TABLE",
                "UPDATE TABLE",
                "CHANGE TABLE"
            ],
            "answer": 0
        },
        {
            "question": "What does the SQL UNION operator do?",
            "options": [
                "Combines the results of two queries, removing duplicates",
                "Combines results from two queries, keeping duplicates",
                "Joins tables based on a common column",
                "Filters results by multiple conditions"
            ],
            "answer": 0
        },
        {
            "question": "What is the purpose of an index in a SQL database?",
            "options": [
                "To speed up query execution",
                "To ensure data integrity",
                "To store duplicate data",
                "To manage database backups"
            ],
            "answer": 0
        },
        {
            "question": "What does the SQL SELECT INTO statement do?",
            "options": [
                "Creates a new table and inserts selected data into it",
                "Retrieves data from a table",
                "Updates an existing table with new data",
                "Joins multiple tables together"
            ],
            "answer": 0
        }
    ]



const biQuestions5 = [
    {
        "question": "What is the main goal of Business Intelligence (BI)?",
        "options": [
            "Increase storage capacity",
            "Enable interactive access to data for analysis",
            "Reduce data redundancy",
            "Enhance transaction processing"
        ],
        "answer": 1,
        "explanation": "BI focuses on providing interactive access to data for analysis to support business decision-making."
    },
    {
        "question": "Which type of analytics is primarily associated with Data Science?",
        "options": [
            "Descriptive analytics",
            "Predictive analytics",
            "Standard reporting",
            "Dashboard creation"
        ],
        "answer": 1,
        "explanation": "Data Science is strongly associated with predictive analytics, using techniques like predictive modeling and forecasting."
    },
    {
        "question": "What is a typical question asked in Business Intelligence?",
        "options": [
            "What will happen next?",
            "What's the optimal scenario?",
            "What happened last quarter?",
            "Why is this happening?"
        ],
        "answer": 2,
        "explanation": "BI typically asks retrospective questions like 'What happened last quarter?' focusing on past performance."
    },
    {
        "question": "Which role is responsible for the genesis of an analytics project?",
        "options": [
            "Project Manager",
            "Business User",
            "Project Sponsor",
            "Data Scientist"
        ],
        "answer": 2,
        "explanation": "The Project Sponsor initiates the project, provides requirements, and defines the core business problem."
    },
    {
        "question": "Who typically creates dashboards and reports in an analytics project?",
        "options": [
            "Data Engineer",
            "Business Intelligence Analyst",
            "Database Administrator",
            "Data Scientist"
        ],
        "answer": 1,
        "explanation": "Business Intelligence Analysts create dashboards and reports based on their understanding of KPIs and business metrics."
    },
    {
        "question": "Which role provisions and configures the database environment?",
        "options": [
            "Data Engineer",
            "Business User",
            "Database Administrator",
            "Project Manager"
        ],
        "answer": 2,
        "explanation": "The Database Administrator (DBA) sets up and configures databases to support analytics needs."
    },
    {
        "question": "What is the primary responsibility of a Data Engineer?",
        "options": [
            "Creating business strategies",
            "Tuning SQL queries and performing data extractions",
            "Providing project funding",
            "Defining business problems"
        ],
        "answer": 1,
        "explanation": "Data Engineers leverage technical skills for SQL tuning, data extraction, and data ingestion into analytic sandboxes."
    },
    {
        "question": "Which role provides subject matter expertise for analytical techniques and data modeling?",
        "options": [
            "Business User",
            "Project Sponsor",
            "Data Scientist",
            "Project Manager"
        ],
        "answer": 2,
        "explanation": "Data Scientists provide expertise in analytical techniques, data modeling, and applying valid methods to business problems."
    },
    {
        "question": "What is the first phase of the Data Analytics Lifecycle?",
        "options": [
            "Data Preparation",
            "Discovery",
            "Model Planning",
            "Model Building"
        ],
        "answer": 1,
        "explanation": "Phase 1 is Discovery, where the team learns the business domain and frames the business problem."
    },
    {
        "question": "In which phase does the team learn the business domain and frame the business problem?",
        "options": [
            "Data Preparation",
            "Discovery",
            "Model Planning",
            "Communicate Results"
        ],
        "answer": 1,
        "explanation": "The Discovery phase involves learning the business domain, framing problems, and formulating initial hypotheses."
    },
    {
        "question": "Which phase is typically the most labor-intensive in the analytics lifecycle?",
        "options": [
            "Discovery",
            "Data Preparation",
            "Model Planning",
            "Model Building"
        ],
        "answer": 1,
        "explanation": "Data Preparation is often the most labor-intensive, with teams spending 50% or more of project time in this phase."
    },
    {
        "question": "What percentage of project time do teams typically spend in the Data Preparation phase?",
        "options": [
            "10-20%",
            "25-35%",
            "50% or more",
            "Less than 10%"
        ],
        "answer": 2,
        "explanation": "Teams commonly spend at least 50% of a data science project's time in Data Preparation."
    },
    {
        "question": "What is an analytic sandbox?",
        "options": [
            "A physical storage facility",
            "A workspace for exploring data without interfering with production databases",
            "A type of database for transactional processing",
            "A tool for data visualization"
        ],
        "answer": 1,
        "explanation": "An analytic sandbox is a workspace where teams can explore data without affecting live production databases."
    },
    {
        "question": "How large should an analytic sandbox be compared to the original datasets?",
        "options": [
            "The same size",
            "2-3 times larger",
            "5-10 times larger",
            "100 times larger"
        ],
        "answer": 2,
        "explanation": "A good rule is to plan for the sandbox to be at least 5-10 times the size of original datasets."
    },
    {
        "question": "What does ETLT stand for?",
        "options": [
            "Extract, Transform, Load, Test",
            "Extract, Transfer, Load, Transform",
            "Extract, Load, Transform",
            "Extract, Transform, Load, Transfer"
        ],
        "answer": 2,
        "explanation": "ETLT stands for Extract, Load, and Transform, where data is extracted in raw form before transformation."
    },
    {
        "question": "What is the main difference between ETL and ELT approaches?",
        "options": [
            "ETL is faster",
            "ELT preserves raw data before transformation",
            "ETL is only for small datasets",
            "ELT doesn't use transformation"
        ],
        "answer": 1,
        "explanation": "ELT (Extract, Load, Transform) preserves raw data in the sandbox before transformation, unlike ETL."
    },
    {
        "question": "What technologies are mentioned for parallelizing Big ETL processes?",
        "options": [
            "Excel and Access",
            "Hadoop, Spark, and Flink",
            "Python and R only",
            "SQL Server and Oracle"
        ],
        "answer": 1,
        "explanation": "Hadoop, Spark, and Flink are mentioned for parallelizing large data movements in Big ETL processes."
    },
    {
        "question": "What is the purpose of data conditioning?",
        "options": [
            "To increase data volume",
            "To clean, normalize, and transform data",
            "To create business strategies",
            "To visualize data only"
        ],
        "answer": 1,
        "explanation": "Data conditioning involves cleaning data, normalizing datasets, and performing transformations to prepare for analysis."
    },
    {
        "question": "Why should multiple team members be involved in data conditioning decisions?",
        "options": [
            "To increase project costs",
            "To avoid returning to retrieve discarded data",
            "To make the process slower",
            "To create more documentation"
        ],
        "answer": 1,
        "explanation": "Involving multiple team members prevents situations where discarded data needs to be retrieved later."
    },
    {
        "question": "Which tool is described as 'a free, open source, powerful tool for working with messy data'?",
        "options": [
            "Hadoop",
            "Alpine Miner",
            "OpenRefine",
            "Data Wrangler"
        ],
        "answer": 2,
        "explanation": "OpenRefine (formerly Google Refine) is described as a free, open source tool for working with messy data."
    },
    {
        "question": "What is the main focus of Phase 3 (Model Planning)?",
        "options": [
            "Data collection",
            "Determining methods and techniques for model building",
            "Project funding",
            "Final presentation"
        ],
        "answer": 1,
        "explanation": "Model Planning involves determining methods, techniques, and workflows for subsequent model building."
    },
    {
        "question": "What are the two main steps in Phase 3 (Model Planning)?",
        "options": [
            "Data collection and storage",
            "Funding and resource allocation",
            "Data exploration/variable selection and model selection",
            "Testing and deployment"
        ],
        "answer": 2,
        "explanation": "Phase 3 has two steps: Data exploration/variable selection and Model selection."
    },
    {
        "question": "What is the objective of data exploration in Phase 3?",
        "options": [
            "To increase data volume",
            "To understand relationships among variables",
            "To create final reports",
            "To hire more team members"
        ],
        "answer": 1,
        "explanation": "Data exploration aims to understand variable relationships to inform variable and method selection."
    },
    {
        "question": "What should the team aim for in variable selection?",
        "options": [
            "Including every possible variable",
            "Capturing the most essential predictors",
            "Using only demographic variables",
            "Excluding all correlated variables"
        ],
        "answer": 1,
        "explanation": "Teams should aim to capture the most essential predictors rather than including every possible variable."
    },
    {
        "question": "In Phase 4 (Model Building), what are the three types of datasets needed?",
        "options": [
            "Small, medium, and large",
            "Training, testing, and production",
            "Raw, processed, and final",
            "Internal, external, and mixed"
        ],
        "answer": 1,
        "explanation": "Phase 4 requires datasets for training, testing, and production purposes."
    },
    {
        "question": "What is the purpose of holding aside test data?",
        "options": [
            "To reduce storage costs",
            "For validating models after training",
            "To make training faster",
            "For data visualization only"
        ],
        "answer": 1,
        "explanation": "Test data (hold-out data) is used to validate models after they have been trained on training data."
    },
    {
        "question": "What happens in Phase 5 (Communicate Results)?",
        "options": [
            "Data is collected",
            "Models are trained",
            "Findings are articulated to stakeholders",
            "New data sources are identified"
        ],
        "answer": 2,
        "explanation": "Phase 5 involves comparing outcomes to success criteria and articulating findings to stakeholders."
    },
    {
        "question": "Which tool provides a GUI for creating analytic workflows?",
        "options": [
            "Hadoop",
            "Alpine Miner",
            "OpenRefine",
            "SQL Server"
        ],
        "answer": 1,
        "explanation": "Alpine Miner provides a graphical user interface for creating analytic workflows."
    },
    {
        "question": "Where was Data Wrangler developed?",
        "options": [
            "Microsoft",
            "Google",
            "Stanford University",
            "MIT"
        ],
        "answer": 2,
        "explanation": "Data Wrangler was developed at Stanford University for data cleaning and transformation."
    },
    {
        "question": "What advantage does Data Wrangler offer for larger datasets?",
        "options": [
            "It processes data instantly",
            "Operations can be written as Java/Python code for offline execution",
            "It requires no programming knowledge",
            "It only works with small datasets"
        ],
        "answer": 1,
        "explanation": "Data Wrangler allows operations to be output as Java or Python code for execution against larger datasets offline."
    },
    {
        "question": "What is a common way to conduct data exploration in Phase 3?",
        "options": [
            "Manual calculations",
            "Data visualizations",
            "Guessing relationships",
            "Asking stakeholders only"
        ],
        "answer": 1,
        "explanation": "Data visualizations are a common method for conducting data exploration to understand variable relationships."
    },
    {
        "question": "What should teams focus on in variable selection?",
        "options": [
            "Including all available variables",
            "Variables that demonstrate strong relationship to outcomes",
            "Variables that are easy to collect",
            "Only numerical variables"
        ],
        "answer": 1,
        "explanation": "Teams should focus on variables that demonstrate strong relationships to outcomes rather than to other inputs."
    },
    {
        "question": "What types of techniques are grouped in machine learning for model selection?",
        "options": [
            "Classification, association rules, and clustering",
            "Data entry, storage, and retrieval",
            "Funding, planning, and execution",
            "Collection, processing, and deletion"
        ],
        "answer": 0,
        "explanation": "Machine learning techniques are grouped into categories like classification, association rules, and clustering."
    },
    {
        "question": "Why is it critical to ensure training and test datasets are robust?",
        "options": [
            "To reduce project costs",
            "For accurate model development and validation",
            "To make presentations more attractive",
            "To comply with regulations"
        ],
        "answer": 1,
        "explanation": "Robust training and test datasets are critical for accurate model development and validation."
    },
    {
        "question": "What should the team consider when communicating results?",
        "options": [
            "Only positive findings",
            "Caveats, assumptions, and limitations",
            "Technical details only",
            "Future project plans"
        ],
        "answer": 1,
        "explanation": "When communicating results, teams should consider caveats, assumptions, and limitations of the findings."
    }
];







const biQuestions6 = [
    {
        "question": "What is the main goal of association rule mining?",
        "options": [
            "To classify data into predefined categories",
            "To find associations between items in large datasets",
            "To reduce data dimensionality",
            "To predict future values based on historical data"
        ],
        "answer": 1,
        "explanation": "Association rule mining aims to discover interesting relationships or associations between items in large datasets."
    },
    {
        "question": "Which of the following is a key application of association rules mentioned in the lecture?",
        "options": [
            "Stock price prediction",
            "Market basket analysis",
            "Image recognition",
            "Sentiment analysis"
        ],
        "answer": 1,
        "explanation": "Market basket analysis is a key application where association rules help identify products frequently sold together."
    },
    {
        "question": "What does KDD stand for in data mining?",
        "options": [
            "Knowledge Data Discovery",
            "Knowledge Discovery in Databases",
            "Key Data Development",
            "Knowledge Distribution Database"
        ],
        "answer": 1,
        "explanation": "KDD stands for Knowledge Discovery in Databases, which is the comprehensive process that encompasses data mining."
    },
    {
        "question": "Which type of machine learning is association rule mining classified under?",
        "options": [
            "Supervised learning",
            "Reinforcement learning",
            "Unsupervised learning",
            "Semi-supervised learning"
        ],
        "answer": 2,
        "explanation": "Association rule mining is an unsupervised learning technique as it works with unlabeled data to find patterns."
    },
    {
        "question": "What is the formula for calculating support of an itemset?",
        "options": [
            "Number of transactions containing itemset / Total number of transactions",
            "Number of transactions containing itemset / Number of items in itemset",
            "Total number of transactions / Number of transactions containing itemset",
            "Number of items in itemset / Total number of transactions"
        ],
        "answer": 0,
        "explanation": "Support = (Number of transactions containing the itemset) / (Total number of transactions)."
    },
    {
        "question": "For the rule {Milk, Diaper} → {Beer} with support count of 2 and total transactions of 5, what is the support?",
        "options": [
            "0.2",
            "0.4",
            "0.67",
            "0.5"
        ],
        "answer": 1,
        "explanation": "Support = σ(Milk, Diaper, Beer) / |T| = 2/5 = 0.4"
    },
    {
        "question": "What is the formula for calculating confidence of a rule X → Y?",
        "options": [
            "σ(X ∪ Y) / σ(X)",
            "σ(X) / σ(Y)",
            "σ(X ∪ Y) / σ(Y)",
            "σ(X) / σ(X ∪ Y)"
        ],
        "answer": 0,
        "explanation": "Confidence = σ(X ∪ Y) / σ(X), where σ is the support count."
    },
    {
        "question": "For the rule {Milk, Diaper} → {Beer} with support count of 2 for the itemset and support count of 3 for {Milk, Diaper}, what is the confidence?",
        "options": [
            "0.4",
            "0.67",
            "1.0",
            "0.5"
        ],
        "answer": 1,
        "explanation": "Confidence = σ(Milk, Diaper, Beer) / σ(Milk, Diaper) = 2/3 = 0.67"
    },
    {
        "question": "What is the Apriori principle?",
        "options": [
            "If an itemset is infrequent, all its supersets are frequent",
            "If an itemset is frequent, all its subsets are also frequent",
            "If an itemset is frequent, all its supersets are frequent",
            "If an itemset is infrequent, all its subsets are infrequent"
        ],
        "answer": 1,
        "explanation": "The Apriori principle states: If an itemset is frequent, then all of its subsets must also be frequent."
    },
    {
        "question": "What property of support makes the Apriori principle work?",
        "options": [
            "Monotone property",
            "Anti-monotone property",
            "Symmetric property",
            "Transitive property"
        ],
        "answer": 1,
        "explanation": "The anti-monotone property of support ensures that the support of an itemset never exceeds the support of its subsets."
    },
    {
        "question": "Given 5 items, how many possible candidate itemsets are there?",
        "options": [
            "5",
            "10",
            "32",
            "25"
        ],
        "answer": 2,
        "explanation": "For d items, there are 2^d possible candidate itemsets. For 5 items: 2^5 = 32."
    },
    {
        "question": "What is the first step in the Apriori algorithm?",
        "options": [
            "Generate frequent 2-itemsets",
            "Generate frequent 1-itemsets",
            "Generate all possible rules",
            "Calculate confidence for all rules"
        ],
        "answer": 1,
        "explanation": "The Apriori algorithm starts by generating frequent 1-itemsets (individual items that meet the minimum support threshold)."
    },
    {
        "question": "In the Apriori example with minimum support = 3, which item was infrequent in the 1-itemsets?",
        "options": [
            "Item 1",
            "Item 2",
            "Item 3",
            "Item 4"
        ],
        "answer": 3,
        "explanation": "Item 4 had support count of 1, which is less than the minimum support of 3, making it infrequent."
    },
    {
        "question": "What happens during the pruning step in Apriori algorithm?",
        "options": [
            "Remove transactions from the database",
            "Remove candidate itemsets containing infrequent subsets",
            "Increase the minimum support threshold",
            "Decrease the minimum confidence threshold"
        ],
        "answer": 1,
        "explanation": "Pruning removes candidate itemsets that contain subsets which are infrequent, based on the Apriori principle."
    },
    {
        "question": "Which of the following is NOT a factor affecting the complexity of association rule mining?",
        "options": [
            "Choice of minimum support threshold",
            "Dimensionality (number of items)",
            "Size of the database",
            "Color of the user interface"
        ],
        "answer": 3,
        "explanation": "Color of the user interface does not affect the computational complexity of association rule mining algorithms."
    },
    {
        "question": "What is the two-step approach in association rule mining?",
        "options": [
            "1. Data cleaning, 2. Rule generation",
            "1. Frequent itemset generation, 2. Rule generation",
            "1. Data collection, 2. Visualization",
            "1. Classification, 2. Clustering"
        ],
        "answer": 1,
        "explanation": "The two-step approach: 1) Generate all frequent itemsets, 2) Generate high confidence rules from frequent itemsets."
    },
    {
        "question": "What is a k-itemset?",
        "options": [
            "An itemset containing exactly k transactions",
            "An itemset containing exactly k items",
            "An itemset with support equal to k",
            "An itemset with confidence equal to k"
        ],
        "answer": 1,
        "explanation": "A k-itemset is an itemset that contains exactly k items."
    },
    {
        "question": "In the market basket example, what is the support count for {Milk, Diaper, Beer}?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": 1,
        "explanation": "From the transaction table, {Milk, Diaper, Beer} appears in transactions 3 and 4, giving a support count of 2."
    },
    {
        "question": "Which algorithm is NOT mentioned as popular for finding frequent itemsets?",
        "options": [
            "Apriori",
            "FP-Growth",
            "Eclat",
            "K-Means"
        ],
        "answer": 3,
        "explanation": "K-Means is a clustering algorithm, not specifically for finding frequent itemsets in association rule mining."
    },
    {
        "question": "What does the implication X → Y mean in association rules?",
        "options": [
            "X causes Y",
            "X and Y are mutually exclusive",
            "X and Y co-occur frequently",
            "X is a subset of Y"
        ],
        "answer": 2,
        "explanation": "The implication means co-occurrence, not causality. It indicates that when X appears, Y also tends to appear."
    },
    {
        "question": "In supervised learning, what is provided to the algorithm?",
        "options": [
            "Only input variables",
            "Only output variables",
            "Pairs of inputs and desired outputs",
            "No guidance at all"
        ],
        "answer": 2,
        "explanation": "In supervised learning, the algorithm is provided with pairs of inputs and desired outputs (labeled data)."
    },
    {
        "question": "What is the main characteristic of unsupervised learning?",
        "options": [
            "Uses labeled data",
            "Uses input-output pairs",
            "Works with unlabeled data without guidance",
            "Requires constant human feedback"
        ],
        "answer": 2,
        "explanation": "Unsupervised learning works with information that is neither classified nor labeled, allowing the algorithm to act without guidance."
    },
    {
        "question": "Which data mining task is association rule discovery classified as?",
        "options": [
            "Predictive",
            "Descriptive",
            "Classification",
            "Regression"
        ],
        "answer": 1,
        "explanation": "Association rule discovery is a descriptive data mining task that finds human-interpretable patterns describing the data."
    },
    {
        "question": "What is the support threshold also known as?",
        "options": [
            "minconf",
            "minsup",
            "maxsup",
            "maxconf"
        ],
        "answer": 1,
        "explanation": "The minimum support threshold is commonly referred to as minsup."
    },
    {
        "question": "In the Apriori example with items {1,3,5}, which rule had 50% confidence?",
        "options": [
            "5 → {1,3}",
            "{1,5} → {3}",
            "{3,5} → {1}",
            "3 → {1,5}"
        ],
        "answer": 1,
        "explanation": "{1,5} → {3} had confidence = support(1,3,5)/support(1,5) = 2/2 = 100%, not 50%. Wait, let me check: Actually {1,5} → {3} had confidence = 2/2 = 100%. The 50% confidence rules were {1,3} → {5} and {1,5} → {3}? Let me re-examine: The slide shows {1,5} → {3} = 2/4 = 50% and {1,3} → {5} = 2/4 = 50%."
    },
    {
        "question": "What is the main advantage of the Apriori principle?",
        "options": [
            "It increases the number of candidates",
            "It reduces the number of candidates to evaluate",
            "It makes all itemsets frequent",
            "It eliminates the need for support calculation"
        ],
        "answer": 1,
        "explanation": "The Apriori principle significantly reduces the number of candidate itemsets that need to be evaluated by pruning those with infrequent subsets."
    },
    {
        "question": "How does lowering the minimum support threshold affect the mining process?",
        "options": [
            "Reduces number of frequent itemsets",
            "Increases number of frequent itemsets and candidates",
            "Has no effect on the process",
            "Only affects confidence calculation"
        ],
        "answer": 1,
        "explanation": "Lowering the minimum support threshold results in more frequent itemsets, which may increase both the number of candidates and maximum length of frequent itemsets."
    },
    {
        "question": "What is σ in association rule mining?",
        "options": [
            "Standard deviation",
            "Support count",
            "Confidence level",
            "Minimum threshold"
        ],
        "answer": 1,
        "explanation": "σ (sigma) represents the support count - the frequency of occurrence of an itemset."
    },
    {
        "question": "In the transaction table with 5 transactions, what is |T|?",
        "options": [
            "The number of items",
            "The number of transactions (5)",
            "The average transaction width",
            "The maximum itemset size"
        ],
        "answer": 1,
        "explanation": "|T| represents the total number of transactions in the dataset."
    },
    {
        "question": "Which of these is a valid association rule notation?",
        "options": [
            "X ∪ Y",
            "X ∩ Y",
            "X → Y",
            "X = Y"
        ],
        "answer": 2,
        "explanation": "X → Y is the standard notation for an association rule where X implies Y."
    },
    {
        "question": "What is the main difference between classification and association rule discovery?",
        "options": [
            "Classification is predictive, association rules are descriptive",
            "Classification uses unlabeled data, association rules use labeled data",
            "Classification finds item associations, association rules predicts categories",
            "They are the same thing"
        ],
        "answer": 0,
        "explanation": "Classification is a predictive task (predicting class labels), while association rule discovery is a descriptive task (finding patterns in data)."
    },
    {
        "question": "In the context of association rules, what does 'frequent' mean?",
        "options": [
            "Occurs in at least one transaction",
            "Has high confidence",
            "Meets or exceeds the minimum support threshold",
            "Contains many items"
        ],
        "answer": 2,
        "explanation": "An itemset is considered frequent if its support is greater than or equal to the minimum support (minsup) threshold."
    },
    {
        "question": "What is the brute-force approach to association rule mining?",
        "options": [
            "List all possible rules and compute support/confidence for each",
            "Use the Apriori principle to prune candidates",
            "Only check rules with 2 items",
            "Ignore rules with low confidence"
        ],
        "answer": 0,
        "explanation": "The brute-force approach lists all possible association rules and computes support and confidence for each, which is computationally prohibitive for large datasets."
    },
    {
        "question": "Why is frequent itemset generation computationally expensive?",
        "options": [
            "Because it requires human intervention",
            "Because the number of possible itemsets grows exponentially",
            "Because confidence calculations are complex",
            "Because it needs specialized hardware"
        ],
        "answer": 1,
        "explanation": "The number of possible itemsets grows exponentially with the number of items (2^d for d items), making frequent itemset generation computationally expensive."
    },
    {
        "question": "What is the final step in rule generation from frequent itemsets?",
        "options": [
            "Calculate support for each rule",
            "Prune rules that fail minsup and minconf thresholds",
            "Generate all possible binary partitions",
            "Sort rules by number of items"
        ],
        "answer": 1,
        "explanation": "After generating candidate rules from frequent itemsets, the final step is to prune rules that fail to meet both the minimum support and minimum confidence thresholds."
    }
];





const iss1 = [
    {
        "question": "Which of the following is NOT one of the three main security principles?",
        "options": ["Availability", "Integrity", "Confidentiality", "Efficiency"],
        "answer": 3
    },
    {
        "question": "Availability ensures that information and systems are accessible to authorized users when needed.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Integrity in information security primarily protects data from what?",
        "options": ["Unauthorized modification", "Deletion by owner", "Backup loss", "System crash"],
        "answer": 0
    },
    {
        "question": "Which security principle ensures information is not disclosed to unauthorized individuals?",
        "options": ["Integrity", "Availability", "Confidentiality", "Authentication"],
        "answer": 2
    },
    {
        "question": "Access controls manage what type of relationship?",
        "options": ["Between subject and object", "Between users and administrators", "Between systems only", "Between passwords and encryption"],
        "answer": 0
    },
    {
        "question": "In security terminology, which term describes an active entity that requests access to resources?",
        "options": ["Object", "Subject", "System", "Session"],
        "answer": 1
    },
    {
        "question": "An object in access control is a passive entity that contains information.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which of the following best represents the CIA Triad?",
        "options": ["Confidentiality, Integrity, Availability", "Control, Independence, Authentication", "Confidentiality, Integration, Access", "Classification, Isolation, Authorization"],
        "answer": 0
    },
    {
        "question": "Identification in access control refers to:",
        "options": ["Verifying who you are", "Claiming an identity", "Granting permission", "Encrypting data"],
        "answer": 1
    },
    {
        "question": "Authentication verifies the identity of a subject.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which of the following is an example of 'something you know' authentication factor?",
        "options": ["Password", "Smart card", "Fingerprint", "Face scan"],
        "answer": 0
    },
    {
        "question": "Which authentication factor type is based on physical characteristics of a person?",
        "options": ["Type 1", "Type 2", "Type 3", "Type 4"],
        "answer": 2
    },
    {
        "question": "Two-factor authentication requires two different types of factors.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Authorization determines:",
        "options": ["Who you are", "What you can do", "When you logged in", "Where you are located"],
        "answer": 1
    },
    {
        "question": "Accountability in access control is achieved mainly through:",
        "options": ["Encryption", "Auditing and logging", "Firewalls", "Backup systems"],
        "answer": 1
    },
    {
        "question": "Passwords are considered the weakest form of authentication.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "A one-time password is classified as which type of factor?",
        "options": ["Type 1", "Type 2", "Type 3", "Type 4"],
        "answer": 1
    },
    {
        "question": "Which password type changes every time it is used?",
        "options": ["Static password", "Dynamic password", "Passphrase", "Cognitive password"],
        "answer": 1
    },
    {
        "question": "A passphrase is usually longer and harder to crack than a password.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which attack involves systematically trying all possible character combinations?",
        "options": ["Dictionary attack", "Brute-force attack", "Hybrid attack", "Replay attack"],
        "answer": 1
    },
    {
        "question": "Social engineering attacks exploit human behavior rather than software vulnerabilities.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which biometric factor measures the colored area around the pupil?",
        "options": ["Retina scan", "Iris scan", "Face scan", "Fingerprint"],
        "answer": 1
    },
    {
        "question": "Retina scans are more accurate than iris scans but less accepted by users.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "The biometric factor 'something you are' belongs to which authentication type?",
        "options": ["Type 1", "Type 2", "Type 3", "Type 4"],
        "answer": 2
    },
    {
        "question": "In biometric systems, what does FAR stand for?",
        "options": ["False Authentication Ratio", "False Acceptance Rate", "Failure Access Ratio", "Fault Accuracy Rate"],
        "answer": 1
    },
    {
        "question": "The point where FAR and FRR are equal is called:",
        "options": ["Crossover Error Rate (CER)", "Authentication Accuracy Level", "Match Index", "Rejection Ratio"],
        "answer": 0
    },
    {
        "question": "Biometric enrollment refers to the process of capturing and storing a user’s biometric sample.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which biometric technique analyzes how a person types on a keyboard?",
        "options": ["Voice recognition", "Keystroke dynamics", "Signature dynamics", "Face geometry"],
        "answer": 1
    },
    {
        "question": "Among biometric factors, which generally has the highest accuracy?",
        "options": ["Palm scan", "Keystroke dynamics", "Voice verification", "Signature dynamics"],
        "answer": 0
    },
    {
        "question": "The Zephyr chart is used to compare different biometric technologies based on accuracy and acceptance.",
        "options": ["True", "False"],
        "answer": 0
    }
];





const iss2 = [
    {
        "question": "Which of the following is NOT a type of token device?",
        "options": ["Static token", "Dynamic token", "Challenge-response token", "Temporary session token"],
        "answer": 3
    },
    {
        "question": "A static token can store a cryptographic key such as a private key or digital signature.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which token type generates passwords at fixed time intervals?",
        "options": ["Static token", "Synchronous dynamic password token", "Asynchronous dynamic password token", "Challenge-response token"],
        "answer": 1
    },
    {
        "question": "An asynchronous token generates passwords based on events rather than time.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "The main disadvantage of Single Sign-On (SSO) is:",
        "options": ["Harder password management", "Higher user confusion", "Single point of failure if compromised", "Slower authentication"],
        "answer": 2
    },
    {
        "question": "Single Sign-On (SSO) allows a user to authenticate once and access multiple resources.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which access control type allows the owner of an object to decide who can access it?",
        "options": ["Mandatory Access Control", "Role-Based Access Control", "Discretionary Access Control", "Rule-Based Access Control"],
        "answer": 2
    },
    {
        "question": "Discretionary Access Control (DAC) is usually implemented using:",
        "options": ["Firewalls", "Access Control Lists (ACLs)", "Tokens", "Passwords"],
        "answer": 1
    },
    {
        "question": "In Discretionary Access Control, access decisions are made by the system administrator, not the owner.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "Which access control type is considered more secure but less flexible than DAC?",
        "options": ["Mandatory Access Control (MAC)", "Role-Based Access Control", "Rule-Based Access Control", "Task-Based Access Control"],
        "answer": 0
    },
    {
        "question": "In a Mandatory Access Control (MAC) system, subjects can access objects with equal or lower classification levels.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "What does a rule-based access control system rely on?",
        "options": ["Identity of users", "Static rules and filters", "Group membership only", "Time of day"],
        "answer": 1
    },
    {
        "question": "A firewall is an example of a rule-based access control system.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which access control type grants permissions based on a user’s job description?",
        "options": ["DAC", "MAC", "RBAC", "Lattice-based"],
        "answer": 2
    },
    {
        "question": "In Role-Based Access Control (RBAC), access depends on the user’s identity rather than their role.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "Task-Based Access Control (TBAC) assigns permissions based on:",
        "options": ["Identity", "Role", "Specific tasks", "Access time"],
        "answer": 2
    },
    {
        "question": "A lattice-based access control defines upper and lower bounds of access for subjects and objects.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which of the following access control types originated to address information flow and confidentiality?",
        "options": ["Lattice-Based Access Control", "RBAC", "MAC", "DAC"],
        "answer": 0
    },
    {
        "question": "In lattice-based control, a subject can access resources up to its maximum classification level.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which of the following is a main benefit of centralized access control?",
        "options": ["Easier policy management", "More independence for departments", "Lower authentication accuracy", "Less security"],
        "answer": 0
    },
    {
        "question": "A disadvantage of centralized access control is having a single point of failure.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which protocols are examples of centralized access control systems?",
        "options": ["RADIUS and TACACS", "LDAP and DNS", "HTTP and HTTPS", "FTP and SFTP"],
        "answer": 0
    },
    {
        "question": "Decentralized access control is also known as:",
        "options": ["Role-based system", "Distributed access control", "Lattice-based control", "MAC system"],
        "answer": 1
    },
    {
        "question": "In decentralized access control, if one access point fails, the rest of the system continues to work normally.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Domains and trusts are common in which type of access control?",
        "options": ["Centralized", "Decentralized", "Lattice-based", "Mandatory"],
        "answer": 1
    },
    {
        "question": "Which access control type is best suited for environments with frequent personnel changes?",
        "options": ["MAC", "DAC", "RBAC", "TBAC"],
        "answer": 2
    },
    {
        "question": "Mandatory Access Control (MAC) classifications can include hierarchical, compartmentalized, and hybrid types.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "In a hierarchical MAC environment, classifications are organized from low to high security levels.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which access control model focuses on controlling access based on user tasks rather than identity or role?",
        "options": ["MAC", "TBAC", "RBAC", "DAC"],
        "answer": 1
    },
    {
        "question": "Lattice-based models are mainly concerned with data confidentiality and information flow control.",
        "options": ["True", "False"],
        "answer": 0
    }
];



const iss3 = [
    {
        "question": "Access control administration includes which of the following main responsibilities?",
        "options": ["User account management, activity tracking, and access rights management", "System installation, auditing, and encryption", "Data modeling and networking", "Incident response and backup"],
        "answer": 0
    },
    {
        "question": "User account management is essential for a system to perform proper identification and authentication.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which department typically initiates the request for creating a new user account?",
        "options": ["Finance", "IT Support", "Human Resources (HR)", "Operations"],
        "answer": 2
    },
    {
        "question": "Account creation should follow a formal approval process rather than administrator discretion.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "The process of creating a new user identity and authentication factors is known as:",
        "options": ["Authentication", "Authorization", "Enrollment", "Provisioning"],
        "answer": 2
    },
    {
        "question": "During account maintenance, privileges and rights can be modified without any formal procedure.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "When an employee leaves the organization, their account should be:",
        "options": ["Locked or deleted immediately", "Left active for a month", "Shared with another employee", "Ignored until next audit"],
        "answer": 0
    },
    {
        "question": "Temporary accounts should have an expiration date to enhance security.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Auditing and monitoring help establish what important security concept?",
        "options": ["Availability", "Accountability", "Redundancy", "Encryption"],
        "answer": 1
    },
    {
        "question": "Audit logs and journals record events and user actions to support investigations.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which principle ensures users are granted only the access necessary to perform their job?",
        "options": ["Least Privilege", "Full Access", "Selective Sharing", "Access Inheritance"],
        "answer": 0
    },
    {
        "question": "The principle of least privilege applies only to discretionary access control systems.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "In security terms, privilege usually refers to the ability to:",
        "options": ["Write, modify, or delete data", "Read-only access", "Encrypt files", "Login remotely"],
        "answer": 0
    },
    {
        "question": "The 'Need-to-Know' principle restricts access even to users with proper clearance if the information is not required for their work.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which of the following best describes 'Need-to-Know'?",
        "options": ["Access based on clearance level only", "Access based on demonstrated necessity for a specific task", "Access granted to all in same department", "Access determined by the user’s role"],
        "answer": 1
    },
    {
        "question": "In access control, what is implied if access is not explicitly allowed?",
        "options": ["Implicitly denied", "Temporarily granted", "Inherited automatically", "Ignored by the system"],
        "answer": 0
    },
    {
        "question": "Excessive privilege occurs when a user has more access than their role requires.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Creeping privilege happens when users accumulate privileges over time without removing old ones.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Who is responsible for classifying and labeling data objects in an organization?",
        "options": ["User", "Owner", "Custodian", "Auditor"],
        "answer": 1
    },
    {
        "question": "A custodian is typically responsible for the daily protection and maintenance of information systems.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "In access control terminology, a user is defined as:",
        "options": ["Any subject who accesses objects to perform a task", "The data owner only", "A system administrator", "A developer only"],
        "answer": 0
    },
    {
        "question": "The separation of duties principle is used to:",
        "options": ["Prevent any one individual from bypassing security controls", "Simplify administrative tasks", "Grant all users equal privileges", "Enable shared accounts"],
        "answer": 0
    },
    {
        "question": "Separation of duties helps prevent fraud and unauthorized actions by requiring cooperation between multiple users.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which of the following combinations could create a control weakness if held by the same person?",
        "options": ["Security administrator and system administrator", "User and auditor", "Developer and tester", "Operator and user"],
        "answer": 0
    },
    {
        "question": "Static separation of duties relies on predefined policies that rarely change.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Dynamic separation of duties is used when:",
        "options": ["Security requirements are determined at runtime", "Policies are never modified", "Only one person manages all systems", "The same user needs full system control"],
        "answer": 0
    },
    {
        "question": "Access control models help organizations formalize and implement their security policy requirements.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which principle helps ensure no user can perform conflicting duties or override security mechanisms?",
        "options": ["Separation of Duties", "Least Privilege", "Need-to-Know", "Centralized Control"],
        "answer": 0
    },
    {
        "question": "A combination of proper auditing, need-to-know, and least privilege provides strong accountability and protection.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "The ultimate goal of access control administration is to:",
        "options": ["Ensure accountability, integrity, and protection of resources", "Simplify system login", "Allow unlimited user access", "Eliminate authentication"],
        "answer": 0
    }
];




const pl1 = [
    {
        question: "Which of the following best represents the main purpose of language design principles?",
        options: [
            "To improve hardware efficiency only",
            "To balance readability, reliability, and efficiency",
            "To simplify syntax ignoring performance",
            "To maximize code complexity"
        ],
        answer: 1,
        explanation: "Language design principles aim to balance readability, reliability, and efficiency."
    },
    {
        question: "Which of these goals is most related to the ease of understanding code by humans?",
        options: ["Efficiency", "Readability", "Portability", "Scalability"],
        answer: 1,
        explanation: "Readability ensures that human programmers can easily understand and maintain code."
    },
    {
        question: "Which language was the first to introduce structured programming concepts?",
        options: ["FORTRAN", "COBOL", "ALGOL", "LISP"],
        answer: 2,
        explanation: "ALGOL introduced structured programming and block structure concepts."
    },
    {
        question: "Which of the following emphasizes reliability through type safety?",
        options: ["C", "Ada", "Assembly", "Python"],
        answer: 1,
        explanation: "Ada was designed for reliability and safety in critical systems."
    },
    {
        question: "In programming language evolution, the 1990s were marked by which trend?",
        options: ["Functional programming rise", "Object-oriented dominance", "Procedural programming return", "Machine-level optimization"],
        answer: 1,
        explanation: "The 1990s saw the dominance of object-oriented languages like Java and C++."
    },
    {
        question: "What is a major trade-off between performance and reliability?",
        options: [
            "Higher performance often requires lower abstraction, reducing safety",
            "Reliability always increases performance",
            "Performance has no relation to safety",
            "They are independent properties"
        ],
        answer: 0,
        explanation: "Lower abstraction layers improve speed but can reduce reliability and safety."
    },
    {
        question: "Which of the following design goals is most important for embedded systems?",
        options: ["Portability", "Efficiency", "Abstraction", "Expressiveness"],
        answer: 1,
        explanation: "Efficiency is critical in embedded systems due to hardware constraints."
    },
    {
        question: "Which of the following was the first object-oriented language?",
        options: ["C++", "Smalltalk", "Simula", "Java"],
        answer: 2,
        explanation: "Simula (1960s) introduced classes and objects, making it the first OOP language."
    },
    {
        question: "Which language influenced both C and Pascal in terms of structured syntax?",
        options: ["ALGOL", "LISP", "COBOL", "FORTRAN"],
        answer: 0,
        explanation: "ALGOL's structured syntax heavily influenced C and Pascal."
    },
    {
        question: "Which of the following focuses most on business data processing?",
        options: ["FORTRAN", "COBOL", "LISP", "C"],
        answer: 1,
        explanation: "COBOL was designed for business data processing and record management."
    },
    {
        question: "Which statement about FORTRAN is true?",
        options: ["It was designed for AI", "It introduced garbage collection", "It was designed for numerical computing", "It supports pattern matching"],
        answer: 2,
        explanation: "FORTRAN (1957) was built for scientific and numerical computation."
    },
    {
        question: "Which aspect of programming languages is most related to platform independence?",
        options: ["Portability", "Readability", "Abstraction", "Expressiveness"],
        answer: 0,
        explanation: "Portability allows code to run across different platforms with minimal modification."
    },
    {
        question: "Which principle helps prevent ambiguous syntax in language grammar?",
        options: ["Regularity", "Orthogonality", "Portability", "Abstraction"],
        answer: 0,
        explanation: "Regularity ensures consistent syntax and reduces ambiguity in language design."
    },
    {
        question: "Which of the following is an example of orthogonality in design?",
        options: [
            "Using the same rule for independent features",
            "Special case handling for every operator",
            "Syntax defined differently per type",
            "Relying on hidden conversions"
        ],
        answer: 0,
        explanation: "Orthogonality means combining features freely without unexpected behavior."
    },
    {
        question: "Which programming paradigm was LISP originally designed to support?",
        options: ["Procedural", "Functional", "Imperative", "Object-Oriented"],
        answer: 1,
        explanation: "LISP was created as a functional programming language for symbolic computation."
    },
    {
        question: "Which factor most affects the readability of a programming language?",
        options: ["Number of keywords", "Syntax consistency", "Runtime performance", "Memory usage"],
        answer: 1,
        explanation: "Consistency in syntax and naming directly influences readability."
    },
    {
        question: "Which of the following best defines abstraction in language design?",
        options: [
            "Hiding implementation details behind simpler interfaces",
            "Writing low-level assembly code",
            "Increasing code verbosity",
            "Optimizing compiler speed"
        ],
        answer: 0,
        explanation: "Abstraction hides details to simplify programming and improve clarity."
    },
    {
        question: "Which design goal is most related to how easily a language can evolve or scale?",
        options: ["Reliability", "Flexibility", "Portability", "Orthogonality"],
        answer: 1,
        explanation: "Flexibility allows extending and evolving language features easily."
    },
    {
        question: "Which property ensures that similar concepts are expressed using similar constructs?",
        options: ["Regularity", "Uniformity", "Portability", "Simplicity"],
        answer: 1,
        explanation: "Uniformity maintains internal consistency across the language design."
    },
    {
        question: "Which of the following pairs shows a trade-off between readability and efficiency?",
        options: ["Python vs C", "C++ vs Rust", "Java vs C#", "Scala vs Kotlin"],
        answer: 0,
        explanation: "Python favors readability while C prioritizes efficiency and control."
    },
    {
        question: "Which language introduced garbage collection to simplify memory management?",
        options: ["C", "LISP", "Pascal", "Rust"],
        answer: 1,
        explanation: "LISP was among the first to introduce automatic garbage collection."
    },
    {
        question: "Which of the following statements about portability is true?",
        options: ["Portability decreases with hardware abstraction", "Portability ensures same behavior across platforms", "Portability means faster execution", "Portability eliminates syntax errors"],
        answer: 1,
        explanation: "Portability allows the same source code to behave similarly across systems."
    },
    {
        question: "Which design principle relates to minimizing exceptions or special cases in rules?",
        options: ["Orthogonality", "Abstraction", "Portability", "Regularity"],
        answer: 3,
        explanation: "Regularity minimizes special-case exceptions in language syntax and semantics."
    },
    {
        question: "Which of these languages introduced automatic memory management?",
        options: ["C", "LISP", "C++", "Assembly"],
        answer: 1,
        explanation: "LISP automated memory management through garbage collection."
    },
    {
        question: "Which is a disadvantage of too much abstraction in language design?",
        options: ["Harder optimization", "Simpler syntax", "Better maintainability", "Lower readability"],
        answer: 0,
        explanation: "Excessive abstraction can make optimization and control difficult."
    },
    {
        question: "The term 'expressiveness' in language design refers to what?",
        options: [
            "How concisely complex operations can be represented",
            "How fast a program runs",
            "The syntax length of identifiers",
            "The number of available libraries"
        ],
        answer: 0,
        explanation: "Expressiveness refers to representing ideas concisely and elegantly."
    },
    {
        question: "Which early language most influenced modern structured programming?",
        options: ["FORTRAN", "COBOL", "ALGOL", "LISP"],
        answer: 2,
        explanation: "ALGOL laid the foundation for structured programming."
    },
    {
        question: "Which language introduced block structure using 'begin' and 'end'?",
        options: ["Pascal", "C", "FORTRAN", "Assembly"],
        answer: 0,
        explanation: "Pascal used 'begin' and 'end' to define blocks clearly."
    },
    {
        question: "Readability is one of the core principles in programming language design.",
        options: ["True", "False"],
        answer: 0,
        explanation: "TRUE — Readability helps developers understand and maintain code easily."
    },
    {
        question: "Portability ensures that a program can run on multiple platforms without change.",
        options: ["True", "False"],
        answer: 0,
        explanation: "TRUE — Portability minimizes platform-specific dependencies."
    },
    {
        question: "Efficiency and readability are always directly proportional in language design.",
        options: ["True", "False"],
        answer: 1,
        explanation: "FALSE — Improving readability can sometimes reduce raw performance."
    },
    {
        question: "Orthogonality in design means independent features can be combined freely.",
        options: ["True", "False"],
        answer: 0,
        explanation: "TRUE — Orthogonal features behave predictably when combined."
    },
    {
        question: "FORTRAN was the first programming language to introduce object-oriented programming.",
        options: ["True", "False"],
        answer: 1,
        explanation: "FALSE — FORTRAN was procedural; Simula introduced OOP."
    }

];



const pl2 = [
    {
        question: "Which of the following best defines a type system?",
        options: [
            "A mechanism for optimizing runtime performance",
            "A set of rules that assigns a property called type to language constructs",
            "A compiler component responsible for garbage collection",
            "A syntax analyzer for parsing expressions"
        ],
        answer: 1,
        explanation: "A type system enforces rules that assign and check types to ensure safe operations."
    },
    {
        question: "What is the main purpose of static typing?",
        options: [
            "To detect type errors at compile time",
            "To allow more dynamic behavior",
            "To delay error checking until runtime",
            "To eliminate the need for variable declarations"
        ],
        answer: 0,
        explanation: "Static typing checks types during compilation, reducing runtime errors."
    },
    {
        question: "Which of these languages uses strong static typing?",
        options: ["Python", "Haskell", "JavaScript", "Perl"],
        answer: 1,
        explanation: "Haskell enforces strong static typing with no implicit conversions."
    },
    {
        question: "Which feature allows a function to work uniformly with different types?",
        options: ["Encapsulation", "Polymorphism", "Inheritance", "Recursion"],
        answer: 1,
        explanation: "Polymorphism enables the same function interface to handle various data types."
    },
    {
        question: "What does type inference mean in programming languages?",
        options: [
            "Types are explicitly declared for every variable",
            "The compiler automatically determines variable types",
            "The user manually specifies the type at runtime",
            "Variables have no type at all"
        ],
        answer: 1,
        explanation: "Type inference lets the compiler deduce types automatically based on usage."
    },
    {
        question: "Which kind of polymorphism allows one name to represent different implementations based on argument types?",
        options: ["Ad-hoc polymorphism", "Parametric polymorphism", "Subtype polymorphism", "Overloading"],
        answer: 0,
        explanation: "Ad-hoc polymorphism (e.g., function overloading) allows functions to behave differently based on argument types."
    },
    {
        question: "What is the key benefit of type safety?",
        options: [
            "Improved runtime speed",
            "Reduced likelihood of invalid operations",
            "Simplified syntax",
            "Support for dynamic dispatch"
        ],
        answer: 1,
        explanation: "Type safety prevents illegal operations by enforcing correct type usage."
    },
    {
        question: "Which of the following is an example of structural typing?",
        options: [
            "Type compatibility based on declared inheritance",
            "Type compatibility based on matching structure and members",
            "Type compatibility only for primitive types",
            "Type matching using runtime reflection"
        ],
        answer: 1,
        explanation: "Structural typing considers two types equivalent if their structure matches, not their declared name."
    },
    {
        question: "Which of these is a characteristic of nominal typing?",
        options: [
            "Types are compatible if their structure matches",
            "Compatibility is based on explicit declarations or names",
            "There is no need for class hierarchies",
            "Functions are untyped"
        ],
        answer: 1,
        explanation: "Nominal typing depends on declared relationships, not structure."
    },
    {
        question: "Which of these languages primarily uses structural typing?",
        options: ["C#", "Java", "TypeScript", "C++"],
        answer: 2,
        explanation: "TypeScript uses structural typing to check compatibility based on object shapes."
    },
    {
        question: "What is the difference between coercion and casting?",
        options: [
            "Casting is implicit while coercion is explicit",
            "Coercion is implicit while casting is explicit",
            "Both are identical processes",
            "Casting occurs only at compile-time"
        ],
        answer: 1,
        explanation: "Coercion happens automatically; casting is explicit and programmer-controlled."
    },
    {
        question: "What is an example of a strongly typed operation?",
        options: [
            "Adding an integer to a string automatically",
            "Implicitly converting boolean to integer",
            "Allowing explicit type conversion only",
            "Ignoring type mismatches at runtime"
        ],
        answer: 2,
        explanation: "Strong typing restricts implicit conversions; only explicit conversions are allowed."
    },
    {
        question: "What does a dependent type system allow?",
        options: [
            "Types to depend on runtime values",
            "Values to depend on type structure",
            "Only basic arithmetic on types",
            "Runtime casting for safety"
        ],
        answer: 0,
        explanation: "Dependent types allow types to depend on values, enabling more precise program verification."
    },
    {
        question: "What problem does type erasure address?",
        options: [
            "Performance overhead of generic types",
            "Memory leaks in garbage-collected environments",
            "Ambiguity in dynamic dispatch",
            "Complexity in recursive functions"
        ],
        answer: 0,
        explanation: "Type erasure removes generic type info at runtime to reduce complexity and improve efficiency."
    },
    {
        question: "Which kind of polymorphism allows code reuse through inheritance?",
        options: [
            "Subtype polymorphism",
            "Parametric polymorphism",
            "Ad-hoc polymorphism",
            "Dynamic polymorphism"
        ],
        answer: 0,
        explanation: "Subtype polymorphism allows objects of different subclasses to be treated as their superclass type."
    },
    {
        question: "In F#, what keyword defines a generic function?",
        options: ["fun", "let", "let inline", "type"],
        answer: 2,
        explanation: "`let inline` allows creation of generic and inlined functions for performance."
    },
    {
        question: "What does 'soundness' in type systems refer to?",
        options: [
            "Every program that type checks will not produce type errors during execution",
            "All programs will run faster",
            "No compile-time errors will occur",
            "Runtime reflection is guaranteed"
        ],
        answer: 0,
        explanation: "Soundness ensures that a program passing type checks cannot cause type errors at runtime."
    },
    {
        question: "Which of the following is an unsound but practical feature in some languages?",
        options: ["Type inference", "Covariant arrays", "Generic constraints", "Lazy evaluation"],
        answer: 1,
        explanation: "Covariant arrays are unsound but implemented for convenience in languages like Java."
    },
    {
        question: "Which is a key advantage of static typing over dynamic typing?",
        options: [
            "Simpler syntax",
            "Fewer runtime errors",
            "Better I/O handling",
            "Support for duck typing"
        ],
        answer: 1,
        explanation: "Static typing catches errors early at compile time, improving safety."
    },
    {
        question: "What is the main purpose of type inference in functional languages like F#?",
        options: [
            "To avoid verbose type declarations",
            "To disable type safety",
            "To allow runtime type modification",
            "To ignore type constraints"
        ],
        answer: 0,
        explanation: "Type inference infers types automatically while maintaining static safety."
    },
    {
        question: "Which of the following illustrates parametric polymorphism?",
        options: [
            "A function using templates to handle multiple types",
            "A subclass overriding a method",
            "A cast between unrelated types",
            "A runtime type comparison"
        ],
        answer: 0,
        explanation: "Parametric polymorphism allows writing type-agnostic code using generics or templates."
    },
    {
        question: "Which operation violates type safety?",
        options: [
            "Accessing array elements within bounds",
            "Adding an integer to a string implicitly",
            "Explicitly casting from int to float",
            "Checking null before dereferencing"
        ],
        answer: 1,
        explanation: "Implicit addition between incompatible types breaks type safety."
    },
    {
        question: "What does 'type completeness' ensure?",
        options: [
            "All types are consistent with their definitions",
            "Every expression has a well-defined type",
            "All type errors are ignored",
            "No type checking occurs at runtime"
        ],
        answer: 1,
        explanation: "Type completeness guarantees that each valid expression has a valid type."
    },
    {
        question: "What kind of typing system does Python use?",
        options: [
            "Static and weak",
            "Dynamic and strong",
            "Static and strong",
            "Dynamic and weak"
        ],
        answer: 1,
        explanation: "Python checks types at runtime (dynamic) but doesn’t allow unsafe implicit conversions (strong)."
    },
    {
        question: "Which of the following ensures safe reusability of generic types?",
        options: [
            "Variance annotations (covariant, contravariant)",
            "Static overloading",
            "Anonymous typing",
            "Dynamic binding"
        ],
        answer: 0,
        explanation: "Variance annotations control subtype relationships for generics safely."
    },

    {
        question: "Static typing detects type errors during program execution.",
        options: ["True", "False"],
        answer: 1,
        explanation: "FALSE — Static typing detects type errors at compile time, not at runtime."
    },
    {
        question: "Dependent types allow types to depend on runtime values.",
        options: ["True", "False"],
        answer: 0,
        explanation: "TRUE — Dependent types express constraints based on values."
    },
    {
        question: "Strong typing allows implicit conversions between unrelated types.",
        options: ["True", "False"],
        answer: 1,
        explanation: "FALSE — Strong typing forbids unsafe or implicit conversions."
    },
    {
        question: "Type inference reduces verbosity without losing type safety.",
        options: ["True", "False"],
        answer: 0,
        explanation: "TRUE — Inference deduces types while keeping the code type-safe."
    },
    {
        question: "Covariant arrays are fully type-safe in all contexts.",
        options: ["True", "False"],
        answer: 1,
        explanation: "FALSE — Covariant arrays can violate type safety in some cases."
    }

];




const pl3 = [
    {
        question: "Which programming paradigm emphasizes immutability and pure functions?",
        options: ["Functional", "Imperative", "Procedural", "Object-Oriented"],
        answer: 0,
        explanation: "Functional programming avoids mutable state and side effects, focusing on pure functions."
    },
    {
        question: "What is a pure function in F#?",
        options: [
            "A function that depends on global state",
            "A function that always returns the same output for the same input",
            "A function that modifies external variables",
            "A function that performs I/O operations"
        ],
        answer: 1,
        explanation: "Pure functions produce deterministic outputs without side effects."
    },
    {
        question: "Which of the following introduces mutability in F#?",
        options: ["let mutable", "var", "set", "assign"],
        answer: 0,
        explanation: "`let mutable` declares a variable that can be reassigned."
    },
    {
        question: "What does the `|>` operator do in F#?",
        options: [
            "Performs function composition",
            "Pipes the output of one function into another",
            "Creates a tuple",
            "Evaluates lazily"
        ],
        answer: 1,
        explanation: "The pipeline operator passes the result of one function as input to the next, improving readability."
    },
    {
        question: "Which of the following F# functions is higher-order?",
        options: [
            "let add x y = x + y",
            "let apply f x = f x",
            "let x = 10",
            "let square n = n * n"
        ],
        answer: 1,
        explanation: "A higher-order function takes another function as an argument."
    },
    {
        question: "What is the main benefit of immutability in functional programming?",
        options: [
            "Simplifies debugging by avoiding state changes",
            "Increases runtime performance",
            "Allows unrestricted data modification",
            "Removes the need for recursion"
        ],
        answer: 0,
        explanation: "Immutability makes programs predictable by avoiding side effects and shared state."
    },
    {
        question: "What does 'rec' keyword enable in F#?",
        options: [
            "Pattern matching",
            "Recursive function definition",
            "Dynamic typing",
            "Parallel computation"
        ],
        answer: 1,
        explanation: "`rec` allows a function to call itself recursively."
    },
    {
        question: "Which of the following F# functions transforms each element of a list?",
        options: ["filter", "map", "fold", "reduce"],
        answer: 1,
        explanation: "The `map` function applies a transformation to every list element."
    },
    {
        question: "Which function aggregates all elements of a list into a single result?",
        options: ["map", "fold", "filter", "concat"],
        answer: 1,
        explanation: "`fold` processes a list with an accumulator to produce a single result."
    },
    {
        question: "What does 'lazy' keyword do in F#?",
        options: [
            "Forces eager evaluation",
            "Delays computation until the value is needed",
            "Makes bindings mutable",
            "Performs asynchronous execution"
        ],
        answer: 1,
        explanation: "Lazy values postpone computation until explicitly forced with `.Force()`."
    },
    {
        question: "Which feature allows declarative control flow in F#?",
        options: [
            "Pattern matching",
            "Loops and mutable state",
            "Dynamic dispatch",
            "Inheritance"
        ],
        answer: 0,
        explanation: "Pattern matching provides expressive and declarative control over program logic."
    },
    {
        question: "What is tail recursion optimization in F# used for?",
        options: [
            "Increasing readability",
            "Avoiding stack overflow by reusing frames",
            "Allowing mutable loops",
            "Improving compile time"
        ],
        answer: 1,
        explanation: "Tail recursion reuses stack frames, preventing overflow in deep recursive calls."
    },
    {
        question: "What does the function composition operator `>>` do?",
        options: [
            "Combines two functions left-to-right",
            "Applies functions concurrently",
            "Reverses a list",
            "Creates a tuple"
        ],
        answer: 0,
        explanation: "`>>` composes functions such that f >> g means 'apply f then g'."
    },
    {
        question: "Which construct provides safe handling of missing values in F#?",
        options: ["Option type", "Record type", "Tuple", "Seq"],
        answer: 0,
        explanation: "Option type (Some/None) allows representing absence of values safely."
    },
    {
        question: "Which keyword allows defining asynchronous operations in F#?",
        options: ["async", "task", "thread", "await"],
        answer: 0,
        explanation: "The `async` keyword creates asynchronous workflows using computation expressions."
    },
    {
        question: "Which feature enables custom monadic workflows in F#?",
        options: [
            "Computation expressions",
            "Class inheritance",
            "Mutable references",
            "Pattern guards"
        ],
        answer: 0,
        explanation: "Computation expressions generalize monadic syntax for workflows like async or option."
    },
    {
        question: "What evaluation strategy does F# use by default?",
        options: ["Lazy evaluation", "Strict evaluation", "Partial evaluation", "Hybrid evaluation"],
        answer: 1,
        explanation: "F# evaluates expressions eagerly by default (strict evaluation)."
    },
    {
        question: "Which F# structure can generate infinite sequences?",
        options: ["List", "Array", "Seq", "Record"],
        answer: 2,
        explanation: "`Seq` supports lazy evaluation and can represent infinite data streams."
    },
    {
        question: "Which of the following describes declarative programming best?",
        options: [
            "Focusing on what to compute rather than how to compute it",
            "Manually updating states and loops",
            "Using explicit iteration control",
            "Relying on mutable variables"
        ],
        answer: 0,
        explanation: "Declarative programming expresses logic without detailing control flow."
    },
    {
        question: "Which expression filters even numbers from `[1..10]` in F#?",
        options: [
            "[1..10] |> List.filter (fun x -> x % 2 = 0)",
            "[1..10] |> List.map (fun x -> x * 2)",
            "[1..10] |> Seq.take 2",
            "[1..10] |> List.fold (+) 0"
        ],
        answer: 0,
        explanation: "`List.filter` keeps only values satisfying the given predicate."
    },
    {
        question: "Which function would you use to combine two lists element-wise in F#?",
        options: ["List.zip", "List.concat", "List.append", "List.groupBy"],
        answer: 0,
        explanation: "`List.zip` pairs elements of two lists into tuples."
    },
    {
        question: "Which concept ensures all possible cases are matched in pattern matching?",
        options: [
            "Exhaustiveness checking",
            "Lazy binding",
            "Variance safety",
            "Data shadowing"
        ],
        answer: 0,
        explanation: "Exhaustiveness checking ensures every possible input pattern is covered."
    },
    {
        question: "Which of the following enables data immutability in functional programming?",
        options: ["let bindings", "var declarations", "mutable fields", "ref cells"],
        answer: 0,
        explanation: "By default, `let` creates immutable bindings, ensuring data consistency."
    },
    {
        question: "What is a higher-order function that returns another function in F#?",
        options: ["Closure", "Tuple", "Union", "Record"],
        answer: 0,
        explanation: "A closure captures its lexical environment and can return a new function."
    },
    {
        question: "Which of these expressions demonstrates partial application?",
        options: [
            "let add a b = a + b; let add5 = add 5",
            "let rec fact n = if n=0 then 1 else n * fact(n-1)",
            "let total = List.sum [1..5]",
            "let double x = x * 2"
        ],
        answer: 0,
        explanation: "Partial application fixes some arguments, returning a new function awaiting the rest."
    },

    {
        question: "In F#, values defined with 'let' are mutable by default.",
        options: ["True", "False"],
        answer: 1,
        explanation: "FALSE — F# bindings with `let` are immutable unless declared with `mutable`."
    },
    {
        question: "Pure functions can cause side effects like file I/O or console output.",
        options: ["True", "False"],
        answer: 1,
        explanation: "FALSE — Pure functions do not produce side effects; they depend only on inputs."
    },
    {
        question: "The pipeline operator (`|>`) in F# improves readability by chaining functions.",
        options: ["True", "False"],
        answer: 0,
        explanation: "TRUE — It creates clean, readable function chains by passing results forward."
    },
    {
        question: "Pattern matching in F# can only be used with numbers.",
        options: ["True", "False"],
        answer: 1,
        explanation: "FALSE — Pattern matching works with lists, tuples, records, and discriminated unions."
    },
    {
        question: "Lazy evaluation in F# defers computation until explicitly required.",
        options: ["True", "False"],
        answer: 0,
        explanation: "TRUE — Lazy values compute only when their result is accessed."
    }
];




const pl4 = [
    { question: "FORTRAN was the first widely used high-level language, primarily designed for scientific computing.", options: ["True", "False"], answer: 0, explanation: "TRUE — FORTRAN (1957) targeted scientific and numerical computing." },
    { question: "Which language introduced English-like syntax to make programming accessible to non-specialists?", options: ["C", "FORTRAN", "COBOL", "Pascal"], answer: 2, explanation: "COBOL used English-like syntax to simplify business programming." },
    { question: "What was the primary reason for programming language evolution during the 1970s?", options: ["AI and machine learning demands", "Need for structured and efficient system programming", "Graphical user interface development", "Internet-based application growth"], answer: 1, explanation: "C and similar languages emerged to support efficient system-level programming." },
    { question: "Which of the following focuses most on readability and simplicity?", options: ["C", "Python", "Rust", "C++"], answer: 1, explanation: "Python prioritizes readability and simplicity." },
    { question: "Rust ensures memory safety without using a garbage collector.", options: ["True", "False"], answer: 0, explanation: "TRUE — Rust uses ownership/borrowing to avoid a GC." },
    { question: "Which language was primarily developed at Google to simplify concurrency?", options: ["Scala", "Go", "Rust", "Kotlin"], answer: 1, explanation: "Go was developed at Google with goroutines and channels." },
    { question: "Which design goal prioritizes clarity and ease of understanding for human developers?", options: ["Reliability", "Portability", "Readability", "Efficiency"], answer: 2, explanation: "Readability focuses on clear, maintainable code." },
    { question: "Which language design goal focuses on minimizing errors and ensuring predictable behavior?", options: ["Efficiency", "Reliability", "Expressiveness", "Performance"], answer: 1, explanation: "Reliability aims to reduce bugs via typing and error handling." },
    { question: "Which of the following is a design trade-off between readability and performance?", options: ["Python vs Rust", "C vs Python", "Rust vs Go", "Java vs Kotlin"], answer: 1, explanation: "C emphasizes performance while Python emphasizes readability." },
    { question: "What trade-off does Rust make to achieve safety?", options: ["Increased runtime overhead", "Reduced readability and steeper learning curve", "Use of garbage collector", "Interpreted execution"], answer: 1, explanation: "Rust's ownership model increases learning complexity but improves safety." },
    { question: "Which principle measures how concisely complex ideas can be represented?", options: ["Portability", "Expressiveness", "Readability", "Reliability"], answer: 1, explanation: "Expressiveness is about representing complex logic succinctly." },
    { question: "Which feature makes Go particularly suitable for distributed systems?", options: ["Macros", "Manual memory management", "Goroutines and channels", "Dynamic typing"], answer: 2, explanation: "Goroutines and channels are Go's concurrency primitives." },
    { question: "Which of the following emphasizes compile-time memory safety without runtime overhead?", options: ["C++", "Rust", "Go", "Python"], answer: 1, explanation: "Rust enforces memory safety at compile time without a GC." },
    { question: "Which trade-off best represents C++ compared to Rust?", options: ["C++ favors safety over flexibility", "C++ favors flexibility over safety", "C++ and Rust are identical in safety model", "Rust allows more direct hardware access"], answer: 1, explanation: "C++ offers flexibility/power but with higher memory-safety risk." },
    { question: "What does the 'Language Design Triangle' illustrate?", options: ["Trade-offs among safety, simplicity, and performance", "Evolution of programming paradigms", "Syntax rules of programming languages", "Relationship between hardware and software"], answer: 0, explanation: "The triangle shows trade-offs between safety, simplicity, and performance." },
    { question: "Which of the following best describes 'Portability' in language design?", options: ["The ability to run on multiple platforms with minimal changes", "The ability to handle multiple users concurrently", "The ability to compile code faster", "The ability to recover from runtime errors"], answer: 0, explanation: "Portability means running with minimal changes across platforms." },
    { question: "Which programming language first introduced the concept of 'write once, run anywhere'?", options: ["Java", "Python", "C#", "C++"], answer: 0, explanation: "Java's JVM and bytecode aimed for platform independence." },
    { question: "Which programming language emphasizes 'let it crash' fault-tolerant design?", options: ["Elixir", "Go", "Rust", "JavaScript"], answer: 0, explanation: "Elixir (on the BEAM) uses supervised processes and 'let it crash' philosophy." },
    { question: "What is a major benefit of Python’s indentation-based syntax?", options: ["Improves execution speed", "Enforces code readability and structure", "Allows unsafe memory operations", "Supports low-level programming"], answer: 1, explanation: "Indentation enforces readable, consistent structure." },
    { question: "Which of these languages was designed primarily for concurrency and distributed systems?", options: ["Go", "Elixir", "Rust", "Kotlin"], answer: 1, explanation: "Elixir (Erlang VM) targets concurrent, distributed fault-tolerant systems." },
    { question: "Which of the following languages is closest to hardware control?", options: ["C", "Python", "Go", "JavaScript"], answer: 0, explanation: "C provides low-level control and manual memory management." },
    { question: "What does Rust’s borrow checker prevent?", options: ["Dynamic typing errors", "Data races and invalid memory access", "Slow compilation times", "Runtime type mismatches"], answer: 1, explanation: "The borrow checker enforces safe memory access and prevents data races." },
    { question: "Which aspect of Python sacrifices performance for?", options: ["Safety", "Flexibility", "Readability", "Concurrency"], answer: 2, explanation: "Python's design favors readability, often at the cost of raw speed." },
    { question: "Which language combines OOP and FP to achieve high expressiveness?", options: ["Scala", "Go", "Rust", "Elixir"], answer: 0, explanation: "Scala integrates object-oriented and functional paradigms." },
    { question: "In the design triangle, Go mainly balances which two qualities?", options: ["Safety and Expressiveness", "Simplicity and Performance", "Readability and Flexibility", "Portability and Efficiency"], answer: 1, explanation: "Go emphasizes simplicity while providing good performance." },
    { question: "Which of these is NOT a language design goal mentioned in the lecture?", options: ["Readability", "Reliability", "Abstraction", "Efficiency"], answer: 2, explanation: "Abstraction is a concept but wasn't listed as a core goal in the slides." },
    { question: "What does 'Write once, run anywhere' imply about a language’s design?", options: ["It’s platform-dependent", "It relies on virtual machines for portability", "It must be compiled natively for each OS", "It only supports dynamic typing"], answer: 1, explanation: "This phrase refers to VM-based portability like Java's JVM." },
    { question: "Why is C considered less safe than Rust?", options: ["C uses garbage collection", "C allows unchecked memory access and manual management", "Rust uses dynamic typing", "C lacks pointer arithmetic"], answer: 1, explanation: "C's manual memory management can lead to undefined behavior." },
    { question: "Which of the following relies heavily on JIT compilation for performance?", options: ["Python", "JavaScript", "Go", "Elixir"], answer: 1, explanation: "Modern JavaScript engines (V8) use JIT to optimize speed." },
    { question: "Which key insight about language design is emphasized in the lecture?", options: ["No language can maximize all design goals simultaneously", "New languages replace old ones immediately", "Performance is always the top priority", "Safety eliminates the need for efficiency"], answer: 0, explanation: "Language design involves unavoidable trade-offs among goals." },
    { question: "A type system assigns and enforces valid types for program constructs.", options: ["True", "False"], answer: 0, explanation: "TRUE — type systems map constructs to types to prevent invalid operations." },
    { question: "When does type checking occur in statically typed languages?", options: ["During runtime", "During compile-time", "After execution", "During linking"], answer: 1, explanation: "Static typing enforces types at compile-time." },
    { question: "Which of the following languages primarily use dynamic typing?", options: ["Rust and C++", "Python and JavaScript", "Go and Java", "C and Rust"], answer: 1, explanation: "Python and JavaScript perform many checks at runtime (dynamic typing)." },
    { question: "Which of the following best describes strong typing?", options: ["It allows implicit conversions between unrelated types", "It forbids implicit type coercions unless explicitly defined", "It requires dynamic dispatch for all function calls", "It disables type inference entirely"], answer: 1, explanation: "Strong typing prevents implicit coercion and enforces conversions." },
    { question: "Which type system feature allows compilers to optimize machine code efficiently?", options: ["Type inference", "Static typing", "Dynamic dispatch", "Duck typing"], answer: 1, explanation: "Static typing gives compilers concrete type info for optimization." },
    { question: "What is a major drawback of dynamic typing?", options: ["Reduced readability", "Increased runtime errors due to late type checking", "Slower compilation speed", "Lack of garbage collection"], answer: 1, explanation: "Dynamic typing can surface type errors only at runtime." },
    { question: "Which type of polymorphism allows generic functions or data structures to work across multiple types?", options: ["Subtype", "Parametric", "Ad-hoc", "Nominal"], answer: 1, explanation: "Parametric polymorphism (generics) enables type-generic code." },
    { question: "Which type of polymorphism relies on function overloading?", options: ["Ad-hoc polymorphism", "Parametric polymorphism", "Subtype polymorphism", "Dependent polymorphism"], answer: 0, explanation: "Ad-hoc polymorphism includes overloading: same name, different types." },
    { question: "In subtype polymorphism, what mechanism allows derived types to be used where base types are expected?", options: ["Generics", "Inheritance or interface implementation", "Type inference", "Template specialization"], answer: 1, explanation: "Inheritance/interfaces enable subtype polymorphism and substitution." },
    { question: "Which of the following illustrates parametric polymorphism?", options: ["Function add(int,int) and add(double,double)", "Class Box<T> that works with any type T", "Subclass overriding a superclass method", "Dynamic type casting at runtime"], answer: 1, explanation: "Generics like Box<T> are parametric polymorphism examples." },
    { question: "In ad-hoc polymorphism, the compiler decides which method to call based on argument types.", options: ["True", "False"], answer: 0, explanation: "TRUE — ad-hoc (overloading) selection is based on parameter types." },
    { question: "What key advantage does subtype polymorphism provide?", options: ["Improved performance", "Code reuse and flexibility through inheritance", "Compile-time type inference", "Reduced syntax complexity"], answer: 1, explanation: "Subtype polymorphism promotes reuse and flexible APIs via inheritance." },
    { question: "What is a common pitfall of subtype polymorphism?", options: ["Overloaded operators cause ambiguity", "The fragile base class problem", "Dynamic typing errors", "Compile-time coercion failures"], answer: 1, explanation: "The fragile base class problem arises when base changes break subclasses." },
    { question: "Which of the following best defines type inference?", options: ["Automatic detection of type errors during runtime", "Compiler’s ability to deduce types automatically", "User annotation of every variable type", "Dynamic dispatch of methods at runtime"], answer: 1, explanation: "Type inference deduces types at compile time, reducing annotations." },
    { question: "The Hindley–Milner algorithm is associated with type inference.", options: ["True", "False"], answer: 0, explanation: "TRUE — Hindley–Milner is a foundational type inference algorithm used in ML/Haskell." },
    { question: "Which language implements Hindley–Milner type inference?", options: ["Python", "Haskell", "C#", "JavaScript"], answer: 1, explanation: "Haskell (and ML-family languages) use Hindley–Milner inference." },
    { question: "Dependent types allow types to depend on values, enabling compile-time proofs of properties.", options: ["True", "False"], answer: 0, explanation: "TRUE — dependent types express value-level properties at the type level." },
    { question: "Which type system feature eliminates certain classes of runtime bugs by design?", options: ["Dependent types", "Weak typing", "Dynamic coercion", "Manual memory management"], answer: 0, explanation: "Dependent types and strong static typing can move checks to compile-time." },
    { question: "What is a potential trade-off when using dependent types?", options: ["Reduced readability", "Increased runtime speed", "Simpler compiler implementation", "Less expressive syntax"], answer: 0, explanation: "Dependent types increase complexity and can hurt readability." },
    { question: "Rust’s ownership system prevents memory-related errors like data races and double frees.", options: ["True", "False"], answer: 0, explanation: "TRUE — ownership, borrowing and lifetimes prevent such errors." },
    { question: "When ownership is transferred in Rust, the original variable becomes invalid.", options: ["True", "False"], answer: 0, explanation: "TRUE — moves invalidate the original binding unless type implements Copy." },
    { question: "In Rust, the compiler errors on accessing moved variables to prevent use-after-free.", options: ["True", "False"], answer: 0, explanation: "TRUE — the compiler enforces ownership to avoid use-after-free." },
    { question: "Which of the following correctly describes weak typing?", options: ["Disallows any implicit conversions", "Allows implicit type coercion between types", "Requires all variables to have declared types", "Performs type checks at compile-time only"], answer: 1, explanation: "Weak typing permits implicit coercions (e.g., JavaScript)." },

    { question: "What is the output of console.log('5' - 2) in JavaScript?", options: ["'52'", "Error", "3", "'3'"], answer: 2, explanation: "JS coerces '5' to number for subtraction → 3." },
    { question: "What is the key distinction between static and dynamic typing?", options: ["Static typing uses runtime checks; dynamic uses compile-time", "Static checks before execution; dynamic checks during execution", "Static allows implicit coercion; dynamic forbids it", "Dynamic ensures compile-time memory safety"], answer: 1, explanation: "Static types are checked before runtime; dynamic types at runtime." },
    { question: "Which of the following best explains 'move semantics' in Rust?", options: ["Variables are copied automatically when assigned", "Ownership of data transfers from one variable to another", "Variables share ownership by default", "Memory is managed by garbage collection"], answer: 1, explanation: "Move semantics transfer ownership, preventing double-frees." },
    { question: "Which of the following provides compile-time guarantees about program correctness?", options: ["Dependent types", "Dynamic typing", "Weak typing", "Runtime reflection"], answer: 0, explanation: "Dependent types enable compile-time verification of properties." },
    { question: "What is a key advantage of static typing in performance-critical systems?", options: ["It reduces runtime overhead by eliminating dynamic checks", "It allows dynamic memory allocation", "It supports runtime polymorphism", "It enables automatic code documentation"], answer: 0, explanation: "Static typing can eliminate runtime checks and improve performance." },
    { question: "Which concept combines compile-time type safety with reduced verbosity using automatic type deduction?", options: ["Dynamic typing", "Type inference", "Subtype polymorphism", "Ad-hoc overloading"], answer: 1, explanation: "Type inference deduces types while keeping compile-time safety." },

    { question: "What programming paradigm does F# primarily follow?", options: ["Imperative", "Functional", "Procedural", "Object-Oriented"], answer: 1, explanation: "F# is a functional-first language (ML family)." },
    { question: "In F#, values are immutable by default.", options: ["True", "False"], answer: 0, explanation: "TRUE — `let` bindings are immutable unless `mutable` used." },
    { question: "Which keyword is used to define an immutable binding in F#?", options: ["var", "let", "bind", "def"], answer: 1, explanation: "`let` creates an immutable binding by default." },
    { question: "Which of the following is a pure function in F#?", options: ["A function that modifies a global variable", "A function that returns same output for same input and has no side effects", "A function that prints to the console", "A function that depends on mutable state"], answer: 1, explanation: "Pure functions are deterministic and side-effect-free." },
    { question: "Which of the following would violate purity in FP?", options: ["Returning a value", "Printing to the console", "Composing two functions", "Performing recursion"], answer: 1, explanation: "Printing is a side effect and breaks purity." },
    { question: "What is the purpose of pattern matching in F#?", options: ["To perform type casting", "To destructure and match data declaratively", "To mutate data structures", "To define new types"], answer: 1, explanation: "Pattern matching destructures values and branches declaratively." },
    { question: "Which pattern matches tuples in F#?", options: ["match x with | 0 -> ...", "match (x, y) with | (0,0) -> ...", "match [x] with | [] -> ...", "match record with | {name=_} -> ..."], answer: 1, explanation: "Tuple patterns match paired values like (x,y)." },
    { question: "Which of the following benefits is true of immutability?", options: ["It reduces memory safety", "It makes programs harder to reason about", "It prevents unintended state changes and race conditions", "It requires runtime type inference"], answer: 2, explanation: "Immutability avoids shared mutable state and related bugs." },
    { question: "Which is correct syntax for a recursive function in F#?", options: ["def factorial(n): ...", "function factorial(n) = ...", "let rec factorial n = ...", "fun factorial(n) -> ..."], answer: 2, explanation: "`let rec` enables recursion in F#." },
    { question: "What does 'tail recursion' help achieve in F#?", options: ["Parallel processing", "Improved readability", "Memory optimization by reusing stack frames", "Dynamic typing"], answer: 2, explanation: "Tail recursion allows stack-frame reuse to avoid stack overflows." },
    { question: "Which F# function applies a function to every element and returns a new list?", options: ["filter", "map", "fold", "sum"], answer: 1, explanation: "`List.map` transforms each element into a new list." },
    { question: "Which higher-order function reduces a list to a single accumulated result?", options: ["map", "filter", "fold", "collect"], answer: 2, explanation: "`fold` aggregates list elements via an accumulator." },
    { question: "What does the pipeline operator (`|>`) do in F#?", options: ["Performs parallel execution", "Chains functions by passing result to next", "Applies lazy evaluation", "Declares mutable bindings"], answer: 1, explanation: "`|>` forwards a value through a chain of functions." },
    { question: "Which operator composes functions left-to-right in F#?", options: [">>", "<<", "|>", "<|"], answer: 0, explanation: ">> composes f and g so g(f(x)) left-to-right." },
    { question: "What does `[1..5] |> List.filter (fun x -> x % 2 = 0)` do?", options: ["Filters out odd numbers and keeps even numbers", "Doubles each number", "Sorts the list", "Mutates the list"], answer: 0, explanation: "It returns the even numbers from the list." },
    { question: "F# uses strict (eager) evaluation by default.", options: ["True", "False"], answer: 0, explanation: "TRUE — evaluation is eager, `lazy` allows deferred values." },
    { question: "What does the keyword `lazy` do in F#?", options: ["Forces immediate computation", "Defers computation until needed", "Marks a variable as immutable", "Enables pattern matching"], answer: 1, explanation: "`lazy` delays computation until `.Force()` is called." },
    { question: "Which structure allows safe handling of potentially absent values in F#?", options: ["Option", "Tuple", "Record", "Seq"], answer: 0, explanation: "`Option` (Some/None) models nullable or missing values safely." },
    { question: "Which construct in F# provides asynchronous workflow syntax?", options: ["async computation expression", "thread pool", "rec", "monad comprehension"], answer: 0, explanation: "`async { ... }` is F#'s async computation expression." },
    { question: "What is a 'computation expression' in F#?", options: ["A built-in math operator", "Domain-specific syntax generalizing monadic workflows", "A recursive pattern match", "A sequence comprehension"], answer: 1, explanation: "Computation expressions abstract monadic workflows like async or option." },
    { question: "Which keyword introduces mutable bindings in F#?", options: ["let mutable", "var", "let ref", "bind"], answer: 0, explanation: "`let mutable` allows updating the bound variable." },
    { question: "Which feature enables processing infinite data efficiently in F#?", options: ["Lazy sequences", "Dynamic arrays", "Recursive binding", "Asynchronous map"], answer: 0, explanation: "`Seq.initInfinite` and lazy sequences produce elements on demand." },
    { question: "Declarative processing in F# provides concise readable transformations without explicit loops.", options: ["True", "False"], answer: 0, explanation: "TRUE — pipelines and higher-order functions replace explicit loops." },
    { question: "Which example demonstrates a higher-order function in F#?", options: ["let add a b = a + b", "let apply f x = f x", "let rec factorial n = ...", "let x = 10"], answer: 1, explanation: "`apply` takes a function `f` as argument → higher-order." },
    { question: "Lazy values are evaluated only when forced with `.Force()` in F#.", options: ["True", "False"], answer: 0, explanation: "TRUE — lazy evaluation defers computation until forced." },
    { question: "What does `List.fold (*) 1 [1..5]` compute?", options: ["Sum of elements", "Product of elements", "Average", "List of squares"], answer: 1, explanation: "Folding with `(*)` multiplies the list elements → product 120." },
    { question: "Exhaustiveness checking ensures all pattern cases are handled in F# pattern matching.", options: ["True", "False"], answer: 0, explanation: "TRUE — the compiler warns if patterns are non-exhaustive." },
    { question: "What distinguishes functional programming from imperative programming?", options: ["Use of mutable state and loops", "Use of recursion, immutability, and expressions instead of statements", "Dynamic typing", "Dependence on class hierarchies"], answer: 1, explanation: "Functional style favors immutability, recursion, and expressions." },
    { question: "Which operator creates readable data processing chains in F#?", options: ["|>", ">>", "=", "<-"], answer: 0, explanation: "The pipeline operator `|>` composes operations left-to-right." },
    { question: "What is the result of `[1..5] |> List.map (fun n -> n*n)`?", options: ["[1; 2; 3; 4; 5]", "[1; 4; 9; 16; 25]", "[2; 3; 4; 5; 6]", "Error"], answer: 1, explanation: "`map` squares each element producing [1;4;9;16;25]." },
    { question: "Which language was designed as the first business-oriented language with English-like syntax?", options: ["FORTRAN", "COBOL", "ALGOL", "Smalltalk"], answer: 1, explanation: "COBOL targeted business data processing with English-like syntax." },
    { question: "Static typing checks types at compile-time.", options: ["True", "False"], answer: 0, explanation: "TRUE — static typing verifies types before execution." },
    { question: "Which languages are examples of static typing?", options: ["Rust and Java", "Python and Ruby", "JavaScript and PHP", "Bash and Perl"], answer: 0, explanation: "Rust and Java perform compile-time type checking." },
    { question: "Weak typing allows implicit coercion between types.", options: ["True", "False"], answer: 0, explanation: "TRUE — weakly typed languages permit implicit conversions (e.g., JS)." },
    { question: "Parametric polymorphism enables writing generic code that works across types.", options: ["True", "False"], answer: 0, explanation: "TRUE — generics/parametric polymorphism provide type-generic code." },
    { question: "Ad-hoc polymorphism is best described as function overloading.", options: ["True", "False"], answer: 0, explanation: "TRUE — ad-hoc polymorphism includes overloading with type-specific implementations." },
    { question: "Subtype polymorphism depends on inheritance or interface implementation.", options: ["True", "False"], answer: 0, explanation: "TRUE — subtype polymorphism uses subtyping relationships for substitution." },
    { question: "Hindley–Milner type inference is commonly used in ML-family languages.", options: ["True", "False"], answer: 0, explanation: "TRUE — HM is the basis of inference in ML and Haskell." },
    { question: "Dependent types blur the line between types and values to allow stronger specifications.", options: ["True", "False"], answer: 0, explanation: "TRUE — dependent types express value-dependent properties at the type level." },
    { question: "Which language enforces ownership, borrowing and lifetimes at compile time?", options: ["Rust", "C", "Python", "JavaScript"], answer: 0, explanation: "Rust enforces ownership/borrowing rules to ensure memory safety." },
    { question: "The `let` keyword in F# always creates a mutable variable by default.", options: ["True", "False"], answer: 1, explanation: "FALSE — `let` creates immutable bindings by default; `let mutable` is needed for mutation." },
    { question: "An Option type in F# can be Some(value) or None.", options: ["True", "False"], answer: 0, explanation: "TRUE — Option models optional values as Some or None." },
    { question: "Seq.initInfinite in F# can create an infinite sequence evaluated lazily.", options: ["True", "False"], answer: 0, explanation: "TRUE — sequences are lazy and can represent infinite series." },
    { question: "Which of the following is NOT primarily a design goal shown in the lecture: Readability, Reliability, Efficiency, or Colorfulness?", options: ["Readability", "Reliability", "Efficiency", "Colorfulness"], answer: 3, explanation: "Colorfulness is not a language design goal discussed in the slides." },
    { question: "Which of the following best explains 'move semantics' in Rust?", options: ["Variables are copied automatically when assigned", "Ownership of data transfers from one variable to another", "Variables share ownership by default", "Memory is managed by garbage collection"], answer: 1, explanation: "Move semantics transfer ownership, invalidating the original binding unless Copy." },
    { question: "Which language uses goroutines as a primary concurrency primitive?", options: ["Go", "Rust", "Python", "Java"], answer: 0, explanation: "Go uses goroutines and channels for lightweight concurrency." },
    { question: "Which of the following is an advantage of type inference?", options: ["More verbose code", "Reduced boilerplate annotations", "Runtime type checks", "No compile-time checking"], answer: 1, explanation: "Type inference reduces explicit type annotations while preserving safety." },
    { question: "Which paradigm emphasizes expressions rather than statements and uses `let` for bindings?", options: ["Procedural", "Functional", "Imperative", "Assembly"], answer: 1, explanation: "Functional languages like F# emphasize expressions and `let` bindings." },
    { question: "Which of these can improve parallel performance in F# on arrays?", options: ["Array.Parallel.map", "List.map", "Seq.map", "Array.map"], answer: 0, explanation: "Array.Parallel.map performs parallel operations on arrays." },
    { question: "Which of the following is true: 'Exhaustiveness checking in pattern matching reduces runtime missing-case errors.'", options: ["True", "False"], answer: 0, explanation: "TRUE — compiler checks can warn about unhandled cases." },
    { question: "Which statement is true: 'Dependent types reduce the need for runtime checks by moving assertions to compile time.'", options: ["True", "False"], answer: 0, explanation: "TRUE — dependent types allow many properties to be verified at compile time." },
    { question: "Which of the following is NOT an FP core principle listed in the F# slides?", options: ["Immutability", "Pure Functions", "Recursion", "Manual pointer arithmetic"], answer: 3, explanation: "Manual pointer arithmetic is not an FP core principle." },
    { question: "Which of the following best describes 'computation expressions' in F#?", options: ["They are a domain-specific syntax generalizing monadic workflows", "They are just syntax sugar for loops", "They are an alternative to functions", "They are only used for I/O"], answer: 0, explanation: "Computation expressions express monadic workflows (async, option, etc.)." },
    { question: "Which of the following is true: 'Rust prevents null pointer dereferences by construction (no null by default).' ", options: ["True", "False"], answer: 0, explanation: "TRUE — Rust has `Option` instead of null and enforces initialization rules." },
    { question: "Which of these is an example of ad-hoc polymorphism rather than parametric?", options: ["Box<T> generic container", "Function overloading for int and double", "Hindley–Milner inference", "Seq.initInfinite"], answer: 1, explanation: "Overloading different implementations per type is ad-hoc polymorphism." },
    { question: "Which language is cited as prioritizing readability (slides quote 'Readability counts')?", options: ["Rust", "Python", "C", "Assembly"], answer: 1, explanation: "Python emphasizes readability as a core design goal." },
    { question: "Which of the following is true: 'Go's design favors simplicity and fast compilation' ", options: ["True", "False"], answer: 0, explanation: "TRUE — Go aims for simple syntax and quick builds." },
    { question: "Which of the following is FALSE about weak typing in JavaScript addition vs subtraction behavior?", options: ["'5' - 2 yields 3", "'5' + 2 yields '52'", "JavaScript always coerces strings to numbers", "Addition may produce string concatenation"], answer: 2, explanation: "JavaScript does NOT always coerce to numbers: addition with string causes concatenation." },
    { question: "Which of the following best describes 'expressiveness' as a design goal?", options: ["Ability to run on many platforms", "Concise representation of complex ideas", "Enforcing strict memory rules", "Faster compilation"], answer: 1, explanation: "Expressiveness is about concise, powerful language constructs." }
];


const pl5 = [
    {
        question: "Concurrency requires multiple CPU cores to be achieved.",
        options: ["False", "True"],
        answer: 0,
        explanation: "Concurrency can be achieved on a single CPU core through interleaved execution."
    },
    {
        question: "Parallelism improves system responsiveness by sharing time on a single core.",
        options: ["False", "True"],
        answer: 0,
        explanation: "Parallelism increases computation speed by executing tasks simultaneously on multiple cores."
    },
    {
        question: "Threads within the same process share the same memory space.",
        options: ["True", "False"],
        answer: 0,
        explanation: "Threads share the process's memory space but have their own stack and program counter."
    },
    {
        question: "Race conditions occur when only one thread accesses a critical section.",
        options: ["True", "False"],
        answer: 1,
        explanation: "Race conditions occur when multiple threads access shared data without synchronization."
    },
    {
        question: "CSP (Communicating Sequential Processes) uses shared memory for communication.",
        options: ["False", "True"],
        answer: 0,
        explanation: "CSP uses explicit message passing over channels, not shared memory."
    },
    {
        question: "The Actor Model allows actors to directly modify each other's state.",
        options: ["False", "True"],
        answer: 0,
        explanation: "Actors have private state and communicate only through messages."
    },
    {
        question: "Async/Await is ideal for CPU-bound tasks that require raw performance.",
        options: ["True", "False"],
        answer: 1,
        explanation: "Async/Await is best for I/O-bound tasks, not CPU-bound ones."
    },
    {
        question: "Deadlocks occur when threads are blocked indefinitely waiting for each other.",
        options: ["True", "False"],
        answer: 0,
        explanation: "Deadlocks happen when two or more threads are stuck waiting for resources held by each other."
    },
    {
        question: "MailboxProcessor in F# implements the CSP model directly with channels.",
        options: ["True", "False"],
        answer: 1,
        explanation: "MailboxProcessor simulates CSP-like behavior but does not provide direct CSP channels."
    },
    {
        question: "Go's goroutines are an implementation of the Thread-Based concurrency model.",
        options: ["True", "False"],
        answer: 1,
        explanation: "Go's goroutines are based on CSP principles, not traditional threads."
    },
    {
        question: "Which of the following is NOT a concurrency model discussed in Lecture 4?",
        options: ["Actor Model", "Promise/Future", "Thread-Based", "Async/Await"],
        answer: 1,
        explanation: "Promise/Future is a related pattern but not listed as a primary model in this lecture."
    },
    {
        question: "What is the main goal of parallelism?",
        options: ["Manage multiple tasks", "Increase computation speed", "Improve responsiveness", "Avoid deadlocks"],
        answer: 1,
        explanation: "Parallelism aims to execute multiple computations simultaneously to increase speed."
    },
    {
        question: "Which tool in F# ensures mutual exclusion to prevent race conditions?",
        options: ["MailboxProcessor", "async", "lock", "let!"],
        answer: 2,
        explanation: "The lock keyword ensures only one thread can access a critical section at a time."
    },
    {
        question: "In CSP, communication between processes is:",
        options: ["Direct state access", "Shared memory", "Broadcast", "Synchronous"],
        answer: 3,
        explanation: "CSP uses synchronous message passing over channels."
    },
    {
        question: "Which language is most associated with the Actor Model?",
        options: ["Go", "C#", "Erlang", "Java"],
        answer: 2,
        explanation: "Erlang is built around the Actor Model for fault-tolerant systems."
    },
    {
        question: "What is a key benefit of Async/Await in F#?",
        options: ["Synchronous communication", "Lightweight concurrency", "Direct memory sharing", "Automatic parallelization"],
        answer: 1,
        explanation: "Async workflows are lightweight and non-blocking, ideal for I/O operations."
    },
    {
        question: "Which problem is NOT typically associated with thread-based concurrency?",
        options: ["Starvation", "Deadlocks", "Deterministic execution", "Race conditions"],
        answer: 2,
        explanation: "Thread-based execution is non-deterministic, making deterministic execution a challenge."
    },
    {
        question: "What does the MailboxProcessor in F# simulate?",
        options: ["Synchronous I/O", "Thread pools", "CSP-like behavior", "Shared memory"],
        answer: 2,
        explanation: "MailboxProcessor provides actor-like message processing, simulating CSP principles."
    },
    {
        question: "Which model is best suited for distributed systems with high fault tolerance?",
        options: ["CSP", "Thread-Based", "Async/Await", "Actor Model"],
        answer: 3,
        explanation: "The Actor Model provides isolation, scalability, and built-in fault tolerance."
    },
    {
        question: "What is a 'critical section' in concurrency?",
        options: [
            "A message queue in CSP",
            "A function that runs asynchronously",
            "A section that accesses shared resources and must be thread-safe",
            "A part of code that must be executed by all threads"
        ],
        answer: 2,
        explanation: "A critical section accesses shared resources and must be protected from concurrent access."
    },
    {
        question: "Which synchronization tool works across process boundaries?",
        options: ["Monitor", "Semaphore", "lock", "Mutex"],
        answer: 3,
        explanation: "Mutex can synchronize access across different processes."
    },
    {
        question: "In the Actor Model, how do actors communicate?",
        options: ["Direct method calls", "Global state", "Shared variables", "Message passing"],
        answer: 3,
        explanation: "Actors communicate exclusively through asynchronous message passing."
    },
    {
        question: "What is the main disadvantage of thread-based concurrency?",
        options: ["Low overhead", "Easy debugging", "Non-deterministic execution", "High safety"],
        answer: 2,
        explanation: "Thread execution order is unpredictable, leading to hard-to-reproduce bugs."
    },
    {
        question: "Which keyword in F# async workflows allows non-blocking awaits?",
        options: ["let", "use", "return", "let!"],
        answer: 3,
        explanation: "let! awaits an async operation without blocking the thread."
    },
    {
        question: "What is 'starvation' in concurrency?",
        options: [
            "A deadlock resolved automatically",
            "All threads run simultaneously",
            "A thread is denied access to resources repeatedly",
            "A thread finishes too quickly"
        ],
        answer: 2,
        explanation: "Starvation occurs when a thread cannot gain access to needed resources."
    },
    {
        question: "Which real-world system uses the Actor Model?",
        options: ["Go runtime", "Apache Web Server", "WhatsApp", "Node.js"],
        answer: 2,
        explanation: "WhatsApp uses Erlang's Actor Model for massive scalability."
    },
    {
        question: "What does CSP stand for?",
        options: [
            "Cooperative Synchronous Programming",
            "Concurrent Shared Processes",
            "Concurrent State Passing",
            "Communicating Sequential Processes"
        ],
        answer: 3,
        explanation: "CSP stands for Communicating Sequential Processes."
    },
    {
        question: "Which model is recommended for I/O-bound web applications?",
        options: ["Actor Model", "CSP", "Thread-Based", "Async/Await"],
        answer: 3,
        explanation: "Async/Await is lightweight and efficient for I/O-bound tasks like web requests."
    },
    {
        question: "What is a 'livelock'?",
        options: [
            "A race condition with predictable outcome",
            "A deadlock that resolves itself",
            "A thread that runs indefinitely",
            "Threads make no progress but keep changing state"
        ],
        answer: 3,
        explanation: "Livelock occurs when threads change state but don't make real progress."
    },
    {
        question: "In F#, what does the 'use' keyword ensure in async workflows?",
        options: [
            "Message passing",
            "State immutability",
            "Thread safety",
            "Resource disposal"
        ],
        answer: 3,
        explanation: "use ensures resources are disposed of properly, even on exceptions."
    },
    {
        question: "Which concurrency model is built into Go's language design?",
        options: ["Async/Await", "Thread-Based", "CSP", "Actor Model"],
        answer: 2,
        explanation: "Go uses goroutines and channels, which are based on CSP."
    },
    {
        question: "What is the primary advantage of message-passing models over shared memory?",
        options: ["Faster execution", "Lower memory usage", "Easier debugging", "Avoidance of race conditions"],
        answer: 3,
        explanation: "Message passing avoids shared memory, reducing race conditions and deadlocks."
    },
    {
        question: "Which of these is a real implementation of the Actor Model in .NET?",
        options: ["async/await", "Task Parallel Library", "Akka.NET", "MailboxProcessor"],
        answer: 2,
        explanation: "Akka.NET is a .NET port of the Akka actor framework."
    },
    {
        question: "What does 'cooperative multitasking' mean in async workflows?",
        options: [
            "The OS forcibly switches tasks",
            "Tasks share memory directly",
            "Tasks voluntarily yield control",
            "Tasks run in parallel on multiple cores"
        ],
        answer: 2,
        explanation: "In cooperative multitasking, tasks yield control voluntarily."
    },
    {
        question: "Which of the following is a problem unique to shared-memory concurrency?",
        options: ["Channel deadlock", "Actor starvation", "Message serialization", "Race conditions"],
        answer: 3,
        explanation: "Race conditions arise from unsynchronized access to shared memory."
    },
    {
        question: "What is the role of a 'channel' in CSP?",
        options: [
            "Manage critical sections",
            "Schedule threads",
            "Pass messages between processes",
            "Share memory between processes"
        ],
        answer: 2,
        explanation: "Channels are used for synchronous message passing between processes."
    },
    {
        question: "Which F# construct is used to build async workflows?",
        options: ["task { ... }", "channel { ... }", "async { ... }", "actor { ... }"],
        answer: 2,
        explanation: "async { ... } defines an asynchronous computation expression in F#."
    },
    {
        question: "What is a key limitation of Async/Await?",
        options: ["High memory usage", "Complex debugging", "Lack of composability", "Poor I/O performance"],
        answer: 1,
        explanation: "Async code can be harder to debug due to non-linear execution flow."
    },
    {
        question: "Which model would you choose for a CPU-intensive scientific computation that needs fine control?",
        options: ["Async/Await", "Actor Model", "Thread-Based", "CSP"],
        answer: 2,
        explanation: "Threads offer direct control and are good for CPU-intensive work."
    },
    {
        question: "In the Actor Model, where are incoming messages stored before processing?",
        options: ["Database table", "Shared heap", "Channel buffer", "Mailbox queue"],
        answer: 3,
        explanation: "Each actor has a mailbox where messages are queued for processing."
    },
    {
        question: "What does 'context switching' refer to in concurrency?",
        options: [
            "Switching between CPU cores",
            "Passing messages between actors",
            "Saving and restoring thread state",
            "Changing async workflow state"
        ],
        answer: 2,
        explanation: "Context switching is the process of saving one task's state and loading another's."
    }
];

const pl6 = [
    {
        question: "The lexical analysis phase is responsible for building the Abstract Syntax Tree.",
        options: ["True", "False"],
        answer: 1,
        explanation: "Lexical analysis tokenizes source code, while parsing builds the AST."
    },
    {
        question: "Abstract Syntax Trees preserve all syntactic details from the source code.",
        options: ["True", "False"],
        answer: 1,
        explanation: "ASTs remove unnecessary syntactic details and focus on semantic structure."
    },
    {
        question: "FParsec is an imperative parsing library that requires separate grammar files.",
        options: ["True", "False"],
        answer: 1,
        explanation: "FParsec is a functional parsing library that uses parser combinators and doesn't require separate grammar files."
    },
    {
        question: "In F#, discriminated unions are not suitable for representing AST nodes.",
        options: ["True", "False"],
        answer: 1,
        explanation: "Discriminated unions are ideal for ASTs due to type safety and pattern matching capabilities."
    },
    {
        question: "The between combinator in FParsec is used to parse expressions between delimiters like parentheses.",
        options: ["True", "False"],
        answer: 0,
        explanation: "Correct! between parses content between opening and closing delimiters."
    },
    {
        question: "A stack-based virtual machine uses named registers for storing intermediate values.",
        options: ["True", "False"],
        answer: 1,
        explanation: "Stack-based VMs use a stack, while register-based VMs use named registers."
    },
    {
        question: "JIT compilation occurs at runtime, while AOT compilation happens before execution.",
        options: ["True", "False"],
        answer: 0,
        explanation: "Correct! JIT = Just-In-Time (runtime), AOT = Ahead-Of-Time (before execution)."
    },
    {
        question: "Lazy evaluation computes expressions immediately when they are bound to variables.",
        options: ["True", "False"],
        answer: 1,
        explanation: "Lazy evaluation defers computation until the result is actually needed."
    },
    {
        question: "The OperatorPrecedenceParser in FParsec cannot handle left-associative operators.",
        options: ["True", "False"],
        answer: 1,
        explanation: "OperatorPrecedenceParser can handle different associativities including left, right, and non-associative."
    },
    {
        question: "Interpreters typically execute code faster than virtual machines for the same program.",
        options: ["True", "False"],
        answer: 1,
        explanation: "Virtual machines usually execute faster due to bytecode compilation and optimization."
    },
    {
        question: "What is the primary purpose of the lexer in the language processing pipeline?",
        options: ["A. Build AST", "B. Execute code", "C. Tokenize source", "D. Optimize bytecode"],
        answer: 2,
        explanation: "The lexer tokenizes source code into meaningful tokens like identifiers, numbers, and operators."
    },
    {
        question: "Which of these is NOT a typical token category in lexical analysis?",
        options: ["A. Identifiers", "B. Literals", "C. Comments", "D. Delimiters"],
        answer: 2,
        explanation: "Comments are usually stripped during lexical analysis and not included as tokens."
    },
    {
        question: "Given this F# code: type Token = INT of int | IDENT of string | PLUS, what does this represent?",
        options: [
            "A. Abstract Syntax Tree",
            "B. Virtual Machine instruction",
            "C. Token discriminated union",
            "D. Parser combinator"
        ],
        answer: 2,
        explanation: "This is a discriminated union definition for tokens used in lexical analysis."
    },
    {
        question: "What does BNF (Backus-Naur Form) primarily describe?",
        options: [
            "A. Runtime behavior",
            "B. Memory allocation",
            "C. Formal grammars",
            "D. Optimization strategies"
        ],
        answer: 2,
        explanation: "BNF is a notation technique for describing formal grammars of programming languages."
    },
    {
        question: "Which operator in EBNF indicates 'zero or more repetitions'?",
        options: ["A. +", "B. *", "C. ?", "D. |"],
        answer: 1,
        explanation: "* indicates zero or more repetitions, + indicates one or more, ? indicates optional, | indicates alternatives."
    },
    {
        question: "Consider this AST: Add(Number(5), Mul(Number(3), Number(2))). What expression does it represent?",
        options: [
            "A. 5 + 3 * 2",
            "B. (5 + 3) * 2",
            "C. 5 * 3 + 2",
            "D. 5 * (3 + 2)"
        ],
        answer: 0,
        explanation: "The AST shows 5 + (3 * 2) which is 5 + 3 * 2 with multiplication having higher precedence."
    },
    {
        question: "What is a key advantage of using discriminated unions for ASTs in F#?",
        options: [
            "A. Automatic memory management",
            "B. Compile-time exhaustiveness checking",
            "C. Faster execution speed",
            "D. Built-in serialization"
        ],
        answer: 1,
        explanation: "The compiler ensures all cases are handled when pattern matching, preventing missed scenarios."
    },
    {
        question: "Which FParsec function would you use to parse one or more letter characters?",
        options: [
            "A. pchar",
            "B. manySatisfy",
            "C. many1SatisfyL",
            "D. between"
        ],
        answer: 2,
        explanation: "many1SatisfyL parses one or more characters satisfying a predicate, with 'L' providing error labels."
    },
    {
        question: "In the expression 'x = (5 + 3) * 2', which part would the 'between' combinator handle?",
        options: [
            "A. Parsing 'x'",
            "B. Parsing '='",
            "C. Parsing '(5 + 3)'",
            "D. Parsing '* 2'"
        ],
        answer: 2,
        explanation: "between handles delimited expressions like those in parentheses."
    },
    {
        question: "Which precedence value would make an operator evaluate first?",
        options: [
            "A. Lower number",
            "B. Higher number",
            "C. It doesn't matter",
            "D. Zero"
        ],
        answer: 1,
        explanation: "Higher precedence values mean operators are evaluated first (e.g., multiplication before addition)."
    },
    {
        question: "Given this parser: let assignment = identifier .>> spaces .>> pchar '=' .>> spaces .>>. expr, what does '.>>.' do?",
        options: [
            "A. Discards left result",
            "B. Discards right result",
            "C. Combines both results",
            "D. Applies a function"
        ],
        answer: 2,
        explanation: "`.>>.` combines the results of two parsers into a tuple."
    },
    {
        question: "What is the primary role of the environment in an interpreter?",
        options: [
            "A. Tokenize source code",
            "B. Parse grammar rules",
            "C. Track variable bindings",
            "D. Generate bytecode"
        ],
        answer: 2,
        explanation: "The environment maintains variable names and their values during execution."
    },
    {
        question: "Consider this eval function: | Add(a,b) -> eval env a + eval env b. What evaluation strategy is this?",
        options: [
            "A. Lazy evaluation",
            "B. Eager evaluation",
            "C. Parallel evaluation",
            "D. Just-in-time evaluation"
        ],
        answer: 1,
        explanation: "Both operands are evaluated immediately before the addition, characteristic of eager evaluation."
    },
    {
        question: "Which of these is a key difference between interpreters and virtual machines?",
        options: [
            "A. Interpreters use tokens, VMs use ASTs",
            "B. Interpreters walk ASTs, VMs execute bytecode",
            "C. Interpreters are faster than VMs",
            "D. VMs cannot handle variables"
        ],
        answer: 1,
        explanation: "Interpreters directly evaluate ASTs while VMs compile to bytecode first for execution."
    },
    {
        question: "In a stack-based VM, what would the instruction sequence for '5 + 3' be?",
        options: [
            "A. PUSH 5; ADD; PUSH 3",
            "B. PUSH 5; PUSH 3; ADD",
            "C. ADD 5 3",
            "D. STORE 5; LOAD 3; ADD"
        ],
        answer: 1,
        explanation: "Push both operands then apply the ADD operation to the top two stack values."
    },
    {
        question: "Which virtual machine is specifically designed for Erlang and Elixir?",
        options: [
            "A. JVM",
            "B. BEAM",
            "C. CLR",
            "D. WebAssembly"
        ],
        answer: 1,
        explanation: "BEAM (Bogdan/Björn's Erlang Abstract Machine) is Erlang's VM, also used by Elixir."
    },
    {
        question: "What is a key advantage of JIT compilation over AOT compilation?",
        options: [
            "A. Faster startup time",
            "B. Profile-guided optimization",
            "C. Smaller binary size",
            "D. Better cross-platform compatibility"
        ],
        answer: 1,
        explanation: "JIT can optimize based on actual runtime profiling information."
    },
    {
        question: "In lazy evaluation, when is the expression 'lazy (printfn \"run\"; 5 + 5)' evaluated?",
        options: [
            "A. When defined",
            "B. When first used",
            "C. At compile time",
            "D. Never"
        ],
        answer: 1,
        explanation: "Lazy expressions are evaluated only when their value is actually needed."
    },
    {
        question: "What does this EBNF rule represent: expr = term ((\"+\" | \"-\") term)*?",
        options: [
            "A. A single term",
            "B. Terms separated by + or -",
            "C. Only multiplication",
            "D. Variable assignment"
        ],
        answer: 1,
        explanation: "This describes one or more terms separated by + or - operators."
    },
    {
        question: "Which parsing approach uses functions that take parsers and return new parsers?",
        options: [
            "A. Recursive descent",
            "B. LR parsing",
            "C. Parser combinators",
            "D. Table-driven parsing"
        ],
        answer: 2,
        explanation: "Parser combinators are higher-order functions that combine parsers to create new ones."
    },
    {
        question: "What is the purpose of the 'many1' in 'many1SatisfyL isLetter \"id\"'?",
        options: [
            "A. Match zero or more",
            "B. Match exactly one",
            "C. Match one or more",
            "D. Match any character"
        ],
        answer: 2,
        explanation: "'many1' means one or more occurrences (at least one)."
    },
    {
        question: "In the AST node Assign(\"x\", Add(Number(5), Number(3))), what type of operation is 'Assign'?",
        options: [
            "A. Arithmetic operation",
            "B. Comparison operation",
            "C. Variable declaration",
            "D. Assignment operation"
        ],
        answer: 3,
        explanation: "Assign represents an assignment operation storing a value in a variable."
    },
    {
        question: "Which of these languages primarily uses eager evaluation?",
        options: [
            "A. Haskell",
            "B. F# (by default)",
            "C. Both use lazy",
            "D. Neither"
        ],
        answer: 1,
        explanation: "F# uses eager evaluation by default, though it supports lazy evaluation explicitly."
    },
    {
        question: "What problem does the OperatorPrecedenceParser in FParsec solve?",
        options: [
            "A. Memory management",
            "B. Error reporting",
            "C. Operator precedence handling",
            "D. Token generation"
        ],
        answer: 2,
        explanation: "It handles operator precedence and associativity in expression parsing."
    },
    {
        question: "Given this code: let parens p = between (pchar '(') (pchar ')') p, what does 'p' represent?",
        options: [
            "A. A parser for the opening parenthesis",
            "B. A parser for the closing parenthesis",
            "C. A parser for the content inside",
            "D. The result type"
        ],
        answer: 2,
        explanation: "'p' is the parser for the expression inside the parentheses."
    },
    {
        question: "Which component is responsible for checking syntax against grammar rules?",
        options: [
            "A. Lexer",
            "B. Parser",
            "C. Interpreter",
            "D. Virtual Machine"
        ],
        answer: 1,
        explanation: "The parser validates token sequences against grammar rules."
    },
    {
        question: "What is a key difference between parse trees and abstract syntax trees?",
        options: [
            "A. Parse trees are smaller",
            "B. ASTs include all syntactic details",
            "C. ASTs focus on semantics",
            "D. Parse trees are used for execution"
        ],
        answer: 2,
        explanation: "ASTs remove unnecessary syntactic details and focus on semantic meaning."
    },
    {
        question: "In FParsec, what does the '|>' operator typically do?",
        options: [
            "A. Alternative choice",
            "B. Sequence parsers",
            "C. Transform results",
            "D. Handle errors"
        ],
        answer: 2,
        explanation: "The pipe-forward operator is often used to transform parser results."
    },
    {
        question: "Which of these would be a valid extension to the lab exercises?",
        options: [
            "A. Adding garbage collection",
            "B. Implementing boolean operations",
            "C. Creating a GUI interface",
            "D. Network communication"
        ],
        answer: 1,
        explanation: "Adding boolean operations is mentioned as a lab exercise for extending the interpreter."
    },
    {
        question: "What does the 'L' in 'many1SatisfyL' provide?",
        options: [
            "A. Lazy evaluation",
            "B. Line number tracking",
            "C. Error message label",
            "D. Left associativity"
        ],
        answer: 2,
        explanation: "The 'L' suffix provides an error message label for better error reporting."
    },
    {
        question: "In the evaluation function pattern: | Var v -> env.[v], what happens if 'v' is not in env?",
        options: [
            "A. Returns 0",
            "B. Creates the variable",
            "C. Throws an exception",
            "D. Returns null"
        ],
        answer: 2,
        explanation: "Dictionary lookup with env.[v] would throw a KeyNotFoundException if v is not found."
    },
    {
        question: "Which of these is an advantage of register-based VMs over stack-based VMs?",
        options: [
            "A. Simpler implementation",
            "B. Fewer instructions for complex ops",
            "C. Better memory usage",
            "D. Easier debugging"
        ],
        answer: 1,
        explanation: "Register machines can perform complex operations with fewer instructions by using named registers."
    },
    {
        question: "What does EBNF add to basic BNF notation?",
        options: [
            "A. Semantic rules",
            "B. Additional notations for clarity",
            "C. Runtime behavior",
            "D. Optimization hints"
        ],
        answer: 1,
        explanation: "EBNF (Extended BNF) adds notations like repetition operators (*, +, ?) for clearer grammar specifications."
    },
    {
        question: "In the pipeline: Source → Lexer → Parser → AST → ?, what comes next for an interpreter?",
        options: [
            "A. Bytecode",
            "B. Machine code",
            "C. Interpreter",
            "D. Optimizer"
        ],
        answer: 2,
        explanation: "For an interpreter, the AST is directly evaluated by the interpreter component."
    },
    {
        question: "Which F# feature makes discriminated unions particularly suitable for AST traversal?",
        options: [
            "A. Type inference",
            "B. Pattern matching",
            "C. Mutable variables",
            "D. Async workflows"
        ],
        answer: 1,
        explanation: "Pattern matching allows elegant and exhaustive handling of different AST node types."
    },
    {
        question: "What is the purpose of 'createParserForwardedToRef()' in FParsec?",
        options: [
            "A. Create recursive parsers",
            "B. Optimize parsing speed",
            "C. Handle errors",
            "D. Generate tokens"
        ],
        answer: 0,
        explanation: "It's used to create forward references for parsing recursive grammar structures."
    },
    {
        question: "In lazy evaluation, what is a potential benefit?",
        options: [
            "A. Faster startup",
            "B. Avoiding unnecessary computations",
            "C. Simpler debugging",
            "D. Better memory locality"
        ],
        answer: 1,
        explanation: "Lazy evaluation can avoid computing values that are never actually used."
    }
];

const ethics1 = [
    {
        question: "What are Ethics?",
        options: [
            "Laws that legally mandate what is right or wrong",
            "A structure of standards and practices that influence how people lead their lives",
            "Strictly implemented rules for everyone to follow",
            "Technical guidelines for computer use"
        ],
        answer: 1,
        explanation: "Ethics are a structure of standards and practices that influence how people lead their lives, not strictly implemented laws."
    },
    {
        question: "How do Ethics differ from laws?",
        options: [
            "Ethics are legally binding while laws are not",
            "Ethics illustrate society's views about what is right and wrong",
            "Laws are optional while ethics are mandatory",
            "There is no difference between them"
        ],
        answer: 1,
        explanation: "Ethics illustrate society's views about what is right and wrong, unlike laws that legally mandate what is right or wrong."
    },
    {
        question: "What are Computer Ethics?",
        options: [
            "Rules for using hardware only",
            "Technical specifications for software development",
            "A set of moral standards that govern the use of computers",
            "Laws about internet usage"
        ],
        answer: 2,
        explanation: "Computer ethics are a set of moral standards that govern the use of computers, including both hardware and software."
    },
    {
        question: "Which of the following is a privacy concern in computer ethics?",
        options: [
            "Software licensing",
            "Hacking",
            "Programming languages",
            "Hardware design"
        ],
        answer: 1,
        explanation: "Hacking is unlawful intrusion into a computer or network and is a major privacy concern."
    },
    {
        question: "What is Malware?",
        options: [
            "Software that improves computer performance",
            "Malicious software created to impair a computer system",
            "Security protection software",
            "Entertainment software"
        ],
        answer: 1,
        explanation: "Malware means malicious software which is created to impair a computer system, including viruses, spyware, worms and trojan horses."
    },
    {
        question: "What is Data Protection?",
        options: [
            "Deleting all personal data",
            "Collecting as much data as possible",
            "The process of safeguarding data while balancing privacy rights and business needs",
            "Sharing data with everyone"
        ],
        answer: 2,
        explanation: "Data protection is the process of safeguarding data which intends to influence a balance between individual privacy rights while still authorizing data to be used for business purposes."
    },
    {
        question: "What is the purpose of Anonymity?",
        options: [
            "To reveal user identity",
            "To improve internet speed",
            "To keep a user's identity masked",
            "To increase physical security"
        ],
        answer: 2,
        explanation: "Anonymity is a way of keeping a user's identity masked through various applications."
    },
    {
        question: "What is Copyright?",
        options: [
            "The right for anyone to use creative works freely",
            "A form of intellectual property that gives proprietary rights to the author",
            "A method for stealing intellectual property",
            "Free licensing for all content"
        ],
        answer: 1,
        explanation: "Copyright is a form of intellectual property that gives proprietary publication, distribution and usage rights for the author."
    },
    {
        question: "What is Plagiarism?",
        options: [
            "Proper citation of sources",
            "Creating original work",
            "Copying and publishing another person's work without proper citation",
            "Buying copyrights legally"
        ],
        answer: 2,
        explanation: "Plagiarism is an act of copying and publishing another person's work without proper citation, like stealing someone else's work."
    },
    {
        question: "What is Cracking?",
        options: [
            "Installing software legally",
            "Security enhancement process",
            "Breaking into a system by getting past security features",
            "Software performance optimization"
        ],
        answer: 2,
        explanation: "Cracking is a way of breaking into a system by getting past the security features of the system, skipping registration and authentication steps."
    },
    {
        question: "What is a Software License?",
        options: [
            "Transfer of ownership to the user",
            "Permission to use digital material based on license agreement",
            "A method for software theft",
            "Destruction of software rights"
        ],
        answer: 1,
        explanation: "Software license allows the use of digital material by following the license agreement while ownership remains with the copyright owner."
    },
    {
        question: "How have computers affected jobs according to the lecture?",
        options: [
            "All jobs have been abolished",
            "No jobs have been affected",
            "Some jobs abolished while others became simpler",
            "All jobs have become more complex"
        ],
        answer: 2,
        explanation: "Some jobs have been abolished while some jobs have become simpler as computers have taken over companies and businesses."
    },
    {
        question: "What is an ethical concern regarding employee health and safety?",
        options: [
            "Employees getting sick from constant sitting and screen time",
            "Employees working less hours",
            "Improved employee skills",
            "Increased productivity only"
        ],
        answer: 0,
        explanation: "There are ethical concerns on health and safety of employees getting sick from constant sitting, staring at computer screens and typing."
    },
    {
        question: "How do computers affect the environment?",
        options: [
            "Reduce energy consumption",
            "Increase greenhouse gas emissions",
            "Improve air quality",
            "Have no environmental impact"
        ],
        answer: 1,
        explanation: "Environment has been affected by computers since increased computer usage increases energy usage and greenhouse gas emissions."
    },
    {
        question: "What is one way to save energy with computers?",
        options: [
            "Use computers 24/7",
            "Limit computer time and use sleep mode",
            "Always keep monitors at maximum brightness",
            "Use outdated, inefficient computers"
        ],
        answer: 1,
        explanation: "Limiting computer time and turning off computers or using sleep mode when not in use can save energy."
    },
    {
        question: "What positive social impact do computers have?",
        options: [
            "Helping people stay in touch with family and friends",
            "Complete isolation from society",
            "Only negative impacts on society",
            "Reducing communication between people"
        ],
        answer: 0,
        explanation: "Computers and the internet help people stay in touch with family and friends through social media and other means."
    },
    {
        question: "What is a positive effect of computer gaming?",
        options: [
            "Addiction and isolation",
            "Exposure to violence",
            "Improved hand-eye coordination and strategic thinking",
            "Only negative effects on players"
        ],
        answer: 2,
        explanation: "Positive effects of computer gaming include improved hand-eye coordination, stress relief and improved strategic thinking."
    },
    {
        question: "How does computer technology help governments?",
        options: [
            "By reducing services to citizens",
            "By holding and analyzing huge amounts of data",
            "By eliminating all paperwork",
            "By making services more complicated"
        ],
        answer: 1,
        explanation: "Computer technology helps the government in improving services through advanced databases that can hold huge data for collection and analysis."
    },
    {
        question: "How do computers aid businesses?",
        options: [
            "By making all processes manual",
            "By automating processes, reports and analysis",
            "By increasing paperwork",
            "By reducing efficiency"
        ],
        answer: 1,
        explanation: "Computer technology aids businesses by automating processes, reports and analysis."
    },
    {
        question: "What does the Energy Star label indicate?",
        options: [
            "High energy consumption",
            "Energy inefficient computers",
            "Energy efficient computers",
            "Outdated technology"
        ],
        answer: 2,
        explanation: "Buying energy efficient computers with Energy Star label can help save the environment by reducing energy consumption."
    },

    // True/False Questions (10 questions)
    {
        question: "Ethics are strictly implemented laws that everyone must follow.",
        options: ["True", "False"],
        answer: 1,
        explanation: "False. Ethics are not strictly implemented to follow, unlike laws that legally mandate what is right or wrong."
    },
    {
        question: "Computer ethics only concern the use of computer hardware, not software.",
        options: ["True", "False"],
        answer: 1,
        explanation: "False. Computer ethics govern the use of computers, both hardware and software."
    },
    {
        question: "Hacking is defined as lawful access to computer systems.",
        options: ["True", "False"],
        answer: 1,
        explanation: "False. Hacking is unlawful intrusion into a computer or a network."
    },
    {
        question: "Malware includes viruses, spyware, worms and trojan horses.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Common malware are viruses, spyware, worms and trojan horses."
    },
    {
        question: "Data protection means deleting all personal information immediately.",
        options: ["True", "False"],
        answer: 1,
        explanation: "False. Data protection is about safeguarding data while balancing privacy and business needs."
    },
    {
        question: "Copyright gives anyone the right to use an author's work without permission.",
        options: ["True", "False"],
        answer: 1,
        explanation: "False. Copyright gives proprietary rights to the author, and others cannot use the work without permission."
    },
    {
        question: "Plagiarism is the proper citation of another person's work.",
        options: ["True", "False"],
        answer: 1,
        explanation: "False. Plagiarism is copying and publishing another's work without proper citation."
    },
    {
        question: "Computers have only created new jobs and haven't abolished any.",
        options: ["True", "False"],
        answer: 1,
        explanation: "False. Some jobs have been abolished while some have become simpler due to computers."
    },
    {
        question: "Increased computer usage can lead to higher energy consumption and greenhouse gas emissions.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Increased computer time increases energy usage which increases greenhouse gas emissions."
    },
    {
        question: "Computer gaming has only negative effects on society with no positive impacts.",
        options: ["True", "False"],
        answer: 1,
        explanation: "False. Computer gaming has both positive effects (improved coordination, strategic thinking) and negative effects."
    }
];

const ethics2 = [
    {
        "question": "What is the primary role of ethical hackers?",
        "options": [
            "To test the security of an organization with permission", // A
            "To steal sensitive data for personal gain",
            "To create malware for cyber attacks",
            "To help black-hat hackers improve their skills"
        ],
        "answer": 0,
        "explanation": "Ethical hackers are employed to test the security of an organization using the same skills as hackers but with permission from the system owner."
    },
    {
        "question": "Which type of hacker has limited training and uses basic tools without full understanding?",
        "options": [
            "White-Hat Hackers",
            "Black-Hat Hackers",
            "Script Kiddies", // C
            "Gray-Hat Hackers"
        ],
        "answer": 2,
        "explanation": "Script Kiddies have limited or no training and know how to use only basic techniques or tools without understanding what they are doing."
    },
    {
        "question": "What characterizes White-Hat hackers?",
        "options": [
            "They have a code of ethics to cause no harm", // A
            "They operate outside the law",
            "They work for personal financial gain",
            "They don't care about getting caught"
        ],
        "answer": 0,
        "explanation": "White-Hat hackers think like attackers but work for the good guys with a code of ethics that says they will cause no harm."
    },
    {
        "question": "Which hacker type straddles the line between good and bad and may not be fully trusted even after reforming?",
        "options": [
            "White-Hat Hackers",
            "Black-Hat Hackers",
            "Suicide Hackers",
            "Gray-Hat Hackers" // D
        ],
        "answer": 3,
        "explanation": "Gray-Hat Hackers straddle the line between good and bad and may not be fully trusted even after deciding to reform."
    },
    {
        "question": "What is a key principle in the ethical hacker's code of conduct?",
        "options": [
            "Share confidential information with other hackers",
            "Use illegally obtained software whenever possible",
            "Associate with malicious hackers to learn their techniques",
            "Keep private and confidential information gained in professional work" // D
        ],
        "answer": 3,
        "explanation": "Ethical hackers must keep private and confidential information gained in their professional work secure."
    },
    {
        "question": "According to the code of ethics, what should ethical hackers do with potential dangers they discover?",
        "options": [
            "Keep them secret to avoid panic",
            "Sell the information to the highest bidder",
            "Disclose to appropriate persons or authorities", // C
            "Use them for personal advantage"
        ],
        "answer": 2,
        "explanation": "Ethical hackers should disclose to appropriate persons or authorities potential dangers to e-commerce clients, the Internet community, or the public."
    },
    {
        "question": "What does 'Hack Value' refer to in hacking language?",
        "options": [
            "A target that attracts above-average attention from attackers", // A
            "The cost of hacking tools",
            "The ethical value of hacking",
            "The monetary value of stolen data"
        ],
        "answer": 0,
        "explanation": "Hack Value describes a target that may attract an above-average level of attention from an attacker."
    },
    {
        "question": "What is a 'Zero Day' vulnerability?",
        "options": [
            "A vulnerability that has been known for years",
            "A completely harmless security flaw",
            "A threat unknown to developers and not addressed", // C
            "A vulnerability that only appears at midnight"
        ],
        "answer": 2,
        "explanation": "Zero Day describes a threat or vulnerability that is unknown to developers and has not been addressed, considered a serious problem."
    },
    {
        "question": "What is the definition of a 'Vulnerability' in hacking terminology?",
        "options": [
            "A strong security feature",
            "A type of malware",
            "A weakness in a system that can be attacked", // C
            "A security protocol"
        ],
        "answer": 2,
        "explanation": "Vulnerability is a weakness in a system that can be attacked and used as an entry point into an environment."
    },
    {
        "question": "What is 'Daisy Chaining' in the context of hacking?",
        "options": [
            "Creating flower-themed malware",
            "A defensive security technique",
            "A type of network cable",
            "Performing several hacking attacks in sequence" // D
        ],
        "answer": 3,
        "explanation": "Daisy Chaining is the act of performing several hacking attacks in sequence with each building on the results of the previous action."
    },
    {
        "question": "Which phase involves using passive methods to gather information about a target?",
        "options": [
            "Scanning",
            "Enumeration",
            "Footprinting", // C
            "System Hacking"
        ],
        "answer": 2,
        "explanation": "Footprinting involves using primarily passive methods of gaining information from a target prior to performing active methods."
    },
    {
        "question": "What is the main goal of the Footprinting phase?",
        "options": [
            "To attack the system directly",
            "To cover tracks after an attack",
            "To plant backdoors in the system",
            "To gather as much information as possible about the target" // D
        ],
        "answer": 3,
        "explanation": "The goal of Footprinting is to gather as much information as is reasonable and useful about a potential target."
    },
    {
        "question": "Which tool is used in the Scanning phase to trace the path of IP packets?",
        "options": [
            "Tracert", // A
            "Ping",
            "Port scans",
            "Ping sweeps"
        ],
        "answer": 0,
        "explanation": "Tracert (Trace Route) is a command-line utility used to trace the path that an IP packet takes to its destination."
    },
    {
        "question": "What type of information is gathered during the Enumeration phase?",
        "options": [
            "User lists, routing tables, and protocols", // A
            "Only IP addresses",
            "Only physical location data",
            "Only employee phone numbers"
        ],
        "answer": 0,
        "explanation": "Enumeration involves systematic probing to obtain user lists, routing tables, and protocols from the system."
    },
    {
        "question": "What does 'Escalation of privilege' involve?",
        "options": [
            "Reducing user privileges",
            "Creating new user accounts",
            "Obtaining higher privileged accounts than originally accessed", // C
            "Deleting administrator accounts"
        ],
        "answer": 2,
        "explanation": "Escalation of privilege involves obtaining privileges granted to higher privileged accounts than originally broken into."
    },
    {
        "question": "What is the purpose of 'Covering tracks'?",
        "options": [
            "To leave evidence of the attack",
            "To document the attack process",
            "To announce the successful attack",
            "To remove evidence of presence in a system" // D
        ],
        "answer": 3,
        "explanation": "Covering tracks involves attempting to remove evidence of presence in a system by purging log files and destroying other evidence."
    },
    {
        "question": "What does 'Planting backdoors' enable attackers to do?",
        "options": [
            "Lock themselves out of the system",
            "Improve system security",
            "Remove all access points",
            "Return to the system later if desired" // D
        ],
        "answer": 3,
        "explanation": "Planting backdoors means leaving something behind that would enable returning to the system later, such as special accounts or Trojan horses."
    },
    {
        "question": "Which Google operator displays the cached version of a web page?",
        "options": [
            "link:",
            "info:",
            "cache:", // C
            "site:"
        ],
        "answer": 2,
        "explanation": "The cache: operator displays the version of a web page that Google contains in its cache instead of the current version."
    },
    {
        "question": "What does the 'site:' operator do in Google hacking?",
        "options": [
            "Restricts search to a specific website location", // A
            "Searches the entire internet without restrictions",
            "Finds only images from a site",
            "Shows websites that link to a specific site"
        ],
        "answer": 0,
        "explanation": "The site: operator restricts the search to the location specified in the query."
    },
    {
        "question": "Which tool is mentioned for downloading static information from webpages?",
        "options": [
            "wget or HTTrack", // A
            "FOCA",
            "Tracert",
            "Ping"
        ],
        "answer": 0,
        "explanation": "Tools like wget or HTTrack can download all static information from webpages at once."
    },
    {
        "question": "What is FOCA primarily used for?",
        "options": [
            "Finding metadata and hidden information in documents", // A
            "Network scanning",
            "Password cracking",
            "Social engineering attacks"
        ],
        "answer": 0,
        "explanation": "FOCA is a tool used mainly to find metadata and hidden information in documents that may be on web pages."
    },
    {
        "question": "In the social engineering example, how did the attacker target Isak?",
        "options": [
            "By calling him directly",
            "By sending a fake hotel email offering a gift", // B
            "By hacking his social media password",
            "By installing malware on his computer"
        ],
        "answer": 1,
        "explanation": "The attacker sent a fake email from the hotel offering a gift after Isak posted about his hotel stay on social media."
    },
    {
        "question": "How was Stine's password discovered in the social media example?",
        "options": [
            "She told the attacker directly",
            "The password was written on her social media profile",
            "The hotel provided the password",
            "The attacker used brute-forcing" // D
        ],
        "answer": 3,
        "explanation": "The attacker brute-forced Stine's password after learning about her favorite singer from her social media profile."
    },
    {
        "question": "What information can be gathered from social media to build personal profiles?",
        "options": [
            "Only current location",
            "Work, education, contact info, family relationships, and more", // B
            "Only email addresses",
            "Only photos"
        ],
        "answer": 1,
        "explanation": "Social media can provide work and education, places of living, contact info, family relationships, details, life events, photos, favorites, friends, and timeline data."
    },
    {
        "question": "What does the 'allinurl:' Google operator do?",
        "options": [
            "Searches for keywords in page titles",
            "Shows cached versions of pages",
            "Returns results with specific query in the URL", // C
            "Finds pages linking to a specific site"
        ],
        "answer": 2,
        "explanation": "The allinurl: operator returns only results with the specific query in the URL."
    },

    // True/False Questions (15 questions) - Unchanged as they are correct
    {
        "question": "Ethical hackers always work without any contracts or permission from system owners.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Ethical hackers work under contract with permission from the system owner, and their contracts specify what they are allowed to do."
    },
    {
        "question": "Script Kiddies are highly trained professionals with deep understanding of hacking techniques.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Script Kiddies have limited or no training and may not understand what they are doing."
    },
    {
        "question": "Black-Hat hackers always have a specific agenda when conducting attacks.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Black-Hat hackers may or may not have an agenda when operating on the opposite side of the law."
    },
    {
        "question": "Suicide Hackers are very stealthy and careful not to get caught.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Suicide Hackers are not stealthy because they are not worried about getting caught or doing prison time."
    },
    {
        "question": "Ethical hackers should protect the intellectual property of others.",
        "options": ["True", "False"],
        "answer": 0,
        "explanation": "True. Ethical hackers should protect the intellectual property of others by relying on their own innovation and efforts."
    },
    {
        "question": "It is acceptable for ethical hackers to use illegally obtained software if it helps their testing.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Ethical hackers should never knowingly use software or a process that is obtained or retained either illegally or unethically."
    },
    {
        "question": "Ethical hackers can associate with malicious hackers to learn about new techniques.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Ethical hackers should not associate with malicious hackers nor engage in any malicious activities."
    },
    {
        "question": "Footprinting involves active engagement with the target system.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Footprinting uses primarily passive methods of gaining information prior to active engagement."
    },
    {
        "question": "Scanning determines which hosts are active and what the network looks like.",
        "options": ["True", "False"],
        "answer": 0,
        "explanation": "True. Scanning focuses on active engagement to determine active hosts and network structure."
    },
    {
        "question": "Enumeration is the final phase of ethical hacking before reporting.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Enumeration is an intermediate phase that occurs after scanning and before system hacking."
    },
    {
        "question": "Google hacking operators can only be used on special Google pages designed for security professionals.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Google hacking operators are entered directly into the regular Google search box and don't require special pages."
    },
    {
        "question": "The 'link:' operator in Google shows websites that are linked to by a specific site.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. The 'link:' operator lists web pages that contain links to the page or site specified, not websites linked to by that site."
    },
    {
        "question": "Social media cannot be used for building detailed personal profiles for social engineering.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Social media can provide extensive personal information that can be used to build detailed profiles for social engineering attacks."
    },
    {
        "question": "FOCA is mainly used for network speed testing and optimization.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. FOCA is used mainly to find metadata and hidden information in documents."
    },
    {
        "question": "Every piece of information gathered about a target can be potentially useful for hackers.",
        "options": ["True", "False"],
        "answer": 0,
        "explanation": "True. Hackers collect all available information and systemize it before planning attacks, as even seemingly unimportant information can be valuable."
    }
];


const ethics3 = [
    // Multiple Choice Questions (20 questions) - Answers varied
    {
        "question": "What is the primary goal of cryptography?",
        "options": [
            "To make information transmission slower",
            "To increase the size of data",
            "To protect and preserve information in all its forms", // C
            "To replace all communication methods"
        ],
        "answer": 2,
        "explanation": "Cryptography deals with protection and preservation of information in all its forms, with encryption getting the most attention for manipulating and protecting information."
    },
    {
        "question": "What is cryptanalysis?",
        "options": [
            "Creating new encryption algorithms",
            "Writing secret messages",
            "Distributing cryptographic keys",
            "Unlocking or uncovering secrets that others try to hide" // D
        ],
        "answer": 3,
        "explanation": "Cryptanalysis deals with unlocking or uncovering the secrets that others try so hard to hide or obscure."
    },
    {
        "question": "What was the original purpose of Egyptian hieroglyphics according to the lecture?",
        "options": [
            "Military communications",
            "Special writing system to commune with gods", // B
            "Business transactions",
            "Personal diaries"
        ],
        "answer": 1,
        "explanation": "The ancient Egyptians used hieroglyphics not so much to withhold secrets but because they wanted a special writing system to commune with their gods."
    },
    {
        "question": "What was the significance of the Rosetta Stone?",
        "options": [
            "It contained gold and precious stones",
            "It was the first computer encryption device",
            "It was used for military strategy",
            "It allowed modern civilization to understand ancient Egyptian language" // D
        ],
        "answer": 3,
        "explanation": "The Rosetta Stone was the key that allowed modern civilization to understand a language that was nearly lost, taking over 20 years of effort to reveal the language."
    },
    {
        "question": "Which of these is NOT a goal of modern cryptography?",
        "options": [
            "Confidentiality",
            "Making information larger", // B
            "Integrity",
            "Authentication"
        ],
        "answer": 1,
        "explanation": "Modern cryptography seeks to achieve confidentiality, integrity, authentication, nonrepudiation, and key distribution - not making information larger."
    },
    {
        "question": "What does confidentiality ensure in cryptography?",
        "options": [
            "That secret information is kept from disclosure", // A
            "That data cannot be modified",
            "That the sender's identity is verified",
            "That keys are properly distributed"
        ],
        "answer": 0,
        "explanation": "Confidentiality is the primary goal that encryption seeks to achieve - keeping secret information from disclosure, away from prying eyes."
    },
    {
        "question": "What is the purpose of integrity in cryptography?",
        "options": [
            "To hide the content of messages",
            "To verify the identity of users",
            "To detect changes in information", // C
            "To create digital signatures"
        ],
        "answer": 2,
        "explanation": "Cryptography can detect changes in information and thus prove its integrity or original unmodified state."
    },
    {
        "question": "What does nonrepudiation provide?",
        "options": [
            "Fast encryption speed",
            "One-way encryption",
            "Key management solutions",
            "Positive identification of the source or originator" // D
        ],
        "answer": 3,
        "explanation": "Nonrepudiation provides positive identification of the source or originator of an event, preventing someone from denying their involvement."
    },
    {
        "question": "What is plain text?",
        "options": [
            "Encrypted message",
            "A type of cipher",
            "A cryptographic key",
            "The original unaltered message" // D
        ],
        "answer": 3,
        "explanation": "Plain text is the original message that has not been altered; it is the usable information before encryption."
    },
    {
        "question": "What is cipher text?",
        "options": [
            "A transformed message using an algorithm", // A
            "The original message",
            "A type of plain text",
            "An encryption key"
        ],
        "answer": 0,
        "explanation": "Cipher text is a message or data that has been transformed into a different format using an algorithm, and can be reversed using an algorithm and key."
    },
    {
        "question": "What determines the output of a cryptographic operation?",
        "options": [
            "The algorithm only",
            "The key only",
            "The plain text length",
            "Both the algorithm and key" // D
        ],
        "answer": 3,
        "explanation": "A key is a discrete piece of information that determines the result or output of a given cryptographic operation, used with algorithms."
    },
    {
        "question": "What is the main characteristic of symmetric cryptography?",
        "options": [
            "Uses different keys for encryption and decryption",
            "Does not use keys at all",
            "Uses the same key for both encryption and decryption", // C
            "Uses only public keys"
        ],
        "answer": 2,
        "explanation": "In symmetric cryptography, the same key is used for both encryption and decryption and must be kept secret."
    },
    {
        "question": "Which is an advantage of symmetric cryptography?",
        "options": [
            "Increased speed over asymmetric systems", // A
            "Excellent key management",
            "Built-in nonrepudiation",
            "No key distribution issues"
        ],
        "answer": 0,
        "explanation": "Symmetric algorithms provide increased speed over many non-symmetric systems along with preserving confidentiality and ensuring simplicity."
    },
    {
        "question": "What problem does asymmetric cryptography solve?",
        "options": [
            "Slow encryption speed",
            "Lack of confidentiality",
            "Large key sizes",
            "Key management problems" // D
        ],
        "answer": 3,
        "explanation": "Public key cryptography was intended to overcome the key management problems inherent in previous symmetric systems."
    },
    {
        "question": "In asymmetric cryptography, which key is kept secret?",
        "options": [
            "Public key",
            "Both keys",
            "Private key", // C
            "Neither key"
        ],
        "answer": 2,
        "explanation": "Each user receives a pair of keys - the public key is published, whereas the private key is kept secret."
    },
    {
        "question": "What provides nonrepudiation in asymmetric cryptography?",
        "options": [
            "The use of digital signatures with private keys", // A
            "The speed of encryption",
            "The key length",
            "The algorithm complexity"
        ],
        "answer": 0,
        "explanation": "Since anything encrypted with the private key can be reversed only with the corresponding public key, digital signatures provide nonrepudiation."
    },
    {
        "question": "What is hashing?",
        "options": [
            "A type of two-way encryption",
            "A key distribution method",
            "A process that creates a scrambled output that cannot be reversed", // C
            "A symmetric encryption technique"
        ],
        "answer": 2,
        "explanation": "Hashing is a type of one-way encryption that creates a scrambled output that cannot be reversed, used to validate integrity of information."
    },
    {
        "question": "What is a hash value also known as?",
        "options": [
            "Plain text",
            "Message digest", // B
            "Cipher text",
            "Digital signature"
        ],
        "answer": 1,
        "explanation": "The process of hashing outputs what is known as a hash, hash value, or message digest."
    },
    {
        "question": "What is the main use of hashing?",
        "options": [
            "To validate the integrity of information", // A
            "To encrypt messages for confidentiality",
            "To create digital signatures",
            "To manage key distribution"
        ],
        "answer": 0,
        "explanation": "Hashing is commonly used to validate the integrity of information and detect changes in data."
    },
    {
        "question": "What vulnerability affects all cryptographic systems?",
        "options": [
            "Social engineering",
            "Brute-force attacks", // B
            "Phishing attacks",
            "Malware infection"
        ],
        "answer": 1,
        "explanation": "Cryptographic systems are all vulnerable to brute-force attacks where every possible combination of characters is tried to uncover a valid key."
    },

    // True/False Questions (5 questions) - Unchanged as they are correct
    {
        "question": "Cryptography was only concerned with protecting information in its early generations.",
        "options": ["True", "False"],
        "answer": 0,
        "explanation": "True. In the first few generations of cryptography, the primary concern was only protecting information, but this has changed over time."
    },
    {
        "question": "Symmetric cryptography provides better nonrepudiation than asymmetric cryptography.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Symmetric algorithms lack nonrepudiation features, which is a drawback that asymmetric cryptography solves."
    },
    {
        "question": "In asymmetric cryptography, the public key is kept secret while the private key is published.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. In asymmetric cryptography, the public key is published while the private key is kept secret."
    },
    {
        "question": "Hashing is a reversible process that can decrypt encrypted data.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Hashing is designed to be a one-way process that creates a scrambled output which cannot be reversed."
    },
    {
        "question": "Brute-force attacks become less effective as key length increases.",
        "options": ["True", "False"],
        "answer": 0,
        "explanation": "True. Longer keys exponentially increase the time and resources needed for successful brute-force attacks, making them less effective."
    }
];



const ethics4 = [
    // Multiple Choice Questions (20 questions) - Answers and option counts varied
    {
        "question": "What does the term 'malware' stand for?",
        "options": [
            "Malicious Software", // A
            "Malicious Advertising",
            "Malfunctioning Software",
            "Managed Security",
            "Multiple Applications"
        ],
        "answer": 0,
        "explanation": "The term 'malware' is short for 'malicious software' and covers viruses, worms, Trojans, and other harmful software."
    },
    {
        "question": "Which of the following is NOT typically considered a category of malware?",
        "options": [
            "Viruses",
            "Worms",
            "Firewalls", // C
            "Spyware"
        ],
        "answer": 2,
        "explanation": "Firewalls are security systems that protect against malware, not a type of malware itself."
    },
    {
        "question": "What is a key characteristic of rootkits?",
        "options": [
            "They are always visible to antivirus software",
            "They only affect web browsers",
            "They are easy to detect and remove",
            "They hide within core system components", // D
            "They only target mobile devices"
        ],
        "answer": 3,
        "explanation": "Rootkits are a modern form of malware that can hide within the core components of a system and stay undetected by modern scanners."
    },
    {
        "question": "What typically initiates a virus's infectious activities?",
        "options": [
            "Automatic system updates",
            "Hardware failure",
            "Network disconnection",
            "Some sort of user action" // D
        ],
        "answer": 3,
        "explanation": "Typically, viruses require some sort of user action to initiate their infectious activities."
    },
    {
        "question": "Which of the following actions can a virus perform?",
        "options": [
            "Altering data",
            "Infecting other programs",
            "Destroying data",
            "Corrupting hardware",
            "All of the above" // E
        ],
        "answer": 4,
        "explanation": "Viruses can perform multiple harmful actions including altering data, infecting programs, destroying data, and corrupting hardware."
    },
    {
        "question": "What is the first step in the virus development process?",
        "options": [
            "Design", // A
            "Replication",
            "Detection",
            "Elimination",
            "Launch"
        ],
        "answer": 0,
        "explanation": "The first step is Design, where the author envisions and creates the virus, either from scratch or using construction kits."
    },
    {
        "question": "During which phase do antivirus makers begin researching how to eradicate a virus?",
        "options": [
            "Design",
            "Detection", // B
            "Replication",
            "Launch",
            "Incorporation"
        ],
        "answer": 1,
        "explanation": "During the Detection phase, the virus is recognized and reported to antivirus makers who begin research into how it works and how to eradicate it."
    },
    {
        "question": "What tool is mentioned for converting batch files to COM files in virus creation?",
        "options": [
            "VirusMaker Pro",
            "bat2com", // B
            "EXE Converter",
            "Code Transformer"
        ],
        "answer": 1,
        "explanation": "The lecture mentions using 'bat2com' to convert virus.bat into virus.com for creating a simple virus."
    },
    {
        "question": "Which virus creation utility is shown in the lecture with a GUI interface?",
        "options": [
            "Virus Studio",
            "Malware Maker Pro",
            "Virus Creator Plus",
            "JPS Virus Maker", // D
            "Trojan Generator"
        ],
        "answer": 3,
        "explanation": "The lecture mentions using utilities such as JPS Virus Maker or Terabit virus maker which provide GUI interfaces for virus creation."
    },
    {
        "question": "What is a key difference between worms and viruses?",
        "options": [
            "Worms require user interaction",
            "Worms need host applications",
            "Worms are slower to spread",
            "Worms do not require host applications" // D
        ],
        "answer": 3,
        "explanation": "Unlike viruses, worms do not require a host application to perform their activities and can spread independently."
    },
    {
        "question": "Which characteristic is typical of worms?",
        "options": [
            "Rapid replication across networks", // A
            "Slow replication across networks",
            "Requirement of user interaction",
            "Dependence on host files",
            "Easy detection and removal"
        ],
        "answer": 0,
        "explanation": "One of the main characteristics of worms is their inherent ability to replicate and spread across networks extremely quickly."
    },
    {
        "question": "What is the primary purpose of spyware?",
        "options": [
            "To improve system performance",
            "To protect against other malware",
            "To collect and forward information about victim's activities", // C
            "To encrypt user files",
            "To create backup copies"
        ],
        "answer": 2,
        "explanation": "Spyware is designed to collect and forward information regarding a victim's activities to an interested party without the user's consent or knowledge."
    },
    {
        "question": "Which method is NOT mentioned as a way spyware can infect systems?",
        "options": [
            "Instant Messaging (IM)",
            "Internet Relay Chat (IRC)",
            "Email Attachments",
            "Automatic Windows updates", // D
            "Physical Access"
        ],
        "answer": 3,
        "explanation": "Automatic Windows updates are a security measure, not a method for spyware infection. The lecture mentions IM, IRC, email, physical access, browser defects, freeware, and websites."
    },
    {
        "question": "What is a common characteristic of adware?",
        "options": [
            "It encrypts user files for ransom",
            "It improves browser security",
            "It removes other malware",
            "It displays ads, pop-ups, and nag screens" // D
        ],
        "answer": 3,
        "explanation": "Adware displays ads, pop-ups, and nag screens and may change the browser's start page to advertise products or services."
    },
    {
        "question": "How is adware typically spread?",
        "options": [
            "Through hardware failures",
            "Through downloads with other software", // B
            "Via operating system updates",
            "By antivirus software",
            "Through system backups"
        ],
        "answer": 1,
        "explanation": "Adware is typically spread either through a download with other software or when the victim visits a website that deploys it stealthily."
    },
    {
        "question": "What is the defining characteristic of a Trojan?",
        "options": [
            "It replicates rapidly across networks",
            "It appears legitimate but provides covert access", // B
            "It only affects mobile devices",
            "It improves system performance"
        ],
        "answer": 1,
        "explanation": "A Trojan is a software application that provides covert access to a victim's system while appearing to look like a legitimate program."
    },
    {
        "question": "Which behavior might indicate a Trojan infection?",
        "options": [
            "CD drawer opening and closing unexpectedly", // A
            "Improved system performance",
            "Faster internet speed",
            "Automatic security updates",
            "Better battery life"
        ],
        "answer": 0,
        "explanation": "Unexpected behaviors like CD drawer opening/closing, screen changes, or mouse button reversals can indicate Trojan infection."
    },
    {
        "question": "What can a hacker do with a Remote Access Trojan (RAT)?",
        "options": [
            "Only view files but not modify them",
            "Improve system security",
            "Gain remote control over the victim's system", // C
            "Speed up internet connection",
            "Create system backups"
        ],
        "answer": 2,
        "explanation": "Remote Access Trojans (RATs) are designed to give an attacker remote control over a victim's system."
    },
    {
        "question": "Which type of Trojan captures and transmits data like keystrokes?",
        "options": [
            "Destructive Trojan",
            "Remote Access Trojan",
            "Data Sending Trojan", // C
            "System Optimizer Trojan"
        ],
        "answer": 2,
        "explanation": "Data Sending Trojans capture data from the victim's system, including files and keystrokes, and transmit this data to the attacker."
    },
    {
        "question": "What is the primary goal of destructive Trojans?",
        "options": [
            "To improve system performance",
            "To create backup copies of files",
            "To protect against other malware",
            "To corrupt, erase, or destroy data", // D
            "To monitor user activities"
        ],
        "answer": 3,
        "explanation": "Destructive Trojans seek to corrupt, erase, or destroy data outright on a system, and in extreme cases may affect hardware."
    },

    // True/False Questions (5 questions) - Unchanged
    {
        "question": "Malware can only steal information but cannot damage hardware.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Malware has evolved to include the ability to damage hardware in some cases, not just steal information."
    },
    {
        "question": "Worms require user interaction to spread across networks.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Worms do not necessarily require any user interaction, direct or otherwise, to function and can spread automatically."
    },
    {
        "question": "Spyware operates with the user's full knowledge and consent.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Spyware acts behind the scenes to gather information without the user's consent or knowledge."
    },
    {
        "question": "Trojans always appear as obvious malicious programs to the user.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Trojans appear to look like legitimate programs while providing covert access to the system."
    },
    {
        "question": "Rootkits are easily detected by all modern antivirus scanners.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Rootkits can hide within core system components and stay undetected by modern scanners."
    }
];



const ethics5 = [
    // Multiple Choice Questions (30 questions)
    {
        "question": "What is the main difference between ethics and laws?",
        "options": [
            "Ethics are legally binding while laws are optional",
            "Ethics are enforced by police while laws are not",
            "Laws legally mandate right/wrong while ethics reflect society's views", // C
            "Laws are only for businesses while ethics are for individuals"
        ],
        "answer": 2,
        "explanation": "Unlike laws that legally mandate what is right or wrong, ethics illustrate society's views about what is right and what is wrong."
    },
    {
        "question": "Which of the following is NOT considered a privacy concern in computer ethics?",
        "options": [
            "Hacking",
            "Software Licensing", // B
            "Malware",
            "Data Protection",
            "Anonymity"
        ],
        "answer": 1,
        "explanation": "Software licensing is related to intellectual property rights, not privacy concerns. Privacy concerns include hacking, malware, data protection, and anonymity."
    },
    {
        "question": "What does copyright protect?",
        "options": [
            "The right to use anyone's work freely",
            "The ability to crack software security",
            "The right to plagiarize content",
            "An author's exclusive publication and distribution rights", // D
            "Free software distribution"
        ],
        "answer": 3,
        "explanation": "Copyright is a form of intellectual property that gives proprietary publication, distribution and usage rights for the author."
    },
    {
        "question": "Which environmental concern is associated with increased computer usage?",
        "options": [
            "Increased energy usage and emissions", // A
            "Reduced energy consumption",
            "Decreased greenhouse gas emissions",
            "Improved air quality",
            "Reduced electronic waste"
        ],
        "answer": 0,
        "explanation": "Environment has been affected by computers since increased computer usage increases energy usage which increases greenhouse gas emissions."
    },
    {
        "question": "What is the primary characteristic that distinguishes ethical hackers from malicious hackers?",
        "options": [
            "They use different tools",
            "They have better technical skills",
            "They only work during business hours",
            "They work with system owner's permission" // D
        ],
        "answer": 3,
        "explanation": "Ethical hackers use the same skills and tactics as malicious hackers but operate with the system owner's explicit permission."
    },
    {
        "question": "Which type of hacker has limited training and uses basic tools without full understanding?",
        "options": [
            "White-Hat Hackers",
            "Black-Hat Hackers",
            "Gray-Hat Hackers",
            "Script Kiddies", // D
            "Suicide Hackers"
        ],
        "answer": 3,
        "explanation": "Script Kiddies have limited or no training and know how to use only basic techniques or tools without understanding what they are doing."
    },
    {
        "question": "According to the code of conduct, what should ethical hackers do with confidential information?",
        "options": [
            "Keep it private and confidential", // A
            "Share it with other security professionals",
            "Sell it to the highest bidder",
            "Publish it online for educational purposes"
        ],
        "answer": 0,
        "explanation": "Ethical hackers must keep private and confidential information gained in their professional work secure."
    },
    {
        "question": "What is a 'Zero Day' vulnerability?",
        "options": [
            "A vulnerability that has been known for zero days",
            "A security patch released within 24 hours",
            "A threat unknown to developers and not addressed", // C
            "A vulnerability that automatically fixes itself",
            "A type of malware that activates at midnight"
        ],
        "answer": 2,
        "explanation": "Zero Day describes a threat or vulnerability that is unknown to developers and has not been addressed, considered a serious problem."
    },
    {
        "question": "Which hacking phase involves passive information gathering?",
        "options": [
            "Scanning",
            "Enumeration",
            "System Hacking",
            "Covering Tracks",
            "Footprinting" // E
        ],
        "answer": 4,
        "explanation": "Footprinting involves using primarily passive methods of gaining information from a target prior to performing active methods."
    },
    {
        "question": "What is the main goal of the 'Covering tracks' phase?",
        "options": [
            "To leave evidence of the attack",
            "To document the attack process",
            "To remove evidence of presence in a system", // C
            "To improve system security"
        ],
        "answer": 2,
        "explanation": "Covering tracks involves attempting to remove evidence of presence in a system by purging log files and destroying other evidence."
    },
    {
        "question": "Which tool is used for tracing the path of IP packets?",
        "options": [
            "Tracert", // A
            "Ping",
            "Port Scanner",
            "Whois",
            "Nmap"
        ],
        "answer": 0,
        "explanation": "Tracert (Trace Route) is a command-line utility used to trace the path that an IP packet takes to its destination."
    },
    {
        "question": "What type of information is gathered during the Enumeration phase?",
        "options": [
            "Only IP addresses",
            "Physical location data",
            "Social media profiles only",
            "User lists, routing tables, and protocols" // D
        ],
        "answer": 3,
        "explanation": "Enumeration involves systematic probing to obtain user lists, routing tables, and protocols from the system."
    },
    {
        "question": "Which Google operator restricts search to a specific website?",
        "options": [
            "cache:",
            "site:", // B
            "link:",
            "info:",
            "allinurl:"
        ],
        "answer": 1,
        "explanation": "The site: operator restricts the search to the location specified in the query."
    },
    {
        "question": "What is FOCA primarily used for?",
        "options": [
            "Network scanning",
            "Password cracking",
            "Social engineering attacks",
            "Finding metadata in documents", // D
            "Email tracking"
        ],
        "answer": 3,
        "explanation": "FOCA is a tool used mainly to find metadata and hidden information in documents that may be on web pages."
    },
    {
        "question": "What was the original purpose of Egyptian hieroglyphics?",
        "options": [
            "Sacred communication with gods", // A
            "Military communications",
            "Business records",
            "Personal diaries",
            "Educational purposes"
        ],
        "answer": 0,
        "explanation": "The ancient Egyptians used hieroglyphics as a special writing system to commune with their gods, not primarily to hide secrets."
    },
    {
        "question": "Which of these is NOT a goal of modern cryptography?",
        "options": [
            "Confidentiality",
            "Integrity",
            "Authentication",
            "Nonrepudiation",
            "Making information larger" // E
        ],
        "answer": 4,
        "explanation": "Modern cryptography seeks to achieve confidentiality, integrity, authentication, nonrepudiation, and key distribution - not making information larger."
    },
    {
        "question": "What does nonrepudiation provide in cryptography?",
        "options": [
            "Fast encryption speed",
            "One-way encryption",
            "Proof of message origin", // C
            "Key management solutions"
        ],
        "answer": 2,
        "explanation": "Nonrepudiation provides positive identification of the source or originator of an event, preventing denial of involvement."
    },
    {
        "question": "What is the main characteristic of symmetric cryptography?",
        "options": [
            "Uses the same key for both encryption and decryption", // A
            "Uses different keys for encryption and decryption",
            "Does not use keys at all",
            "Uses only public keys",
            "Is slower than asymmetric cryptography"
        ],
        "answer": 0,
        "explanation": "In symmetric cryptography, the same key is used for both encryption and decryption and must be kept secret."
    },
    {
        "question": "What problem does asymmetric cryptography solve?",
        "options": [
            "Slow encryption speed",
            "Lack of confidentiality",
            "Key management problems", // C
            "Large key sizes",
            "Complex algorithms"
        ],
        "answer": 2,
        "explanation": "Public key cryptography was intended to overcome the key management problems inherent in previous symmetric systems."
    },
    {
        "question": "What is hashing primarily used for?",
        "options": [
            "Encrypting messages for confidentiality",
            "Creating digital signatures",
            "Managing key distribution",
            "Validating data integrity" // D
        ],
        "answer": 3,
        "explanation": "Hashing is commonly used to validate the integrity of information and detect changes in data."
    },
    {
        "question": "What makes rootkits particularly dangerous?",
        "options": [
            "They spread very slowly",
            "They hide within core system components", // B
            "They are easy to detect and remove",
            "They only affect web browsers",
            "They are harmless to systems"
        ],
        "answer": 1,
        "explanation": "Rootkits are dangerous because they hide deep within the core components of a system, making them undetected by modern scanners."
    },
    {
        "question": "What typically initiates a virus's infectious activities?",
        "options": [
            "Automatic system updates",
            "Hardware failure",
            "Network disconnection",
            "User action" // D
        ],
        "answer": 3,
        "explanation": "Typically, viruses require some sort of user action to initiate their infectious activities."
    },
    {
        "question": "During which virus phase do antivirus makers develop detection signatures?",
        "options": [
            "Design",
            "Replication",
            "Incorporation", // C
            "Launch",
            "Elimination"
        ],
        "answer": 2,
        "explanation": "During the Incorporation phase, antivirus makers develop a way to identify the virus and include this signature in their software updates."
    },
    {
        "question": "What is a key difference between worms and viruses?",
        "options": [
            "Worms do not require host applications", // A
            "Worms require user interaction",
            "Worms need host applications",
            "Worms are slower to spread",
            "Worms only affect hardware"
        ],
        "answer": 0,
        "explanation": "Unlike viruses, worms do not require a host application to perform their activities and can spread independently."
    },
    {
        "question": "What is the primary purpose of spyware?",
        "options": [
            "To improve system performance",
            "To protect against other malware",
            "To encrypt user files",
            "To collect information about victim's activities" // D
        ],
        "answer": 3,
        "explanation": "Spyware is designed to secretly collect and forward information about a victim's activities to another party."
    },
    {
        "question": "Which method is NOT mentioned as a way spyware can infect systems?",
        "options": [
            "Instant Messaging",
            "Automatic Windows updates", // B
            "Email Attachments",
            "Physical Access",
            "Malicious Websites"
        ],
        "answer": 1,
        "explanation": "Automatic Windows updates are a security measure, not a method for spyware infection."
    },
    {
        "question": "What is a common characteristic of adware?",
        "options": [
            "It encrypts user files for ransom",
            "It removes other malware",
            "It displays unwanted advertisements", // C
            "It improves browser security",
            "It speeds up internet connection"
        ],
        "answer": 2,
        "explanation": "Adware works by displaying unwanted advertisements, such as pop-ups, replacing the browser's home page, or installing other items to advertise products."
    },
    {
        "question": "What is the defining characteristic of a Trojan?",
        "options": [
            "It appears legitimate but provides covert access", // A
            "It replicates rapidly across networks",
            "It only affects mobile devices",
            "It improves system performance"
        ],
        "answer": 0,
        "explanation": "A Trojan is a type of malware that disguises itself as a legitimate program to gain covert access to a victim's system and cause harm."
    },
    {
        "question": "Which behavior might indicate a Trojan infection?",
        "options": [
            "Improved system performance",
            "CD drawer opening randomly", // B
            "Faster internet speed",
            "Automatic security updates",
            "Better battery life"
        ],
        "answer": 1,
        "explanation": "Unexpected behaviors like CD drawer opening randomly, screen settings changing, or mouse button reversals can indicate Trojan infection."
    },
    {
        "question": "What can a hacker do with a Remote Access Trojan (RAT)?",
        "options": [
            "Only view files but not modify them",
            "Improve system security",
            "Speed up internet connection",
            "Gain complete remote control over the system" // D
        ],
        "answer": 3,
        "explanation": "Remote Access Trojans (RATs) are designed to give an attacker complete remote control over the victim's system."
    },
    {
        question: "API stands for application programming interface",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. API stands for Application Programming Interface."
    },
    {
        question: "Encryption key is like physical key in real world",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. A key can be thought of in the same way a key in the physical world is, as a special item used to open or unlock something—in this case, a piece of information."
    },
    {
        question: "What is the ethics behind training how to hack a system",
        options: [
            "to think like hackers and know how to defend such attacks",
            "to hack a system without permission",
            "to hack a network that is vulnerable",
            "to corrupt software or service using malware"
        ],
        answer: 0,
        explanation: "Ethical hackers use the same skills and tactics as hackers but with permission from the system owner to test security defenses."
    },
    {
        question: "Digital signatures can easily be achieved through",
        options: [
            "Symmetric Cryptography",
            "Asymmetric Cryptography",
            "both",
            "none"
        ],
        answer: 1,
        explanation: "Digital signatures are achieved through asymmetric cryptography since anything encrypted with the private key can be reversed only with the corresponding public key."
    },
    {
        question: "Lack of nonrepudiation features is one of the drawbacks of ____",
        options: [
            "Symmetric Cryptography",
            "Asymmetric Cryptography",
            "both",
            "none"
        ],
        answer: 0,
        explanation: "Symmetric algorithms lack nonrepudiation features because both parties share the same key."
    },
    {
        question: "Since anything encrypted with the private key can be reversed only with the corresponding ____",
        options: [
            "private key",
            "public key",
            "both",
            "none"
        ],
        answer: 1,
        explanation: "Since anything encrypted with the private key can be reversed only with the corresponding public key and only one person holds the private key, then the identity of the encrypting party can be assured."
    },
    {
        question: "During this phase tools such as these are used: Pings, sweeps, Port scans, Tracert",
        options: [
            "Scanning",
            "Foot printing",
            "Enumeration",
            "System hacking"
        ],
        answer: 0,
        explanation: "Scanning phase uses tools such as Pings, Ping sweeps, Port scans, and Tracert."
    },
    {
        question: "Leaking an information outside network without permission of senior leader is a crime",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Leaking confidential information without permission violates ethical codes and can be criminal."
    },
    {
        question: "Ethics are like laws that legally mandate what is right or wrong.",
        options: ["True", "False"],
        answer: 1,
        explanation: "False. Ethics are unlike laws that legally mandate what is right or wrong. Ethics illustrate society's views about what is right and what is wrong."
    },
    {
        question: "Ethics are a structure of nonstandards and practices that influence how people lead their lives.",
        options: ["True", "False"],
        answer: 1,
        explanation: "False. Ethics are a structure of standards and practices that influence how people lead their lives."
    },
    {
        question: "These hackers try to knock out a target to prove a point. They are not stealthy, because they are not worried about getting caught or doing prison time.",
        options: [
            "Suicide Hackers",
            "Black-Hat Hackers",
            "Gray-Hat Hackers",
            "White-Hat Hackers"
        ],
        answer: 0,
        explanation: "Suicide Hackers try to knock out a target to prove a point and are not worried about getting caught."
    },
    {
        question: "Phase come after foot printing",
        options: [
            "Scanning",
            "Enumeration",
            "System hacking",
            "none of the above"
        ],
        answer: 0,
        explanation: "Scanning is the phase that comes after footprinting, where you take the information gleaned from the footprinting phase."
    },
    {
        question: "___ Is a way of keeping a user identity masked through various applications",
        options: ["Anonymity", "Encryption", "Authentication", "Privacy"],
        answer: 0,
        explanation: "Anonymity is a way of keeping a user's identity masked through various applications."
    },
    {
        question: "If you have been contracted to perform an attack against a target system, you are what type of hacker?",
        options: [
            "White-hat hackers",
            "Black-hat hackers",
            "Script kiddies",
            "Gray-hat hackers"
        ],
        answer: 0,
        explanation: "White-hat hackers are employed through contracts to test the security of an organization with permission."
    },
    {
        question: "These hackers have limited or no training and know how to use only basic techniques or tools",
        options: [
            "White-hat hackers",
            "Black-hat hackers",
            "Script kiddies",
            "Gray-hat hackers"
        ],
        answer: 2,
        explanation: "Script Kiddies have limited or no training and know how to use only basic techniques or tools."
    },
    {
        question: "Script kiddies have limited or no training and know how to use only basic techniques or tools",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Script Kiddies have limited or no training and know how to use only basic techniques or tools."
    },
    {
        question: "These hackers are the bad guys who operate on the opposite side of the law.",
        options: [
            "White-hat hackers",
            "Black-hat hackers",
            "Script kiddies",
            "Gray-hat hackers"
        ],
        answer: 1,
        explanation: "Black-Hat Hackers are the bad guys who operate on the opposite side of the law."
    },
    {
        question: "Hackers may use their skills for both benign and malicious goals at different times",
        options: [
            "White-hat hackers",
            "Black-hat hackers",
            "Script kiddies",
            "Gray-hat hackers"
        ],
        answer: 3,
        explanation: "Gray-Hat Hackers straddle the line between good and bad and may use their skills for both purposes."
    },
    {
        question: "Do not necessarily require any user interaction",
        options: [
            "Worms",
            "Viruses",
            "Spyware",
            "Adware"
        ],
        answer: 0,
        explanation: "Worms do not necessarily require any user interaction, direct or otherwise, to function."
    },
    {
        question: "a special type of malware that infects a system and causing harm while appearing to look like a legitimate program.",
        options: [
            "Trojan",
            "Viruses",
            "Spyware",
            "Adware"
        ],
        answer: 0,
        explanation: "Trojan is a special type of malware that infects a system and causes harm while appearing to look like a legitimate program."
    },
    {
        question: "is a term that covers: viruses, worms, Trojans, Logic bombs, and adware and spyware.",
        options: [
            "Malware",
            "Viruses",
            "Spyware",
            "Adware"
        ],
        answer: 0,
        explanation: "Malware is a term that covers: viruses, worms, Trojans, Logic bombs, and adware and spyware."
    },
    {
        question: "are a modern form of malware that can hide within the core components of a system and stay undetected by modern scanners",
        options: ["Rootkits", "Viruses", "Worms", "Trojans"],
        answer: 0,
        explanation: "Rootkits are a modern form of malware that can hide within the core components of a system and stay undetected by modern scanners."
    },
    {
        question: "means malicious software which is created to impair a computer system.",
        options: [
            "Malware",
            "Viruses",
            "Spyware",
            "Adware"
        ],
        answer: 0,
        explanation: "Malware means malicious software which is created to impair a computer system."
    },
    {
        question: "transform clear text into cipher text",
        options: ["Algorithm", "Key", "Encryption", "Hash"],
        answer: 2,
        explanation: "Encryption is the process that transforms clear text into cipher text using an algorithm and a key."
    },
    {
        question: "We achieve Authentication through",
        options: [
            "Symmetric Cryptography",
            "Asymmetric Cryptography",
            "both",
            "none of the above"
        ],
        answer: 1,
        explanation: "Authentication is primarily achieved through asymmetric cryptography, where a private key is used to prove identity."
    },
    {
        question: "The goal is to gather as much information as is reasonable and useful about a potential Target.",
        options: [
            "Scanning",
            "Foot printing",
            "Enumeration",
            "System hacking"
        ],
        answer: 1,
        explanation: "Footprinting is the first phase with the goal to gather as much information as is reasonable and useful about a potential target."
    },

    {
        "question": "Computer ethics only concern the use of computer software, not hardware.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Computer ethics are a set of moral standards that govern the use of computers, both hardware and software."
    },
    {
        "question": "Plagiarism is the proper citation of another person's work with permission.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Plagiarism is the act of copying and publishing someone else's work without proper citation, essentially stealing it."
    },
    {
        "question": "Gray-Hat hackers are always fully trusted after they reform from malicious activities.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Gray-Hat Hackers may not be fully trusted even after deciding to reform from previous malicious activities."
    },
    {
        "question": "Footprinting involves active engagement with the target system.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Footprinting uses primarily passive methods of gaining information prior to active engagement."
    },
    {
        "question": "Ethical hackers should protect the intellectual property of others.",
        "options": ["True", "False"],
        "answer": 0,
        "explanation": "True. Ethical hackers should protect the intellectual property of others by relying on their own innovation and efforts."
    },
    {
        "question": "Symmetric cryptography provides better nonrepudiation than asymmetric cryptography.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Symmetric algorithms lack nonrepudiation features, which is a strength of asymmetric cryptography."
    },
    {
        "question": "Hashing is a reversible process that can decrypt encrypted data.",
        "options": ["True", "False"],
        "answer": 1,
        "explanation": "False. Hashing is designed to be a one-way process that creates a scrambled output which cannot be reversed."
    },
    {
        "question": "Scanning determines which hosts are active and what the network looks like.",
        "options": ["True", "False"],
        "answer": 0,
        "explanation": "True. Scanning focuses on active engagement to determine active hosts and network structure."
    },
    {
        "question": "Brute-force attacks become less effective as key length increases.",
        "options": ["True", "False"],
        "answer": 0,
        "explanation": "True. Longer keys exponentially increase the time and resources needed for successful brute-force attacks, making them less effective."
    },
    {
        "question": "Cryptography was only concerned with protecting information in its early generations.",
        "options": ["True", "False"],
        "answer": 0,
        "explanation": "True. In the first few generations of cryptography, the primary concern was only protecting information, but this has changed over time."
    }
];




const ethics6 = [
    {
        "question": "What does SQL injection typically target?",
        "options": [
            "The operating system of a server",
            "Websites or web applications powered by a back-end database",
            "The client's web browser directly",
            "Network hardware like routers and switches"
        ],
        "answer": 1,
        "explanation": "SQL injection attacks target websites or web applications that use a back-end database to manipulate or extract data."
    },
    {
        "question": "What is the usual root cause of SQL injection vulnerabilities?",
        "options": [
            "Weak database passwords",
            "Improper or absent input validation",
            "Outdated web browser versions",
            "Lack of encryption in transit"
        ],
        "answer": 1,
        "explanation": "SQL injection is usually caused by improper or absent input validation, allowing malicious code to reach the database."
    },
    {
        "question": "Which of the following is a common sign that a field may be vulnerable to SQL injection?",
        "options": [
            "The page loads faster than usual",
            "An 'Internal Server Error' is returned",
            "The field automatically corrects input",
            "A CAPTCHA appears"
        ],
        "answer": 1,
        "explanation": "If input like a quote causes an 'Internal Server Error' or similar error, it may indicate SQL injection vulnerability."
    },
    {
        "question": "What does '--' (double hyphen) represent in a SQL injection attack?",
        "options": [
            "It concatenates two queries",
            "It starts a new transaction",
            "It comments out the rest of the SQL line",
            "It deletes the entire table"
        ],
        "answer": 2,
        "explanation": "In many databases, '--' is used to comment out the remainder of a SQL query, allowing attackers to bypass conditions."
    },
    {
        "question": "Which tool is mentioned for locating SQL Server installations on a network?",
        "options": [
            "Wireshark",
            "Nmap",
            "SQLPing 3.0",
            "Metasploit"
        ],
        "answer": 2,
        "explanation": "SQLPing 3.0 is a tool that performs active and passive scans to identify SQL Server installations."
    },
    {
        "question": "What is 'Google hacking' in the context of SQL injection?",
        "options": [
            "Hacking Google's servers",
            "Using advanced search queries to find vulnerable sites",
            "Stealing Google search history",
            "Injecting SQL into Google Forms"
        ],
        "answer": 1,
        "explanation": "Google hacking refers to using advanced search queries to uncover websites vulnerable to SQL injection."
    },
    {
        "question": "How can an attacker determine the number of columns in a database using SQL injection?",
        "options": [
            "By using 'UNION SELECT NULL' repeatedly",
            "By appending 'ORDER BY n' and incrementing until an error occurs",
            "By sending 'DELETE FROM table' commands",
            "By analyzing HTTP headers"
        ],
        "answer": 1,
        "explanation": "Appending 'ORDER BY n' and incrementing n until an error occurs reveals the number of columns in the database."
    },
    {
        "question": "Which of the following is NOT a typical result of SQL injection?",
        "options": [
            "Identity spoofing",
            "Alteration of e-commerce prices",
            "Encryption of database files",
            "Data destruction or corruption"
        ],
        "answer": 2,
        "explanation": "SQL injection is used to manipulate, extract, or destroy data, not to encrypt database files."
    },
    {
        "question": "What does a 'blind SQL injection' attack rely on?",
        "options": [
            "Visible error messages from the database",
            "Time delays or conditional responses",
            "Direct access to server logs",
            "Physical access to the database server"
        ],
        "answer": 1,
        "explanation": "Blind SQL injection does not rely on error messages; it uses time delays or boolean-based responses to infer data."
    },
    {
        "question": "Which SQL statement is often used in conjunction with semicolons to execute multiple commands?",
        "options": [
            "COMMIT",
            "ROLLBACK",
            "UPDATE",
            "UNION"
        ],
        "answer": 2,
        "explanation": "UPDATE can be used with semicolons to execute multiple SQL statements in one injection, altering data."
    },
    {
        "question": "What is the purpose of using 'WAITFOR DELAY' in blind SQL injection?",
        "options": [
            "To speed up query execution",
            "To create a time-based inference channel",
            "To lock the database temporarily",
            "To log out the current user"
        ],
        "answer": 1,
        "explanation": "'WAITFOR DELAY' introduces a time delay, allowing attackers to infer information based on response times."
    },
    {
        "question": "Which type of form is most vulnerable to SQL injection?",
        "options": [
            "Forms with CAPTCHA",
            "Forms that solicit data connected to a database",
            "Forms with client-side validation only",
            "Forms that require file uploads"
        ],
        "answer": 1,
        "explanation": "Any form that collects data and interacts with a database can be vulnerable if input is not sanitized."
    },
    {
        "question": "What does the error 'Internal Server Error' often indicate in SQL injection testing?",
        "options": [
            "The server is offline",
            "The database is encrypted",
            "Potential SQL injection vulnerability",
            "The user is banned"
        ],
        "answer": 2,
        "explanation": "Such errors can indicate that malformed SQL was executed, suggesting a possible SQL injection flaw."
    },
    {
        "question": "Which of the following is a preventive measure against SQL injection?",
        "options": [
            "Using longer database table names",
            "Input validation and sanitization",
            "Disabling JavaScript",
            "Hiding error messages from users"
        ],
        "answer": 1,
        "explanation": "Proper input validation and sanitization are primary defenses against SQL injection."
    },
    {
        "question": "What does SQLRecon provide beyond SQLPing?",
        "options": [
            "Graphical user interface",
            "Additional techniques to discover hidden SQL Servers",
            "Automated exploitation",
            "Database encryption"
        ],
        "answer": 1,
        "explanation": "SQLRecon provides extra methods to discover SQL Server installations that may be hidden on the network."
    },
    {
        "question": "What is the primary goal of SQL injection attacks?",
        "options": [
            "To deface the website's homepage",
            "To submit commands through a web app to a database",
            "To steal SSL certificates",
            "To overload the network bandwidth"
        ],
        "answer": 1,
        "explanation": "SQL injection aims to submit malicious SQL commands through a web application to the underlying database."
    },
    {
        "question": "Which character is commonly used to test for SQL injection vulnerability?",
        "options": [
            "@",
            "#",
            "' (single quote)",
            "&"
        ],
        "answer": 2,
        "explanation": "A single quote (') is often used to break SQL syntax and test for injection vulnerabilities."
    },
    {
        "question": "What is 'identity spoofing' in SQL injection?",
        "options": [
            "Creating fake user profiles on social media",
            "Manipulating databases to insert bogus information",
            "Stealing someone's physical ID card",
            "Impersonating a network administrator"
        ],
        "answer": 1,
        "explanation": "Identity spoofing involves manipulating a database to insert false or misleading identity information."
    },
    {
        "question": "Which database product allows multiple SQL statements separated by semicolons?",
        "options": [
            "MySQL only",
            "SQLite only",
            "Microsoft SQL Server and Oracle Siebel",
            "MongoDB"
        ],
        "answer": 2,
        "explanation": "Microsoft SQL Server and Oracle Siebel allow batch execution of SQL statements separated by semicolons."
    },
    {
        "question": "What might a 'blank page' response indicate in SQL injection testing?",
        "options": [
            "The site is well-protected",
            "Possible SQL injection vulnerability",
            "The internet connection is lost",
            "The browser is outdated"
        ],
        "answer": 1,
        "explanation": "A blank page can indicate that the SQL query caused an error or unexpected behavior, suggesting vulnerability."
    },
    {
        "question": "How can SQL injection lead to privilege escalation?",
        "options": [
            "By deleting user accounts",
            "By manipulating queries to grant higher access rights",
            "By encrypting admin passwords",
            "By changing the server's IP address"
        ],
        "answer": 1,
        "explanation": "Attackers can craft SQL queries to modify permissions or access admin features, escalating privileges."
    },
    {
        "question": "Which search query could help find SQL injection targets?",
        "options": [
            "inurl:index.php?id=",
            "site:.gov",
            "intitle:login",
            "filetype:pdf"
        ],
        "answer": 0,
        "explanation": "Searching for 'inurl:index.php?id=' can reveal sites with dynamic parameters potentially vulnerable to SQL injection."
    },
    {
        "question": "What is a key difference between active and passive scanning in SQLPing?",
        "options": [
            "Active scanning is slower",
            "Passive scanning sends queries to the database",
            "Active scanning sends probes, passive listens",
            "Passive scanning requires physical access"
        ],
        "answer": 2,
        "explanation": "Active scanning sends probes to detect SQL servers, while passive scanning listens for network traffic."
    },
    {
        "question": "Why is input sanitization important?",
        "options": [
            "To improve website aesthetics",
            "To prevent malicious SQL execution",
            "To increase page load speed",
            "To comply with copyright laws"
        ],
        "answer": 1,
        "explanation": "Sanitization removes or neutralizes malicious input, preventing SQL injection and other attacks."
    },
    {
        "question": "What does the 'UNION' operator allow in SQL injection?",
        "options": [
            "Combining results of two or more SELECT statements",
            "Deleting multiple rows at once",
            "Encrypting table data",
            "Creating new database users"
        ],
        "answer": 0,
        "explanation": "UNION allows combining results from multiple SELECT queries, useful for data extraction in SQL injection."
    },
    {
        "question": "Which of the following is a real-world consequence of SQL injection?",
        "options": [
            "Improved database performance",
            "Data extraction and disclosure",
            "Automatic software updates",
            "Increased server storage"
        ],
        "answer": 1,
        "explanation": "SQL injection can lead to extraction and disclosure of sensitive data stored in the database."
    },
    {
        "question": "What is 'error-based SQL injection'?",
        "options": [
            "An attack that relies on database error messages",
            "An attack that corrupts error logs",
            "A method to fix SQL errors",
            "A type of blind injection"
        ],
        "answer": 0,
        "explanation": "Error-based SQL injection uses error messages from the database to gather information about its structure."
    },
    {
        "question": "How can SQL injection affect e-commerce applications?",
        "options": [
            "By altering product prices",
            "By changing the website's theme",
            "By increasing server costs",
            "By disabling HTTPS"
        ],
        "answer": 0,
        "explanation": "Attackers can manipulate SQL queries to alter prices, inventory, or orders in e-commerce databases."
    },
    {
        "question": "What is the role of 'input validation' in preventing SQL injection?",
        "options": [
            "It ensures only expected data types and formats are accepted",
            "It encrypts all user inputs",
            "It logs all database queries",
            "It hides database schema"
        ],
        "answer": 0,
        "explanation": "Input validation checks that user input matches expected patterns, rejecting potentially malicious data."
    },
    {
        "question": "Which SQL clause is commonly manipulated in login bypass attacks?",
        "options": [
            "GROUP BY",
            "HAVING",
            "WHERE",
            "ORDER BY"
        ],
        "answer": 2,
        "explanation": "The WHERE clause in login queries is often targeted to alter logic and bypass authentication."
    }
];


const ethics7 = [
    {
        "question": "What is the primary goal of password cracking in system hacking?",
        "options": [
            "To delete user accounts",
            "To obtain credentials and gain unauthorized access",
            "To improve system performance",
            "To encrypt stored passwords"
        ],
        "answer": 1,
        "explanation": "Password cracking is used to obtain account credentials to gain unauthorized access while appearing as a legitimate user."
    },
    {
        "question": "Why do human-chosen passwords often become a security liability?",
        "options": [
            "They are always too long",
            "They are randomly generated",
            "They are easy to remember but also easy to guess",
            "They are automatically changed frequently"
        ],
        "answer": 2,
        "explanation": "People tend to choose passwords that are easy to remember, which often makes them predictable and easy to guess."
    },
    {
        "question": "Which of the following is an example of an easily cracked password?",
        "options": [
            "P@ssw0rd!2024",
            "A short dictionary word",
            "12-character random alphanumeric with symbols",
            "Biometric fingerprint"
        ],
        "answer": 1,
        "explanation": "Short dictionary words are vulnerable to dictionary attacks and are considered weak passwords."
    },
    {
        "question": "What is a common solution to the weaknesses of passwords alone?",
        "options": [
            "Using longer passwords only",
            "Multifactor authentication",
            "Disabling user accounts",
            "Using default passwords"
        ],
        "answer": 1,
        "explanation": "Many companies are moving to multifactor authentication (smart cards, biometrics, tokens) to strengthen security."
    },
    {
        "question": "What is a dictionary attack?",
        "options": [
            "Trying every possible character combination",
            "Using a list of known words to guess passwords",
            "Stealing passwords from a database",
            "Intercepting passwords over the network"
        ],
        "answer": 1,
        "explanation": "A dictionary attack uses a preloaded list of words (dictionary file) to test against user passwords."
    },
    {
        "question": "Which attack tries every possible character combination?",
        "options": [
            "Dictionary attack",
            "Brute-force attack",
            "Hybrid attack",
            "Replay attack"
        ],
        "answer": 1,
        "explanation": "Brute-force attacks attempt every possible combination of characters until the correct password is found."
    },
    {
        "question": "What is a hybrid attack?",
        "options": [
            "A combination of online and offline attacks",
            "A dictionary attack with character substitution",
            "An attack using biometric data",
            "A phishing attack combined with keylogging"
        ],
        "answer": 1,
        "explanation": "Hybrid attacks modify dictionary words by adding numbers or special characters (e.g., P@ssw0rd)."
    },
    {
        "question": "Which attack assumes prior knowledge of user password habits?",
        "options": [
            "Syllable attack",
            "Rule-based attack",
            "Passive online attack",
            "Rainbow table attack"
        ],
        "answer": 1,
        "explanation": "Rule-based attacks use known information about user tendencies (e.g., common phrases, digits)."
    },
    {
        "question": "What is a passive online attack?",
        "options": [
            "Guessing passwords repeatedly",
            "Installing keyloggers",
            "Intercepting passwords via packet sniffing",
            "Using rainbow tables"
        ],
        "answer": 2,
        "explanation": "Passive online attacks involve listening to network traffic (e.g., packet sniffing) to capture credentials."
    },
    {
        "question": "What tool is commonly used for packet sniffing?",
        "options": [
            "Nmap",
            "Wireshark",
            "Metasploit",
            "John the Ripper"
        ],
        "answer": 1,
        "explanation": "Wireshark is a widely used packet analyzer (sniffer) for capturing and analyzing network traffic."
    },
    {
        "question": "What is a replay attack?",
        "options": [
            "Guessing old passwords",
            "Reusing captured network packets to gain access",
            "Resetting passwords via email",
            "Copying biometric data"
        ],
        "answer": 1,
        "explanation": "A replay attack involves capturing valid credentials (packets) and re-injecting them into the network to gain access."
    },
    {
        "question": "Which is an example of an active online attack?",
        "options": [
            "Packet sniffing",
            "Password guessing",
            "Rainbow table lookup",
            "Default password lookup"
        ],
        "answer": 1,
        "explanation": "Active online attacks involve direct interaction with the target, such as password guessing or using keyloggers."
    },
    {
        "question": "What do offline attacks target?",
        "options": [
            "Network traffic",
            "User behavior",
            "The way passwords are stored",
            "Firewall configurations"
        ],
        "answer": 2,
        "explanation": "Offline attacks exploit weaknesses in how passwords are stored (e.g., in hashed or plaintext files)."
    },
    {
        "question": "What is a rainbow table?",
        "options": [
            "A list of default passwords",
            "Precomputed hashes for all possible passwords",
            "A table of user biometric data",
            "A network intrusion detection system"
        ],
        "answer": 1,
        "explanation": "Rainbow tables contain precomputed hashes for all possible character combinations to quickly crack password hashes."
    },
    {
        "question": "Why are default passwords a major vulnerability?",
        "options": [
            "They are always complex",
            "They are often unchanged and publicly known",
            "They are encrypted by default",
            "They expire frequently"
        ],
        "answer": 1,
        "explanation": "Default passwords are set by manufacturers and are often left unchanged, making them easy targets for attackers."
    },
    {
        "question": "Which website is listed as a source for default passwords?",
        "options": [
            "https://github.com",
            "http://cirt.net",
            "https://stackoverflow.com",
            "http://passwordmanager.com"
        ],
        "answer": 1,
        "explanation": "cirt.net is one of the sites mentioned where default passwords can be looked up."
    },
    {
        "question": "What is the 'old school' method of obtaining passwords?",
        "options": [
            "Phishing",
            "Guessing",
            "Brute-forcing",
            "Sniffing"
        ],
        "answer": 1,
        "explanation": "Guessing is described as an old-school method where attackers try likely passwords based on known user information."
    },
    {
        "question": "How does USB password theft typically work?",
        "options": [
            "By stealing the USB hardware",
            "By embedding password-stealing software on a USB drive",
            "By encrypting USB contents",
            "By cloning USB firmware"
        ],
        "answer": 1,
        "explanation": "Attackers place password-stealing malware on a USB drive and physically plug it into a target system."
    },
    {
        "question": "What makes passwords sent in encrypted format still vulnerable?",
        "options": [
            "They can be read directly",
            "They can be intercepted but not easily read",
            "Encryption is always weak",
            "They are stored in plaintext after receipt"
        ],
        "answer": 1,
        "explanation": "Encrypted passwords can be intercepted but are not readable without decryption; however, they may still be replayed or cracked."
    },
    {
        "question": "What is keylogging?",
        "options": [
            "Recording network packets",
            "Intercepting keystrokes as a user types",
            "Stealing password hashes",
            "Guessing passwords via dictionary"
        ],
        "answer": 1,
        "explanation": "Keylogging captures keystrokes, including passwords, as they are typed by the user."
    },
    {
        "question": "Which attack is a combination of brute-force and dictionary attacks?",
        "options": [
            "Hybrid attack",
            "Syllable attack",
            "Rule-based attack",
            "Replay attack"
        ],
        "answer": 1,
        "explanation": "A syllable attack combines brute-force and dictionary methods, useful for non-standard passwords."
    },
    {
        "question": "What is the main weakness exploited in offline attacks?",
        "options": [
            "Poor network encryption",
            "Weak user passwords",
            "Insecure password storage",
            "Lack of firewalls"
        ],
        "answer": 2,
        "explanation": "Offline attacks target how passwords are stored (e.g., plaintext files, weakly hashed databases)."
    },
    {
        "question": "What is the purpose of precomputed hashes?",
        "options": [
            "To speed up password cracking by comparing hashes",
            "To encrypt user passwords",
            "To protect against replay attacks",
            "To generate random passwords"
        ],
        "answer": 0,
        "explanation": "Precomputed hashes (rainbow tables) allow quick comparison with captured hashes to reveal passwords."
    },
    {
        "question": "Which of the following is NOT a password-cracking technique?",
        "options": [
            "Dictionary attack",
            "Brute-force attack",
            "Packet sniffing attack",
            "Firewall bypass attack"
        ],
        "answer": 3,
        "explanation": "Firewall bypass is not a password-cracking technique; it's a network security evasion method."
    },
    {
        "question": "What is a common characteristic of effective passwords?",
        "options": [
            "Short length",
            "Use of dictionary words",
            "Mix of letters, numbers, and symbols",
            "Personal names"
        ],
        "answer": 2,
        "explanation": "Strong passwords typically include a mix of uppercase, lowercase, numbers, and special characters."
    },
    {
        "question": "Why are passwords shorter than eight characters considered weak?",
        "options": [
            "They are harder to remember",
            "They are easier to brute-force",
            "They cannot contain symbols",
            "They are always dictionary words"
        ],
        "answer": 1,
        "explanation": "Shorter passwords have fewer possible combinations, making them faster to crack via brute-force."
    },
    {
        "question": "What additional mechanism strengthens authentication beyond passwords?",
        "options": [
            "Longer passwords",
            "Biometrics or tokens",
            "Frequent password changes",
            "Password hints"
        ],
        "answer": 1,
        "explanation": "Multifactor authentication (e.g., biometrics, tokens) adds layers of security beyond passwords."
    },
    {
        "question": "What type of attack intercepts passwords as they are typed?",
        "options": [
            "Packet sniffing",
            "Keylogging",
            "Phishing",
            "Rainbow table"
        ],
        "answer": 1,
        "explanation": "Keylogging software captures keystrokes in real-time, including passwords during entry."
    },
    {
        "question": "What is the first step in the old-school password guessing method?",
        "options": [
            "Try common passwords",
            "Locate a valid user",
            "Rank passwords by likelihood",
            "Exhaust all options"
        ],
        "answer": 1,
        "explanation": "The first step is to identify a valid user account to target for password guessing."
    },
    {
        "question": "Where might users store passwords that make USB theft effective?",
        "options": [
            "On remote servers only",
            "In encrypted cloud storage",
            "Locally on their machines",
            "In physical notebooks"
        ],
        "answer": 2,
        "explanation": "Many users store passwords locally (in browsers, files), making them vulnerable to USB-based malware."
    }
];


const ethics8 = [
    {
        "question": "What is the primary goal of social engineering?",
        "options": [
            "To exploit software vulnerabilities",
            "To trick humans into revealing information or violating security",
            "To overload network servers",
            "To encrypt sensitive data"
        ],
        "answer": 1,
        "explanation": "Social engineering involves human interaction to deceive victims into revealing information or bypassing security."
    },
    {
        "question": "Which human trait is most commonly exploited in social engineering?",
        "options": [
            "Trust",
            "Curiosity",
            "Impatience",
            "Greed"
        ],
        "answer": 0,
        "explanation": "Humans have an inherent tendency to trust, which social engineers exploit using uniforms, buzzwords, or authority."
    },
    {
        "question": "Why is social engineering difficult to detect?",
        "options": [
            "It uses advanced encryption",
            "It leaves no digital logs like technical attacks",
            "It only targets low-level employees",
            "It is always performed remotely"
        ],
        "answer": 1,
        "explanation": "Social engineering attacks often leave no traces in log files or intrusion detection systems, unlike technical attacks."
    },
    {
        "question": "What is the first phase in the social engineering process?",
        "options": [
            "Exploiting the relationship",
            "Gathering details through research",
            "Selecting a target individual",
            "Forging a relationship"
        ],
        "answer": 1,
        "explanation": "The first phase involves footprinting and gathering information about the target through research and observation."
    },
    {
        "question": "Which group is mentioned as a common target for social engineering?",
        "options": [
            "Security guards only",
            "Receptionists and help desk personnel",
            "External contractors only",
            "Former employees only"
        ],
        "answer": 1,
        "explanation": "Receptionists and help desk personnel are common targets because they are helpful and may lack security focus."
    },
    {
        "question": "What makes system administrators attractive targets?",
        "options": [
            "They have low-level access",
            "They rarely interact with others",
            "They possess high-level knowledge of infrastructure",
            "They work only with hardware"
        ],
        "answer": 2,
        "explanation": "System administrators have extensive knowledge of network infrastructure and future plans, making them valuable targets."
    },
    {
        "question": "What is a common reason why social engineering succeeds?",
        "options": [
            "Strong security policies",
            "Excessive training",
            "Lack of technological fixes",
            "Advanced intrusion detection"
        ],
        "answer": 2,
        "explanation": "Technology alone cannot prevent social engineering; human factors and lack of policies contribute to its success."
    },
    {
        "question": "Which social engineering tactic preys on a victim's sense of duty?",
        "options": [
            "Threats",
            "Something for nothing",
            "Moral obligation",
            "Ignorance"
        ],
        "answer": 2,
        "explanation": "Attackers exploit a victim's moral obligation to help, making them feel compelled to assist."
    },
    {
        "question": "What type of information is risky to share on social networks?",
        "options": [
            "Public news articles",
            "General opinions",
            "Location and personal data",
            "Weather updates"
        ],
        "answer": 2,
        "explanation": "Sharing location, personal details, photos, and plans can help attackers gather intelligence for social engineering."
    },
    {
        "question": "Which scam preys on curiosity about celebrities?",
        "options": [
            "\"I'm stranded abroad\" scam",
            "\"Test your IQ\" scam",
            "\"Fake login\" scam",
            "\"Secret celebrity death details\" scam"
        ],
        "answer": 3,
        "explanation": "Posts about celebrity secrets exploit people's curiosity and desire for insider information."
    },
    {
        "question": "What should users avoid to reduce social engineering risk on social networks?",
        "options": [
            "Using strong passwords only",
            "Mixing personal and professional information",
            "Posting frequently",
            "Using privacy settings"
        ],
        "answer": 1,
        "explanation": "Mixing personal and professional information online increases exposure to social engineering attacks."
    },
    {
        "question": "Why are executives considered targets?",
        "options": [
            "They handle daily technical tasks",
            "They have limited access to data",
            "They are highly security-trained",
            "They focus on business, not security"
        ],
        "answer": 3,
        "explanation": "Executives often focus on business processes rather than security, making them susceptible to manipulation."
    },
    {
        "question": "What is a key countermeasure against social engineering?",
        "options": [
            "Using complex firewalls",
            "Disabling all social media",
            "Training and awareness",
            "Encrypting all communications"
        ],
        "answer": 2,
        "explanation": "Training users to recognize and respond to social engineering attempts is a critical defense."
    },
    {
        "question": "How do attackers use 'buzzwords' in social engineering?",
        "options": [
            "To appear knowledgeable and gain trust",
            "To confuse the victim",
            "To trigger automated systems",
            "To encrypt messages"
        ],
        "answer": 0,
        "explanation": "Using familiar terms or jargon makes the attacker seem like an insider, increasing victim trust."
    },
    {
        "question": "What is 'dumpster diving' in social engineering?",
        "options": [
            "Hacking into waste management systems",
            "A type of phishing attack",
            "Physically searching trash for information",
            "Stealing digital files"
        ],
        "answer": 2,
        "explanation": "Dumpster diving involves searching physical trash for documents, notes, or devices that contain sensitive information."
    },
    {
        "question": "Which phase involves building a relationship with the victim?",
        "options": [
            "Research",
            "Development",
            "Exploitation",
            "Footprinting"
        ],
        "answer": 1,
        "explanation": "The development phase includes forging a relationship through conversation, email, or other interaction."
    },
    {
        "question": "What human habit do social engineers observe and exploit?",
        "options": [
            "Random password generation",
            "Frequent security updates",
            "Daily routines and predictable behaviors",
            "Use of encrypted messaging"
        ],
        "answer": 2,
        "explanation": "People tend to follow routines, which attackers observe to predict movements or gain physical access."
    },
    {
        "question": "What is a common method to gather information via social networking?",
        "options": [
            "Port scanning",
            "Brute-force attacks",
            "SQL injection",
            "Analyzing public posts and photos"
        ],
        "answer": 3,
        "explanation": "Attackers analyze public posts, photos, location data, and friend lists to gather intelligence."
    },
    {
        "question": "Which emotion does the 'something for nothing' tactic exploit?",
        "options": [
            "Fear",
            "Greed",
            "Anger",
            "Sadness"
        ],
        "answer": 1,
        "explanation": "This tactic promises high rewards for little effort, appealing to human greed."
    },
    {
        "question": "What should you do before posting information online?",
        "options": [
            "Assume it will be private forever",
            "Share everything to build your online presence",
            "Only post encrypted content",
            "Consider if it could be used against you"
        ],
        "answer": 3,
        "explanation": "Always consider the sensitivity and potential misuse of information before posting online."
    }
];


const ethics9 = [
    {
        "question": "API stands for application programming interface.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Encryption key is like physical key in real world.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "What is the ethics behind training how to hack a system?",
        "options": [
            "To think like hackers and know how to defend such attacks",
            "To hack a system without permission",
            "To hack a network that is vulnerable",
            "To corrupt software or service using malware"
        ],
        "answer": 0
    },
    {
        "question": "Digital signatures can easily be achieved through ...",
        "options": [
            "Symmetric Cryptography",
            "Asymmetric Cryptography",
            "Both",
            "None"
        ],
        "answer": 1
    },
    {
        "question": "Lack of non-repudiation features is one of the drawbacks of ...",
        "options": [
            "Symmetric Cryptography",
            "Asymmetric Cryptography",
            "Both",
            "None"
        ],
        "answer": 0
    },
    {
        "question": "Since anything encrypted with the private key can be reversed only with the corresponding ...",
        "options": [
            "Private key",
            "Public key",
            "Both",
            "None"
        ],
        "answer": 1
    },
    {
        "question": "During this phase tools such as these are used: Pings, sweeps, Port scans, Tracert.",
        "options": [
            "Scanning",
            "Foot printing",
            "Enumeration",
            "System hacking"
        ],
        "answer": 0
    },
    {
        "question": "Leaking information outside network without permission of senior leader is a crime.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Ethics are like laws that legally mandate what is right or wrong.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "Ethics are a structure of nonstandards and practices that influence how people lead their lives.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "These hackers try to knock out a target to prove a point. They are not stealthy, because they are not worried about getting caught or doing prison time.",
        "options": [
            "Suicide Hackers",
            "Black-Hat Hackers",
            "Gray-Hat Hackers",
            "White-Hat Hackers"
        ],
        "answer": 0
    },
    {
        "question": "Phase comes after foot printing",
        "options": [
            "Scanning",
            "Enumeration",
            "System hacking",
            "None of the above"
        ],
        "answer": 0
    },
    {
        "question": "Is a way of keeping a user identity masked through various applications.",
        "options": [
            "Encryption",
            "Anonymity",
            "Authentication",
            "Pseudonymity"
        ],
        "answer": 1
    },
    {
        "question": "If you have been contracted to perform an attack against a target system, what type of hacker are you?",
        "options": [
            "White-hat hackers",
            "Black-hat hackers",
            "Script kiddies",
            "Gray-hat hackers"
        ],
        "answer": 0
    },
    {
        "question": "These hackers have limited or no training and know how to use only basic techniques or tools",
        "options": [
            "White-hat hackers",
            "Black-hat hackers",
            "Script kiddies",
            "Gray-hat hackers"
        ],
        "answer": 2
    },
    {
        "question": "Script kiddies have limited or no training and know how to use only basic techniques or tools.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "These hackers are the bad guys who operate on the opposite side of the law.",
        "options": [
            "White-hat hackers",
            "Black-hat hackers",
            "Script kiddies",
            "Gray-hat hackers"
        ],
        "answer": 1
    },
    {
        "question": "Hackers may use their skills for both benign and malicious goals at different time",
        "options": [
            "White-hat hackers",
            "Black-hat hackers",
            "Script kiddies",
            "Gray-hat hackers"
        ],
        "answer": 3
    },
    {
        "question": "do not necessarily require any user interaction.",
        "options": [
            "Worms",
            "Viruses",
            "Spyware",
            "Adware"
        ],
        "answer": 0
    },
    {
        "question": "a special type of malware that infects a system and causing harm while appearing to look like a legitimate program.",
        "options": [
            "Trojan",
            "Viruses",
            "Spyware",
            "Adware"
        ],
        "answer": 0
    },
    {
        "question": "is a term that covers: viruses, worms, Trojans, Logic bombs, and adware and spyware.",
        "options": [
            "Malware",
            "Viruses",
            "Spyware",
            "Adware"
        ],
        "answer": 0
    },
    {
        "question": "are a modern form of malware that can hide within the core components of a system and stay undetected by modern scanners.",
        "options": [
            "Rootkits",
            "Worms",
            "Spyware",
            "Adware"
        ],
        "answer": 0
    },
    {
        "question": "means malicious software which is created to impair a computer system.",
        "options": [
            "Malware",
            "Viruses",
            "Spyware",
            "Adware"
        ],
        "answer": 0
    },
    {
        "question": "transform clear text into cipher text.",
        "options": [
            "Algorithm",
            "Protocol",
            "Firewall",
            "Antivirus"
        ],
        "answer": 0
    },
    {
        "question": "We achieve Authentication through: ... .",
        "options": [
            "Symmetric Cryptography",
            "Asymmetric Cryptography",
            "Both",
            "None of the above"
        ],
        "answer": 2
    },
    {
        "question": "The goal is to gather as much information as is reasonable and useful about a potential Target.",
        "options": [
            "Scanning",
            "Foot printing",
            "Enumeration",
            "System hacking"
        ],
        "answer": 1
    },
    {
        "question": "The one security measure that can NOT be achieved with private key cryptography is ... .",
        "options": [
            "Authentication",
            "Confidentiality",
            "Non-repudiation",
            "None"
        ],
        "answer": 2
    },
    {
        "question": "Symmetric Cryptography is also known as ... .",
        "options": [
            "Public key cryptography",
            "Private Key Cryptography",
            "Hashing",
            "None"
        ],
        "answer": 1
    },
    {
        "question": "Conducting a search on the web about a potential target for hacking is considered part of which of the following hacking’s phases?",
        "options": [
            "Foot Printing",
            "scanning",
            "Enumeration",
            "None"
        ],
        "answer": 0
    },
    {
        "question": "When plain text is converted to unreadable format, it is termed as ...",
        "options": [
            "rotten text",
            "raw text",
            "cipher-text or cypher-text",
            "cipher-text"
        ],
        "answer": 2
    },
    {
        "question": "Which of the following is not the primary objective of cryptography?",
        "options": [
            "Confidentiality",
            "Data Redundancy",
            "Integrity",
            "Authentication"
        ],
        "answer": 1
    },
    {
        "question": "What type of program exists primarily to propagate and spread itself to other systems and can do so without interaction from users?",
        "options": [
            "Virus",
            "Trojan horse",
            "Worm",
            "Logic bomb"
        ],
        "answer": 2
    },
    {
        "question": "In .... 2 different keys are implemented for encrypting as well as decrypting that information.",
        "options": [
            "Symmetric Key Encryption",
            "Asymmetric Key Encryption",
            "Hash-based Key Encryption",
            "None"
        ],
        "answer": 1
    },
    {
        "question": "is a component of the reconnaissance stage that is used to gather possible information for a target computer system or network.",
        "options": [
            "Fingerprinting",
            "3D printing",
            "Foot printing",
            "Data printing"
        ],
        "answer": 2
    },
    {
        "question": "Which type of hacker represents the highest risk to your network?",
        "options": [
            "Black hat hackers",
            "Gray hat hackers",
            "White hat hackers",
            "Script kiddies"
        ],
        "answer": 0
    },
    {
        "question": "Hackers who are typically characterized by having a code of ethics that says essentially, they will cause no harm are ... .",
        "options": [
            "Script kiddies",
            "White hackers",
            "Grey hat hackers",
            "Suicide hackers"
        ],
        "answer": 1
    },
    {
        "question": "Pings and Pings Sweeps in which active hosts are identified is conducted in which of the following hacking’s phases?",
        "options": [
            "Foot Printing",
            "Scanning",
            "Enumeration",
            "None"
        ],
        "answer": 1
    },
    {
        "question": "To provide nomenclation for email, which algorithm would you choose to implement?",
        "options": [
            "Asymmetric Encryption Algorithms",
            "Symmetric Encryption Algorithm",
            "Hashing function",
            "None"
        ],
        "answer": 0
    },
    {
        "question": "Authentication can easily be achieved through ... .",
        "options": [
            "Symmetric Cryptography",
            "Asymmetric Cryptography",
            "Both",
            "None"
        ],
        "answer": 2
    },
    {
        "question": "What is the first phase in an ethical hacking process?",
        "options": [
            "Enumeration",
            "Foot printing",
            "Covering tracks",
            "Exploitation"
        ],
        "answer": 1
    },
    {
        "question": "Which of the following cryptography techniques assures the identity of the encrypting party?",
        "options": [
            "Symmetric Cryptography",
            "Asymmetric Cryptography",
            "Digital signatures",
            "None"
        ],
        "answer": 2
    },
    {
        "question": "What is the primary goal of encryption in cryptography?",
        "options": [
            "Speed",
            "Accessibility",
            "Complexity",
            "Confidentiality"
        ],
        "answer": 3
    },
    {
        "question": "Which attack attempts all possible combinations to crack an encryption?",
        "options": [
            "Brute Force attack",
            "SQL injection",
            "DDOS attacks",
            "None"
        ],
        "answer": 0
    },
    {
        "question": "Which of the following is NOT a cryptographic goal?",
        "options": [
            "Authentication",
            "Integrity",
            "Confidentiality",
            "Performance"
        ],
        "answer": 3
    },
    {
        "question": "Which of the following is used to convert plaintext into ciphertext?",
        "options": [
            "Algorithm",
            "Protocol",
            "Firewall",
            "Antivirus"
        ],
        "answer": 0
    },
    {
        "question": "Which of the following is a drawback of symmetric cryptography?",
        "options": [
            "Lack of authentication",
            "Lack of integrity",
            "Lack of non-repudiation",
            "Lack of simplicity"
        ],
        "answer": 2
    },
    {
        "question": "Which of the following is considered a privacy concern in computer ethics?",
        "options": [
            "Writing research papers",
            "Data protection",
            "Using social media",
            "Following copyright laws"
        ],
        "answer": 1
    },
    {
        "question": "What does the term “hack value” refer to?",
        "options": [
            "The worth of a stolen password",
            "The cost of cybersecurity",
            "The attractiveness of a target to hackers",
            "The complexity of an attack"
        ],
        "answer": 2
    },
    {
        "question": "is a weakness in a system that can be used as an attacking point into a system.",
        "options": [
            "Threat",
            "Malware",
            "Security",
            "Vulnerability"
        ],
        "answer": 3
    },
    {
        "question": "Which of the following is an example of unethical computer behavior?",
        "options": [
            "Using licensed software",
            "Citing sources properly",
            "Plagiarism",
            "Following security guidelines"
        ],
        "answer": 2
    },
    {
        "question": "Which type of hacker may use their skills for benign and malicious goals simultaneously?",
        "options": [
            "White hat",
            "Gray hat",
            "Black hat",
            "Suicide hackers"
        ],
        "answer": 1
    },
    {
        "question": "TOE stands for",
        "options": [
            "Time of evaluation",
            "Target of Evaluation",
            "Type of evaluation",
            "Term of Evaluation"
        ],
        "answer": 1
    },
    {
        "question": "What is a “Zero Day” attack?",
        "options": [
            "A well-known vulnerability that has a fix",
            "An attack that targets an unknown vulnerability",
            "An attack that happens after a security patch",
            "A beginner-level attack"
        ],
        "answer": 1
    },
    {
        "question": "What is the primary purpose of intellectual property rights?",
        "options": [
            "Limit software usage",
            "Improve software efficiency",
            "Protect the ownership of creative work",
            "Prevent hacking"
        ],
        "answer": 2
    },
    {
        "question": "Which of the following describes a hacker who attacks without regard for being caught or punished?",
        "options": [
            "Hacktivist",
            "Terrorist",
            "Criminal",
            "Suicide Hacker"
        ],
        "answer": 3
    },
    {
        "question": "What do ethics primarily deal with?",
        "options": [
            "Legal rules",
            "Programming language",
            "Company policies",
            "Moral standards"
        ],
        "answer": 3
    },
    {
        "question": "What is the original, unencrypted message in cryptography called?",
        "options": [
            "Ciphertext",
            "Cleartext",
            "Encoded text",
            "Hash"
        ],
        "answer": 1
    },
    {
        "question": "What does asymmetric cryptography solve compared to symmetric cryptography?",
        "options": [
            "Speed issues",
            "Key management problems",
            "Increased data redundancy",
            "Lack of confidentiality"
        ],
        "answer": 1
    },
    {
        "question": "Which of the following is a good example of a strong password?",
        "options": [
            "Your favorite band name",
            "Your date of birth",
            "Your kid’s name",
            "None"
        ],
        "answer": 3
    },
    {
        "question": "Which term refers to illegal access to a computer system?",
        "options": [
            "Software licensing",
            "Hacking",
            "Cracking",
            "Hashing"
        ],
        "answer": 1
    },
    {
        "question": "What is the function of hashing in cryptography?",
        "options": [
            "Encrypt data for transmission",
            "Authenticate users",
            "Increase processing speed",
            "Provide one-way encryption"
        ],
        "answer": 3
    },
    {
        "question": "What is the term for an attack where multiple hacking techniques are used in sequence?",
        "options": [
            "Brute-force attack",
            "Social engineering",
            "Daisy chaining",
            "Hashing"
        ],
        "answer": 2
    },
    {
        "question": "In Asymmetric cryptography, which key must remain secret?",
        "options": [
            "Public key",
            "Private key",
            "Symmetric key",
            "Encryption key"
        ],
        "answer": 1
    },
    {
        "question": "Which hacking methodology is used when removing evidence of your presence in a system?",
        "options": [
            "Covering Tracks",
            "Planting backdoors",
            "Escalation of privileges",
            "None"
        ],
        "answer": 0
    }
];



const sq1 = [
    {
        "question": "According to IEEE definition, software includes only the code that runs on a computer.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "Which of the following is NOT part of software according to IEEE definition?",
        "options": ["Computer programs", "Procedures", "Hardware components", "Documentation"],
        "answer": 2
    },
    {
        "question": "A software error is:",
        "options": [
            "When the software crashes",
            "A mistake made by a programmer during development",
            "A user making incorrect inputs",
            "Hardware malfunction"
        ],
        "answer": 1
    },
    {
        "question": "The manifestation of an error in the code is called:",
        "options": ["Software failure", "Software fault", "Software bug", "Software defect"],
        "answer": 1
    },
    {
        "question": "Software failure occurs when a fault is activated and causes incorrect behavior.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "The Therac-25 incident was caused by:",
        "options": [
            "Hardware failure",
            "Network issues",
            "Race condition in software",
            "User error"
        ],
        "answer": 2
    },
    {
        "question": "Which of the following is a cause of software errors?",
        "options": [
            "Faulty definition of requirements",
            "Perfect communication",
            "Complete documentation",
            "Adequate testing"
        ],
        "answer": 0
    },
    {
        "question": "Client-developer communication failures can lead to:",
        "options": [
            "Better software quality",
            "Misunderstandings about requirements",
            "Faster development",
            "Reduced costs"
        ],
        "answer": 1
    },
    {
        "question": "Logical design errors occur during which phase?",
        "options": ["Testing", "Design", "Coding", "Deployment"],
        "answer": 1
    },
    {
        "question": "Non-compliance with documentation and coding instructions makes software easier to maintain.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "According to Pressman, software quality involves conforming to:",
        "options": [
            "Only explicit requirements",
            "Only documented standards",
            "Explicit requirements, documented standards, and implicit characteristics",
            "Only user expectations"
        ],
        "answer": 2
    },
    {
        "question": "Implicit characteristics in software quality include:",
        "options": [
            "Only features mentioned in contract",
            "Features expected of all professionally developed software",
            "Only technical requirements",
            "Only user interface elements"
        ],
        "answer": 1
    },
    {
        "question": "SQA stands for:",
        "options": [
            "Software Quality Assessment",
            "Software Quality Assurance",
            "System Quality Analysis",
            "Software Quantitative Analysis"
        ],
        "answer": 1
    },
    {
        "question": "SQA is primarily focused on:",
        "options": [
            "Finding defects after development",
            "Preventing defects throughout development lifecycle",
            "Only testing the final product",
            "Hardware quality"
        ],
        "answer": 1
    },
    {
        "question": "CMM in software quality refers to:",
        "options": [
            "Computer Memory Management",
            "Capability Maturity Model",
            "Code Maintenance Method",
            "Critical Mission Module"
        ],
        "answer": 1
    },
    {
        "question": "Quality Control (QC) focuses on identifying defects in the final product.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "The main difference between SQA and SQC is:",
        "options": [
            "SQA is product-oriented, SQC is process-oriented",
            "SQA is process-oriented, SQC is product-oriented",
            "They are the same thing",
            "SQA is for hardware, SQC is for software"
        ],
        "answer": 1
    },
    {
        "question": "Which activity is part of Quality Control?",
        "options": [
            "Process improvement",
            "Defining quality standards",
            "Testing and inspection",
            "Conducting audits"
        ],
        "answer": 2
    },
    {
        "question": "SQA activities are applied:",
        "options": [
            "Only during testing phase",
            "Only after development",
            "Throughout the entire software development lifecycle",
            "Only during requirements gathering"
        ],
        "answer": 2
    },
    {
        "question": "Software engineering involves a systematic approach to development.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "In the bridge building analogy, creating blueprints corresponds to:",
        "options": ["Requirements analysis", "Design", "Implementation", "Testing"],
        "answer": 1
    },
    {
        "question": "Procedure errors in software are always the user's fault.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "Documentation errors can:",
        "options": [
            "Improve software quality",
            "Mislead users or developers",
            "Speed up development",
            "Reduce costs"
        ],
        "answer": 1
    },
    {
        "question": "ISO 9000-3 is concerned with:",
        "options": [
            "Hardware standards",
            "Network protocols",
            "Quality management systems for software",
            "Programming languages"
        ],
        "answer": 2
    },
    {
        "question": "The primary responsibility for SQC lies with:",
        "options": [
            "The entire development team",
            "Only project managers",
            "The testing team",
            "Only clients"
        ],
        "answer": 2
    },
    {
        "question": "A race condition is:",
        "options": [
            "A type of hardware failure",
            "When software runs too fast",
            "A bug where system behavior depends on timing of uncontrollable events",
            "A network connectivity issue"
        ],
        "answer": 2
    },
    {
        "question": "Shortcomings of the testing process can allow critical bugs to slip through.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "In software quality, explicit requirements refer to:",
        "options": [
            "Unexpected features",
            "Clearly stated functional and performance requirements",
            "Hidden bugs",
            "User preferences"
        ],
        "answer": 1
    },
    {
        "question": "The main goal of process improvement in SQA is to:",
        "options": [
            "Increase development time",
            "Increase efficiency and reduce defects",
            "Eliminate documentation",
            "Reduce user involvement"
        ],
        "answer": 1
    },
    {
        "question": "Software maintenance activities should:",
        "options": [
            "Always introduce new features",
            "Not introduce new defects",
            "Ignore previous requirements",
            "Eliminate testing"
        ],
        "answer": 1
    }
];


const sq2 = [
    {
        "question": "Software quality factors define the attributes contributing to software effectiveness, reliability, and maintainability.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which of the following is NOT a main category of software quality factors?",
        "options": ["Product Operation Factors", "Product Revision Factors", "Product Transition Factors", "Product Development Factors"],
        "answer": 3
    },
    {
        "question": "Usability is a factor under which category?",
        "options": ["Product Operation", "Product Revision", "Product Transition", "Product Development"],
        "answer": 0
    },
    {
        "question": "Which quality factor ensures that software can be easily modified after deployment?",
        "options": ["Reliability", "Maintainability", "Portability", "Interoperability"],
        "answer": 1
    },
    {
        "question": "Efficiency focuses on optimal utilization of system resources such as CPU and memory.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which factor deals with the software's ability to prevent unauthorized access?",
        "options": ["Integrity", "Usability", "Correctness", "Testability"],
        "answer": 0
    },
    {
        "question": "Reusability is part of:",
        "options": ["Product Operation Factors", "Product Revision Factors", "Product Transition Factors", "None of the above"],
        "answer": 2
    },
    {
        "question": "Which of the following is a Product Revision Factor?",
        "options": ["Correctness", "Flexibility", "Portability", "Interoperability"],
        "answer": 1
    },
    {
        "question": "Testability defines how easily software can be tested to identify defects.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which factor ensures software can run on different platforms?",
        "options": ["Portability", "Reusability", "Interoperability", "Flexibility"],
        "answer": 0
    },
    {
        "question": "Safety is a factor that focuses on preventing hazardous conditions in systems.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which of the following is an example of a Product Operation Factor?",
        "options": ["Maintainability", "Flexibility", "Reliability", "Reusability"],
        "answer": 2
    },
    {
        "question": "Verifiability refers to the ease with which a system can be extended.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "Which factor is most concerned with the ease of integrating with other systems?",
        "options": ["Interoperability", "Portability", "Reusability", "Testability"],
        "answer": 0
    },
    {
        "question": "Manageability refers to how easily a system can be maintained and configured over its lifecycle.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which quality factor measures how easily users can interact with the software?",
        "options": ["Usability", "Efficiency", "Reliability", "Correctness"],
        "answer": 0
    },
    {
        "question": "Correctness ensures that software performs intended functions accurately.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which factor involves the ability to function without failure under specified conditions?",
        "options": ["Reliability", "Efficiency", "Integrity", "Usability"],
        "answer": 0
    },
    {
        "question": "Flexibility is a sub-factor of which main category?",
        "options": ["Product Operation", "Product Revision", "Product Transition", "All of the above"],
        "answer": 1
    },
    {
        "question": "Portability requires platform-independent code and minimal dependencies.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which of the following is NOT a Product Transition Factor?",
        "options": ["Portability", "Reusability", "Interoperability", "Testability"],
        "answer": 3
    },
    {
        "question": "The main objective of software quality factors is to reduce maintenance costs and increase software lifespan.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which factor is concerned with preventing data corruption?",
        "options": ["Integrity", "Usability", "Efficiency", "Flexibility"],
        "answer": 0
    },
    {
        "question": "McCall's factor model includes which of the following categories?",
        "options": ["Product Operation", "Product Revision", "Product Transition", "All of the above"],
        "answer": 3
    },
    {
        "question": "Adaptive maintenance is a type of software maintenance that improves functionality.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "Which quality factor is most relevant for open-source software like Linux?",
        "options": ["Maintainability", "Usability", "Efficiency", "Correctness"],
        "answer": 0
    },
    {
        "question": "Trade-offs may exist between different quality factors such as usability vs. security.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which factor ensures software components can be reused in different applications?",
        "options": ["Reusability", "Portability", "Interoperability", "Flexibility"],
        "answer": 0
    },
    {
        "question": "Quality factors are examined through design reviews, software inspections, and software tests.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which of the following factors is typically more important to developers than clients?",
        "options": ["Portability", "Usability", "Reliability", "Correctness"],
        "answer": 0
    }
];


const sq3 = [
    {
        "question": "SQA system components are classified into six classes.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which of the following is a Pre-project SQA component?",
        "options": ["Formal Design Reviews", "Contract Review", "Software Testing", "Configuration Management"],
        "answer": 1
    },
    {
        "question": "Peer reviews are usually conducted by superiors to evaluate junior staff.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "Which SQA component is targeted at reviewing the actual running of the software?",
        "options": ["Expert Opinion", "Software Testing", "Documentation Control", "Contract Review"],
        "answer": 1
    },
    {
        "question": "Corrective maintenance involves adapting software to new environments.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "Which of the following is part of Quality Infrastructure?",
        "options": ["Project Development Plan", "Procedures and Work Instructions", "SQA Trustees", "Management's Role"],
        "answer": 1
    },
    {
        "question": "Preventive actions are taken after a defect is detected.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "Which component ensures software consistency across environments?",
        "options": ["Documentation Control", "Configuration Management", "Staff Training", "Preventive Actions"],
        "answer": 1
    },
    {
        "question": "The SQA unit is responsible for defining processes and conducting audits across multiple projects.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which standard is related to Quality Management?",
        "options": ["IEEE 1012", "ISO 9001", "ISO/IEC 12207", "CMMI"],
        "answer": 1
    },
    {
        "question": "SQA Trustees are part of the Human Components of SQA.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which of the following is NOT a consideration for building an SQA system?",
        "options": ["Type of clientele", "Staff experience", "Hardware brand", "Range of products"],
        "answer": 2
    },
    {
        "question": "Project Progress Control ensures the project stays on track in terms of scope, schedule, and budget.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which of the following is a type of Software Maintenance?",
        "options": ["Preventive Maintenance", "Corrective Maintenance", "Expansive Maintenance", "Routine Maintenance"],
        "answer": 1
    },
    {
        "question": "The main objective of peer reviews is to detect design and programming faults.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Contract review includes examination of project proposal draft and contract drafts.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which of the following is NOT part of Project Development Plan?",
        "options": ["Schedules", "Risk evaluations", "Quality goals", "Software reuse plans"],
        "answer": 2
    },
    {
        "question": "Formal Design Reviews are conducted by peers only.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "Which component deals with training, retraining, and certification of staff?",
        "options": ["Preventive Actions", "Quality Infrastructure", "Human Components", "Management Components"],
        "answer": 1
    },
    {
        "question": "Software quality metrics help measure the effectiveness of development processes.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which of the following is a Human Component of SQA?",
        "options": ["Procedures", "SQA Unit", "Templates", "Preventive Actions"],
        "answer": 1
    },
    {
        "question": "Corrective maintenance includes user support services and correction of software failures.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which SQA component includes standardization, certification, and assessment?",
        "options": ["Pre-project", "Project Life Cycle", "Quality Infrastructure", "SQA Standards"],
        "answer": 3
    },
    {
        "question": "The purpose of root cause analysis is to identify why an issue occurred and prevent recurrence.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which of the following is part of Quality Management components?",
        "options": ["Project Progress Control", "Staff Training", "Contract Review", "Peer Reviews"],
        "answer": 0
    },
    {
        "question": "Adaptive maintenance involves functional improvement of existing software.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "question": "Which component ensures that all processes are well-documented and accessible?",
        "options": ["Configuration Management", "Documentation Control", "Preventive Actions", "Software Testing"],
        "answer": 1
    },
    {
        "question": "SQA Committees play a vital role in promoting quality culture within development teams.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "question": "Which factor influences the extent of SQA components implementation in an organization?",
        "options": ["Staff experience", "Hardware cost", "Office location", "Marketing strategy"],
        "answer": 0
    },
    {
        "question": "The project quality plan includes criteria for starting and ending each project stage.",
        "options": ["True", "False"],
        "answer": 0
    }
];






const sq4 = [
  {
    question: "What is the primary purpose of software quality standards and models?",
    options: [
      "To increase software development costs",
      "To provide frameworks for meeting quality criteria",
      "To replace software testing entirely",
      "To focus only on code optimization"
    ],
    answer: 1,
    explanation: "Quality standards provide structured frameworks to ensure software meets defined quality requirements."
  },
  {
    question: "Which ISO standard provides a general framework for quality management systems?",
    options: [
      "ISO/IEC 25010",
      "ISO 9001",
      "ISO 27001",
      "ISO 14001"
    ],
    answer: 1,
    explanation: "ISO 9001 defines general requirements for quality management systems across industries."
  },
  {
    question: "ISO 9001 emphasizes which of the following principles?",
    options: [
      "Technology-first approach",
      "Customer focus and continuous improvement",
      "Maximum documentation requirements",
      "Hardware optimization"
    ],
    answer: 1,
    explanation: "ISO 9001 focuses on customer satisfaction and continuous process improvement."
  },
  {
    question: "How many key quality characteristics does ISO/IEC 25010 define for software products?",
    options: [
      "5",
      "6",
      "8",
      "10"
    ],
    answer: 2,
    explanation: "ISO/IEC 25010 defines 8 main software quality characteristics."
  },
  {
    question: "Which ISO/IEC 25010 characteristic covers data protection and authentication?",
    options: [
      "Functional Suitability",
      "Performance Efficiency",
      "Security",
      "Portability"
    ],
    answer: 2,
    explanation: "Security covers confidentiality, integrity, authentication, and data protection."
  },
  {
    question: "IEEE 730 standard specifically addresses:",
    options: [
      "Software Quality Assurance Plans",
      "Software Test Documentation",
      "Software Verification and Validation",
      "Software Life Cycle Processes"
    ],
    answer: 0,
    explanation: "IEEE 730 defines standards for Software Quality Assurance (SQA) plans."
  },
  {
    question: "What does IEEE 829 standard define?",
    options: [
      "Quality management systems",
      "Software test documentation",
      "Security protocols",
      "Hardware interfaces"
    ],
    answer: 1,
    explanation: "IEEE 829 defines templates and structure for software test documentation."
  },
  {
    question: "CMMI was developed by which organization?",
    options: [
      "International Organization for Standardization",
      "Software Engineering Institute",
      "Institute of Electrical and Electronics Engineers",
      "International Electrotechnical Commission"
    ],
    answer: 1,
    explanation: "CMMI was developed by the Software Engineering Institute (SEI)."
  },
  {
    question: "What is the primary goal of CMMI?",
    options: [
      "To replace all other quality standards",
      "To provide a process improvement framework",
      "To focus only on software testing",
      "To eliminate documentation requirements"
    ],
    answer: 1,
    explanation: "CMMI helps organizations improve and standardize their processes."
  },
  {
    question: "How many maturity levels does CMMI typically include?",
    options: [
      "3",
      "5",
      "7",
      "10"
    ],
    answer: 1,
    explanation: "CMMI defines five maturity levels from Initial to Optimizing."
  },

  {
    question: "Which CMMI level is described as 'Initial' where processes are unpredictable?",
    options: [
      "Level 1",
      "Level 2",
      "Level 3",
      "Level 4"
    ],
    answer: 0,
    explanation: "Level 1 is ad-hoc and unpredictable with no defined processes."
  },
  {
    question: "At which CMMI level are processes quantitatively managed using statistical techniques?",
    options: [
      "Level 2",
      "Level 3",
      "Level 4",
      "Level 5"
    ],
    answer: 2,
    explanation: "Level 4 uses metrics and statistical control for process management."
  },
  {
    question: "Which CMMI maturity level focuses on continuous process improvement?",
    options: [
      "Level 2",
      "Level 3",
      "Level 4",
      "Level 5"
    ],
    answer: 3,
    explanation: "Level 5 (Optimizing) focuses on continuous improvement."
  },
  {
    question: "What does the acronym DMAIC stand for in Six Sigma?",
    options: [
      "Define, Monitor, Analyze, Improve, Control",
      "Define, Measure, Analyze, Improve, Control",
      "Design, Measure, Analyze, Implement, Check",
      "Develop, Measure, Assess, Improve, Control"
    ],
    answer: 1,
    explanation: "DMAIC stands for Define, Measure, Analyze, Improve, Control."
  },
  {
    question: "Which phase of DMAIC involves identifying root causes of defects?",
    options: [
      "Define",
      "Measure",
      "Analyze",
      "Improve"
    ],
    answer: 2,
    explanation: "Analyze phase focuses on finding root causes of defects."
  },
  {
    question: "Six Sigma originated from which industry?",
    options: [
      "Software Development",
      "Manufacturing",
      "Healthcare",
      "Construction"
    ],
    answer: 1,
    explanation: "Six Sigma originated in manufacturing (Motorola)."
  },
  {
    question: "What is the primary focus of Lean software development?",
    options: [
      "Maximum documentation",
      "Eliminating waste and maximizing value",
      "Following rigid processes",
      "Extensive planning phases"
    ],
    answer: 1,
    explanation: "Lean focuses on eliminating waste and delivering customer value."
  },
  {
    question: "Which of the following is NOT a key Lean principle mentioned in the chapter?",
    options: [
      "Eliminate waste",
      "Build quality in",
      "Deliver fast",
      "Maximize documentation"
    ],
    answer: 3,
    explanation: "Lean minimizes unnecessary documentation rather than maximizing it."
  },
  {
    question: "Lean principles were originally inspired by:",
    options: [
      "Microsoft development practices",
      "Toyota's production system",
      "IBM's management style",
      "Google's innovation culture"
    ],
    answer: 1,
    explanation: "Lean originated from Toyota Production System."
  },
  {
    question: "Which quality model specifically defines attributes like functionality, performance, and security?",
    options: [
      "ISO 9001",
      "CMMI",
      "ISO/IEC 25010",
      "Six Sigma"
    ],
    answer: 2,
    explanation: "ISO/IEC 25010 defines software product quality characteristics."
  },
  {
    question: "IEEE 1012 standard focuses on:",
    options: [
      "Software Quality Assurance Plans",
      "Software Verification and Validation",
      "Software Test Documentation",
      "Software Life Cycle Processes"
    ],
    answer: 1,
    explanation: "IEEE 1012 focuses on Verification and Validation (V&V)."
  },
  {
    question: "What does ISO/IEC 25010's 'Usability' characteristic assess?",
    options: [
      "Data protection measures",
      "Ease of use and accessibility",
      "System interoperability",
      "Code modularity"
    ],
    answer: 1,
    explanation: "Usability measures ease of use, learnability, and accessibility."
  },
  {
    question: "Which standard is described as 'a globally recognized standard for quality management systems'?",
    options: [
      "IEEE 730",
      "CMMI",
      "ISO 9001",
      "ISO/IEC 25010"
    ],
    answer: 2,
    explanation: "ISO 9001 is globally recognized for quality management systems."
  },
  {
    question: "In CMMI, Level 2 is characterized by:",
    options: [
      "Ad-hoc processes",
      "Standard project management processes",
      "Quantitatively managed processes",
      "Continuously optimized processes"
    ],
    answer: 1,
    explanation: "Level 2 focuses on managed and planned project processes."
  },
  {
    question: "Which phase of Six Sigma's DMAIC involves collecting baseline performance data?",
    options: [
      "Define",
      "Measure",
      "Analyze",
      "Control"
    ],
    answer: 1,
    explanation: "Measure phase collects data to establish baseline performance."
  },
  {
    question: "The 'Control' phase in DMAIC focuses on:",
    options: [
      "Identifying problems",
      "Collecting data",
      "Maintaining improvements",
      "Implementing solutions"
    ],
    answer: 2,
    explanation: "Control ensures improvements are sustained over time."
  },
  {
    question: "Which Lean principle emphasizes 'ensuring quality at every stage of development'?",
    options: [
      "Eliminate waste",
      "Build quality in",
      "Deliver fast",
      "Empower teams"
    ],
    answer: 1,
    explanation: "Build quality in means preventing defects early."
  },
  {
    question: "What does CMMI stand for?",
    options: [
      "Capability Maturity Model Integration",
      "Computer Management Model Institute",
      "Code Maturity Measurement Index",
      "Comprehensive Management Methodology Integration"
    ],
    answer: 0,
    explanation: "CMMI stands for Capability Maturity Model Integration."
  },
  {
    question: "Which organization develops IEEE standards?",
    options: [
      "International Organization for Standardization",
      "Software Engineering Institute",
      "Institute of Electrical and Electronics Engineers",
      "International Software Quality Institute"
    ],
    answer: 2,
    explanation: "IEEE standards are developed by the Institute of Electrical and Electronics Engineers."
  },
  {
    question: "ISO/IEC 25010's 'Performance Efficiency' characteristic measures:",
    options: [
      "Security features",
      "Response time and scalability",
      "Code maintainability",
      "System portability"
    ],
    answer: 1,
    explanation: "Performance efficiency includes response time, throughput, and scalability."
  },
  {
    question: "Which of the following is a benefit of implementing Six Sigma in software development?",
    options: [
      "Increased process variation",
      "Higher defect rates",
      "Better decision-making through data",
      "Reduced customer satisfaction"
    ],
    answer: 2,
    explanation: "Six Sigma relies on data-driven decision making."
  },
  {
    question: "The 'Optimize the whole' Lean principle refers to:",
    options: [
      "Focusing only on coding tasks",
      "Looking at the entire development lifecycle",
      "Maximizing individual productivity",
      "Minimizing team collaboration"
    ],
    answer: 1,
    explanation: "Lean encourages optimizing the entire value stream, not just parts."
  },
  {
    question: "Which CMMI level is also called 'Defined'?",
    options: [
      "Level 1",
      "Level 2",
      "Level 3",
      "Level 4"
    ],
    answer: 2,
    explanation: "Level 3 is the Defined maturity level."
  },
  {
    question: "In the context of software quality, what does 'Maintainability' refer to?",
    options: [
      "System security features",
      "Ease of modifying and updating code",
      "User interface design",
      "Hardware compatibility"
    ],
    answer: 1,
    explanation: "Maintainability measures how easily software can be modified."
  },
  {
    question: "Which standard is specifically mentioned for 'Software Life Cycle Processes'?",
    options: [
      "IEEE 730",
      "IEEE 829",
      "IEEE 1012",
      "IEEE 12207"
    ],
    answer: 3,
    explanation: "IEEE 12207 defines software life cycle processes."
  }
];




const sq5 = [
  {
    question: "In the V-Model, what is the primary focus?",
    options: [
      "Continuous integration and continuous delivery",
      "Parallel testing at each development stage",
      "Iterative development and rapid cycles",
      "Extensive documentation only in the final phase"
    ],
    answer: 1,
    explanation: "The V-Model emphasizes parallel testing activities corresponding to each development stage, ensuring validation at every phase."
  },
  {
    question: "Which of the following is considered static testing?",
    options: [
      "Performance testing",
      "Code review",
      "Functional testing",
      "Security testing"
    ],
    answer: 1,
    explanation: "Static testing involves examining code or documentation without executing the software, such as in code reviews."
  },
  {
    question: "What is the main difference between Verification and Validation?",
    options: [
      "Verification deals with internal code, Validation deals with user interface",
      "Verification checks if we're building the product right, Validation checks if we're building the right product",
      "Verification is done after release, Validation is done during development",
      "No difference, they mean the same thing"
    ],
    answer: 1,
    explanation: "Verification ensures the product meets specified requirements (building it right), while validation ensures it meets user needs (building the right product)."
  },
  {
    question: "Given a function that accepts age between 18 and 60, which values would you test using Boundary Value Analysis?",
    options: [
      "18, 30, 60",
      "17, 18, 19, 59, 60, 61",
      "0, 10, 18, 60, 70, 100",
      "All integer values from 18 to 60"
    ],
    answer: 1,
    explanation: "Boundary Value Analysis tests values at and just beyond the boundaries: min-1, min, min+1, max-1, max, max+1."
  },
  {
    question: "Which white-box testing technique ensures that each executable statement in the code is executed at least once?",
    options: [
      "Branch Coverage",
      "Path Coverage",
      "Statement Coverage",
      "Mutation Testing"
    ],
    answer: 2,
    explanation: "Statement Coverage ensures every statement in the code is executed at least once during testing."
  },
  {
    question: "What does Branch Coverage require?",
    options: [
      "Every statement executed at least once",
      "Every possible outcome of each decision point executed at least once",
      "Every possible path through the code executed",
      "Testing with mutated code versions"
    ],
    answer: 1,
    explanation: "Branch Coverage requires that each branch (true/false outcome) of every decision point is executed."
  },
  {
    question: "If you have a function that categorizes scores: >=90 = 'Excellent', >=75 = 'Good', otherwise = 'Needs Improvement'. How many paths need testing for 100% path coverage?",
    options: ["1", "2", "3", "4"],
    answer: 2,
    explanation: "There are three distinct logical outcomes: Excellent, Good, and Needs Improvement, each representing a unique path."
  },
  {
    question: "In Mutation Testing, what does it mean when a test case 'kills' a mutant?",
    options: [
      "The mutant causes the system to crash",
      "The test case fails when run against the mutant",
      "The mutant improves code performance",
      "The test case passes with the mutant"
    ],
    answer: 1,
    explanation: "A mutant is 'killed' when a test case detects the change (i.e., the test fails), indicating good test coverage."
  },
  {
    question: "For email validation, using Equivalence Partitioning, which of these would be in the same equivalence class?",
    options: [
      "test@example.com and test.com",
      "user@domain.co.uk and @domain.com",
      "valid@email.com and another@valid.com",
      "test@example and test@example."
    ],
    answer: 2,
    explanation: "Both 'valid@email.com' and 'another@valid.com' are valid email addresses and belong to the same valid equivalence class."
  },
  {
    question: "Which black-box testing technique is best for systems with workflow-based behavior like ATMs?",
    options: [
      "Equivalence Partitioning",
      "Boundary Value Analysis",
      "Decision Table Testing",
      "State Transition Testing"
    ],
    answer: 3,
    explanation: "State Transition Testing is ideal for systems with defined states and transitions, such as ATM workflows."
  },
  {
    question: "Consider this discount logic: Members get 10% discount, and purchases over $100 get additional 5% discount. Using Decision Table Testing, how many test cases are needed for full coverage?",
    options: ["2", "3", "4", "6"],
    answer: 2,
    explanation: "Two independent conditions (member and purchase > $100) lead to 2^2 = 4 combinations, but some may be merged; typically 4 test cases cover all rules."
  },
  {
    question: "In Big Bang Integration Testing, when is it most appropriate to use?",
    options: [
      "When modules are developed sequentially",
      "When all modules are ready at once and system is small",
      "When high-level modules are ready first",
      "When low-level modules are ready first"
    ],
    answer: 1,
    explanation: "Big Bang is suitable for small systems where all modules are integrated simultaneously after development."
  },
  {
    question: "What is the main disadvantage of Big Bang Integration Testing?",
    options: [
      "Requires extensive planning",
      "Bugs are harder to isolate",
      "Needs many stubs and drivers",
      "Delays UI testing"
    ],
    answer: 1,
    explanation: "Since all modules are integrated at once, isolating the source of a defect becomes difficult."
  },
  {
    question: "Top-Down Integration Testing starts with:",
    options: [
      "Lowest level modules",
      "Main module with stubs for lower levels",
      "All modules integrated at once",
      "Database layer first"
    ],
    answer: 1,
    explanation: "Top-Down begins with the main module, using stubs to simulate lower-level modules."
  },
  {
    question: "Which integration strategy would be best for an API-first development approach?",
    options: [
      "Big Bang",
      "Top-Down",
      "Bottom-Up",
      "Sandwich"
    ],
    answer: 2,
    explanation: "Bottom-Up is ideal for API-first development as lower-level services (APIs) are developed and tested first."
  },
  {
    question: "Sandwich (Hybrid) Integration Testing combines:",
    options: [
      "Static and Dynamic testing",
      "White-box and Black-box testing",
      "Top-Down and Bottom-Up testing",
      "Functional and Non-functional testing"
    ],
    answer: 2,
    explanation: "Sandwich Testing uses both Top-Down and Bottom-Up strategies simultaneously."
  },
  {
    question: "Stress testing is primarily concerned with:",
    options: [
      "Testing under expected workload",
      "Testing under extreme conditions",
      "Testing basic functionality",
      "Testing recovery from failures"
    ],
    answer: 1,
    explanation: "Stress testing evaluates system behavior under extreme conditions beyond normal operational capacity."
  },
  {
    question: "Load testing versus Stress testing: What's the key difference?",
    options: [
      "Load testing uses more testers",
      "Stress testing pushes beyond expected capacity",
      "Load testing is only for web applications",
      "Stress testing is faster to execute"
    ],
    answer: 1,
    explanation: "Load tests typical workload; stress tests go beyond to find breaking points."
  },
  {
    question: "Spike testing involves:",
    options: [
      "Gradual increase in load",
      "Constant load over long period",
      "Sudden, dramatic changes in load",
      "Testing with corrupted data"
    ],
    answer: 2,
    explanation: "Spike testing involves sudden, significant increases in load to see how the system reacts."
  },
  {
    question: "Which testing verifies basic functionality after a new build?",
    options: [
      "Sanity Testing",
      "Smoke Testing",
      "Regression Testing",
      "Recovery Testing"
    ],
    answer: 1,
    explanation: "Smoke Testing checks critical functionalities to ensure the build is stable for further testing."
  },
  {
    question: "What is the purpose of Recovery Testing?",
    options: [
      "To test how fast the system runs",
      "To test how the system recovers from failures",
      "To test security vulnerabilities",
      "To test user interface responsiveness"
    ],
    answer: 1,
    explanation: "Recovery Testing assesses the system's ability to recover after hardware/software failures."
  },
  {
    question: "Which tool is mentioned for security testing?",
    options: [
      "Jira",
      "Selenium",
      "OWASP ZAP",
      "LoadRunner"
    ],
    answer: 2,
    explanation: "OWASP ZAP is a popular open-source security testing tool."
  },
  {
    question: "Scalability testing measures:",
    options: [
      "How well the system handles increasing workloads",
      "How secure the system is",
      "How easy the system is to use",
      "How compatible the system is with different browsers"
    ],
    answer: 0,
    explanation: "Scalability testing evaluates system performance as workload increases."
  },
  {
    question: "Usability testing primarily focuses on:",
    options: [
      "Code efficiency",
      "System security",
      "User satisfaction and ease of use",
      "Network performance"
    ],
    answer: 2,
    explanation: "Usability testing assesses how user-friendly and intuitive the system is."
  },
  {
    question: "Regression testing is important because:",
    options: [
      "It finds new features to add",
      "It ensures new changes don't break existing functionality",
      "It tests the system under extreme load",
      "It verifies initial requirements"
    ],
    answer: 1,
    explanation: "Regression testing confirms that recent code changes haven't adversely affected existing features."
  },
  {
    question: "Alpha testing is performed by:",
    options: [
      "End users in real environment",
      "Developers and internal QA team",
      "Only the development team",
      "External security experts"
    ],
    answer: 1,
    explanation: "Alpha testing is done internally by developers and QA before release to external users."
  },
  {
    question: "Exploratory testing is most useful when:",
    options: [
      "Requirements are well-defined and stable",
      "Test cases are already documented",
      "Requirements are vague or rapidly changing",
      "Testing needs to be fully automated"
    ],
    answer: 2,
    explanation: "Exploratory testing is effective in dynamic environments with unclear or evolving requirements."
  },
  {
    question: "The first phase of defect management is:",
    options: [
      "Defect Logging",
      "Defect Analysis",
      "Defect Identification",
      "Defect Resolution"
    ],
    answer: 2,
    explanation: "Defect management starts with identifying a defect."
  },
  {
    question: "When logging a defect, which of these is LEAST important?",
    options: [
      "Steps to reproduce",
      "Expected vs actual behavior",
      "The tester's salary",
      "Environment information"
    ],
    answer: 2,
    explanation: "Tester's salary is irrelevant to defect reporting."
  },
  {
    question: "Severity versus Priority: A system crash would typically have:",
    options: [
      "High severity, low priority",
      "Low severity, high priority",
      "High severity, high priority",
      "Low severity, low priority"
    ],
    answer: 2,
    explanation: "A system crash is both severe (high impact) and urgent (high priority)."
  },
  {
    question: "Root Cause Analysis helps to:",
    options: [
      "Assign blame to developers",
      "Prevent similar defects in the future",
      "Increase testing time",
      "Reduce documentation requirements"
    ],
    answer: 1,
    explanation: "Root Cause Analysis identifies underlying causes to prevent recurrence."
  },
  {
    question: "Defect Density is calculated as:",
    options: [
      "Defects found / Time taken to find them",
      "Defects found / Size of software",
      "Defects reopened / Total defects fixed",
      "Defects leaked / Total defects"
    ],
    answer: 1,
    explanation: "Defect Density = Defects / Software size (e.g., lines of code)."
  },
  {
    question: "A module has 5000 lines of code and 25 defects. What is its defect density?",
    options: [
      "0.005 defects per line",
      "5 defects per 1000 lines",
      "0.2 defects per line",
      "25 defects total"
    ],
    answer: 1,
    explanation: "25 defects / 5000 LOC = 0.005 per line = 5 per 1000 lines."
  },
  {
    question: "Defect Discovery Rate measures:",
    options: [
      "How quickly defects are fixed",
      "How many defects are found per time period",
      "How many defects escape to production",
      "How old the defects are"
    ],
    answer: 1,
    explanation: "Defect Discovery Rate = Defects found / Time period."
  },
  {
    question: "If 40 defects were found over 10 days of testing, what is the defect discovery rate?",
    options: [
      "4 defects per day",
      "0.25 days per defect",
      "40 defects total",
      "10 days testing period"
    ],
    answer: 0,
    explanation: "40 defects / 10 days = 4 defects/day."
  },
  {
    question: "Defect Resolution Time is important because:",
    options: [
      "It measures testing effectiveness",
      "It shows how responsive the team is to fixing issues",
      "It counts total defects found",
      "It tracks defect patterns"
    ],
    answer: 1,
    explanation: "It indicates team efficiency in addressing reported defects."
  },
  {
    question: "A high Defect Reopen Rate indicates:",
    options: [
      "Excellent testing coverage",
      "Poor quality fixes or insufficient testing",
      "Rapid development pace",
      "Good defect management"
    ],
    answer: 1,
    explanation: "High reopen rate suggests fixes are inadequate or testing is incomplete."
  },
  {
    question: "Defect Leakage refers to defects found:",
    options: [
      "During unit testing",
      "After release to production",
      "During code review",
      "In documentation"
    ],
    answer: 1,
    explanation: "Defect Leakage = defects found post-release that should have been caught earlier."
  },
  {
    question: "If 15 defects were found after release out of 150 total defects, what is the defect leakage percentage?",
    options: ["10%", "15%", "90%", "100%"],
    answer: 0,
    explanation: "Leakage = (15/150)*100 = 10%."
  },
  {
    question: "Defect Aging measures:",
    options: [
      "How complex a defect is",
      "How long defects remain open",
      "How many developers worked on a defect",
      "How many times a defect was reopened"
    ],
    answer: 1,
    explanation: "Defect Aging tracks the time from defect reporting to resolution."
  },
  {
    question: "Which metric helps identify bottlenecks in defect resolution?",
    options: [
      "Defect Density",
      "Defect Aging",
      "Defect Discovery Rate",
      "Defect Leakage"
    ],
    answer: 1,
    explanation: "High aging indicates delays in fixing defects."
  },
  {
    question: "Code review is most effective for finding which type of defects?",
    options: [
      "Performance issues under load",
      "Coding errors and standards violations",
      "Usability problems",
      "Compatibility issues with specific browsers"
    ],
    answer: 1,
    explanation: "Code reviews catch syntax errors, logic flaws, and adherence to coding standards."
  },
  {
    question: "In Agile development, SQA activities are:",
    options: [
      "Done only at the end of the project",
      "Integrated into each iteration",
      "Handled by a separate QA team only",
      "Not necessary due to frequent releases"
    ],
    answer: 1,
    explanation: "Agile integrates testing continuously within each sprint/iteration."
  },
  {
    question: "Which testing level verifies that different modules work together correctly?",
    options: [
      "Unit Testing",
      "Integration Testing",
      "System Testing",
      "Acceptance Testing"
    ],
    answer: 1,
    explanation: "Integration Testing focuses on interactions between modules."
  },
  {
    question: "Acceptance Testing is typically performed by:",
    options: [
      "Developers",
      "QA Engineers",
      "End Users",
      "Project Managers"
    ],
    answer: 2,
    explanation: "Acceptance Testing is done by end users or clients to validate the product against their needs."
  },
  {
    question: "Consider this Python function: def calculate_discount(member, amount): discount = 0; if member: discount += 10; if amount > 100: discount += 5; return discount. What is the minimum number of test cases needed for branch coverage?",
    options: ["1", "2", "3", "4"],
    answer: 1,
    explanation: "Two independent conditions (member and amount > 100) require at least 2 test cases to cover all branches."
  },
  {
    question: "For the same discount function, how many test cases for 100% path coverage?",
    options: ["2", "3", "4", "5"],
    answer: 2,
    explanation: "There are 2^2 = 4 possible paths, but typically 4 test cases are needed for full path coverage."
  },
  {
    question: "A password field accepts 8-20 characters. Using BVA, which values should be tested?",
    options: [
      "7, 8, 9, 19, 20, 21",
      "8, 15, 20",
      "0, 8, 20, 30",
      "All values from 8 to 20"
    ],
    answer: 0,
    explanation: "Boundary values: just below min (7), min (8), min+1 (9), max-1 (19), max (20), max+1 (21)."
  },
  {
    question: "Which integration testing strategy would be best for testing a microservices architecture?",
    options: [
      "Big Bang",
      "Top-Down",
      "Bottom-Up",
      "Sandwich"
    ],
    answer: 2,
    explanation: "Bottom-Up is suitable for microservices as each service can be tested independently before integration."
  },
  {
    question: "Smoke testing is also known as:",
    options: [
      "Build Verification Testing",
      "Exploratory Testing",
      "Stress Testing",
      "Compatibility Testing"
    ],
    answer: 0,
    explanation: "Smoke Testing is often called Build Verification Testing (BVT)."
  },
  {
    question: "Sanity testing is performed when:",
    options: [
      "A new build is received",
      "Specific functionality is fixed or changed",
      "Testing for the first time",
      "Under extreme load conditions"
    ],
    answer: 1,
    explanation: "Sanity testing checks specific fixes or changes to ensure they work as intended."
  },
  {
    question: "Which is NOT a common defect tracking tool?",
    options: [
      "Jira",
      "Bugzilla",
      "Selenium",
      "Redmine"
    ],
    answer: 2,
    explanation: "Selenium is an automation tool, not a defect tracker."
  },
  {
    question: "A defect marked as 'Critical' severity would typically:",
    options: [
      "Be a cosmetic issue only",
      "Cause system failure or data loss",
      "Have a workaround available",
      "Be fixed in a future release"
    ],
    answer: 1,
    explanation: "Critical severity defects have major impact, such as system crashes or data loss."
  },
  {
    question: "Traceability Matrix ensures:",
    options: [
      "All requirements are mapped to test cases",
      "All code is commented properly",
      "All defects are fixed quickly",
      "All tests are automated"
    ],
    answer: 0,
    explanation: "Traceability Matrix links requirements to test cases to ensure complete coverage."
  },
  {
    question: "In DevOps, SQA emphasizes:",
    options: [
      "Manual testing only",
      "Testing at the end of development",
      "Continuous testing and automation",
      "Eliminating all testing activities"
    ],
    answer: 2,
    explanation: "DevOps promotes continuous testing and automation throughout the CI/CD pipeline."
  },
  {
    question: "Pair programming is a form of:",
    options: [
      "Performance testing",
      "Code review",
      "Security testing",
      "User acceptance testing"
    ],
    answer: 1,
    explanation: "Pair programming involves real-time collaborative code review."
  },
  {
    question: "Technical reviews focus on:",
    options: [
      "User interface design",
      "System architecture and design patterns",
      "Business requirements",
      "Project timelines"
    ],
    answer: 1,
    explanation: "Technical reviews evaluate design, architecture, and implementation details."
  },
  {
    question: "Walkthroughs are typically:",
    options: [
      "Formal inspection meetings",
      "Semi-formal presentation sessions",
      "Fully automated processes",
      "Done only by managers"
    ],
    answer: 1,
    explanation: "Walkthroughs are informal or semi-formal meetings to review artifacts."
  },
  {
    question: "Which testing type would you use to verify a login form is not vulnerable to SQL injection?",
    options: [
      "Performance Testing",
      "Security Testing",
      "Usability Testing",
      "Compatibility Testing"
    ],
    answer: 1,
    explanation: "SQL injection is a security vulnerability, so Security Testing is appropriate."
  },
  {
    question: "Compatibility testing checks:",
    options: [
      "How fast the system runs",
      "How secure the system is",
      "How the system works on different platforms/browsers",
      "How easy the system is to use"
    ],
    answer: 2,
    explanation: "Compatibility testing verifies functionality across various environments."
  },
  {
    question: "Ad-hoc testing is:",
    options: [
      "Formal and structured",
      "Informal without predefined test cases",
      "Always automated",
      "Only done by developers"
    ],
    answer: 1,
    explanation: "Ad-hoc testing is unscripted, exploratory testing without formal test cases."
  },
  {
    question: "Which metric would help identify if testing was thorough enough?",
    options: [
      "Defect Leakage",
      "Defect Density",
      "Defect Resolution Time",
      "Defect Aging"
    ],
    answer: 0,
    explanation: "Low Defect Leakage indicates effective testing that caught most defects before release."
  },
  {
    question: "If out of 200 fixed defects, 12 were reopened, what is the defect reopen rate?",
    options: ["6%", "12%", "94%", "88%"],
    answer: 0,
    explanation: "Reopen Rate = (12/200)*100 = 6%."
  },
  {
    question: "Which is a benefit of tracking defect metrics?",
    options: [
      "Increased paperwork",
      "Data-driven decision making",
      "Longer development cycles",
      "Less time for actual testing"
    ],
    answer: 1,
    explanation: "Metrics provide insights for improving processes and product quality."
  },
  {
    question: "In the Waterfall model, SQA activities are:",
    options: [
      "Applied sequentially at each phase",
      "Integrated into every sprint",
      "Done only at the end",
      "Not formally defined"
    ],
    answer: 0,
    explanation: "Waterfall follows a sequential phase-wise approach, with SQA activities at each stage."
  }
];






const sq6 = [
  {
    question: "What is the primary purpose of test automation in modern software development?",
    options: [
      "To eliminate all manual testing",
      "To improve efficiency, accuracy, and coverage in testing",
      "To reduce development costs by 50%",
      "To replace software developers with testers"
    ],
    answer: 1,
    explanation: "Automation improves speed, accuracy, and test coverage but does not eliminate manual testing."
  },
  {
    question: "Which of the following is NOT mentioned as a reason why manual testing struggles with modern software development?",
    options: [
      "Frequent releases (e.g., weekly updates)",
      "Complex systems with many integrations",
      "Diverse environments (different browsers/devices)",
      "Lack of skilled manual testers"
    ],
    answer: 3,
    explanation: "The challenge is scale and speed, not lack of skilled testers."
  },
  {
    question: "What advantage of automation specifically helps in CI/CD pipelines?",
    options: [
      "Reusability of test scripts",
      "Speed and efficiency for rapid feedback",
      "Accuracy in test execution",
      "Scalability across multiple platforms"
    ],
    answer: 1,
    explanation: "CI/CD requires fast feedback, which automation provides."
  },
  {
    question: "How does test automation improve test coverage?",
    options: [
      "By eliminating all manual testers",
      "By executing a large number of test cases including complex scenarios",
      "By reducing test documentation",
      "By focusing only on critical paths"
    ],
    answer: 1,
    explanation: "Automation allows running many test cases repeatedly and consistently."
  },
  {
    question: "Which type of testing focuses on individual components or functions in isolation?",
    options: [
      "Integration Testing",
      "Functional/UI Testing",
      "Unit Testing",
      "Performance Testing"
    ],
    answer: 2,
    explanation: "Unit testing validates individual functions or components separately."
  },
  {
    question: "What do unit tests typically check according to the chapter?",
    options: [
      "Only user interface elements",
      "Functional correctness, exception handling, and boundary conditions",
      "Database performance only",
      "Network latency issues"
    ],
    answer: 1,
    explanation: "Unit tests verify logic correctness, edge cases, and error handling."
  },
  {
    question: "What characteristic should good automated unit tests have?",
    options: [
      "Slow but thorough",
      "Dependent on external systems",
      "Isolated, fast, and repeatable",
      "Non-deterministic for better coverage"
    ],
    answer: 2,
    explanation: "Good unit tests should be fast, isolated, and produce consistent results."
  },
  {
    question: "Which tool is mentioned for API testing in integration testing?",
    options: [
      "Selenium",
      "Postman",
      "JMeter",
      "Cypress"
    ],
    answer: 1,
    explanation: "Postman is commonly used for API and integration testing."
  },
  {
    question: "What is the key objective of integration testing?",
    options: [
      "To test individual functions in isolation",
      "To verify module-to-module interaction and communication",
      "To measure user interface responsiveness",
      "To check code formatting standards"
    ],
    answer: 1,
    explanation: "Integration testing ensures modules work correctly together."
  },
  {
    question: "Which automation tool is specifically designed for mobile application testing?",
    options: [
      "Selenium",
      "Appium",
      "JUnit",
      "Cypress"
    ],
    answer: 1,
    explanation: "Appium supports mobile application automation."
  },
  {
    question: "Selenium supports testing across which of the following?",
    options: [
      "Only Chrome browser",
      "Multiple browsers and programming languages",
      "Only Java applications",
      "Mobile apps only"
    ],
    answer: 1,
    explanation: "Selenium supports multiple browsers and languages like Java, Python, and C#."
  },
  {
    question: "What makes Cypress different from Selenium according to the chapter?",
    options: [
      "Cypress only works with Java",
      "Cypress runs directly in the browser with faster execution",
      "Cypress doesn't support JavaScript",
      "Cypress is only for backend testing"
    ],
    answer: 1,
    explanation: "Cypress runs inside the browser, making it faster and more reliable."
  },
  {
    question: "Which framework uses a keyword-driven, human-readable syntax?",
    options: [
      "JUnit",
      "TestNG",
      "Robot Framework",
      "Cypress"
    ],
    answer: 2,
    explanation: "Robot Framework uses readable keywords for test cases."
  },
  {
    question: "What is NOT mentioned as a factor when selecting an automation tool?",
    options: [
      "Application type (web, mobile, desktop)",
      "Programming language compatibility",
      "Tool's popularity on social media",
      "Integration support with CI/CD pipelines"
    ],
    answer: 2,
    explanation: "Tool popularity on social media is irrelevant to selection."
  },
  {
    question: "What does CI (Continuous Integration) involve?",
    options: [
      "Only deploying code to production",
      "Regularly merging code changes into a shared repository",
      "Manual code reviews only",
      "Testing after the project is complete"
    ],
    answer: 1,
    explanation: "CI involves frequent code integration into a shared repository."
  },
  {
    question: "What happens during each integration in CI?",
    options: [
      "Manual deployment only",
      "Automated builds and tests are triggered",
      "Code is reviewed by managers only",
      "No testing occurs"
    ],
    answer: 1,
    explanation: "CI automatically triggers builds and tests on each commit."
  },
  {
    question: "How does CI help development teams?",
    options: [
      "By delaying feedback until the end",
      "By identifying issues early through immediate feedback",
      "By eliminating all testing",
      "By increasing manual intervention"
    ],
    answer: 1,
    explanation: "CI detects issues early by providing quick feedback."
  },
  {
    question: "What does Continuous Deployment (CD) automate?",
    options: [
      "Only code writing",
      "The release of tested code into production",
      "Manual test case creation",
      "Project management meetings"
    ],
    answer: 1,
    explanation: "CD automates deploying tested code to production."
  },
  {
    question: "What is a key benefit of CI/CD in testing mentioned in the chapter?",
    options: [
      "Early bug detection",
      "Elimination of all bugs",
      "Reduction in code quality",
      "Increase in manual testing"
    ],
    answer: 0,
    explanation: "CI/CD enables early detection of defects."
  },
  {
    question: "Which CI/CD tool is described as an open-source automation server?",
    options: [
      "GitHub Actions",
      "Jenkins",
      "GitLab CI/CD",
      "CircleCI"
    ],
    answer: 1,
    explanation: "Jenkins is a popular open-source automation server."
  },
  {
    question: "Where is code typically pushed to trigger a CI/CD pipeline?",
    options: [
      "Email attachment",
      "Version control system like GitHub",
      "Shared network drive",
      "Physical USB drive"
    ],
    answer: 1,
    explanation: "CI/CD pipelines are triggered by commits to version control systems."
  },
  {
    question: "What happens if tests fail in a CI/CD pipeline?",
    options: [
      "Deployment proceeds anyway",
      "Issues are flagged and deployment stops",
      "Tests are ignored",
      "Code is automatically rewritten"
    ],
    answer: 1,
    explanation: "Failed tests stop the pipeline to prevent faulty deployment."
  },
  {
    question: "Which type of testing evaluates application speed, stability, and scalability?",
    options: [
      "Unit Testing",
      "Integration Testing",
      "Performance Testing",
      "Functional Testing"
    ],
    answer: 2,
    explanation: "Performance testing measures speed, stability, and scalability."
  },
  {
    question: "What does automated testing eliminate that manual testing is prone to?",
    options: [
      "All software bugs",
      "Human errors in test execution",
      "The need for test planning",
      "Code documentation"
    ],
    answer: 1,
    explanation: "Automation removes human execution errors."
  },
  {
    question: "Why is scalability important in test automation?",
    options: [
      "It allows tests to run on multiple devices/browsers without extra effort",
      "It makes tests slower but thorough",
      "It reduces number of test cases",
      "It eliminates test environments"
    ],
    answer: 0,
    explanation: "Scalability allows running tests across many platforms efficiently."
  },
  {
    question: "Which cloud-based testing platforms are mentioned for enhancing scalability?",
    options: [
      "AWS and Azure only",
      "Sauce Labs and BrowserStack",
      "Google Cloud only",
      "IBM Cloud only"
    ],
    answer: 1,
    explanation: "Sauce Labs and BrowserStack support cross-browser cloud testing."
  },
  {
    question: "What does JUnit primarily focus on?",
    options: [
      "Mobile application testing",
      "Testing individual components of Java applications",
      "Web UI testing only",
      "Performance testing only"
    ],
    answer: 1,
    explanation: "JUnit is mainly used for unit testing Java applications."
  },
  {
    question: "How does TestNG extend JUnit's capabilities?",
    options: [
      "By only supporting Python",
      "By introducing parallel execution and data-driven testing",
      "By eliminating all assertions",
      "By focusing only on mobile testing"
    ],
    answer: 1,
    explanation: "TestNG adds advanced features like parallel and data-driven testing."
  },
  {
    question: "What advantage does automation provide for regression testing?",
    options: [
      "It makes regression testing unnecessary",
      "It ensures consistent and frequent validation of small code changes",
      "It only tests new features",
      "It slows down testing"
    ],
    answer: 1,
    explanation: "Automation ensures regression tests run consistently after each change."
  },
  {
    question: "What is a long-term benefit of test automation despite high initial investment?",
    options: [
      "Increased manual testing requirements",
      "Reduced testing costs due to decreased manual effort",
      "More complex documentation",
      "Slower release cycles"
    ],
    answer: 1,
    explanation: "Over time, automation reduces manual effort and cost."
  },
  {
    question: "What does CI encourage in terms of code updates?",
    options: [
      "Large, infrequent updates",
      "Small, incremental updates",
      "No updates after release",
      "Updates only from senior developers"
    ],
    answer: 1,
    explanation: "CI encourages frequent, small updates to reduce risk."
  },
  {
    question: "Which programming languages does Selenium support according to the chapter?",
    options: [
      "Only Java",
      "Java, Python, C#, and JavaScript",
      "Only Python",
      "Only JavaScript"
    ],
    answer: 1,
    explanation: "Selenium supports multiple languages including Java and Python."
  },
  {
    question: "What type of applications does Appium support testing?",
    options: [
      "Only web applications",
      "Native, hybrid, and web-based mobile applications",
      "Only desktop applications",
      "Only backend services"
    ],
    answer: 1,
    explanation: "Appium supports all major mobile app types."
  },
  {
    question: "What benefit does CI/CD provide for deployment according to the chapter?",
    options: [
      "Makes deployments more risky",
      "Reduces human intervention and minimizes deployment risks",
      "Eliminates all deployment processes",
      "Requires more manual approvals"
    ],
    answer: 1,
    explanation: "CI/CD automates deployment and reduces human errors."
  },
  {
    question: "What is the final step in a typical CI/CD pipeline if tests pass?",
    options: [
      "Code is deleted",
      "Deployment proceeds",
      "Pipeline stops",
      "Manual review begins"
    ],
    answer: 1,
    explanation: "Successful tests allow deployment to proceed."
  }
];





const ds1 = [
    {
        "question": "Tesla's Autopilot system uses camera and sensor data to detect obstacles and make driving decisions without explicit instructions for every possible scenario. What type(s) of learning is this?",
        "options": [
            "Supervised Learning only",
            "Both Supervised and Reinforcement Learning",
            "Reinforcement Learning only",
            "Unsupervised Learning only"
        ],
        "answer": 1
    },
    {
        "question": "According to the learning problem formulation, the target function f is known to the learning algorithm during training.",
        "options": [
            "False",
            "True"
        ],
        "answer": 0
    },
    {
        "question": "Netflix analyzes your viewing history and compares it with millions of other users to recommend movies you might like, without knowing your exact preferences beforehand. This is an example of:",
        "options": [
            "Supervised Learning",
            "Reinforcement Learning",
            "Both Unsupervised and Reinforcement Learning",
            "Unsupervised Learning"
        ],
        "answer": 3
    },
    {
        "question": "In the perceptron model, what is the role of the artificial coordinate x₀ = 1?",
        "options": [
            "To increase the dimensionality of the input space",
            "To normalize the input features",
            "To incorporate the threshold as part of the weight vector",
            "To handle categorical variables"
        ],
        "answer": 2
    },
    {
        "question": "A spam filter is trained on thousands of emails that are manually labeled as 'spam' or 'not spam' by humans. When a new email arrives, it classifies it based on patterns learned from the labeled data. This uses:",
        "options": [
            "Supervised Learning",
            "Reinforcement Learning",
            "Unsupervised Learning",
            "Both Supervised and Unsupervised Learning"
        ],
        "answer": 0
    },
    {
        "question": "The PLA algorithm updates weights only when a training example is correctly classified.",
        "options": [
            "True",
            "False"
        ],
        "answer": 1
    },
    {
        "question": "Given a perceptron with weights w = [2, -1, 3] and input x = [1, 4, -2], what is the output h(x)?",
        "options": [
            "+1",
            "0",
            "Undefined",
            "-1"
        ],
        "answer": 3
    },
    {
        "question": "Unsupervised learning answers a given question using an answer that is ……… .",
        "options": [
            "provided explicitly to the data set",
            "unknown",
            "from sample output",
            "random"
        ],
        "answer": 1
    },
    {
        "question": "Which of the following best describes the fundamental premise of machine learning according to the lecture?",
        "options": [
            "We can always derive mathematical formulas for any pattern",
            "Learning requires complete knowledge of the underlying process",
            "A pattern exists, we cannot pin it down mathematically, but we have data on it",
            "Machine learning replaces the need for data with theoretical models"
        ],
        "answer": 2
    },
    {
        "question": "In reinforcement learning, the training data consists of (input, correct output) pairs.",
        "options": [
            "False",
            "True"
        ],
        "answer": 0
    },
    {
        "question": "Given a dataset of 50 examples, a threshold ε of 0.17, and 20 hypotheses; calculate the RHS of the Hoeffding inequality",
        "options": [
            "2.15",
            "2.22",
            "1.87",
            "3.42"
        ],
        "answer": 1
    },
    {
        "question": "Consider a credit approval problem with 10 features. After adding the artificial coordinate, what is the dimension of the weight vector w in the perceptron model?",
        "options": [
            "10",
            "9",
            "12",
            "11"
        ],
        "answer": 3
    },
    {
        "question": "The hypothesis set H in the learning diagram represents:",
        "options": [
            "The set of all possible candidate formulas",
            "The training examples",
            "The learning algorithm parameters",
            "The target function family"
        ],
        "answer": 0
    },
    {
        "question": "If the PLA algorithm converges, it guarantees that the final hypothesis g will achieve zero error on future unseen data.",
        "options": [
            "False",
            "True"
        ],
        "answer": 0
    },
    {
        "question": "In the movie rating prediction example, what type of learning problem is being solved?",
        "options": [
            "Unsupervised learning",
            "Reinforcement learning",
            "Supervised learning",
            "Semi-supervised learning"
        ],
        "answer": 2
    },
    {
        "question": "Given the weight update rule w ← w + yx in PLA, if y = +1 and the point is misclassified, what effect does this update have?",
        "options": [
            "It decreases the dot product wᵀx",
            "It increases the dot product wᵀx",
            "It rotates w away from x",
            "It normalizes the weight vector"
        ],
        "answer": 1
    },
    {
        "question": "The learning model consists of both the hypothesis set and the learning algorithm.",
        "options": [
            "True",
            "False"
        ],
        "answer": 0
    },
    {
        "question": "In unsupervised learning, the training data provides:",
        "options": [
            "Input-output pairs with correct labels",
            "Inputs with graded feedback on outputs",
            "Complete mathematical specification of the target",
            "Only input data without explicit outputs"
        ],
        "answer": 3
    },
    {
        "question": "A perceptron with weights w = [-1, 2, 0] is applied to input x = [1, 3, 1]. What is the value of wᵀx before applying the sign function?",
        "options": [
            "-5",
            "7",
            "5",
            "-7"
        ],
        "answer": 2
    },
    {
        "question": "The final hypothesis g is chosen from the hypothesis set H based on the training examples.",
        "options": [
            "False",
            "True"
        ],
        "answer": 1
    }
];

const ds2 = [
    {
        "question": "Given N=1000 examples, M=100 hypotheses, and ε=0.05, what is the upper bound on the probability that |E_in(g) - E_out(g)| > ε using the Hoeffding-Union bound?",
        "options": [
            "0.034",
            "0.451",
            "1.348",
            "2.750"
        ],
        "answer": 2
    },
    {
        "question": "The '1000 fair coins' analogy highlights a key problem in learning. What is it?",
        "options": [
            "With many hypotheses (M), one might get a low E_in purely by chance, even if its E_out is high",
            "Learning is a random process, just like flipping a coin",
            "A sample size of 10 is too small for any learning",
            "Hoeffding's inequality is unreliable for large M"
        ],
        "answer": 0
    },
    {
        "question": "In the bin analogy, μ represents the true, unknown probability of red marbles. In the learning context, what is the exact equivalent of μ for a specific hypothesis h?",
        "options": [
            "The hypothesis g chosen by the algorithm",
            "The unknown target function f",
            "E_in(h) (The in-sample error)",
            "E_out(h) (The out-of-sample error)"
        ],
        "answer": 3
    },
    {
        "question": "In the bin analogy, ν represents the fraction of red marbles in the sample. What is the equivalent in the learning context for a hypothesis h?",
        "options": [
            "The probability of error on a new, unseen point",
            "The target function f(x)",
            "The out-of-sample error, E_out(h)",
            "The in-sample error, E_in(h)"
        ],
        "answer": 3
    },
    {
        "question": "The lecture states that applying Hoeffding to a single, fixed h is 'verification', not learning. Why?",
        "options": [
            "Because E_in is not guaranteed to be small",
            "Because the bound 2e^(-2ε²N) is too loose",
            "Because the algorithm didn't choose h; it was given h. Learning involves a choice from H",
            "Because verification requires a mathematical proof, not data"
        ],
        "answer": 2
    },
    {
        "question": "When mapping the bin analogy to learning, what does a single 'red marble' represent?",
        "options": [
            "A training point x where the hypothesis h agrees with the target f",
            "A training point (x, y) from the dataset",
            "A hypothesis h from the set H",
            "A training point x where the hypothesis h disagrees with the target f"
        ],
        "answer": 3
    },
    {
        "question": "According to the properties of Hoeffding's Inequality P[|ν-μ|>ε] ≤ 2e^(-2ε²N), which variable is the bound independent of?",
        "options": [
            "μ (the true probability in the bin)",
            "N (the sample size)",
            "ε (the tolerance)",
            "The value of ν"
        ],
        "answer": 0
    },
    {
        "question": "Based on the review of Lecture 1, learning is necessary when a pattern exists, we have data, but...",
        "options": [
            "We cannot pin the pattern down mathematically",
            "The data is too large to process",
            "The hypothesis set H is infinite",
            "The target function f is non-deterministic"
        ],
        "answer": 0
    },
    {
        "question": "Analyze the final inequality: P[|E_in(g) - E_out(g)| > ε] ≤ 2Me^(-2ε²N). What is the 'price' for having a larger hypothesis set (a larger M)?",
        "options": [
            "The bound becomes tighter (smaller), which is good",
            "It forces ε to become smaller",
            "It requires N to be smaller",
            "The bound becomes looser (larger), meaning we have less certainty that E_in ≈ E_out"
        ],
        "answer": 3
    },
    {
        "question": "Lecture 1 concludes that learning an unknown function is 'Impossible'. What is the logical reason for this?",
        "options": [
            "The function can assume any value outside the data we have",
            "The data set is always finite",
            "The hypothesis set H might not contain f",
            "Computers are not powerful enough"
        ],
        "answer": 0
    },
    {
        "question": "Given that learning is logically impossible, what is the key concept introduced in Lecture 2 to make it feasible?",
        "options": [
            "Using a more complex hypothesis set H",
            "Finding a mathematical formula for f",
            "Using the Perceptron Learning Algorithm",
            "Switching from a deterministic to a probabilistic (P.A.C.) framework"
        ],
        "answer": 3
    },
    {
        "question": "If a sample of N=100 marbles has ν=0.4 (40% red), Hoeffding's inequality allows us to say that μ is...",
        "options": [
            "exactly 0.4",
            "completely unknown, as the sample could be a fluke",
            "probably close to 0.4, with a quantifiable bound on the probability of it being far off",
            "definitely not 0.9 (assuming a low probability bound)"
        ],
        "answer": 2
    },
    {
        "question": "The final bound P[|E_in(g) - E_out(g)| > ε] ≤ 2Me^(-2ε²N) is derived from the 'union bound'. What is the core logic of this step?",
        "options": [
            "The probability of a union of events is at most the sum of their individual probabilities",
            "All hypotheses h_m are independent of each other",
            "The probability of a union of events is the product of their probabilities",
            "E_in(g) is always 0"
        ],
        "answer": 0
    },
    {
        "question": "How many examples N are needed to guarantee that for M=10 hypotheses, the probability of |E_in(g) - E_out(g)| > 0.1 is at most 0.05?",
        "options": [
            "150",
            "2000",
            "300",
            "100"
        ],
        "answer": 2
    },
    {
        "question": "The lecture states that μ ≈ ν is 'P.A.C.'. This implies that the statement is:",
        "options": [
            "Perfectly And Completely (True)",
            "Proven And Computable",
            "Probably Approximately Correct",
            "Probabilistically Accurate (to) ε"
        ],
        "answer": 2
    },
    {
        "question": "The outline mentions 'A dilemma and a solution'. Based on the lecture, what is the dilemma?",
        "options": [
            "We need N to be large, but large datasets are expensive",
            "f is unknown, so E_out can never be measured",
            "If we check only one h, we can verify it but we haven't 'learned'. If we check many h's (large M), one might look good just by chance",
            "The sample ν can be mostly green while the bin μ is mostly red"
        ],
        "answer": 2
    },
    {
        "question": "E_in(h) is the fraction of errors on the sample. How is E_out(h) formally defined?",
        "options": [
            "The probability P[h(x) ≠ f(x)] over the entire input distribution P(x)",
            "The error on a different test sample",
            "The limit of E_in(h) as N → ∞",
            "1 - E_in(h)"
        ],
        "answer": 0
    },
    {
        "question": "According to the review diagram, what are the two main inputs to the 'Learning algorithm' A?",
        "options": [
            "The unknown target function f and the final hypothesis g",
            "The bin μ and the sample ν",
            "The probability distribution P and the number of examples N",
            "The data set (x_i, y_i) and the hypothesis set H"
        ],
        "answer": 3
    },
    {
        "question": "In the learning analogy, the bin is filled with marbles representing all x in X. A marble is colored green if...",
        "options": [
            "h(x) = +1",
            "f(x) = +1",
            "h(x) = f(x)",
            "h(x) ≠ f(x)"
        ],
        "answer": 2
    },
    {
        "question": "What 'bad event' is being bounded by the Hoeffding-Union inequality P[|E_in(g) - E_out(g)| > ε] ≤ 2Me^(-2ε²N)?",
        "options": [
            "The event that our chosen hypothesis g has E_in = 0",
            "The event that f is not in H",
            "The event that the algorithm picks a g where the in-sample error is a poor approximation (off by > ε) of the true out-of-sample error",
            "The event that N < M"
        ],
        "answer": 2
    },
    {
        "question": "According to the Hoeffding-Union bound (2Me^(-2ε²N)), if we increase M (the number of hypotheses) while N and ε are fixed, what is the impact on our guarantee?",
        "options": [
            "The bound gets tighter (better), so we are more certain",
            "The bound is not affected, as M is not in the exponent",
            "The bound gets looser (worse), meaning we have less certainty that E_in ≈ E_out",
            "This guarantees E_in = 0"
        ],
        "answer": 2
    },
    {
        "question": "According to the bound 2Me^(-2ε²N), if we increase N (the number of examples) while M and ε are fixed, what is the effect?",
        "options": [
            "The probability bound increases (gets worse)",
            "The probability bound decreases (gets better), meaning we have more certainty that E_in ≈ E_out",
            "The bound is not affected by N",
            "The bound only changes if M changes"
        ],
        "answer": 1
    },
    {
        "question": "Which scenario from the lecture best provides a written example of the Union Bound dilemma (i.e., why M > 1 is a problem)?",
        "options": [
            "A single fair coin tossed 10 times has a ≈ 0.1% chance of 10 heads",
            "A single bin ν being close to μ",
            "Tossing 1000 fair coins 10 times each and having a ≈ 63% chance that some coin gets 10 heads",
            "The PLA algorithm converging on a dataset"
        ],
        "answer": 2
    },
    {
        "question": "What is the 'best' way to compensate for the 'bad event' (a large bound) caused by using a very large hypothesis set (large M)?",
        "options": [
            "Decrease ε to 0.01",
            "Ensure the algorithm is simple like PLA",
            "Hope that the 'BINGO' scenario doesn't happen",
            "Increase the number of examples (N) significantly to make the exponential term e^(-2ε²N) very small"
        ],
        "answer": 3
    },
    {
        "question": "If a dataset is known to be linearly separable, what does the Perceptron Learning Algorithm (PLA) guarantee?",
        "options": [
            "It will find the optimal line with the maximum margin",
            "It will converge in a finite number of steps to a g with E_in(g) = 0",
            "It will guarantee that E_out(g) = 0",
            "It will run faster than any other algorithm"
        ],
        "answer": 1
    }
];


const ds3 = [
    {
        "question": "What is the primary practical difference between the standard PLA and the Pocket Algorithm?",
        "options": [
            "PLA only works for classification, Pocket works for regression.",
            "PLA updates weights on any error, while Pocket only keeps the set of weights w that has the lowest E_in encountered so far.",
            "Pocket is guaranteed to converge on non-separable data, while PLA is not.",
            "Pocket uses the pseudo-inverse, while PLA uses iterative updates."
        ],
        "answer": 1
    },
    {
        "question": "Based on the graphs for PLA vs. Pocket E_in evolution, what is a key difference in their behavior?",
        "options": [
            "PLA's E_in is always 0.",
            "Pocket's E_in and E_out can increase and decrease, while PLA's only decrease.",
            "PLA's E_in and E_out jump up and down, while Pocket's E_in and E_out only ever decrease or stay flat.",
            "Both algorithms show identical E_in performance."
        ],
        "answer": 2
    },
    {
        "question": "When is the best situation to use the standard PLA?",
        "options": [
            "When the data is not linearly separable, but you need a quick answer.",
            "When you are certain the data is linearly separable, as it will converge to E_in = 0.",
            "When you want to find the line with the absolute minimum E_in, regardless of separability.",
            "When the dataset is very large and non-separable."
        ],
        "answer": 1
    },
    {
        "question": "When is it necessary to use the Pocket Algorithm instead of PLA?",
        "options": [
            "When the data is not linearly separable (or you're unsure). PLA would run forever, but Pocket will find the best linear hypothesis it can.",
            "When you have more than 2 dimensions.",
            "When the data is perfectly linearly separable.",
            "When you want the algorithm to run as fast as possible."
        ],
        "answer": 0
    },
    {
        "question": "What does the PLA guarantee for linearly separable data, which the Pocket algorithm does not necessarily guarantee?",
        "options": [
            "It will find the optimal line (max margin).",
            "It will find the w with the lowest E_out.",
            "It will find a w with E_in = 0 in a finite number of steps.",
            "It will find the pseudo-inverse."
        ],
        "answer": 2
    },
    {
        "question": "What does the Pocket Algorithm guarantee for non-linearly separable data (given enough iterations)?",
        "options": [
            "It will eventually find a nonlinear boundary to separate the data.",
            "It will converge to E_in = 0.",
            "It will return the w vector that corresponds to the lowest E_in it encountered during its run.",
            "It will report that the data is not separable and stop."
        ],
        "answer": 2
    },
    {
        "question": "Given the digit classification problem ('1' vs '5') shown in the slides, which is clearly not perfectly linearly separable, which algorithm is the most appropriate choice?",
        "options": [
            "Standard PLA, because it's fast.",
            "Linear Regression, because it's a 'one-shot' algorithm.",
            "Pocket Algorithm, because it will find a linear separator with the best possible E_in for this non-separable data.",
            "Nonlinear Transformation, as it's the only way."
        ],
        "answer": 2
    },
    {
        "question": "What is the primary difference between Linear Classification and Linear Regression based on their output?",
        "options": [
            "Classification outputs a real number (e.g., dollar amount), Regression outputs a category (e.g., yes/no).",
            "Classification outputs a category (e.g., ±1), Regression outputs a real-valued number (e.g., dollar amount).",
            "Classification uses squared error, Regression uses a 0/1 error.",
            "There is no difference; they are the same problem."
        ],
        "answer": 1
    },
    {
        "question": "What error measure is standard for linear regression?",
        "options": [
            "Squared error: (h(x) - y)²",
            "Binary error: [[h(x) ≠ y]]",
            "Absolute error: |h(x) - y|",
            "The Hoeffding Inequality bound."
        ],
        "answer": 0
    },
    {
        "question": "The in-sample error for linear regression E_in(w) can be written in matrix form as:",
        "options": [
            "(1/N)(Xw - y)",
            "(1/N)||Xw - y||²",
            "(1/N)Xᵀ(Xw - y)",
            "(2/N)(XᵀXw - Xᵀy)"
        ],
        "answer": 1
    },
    {
        "question": "How does the linear regression algorithm find the optimal weights w?",
        "options": [
            "It uses an iterative process like PLA.",
            "It finds an analytic solution by setting the gradient ∇E_in(w) to 0.",
            "It keeps the best weights in a 'pocket'.",
            "It tests every possible w from the hypothesis set."
        ],
        "answer": 1
    },
    {
        "question": "What is the analytic solution for the optimal weights w in linear regression?",
        "options": [
            "w = (XᵀX) Xᵀy",
            "w = X y",
            "w = (XᵀX)⁻¹ Xᵀy",
            "w = (X Xᵀ)⁻¹ X y"
        ],
        "answer": 2
    },
    {
        "question": "The term X† = (XᵀX)⁻¹ Xᵀ is known as the:",
        "options": [
            "Inverse of X",
            "Transpose of X",
            "Pseudo-inverse of X",
            "Identity matrix"
        ],
        "answer": 2
    },
    {
        "question": "If you use linear regression for a binary (±1) classification problem, what is the best use for the resulting w?",
        "options": [
            "It is the final classifier g(x) = wᵀx.",
            "It is guaranteed to have E_in = 0.",
            "It serves as a good initial set of weights for another algorithm, like Pocket.",
            "It is meaningless, as regression cannot be used for classification."
        ],
        "answer": 2
    },
    {
        "question": "Given a regression model h(x) = 3x₁ + 2x₂ - 1 (where x₀=1, w₀=-1). What is the squared error for the data point x=(2, 1) with true label y=8?",
        "options": [
            "1",
            "7",
            "9",
            "25"
        ],
        "answer": 2
    },
    {
        "question": "The lecture shows data that is not linearly separable (circles inside, crosses outside). Why can a standard linear model not solve this?",
        "options": [
            "The data has too many points.",
            "A single line cannot separate an inner circle from an outer ring.",
            "The data is in 3 dimensions.",
            "The PLA algorithm is not powerful enough."
        ],
        "answer": 1
    },
    {
        "question": "What is the key insight that allows 'linear models' to solve nonlinear problems?",
        "options": [
            "The models must be linear in the inputs x.",
            "The algorithms (PLA, Regression) work because they are linear in the weights w.",
            "By using the Pocket algorithm, any problem becomes linear.",
            "By getting more data N, the problem becomes linear."
        ],
        "answer": 1
    },
    {
        "question": "To solve the circular data problem, the lecture transforms the input x = (x₁, x₂) to a new feature space z. What is this transformation Φ(x)?",
        "options": [
            "Φ(x) = (1, x₁, x₂)",
            "Φ(x) = (x₁, x₁²)",
            "Φ(x) = (x₁², x₂²)",
            "Φ(x) = (sin(x₁), cos(x₂))"
        ],
        "answer": 2
    },
    {
        "question": "After the transformation Φ(x₁, x₂) = (x₁², x₂²), the circular boundary in the original X space becomes what in the new Z space?",
        "options": [
            "A smaller circle",
            "A linear boundary",
            "A parabola",
            "Still a circular boundary"
        ],
        "answer": 1
    },
    {
        "question": "If your input space is x = (x₁, x₂) and you apply a nonlinear transformation z = Φ(x) = (1, x₁, x₂, x₁x₂, x₁², x₂²), what is the dimensionality (d+1) of your weight vector w?",
        "options": [
            "2",
            "4",
            "5",
            "6"
        ],
        "answer": 3
    },
    {
        "question": "The lecture gives a real-world example of a nonlinear feature: 'years in residence' for credit approval. Why is this nonlinear?",
        "options": [
            "Because 'years' is not a number.",
            "Because the effect on credit isn't a simple line (e.g., <1 year is bad, >5 years is good, but in between doesn't matter much).",
            "Because it must be multiplied by 'annual salary'.",
            "Because credit approval is a classification problem."
        ],
        "answer": 1
    },
    {
        "question": "What is the cost or danger of using a complex nonlinear transformation (e.g., one that creates 1000 features from 2)?",
        "options": [
            "It makes the math (like pseudo-inverse) impossible.",
            "It significantly increases the effective number of hypotheses (or M), which makes the Hoeffding bound looser (worse) and increases the risk of overfitting.",
            "It guarantees E_in = 0, which is bad.",
            "It slows down the computer."
        ],
        "answer": 1
    },
    {
        "question": "What is the 'raw' input representation for the handwritten digits shown in the slides?",
        "options": [
            "A vector x of 2 features: intensity and symmetry.",
            "A vector x of 256 dimensions (pixels) + x₀.",
            "A single number (e.g., '1' or '5').",
            "A 2D matrix of w weights."
        ],
        "answer": 1
    },
    {
        "question": "What is the 'feature-based' input representation used for the digit classification example?",
        "options": [
            "A vector x = (x₀, x₁, x₂) where x₁ is intensity and x₂ is symmetry.",
            "A vector of 256 pixel values.",
            "The pseudo-inverse of the image.",
            "The E_in and E_out values."
        ],
        "answer": 0
    },
    {
        "question": "Looking at the '1' vs '5' data plot (blue 'o' vs red 'x'), what can you conclude about this classification problem?",
        "options": [
            "It is perfectly linearly separable.",
            "The features 'intensity' and 'symmetry' are useless.",
            "The data is not perfectly linearly separable, but a line can still achieve low error.",
            "The '1's are more symmetric than the '5's."
        ],
        "answer": 2
    },
    {
        "question": "The first slide shows g must be one of h₁, ..., h_M. The Hoeffding inequality is modified by this, resulting in the 'Union Bound' P[|E_in(g) - E_out(g)| > ε] ≤ ...",
        "options": [
            "Σ_{m=1}^M 2e^(-2ε²N)",
            "(1/M) 2e^(-2ε²N)",
            "2e^(-2ε²N/M)",
            "2Me^(-2ε²N)"
        ],
        "answer": 0
    },
    {
        "question": "The logic P[A or B or ... M] ≤ P[A] + P[B] + ... + P[M] is known as the:",
        "options": [
            "Pseudo-inverse",
            "Nonlinear Transformation",
            "Union Bound",
            "Squared Error"
        ],
        "answer": 2
    },
    {
        "question": "If you have N=1000 examples and M=10 hypotheses, and you want the probability P[|E_in(g) - E_out(g)| > ε] to be at most 0.06, what must ε be? (Use e^(-3) ≈ 0.05)",
        "options": [
            "0.01",
            "0.50",
            "0.10",
            "0.05"
        ],
        "answer": 3
    },
    {
        "question": "Given the 'raw' digit input has d=256 and the 'feature' input has d=2. Why would we prefer the d=2 model?",
        "options": [
            "It's more complex and will likely get E_in=0.",
            "It has a much smaller d (and thus smaller M), so E_in is a better proxy for E_out (less chance of overfitting).",
            "It is guaranteed to be linearly separable.",
            "It uses the pseudo-inverse."
        ],
        "answer": 1
    },
    {
        "question": "What is the first step in the Linear Regression Algorithm?",
        "options": [
            "Compute the pseudo-inverse X†.",
            "Return w = X†y.",
            "Construct the matrix X and vector y from the data set.",
            "Set the gradient to 0."
        ],
        "answer": 2
    }
];


const ds4 = [
    {
        "question": "What is the primary practical difference between the standard PLA and the Pocket Algorithm?",
        "options": [
            "PLA guarantees $E_{in}=0$ on all data, while Pocket only guarantees it on separable data.",
            "PLA updates $w$ on misclassified points, while Pocket *only* updates its stored $w$ if a new $w$ has a better $E_{in}$.",
            "PLA runs in one step using pseudo-inverse, while Pocket is iterative.",
            "PLA is for separable data, while Pocket is for non-separable data exclusively."
        ],
        "answer": 1
    },
    {
        "question": "Based on the graphs for PLA vs. Pocket $E_{in}$ evolution, what is a key difference in their behavior?",
        "options": [
            "PLA's $E_{in}$ shows a steady, non-increasing line, while Pocket's $E_{in}$ jumps up and down.",
            "Pocket's $E_{in}$ (for the pocketed $w$) shows a steady, non-increasing line, while the PLA's $E_{in}$ (for its current $w$) jumps up and down.",
            "Both algorithms show $E_{in}$ only ever decreasing or staying flat.",
            "PLA's $E_{out}$ is always better than Pocket's $E_{out}$."
        ],
        "answer": 1
    },
    {
        "question": "When is the *best* situation to use the standard PLA?",
        "options": [
            "When the data is non-separable, to find the $w$ with the lowest $E_{in}$.",
            "When you are *certain* the data is linearly separable and need to find *a* $w$ with $E_{in}=0$.",
            "When you want to find the optimal $w$ that minimizes $E_{out}$.",
            "When using a nonlinear transformation, as PLA is simpler."
        ],
        "answer": 1
    },
    {
        "question": "When is it *necessary* to use the Pocket Algorithm instead of PLA?",
        "options": [
            "When the data is *not* linearly separable, as PLA would not terminate, while Pocket will find a 'best effort' $w$.",
            "When the data is linearly separable, as Pocket finds the optimal solution faster.",
            "When $d > N$ (more dimensions than data points).",
            "When using a real-valued output (regression)."
        ],
        "answer": 0
    },
    {
        "question": "What does the PLA *guarantee* for linearly separable data, which the Pocket algorithm does not necessarily guarantee?",
        "options": [
            "It will find the $w$ with the lowest $E_{out}$.",
            "It will find the $w$ that minimizes the squared error.",
            "It will find *a* $w$ with $E_{in} = 0$ in a finite number of steps.",
            "It will find the *best* $w$ (max margin) with $E_{in} = 0$."
        ],
        "answer": 2
    },
    {
        "question": "What does the Pocket Algorithm guarantee for non-linearly separable data (given enough iterations)?",
        "options": [
            "It will converge to $E_{in} = 0$.",
            "It will report that the data is not separable and stop.",
            "It will return the $w$ vector that corresponds to the *lowest $E_{in}$* it encountered during its run.",
            "It will find a nonlinear boundary that perfectly separates the data."
        ],
        "answer": 2
    },
    {
        "question": "Given the digit classification problem ('1' vs '5') shown in the slides, which is clearly *not* perfectly linearly separable, which algorithm is the most appropriate choice?",
        "options": [
            "Standard PLA, because it will run forever and eventually find the best line.",
            "Linear Regression, to use $w^T x$ as the final classifier.",
            "Pocket Algorithm, because it will find a linear separator with the best possible $E_{in}$ for this non-separable data.",
            "Standard PLA, because it is guaranteed to find $E_{in}=0$."
        ],
        "answer": 2
    },
    {
        "question": "What is the primary difference between Linear Classification and Linear Regression based on their output $y$?",
        "options": [
            "Classification $y$ is real-valued (e.g., credit score), Regression $y$ is categorical (e.g., $\\pm 1$).",
            "Classification $y$ is categorical (e.g., $\\pm 1$), Regression $y$ is real-valued (e.g., credit line $).",
            "Classification $y$ must be 0 or 1, Regression $y$ must be $\\pm 1$.",
            "Classification $y$ is a vector $w$, Regression $y$ is a matrix $X$."
        ],
        "answer": 1
    },
    {
        "question": "What error measure is standard for linear regression?",
        "options": [
            "Squared error: $(h(x) - y)^2$",
            "0/1 (misclassification) error: $[[sign(h(x)) \\neq y]]$",
            "Hinge loss: $max(0, 1 - y \\cdot h(x))$",
            "Hoeffding bound: $2Me^{-2\\epsilon^2 N}$"
        ],
        "answer": 0
    },
    {
        "question": "The in-sample error for linear regression $E_{in}(w)$ can be written in matrix form as:",
        "options": [
            "$\\frac{1}{N}(Xw - y)$",
            "$\\frac{1}{N}||Xw - y||^2$",
            "$\\frac{1}{N}(Xw - y)^T(Xw - y)$",
            "$\\frac{1}{N} \\sum_{n=1}^{N} (w^T x_n - y_n)$"
        ],
        "answer": 1
    },
    {
        "question": "How does the linear regression algorithm find the optimal weights $w$?",
        "options": [
            "It iteratively updates $w$ using the PLA rule.",
            "It finds an analytic solution by setting the gradient $\\nabla E_{in}(w)$ to 0.",
            "It iteratively updates $w$ using the Pocket algorithm rule.",
            "It uses a nonlinear transformation $\\Phi(x)$ to find $w$."
        ],
        "answer": 1
    },
    {
        "question": "What is the analytic solution for the optimal weights $w$ in linear regression?",
        "options": [
            "$w = (X X^T)^{-1} X^T y$",
            "$w = X^T y$",
            "$w = (X^T X)^{-1} X^T y$",
            "$w = (X^T X) X^T y$"
        ],
        "answer": 2
    },
    {
        "question": "The term $X^{\\dagger} = (X^T X)^{-1} X^T$ is known as the:",
        "options": [
            "Inverse of X, $X^{-1}$",
            "Transpose of X, $X^T$",
            "Pseudo-inverse of X",
            "Gradient of X, $\\nabla X$"
        ],
        "answer": 2
    },
    {
        "question": "If you use linear regression for a binary ($\\pm 1$) classification problem, what is the *best* use for the resulting $w$?",
        "options": [
            "It is the final, optimal classifier $g(x) = sign(w^T x)$.",
            "It is guaranteed to have $E_{in}=0$.",
            "It serves as a *good initial set of weights* for an iterative algorithm, like Pocket.",
            "It is meaningless, as regression uses squared error and classification uses 0/1 error."
        ],
        "answer": 2
    },
    {
        "question": "Given a regression model $h(x) = 3x_1 + 2x_2 - 1$. What is the *squared error* for the data point $x=(2, 1)$ with true label $y=8$?",
        "options": [
            "1 (because $h(x)=7$ and $y=8$)",
            "7 (the value of $h(x)$)",
            "9 (because $h(x)=7$, $y=8$, and $(7-8)^2 = 1$ is wrong, $h(x) = 3(2) + 2(1) - 1 = 7$. Error is $(7-8)^2 = (-1)^2 = 1$ -- *Self-correction: Ah, my distractors are bad. Let me fix the answer.* $h(x) = 3(2) + 2(1) - 1 = 6 + 2 - 1 = 7$. $E = (h(x) - y)^2 = (7-8)^2 = (-1)^2 = 1$. The original answer '2' pointed to '9'. Let me re-calculate. $h(x) = 3(2) + 2(1) - 1 = 7$. $y=8$. Error = $(h(x)-y)^2 = (7-8)^2 = 1$. The correct answer is 1. The original 'answer: 2' (pointing to 9) was wrong. I will correct this question and its answer.)",
            "1"
        ],
        "answer": 3
    },
    {
        "question": "Given a regression model $h(x) = 2x_1 + 1x_2 + 3$ (where $x_0=1, w_0=3$). What is the *squared error* for the data point $x=(1, 2)$ with true label $y=5$?",
        "options": [
            "4",
            "7",
            "2",
            "9"
        ],
        "answer": 0
    },
    {
        "question": "The lecture shows data that is not linearly separable (circles inside, crosses outside). Why can a standard linear model not solve this?",
        "options": [
            "Because $E_{in}$ cannot be computed for this data.",
            "Because a single line (a linear model) cannot enclose the 'circle' points while excluding the 'cross' points.",
            "Because the 'cross' points are in the wrong place.",
            "Because the Pocket algorithm would run forever."
        ],
        "answer": 1
    },
    {
        "question": "What is the key insight that allows 'linear models' to solve nonlinear problems?",
        "options": [
            "The algorithms (PLA, Regression) are linear in the *features* $x_i$.",
            "The algorithms (PLA, Regression) are linear in the *weights* $w_i$.",
            "The algorithms are linear in the *output* $y$.",
            "The algorithms are linear in the *number of examples* $N$."
        ],
        "answer": 1
    },
    {
        "question": "To solve the circular data problem, the lecture transforms $x = (x_1, x_2)$ to $z = (x_1^2, x_2^2)$. What is the *hypothesis* $h(x)$ in the *original* $X$ space?",
        "options": [
            "A line: $w_1 x_1 + w_2 x_2 + w_0 > 0$",
            "A circle/ellipse: $w_1 x_1^2 + w_2 x_2^2 + w_0 > 0$",
            "A parabola: $w_1 x_1^2 + w_2 x_2 + w_0 > 0$",
            "A quadratic: $w_1 x_1 + w_2 x_2 + w_3 x_1 x_2 + w_0 > 0$"
        ],
        "answer": 1
    },
    {
        "question": "After the transformation $\\Phi(x_1, x_2) = (x_1^2, x_2^2)$, a circular boundary in $X$ space becomes what in the new $Z$ space?",
        "options": [
            "A linear boundary",
            "A circular boundary",
            "A quadratic boundary",
            "A point"
        ],
        "answer": 0
    },
    {
        "question": "If your input $x$ is $d$-dimensional, and you apply a full quadratic transformation $\\Phi(x)$ (including 1, $x_i$, $x_i x_j$, $x_i^2$), what is the approximate dimensionality of the new $Z$ space?",
        "options": [
            "$d$",
            "$2d$",
            "$d^2 / 2$",
            "$d^3$"
        ],
        "answer": 2
    },
    {
        "question": "The lecture gives a real-world example of a nonlinear feature: 'years in residence' for credit approval. Why is this nonlinear?",
        "options": [
            "Because a simple linear term $w_i x_i$ cannot capture the complex logic (e.g., $<1$ year is bad, $>5$ years is good).",
            "Because 'years' must be squared to be useful ($x_i^2$).",
            "Because 'years' must be multiplied by 'salary' ($x_i x_j$).",
            "Because 'years' is a categorical, not a numerical, feature."
        ],
        "answer": 0
    },
    {
        "question": "What is the primary *risk* of using a very complex nonlinear transformation $\\Phi(x)$?",
        "options": [
            "It makes $E_{in}$ very high.",
            "It makes the pseudo-inverse $X^\\dagger$ impossible to compute.",
            "It makes the model too simple to capture the true pattern.",
            "It increases $M$ (model complexity), making $E_{in}$ a poor estimate of $E_{out}$ (overfitting)."
        ],
        "answer": 3
    },
    {
        "question": "What is the 'raw' input representation for the handwritten digits shown in the slides?",
        "options": [
            "$x=(x_0, x_1, x_2)$ where $x_1$=intensity, $x_2$=symmetry.",
            "$x=(x_0, x_1, ..., x_{256})$ where $x_i$ is a pixel value.",
            "$x=(x_0, x_1, ..., x_{16})$ for a 16x16 image.",
            "$x=(w_0, w_1, ..., w_{256})$"
        ],
        "answer": 1
    },
    {
        "question": "What is the 'feature-based' input representation used for the digit classification example?",
        "options": [
            "$x = (x_0, x_1, x_2)$ where $x_1$=intensity, $x_2$=symmetry.",
            "$x = (x_0, x_1, ..., x_{256})$ where $x_i$ is a pixel value.",
            "$x = (x_0, x_1)$ where $x_1$=average intensity.",
            "$x = (x_0, x_2)$ where $x_2$=average symmetry."
        ],
        "answer": 0
    },
    {
        "question": "Looking at the '1' vs '5' data plot (blue 'o' vs red 'x'), what can you conclude about this classification problem?",
        "options": [
            "The features are useless as the classes are perfectly mixed.",
            "A linear boundary can achieve $E_{in}=0$.",
            "The data is *not* perfectly linearly separable, but a linear boundary can still achieve a low $E_{in}$.",
            "A nonlinear transformation is *required* to get any separation."
        ],
        "answer": 2
    },
    {
        "question": "The first slide reviews the 'Union Bound' $\\mathbb{P}[|E_{in}(g)-E_{out}(g)|>\\epsilon] \\le ...$",
        "options": [
            "$\\sum_{m=1}^{M} 2e^{-2\\epsilon^2 N}$",
            "$\(\\sum_{m=1}^{M} 2e^{-2\\epsilon^2 N}\)^M$",
            "$2Me^{-2\\epsilon^2 N}$",
            "$2e^{-2\\epsilon^2 N}$"
        ],
        "answer": 0
    },
    {
        "question": "The logic $\\mathbb{P}[A \\text{ or } B] \\le \\mathbb{P}[A] + \\mathbb{P}[B]$ is known as the:",
        "options": [
            "Hoeffding Inequality",
            "Pseudo-inverse Law",
            "Union Bound",
            "Bayes' Theorem"
        ],
        "answer": 2
    },
    {
        "question": "If $N=1000, M=10$, and $\\epsilon=0.05$, what is the Hoeffding-Union bound $2Me^{-2\\epsilon^2 N}$? (Note $e^{-5} \\approx 0.0067$)",
        "options": [
            "$\\approx 0.0067$",
            "$\\approx 0.0134$",
            "$\\approx 0.134$",
            "$\\approx 0.00067$"
        ],
        "answer": 2
    },
    {
        "question": "Given the 'raw' digit input ($d=256$) and 'feature' input ($d=2$). Why prefer $d=2$?",
        "options": [
            "$d=256$ is too complex for linear regression to solve.",
            "The $d=2$ model has a much smaller $M$ (less complex), so $E_{in}$ is a *better* proxy for $E_{out}$ (less overfitting).",
            "The $d=256$ model is nonlinear, while the $d=2$ model is linear.",
            "The $d=2$ model is guaranteed to have a lower $E_{in}$."
        ],
        "answer": 1
    },
    {
        "question": "What is the *first* step in the Linear Regression Algorithm?",
        "options": [
            "Compute $w = X^\\dagger y$.",
            "Compute the gradient $\\nabla E_{in}(w)$.",
            "Construct the matrix $X$ and vector $y$ from the data set.",
            "Compute the pseudo-inverse $X^\\dagger$."
        ],
        "answer": 2
    },
    {
        "question": "True or False: The pseudo-inverse $X^{\\dagger} = (X^T X)^{-1} X^T$ can only be computed if $X$ is a square matrix.",
        "options": [
            "True",
            "False"
        ],
        "answer": 1
    },
    {
        "question": "True or False: Using a nonlinear transformation $\\Phi(x)$ means the linear regression algorithm is no longer linear.",
        "options": [
            "True",
            "False"
        ],
        "answer": 1
    },
    {
        "question": "True or False: On non-separable data, the standard PLA algorithm is guaranteed to eventually stop and return the best $w$.",
        "options": [
            "True",
            "False"
        ],
        "answer": 1
    },
    {
        "question": "True or False: In the Pocket algorithm, the in-sample error $E_{in}$ of the *pocketed* hypothesis can never increase during the run.",
        "options": [
            "True",
            "False"
        ],
        "answer": 0
    },
    {
        "question": "True or False: Linear regression minimizes the 0/1 misclassification error, $E_{in}$.",
        "options": [
            "True",
            "False"
        ],
        "answer": 1
    }
]

function selectQuiz(quiz) {
    selectedQuiz = quiz;
    let targetView = '';
    let title = '';

    if (quiz === 'database') {
        targetView = 'database-quiz-selection';
        title = 'Select Database Quiz';
    } else if (quiz === 'datastructures') {
        targetView = 'data-structure-quiz-selection';
        title = 'Select Data Structures Quiz';
    } else if (quiz === 'dc') {
        targetView = 'datacommunction-quiz-selection';
        title = 'Select DC Quiz';
    } else if (quiz === 'bigdata') {
        targetView = 'bigdata-quiz-selection';
        title = 'Select Big Data Quiz';
    } else if (quiz === 'dm') {
        targetView = 'dm-quiz-selection';
        title = 'Select DM Quiz';
    } else if (quiz === 'db2') {
        targetView = 'db2-quiz-selection';
        title = 'Select Database-2 Quiz';
    } else if (quiz === 'ir') {
        targetView = 'ir-quiz-selection';
        title = 'Select IR Quiz';
    } else if (quiz === 'bi') {
        targetView = 'bi-quiz-selection';
        title = 'Select BI Quiz';
    } else if (quiz === 'iss') {
        targetView = 'iss-quiz-selection';
        title = 'Select ISS Quiz';
    } else if (quiz === 'pl') {
        targetView = 'pl-quiz-selection';
        title = 'Select PL Quiz';
    } else if (quiz === 'ethics') {
        targetView = 'ethics-quiz-selection';
        title = 'Select Ethics Quiz';
    } else if (quiz === 'sq') {
        targetView = 'sq-quiz-selection';
        title = 'Select Software Quality Quiz';
    } else if (quiz === 'ds') {
        targetView = 'ds-quiz-selection';
        title = 'Select Data Science Quiz';
    }


    pushView(targetView, title);
}








function chooseDatabaseQuiz(variant) {
    databaseQuizVariant = variant;
    totalQuestions = getDatabaseQuestions().length;
    document.getElementById('quiz-title').innerText = `Database Quiz ${variant}`;
    document.getElementById('database-quiz-selection').classList.add('hidden');
    document.getElementById('time-options').classList.remove('hidden');
}


function getDatabaseQuestions() {
    if (databaseQuizVariant === 1) return databaseQuestions1;
    if (databaseQuizVariant === 2) return databaseQuestions2;
    if (databaseQuizVariant === 3) return databaseQuestions3;
    if (databaseQuizVariant === 4) return databaseQuestions4;
    if (databaseQuizVariant === 5) return databaseQuestion5;
    if (databaseQuizVariant === 6) return databaseQuestion6;

}












function chooseDataStructuresQuiz(variant) {
    dataStructureQuizVariant = variant;
    totalQuestions = getDataStructureQuestions().length;
    document.getElementById('quiz-title').innerText = `Data Structures Quiz ${variant}`;
    document.getElementById('data-structure-quiz-selection').classList.add('hidden');
    document.getElementById('time-options').classList.remove('hidden');
}

function getDataStructureQuestions() {
    if (dataStructureQuizVariant === 1) return dataStructureQuestions;
    if (dataStructureQuizVariant === 2) return dataStructureQuestions2;
    if (dataStructureQuizVariant === 3) return dataStructureQuestions3;
}











function chooseDCQuiz(variant) {
    dcQuizVariant = variant;
    totalQuestions = getDCQuestions().length;
    document.getElementById('quiz-title').innerText = `DC Quiz ${variant}`;
    document.getElementById('datacommunction-quiz-selection').classList.add('hidden');
    document.getElementById('time-options').classList.remove('hidden');

}

function getDCQuestions() {
    if (dcQuizVariant === 1) return dcQuestions1;
    if (dcQuizVariant === 2) return dcQuestions2;

}









function choosebigdataQuiz(variant) {
    bigdataQuizVariant = variant;
    totalQuestions = getbigdataQuestions().length;
    document.getElementById('quiz-title').innerText = `bigdata Quiz ${variant}`;
    document.getElementById('bigdata-quiz-selection').classList.add('hidden');
    document.getElementById('time-options').classList.remove('hidden');

}

function getbigdataQuestions() {
    if (bigdataQuizVariant === 1) return bigdataQuestions1;
    if (bigdataQuizVariant === 2) return bigdataQuestions2;
    if (bigdataQuizVariant === 3) return bigdataQuestions3;
    if (bigdataQuizVariant === 4) return bigdataQuestions4;
    if (bigdataQuizVariant === 5) return bigdataQuestions5;
        if (bigdataQuizVariant === 6) return bigdataQuestions6;
    if (bigdataQuizVariant === 7) return bigdataQuestions7;
    if (bigdataQuizVariant === 8) return bigdataQuestions8;
    if (bigdataQuizVariant === 9) return bigdataQuestions9;



}







function choosedmQuiz(variant) {
    dmQuizVariant = variant;
    totalQuestions = getdmQuestions().length;
    document.getElementById('quiz-title').innerText = `dm Quiz ${variant}`;
    document.getElementById('dm-quiz-selection').classList.add('hidden');
    document.getElementById('time-options').classList.remove('hidden');

}

function getdmQuestions() {
    if (dmQuizVariant === 1) return dmQuestions1;
    if (dmQuizVariant === 2) return dmQuestions2;
    if (dmQuizVariant === 3) return dmQuestions3;
}






function choosedb2Quiz(variant) {
    db2QuizVariant = variant;
    totalQuestions = getdb2Questions().length;
    document.getElementById('quiz-title').innerText = `db2 Quiz ${variant}`;
    document.getElementById('db2-quiz-selection').classList.add('hidden');
    document.getElementById('time-options').classList.remove('hidden');

}

function getdb2Questions() {
    if (db2QuizVariant === 1) return db2Questions1;
    if (db2QuizVariant === 2) return db2Questions2;
    if (db2QuizVariant === 3) return db2Questions3;
    if (db2QuizVariant === 4) return db2Questions4;
    if (db2QuizVariant === 5) return db2Questions5;
    if (db2QuizVariant === 6) return db2Questions6;
    if (db2QuizVariant === 7) return db2Questions7;
    if (db2QuizVariant === 8) return db2Questions8;
    if (db2QuizVariant === 9) return db2Questions9;
    if (db2QuizVariant === 10) return db2Questions10;

}









function chooseirQuiz(variant) {
    irQuizVariant = variant;
    totalQuestions = getirQuestions().length;
    document.getElementById('quiz-title').innerText = `ir Quiz ${variant}`;
    document.getElementById('ir-quiz-selection').classList.add('hidden');
    document.getElementById('time-options').classList.remove('hidden');

}

function getirQuestions() {
    if (irQuizVariant === 1) return irQuestions1;
    if (irQuizVariant === 2) return irQuestions2;
    if (irQuizVariant === 3) return irQuestions3;
    if (irQuizVariant === 4) return irQuestions4;
    if (irQuizVariant === 5) return irQuestions5;
        if (irQuizVariant === 6) return irQuestions6;


}









function choosebiQuiz(variant) {
    biQuizVariant = variant;
    totalQuestions = getbiQuestions().length;
    document.getElementById('quiz-title').innerText = `bi Quiz ${variant}`;
    document.getElementById('bi-quiz-selection').classList.add('hidden');
    document.getElementById('time-options').classList.remove('hidden');

}

function getbiQuestions() {
    if (biQuizVariant === 1) return biQuestions1;
    if (biQuizVariant === 2) return biQuestions2;
    if (biQuizVariant === 3) return biQuestions3;
    if (biQuizVariant === 4) return biQuestions4;
        if (biQuizVariant === 5) return biQuestions5;
    if (biQuizVariant === 6) return biQuestions6;


}







function chooseissQuiz(variant) {
    issQuizVariant = variant;
    totalQuestions = getissQuestions().length;
    document.getElementById('quiz-title').innerText = `iss Quiz ${variant}`;
    document.getElementById('iss-quiz-selection').classList.add('hidden');
    document.getElementById('time-options').classList.remove('hidden');
}


function getissQuestions() {
    if (issQuizVariant === 1) return iss1;
    if (issQuizVariant === 2) return iss2;
    if (issQuizVariant === 3) return iss3;

}








function chooseplQuiz(variant) {
    plQuizVariant = variant;
    totalQuestions = getplQuestions().length;
    document.getElementById('quiz-title').innerText = `pl Quiz ${variant}`;
    document.getElementById('pl-quiz-selection').classList.add('hidden');
    document.getElementById('time-options').classList.remove('hidden');
}

function getplQuestions() {
    if (plQuizVariant === 1) return pl1;
    if (plQuizVariant === 2) return pl2;
    if (plQuizVariant === 3) return pl3;
    if (plQuizVariant === 4) return pl4;
    if (plQuizVariant === 5) return pl5;
    if (plQuizVariant === 6) return pl6;


}








function chooseethicsQuiz(variant) {
    ethicsQuizVariant = variant;
    totalQuestions = getethicsQuestions().length;
    document.getElementById('quiz-title').innerText = `Ethics Quiz ${variant}`;
    document.getElementById('ethics-quiz-selection').classList.add('hidden');
    document.getElementById('time-options').classList.remove('hidden');
}

function getethicsQuestions() {
    if (ethicsQuizVariant === 1) return ethics1;
    if (ethicsQuizVariant === 2) return ethics2;
    if (ethicsQuizVariant === 3) return ethics3;
    if (ethicsQuizVariant === 4) return ethics4;
    if (ethicsQuizVariant === 5) return ethics5;
    if (ethicsQuizVariant === 6) return ethics6;
    if (ethicsQuizVariant === 7) return ethics7;
    if (ethicsQuizVariant === 8) return ethics8;
    if (ethicsQuizVariant === 9) return ethics9;



}








function choosesqQuiz(variant) {
    sqQuizVariant = variant;
    totalQuestions = getsqQuestions().length;
    document.getElementById('quiz-title').innerText = `sq Quiz ${variant}`;
    document.getElementById('sq-quiz-selection').classList.add('hidden');
    document.getElementById('time-options').classList.remove('hidden');
}

function getsqQuestions() {
    if (sqQuizVariant === 1) return sq1;
    if (sqQuizVariant === 2) return sq2;
    if (sqQuizVariant === 3) return sq3;
        if (sqQuizVariant === 4) return sq4;
    if (sqQuizVariant === 5) return sq5;
    if (sqQuizVariant === 6) return sq6;

}




function choosedsQuiz(variant) {
    sqQuizVariant = variant;
    totalQuestions = getdsQuestions().length;
    document.getElementById('quiz-title').innerText = `ds Quiz ${variant}`;
    document.getElementById('ds-quiz-selection').classList.add('hidden');
    document.getElementById('time-options').classList.remove('hidden');
}

function getdsQuestions() {
    if (dsQuizVariant === 1) return ds1;
    if (dsQuizVariant === 2) return ds2;
    if (dsQuizVariant === 3) return ds3;
    if (dsQuizVariant === 4) return ds4;

}







function showTimeInput() {
    document.getElementById('time-options').classList.add('hidden');
    document.getElementById('time-input').classList.remove('hidden');
}

function setTimeLimit() {
    const minutes = parseInt(document.getElementById('time-limit').value);
    if (isNaN(minutes) || minutes < 1) {
        alert("Please enter a valid number of minutes.");
        return;
    }
    if (minutes > 120) {
        alert("Please enter a number between 1-120 minutes.");
        return false;
    }
    timeLimit = minutes * 60;
    updateTimerDisplay(timeLimit);
    document.getElementById('timer').style.visibility = "visible";
    startQuizWithTimer();
}

function startQuizWithoutTime() {
    startQuiz();
}
function startQuizWithTimer() {
    startQuiz();
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 1000);
}
function startQuiz() {
    document.getElementById('time-options').classList.add('hidden');
    document.getElementById('time-input').classList.add('hidden');
    document.getElementById('question-info').classList.remove('hidden');
    document.getElementById('question-box').classList.remove('hidden');
    document.getElementById('timer').classList.remove('hidden');

    userAnswers = new Array(totalQuestions).fill(-1);
    score = 0;


    let quizTitleText = '';
    if (selectedQuiz === 'pl') quizTitleText = `Programming Languages Quiz ${plQuizVariant}`;
    else if (selectedQuiz === 'database') quizTitleText = `Database Quiz ${databaseQuizVariant}`;
    else if (selectedQuiz === 'datastructures') quizTitleText = `Data Structures Quiz ${dataStructureQuizVariant}`;
    else if (selectedQuiz === 'dc') quizTitleText = `Data Communication Quiz ${dcQuizVariant}`;
    else if (selectedQuiz === 'bigdata') quizTitleText = `Big Data Quiz ${bigdataQuizVariant}`;
    else if (selectedQuiz === 'dm') quizTitleText = `Data Mining Quiz ${dmQuizVariant}`;
    else if (selectedQuiz === 'db2') quizTitleText = `Database 2 Quiz ${db2QuizVariant}`;
    else if (selectedQuiz === 'ir') quizTitleText = `Information Retrieval Quiz ${irQuizVariant}`;
    else if (selectedQuiz === 'bi') quizTitleText = `Business Intelligence Quiz ${biQuizVariant}`;
    else if (selectedQuiz === 'iss') quizTitleText = `Information Systems Security Quiz ${issQuizVariant}`;
    else if (selectedQuiz === 'ethics') quizTitleText = `Ethics Quiz ${ethicsQuizVariant}`;
    else if (selectedQuiz === 'sq') quizTitleText = `Software Quality Quiz ${sqQuizVariant}`;
    else if (selectedQuiz === 'ds') quizTitleText = `Data Science Quiz ${dsQuizVariant}`;


    if (quizTitleText) {
        document.getElementById('quiz-title').innerText = quizTitleText;
    }

    loadQuestion();
}










function loadQuestion() {
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';

    let quiz;
    if (selectedQuiz === 'database') {
        quiz = getDatabaseQuestions();
    } else if (selectedQuiz === 'datastructures') {
        quiz = getDataStructureQuestions();
    } else if (selectedQuiz === 'dc') {
        quiz = getDCQuestions();
    }
    else if (selectedQuiz === 'bigdata') {
        quiz = getbigdataQuestions();
    }
    else if (selectedQuiz === 'dm') {
        quiz = getdmQuestions();
    }
    else if (selectedQuiz === 'db2') {
        quiz = getdb2Questions();
    }
    else if (selectedQuiz === 'ir') {
        quiz = getirQuestions();
    }
    else if (selectedQuiz === 'bi') {
        quiz = getbiQuestions();
    }
    else if (selectedQuiz === 'iss') {
        quiz = getissQuestions();
    }
    else if (selectedQuiz === 'pl') {
        quiz = getplQuestions();
    }
    else if (selectedQuiz === 'ethics') {
        quiz = getethicsQuestions();
    }
    else if (selectedQuiz === 'sq') {
        quiz = getsqQuestions();
    }
    else if (selectedQuiz === 'ds') {
        quiz = getdsQuestions();
    }

    document.getElementById('current-question').innerText = currentQuestionIndex + 1;
    document.getElementById('total-questions').innerText = totalQuestions;
    document.getElementById('question').innerText = quiz[currentQuestionIndex].question;

    const options = document.querySelectorAll('.option');
    const currentQuestionOptions = quiz[currentQuestionIndex].options;
    const numOptions = currentQuestionOptions.length;


    options.forEach(option => {
        option.style.display = 'none';
        option.classList.remove('correct', 'wrong');
        option.disabled = false;
    });


    for (let i = 0; i < numOptions && i < 5; i++) {
        options[i].style.display = 'block';
        options[i].innerText = currentQuestionOptions[i];
        options[i].classList.remove('correct', 'wrong');
        options[i].disabled = false;
    }

    showCurrentAnswer();
}








function checkAnswer(selectedIndex) {
    let quiz;

    if (selectedQuiz === 'database') {
        quiz = getDatabaseQuestions();
    } else if (selectedQuiz === 'datastructures') {
        quiz = getDataStructureQuestions();
    } else if (selectedQuiz === 'dc') {
        quiz = getDCQuestions();
    }
    else if (selectedQuiz === 'bigdata') {
        quiz = getbigdataQuestions();
    }
    else if (selectedQuiz === 'dm') {
        quiz = getdmQuestions();
    }
    else if (selectedQuiz === 'db2') {
        quiz = getdb2Questions();
    }
    else if (selectedQuiz === 'ir') {
        quiz = getirQuestions();
    }
    else if (selectedQuiz === 'bi') {
        quiz = getbiQuestions();
    }
    else if (selectedQuiz === 'iss') {
        quiz = getissQuestions();
    }
    else if (selectedQuiz === 'pl') {
        quiz = getplQuestions();
    }
    else if (selectedQuiz === 'ethics') {
        quiz = getethicsQuestions();
    }
    else if (selectedQuiz === 'sq') {
        quiz = getsqQuestions();
    }
    else if (selectedQuiz === 'ds') {
        quiz = getdsQuestions();
    }

    const correctIndex = quiz[currentQuestionIndex].answer;
    const currentQuestionOptions = quiz[currentQuestionIndex].options;
    const numOptions = currentQuestionOptions.length;
    const options = document.querySelectorAll('.option');

    userAnswers[currentQuestionIndex] = selectedIndex;


    options.forEach(option => {
        option.style.display = 'none';
        option.classList.remove('correct', 'wrong');
    });


    for (let i = 0; i < numOptions && i < 5; i++) {
        options[i].style.display = 'block';
        options[i].classList.remove('correct', 'wrong');

        if (i === correctIndex) {
            options[i].classList.add('correct');
        } else if (i === selectedIndex && selectedIndex !== correctIndex) {
            options[i].classList.add('wrong');
        }

        options[i].disabled = true;
    }

    if (selectedIndex === correctIndex) {
        score++;
    }

    if (currentQuestionIndex < totalQuestions - 1) {
        document.getElementById('next-btn').classList.remove('hidden');
    } else {
        document.getElementById('finish-btn').classList.remove('hidden');
    }
}












function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();

        showCurrentAnswer();
    }
}

function showCurrentAnswer() {
    let quiz;

    if (selectedQuiz === 'database') {
        quiz = getDatabaseQuestions();
    } else if (selectedQuiz === 'datastructures') {
        quiz = getDataStructureQuestions();
    } else if (selectedQuiz === 'dc') {
        quiz = getDCQuestions();
    } else if (selectedQuiz === 'bigdata') {
        quiz = getbigdataQuestions();
    } else if (selectedQuiz === 'dm') {
        quiz = getdmQuestions();
    } else if (selectedQuiz === 'db2') {
        quiz = getdb2Questions();
    } else if (selectedQuiz === 'ir') {
        quiz = getirQuestions();
    } else if (selectedQuiz === 'bi') {
        quiz = getbiQuestions();
    }
    else if (selectedQuiz === 'iss') {
        quiz = getissQuestions();
    }
    else if (selectedQuiz === 'pl') {
        quiz = getplQuestions();
    }
    else if (selectedQuiz === 'ethics') {
        quiz = getethicsQuestions();
    }
    else if (selectedQuiz === 'sq') {
        quiz = getsqQuestions();
    }
    else if (selectedQuiz === 'ds') {
        quiz = getdsQuestions();
    }

    const currentQuestionOptions = quiz[currentQuestionIndex].options;
    const numOptions = currentQuestionOptions.length;
    const options = document.querySelectorAll('.option');

    if (userAnswers[currentQuestionIndex] !== -1) {
        const correctIndex = quiz[currentQuestionIndex].answer;
        const userAnswerIndex = userAnswers[currentQuestionIndex];


        options.forEach(option => {
            option.style.display = 'none';
        });


        for (let i = 0; i < numOptions && i < 5; i++) {
            options[i].style.display = 'block';
            options[i].classList.remove('correct', 'wrong');

            if (i === correctIndex) {
                options[i].classList.add('correct');
            } else if (i === userAnswerIndex && userAnswerIndex !== correctIndex) {
                options[i].classList.add('wrong');
            }

            options[i].disabled = true;
        }
    } else {

        options.forEach(option => {
            option.style.display = 'none';
            option.classList.remove('correct', 'wrong');
        });


        for (let i = 0; i < numOptions && i < 5; i++) {
            options[i].style.display = 'block';
            options[i].disabled = false;
            options[i].classList.remove('correct', 'wrong');
        }
    }

    updateNavigationButtons();
}

function updateNavigationButtons() {
    document.getElementById('prev-btn').classList.toggle('hidden', currentQuestionIndex === 0);
    document.getElementById('next-btn').classList.toggle('hidden', currentQuestionIndex === totalQuestions - 1);
    document.getElementById('finish-btn').classList.toggle('hidden', currentQuestionIndex !== totalQuestions - 1);
}


function showResult() {
    clearInterval(timerInterval);
    quizInProgress = false;


    document.getElementById('question-info').classList.add('hidden');
    document.getElementById('question-box').classList.add('hidden');
    document.getElementById('timer').style.visibility = 'hidden';

    document.getElementById('result').classList.remove('hidden');
    document.getElementById('finish-btn').classList.add('hidden');
    document.getElementById('prev-btn').classList.add('hidden');

    const percentage = Math.round((score / totalQuestions) * 100);
    document.getElementById('result').innerHTML = `<h3>Your Score: ${score} out of ${totalQuestions} (${percentage}%)</h3>`;

    document.getElementById('correct-answers').textContent = score;
    document.getElementById('wrong-answers').textContent = totalQuestions - score;
    document.getElementById('score-percentage').textContent = percentage + '%';

    const timeTaken = timeLimit ? Math.floor((new Date() - startTime) / 1000) : 0;
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    document.getElementById('time-taken-value').textContent = `${minutes}m ${seconds}s`;

    document.getElementById('result-details').classList.remove('hidden');
    document.getElementById('post-quiz-buttons').classList.remove('hidden');


    const quizName = `${selectedQuiz.toUpperCase()} Quiz ${getQuizVariant()} - Result`;
    document.getElementById('quiz-title').innerText = quizName;


    const backButton = document.querySelector('.back-to-main-btn');
    if (backButton) backButton.classList.add('hidden');

    updateUserStats(quizName, percentage, timeTaken);

    const restartBtn = document.getElementById('restart-same-quiz');
    if (restartBtn) {
        restartBtn.onclick = restartSameQuiz;
    }
}



function pushView(viewId, title) {

    hideAllViews();


    const view = document.getElementById(viewId);
    if (view) {
        view.classList.remove('hidden');
    }


    document.getElementById('quiz-title').textContent = title;


    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
        searchContainer.classList.toggle('hidden', viewId !== 'quiz-selection');
    }


    navigationStack.push({ view: viewId, title: title });


    updateBackButton();
}


function navigateBack() {
    if (navigationStack.length <= 1) return;


    navigationStack.pop();


    if (quizInProgress && navigationStack[navigationStack.length - 1].view === 'time-options') {

        return;
    }

    const previousView = navigationStack[navigationStack.length - 1];


    hideAllViews();


    const view = document.getElementById(previousView.view);
    if (view) {
        view.classList.remove('hidden');
    }


    document.getElementById('quiz-title').textContent = previousView.title;


    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
        searchContainer.classList.toggle('hidden', previousView.view !== 'quiz-selection');
    }


    updateBackButton();
}


function updateBackButton() {
    const backButton = document.querySelector('.back-to-main-btn');
    if (!backButton) return;

    const currentView = navigationStack[navigationStack.length - 1].view;


    const hideBackButtonPages = [
        'quiz-selection',
        'review-answers',
    ];

    const shouldHide = hideBackButtonPages.includes(currentView);

    backButton.classList.toggle('hidden', shouldHide);


    if (!shouldHide) {
        backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Back';
        backButton.onclick = navigateBack;
        backButton.title = 'Go back to previous page';
    }
}

function hideAllViews() {

    const allViews = [
        'quiz-selection',
        'database-quiz-selection', 'data-structure-quiz-selection', 'datacommunction-quiz-selection',
        'bigdata-quiz-selection', 'dm-quiz-selection', 'db2-quiz-selection', 'ir-quiz-selection',
        'bi-quiz-selection', 'iss-quiz-selection', 'pl-quiz-selection', 'ethics-quiz-selection',
        'sq-quiz-selection', 'ds-quiz-selection',
        'time-options', 'time-input',
        'question-info', 'question-box', 'result', 'result-details', 'post-quiz-buttons', 'review-answers'
    ];

    allViews.forEach(viewId => {
        const element = document.getElementById(viewId);
        if (element) {
            element.classList.add('hidden');
        }
    });


    const timer = document.getElementById('timer');
    if (timer) {
        timer.style.visibility = 'hidden';
    }
}


function getQuizVariant() {
    if (selectedQuiz === 'database') return databaseQuizVariant;
    if (selectedQuiz === 'datastructures') return dataStructureQuizVariant;
    if (selectedQuiz === 'dc') return dcQuizVariant;
    if (selectedQuiz === 'bigdata') return bigdataQuizVariant;
    if (selectedQuiz === 'dm') return dmQuizVariant;
    if (selectedQuiz === 'db2') return db2QuizVariant;
    if (selectedQuiz === 'ir') return irQuizVariant;
    if (selectedQuiz === 'bi') return biQuizVariant;
    if (selectedQuiz === 'iss') return issQuizVariant;
    if (selectedQuiz === 'pl') return plQuizVariant;
    if (selectedQuiz === 'ethics') return ethicsQuizVariant;
    if (selectedQuiz === 'sq') return sqQuizVariant;
    if (selectedQuiz === 'ds') return dsQuizVariant;



    return 1;
}



























function startNewQuiz() {
    location.reload();
}

function updateTimer() {
    timeLimit--;
    if (timeLimit <= 0) {
        clearInterval(timerInterval);
        showResult();
    }
    updateTimerDisplay(timeLimit);
}

function updateTimerDisplay(timeLimit) {
    const minutes = Math.floor(timeLimit / 60);
    const seconds = timeLimit % 60;
    document.getElementById('time-left').innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function backToHome() {
    location.reload();
}
document.getElementById('review-btn').classList.remove('hidden');















function reviewAnswers() {
    let quiz;
    if (selectedQuiz === 'database') quiz = getDatabaseQuestions();
    else if (selectedQuiz === 'datastructures') quiz = getDataStructureQuestions();
    else if (selectedQuiz === 'dc') quiz = getDCQuestions();
    else if (selectedQuiz === 'bigdata') quiz = getbigdataQuestions();
    else if (selectedQuiz === 'dm') quiz = getdmQuestions();
    else if (selectedQuiz === 'db2') quiz = getdb2Questions();
    else if (selectedQuiz === 'ir') quiz = getirQuestions();
    else if (selectedQuiz === 'bi') quiz = getbiQuestions();
    else if (selectedQuiz === 'iss') quiz = getissQuestions();
    else if (selectedQuiz === 'pl') quiz = getplQuestions();
    else if (selectedQuiz === 'ethics') quiz = getethicsQuestions();
    else if (selectedQuiz === 'sq') quiz = getsqQuestions();
    else if (selectedQuiz === 'ds') quiz = getdsQuestions();


    const quizName = `${selectedQuiz.toUpperCase()} Quiz ${getQuizVariant()} - Review`;
    document.getElementById('quiz-title').innerText = quizName;
    document.getElementById('timer').style.visibility = 'hidden';

    const backButton = document.querySelector('.back-to-main-btn');
    if (backButton) backButton.classList.add('hidden');

    let reviewMessage = '<div class="review-container">';
    for (let i = 0; i < totalQuestions; i++) {
        const userAnswerIndex = userAnswers[i];
        const correctAnswerIndex = quiz[i].answer;
        const userAnswerText = userAnswerIndex !== -1 ? quiz[i].options[userAnswerIndex] : '<em>No answer</em>';
        const correctAnswerText = quiz[i].options[correctAnswerIndex];
        const explanation = quiz[i].explanation || 'No explanation available';
        const isCorrect = userAnswerIndex === correctAnswerIndex;

        reviewMessage += `
            <div class="review-question ${isCorrect ? 'correct' : 'wrong'}">
                <p><strong>Question ${i + 1}:</strong> ${quiz[i].question}</p>
                <p><strong>Your Answer:</strong> ${userAnswerText}</p>
                <p><strong>Correct Answer:</strong> ${correctAnswerText}</p>
                <p><strong>Status:</strong> ${isCorrect ? '✅ Correct' : '❌ Wrong'}</p>
        `;


        if (isCorrect) {
            reviewMessage += `
                <button class="show-explanation-btn" onclick="toggleExplanation(${i})" data-question="${i}">
                    <i class="fas fa-lightbulb"></i> Show Explanation
                </button>
                <div class="explanation hidden" id="explanation-${i}">
                    <strong>Explanation:</strong> ${explanation}
                </div>
            `;
        } else {

            reviewMessage += `
                <div class="explanation">
                    <strong>Explanation:</strong> ${explanation}
                </div>
            `;
        }

        reviewMessage += `</div><hr>`;
    }

    reviewMessage += '</div>';

    document.getElementById('result').classList.add('hidden');
    document.getElementById('result-details').classList.add('hidden');
    document.getElementById('post-quiz-buttons').classList.add('hidden');

    document.getElementById('review-answers').innerHTML = reviewMessage;
    document.getElementById('review-answers').classList.remove('hidden');

    const backButtonHTML = `
        <button class="action-btn" onclick="backToResults()" style="margin: 20px auto; display: block;">
            <i class="fas fa-arrow-left"></i> Back to Results
        </button>`;
    document.getElementById('review-answers').innerHTML += backButtonHTML;
}


function backToResults() {

    document.getElementById('review-answers').classList.add('hidden');
    document.getElementById('review-answers').innerHTML = '';


    document.getElementById('result').classList.remove('hidden');
    document.getElementById('result-details').classList.remove('hidden');
    document.getElementById('post-quiz-buttons').classList.remove('hidden');

    const percentage = Math.round((score / totalQuestions) * 100);
    const timeTaken = timeLimit ? Math.floor((new Date() - startTime) / 1000) : 0;
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;

    document.getElementById('result').innerHTML = `
        <h3>Your Score: ${score} out of ${totalQuestions} (${percentage}%)</h3>
    `;
    document.getElementById('correct-answers').textContent = score;
    document.getElementById('wrong-answers').textContent = totalQuestions - score;
    document.getElementById('score-percentage').textContent = percentage + '%';
    document.getElementById('time-taken-value').textContent = `${minutes}m ${seconds}s`;

    const quizName = `${selectedQuiz.toUpperCase()} Quiz ${getQuizVariant()} - Result`;
    document.getElementById('quiz-title').innerText = quizName;


    const backButton = document.querySelector('.back-to-main-btn');
    if (backButton) {
        backButton.classList.add('hidden');
        backButton.style.display = "none";
    }


    navigationStack = navigationStack.filter(item => item.view !== 'review-answers');
}



function confirmResetStats() {

    const modal = document.createElement('div');
    modal.className = 'confirmation-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Confirm Reset</h3>
            <p>Are you sure you want to delete all statistics? This action cannot be undone.</p>
            <div class="modal-buttons">
                <button class="confirm-btn" onclick="resetStats()">Yes, Delete All</button>
                <button class="cancel-btn" onclick="closeModal()">Cancel</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}




function toggleExplanation(questionIndex) {
    const explanationElement = document.getElementById(`explanation-${questionIndex}`);
    const buttonElement = document.querySelector(`button[data-question="${questionIndex}"]`);

    if (explanationElement.classList.contains('hidden')) {
        explanationElement.classList.remove('hidden');
        buttonElement.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Explanation';
    } else {
        explanationElement.classList.add('hidden');
        buttonElement.innerHTML = '<i class="fas fa-lightbulb"></i> Show Explanation';
    }
}




function closeModal() {
    const modal = document.querySelector('.confirmation-modal');
    if (modal) {
        modal.remove();
    }
}

function resetStats() {

    userStats = {
        totalQuizzes: 0,
        totalScore: 0,
        bestScore: 0,
        totalTime: 0,
        recentQuizzes: []
    };


    localStorage.setItem('userStats', JSON.stringify(userStats));


    updateStatsDisplay();


    closeModal();


    alert('All statistics have been reset successfully!');
}

function showAllStatistics() {
    const modal = document.createElement('div');
    modal.className = 'stats-modal';
    modal.innerHTML = `
        <div class="stats-modal-content">
            <div class="stats-modal-header">
                <h2><i class="fas fa-chart-line"></i> Complete Quiz History</h2>
                <button class="close-btn" onclick="closeStatsModal()">&times;</button>
            </div>
            ${generateStatsContent()}
        </div>
    `;

    document.body.appendChild(modal);


    document.body.style.overflow = 'hidden';
}

function closeStatsModal() {
    const modal = document.querySelector('.stats-modal');
    if (modal) {
        modal.remove();
    }
    document.body.style.overflow = 'auto';
}

function generateStatsContent() {
    if (userStats.recentQuizzes.length === 0) {
        return '<div class="no-data"><i class="fas fa-chart-bar" style="font-size: 3rem; margin-bottom: 15px;"></i><p>No quiz data available yet. Start taking quizzes to see your statistics!</p></div>';
    }

    let html = `
        <div class="stats-summary">
            <div class="summary-card">
                <div class="label">Total Quizzes</div>
                <div class="value">${userStats.totalQuizzes}</div>
            </div>
            <div class="summary-card">
                <div class="label">Average Score</div>
                <div class="value">${userStats.totalQuizzes > 0 ? Math.round(userStats.totalScore / userStats.totalQuizzes) : 0}%</div>
            </div>
            <div class="summary-card">
                <div class="label">Best Score</div>
                <div class="value">${userStats.bestScore}%</div>
            </div>
            <div class="summary-card">
                <div class="label">Total Time</div>
                <div class="value">${Math.floor(userStats.totalTime / 60)}m ${userStats.totalTime % 60}s</div>
            </div>
        </div>
        
        <h3><i class="fas fa-history"></i> Quiz History</h3>
        <table class="quiz-history-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Quiz Name</th>
                    <th>Score</th>
                    <th>Time Taken</th>
                </tr>
            </thead>
            <tbody>
    `;

    userStats.recentQuizzes.forEach(quiz => {
        const scoreClass = quiz.score >= 80 ? 'score-excellent' :
            quiz.score >= 60 ? 'score-good' : 'score-poor';

        html += `
            <tr>
                <td>${quiz.date}</td>
                <td>${quiz.name}</td>
                <td class="${scoreClass}">${quiz.score}%</td>
                <td>${quiz.timeTaken ? `${Math.floor(quiz.timeTaken / 60)}m ${quiz.timeTaken % 60}s` : 'N/A'}</td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    return html;
}



function initializeSearch() {
    const searchInput = document.getElementById('quiz-search');
    if (!searchInput) {
        console.log('Search input not found');
        return;
    }

    console.log('Search initialized');

    const quizData = [
        { id: 'database', name: 'Database', keywords: ['db', 'database', 'data', 'sql'] },
        { id: 'datastructures', name: 'Data Structures', keywords: ['data structures', 'ds', 'algorithms', 'structure'] },
        { id: 'dc', name: 'Data Communication', keywords: ['dc', 'communication', 'network', 'networking'] },
        { id: 'bigdata', name: 'Big Data', keywords: ['big data', 'bigdata', 'hadoop', 'spark'] },
        { id: 'dm', name: 'Data Mining', keywords: ['data mining', 'dm', 'mining', 'pattern'] },
        { id: 'db2', name: 'Database 2', keywords: ['db2', 'database 2', 'advanced db', 'advanced database'] },
        { id: 'ir', name: 'Information Retrieval', keywords: ['ir', 'information retrieval', 'search', 'retrieval'] },
        { id: 'bi', name: 'Business Intelligence', keywords: ['bi', 'business intelligence', 'analytics', 'business'] },
        { id: 'iss', name: 'Information Systems Security', keywords: ['iss', 'information systems', 'systems', 'security'] },
        { id: 'pl', name: 'Programming Languages', keywords: ['pl', 'programming languages', 'languages', 'programming'] },
        { id: 'ethics', name: 'Ethics', keywords: ['ethics', 'moral', 'professional', 'ethical'] },
        { id: 'sq', name: 'Software Quality', keywords: ['sq', 'software quality', 'quality', 'software'] },
        { id: 'ds', name: 'Data Science', keywords: ['ds', 'data science', 'science', 'machine learning'] }
    ];


    let noResultsMessage = document.querySelector('.no-results-message');


    if (!noResultsMessage) {
        noResultsMessage = document.createElement('div');
        noResultsMessage.className = 'no-results-message hidden';
        noResultsMessage.innerHTML = `
            <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 10px;"></i>
            <h3>No subjects found</h3>
            <p>Try searching for a different term.</p>
        `;


        const quizSelection = document.getElementById('quiz-selection');
        if (quizSelection) {
            quizSelection.appendChild(noResultsMessage);
        }
    }

    searchInput.addEventListener('input', function (e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        const categoryCards = document.querySelectorAll('#quiz-selection .category-card');

        let visibleCount = 0;

        if (searchTerm === '') {

            categoryCards.forEach(card => {
                card.style.display = 'flex';
            });
            noResultsMessage.classList.add('hidden');
            return;
        }

        categoryCards.forEach(card => {
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            const cardDesc = card.querySelector('p').textContent.toLowerCase();
            const quizId = getQuizIdFromCard(card);
            const quiz = quizData.find(q => q.id === quizId);

            let shouldShow = false;


            if (cardTitle.includes(searchTerm)) {
                shouldShow = true;
            }

            else if (cardDesc.includes(searchTerm)) {
                shouldShow = true;
            }

            else if (quiz) {
                shouldShow = quiz.keywords.some(keyword =>
                    keyword.includes(searchTerm) || searchTerm.includes(keyword)
                );
            }

            else if (quizId && quizId.includes(searchTerm)) {
                shouldShow = true;
            }

            if (shouldShow) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });


        if (visibleCount === 0 && searchTerm !== '') {
            noResultsMessage.classList.remove('hidden');
        } else {
            noResultsMessage.classList.add('hidden');
        }
    });
}

function getQuizIdFromCard(card) {
    const onclickAttr = card.getAttribute('onclick');
    if (onclickAttr) {
        const match = onclickAttr.match(/selectQuiz\('([^']+)'\)/);
        return match ? match[1] : '';
    }
    return '';
}


document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded - initializing search');
    initializeSearch();
});




const backButton = document.querySelector('.back-to-main-btn');


function updateBackButtonVisibility() {

    const currentView = navigationStack[navigationStack.length - 1].view;
    const quizInProgress = !document.getElementById('question-box').classList.contains('hidden');
    const showingResult = !document.getElementById('result').classList.contains('hidden');
    const showingReview = !document.getElementById('review-answers').classList.contains('hidden');



    let showButton = navigationStack.length > 1;


    if (showingResult || showingReview) {
        showButton = false;
    }

    backButton.classList.toggle('hidden', !showButton);
}



function pushView(viewId, title) {

    hideAllViews();


    const view = document.getElementById(viewId);
    if (view) {
        view.classList.remove('hidden');
    }



    function updatePageTitle(viewId, customTitle = '') {
        const titleElement = document.getElementById('quiz-title');

        switch (viewId) {
            case 'quiz-selection':
                titleElement.textContent = 'Select Quiz Category';
                break;

            case 'time-options':
                titleElement.textContent = customTitle || 'Select Time Option';
                break;

            case 'time-input':
                titleElement.textContent = 'Set Time Limit';
                break;

            case 'question-box':

                titleElement.textContent = customTitle || document.getElementById('quiz-title').textContent;
                break;

            case 'result':
                titleElement.textContent = 'Quiz Results';
                break;

            case 'review-answers':
                titleElement.textContent = 'Review Answers';
                break;

            default:

                if (viewId.includes('-quiz-selection')) {
                    titleElement.textContent = customTitle || 'Select Quiz Variant';
                } else {
                    titleElement.textContent = customTitle || 'MaterialX Quiz';
                }
        }
    }

    updatePageTitle(viewId, title);


    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
        searchContainer.classList.toggle('hidden', viewId !== 'quiz-selection');
    }


    navigationStack.push({ view: viewId, title: title });


    managePageState(viewId);


    updateBackButton();
}


function showView(viewInfo) {

    hideAllViews();

    const { view, title } = viewInfo;


    const viewElement = document.getElementById(view);
    if (viewElement) {
        viewElement.classList.remove('hidden');
    }


    document.getElementById('quiz-title').textContent = title;


    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
        searchContainer.classList.toggle('hidden', view !== 'quiz-selection');
    }


    managePageState(view);


    updateBackButton();
}



function managePageState(currentView) {
    const timer = document.getElementById('timer');

    if (currentView === 'time-options' || currentView === 'time-input') {

        if (timer) timer.style.visibility = 'hidden';
        document.getElementById('question-info').classList.add('hidden');
        document.getElementById('question-box').classList.add('hidden');
        document.getElementById('result').classList.add('hidden');
    }
    else if (currentView.includes('question') && quizInProgress) {

        document.getElementById('question-info').classList.remove('hidden');
        document.getElementById('question-box').classList.remove('hidden');
        if (timer && timeLimit > 0) {
            timer.style.visibility = 'visible';
        }
    }
    else if (currentView === 'result') {

        document.getElementById('result').classList.remove('hidden');
        document.getElementById('result-details').classList.remove('hidden');
        document.getElementById('post-quiz-buttons').classList.remove('hidden');
    }
}


function navigateBack() {
    if (navigationStack.length <= 1) return;

    const currentView = navigationStack[navigationStack.length - 1].view;


    if (quizInProgress && currentView.includes('question')) {

        const timeOptionsIndex = navigationStack.findIndex(item => item.view === 'time-options');
        if (timeOptionsIndex !== -1) {

            navigationStack = navigationStack.slice(0, timeOptionsIndex + 1);
            showView(navigationStack[navigationStack.length - 1]);
            return;
        }
    }


    navigationStack.pop();
    showView(navigationStack[navigationStack.length - 1]);
}

function hideAllViews() {

    document.getElementById('quiz-selection').classList.add('hidden');
    document.querySelectorAll('[id$="-quiz-selection"]').forEach(el => el.classList.add('hidden'));
    document.getElementById('time-options').classList.add('hidden');
    document.getElementById('time-input').classList.add('hidden');


    document.getElementById('timer').style.visibility = 'hidden';
    document.getElementById('question-info').classList.add('hidden');
    document.getElementById('question-box').classList.add('hidden');
    document.getElementById('prev-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('finish-btn').classList.add('hidden');
    document.getElementById('result').classList.add('hidden');
    document.getElementById('result-details').classList.add('hidden');
    document.getElementById('post-quiz-buttons').classList.add('hidden');
    document.getElementById('review-answers').classList.add('hidden');
}

function restartSameQuiz() {

    currentQuestionIndex = 0;
    score = 0;
    userAnswers = new Array(totalQuestions).fill(-1);
    quizInProgress = false;


    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }


    pushView('time-options', 'Select Time Option');


    const quizName = `${selectedQuiz.toUpperCase()} Quiz ${getQuizVariant()}`;
    document.getElementById('quiz-title').innerText = `Select Time Option for ${quizName}`;


    const backButton = document.querySelector('.back-to-main-btn');
    if (backButton) {
        backButton.classList.remove('hidden');
        backButton.style.display = 'flex';
    }


    updateBackButton();
}



function resetOverlay() {
    const overlay = document.getElementById('theme-transition-overlay');
    const isGlass = localStorage.getItem('glassMode') === 'true';

    if (isGlass) {
        overlay.style.backgroundColor = 'transparent';
        overlay.style.backdropFilter = 'blur(10px)';
    } else {
        overlay.style.backgroundColor = 'var(--bg-color)';
        overlay.style.backdropFilter = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {

    updateBackButtonVisibility();
    const overlay = document.getElementById('theme-transition-overlay');


    const themeToggle = document.getElementById('status');
    const toggleLabel = document.querySelector('label[for="status"]');

    if (themeToggle && toggleLabel && overlay) {
        document.body.classList.toggle('dark-mode', themeToggle.checked);
        themeToggle.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            const rect = toggleLabel.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            overlay.style.backgroundColor = 'var(--bg-color)';
            overlay.style.backdropFilter = 'none';
            overlay.style.setProperty('--clip-x', `${x}px`);
            overlay.style.setProperty('--clip-y', `${y}px`);

            document.body.classList.toggle('dark-mode', isChecked);
            overlay.style.clipPath = `circle(150% at ${x}px ${y}px)`;

            setTimeout(() => {
                overlay.style.clipPath = 'circle(0% at var(--clip-x) var(--clip-y))';
                resetOverlay();
            }, 600);
        });
    }





    const glassToggleCheckbox = document.getElementById('glass-status');
    const glassToggleLabel = document.querySelector('label[for="glass-status"]');

    if (glassToggleCheckbox && glassToggleLabel && overlay) {
        function setGlassMode(isGlassOn) {
            document.body.classList.toggle('glass-mode-on', isGlassOn);
        }
        setGlassMode(glassToggleCheckbox.checked);

        glassToggleCheckbox.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            const rect = glassToggleLabel.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            overlay.style.backgroundColor = 'transparent';
            overlay.style.backdropFilter = 'blur(10px)';
            overlay.style.setProperty('--clip-x', `${x}px`);
            overlay.style.setProperty('--clip-y', `${y}px`);

            setGlassMode(isChecked);


            localStorage.setItem('glassMode', isChecked.toString());

            overlay.style.clipPath = `circle(150% at ${x}px ${y}px)`;

            setTimeout(() => {
                overlay.style.clipPath = 'circle(0% at var(--clip-x) var(--clip-y))';
                resetOverlay();
            }, 600);
        });
    }




    const scrollTopBtn = document.getElementById('scrollToTopBtn');
    const scrollableElement = document.querySelector('.main-content');


    if (scrollTopBtn && scrollableElement) {

        window.addEventListener('scroll', () => {
            const mainScroll = scrollableElement.scrollTop;
            const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

            if (mainScroll > 100 || windowScroll > 100) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }, { passive: true });


        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            scrollableElement.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }


});


document.addEventListener('DOMContentLoaded', function () {
    updateBackButton();
    initializeSearch();
});







document.addEventListener('DOMContentLoaded', function() {
    const adOverlay = document.getElementById('ad-overlay');
    const adVideo = document.getElementById('ad-video');
    const appLayout = document.querySelector('.app-layout');
    
    if (localStorage.getItem('adWatched') === 'true') {
        adOverlay.style.display = 'none';
        return;
    }
    
    document.body.classList.add('ad-active');
    appLayout.style.display = 'none';
    
    adVideo.setAttribute('playsinline', '');
    adVideo.setAttribute('webkit-playsinline', '');
    
    adVideo.addEventListener('ended', function() {
        setTimeout(function() {
            closeAd();
        }, 2000); 
    });
    
    adVideo.addEventListener('error', function() {
        console.log('Video error, skipping ad');
        closeAd();
    });
    
    setTimeout(function() {
        if (adVideo.readyState === 0) { 
            closeAd();
        }
    }, 5000);
    
    function closeAd() {
        localStorage.setItem('adWatched', 'true');
        
        adOverlay.style.opacity = '0';
        setTimeout(function() {
            adOverlay.style.display = 'none';
        }, 500);
        
        document.body.classList.remove('ad-active');
        
        setTimeout(function() {
            appLayout.style.display = 'grid'; 
        }, 100);
    }

    let skipAttempts = 0;
    adVideo.addEventListener('pause', function(e) {
        if (!adVideo.ended && adVideo.currentTime < adVideo.duration - 2) {
            skipAttempts++;
            if (skipAttempts < 3) {
                adVideo.play();
                showSkipWarning();
            }
        }
    });

    adVideo.addEventListener('seeking', function(e) {
        if (adVideo.currentTime > 0) { 
        }
    });

    function showSkipWarning() {
        const countdown = document.querySelector('.ad-countdown');
        const originalText = countdown.textContent;
        countdown.textContent = 'Please watch the full ad to continue...';
        countdown.style.color = '#ff6b6b';
        
        setTimeout(function() {
            countdown.textContent = originalText;
            countdown.style.color = 'white';
        }, 2000);
    }
});