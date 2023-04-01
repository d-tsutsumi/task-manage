import TextInput, { TextInputProps } from './textInput';
import { UIMargin, IntervalDirection } from '../types';
import { convertUIMargin } from '../utils/covertTailwindClass';

type Props = {
  label: string;
  /**
   *  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
   */
  margin?: UIMargin;
  /**
   * 'l' | 'r' | 't' | 'b' | 'x' | 'y' | undefined;
   */
  direction?: IntervalDirection;
} & TextInputProps;

export default function InputGroup(inputProps: Props) {
  const { label, margin, direction } = inputProps;
  const TMargin = margin ? convertUIMargin(margin, direction) : '';

  return (
    <div className={TMargin}>
      <label className='block  text-gray-500 text-sm font-bold mb-2' htmlFor={label}>
        {label}
      </label>
      <TextInput {...inputProps} />
    </div>
  );
}
