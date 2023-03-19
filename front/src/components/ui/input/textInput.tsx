export type TextInputProps = {
  id: string;
  value: string;
  placeholder?: string;
  type?: 'text' | 'password';
};

export default function TextInput({ placeholder, type = 'text', value, id }: TextInputProps) {
  return (
    <input
      className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
      id={id}
      type={type}
      placeholder={placeholder}
    />
  );
}
