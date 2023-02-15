import React, { FC, useRef, useState } from 'react'

interface EventsExampleProps {

}

const EventsExample: FC<EventsExampleProps> = ({ }) => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const onInputChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    };

    const clickHandler = function (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        console.log(inputRef.current?.value);
        setValue('');
    };

    const dragHandler = function (e: React.DragEvent<HTMLDivElement>) {
        console.log('BEING DRAGGED')
    };

    const dropHandler = function (e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setIsDrag(false);
        console.log('HAS BEEN DROPPED');
    };

    const leaveHandler = function (e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setIsDrag(false);
    };

    const dragWithPreventHandler = function (e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setIsDrag(true);
    };

    return (
        <div>
            <input type="text" value={value} onChange={(e) => onInputChange(e)} placeholder='управляемый'/>
            <input type="text" ref={inputRef} placeholder='неуправляемый'/>
            <button onClick={(e) => clickHandler(e)} >Show</button>
            <div onDrag={(e) => dragHandler(e)} draggable style={{ width: '200px', height: '200px', background: '#900' }} ></div>
            <div
                onDrop={(e) => dropHandler(e)}
                onDragLeave={(e) => leaveHandler(e)}
                onDragOver={(e) => dragWithPreventHandler(e)}
                style={{ width: '200px', height: '200px', background: isDrag ? 'green' : '#900', marginTop: '15px' }}
            ></div>
        </div>
    )
}

export default EventsExample