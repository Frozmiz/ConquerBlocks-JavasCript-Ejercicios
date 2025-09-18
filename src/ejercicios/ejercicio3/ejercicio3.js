import "../../main";

// reconocer los botones de anadir, el input

const form = document.getElementById("todo-form");

const inputUser = document.getElementById("todo-input");

const list = document.getElementById("todo-list");

// anadir el contenido del imput como un nuevo li en la lista

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = inputUser.value.trim();

  if (!text) return;

  const li = document.createElement("li");
  // li.append(text);

  const span = document.createElement("span");
  span.className = "task";
  span.textContent = text;
  li.append(span);

  // Creamos nuevos nodos en cada submit
  // Boton borrar
  const btnRemove = document.createElement("button");
  btnRemove.type = "button";
  btnRemove.className = "remove";
  btnRemove.ariaLabel = "Eliminar tarea";
  btnRemove.textContent = "x";
  // Boton editar
  const btnEdit = document.createElement("button");
  btnEdit.type = "button";
  btnEdit.className = "edit";
  btnEdit.ariaLabel = "Editar tarea";
  btnEdit.textContent = "✏";

  li.append(btnEdit);
  li.append(btnRemove);
  list.append(li);

  inputUser.value = "";
  inputUser.focus();
});

list.addEventListener("click", (e) => {
  // const removeBtn = e.target.closest(".remove");
  // if (!removeBtn) return;

  // const li = e.target.closest("li");
  // if (!li) return;

  // removeChild(li): debe llamarse sobre el padre y lanza error si li no es hijo directo. Devuelve el nodo eliminado.
  // const li = removeBtn.closest("li");
  // li.parentElement.removeChild(li);

  const btn = e.target.closest("button");
  if (!btn || !list.contains(btn)) return;

  const li = btn.closest("li");
  if (!li) return;

  if (btn.classList.contains("remove")) {
    li.remove();
    return;
  }

  if (btn.classList.contains("edit")) {
    if (!li.classList.contains("is-editing")) {
      let taskSpan = li.querySelector(".task");
      if (!taskSpan) {
        //copia de seguridad
        taskSpan = document.createElement("span");
        taskSpan.className(".task");
        taskSpan.textContent = li.firstChild?.nodeValue?.trim() || "";
        li.prepend(taskSpan);
      }

      //input con el mismo texto
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.className = "edit-input";
      editInput.value = taskSpan.textContent;
      //Guarda original
      editInput.dataset.prev = taskSpan.textContent;

      //Reemplazamos el span por el nuevo input
      taskSpan.replaceWith(editInput);
      li.classList.add("is-editing");
      btn.textContent = "💾";

      //enfoque
      editInput.focus();
      editInput.select();
      

      //Evento para salir o guardar con el teclado (ESC o ENTER)
      editInput.addEventListener("keydown", (ev) => {
        if (ev.key === "Escape") {
          // cancelar → restaurar el texto previo
          const taskSpan = document.createElement("span");
          taskSpan.className = "task";
          taskSpan.textContent = editInput.dataset.prev;

          editInput.replaceWith(taskSpan);
          li.classList.remove("is-editing");
          btn.textContent = "✏";
        } else if (ev.key === "Enter") {
          // guardar → reutiliza tu handler del botón
          btn.click();
        }
      });

    } else {
      //Guardar cambios
      const editInput = li.querySelector(".edit-input");
      const newText = editInput.value.trim() || editInput.dataset.prev; //Fallback

      const taskSpan = document.createElement("span");
      taskSpan.className = "task";
      taskSpan.textContent = newText;

      editInput.replaceWith(taskSpan);
      li.classList.remove("is-editing");
      btn.textContent = "✏";

      return;
    }
  }
});
