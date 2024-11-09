import Image from "next/image";
import Link from "next/link";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Pages: Sign In: Boxed */}

      {/* Page Container */}
      <div
        id="page-container"
        className="mx-auto flex min-h-screen w-full min-w-[320px] flex-col bg-gray-100"
      >
        {/* Page Content */}
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="relative mx-auto flex min-h-screen w-full max-w-10xl items-center justify-center overflow-hidden p-4 lg:p-8">
            {/* Sign In Section */}
            <section className="w-full max-w-xl py-6">
              {/* Header */}

              <header className="mb-10 text-center">
                <h1 className="mb-2 inline-flex items-center space-x-2 text-2xl font-bold">
                  <Link href="/">
                    <Image
                      src="/logo.png"
                      alt={`${process.env.NEXT_PUBLIC_COMPANY_NAME} Logo`}
                      width={200}
                      height={180}
                    />
                  </Link>
                </h1>
              </header>

              {children}

              {/* Footer */}
              <div className="mt-6 text-center text-sm text-gray-500">
                Powered by
                <a
                  href="#"
                  className="font-medium text-green-600 hover:text-green-400"
                >
                  &nbsp; {process.env.NEXT_PUBLIC_COMPANY_NAME}
                </a>
              </div>
              {/* END Footer */}
            </section>
            {/* END Sign In Section */}
          </div>
        </main>
        {/* END Page Content */}
      </div>
      {/* END Page Container */}

      {/* END Pages: Sign In: Boxed */}
    </>
  );
}
