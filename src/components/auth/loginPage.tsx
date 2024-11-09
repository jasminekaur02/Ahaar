"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LoginProvider } from "./types";

import { XCircleIcon } from "lucide-react";

import toast from "react-hot-toast";
import { useCookies } from "react-cookie";

import { useRouter, useSearchParams } from "next/navigation";
import { NEXT_ROUTE_KEY, TokenKey } from "../utils/constants";
import { useUserContext } from "../contexts/userContext";
import useHandleLoginSuccess from "../hooks/auth/usehandleLoginSuccess";
import { useLoginWithPasswordMutation } from "../queries/auth/login/useLoginWithPasswordMutation";
import { parseError } from "../utils/errors";
import { getSocialAuthInitUrl } from "../queries/auth/login/useGetSocialAuthUrl";
import { ForwardIcon } from "lucide-react";

export default function LoginPage() {
  const [cookies, setCookie] = useCookies([TokenKey]);
  const { user, setUser } = useUserContext();
  const router = useRouter();
  useEffect(() => {
    if (user?.is_active) {
      router.push("/dashboard");
    }
  }, [router, user]);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { handleLoginSuccess } = useHandleLoginSuccess();

  const searchParams = useSearchParams();

  const {
    mutate: loginWithPassword,
    isLoading: isLoadingCheckoutSession,
    error: loginError,
  } = useLoginWithPasswordMutation({
    onSuccess: async (token, verificationRequired) => {
      if (verificationRequired) {
        toast.error("Please check your email for verification");

        return;
      }
      await handleLoginSuccess(token);
    },
    onError: (error: any) => {
      toast.error(parseError(error));
    },
  });
  const handleLogin = async (provider: LoginProvider) => {
    switch (provider) {
      case "password":
        if (!email) {
          toast.error("Please enter password");
          return;
        }
        if (!password) {
          toast.error("Please enter password");
          return;
        }
        loginWithPassword({ email: email, password: password });
        break;
      case "google":
        const nextRoute = searchParams.get(NEXT_ROUTE_KEY);
        const authUrl = await getSocialAuthInitUrl(nextRoute ?? "");
        router.push(authUrl);
    }
  };

  return (
    <>
      <div className="relative flex flex-col overflow-hidden rounded-lg bg-white shadow-sm">
        <Link href="/" className="absolute right-1 top-1 w-fit">
          <XCircleIcon className="h-6 w-6 hover:cursor-pointer font-normal text-base text-slate-400 hover:text-slate-500" />
        </Link>
        <div className="w-full max-w-xl text-center">
          <h2 className="font-medium text-gray-500 pt-12">
            Welcome, please sign in to your dashboard
          </h2>
        </div>
        <div className="grow pb-5 md:px-16 px-10 ">
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="block text-gray-600 w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-[#305634] focus:ring focus:ring-[#305634] focus:ring-opacity-50"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              autoComplete="current-password"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="block w-full text-gray-600 rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-[#305634] focus:ring focus:ring-[#305634] focus:ring-opacity-50"
            />
          </div>
          <div>
            <div className="mb-5 flex items-center justify-between space-x-2 pt-2">
              <Link
                href="/forgot-password"
                className="inline-block text-sm font-medium text-green-700 hover:text-green-700"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              onClick={() => handleLogin("password")}
              className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-green-700 bg-green-700 px-6 py-3 font-semibold leading-6 text-white hover:border-green-600 hover:bg-green-600 focus:ring focus:ring-green-400 focus:ring-opacity-50 active:border-green-700 active:bg-green-700"
            >
              <ForwardIcon className="hi-mini hi-arrow-uturn-right inline-block h-5 w-5 opacity-50" />

              <span>Sign In</span>
            </button>
            {/* Divider: With Label */}
            <div className="my-5 flex items-center">
              <span
                aria-hidden="true"
                className="h-0.5 grow rounded bg-gray-100"
              />
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                or sign in with
              </span>
              <span
                aria-hidden="true"
                className="h-0.5 grow rounded bg-gray-100"
              />
            </div>
            {/* END Divider: With Label */}
            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={() => handleLogin("google")}
                type="button"
                className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none"
              >
                <Image
                  src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
                  height={30}
                  width={30}
                  alt="Login to Ahaar with google"
                />
                <span>Google</span>
              </button>
            </div>
          </div>
        </div>
        <div className="grow bg-gray-50 p-5 text-center text-sm">
          Don’t have an account yet?
          <Link
            href="/sign-up"
            className="font-medium text-green-700 hover:text-green-500"
          >
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
}
