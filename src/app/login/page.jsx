// import React from "react";
// import GoogleButton from "react-google-button";

// const pagee = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       {/* Card */}
//       <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 space-y-6">
//         {/* Heading */}
//         <div className="text-center">
//           <h1 className="text-2xl font-bold">Welcome Back</h1>
//           <p className="text-sm text-gray-500 mt-1">Login to continue</p>
//         </div>

//         {/* Buttons */}
//         <div className="space-y-3">
//           {/* Google */}
//           <button
//             className="
//               w-full
//               flex items-center justify-center
//               gap-3
//               px-4 py-2.5
//               rounded-full
//               border
//               bg-red-500
//               text-white
//               border-gray-300
//               font-semibold
//               hover:bg-red-600
//               transition
//             "
//           >
//             Login with Google
//           </button>

//           {/* GitHub */}
//           <button
//             className="
//               w-full
//               flex items-center justify-center
//               gap-3
//               px-4 py-2.5
//               rounded-full
//               bg-gray-900
//               text-white
//               font-semibold
//               hover:bg-gray-800
//               transition
//             "
//           >
//             Login with GitHub
//           </button>

//           {/* Facebook */}
//           <button
//             className="
//               w-full
//               flex items-center justify-center
//               gap-3
//               px-4 py-2.5
//               rounded-full
//               bg-blue-600
//               text-white
//               font-semibold
//               hover:bg-blue-700
//               transition
//             "
//           >
//             Login with Facebook
//           </button>
//         </div>

//         {/* Footer */}
//         <p className="text-xs text-center text-gray-400">
//           By continuing, you agree to our Terms & Privacy Policy
//         </p>
//       </div>
//     </div>
//   );
// };

// export default pagee;

"use client";

import { useEffect } from "react";
import { SocialButton } from "@/components/base/buttons/social-button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SocialButtonGroupBrandDemo() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
        <div className="text-center mb-2">
          <h1 className="text-2xl font-bold">Sign in</h1>
          <p className="text-sm text-gray-500 mt-1">
            Choose a provider to continue
          </p>
        </div>

        <SocialButton
          social="google"
          theme="brand"
          onClick={() => signIn("google")}
        >
          Sign in with Google
        </SocialButton>

        <SocialButton social="facebook" theme="brand">
          Sign in with Facebook
        </SocialButton>

        <SocialButton social="apple" theme="brand">
          Sign in with Apple
        </SocialButton>
      </div>
    </div>
  );
}
