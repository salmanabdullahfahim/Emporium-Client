import SignInForm from "@/components/forms/SignInForm";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import { H2, Paragraph } from "@/components/shared/CustomTypography";
import Logo from "@/components/shared/Logo";
import Image from "next/image";
import React from "react";
import { CiLock } from "react-icons/ci";

const SignIn = () => {
  return (
    <div>
      <CustomBreadcrumb
        items={[{ label: "Home", path: "/" }, { label: "Sign In" }]}
        title="Sign In"
      />
      <div className="flex justify-center items-center py-20">
        <div className="max-w-3xl  bg-card text-card-foreground rounded-2xl w-full shadow-lg dark:shadow-[0_30px_75px_rgba(255,255,255,0.2)]">
          <Logo />
          <div className="px-16 pb-16">
            <div className="w-full pt-16">
              <div className="flex justify-start items-start gap-5">
                <div>
                  <H2 className="font-bold text-foreground dark:text-primary-background">
                    SignIn Here
                  </H2>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <SignInForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
