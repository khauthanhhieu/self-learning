import debounce from "lodash/debounce";

const DebounceInput = ({ onChange, ms }) => {
    const handleChange = (e) => {
        onChange(e)
    };

    const debouncedOnChange = debounce(handleChange, ms);

    return <input onChange={debouncedOnChange} />;
}

export default DebounceInput;
