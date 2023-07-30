const form = document.querySelector(".form-todo");
const formInput = document.querySelector(".form-todo input[type='text']");
const formli = document.querySelector(".todo-list");
console.log(formInput);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = formInput.value;
  const li = document.createElement("li");
  const innerHTMLli = `<span class="text">${input}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`;
  li.innerHTML = innerHTMLli;
  formli.append(li);
  formInput.value = "";
});

formli.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) {
    e.target.parentNode.previousElementSibling.style.textDecoration =
      "line-through";
  }
  if (e.target.classList.contains("remove")) {
    e.target.parentNode.parentNode.remove();
  }
});
