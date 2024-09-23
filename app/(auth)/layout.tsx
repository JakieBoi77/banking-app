import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <Image
          src="/icons/dashboard.png"
          alt="Auth Image"
          className="rounded-l-2xl border-4 border-black-2"
          width={600}
          height={600}
        />
      </div>
    </main>
  );
}