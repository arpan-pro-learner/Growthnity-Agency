import React from 'react';
import { Link } from 'react-router-dom';

const FloatingButton: React.FC = () => {
    return (
        <div className='fixed z-50 flex bottom-5 right-5 rounded-full bg-green-500 hover:bg-green-600 p-2 md:p-4 shadow-xl'>
            {/* WhatsApp Share */}
            <Link
                to={`https://wa.me/6394958577?text=Hello,%20this%20is%20a%20message%20from%20Growthnity.`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-7 md:h-11 w-7 md:w-11 text-white"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-whatsapp"
                >
                    <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 1.6 5.4L2 22l4.8-1.6A10 10 0 0 0 12 22a10 10 0 0 0 10-10 10 10 0 0 0-10-10z" />
                    <path d="M16.3 14.2c-.4.2-1.3.6-1.5.7-.3.1-.6.2-.9 0-1.8-.6-3.2-2-3.8-3.8-.1-.3-.1-.6 0-.9.1-.2.5-1.1.7-1.5.1-.2.1-.4 0-.6s-.4-.6-.5-.8c-.1-.2-.3-.4-.5-.5-.2-.1-.4-.1-.6 0-.3 0-.7 0-1 .3-.3.3-1.3 1.3-1.3 3.2s1.3 4.2 2.4 5.3c1.2 1.2 3.2 2.4 5.3 2.4s2.9-1 3.2-1.3c.3-.3.3-.7.3-1 0-.2 0-.4-.1-.6s-.3-.4-.5-.5c-.2-.1-.6-.4-.8-.5-.2-.1-.4-.1-.6 0z" />
                </svg>
            </Link>
        </div>
    );
};

export default FloatingButton;