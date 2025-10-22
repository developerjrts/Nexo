interface props {
  value?: string;
  setValue?: (value: string) => void;
  placeholder?: string;
  label?: string;
  type?: "text" | "email" | "password";
}

const TextField = ({ type, setValue, value, label, placeholder }: props) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label && label}
      </label>
      <input
        className="outline-none form-input -mt-2  block w-full rounded-lg border border-gray-300  shadow-sm focus:border-[#007BFF] focus:ring focus:ring-[#007BFF] focus:ring-opacity-50 h-12 px-4"
        placeholder={placeholder}
        required
        type={type}
        onChange={(e) => setValue?.(e.target.value)}
        value={value}
      />
    </>
  );
};

export default TextField;
