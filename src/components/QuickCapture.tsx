'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabaseClient'; // We are now importing our client

export default function QuickCapture() {
  const [taskName, setTaskName] = useState('');
  const supabase = createClient(); // Initialize the Supabase client

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim() === '') return;

    // This is the new part! We're talking to Supabase.
    const { error } = await supabase.from('tasks').insert([
      { name: taskName, is_complete: false }, // We insert the task name here
    ]);

    if (error) {
      console.error('Error inserting task:', error.message);
    } else {
      console.log('Task added successfully!');
      setTaskName(''); // Clear the input field on success
    }
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