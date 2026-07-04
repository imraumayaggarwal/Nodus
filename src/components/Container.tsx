import React from 'react';

export default function Container({
    children,
    className = ""
}: {
    children : React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`max-w-[1600px] px-6 md:px-10 mx-auto w-full relative ${className}`}>
            {children}
        </div>
    );
}