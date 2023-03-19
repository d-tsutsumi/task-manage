import TextInput, { TextInputProps } from './textInput';

type Props = {
  label: string;
  margin?: string;
} & TextInputProps;

export default function InputGroup(inputProps: Props) {
  const { label, margin } = inputProps;
  return (
    <div className={margin}>
      <label className='block  text-gray-500 text-sm font-bold mb-2' htmlFor={label}>
        {label}
      </label>
      <TextInput {...inputProps} />
    </div>
  );
}
