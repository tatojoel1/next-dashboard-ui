"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";

const LoginPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  const router = useRouter();
  useEffect(() => {
    const role = user?.publicMetadata.role;
    if (role) {
      router.push(`/${role}`);
    }
  }, [user, router]);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="area">
        <ul className="circles">
          {Array.from({ length: 17 }).map((_, index) => (
            <li key={index}></li>
          ))}
        </ul>
      </div>
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="bg-white p-12 rounded-md shadow-2xl flex flex-col gap-2"
        >
          <h1 className="text-xl font-bold flex flex-col items-center gap-2">
            <Image
              src="/BD_2-Color_RGB.png"
              alt="logo"
              width={150}
              height={150}
            />
            Lean Management System (LMS)
          </h1>
          <h2 className="text-gray-400 text-center">Sign in to your account</h2>
          <Clerk.GlobalError className="text-sm text-red-400" />
          <Clerk.Field name="identifier" className="flex flex-col gap-2">
            <Clerk.Label className="text-sm text-gray-500">
              Email or User
            </Clerk.Label>
            <Clerk.Input
              type="text"
              required
              className="p-2 rounded-md ring-1 ring-gray-300"
            />
            <Clerk.FieldError className="text-sm text-red-500" />
          </Clerk.Field>
          <Clerk.Field name="password" className="flex flex-col gap-2">
            <Clerk.Label className="text-sm text-gray-500">
              Password
            </Clerk.Label>
            <Clerk.Input
              type="password"
              required
              className="p-2 rounded-md ring-1 ring-gray-300"
            />
            <Clerk.FieldError className="text-sm text-red-500" />
          </Clerk.Field>
          <SignIn.Action
            submit
            className="bg-blue-500 text-white rounded-md text-sm p-[10px] mt-2"
          >
            Sign in
          </SignIn.Action>
          <div className="flex flex-col capitalize mt-1">
            <h1 className="text-center text-sm text-bdDeepBlue font-bold">
              Powered By Nogales South CI department
            </h1>
          </div>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
};

export default LoginPage;
