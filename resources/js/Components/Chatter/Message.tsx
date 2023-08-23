import { MessageInterface } from "@/types/Chatter";
import Skeleton from "./Skeleton";

export function Text({message, ...props}:{message:MessageInterface}) {
    return message.is_me ? 
        <RightMessage message={message} {...props} /> : 
        <LeftMessage message={message} {...props} /> ;
}

export function LeftMessage({message, ...props}:{message:MessageInterface}) {
    return (
        <div {...props} className="w-auto m-2 mb-5" data-id={message.id}>
            <div className="flex relative max-w-[85%]">
                <div className="leading-3 absolute -left-2 bg-white rounded-full p-1 z-10">
                    <Skeleton type="avatar" className="w-auto"/>
                </div>
                <div className="flex flex-col bg-white shadow-sm sm:rounded-lg p-2 pl-8 ml-2 relative">
                    <div className={`flex right-0 gap-1 bg-white absolute p-1 pr-2 rounded-xl -top-4 rounded-br-none`}>
                        <small className='bg-gray-200 px-1 rounded-xl'>12:30'</small>
                    </div>
                    <div className="font-serif">
                        {message.content}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function RightMessage({message, ...props}:{message:MessageInterface}) {
    return (
        <div {...props} className="w-auto m-2 mb-5 flex justify-end" data-id={message.id}>
            <div className="flex relative max-w-[85%]">
                <div className="flex flex-col bg-gray-200 shadow-sm sm:rounded-lg p-2 pl-8 ml-2 relative">
                    <div className={`flex right-0 gap-1 bg-gray-200 absolute p-1 pr-2 rounded-xl -top-4 rounded-br-none`}>
                        <small className='bg-gray-300 px-1 rounded-xl'>12:30'</small>
                        <small className='bg-gray-300 px-1 rounded'>Moi</small>
                    </div>
                    <div className="font-serif">
                        {message.content}
                    </div>
                </div>
                <div className={`flex gap-1 bg-gray-200 absolute p-1 pr-2 rounded-xl`}>
                    <small className='bg-gray-300 w-5 h-5 text-center rounded-xl'><i>V</i></small>
                </div>
            </div>
        </div>
    );
}