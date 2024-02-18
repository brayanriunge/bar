type prop = {
  children: React.ReactNode;
};

export default function Layout({ children }: prop) {
  return <div className="min-h-screen">{children}</div>;
}
