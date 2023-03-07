// Getting all the document and storing in a variable
const form = document.querySelector("#new-task-form");
const input = document.querySelector("#add-task-input");
const tasks_el_container = document.querySelector(".tasks-container");
// const count = document.getElementById("#count");
let count = document.querySelector("#count");
let $add = 0;


window.addEventListener("load", () => {

    // event listnener, once the form is submitted
    form.addEventListener("submit", (e) => {

        const audio = new Audio("./Slack - Wow.mp3");
        audio.play();

        // prevent browser default
        e.preventDefault();


        // getting the input value and storing it
        const task = input.value.toUpperCase();
        // ;

        // checking if the User hasn't input a value
        if (!task) {
            alert("Please fill in your task");
            return;
        }

        else {
            // counting the number of tasks
            $add += 1;
            count.innerHTML = $add;
        }
        // creating a div element with createElement method
        const task_el = document.createElement("div");
        // adding class to the created div 
        task_el.classList.add("tasks");
        // creating a div element with createElement method
        const task_content = document.createElement("div");
        // adding class to the created div 
        task_content.classList.add("task");
        // joining the 2 divs just created together
        task_el.appendChild(task_content);


        // creating an input element with createElement method
        const input_el = document.createElement("input");
        // adding class
        input_el.classList.add("display-task");
        // Adding properties
        input_el.type = "text";

        input_el.value = task;

        input_el.setAttribute("readonly", "readonly");
        // appending it to a parent element
        task_content.appendChild(input_el);
        // creating a div element with createElement method
        const action_div = document.createElement("div");
        action_div.classList.add("action");
        // appending it to a parent element
        task_el.appendChild(action_div);

        // Creating button element
        const edit_btn = document.createElement("button");
        // adding class
        edit_btn.classList.add("edit");
        edit_btn.innerText = "Edit";
        // Appending to a parent element
        action_div.appendChild(edit_btn);
        // Creating button element
        const delete_btn = document.createElement("button");
        // adding class
        delete_btn.classList.add("delete");
        delete_btn.innerText = "Delete";
        // Appending to a parent element
        action_div.appendChild(delete_btn);
        //appending all the new created elements to the browser, through and exiting element already; 
        tasks_el_container.appendChild(task_el);

        input.value = "";


        // When the edit button is clicked
        edit_btn.addEventListener("click", () => {

            if (edit_btn.innerText.toLocaleLowerCase() == "edit") {
                // Removing the attribute of readonly for editting
                input_el.removeAttribute("readonly");
                // Focus on the text area
                input_el.focus();
                task.toUpperCase;
                // change the innerHTML to "save"
                edit_btn.innerText = "Save";

            }

            else {
                // Adding the readonly attribute back
                input_el.setAttribute("readonly", "readonly");
                // changing the innerTEXT to "Edit"
                edit_btn.innerText = "Edit";
            };

        })


        // when the delete button is clicked
        delete_btn.addEventListener("click", () => {
            input_el.innerHTML = "";
            $add -= 1;
            count.innerHTML = $add;
            if ($add === 0) {
                count.innerHTML = "";
            }
            // remove the created elements on the browser
            tasks_el_container.removeChild(task_el);
        }
        )


    })


})

