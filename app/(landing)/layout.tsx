const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full overflow-auto bg-[#111827]">
      <div className="mx-auto size-full max-w-screen-xl">{children}</div>
    </main>
  );
};

export default LandingLayout;
