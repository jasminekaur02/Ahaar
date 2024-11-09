"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import useHandleLoginSuccess from "@/components/hooks/auth/usehandleLoginSuccess";
import { parseError } from "@/components/utils/errors";
import { useVerifySocialCodeMutation } from "@/components/queries/auth/login/useVerifySocialCodeMutation";
import { useVerifyMagicLinkCode } from "@/components/queries/auth/login/useVerifyMagicLinkCode";
import { useLoadingModalContext } from "@/components/contexts/ModalProvider";

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { handleLoginSuccess } = useHandleLoginSuccess();

  const { openLoadingModal, closeLoadingModal } = useLoadingModalContext();
  const {
    mutate: validateToken,
    isLoading: isLoadingCheckoutSession,
    error: checkoutError,
  } = useVerifySocialCodeMutation({
    onError: (error: any) => {
      toast.error(parseError(error));

      // router.push("/login")
    },
    onSuccess: async (token: string) => {
      await handleLoginSuccess(token);
      closeLoadingModal();
    },
  });

  const { mutate: verifyMagicLink, isLoading: isLoadingMagicLink } =
    useVerifyMagicLinkCode({
      onError: (error: any) => {
        toast.error(parseError(error));
      },
      onSuccess: async (token: string) => {
        await handleLoginSuccess(token);
        closeLoadingModal();
      },
    });

  useEffect(() => {
    openLoadingModal();
    const googleToken = searchParams.get("code");

    const emailVerifyCode = searchParams.get("emailVerifyCode");
    if (googleToken) {
      validateToken(googleToken);
    } else if (emailVerifyCode) {
      //loading start

      verifyMagicLink(emailVerifyCode);
    }
  }, [searchParams, validateToken, verifyMagicLink]);

  return <></>;
}
