import { convertUiSize } from '../utils';
import { InputTextSize } from './types/index';

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
};

export default function TextInput({
  placeholder,
  type = 'text',
  value,
  id,
  size = 'md',
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
    />
  );
}


const a = () => (
  <div>
    <a href='/'>Link</a>
    <button>Button</button>
    <footer>ContentInfo</footer>
    <h1>Heading</h1>
    <header>Banner</header>
    <img src="" alt="descripttion" /> Img
    <input type="checkbox" /> CheckBox
    <input type="number" /> Spinbutton
    <input type="radio" /> Radio
    <input type="text" /> TextBox
    <li>ListItem</li>
    <ul>ListGroup</ul>
  </div>
)