export default function Button({text, onClick, className, disabled}) {
    return (
        <button
            disabled={disabled}
            className={`shadow bg-[#F6BA00]${disabled && '/32'}  ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}