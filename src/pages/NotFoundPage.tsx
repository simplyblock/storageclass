import React from 'react';
import {Link} from 'react-router-dom';
import {setPageMetadata} from "../utils/metadataUtils.js";

const NotFoundPage: React.FC = () => {
    setPageMetadata({
        title: "Page Not Found | StorageClass.info",
        description: "The page you were looking for could not be found.",
    });

    return (
        <div className="max-w-2xl mx-auto text-center py-24">
            <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">404</div>
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Page not found
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
                The page you were looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Link
                    to="/"
                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                    Go home
                </Link>
                <Link
                    to="/drivers"
                    className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-base font-semibold text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-blue-500"
                >
                    Browse CSI Drivers
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
