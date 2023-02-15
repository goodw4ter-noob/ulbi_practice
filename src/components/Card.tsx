import React, { FC, PropsWithChildren, ReactNode, useState } from 'react'

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',
}

type Props = {
    width: string,
    height: string,
    variant: CardVariant,
    onClick: (num: number) => void;
    // children: ReactNode,
}

const Card: FC<PropsWithChildren<Props>> = ({ onClick, variant, width, height, children }) => {

    const [value, setValue] = useState<number>(0);

    return (
        <div style={{
            height, width, border: variant === CardVariant.outlined ? '2px solid red' : 'none',
            background: variant === CardVariant.primary ? '#ccc' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
            onClick={() => {onClick(value); setValue(value + 1)}}
        >
            {children}
        </div>
    )
}

export default Card