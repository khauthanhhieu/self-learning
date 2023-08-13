import { useEffect, useState } from "react";

const DebounceButton = ({ onClick, ms, ...props }) => {
    const [timeoutId, setTimeoutId] = useState();

    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [timeoutId])

    const handleClick = (e) => {
        const newTimeoutId = setTimeout(() => onClick(e), ms);
        setTimeoutId(newTimeoutId);
    }

    return <button {...props} onClick={handleClick} />
}

export default DebounceButton;
