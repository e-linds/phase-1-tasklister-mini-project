document.addEventListener("DOMContentLoaded", () => {

document.getElementById("create-task-form").addEventListener("submit", (e) => {
  e.preventDefault()
  const todo = e.target.new_task_description.value

  const li = document.createElement("li")
  li.textContent = todo
  document.querySelector("#tasks").append(li)

  const btn = document.createElement("button")
  li.append(btn)
  btn.textContent = "all done!"

  btn.addEventListener("click", () => {
    li.remove()
  })

  document.getElementById("create-task-form").reset()

})

});
