import { ButtonSize } from './types';
import { convertUiSize } from '../utils';

type Props = {
  /**
   * 'sm' | 'md' | 'lg' | 'xl' | '2xl' | "full"
   */
  size?: ButtonSize;
  /**
   * button text
   */
  text: string;
};

export default function PrimarilyButton({ text, size = 'md' }: Props) {
  const buttonSize = convertUiSize(size);
  return (
    <button
      className={`${buttonSize} bg-pink-300 
      hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
      type='button'
    >
      {text}
    </button>
  );
}
