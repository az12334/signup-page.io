// const taskInput = document.getElementById('taskInput');
// const addTaskBtn = document.getElementById('addTaskBtn');
// const taskList = document.getElementById('taskList');

// // Add task function
// function addTask() {
//     const taskText = taskInput.value.trim();
//     if (taskText === '') return;

//     const taskItem = document.createElement('li');
//     taskItem.className = 'task-item';

//     const taskSpan = document.createElement('span');
//     taskSpan.textContent = taskText;

//     const deleteBtn = document.createElement('button');
//     deleteBtn.className = 'delete-btn';
//     deleteBtn.textContent = 'Delete';
    
//     // Toggle completed state
//     taskSpan.addEventListener('click', () => {
//         taskSpan.parentElement.classList.toggle('completed');
//     });

//     // Delete task
//     deleteBtn.addEventListener('click', () => {
//         taskItem.remove();
//     });

//     taskItem.appendChild(taskSpan);
//     taskItem.appendChild(deleteBtn);
//     taskList.appendChild(taskItem);

//     // Clear input
//     taskInput.value = '';
// }

// // Event listeners
// addTaskBtn.addEventListener('click', addTask);
// taskInput.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') addTask();
// });
// let themeToggle = document.querySelector("#theme-toggle");
// let body = document.body;

// // Load saved preference
// if (localStorage.getItem("theme") === "dark") {
//     body.classList.add("dark-mode");
//     themeToggle.textContent = "Toggle Light Mode";
// }

// // Toggle handler
// themeToggle.addEventListener("click", () => {
//     // 1. First toggle the class
//     body.classList.toggle("dark-mode");
    
//     // 2. Then check current state
//     if (body.classList.contains("dark-mode")) {
//         themeToggle.textContent = "Toggle Light Mode";
//         localStorage.setItem("theme", "dark");
//     } else 
//         themeToggle.textContent = "Toggle Dark Mode";
//         localStorage.setItem("theme", "light");
//     }
// });
// document.querySelector(".btn").addEventListener('click', () =>{
//     const {jsPDF}=window.jspdf;
//     const doc=new jsPDF();
//     const form=document.querySelector(".register");
//     const username=form.elements['username'].value;
//     const email=form.elements['Email'].value;
//     const firstName=form.elements['firstname'].value;
//     const lastName=form.elements['lastname'].value;
//     const password=form.elements['Password'].value;
//     const number=form.elements['number'].value;
     
//     let content=`
//     User Name:${username}
//     Email:${email}
//     First Name:${firstName}
//     Last Name:${lastName}
//     Password:${password}
//     Number:${number}

//     `;
//     doc.text(content,10,10);
//     doc.save(`${firstName}_${lastName}_${information.pdf}`);
// });
// Theme toggler functionality
// document.querySelector('.btn').addEventListener('click', () => {
//     const theme = localStorage.getItem('theme') === 'light' ? 'dark' : 'light';
//     localStorage.setItem('theme', theme);
//     document.body.setAttribute('data-theme', theme);
// });

// document.querySelector('.btn').addEventListener('click', () => {
//     const firstName = document.querySelector('firstName').value;
//     const lastName = document.querySelector('lastName').value;
//     const email = document.querySelector('email').value;
//     const password = document.querySelector('password').value;
//     const number = document.querySelector('number').value;

//     if (!firstName || !lastName || !email || !password || !number) {
//         alert("Please fill in all fields!");
//         return;
//     }

//     const doc = new jsPDF();
//     doc.text(20, 20, `First Name: ${firstName}`);
//     doc.text(20, 30, `Last Name: ${lastName}`);
//     doc.text(20, 40, `Email: ${email}`);
//     doc.text(20, 50, `Password: ${password}`);
//     doc.text(20, 60, `Number: ${number}`);
//     doc.save('information.pdf');
// });

document.querySelector('.btn').addEventListener('click', () => {
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const firstName = document.querySelector('#First-Name').value;
    const lastName = document.querySelector('#lastName').value;
    const password = document.querySelector('#password').value;
    const number = document.querySelector('#number').value;
    if (!username || !email || !firstName || !lastName || !password || !number) {
        alert("Please fill in all fields before submitting!");
        return;
    }
    if (!email.includes('@')) {
        alert("Invalid email format! Please make sure the email contains '@'.");
        return;
    }
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be 8 characters long and include letters, numbers, and symbols.");
        return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text(20, 20, `Username: ${username}`);
    doc.text(20, 30, `Email: ${email}`);
    doc.text(20, 40, `First Name: ${firstName}`);
    doc.text(20, 50, `Last Name: ${lastName}`);
    doc.text(20, 60, `Password: ${password}`);
    doc.text(20, 70, `Contact Number: ${number}`);
    doc.save(`${username}_Registration_Form.pdf`);
});