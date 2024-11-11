"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import RightSide from './right_side';

interface User {
    id: number;
    name: string;
    email: string;
    status: string;
    messages: { id: number, message_body: string }[];
}

export default function Dashboard() {
    const [showRight, setShowRight] = useState(false);
    const [userData, setUserData] = useState<User[]>([]);
    const [fetchserMessage, setfetchserMessage] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const result = await fetch('http://127.0.0.1:8000/api/users');
        const data: User[] = await result.json();
        setUserData(data.users);
    };

    const fetchUserMessageById = async (id: number) => {
        const result = await fetch(`http://127.0.0.1:8000/api/show_user/${id}`);
        const data: User = await result.json();
        setfetchserMessage(data.user);
        setShowRight(true);
    };

    return (
        <div className="flex">
            <div className="w-2/6 bg-[#16161a] h-screen p-10">
                <div className="flex justify-between items-center text-[#f5f5f5]">
                    <h1 className="text-2xl">Chats</h1>
                    <Image src='/icons/new_message.svg' width={20} height={20} alt="New Message Icon" />
                </div>
                <div className="relative my-4">
                    <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <Image src="/icons/ic_outline-search.svg" width={24} height={24} alt="Search Icon" />
                    </span>
                    <Input
                        placeholder="Search messages..."
                        className="pl-10 py-5 bg-[#3a3b3c] rounded-full text-[#f5f5f5]"
                    />
                </div>
                <ScrollArea className="h-[500px] w-auto rounded-md custom-scrollbar overflow-y-scroll">
                    {userData.map((user) => (
                        <div
                            key={user.id}
                            className="message-item mt-2 text-[#f5f5f5] cursor-pointer"
                            onClick={() => fetchUserMessageById(user.id)}

                        >
                            <div className="flex items-center gap-5">
                                <Image src="/images/profile.svg" width={45} height={45} alt="Profile Picture" />
                                <div className="flex flex-col gap-1">
                                    <p className="font-bold">{user.name}</p>
                                    <p className="truncate max-w-xs text-sm">test</p>
                                </div>
                            </div>
                            <p className="text-end mr-4">{user.status == 'Active Now' ? 'Now' : user.status}</p>
                        </div>
                    ))}
                </ScrollArea>
            </div >
            <div className="w-4/6 bg-[#3a3b3c] h-screen p-10">
                {showRight && fetchserMessage && (
                    <RightSide user={fetchserMessage} />
                )}
            </div>
        </div >
    );
}
