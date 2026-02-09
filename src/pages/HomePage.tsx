import React from 'react';
import {Link} from 'react-router-dom';
import {HardDrive, Database, Users, ExternalLink} from 'lucide-react';
import {setPageMetadata} from "../utils/metadataUtils.js";

const HomePage: React.FC = () => {
    setPageMetadata({
        title: "CSI Driver List for Kubernetes | StorageClass.info",
        description: "Discover a complete CSI driver list for Kubernetes. Compare CSI drivers by storage type, feature support, and vendor compatibility.",
        keywords: [
            "CSI drivers",
            "CSI driver list",
            "Kubernetes storage",
            "StorageClass",
            "Container Storage Interface",
            "CSI plugins"
        ]
    })

    return (
        <div className="relative max-w-6xl mx-auto overflow-hidden">
            <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl dark:bg-blue-900/30" />
            <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-900/20" />

            <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center mb-16">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm dark:border-blue-800 dark:bg-gray-900/60 dark:text-blue-300">
                        CSI Drivers Directory
                        <span className="h-2 w-2 rounded-full bg-blue-500" />
                    </div>
                    <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Find the CSI driver that fits your Kubernetes stack
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Compare CSI drivers by storage type, feature support, and vendor compatibility in one clean,
                        searchable directory.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            to="/drivers"
                            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700"
                        >
                            Browse CSI Drivers
                        </Link>
                        <Link
                            to="/storage-class"
                            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-base font-semibold text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-blue-500"
                        >
                            StorageClass Basics
                        </Link>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="rounded-lg border border-gray-200 bg-white/70 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900/60">
                            <div className="text-2xl font-semibold text-gray-900 dark:text-white">150+</div>
                            Drivers indexed
                        </div>
                        <div className="rounded-lg border border-gray-200 bg-white/70 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900/60">
                            <div className="text-2xl font-semibold text-gray-900 dark:text-white">10+</div>
                            Capability filters
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 shadow-xl dark:border-blue-900/40 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/30">
                    <div className="rounded-xl bg-white/80 p-6 shadow-sm backdrop-blur dark:bg-gray-900/70">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Featured: CSI Driver List
                            </h2>
                            <HardDrive className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                            Filter by access mode, lifecycle support, and storage capabilities in seconds.
                        </p>
                        <div className="mt-5 space-y-3">
                            {["Block, File, Object", "Snapshots, Clones, Expansion", "NVMe-oF, iSCSI, QoS"].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
                                >
                                    {item}
                                    <span className="text-blue-600 dark:text-blue-400">Included</span>
                                </div>
                            ))}
                        </div>
                        <Link
                            to="/drivers"
                            className="mt-6 inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200"
                        >
                            Explore the directory
                        </Link>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
                {[
                    {
                        icon: <Database className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
                        title: "StorageClass Explained",
                        description: "Understand provisioning, policies, and storage class design patterns.",
                        link: "/storage-class",
                    },
                    {
                        icon: <HardDrive className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
                        title: "CSI Drivers Directory",
                        description: "Compare CSI drivers across features, vendors, and Kubernetes versions.",
                        link: "/drivers",
                    },
                    {
                        icon: <Users className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
                        title: "Our Sponsors",
                        description: "Meet the companies supporting StorageClass.info.",
                        link: "/sponsors",
                    },
                ].map((card) => (
                    <Link
                        key={card.title}
                        to={card.link}
                        className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
                    >
                        <div className="mb-4">{card.icon}</div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {card.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {card.description}
                        </p>
                        <span className="text-sm font-semibold text-blue-700 group-hover:text-blue-800 dark:text-blue-300 dark:group-hover:text-blue-200">
                            Learn more →
                        </span>
                    </Link>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        For Developers
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        Pinpoint CSI drivers for specific stacks, validate compatibility, and ship faster.
                    </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        For Operations
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        Compare lifecycle support, access modes, and advanced capabilities before you deploy.
                    </p>
                </div>
            </div>

            <div className="mt-16 rounded-2xl border border-blue-100 bg-blue-50 p-8 text-center shadow-sm dark:border-blue-900/40 dark:bg-blue-950/40">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    Understanding CSI Drivers
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    CSI standardizes how Kubernetes integrates block and file storage across cloud, on-prem, and hybrid
                    environments.
                </p>
                <a
                    href="https://www.simplyblock.io/blog/kubernetes-csi-container-attached-storage-and-container-storage-interface/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-blue-700 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200"
                >
                    Learn more about CSI and Container Attached Storage
                    <ExternalLink className="w-4 h-4 ml-1"/>
                </a>
            </div>
        </div>
    );
};

export default HomePage;
