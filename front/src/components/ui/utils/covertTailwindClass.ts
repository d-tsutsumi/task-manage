import { match } from 'ts-pattern';
import { UISize, UIMargin, IntervalDirection } from '../types';

export const convertUiSize = (size: UISize) =>
  match(size)
    .with('lg', () => 'w-6/12')
    .with('md', () => 'w-4/12')
    .with('sm', () => 'w-2/12')
    .with('xl', () => 'w-8/12')
    .with('2xl', () => 'w-10/12')
    .with('full', () => 'w-full')
    .exhaustive();

export function convertUIMargin(margin: UIMargin, direction: IntervalDirection) {
  const d = match(direction)
    .with('l', () => 'ml')
    .with('r', () => 'mr')
    .with('t', () => 'mt')
    .with('b', () => 'mb')
    .with('x', () => 'mx')
    .with('y', () => 'my')
    .otherwise(() => 'm');

  return `${d}-${margin}`;
}
