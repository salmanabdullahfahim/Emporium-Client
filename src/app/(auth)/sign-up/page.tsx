import SignUpForm from "@/components/forms/SignUpForm";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import { H2 } from "@/components/shared/CustomTypography";
import Logo from "@/components/shared/Logo";
import React from "react";

const SignUp = () => {
  return (
    <div className="">
      <CustomBreadcrumb
        items={[{ label: "Home", path: "/" }, { label: "Sign Up" }]}
        title="Sign Up"
      />
      <div className="flex justify-center items-center py-20">
        <div className="max-w-3xl  bg-card text-card-foreground rounded-2xl w-full shadow-lg dark:shadow-[0_30px_75px_rgba(255,255,255,0.2)]">
          <Logo />
          <div className="px-16 pb-16">
            <div className="w-full pt-16">
              <div className="flex justify-start items-start gap-5">
                <div>
                  <H2 className="font-bold text-foreground dark:text-primary-background">
                    Sign Up
                  </H2>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
