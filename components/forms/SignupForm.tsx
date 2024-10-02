"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signupFormSchema } from "@/schemas/auth";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import HorizontalDivider from "../shared/HorizontalDivider";
import { AuthGoogle, AuthHeader, AuthLink, AuthWrapper } from "./AuthForm";

export default function SignupForm() {
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signupFormSchema>) {
    console.log(values);
  }

  return (
    <AuthWrapper>
      <AuthHeader
        title="Signup"
        description="Let's get started with your 30 days free trial"
      />
      <AuthGoogle>Signup with Google</AuthGoogle>
      <HorizontalDivider>or</HorizontalDivider>

      <Form {...form}>
        <form
          className="space-y-4 w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="John" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" className="border-neutral-500" />
            <label
              htmlFor="terms"
              className="text-xs leading-none text-neutral-500"
            >
              I agree to all Terms, Privacy Policy and Fees
            </label>
          </div>
          <div className="space-y-3">
            <Button type="submit" className="w-full mt-6 bg-brand">
              Signup
            </Button>
            <AuthLink
              question="Already have an account?"
              answer="Login"
              href="/login"
            />
          </div>
        </form>
      </Form>
    </AuthWrapper>
  );
}
