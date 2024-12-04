export const TodoItem = ({ todo, onDelete, onToggle }) => {
    let containerClass
    let textClass
    let buttonClass
    let buttonText
    if (todo.completed) {
        buttonText = "Cancel";
      } else {
        buttonText = "Complete";
      }

  
    if (todo.completed) {
      containerClass = "flex justify-between items-center p-4 rounded-lg shadow-md border bg-green-100 border-green-300"
      textClass = "text-lg font-medium text-gray-500 line-through"
      buttonClass = "px-3 py-1 rounded-lg bg-orange-500 hover:bg-white-600 text-white"
    } else {
      containerClass = "flex justify-between items-center p-4 rounded-lg shadow-md border bg-white border-gray-200"
      textClass = "text-lg font-medium text-gray-800"
      buttonClass = "px-3 py-1 rounded-lg bg-green-500 hover:bg-green-600 text-white"
    }
    return (
      <div className={containerClass}>
        <p className={textClass}>{todo.text}</p>
        <div className="flex space-x-2">
          <button className={buttonClass} onClick={() => onToggle(todo.id)}>
            {buttonText}

          </button>
          <button
            className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  