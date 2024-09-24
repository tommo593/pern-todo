import React, { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-4 mb-4">PERN Todo List</h1>
      <form
        action=""
        className="flex flex-row justify-center gap-4"
        onSubmit={onSubmitForm}
      >
        <input
          type="text"
          className="bg-slate-100 rounded text-black"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-slate-800 px-4 py-2 rounded border-hidden">
          Add
        </button>
      </form>
    </>
  );
};

export default InputTodo;
