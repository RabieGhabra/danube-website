"use client";
import SignUpForm from "./sections/SignUpForm";
import SignUpPromo from "./sections/SignUpPromo";

export const SignUp = () => {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <SignUpForm />
      <SignUpPromo />
    </div>
  );
};