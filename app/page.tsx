
"use client"
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-grey">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center">
        <button type="button" onClick={() => alert('working')} className="p-16 flex align-center justify-center w-3 h-2 border border-solid border-red-500 bg-yellow">
          log in
        </button>
      </main>
    </div>
  );
}
