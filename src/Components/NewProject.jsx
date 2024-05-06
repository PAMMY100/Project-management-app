import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onSave, onCancel }) {
  const title = useRef();
  const description = useRef();
  const duedate = useRef();
  const modal = useRef();

  const saveProject = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = duedate.current.value;

    if (enteredTitle.trim() === "" || enteredDescription.trim() === "") {
      modal.current.open();
      return;
    }
    onSave({
      title: enteredTitle,
      description: enteredDescription,
      duedate: enteredDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 mt-4 mb-4">
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4">
          {" "}
          Ooops.. looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={saveProject}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="title" ref={title} type="text" />
          <Input label="Description" ref={description} textarea />
          <Input label="Due Date" ref={duedate} type="date" />
        </div>
      </div>
    </>
  );
}
