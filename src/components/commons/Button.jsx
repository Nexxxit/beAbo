export default function Button({text, onClick, className, disabled = false}) {
    return (
        <button
            disabled={disabled}
            className={`shadow montserrat-semi-bold rounded-2xl py-3 text-xl ${disabled ? 'bg-[#F6BA00]/68' : 'bg-[#F6BA00]'}  ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}