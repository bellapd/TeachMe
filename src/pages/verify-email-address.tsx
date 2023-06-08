import { ClerkClient } from "@clerk/clerk-sdk-browser";
import { useEffect } from "react";
import { useRouter } from "next/router";

const clerk = new ClerkClient({
  frontendApi: process.env.NEXT_PUBLIC_CLERK_FRONTEND_API,
});

const VerifyEmailAddressPage = () => {
  const router = useRouter();

  useEffect(() => {
    const verifyEmailToken = async () => {
      const { token } = router.query;
      if (token && typeof token === "string") {
        try {
          await clerk.verifyEmail(token);
          router.push("/verification-success");
        } catch (error) {
          console.error("Email verification error:", error);
          // Handle the error, e.g., show an error message or redirect to an error page
          router.push("/verification-error");
        }
      } else {
        // Invalid or missing token, redirect to an error page or handle the case accordingly
        router.push("/verification-error");
      }
    };

    verifyEmailToken();
  }, [router]);

  return null; // Or you can show a loading indicator while verifying the email token
};

export default VerifyEmailAddressPage;
