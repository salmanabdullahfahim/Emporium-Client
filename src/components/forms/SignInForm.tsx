"use client";
import React from "react";
import { FaArrowRightLong, FaRegEnvelope } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";
import CustomInput from "@/components/shared/CustomInput";
import Link from "next/link";
import CustomButton from "@/components/shared/CustomButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInData, signInSchema } from "@/schemas/signInSchema";
import { useLoginMutation } from "@/redux/api/authApi";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Checkbox } from "../ui/checkbox";
import { useDispatch } from "react-redux";
import { setAuth } from "@/redux/slices/authSlice";

const SignInForm = () => {
  const [loginUser, { isLoading }] = useLoginMutation();
  const { toast } = useToast();
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInData) => {
    try {
      const response = await loginUser(data).unwrap();
      toast({
        description: `${response.message}`,
      });

      const user = response?.data?.userWithoutPassword;

      dispatch(setAuth(response.data));
      if (user?.role === "VENDOR") {
        router.push("/dashboard/vendor");
      } else if (user?.role === "CUSTOMER") {
        router.push("/dashboard/customer");
      } else if (user?.role === "ADMIN") {
        router.push("/dashboard/admin");
      }
    } catch (err: any) {
      console.error("Error from Backend:", err);
      toast({
        description: `${err.data.message as string}`,
        variant: "destructive",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <CustomInput
        icon={<FaRegEnvelope />}
        placeholder="Email Address"
        type="email"
        inputClassName="bg-white py-8 focus-visible:ring-0"
        {...register("email")}
        error={errors.email?.message as string | undefined}
      />

      <CustomInput
        icon={<IoKeyOutline />}
        placeholder="Password"
        type="password"
        inputClassName="bg-white py-8 focus-visible:ring-0"
        {...register("password")}
        error={errors.password?.message as string | undefined}
      />
      <div className="py-5 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground dark:text-muted-foreground"
          >
            Remember Me
          </label>
        </div>
        <Link href="/forgot-password">
          <span className="underline font-normal leading-7 text-foreground dark:text-muted-foreground hover:text-blue-500">
            Forgot Password
          </span>
        </Link>
      </div>
      <Link href="/sign-up">
        <span className="underline font-normal leading-7 text-foreground dark:text-muted-foreground hover:text-blue-500">
          Don&#39;t Have an account!
        </span>
      </Link>

      <CustomButton
        className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-md shadow-md text-white  py-8  w-full    gap-2 text-lg"
        icon={<FaArrowRightLong />}
        iconPosition="right"
        type="submit"
        loading={isLoading}
      >
        {isLoading ? "Login In" : "Login Now"}
      </CustomButton>
    </form>
  );
};

export default SignInForm;
