"use client";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Email address must be atleast 2 characters."
    })
});

export default function Signup() {
    const form = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="login-page__container flex w-full h-screen">
            <div className="left-side__container w-full flex flex-col justify-center items-center bg-base">
                <div className="login-form__container shadow-lg bg-light w-96 h-auto rounded">
                    <h1 className="text-xl font-bold text-center mt-5 uppercase">Create an account</h1>
                    <div className="px-12 py-6">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="full_name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Type here..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email_address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email Address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Type here..." {...field} />
                                            </FormControl>
                                            <FormMessage />
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
                                                <Input placeholder="Type here..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="confirm_password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Type here..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full mx-auto">Signup</Button>
                                <p className="text-center text-sm">Already have an account? <Link href="/login" className="text-color-link">Log in</Link></p>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="right-side__container relative w-full h-screen">
                <Image
                    src="/images/right.jpg"
                    alt="Login Background"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                />
                {/* Overlay Div */}
                <div className="absolute inset-0 bg-black bg-opacity-50" />
            </div>
        </div>
    );
}
