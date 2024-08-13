import React from 'react';
import { useTaskContext } from '../contexts/TaskContext';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

const TaskList = () => {
  const { tasks, toggleTask, deleteTask } = useTaskContext();

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-md">
          <div className="flex items-center space-x-3">
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => toggleTask(task.id)}
              id={`task-${task.id}`}
            />
            <label
              htmlFor={`task-${task.id}`}
              className={`text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}
            >
              {task.name}
            </label>
          </div>
          <Button variant="destructive" size="icon" onClick={() => deleteTask(task.id)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;