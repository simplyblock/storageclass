import React from 'react';
import {NavLink} from 'react-router-dom';
import {Github} from 'lucide-react';

const Header: React.FC = () => {
    return (
        <header
            className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/90 transition-colors duration-200">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-6">
                    <NavLink to="/" className="flex items-center space-x-2">
                        <p className="text-2xl font-bold text-gray-800 dark:text-white">
                            StorageClass.info
                        </p>
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-md font-medium">
                            CSI Driver List
                        </span>
                    </NavLink>

                    <nav className="hidden md:flex items-center space-x-2">
                        <NavLink
                            to="/drivers"
                            className={({isActive}) =>
                                `text-sm font-semibold px-3 py-2 rounded-lg transition ${isActive
                                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
                                }`
                            }
                        >
                            CSI Driver List
                        </NavLink>
                        <NavLink
                            to="/storage-class"
                            className={({isActive}) =>
                                `text-sm px-3 py-2 rounded-lg transition ${isActive
                                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
                                }`
                            }
                        >
                            StorageClass
                        </NavLink>
                        <NavLink
                            to="/glossary"
                            className={({isActive}) =>
                                `text-sm px-3 py-2 rounded-lg transition ${isActive
                                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
                                }`
                            }
                        >
                            Glossary
                        </NavLink>
                        <NavLink
                            to="/sponsors"
                            className={({isActive}) =>
                                `text-sm px-3 py-2 rounded-lg transition ${isActive
                                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
                                }`
                            }
                        >
                            Sponsors
                        </NavLink>
                    </nav>
                </div>

                <div className="flex items-center space-x-4">
                    <a
                        href="https://github.com/storageclass/storageclass"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={20}/>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
