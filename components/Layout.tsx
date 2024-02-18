type prop = {
  children: React.ReactNode;
};

export default function Layout({ children }: prop) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-400 to-gray-200pb-12">
      {children}
    </div>
  );
}
