import {useState} from 'react';

export function useCount() {
    const [count, setCount] = useState(1);

    const onChange = e => {
        const countValue = Number(e.target.value);
        setCount(countValue < 1 ? 1 : countValue > 100 ? 100 : countValue);
    };

    return {count, setCount, onChange}
}