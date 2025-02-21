import { FieldError } from "react-hook-form";
type InputFieldProps = {
  label: string;
  type?: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.HtmlHTMLAttributes<HTMLInputElement>;
  hidden?: boolean;
};
const InputField = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
  hidden,
}: InputFieldProps) => {
  return (
    <div className={hidden ? "hidden" : "w-full px-3"}>
      <label
        htmlFor={name}
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        {...register(name)}
        className="appearance-none block w-full ring-[1.5px] ring-bdWarmGray bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-xs text-red-400">{error.message?.toString()}</p>
      )}
    </div>
  );
};

export default InputField;
