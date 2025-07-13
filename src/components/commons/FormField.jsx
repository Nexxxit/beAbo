export default function FormField({type, className, placeholder, value, onChange, required = false}) {
    return (
        <input
            type={type}
            className={`px-2 py-3 rounded-2xl bg-[#CBCACA] w-68 text-lg ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
        />
    )
}