import { TodoItem } from "./todo-item";

export const List = ({ items, onDelete, onToggle }) => {
    return (
      <div className="space-y-4 bg-gray-100 p-4 rounded-lg shadow-md">
        {items.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </div>
    )
  }
  