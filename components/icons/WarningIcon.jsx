const WarningIcon = (props) => {
    return (
        <svg
            width={14}
            height={14}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.56 1h.88l6.54 12.26-.44.74H1.44L1 13.26 7.56 1zM8 2.28L2.28 13H13.7L8 2.28zM8.625 12v-1h-1.25v1h1.25zm-1.25-2V6h1.25v4h-1.25z"
            />
        </svg>
    );
};

export default WarningIcon;
