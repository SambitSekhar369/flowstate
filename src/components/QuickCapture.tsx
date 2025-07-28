// This line is important. It tells Next.js that this component will have user interaction in the browser.
'use client';

import { useState } from 'react';

export default function QuickCapture() {
  // We use 'state' to keep track of what the user is typing.
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    // This prevents the whole page from reloading when the button is clicked.
    e.preventDefault();
    if (taskName.trim() === '') return; // Don't add empty tasks

    // For now, we'll just log it to the console. Next, we'll save it to the database.
    console.log('New Task Added:', taskName);
    
    // Clear the input field after adding the task.
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto my-8">
      <div className="relative">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Add a task..."
          className="w-full px-4 py-3 bg-[#1a1a1a] text-[#EAEAEA] placeholder:text-[#555] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A9FF] transition-shadow duration-300"
        />
        {taskName && (
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#00A9FF] text-black rounded font-bold hover:bg-white transition-colors"
          >
            Add
          </button>
        )}
      </div>
    </form>
  );
}