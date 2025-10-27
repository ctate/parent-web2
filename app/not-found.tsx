export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-6xl font-bold text-black dark:text-zinc-50">
          404
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          on parent
        </p>
        <a
          href="/"
          className="mt-4 flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Go back home
        </a>
      </div>
    </div>
  );
}

