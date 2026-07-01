import React from 'react';

interface ListItemProps {
    className?: string;
}

export default function ListItem({className} : ListItemProps) {
    return (
        <li className={className}>
            item 1
        </li>
    );
}