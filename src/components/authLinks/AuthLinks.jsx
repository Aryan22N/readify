import Link from "next/link";
import React from "react";

const AuthLinks = () => {
  const status = "nonauthenticated";

  return (
    <div className="flex items-center gap-3">
      {status === "nonauthenticated" ? (
        <Link href="/login" className="rounded-md  px-4 py-1.5">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="rounded-md  px-4 py-1.5">
            Write
          </Link>
          <Link href="/profile" className="rounded-md  px-4 py-1.5">
            Log Out
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthLinks;
