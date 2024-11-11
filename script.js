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
    if (input.value !== "" && input.value !== " " && input.value !== null) {
        todos.push(input.value)
        input.value = ""
        const ul = document.getElementById("todos")
        saveTodos()
        if (todos) {
            const li = document.createElement("li")
            li.innerText = todos[todos.length - 1]
            ul.appendChild(li)
            saveTodos()
            li.addEventListener("click", function deleteTodos() {
                li.remove()
                todos.splice(todos.indexOf(li.innerText), 1)
                saveTodos()
            })
            } else {
            alert()
        }
    } else {
        window.alert("Insira um valor valido.")
        input.value = ""
    }
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
            saveTodos()
        })      
    });
}
