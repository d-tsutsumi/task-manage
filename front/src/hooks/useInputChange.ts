import { FormEvent, useState } from 'react';
import { Subject } from 'rxjs';

export const useTextInputValue = (): [string, Subject<FormEvent<HTMLInputElement>>] => {
  const [state, setState] = useState<string>('');

  const subject = new Subject<FormEvent<HTMLInputElement>>();
  subject.subscribe({
    next: (e) => setState(e.currentTarget.value),
    error: (e) => console.log(e),
    complete: () => setState(''),
  });

  return [state, subject];
};
