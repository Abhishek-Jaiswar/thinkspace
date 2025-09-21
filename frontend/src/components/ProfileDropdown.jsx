import React, { useState, useRef, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { baseUrl } from "../libs/api";
import { AuthContext } from "../context/AuthContext";

export default function ProfileDropdown() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleLogout = async () => {
        try {
            await baseUrl.post("/api/user/logout");
            navigate("/login");
            toast.success("Logged out, see you soon buddy!");
            setOpen(false)
        } catch (error) {
            console.error("Logout failed:", error);
            toast.error("Logout failed. Please try again.");
        }
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Avatar */}
            <div
                onClick={() => setOpen(!open)}
                className="w-10 h-10 rounded-full border border-orange-500 overflow-hidden flex items-center justify-center cursor-pointer"
            >
                {user && user?.avatar ? (
                    <img
                        src={user?.avatar}
                        alt={user?.email || "User Avatar"}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <span className="text-2xl font-bold text-orange-500">
                        {user?.firstName?.[0]?.toUpperCase()}
                    </span>
                )}
            </div>

            {/* Dropdown menu */}
            {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border border-neutral-200 z-50">
                    <ul className="py-1">
                        <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                                navigate("/profile");
                                setOpen(false);
                            }}
                        >
                            Profile
                        </li>
                        <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={handleLogout}
                        >
                            Logout
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
