import ApplicationLogo from "@/Components/ApplicationLogo";
import { IconSvg, SearchBar } from "@/Components/Chatter";
import Skeleton from "@/Components/Chatter/Skeleton";
import { useState } from "react";

export default function Sidebar({className, ...props}:{className?:string}) {
    const [open, toggleOpen] = useState(true);
    const [activeTab, setActiveTab] = useState<string>('contacts');
    const [searchValue, setSearchValue]  = useState('');
    const [activeTabData, setActiveTabData] = useState({
        width:'null', height:'null', left:'null'
    });

    const [contacts, setContacts] = useState([])
    const [groups, setGroups] = useState([])
    const [poeple, setPoeple] = useState([])

    const handleChooseActiveTab = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {  // Caster e.target en HTMLButtonElement
        const target = e.target as HTMLButtonElement;
        const xData = target.getBoundingClientRect();
        setActiveTab(target.dataset.item||'');
        setActiveTabData({width: xData.width+'px', height:xData.height+'px', left:xData.x+'px'});
    }

    return (
        <aside className={`${className} ${open?'w-96':'w-16'} shadow-lg flex flex-col duration-300 relative bg-white`}>
            <button onClick={() => toggleOpen(!open)} aria-label='switch sidebar' className='p-1 absolute -right-3 top-4 rounded-full bg-gray-100 border'>
                <IconSvg type='arrow' width="16px" className={`duration-300 ${open?`rotate-180`:''}`} />
            </button>
            <div className="border-b flex items-center overflow-hidden p-3 py-2">
                <span className={`${open?'':'scale-[1.15]'} relative`}>
                    <ApplicationLogo className={`block fill-current text-gray-800 rounded-full transition-all bg-gray-50 ${open?'w-12 h-12':'w-9 h-9'}`} />
                    <span className="block bg-green-500 p-1 absolute rounded-full right-0 bottom-0 m-[3px]"></span>
                </span>
                <div>
                    <h3 className={`${open?'':'scale-0'} duration-300 origin-left pl-3 text-xl font-bold whitespace-nowrap leading-5 py-2`}>
                        <div>Mci Mangala</div>
                        <small className="font-normal">Administrator</small>
                    </h3>
                </div>
            </div>
            <div className="w-full overflow-hidden">
                <SearchBar value={searchValue} onChange={e => setSearchValue(e.target.value)} rounded={false} className={`${open?'':'py-2'} duration-500 bg-gray-200/[.5]`} buttonClassName={`${open?'pl-1':'px-3 scale-[1.5]'} duration-500`} />
            </div>
            <div className="p-2 flex flex-col h-full">
                <div className="flex bg-gray-200/[.5] hover:bg-gray-200 rounded-lg transition p-1 relative">
                    <div role="separator" aria-label="active element" className={`bg-white duration-300 rounded-md absolute -ml-2`} style={{...activeTabData}}></div>
                    <nav className="w-full justify-between flex space-x-2 overflow-hidden" aria-label="Tabs" role="tablist">
                        <button onClick={handleChooseActiveTab} data-item='contacts' type="button" className={`active:bg-gray-100 z-0 w-full hover:bg-gray-100 text-xs text-gray-700 font-medium rounded-md py-2 px-3`} role="tab">
                            Contacts
                        </button>
                        <button onClick={handleChooseActiveTab} data-item='groups' type="button" className={`active:bg-gray-100 z-0 w-full hover:bg-gray-100 text-xs text-gray-700 font-medium rounded-md py-2 px-3`} role="tab">
                            Groups
                        </button>
                        <button onClick={handleChooseActiveTab} data-item='people' type="button" className={`active:bg-gray-100 z-0 w-full hover:bg-gray-100 text-xs text-gray-700 font-medium rounded-md py-2 px-3`} role="tab">
                            People
                        </button>
                    </nav>
                </div>
                <div className="mt-3 bg-gray-200/[.5] rounded-lg h-full">
                    <div className={`h-[calc(100%-.75rem)] relative ${open?'m-3':'m-1'} overflow-hidden`}>
                        <div className={`${activeTab === 'contacts'?'top-0 opacity-100':''} w-full h-full absolute duration-300 opacity-0 -top-full`} role="tabpanel" aria-labelledby="pills-on-gray-color-item-1">
                            <ul className="text-gray-500">
                                {contacts.length ? contacts : [...Array(10)].map((_, index) => (
                                    <li key={index} className="flex mb-4">
                                        <Skeleton type="avatar" className="mr-2" />
                                        <div className="flex flex-col flex-1 justify-evenly">
                                            <div className="flex justify-between gap-2">
                                                <Skeleton type="line" className="w-3/4" />
                                                <Skeleton type="line" className="w-1/4" />
                                            </div>
                                            <div className="flex justify-between gap-2">
                                                <Skeleton type="line" className="w-full" />
                                                <Skeleton type="circle" className="h-[.75rem] w-[.75rem]" />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={`${activeTab === 'groups'?'top-0 opacity-100':''} w-full h-full absolute duration-300 opacity-0 -top-full`} role="tabpanel" aria-labelledby="pills-on-gray-color-item-1">
                            <ul className="text-gray-500">
                                {groups.length ? groups : [...Array(10)].map((_, index) => (
                                    <li key={index} className="flex mb-4">
                                        <Skeleton type="avatar" className="mr-2" />
                                        <div className="flex flex-col flex-1 justify-evenly">
                                            <div className="flex justify-between gap-2">
                                                <Skeleton type="line" className="w-3/4" />
                                                <Skeleton type="line" className="w-1/4" />
                                            </div>
                                            <div className="flex justify-between gap-2">
                                                <Skeleton type="line" className="w-full" />
                                                <Skeleton type="circle" className="h-[.75rem] w-[.75rem]" />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={`${activeTab === 'people'?'top-0 opacity-100':''} w-full h-full absolute duration-300 opacity-0 -top-full`} role="tabpanel" aria-labelledby="pills-on-gray-color-item-1">
                            <ul className="text-gray-500">
                                {contacts.length ? contacts : [...Array(10)].map((_, index) => (
                                    <li key={index} className="flex mb-4">
                                        <Skeleton type="avatar" className="mr-2" />
                                        <div className="flex flex-col flex-1 justify-evenly">
                                            <div className="flex justify-between gap-2">
                                                <Skeleton type="line" className="w-full" />
                                            </div>
                                            <div className="flex justify-between gap-2">
                                                <Skeleton type="line" className="w-full" />
                                                <Skeleton type="line" className="w-1/4" />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={`${searchValue?'top-0 opacity-100':''} bg-gray-100 w-full h-full absolute duration-300 opacity-0 -top-full`} role="tabpanel" aria-labelledby="pills-on-gray-color-item-1">
                            <ul className="text-gray-500 dark:text-gray-400">
                                {[...Array(10)].map((_, index) => (
                                    <li key={index} className="flex mb-4">
                                        <Skeleton type="avatar" className="mr-2" />
                                        <div className="flex flex-col flex-1 justify-evenly">
                                            <div className="flex justify-between gap-2">
                                                <Skeleton type="line" className="w-3/4" />
                                                <Skeleton type="line" className="w-1/4" />
                                            </div>
                                            <div className="flex justify-between gap-2">
                                                <Skeleton type="line" className="w-full" />
                                                <Skeleton type="circle" className="h-[.75rem] w-[.75rem]" />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </aside>
    )
}