import { useState } from "react";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  const updateDescription = async (e) => {
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      window.location = "/";
    } catch (error) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        Edit
      </button>

      <div class="modal" id={`id${todo.todo_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button
                type="button"
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              ></button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                data-bs-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
