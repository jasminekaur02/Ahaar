"use client";
import React, { useEffect, useState } from "react";

import { QueryClient, QueryClientProvider } from "react-query";
// import { Toaster } from "react-hot-toast";
import { CookiesProvider } from "react-cookie";
import { UserContextProvider } from "@/components/contexts/userContext";
// import Modals from "@/app/dashboard/modals";
import Impersonated from "@/components/auth/impersonated";
import dynamic from "next/dynamic";

const queryClient = new QueryClient();

const Toaster = dynamic(
  () => import("react-hot-toast").then((c) => c.Toaster),
  {
    ssr: false,
  },
);

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {

  const [mounted, setMounted] = useState<Boolean>();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <QueryClientProvider client={queryClient}>
          <UserContextProvider>
            
              <>
                <Impersonated />
                {/* <Modals /> */}
                {children}
                {mounted && <Toaster />}
              </>
            
          </UserContextProvider>
        </QueryClientProvider>
      </CookiesProvider>
    </>
  );
}
