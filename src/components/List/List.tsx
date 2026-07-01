import React from 'react';
import ListItem  from './ListItem/ListItem';

interface ToDoProps {
    className?: string;
}

export default function ToDo({className} : ToDoProps) {
    return (
        <div className={className}>
            <ol className='list-decimal pl-6'>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </ol>
        </div>
    );
}