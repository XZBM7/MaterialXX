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


const ethics1 = [
    // Multiple Choice Questions (20 questions)
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
  // Multiple Choice Questions (25 questions) - Answers varied
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

  // True/False Questions (10 questions) - Varied
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