import { useState, PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { User } from '@/types';
import { IconSvg, SearchBar } from '@/Components/Chatter';
import Sidebar from './Sidebar';

export default function ChatterLayout({ user, header, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white fixed z-40 w-screen border-b border-gray-100">
                <div className="mx-auto px-2 sm:px-3 lg:px-4">
                    <div className="flex justify-between h-12">
                        <div className="flex ">
                            <div className="shrink-0 flex items-center border-r px-3 my-1 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all">
                                <Link href="/" className={`text-3xl font-extrabold`}>
                                    Chatter
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </NavLink>
                                <NavLink href={route('chatter')} active={route().current('chatter')}>
                                    Chatter
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='flex top-12 relative h-[calc(100vh-3rem)] '>
                <Sidebar />
                <main className="mex-h-full w-full flex flex-col">
                    {header && (
                        <header className="bg-white shadow">
                            {/* <div className="mx-auto py-4 px-2 sm:px-3 lg:px-4">{header}</div> */}
                            <div className="mx-auto px-2 flex justify-between">
                                <div className="flex items-center overflow-hidden p-3">
                                    <span className={`relative`}>
                                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 rounded-full bg-gray-100" />
                                        <span className="block bg-green-500 p-1 absolute rounded-full right-0 bottom-0 m-[1px]"></span>
                                    </span>
                                    <h3 className={`duration-300 origin-left pl-3 text-xl font-bold whitespace-nowrap leading-5`}>
                                        <div>{user.name}</div>
                                        <small className="font-normal">Administrator</small>
                                    </h3>
                                </div>
                                <div className="flex p-3 gap-3 pr-5">
                                    <button aria-label='Search' type="button" className={`w-9 flex justify-center`}>
                                        <IconSvg type="search" width='20' className="block h-9 fill-current" />
                                    </button>
                                    <button aria-label='Favorite' type="button" className={`w-9 flex justify-center`}>
                                        <IconSvg type="heart-2" width='24' className="block h-9 text-red-60 fill-red-400 my-auto" />
                                    </button>
                                    <button aria-label='Rington' type="button" className={`w-9 flex justify-center`}>
                                        <IconSvg type="bell" width='24' className="block h-9 text-red-60 fill-white stroke-black my-auto" />
                                    </button>
                                </div>
                            </div>
                        </header>
                    )} {children}
                </main>
            </div>
        </div>
    );
}
