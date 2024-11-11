import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface User {
    id: number;
    name: string;
    email: string;
    status: string;
    messages: { id: number, message_body: string }[];
}

interface RightSideProps {
    user: User;
}

export default function RightSide({ user }: RightSideProps) {
    return (
        <div className="text-[#f5f5f5] h-full relative">
            <div className="flex justify-between gap-2">
                <div className="flex gap-2">
                    <Image src="/images/profile.svg" width={45} height={45} alt='Profile Picture' />
                    <div className="flex flex-col gap-1">
                        <p>{user.name}</p>
                        <p className="text-sm">{user.status == "Active Now" ? "Now" : user.status}</p>
                    </div>
                </div>
                <div className="flex gap-8">
                    <Image src="/icons/call.svg" width={24} height={24} alt="Call" />
                    <Image src="/icons/video-call.svg" width={24} height={24} alt="Video Call" />
                    <Image src="/icons/info.svg" width={24} height={24} alt="Info" />
                </div>
            </div>
            <div className="flex flex-col mt-8 relative from-zinc-50">
                <ScrollArea className="h-[calc(100vh-150px)] w-auto rounded-md custom-scrollbar overflow-y-scroll pr-5 pb-20">
                    {user.messages.map((msg) => (
                        <div key={msg.id} className="sender-message flex mb-2 gap-5">
                            <Image src="/images/profile.svg" width={45} height={45} alt='Profile Picture' />
                            <div className="w-3/5 h-11 rounded bg-[#f5f5f5] text-base">
                                <p className="h-full flex items-center flex-wrap ml-2">{msg.message_body}</p>
                            </div>
                        </div>
                    ))}
                    {/* Additional message content can be added here */}
                </ScrollArea>
                <div className="send-message flex justify-end items-center gap-2 absolute bottom-0 w-full p-2 bg-[#1f1f1f]">
                    <Textarea placeholder="Type your message here." className="bg-light rounded w-full" />
                    <Button className="bg-light rounded text-base">Send</Button>
                </div>
            </div>
        </div>
    );
}
