export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[480px] px-4 md:max-w-[755px] xl:max-w-[810px]">
      {children}
    </div>
  );
}
