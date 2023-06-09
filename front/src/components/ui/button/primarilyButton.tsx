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

  onClickHandle?: () => void;

  type?: 'button' | 'submit' | 'reset' | undefined;
};

export default function PrimarilyButton({
  text,
  size = 'md',
  onClickHandle = () => {},
  type = 'button',
}: Props) {
  const buttonSize = convertUiSize(size);
  return (
    <button
      className={`${buttonSize} xl:w-3/5 lg:w-2/5 bg-pink-300 
      hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
      type={type}
      onClick={onClickHandle}
    >
      {text}
    </button>
  );
}
