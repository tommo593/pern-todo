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
        className="px-4 rounded bg-blue-600 hover:bg-blue-400 active:bg-blue-900"
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

            <div className="flex flex-row justify-end gap-4 px-3 pb-3">
              <button
                type="button"
                className="px-2 rounded bg-yellow-400 hover:bg-yellow-200 active:bg-yellow-600 text-black"
                data-bs-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="px-2 rounded bg-red-600 hover:bg-red-400 active:bg-red-900"
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
