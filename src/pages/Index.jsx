import React from 'react';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
import Header from '../components/Header';
import { TaskProvider } from '../contexts/TaskContext';

const Index = () => {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <AddTaskForm />
            <TaskList />
          </div>
        </main>
      </div>
    </TaskProvider>
  );
};

export default Index;