import React, { useState } from 'react';
import { useTaskContext } from '../contexts/TaskContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AddTaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const { addTask } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex space-x-2">
        <Input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter a new task"
          className="flex-grow"
        />
        <Button type="submit">Add Task</Button>
      </div>
    </form>
  );
};

export default AddTaskForm;