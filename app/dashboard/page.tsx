import React from 'react'
import LeftSide from './left_side';
import RightSide from './right_side';

export default function Dashboard() {
    return (
        <div className="flex">
            <div className="w-2/6 bg-[#16161a] h-screen p-10">
                <LeftSide />
            </div>
            <div className="w-4/6 bg-[#3a3b3c] h-screen p-10">
                <RightSide />
            </div>
        </div>
    )
}
