export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-surface p-8 gap-2">
      <h2 className="text-xl font-bold text-on-surface tracking-tight mb-2">Analyzing Data</h2>
      <div>
        <div className="w-15 h-15 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
