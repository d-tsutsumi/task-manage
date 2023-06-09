import { FormEvent, SetStateAction } from 'react';
import { convertUiSize } from '../utils';
import { InputTextSize } from './types/index';
import { Subject } from 'rxjs';

export type TextInputProps = {
  id: string;
  value: string;
  placeholder?: string;
  /** password  or  text */
  type?: 'text' | 'password';
  /**
   * 'sm' | 'md' | 'lg' | 'xl' | '2xl' | "full"
   * */
  size?: InputTextSize;

  setState: Subject<FormEvent<HTMLInputElement>>
};

export default function TextInput({
  placeholder,
  type = 'text',
  value,
  id,
  size = 'md',
  setState,
}: TextInputProps) {
  const inputSize = convertUiSize(size);
  return (
    <input
      className={`shadow appearance-none border
      rounded ${inputSize} py-3 px-3 text-gray-700 mb-3 leading-tight
      focus:outline-none  focus:border-b-2 focus:border-pink-300`}
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={(e) => setState.next(e)}
      value={value}
    />
  );
}
