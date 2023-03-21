import TextInput, { TextInputProps } from './textInput';
import { UIMargin, IntervalDirection } from '../types';
import { convertUIMargin } from '../utils/covertTailwindClass';

type Props = {
  label: string;
  margin?: UIMargin;
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
