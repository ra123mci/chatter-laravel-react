import ChatterLayout from '@/Layouts/ChatterLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { IconSvg } from '@/Components/Chatter';
import { Text } from '@/Components/Chatter/Message';
import { useState } from 'react';
import Skeleton from '@/Components/Chatter/Skeleton';
import { MessageInterface } from '@/types/Chatter';

const currentDate = new Date

const messages:MessageInterface[] = [
    {id:1, date:currentDate, content:'salut les terriens'}
    ,{id:1, date:currentDate, content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente quas soluta voluptas a eaque odio facere quisquam blanditiis minus error, nemo aliquid placeat sed eos. Fuga ipsam rerum temporibus.'}
    ,{id:1, is_me:true,  date:currentDate, content:'salut les terriens'} 
    ,{id:1, date:currentDate, content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae perspiciatis vitae labore cum error facere ut, iste molestiae nulla quaerat voluptates ex adipisci libero. Eveniet laudantium ratione itaque et?'}
    ,{id:1, is_me:true,  date:currentDate, content:'salut les terriens'}
    ,{id:1, date:currentDate, content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente quas soluta voluptas a eaque odio facere quisquam blanditiis minus error, nemo aliquid placeat sed eos. Fuga ipsam rerum temporibus.'}
    ,{id:1, is_me:true,  date:currentDate, content:'salut les terriens'} 
    ,{id:1, date:currentDate, content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae perspiciatis vitae labore cum error facere ut, iste molestiae nulla quaerat voluptates ex adipisci libero. Eveniet laudantium ratione itaque et?'}
    ,{id:1, is_me:true,  date:currentDate, content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit maiores similique! Beatae itaque ex cupiditate ducimus unde quidem quo quae modi reiciendis sapiente, officiis aliquam debitis molestias molestiae dolor.'}
    ,{id:1, is_me:true,  date:currentDate, content:'salut les terriens'}
    ,{id:1, date:currentDate, content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente quas soluta voluptas a eaque odio facere quisquam blanditiis minus error, nemo aliquid placeat sed eos. Fuga ipsam rerum temporibus.'}
    ,{id:1, date:currentDate, content:'salut les terriens'} 
    ,{id:1, is_me:true,  date:currentDate, content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae perspiciatis vitae labore cum error facere ut, iste molestiae nulla quaerat voluptates ex adipisci libero. Eveniet laudantium ratione itaque et?'}
    ,{id:1, date:currentDate, content:'salut les terriens'}
]

export default function Chatter({ auth }: PageProps) {
    const [messageInput, setMessageInput] = useState('');

    return (
        <ChatterLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        > <Head title="Dashboard" />

            <div className="h-full w-full overflow-y-auto overflow-x-hidden p-3">
                <div className="ml-1 pb-0">
                    {messages.map((message) => (
                        <Text key={`message_${message.id}`} message={message} />
                    ))}
                    <div className="w-auto max-w-[85%] m-2 h-14">
                        <div className="flex relative">
                            <div className="leading-3 absolute -left-2 bg-white rounded-full p-1 z-10">
                                <Skeleton type="avatar" className="w-auto"/>
                            </div>
                            <div className="flex flex-col bg-white shadow-sm sm:rounded-lg p-2 pl-8 ml-2 relative">
                                <div className={`flex right-0 gap-1 bg-white absolute p-1 pr-2 rounded-xl -top-4 rounded-br-none`}>
                                    <small className='bg-gray-200 px-1 rounded-xl'>12:30'</small>
                                    <small><i className='bg-gray-200 px-1 rounded-full'>V</i></small>
                                </div>
                                <div className="font-serif">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa consequuntur cumque iusto, excepturi accusantium, vitae, eveniet ut recusandae error facere eos. Cumque ipsam doloribus enim modi repudiandae quisquam vitae temporibus!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="">
                <div className="mx-auto sm:px-2 lg:px-3 flex">
                    <div className="shadow-sm sm:rounded-lg w-full bg-white flex p-3 py-2 gap-1 mb-1">
                        <button aria-label='Rington' type="button" className={`w-11 flex justify-center bg-gray-200 rounded-full`}>
                            <IconSvg type="smiley" width='32' className="block h-9 text-red-60 fill-white stroke-black my-auto" />
                        </button>
                        <textarea value={messageInput} onChange={e => setMessageInput(e.target.value)} rows={1} aria-label='messageInput content' name="content" id="messageInput--content" className={`
                            border-0 w-full focus:ring-0 font-serif
                        `}/>
                        <button aria-label='switch sidebar' className={`w-11 duration-300 flex justify-center bg-gray-200 rounded-full ${messageInput?'scale-0 w-0':'scale-100 w-100'}`}>
                            <IconSvg type='audio' width='32' className={`block h-9`} />
                        </button>
                        <button aria-label='Favorite' type="button" className={`w-11 flex justify-center bg-gray-200 rounded-full`}>
                            <IconSvg type="picture" width='32' className="block h-9 text-red-60 fill-white my-auto" />
                        </button>
                        <button aria-label='Search' type="button" className={`w-11 flex justify-center bg-gray-200 stroke-gray-100 rounded-full`}>
                            <IconSvg type="paper-clip" width='32' className="block h-9 fill-current" />
                        </button>
                        <button aria-label='Rington' type="button" className={`w-11 duration-300 flex justify-center bg-gray-200 stroke-gray-100 rounded px-2 ${!messageInput?'scale-0 w-0':'scale-100 w-100'}`}>
                            <IconSvg type="send" width='32' className="block w-8 h-8 text-red-60 fill-white stroke-black my-auto" />
                        </button>
                    </div>
                </div>
            </div>
        </ChatterLayout>
    );
}
