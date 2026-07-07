export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background px-6 py-32 text-center">
      <h1 className="font-[family-name:var(--font-display)] text-5xl text-foreground sm:text-6xl">
        Fabi Miotti
      </h1>

      <div className="my-6 h-px w-40 bg-gradient-to-r from-terracotta to-sage" />

      <p className="font-[family-name:var(--font-label)] text-lg font-semibold tracking-[0.2em] text-forest uppercase">
        Consultoria Online
      </p>

      <p className="mt-2 font-[family-name:var(--font-label)] text-sm tracking-[0.15em] text-sage uppercase">
        CREF 063792-G/SP
      </p>
    </div>
  );
}
