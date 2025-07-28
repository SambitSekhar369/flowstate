import QuickCapture from '@/components/QuickCapture';

export default function HomePage() {
  return (
    <main className="p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold tracking-tighter">My Day</h1>
      <QuickCapture />
      {/* Our task list will go here later */}
    </main>
  );
}