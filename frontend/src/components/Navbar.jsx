import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LucideMenu, X } from "lucide-react";

const navlinks = [
    { id: 1, path: "/testimonial", name: "Testimonials" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/post", name: "Post" },
    { id: 4, path: "/pricing", name: "Pricing" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isLoggedIn = false;
    const username = "Abhishek Jaiswar";
    const bio = ["food", "travel", "technology"];

    const handleOpen = () => setIsOpen((prev) => !prev);

    return (
        <nav className="relative border-b border-neutral-200 bg-white shadow-xs">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img className="w-10" src="./globe.svg" alt="logo" />
                    <h1 className="text-xl font-bold text-orange-500">
                        Think<span className="text-neutral-950">Space</span>
                    </h1>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex gap-8">
                    {navlinks.map((link) => (
                        <NavLink
                            key={link.id}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors duration-300 ${isActive
                                    ? "text-orange-500 font-semibold"
                                    : "text-neutral-700 hover:text-orange-500"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex items-center gap-5">
                    <Link
                        to="/login"
                        className="text-neutral-700 text-sm hover:text-orange-500 transition"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="text-neutral-50 text-sm bg-orange-500 px-4 py-2 rounded-md shadow-md hover:bg-orange-400 transition"
                    >
                        Start for free
                    </Link>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden text-neutral-700 hover:text-orange-500 transition"
                    onClick={handleOpen}
                >
                    {isOpen ? <X size={28} /> : <LucideMenu size={28} />}
                </button>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-[16rem] bg-orange-50 shadow-lg transform transition-transform duration-300 z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
                        <div className="flex items-center gap-2">
                            <img className="w-8" src="./globe.svg" alt="logo" />
                            <h1 className="text-lg font-bold text-orange-500">
                                Think<span className="text-neutral-950">Space</span>
                            </h1>
                        </div>
                        <X
                            onClick={handleOpen}
                            className="cursor-pointer hover:text-orange-500"
                        />
                    </div>

                    {/* Nav Links */}
                    <div className="flex flex-col px-6 py-6 space-y-6 flex-1">
                        {navlinks.map((link) => (
                            <NavLink
                                key={link.id}
                                to={link.path}
                                onClick={handleOpen}
                                className={({ isActive }) =>
                                    `text-base font-medium transition-colors duration-300 hover:text-orange-500 ${isActive
                                        ? "text-orange-500 font-semibold"
                                        : "text-neutral-700"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Footer (User Info / Auth) */}
                    {isLoggedIn ? (
                        <div className="flex items-center gap-3 px-4 py-3 border-t border-neutral-200">
                            <div className="w-12 h-12 rounded-full border border-neutral-200 overflow-hidden">
                                <img className="w-full h-full object-cover" src="./globe.svg" alt="user" />
                            </div>
                            <div>
                                <h1 className="text-sm font-semibold text-neutral-700">{username}</h1>
                                <p className="text-xs text-neutral-500">
                                    {bio.join(", ")}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-12 border-t border-neutral-200 flex items-center justify-center">
                            <div className=" w-full h-full flex items-center justify-center">
                                <Link
                                    to="/login"
                                    onClick={handleOpen}
                                    className=" w-1/2 text-sm text-neutral-700 hover:text-orange-500 transition"
                                >
                                    Login
                                </Link>
                            </div>
                            <div className="w-full h-full flex items-center justify-center bg-orange-500">
                                <Link
                                    to="/signup"
                                    onClick={handleOpen}
                                    className=" text-sm text-neutral-50"
                                >
                                    Start for free
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Overlay (click to close) */}
            {isOpen && (
                <div
                    onClick={handleOpen}
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
                ></div>
            )}
        </nav>
    );
};

export default Navbar;
