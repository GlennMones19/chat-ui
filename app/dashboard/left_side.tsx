import Image from "next/image";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function LeftSide() {
    const messages = [
        {
            name: 'Leo Glenn Mones',
            message: 'You have a nested array, so you will need to use a nested map in order to iterate over all items. ',
            date: '1hr ago',
            active: true
        },
        {
            name: 'Ivy Rose Agbayani',
            message: 'You have a nested array, so you will need to use a nested map in order to iterate over all items. ',
            date: '1hr ago',
            active: true
        },
        {
            name: 'Kleo Soleil A. Mones',
            message: 'You have a nested array, so you will need to use a nested map in order to iterate over all items. ',
            date: '1hr ago',
            active: true
        },
        {
            name: 'Loida Mones',
            message: 'You have a nested array, so you will need to use a nested map in order to iterate over all items. ',
            date: '1hr ago',
            active: true
        },
        {
            name: 'Janelle Llagas',
            message: 'You have a nested array, so you will need to use a nested map in order to iterate over all items. ',
            date: '1hr ago',
            active: true
        },
        {
            name: 'Cindy Marie Llagas',
            message: 'You have a nested array, so you will need to use a nested map in order to iterate over all items. ',
            date: '1hr ago',
            active: true
        },
    ]
    return (
        <div>
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
                {messages.map((msg, index) => (
                    <div className="message-item mt-2 text-[#f5f5f5]">
                        <div className="flex items-center gap-5">
                            <Image src="/images/profile.svg" width={45} height={45} alt="Profile Picture" className="" />
                            <div className="flex flex-col gap-1">
                                <p className="font-bold">{msg.name}</p>
                                <p className="truncate max-w-xs text-sm">{msg.message}</p>
                            </div>
                        </div>
                        <p className="text-end mr-4">{msg.active ? 'now' : '1hr ago'}</p>
                    </div>
                ))}
            </ScrollArea>
        </div>
    )
}
