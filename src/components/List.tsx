import React, { FC, ReactNode } from 'react'

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
};

const List = function<T> (props: ListProps<T>) {
    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
};

export default List;