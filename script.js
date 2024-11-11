let todos = []
let storedTodos = localStorage.getItem("todos")

if (storedTodos) {
    try {
        todos = JSON.parse(storedTodos)
    } catch (e) {
        console.error("Erro ao analisar localStorage", e)
    }
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos))
}

rebuild()

function createTodo() {
    const input = document.getElementById("input") 
    console.log(input.value)
    if (input.value !== "" || input.value !== " ") {
        todos.push(input.value)
        input.value = ""
        console.log(todos)
        const ul = document.getElementById("todos")
        saveTodos()
        if (todos) {
            const li = document.createElement("li")
            li.innerText = todos[todos.length - 1]
            ul.appendChild(li)
            } else {
            alert()
        }
    } else {}
}

function rebuild() {
    const ul = document.getElementById("todos")
    todos.forEach(todo => {
        const li = document.createElement("li")
        li.innerText = todo
        ul.appendChild(li)
        li.addEventListener("click", function() {
            li.remove()
            todos.splice(todos.indexOf(li.innerText), 1)
            console.log(todos)
            saveTodos()
        })      
    });
}