import { useEffect, useState } from 'react';
import * as Styled from './styles';

export function Input({
  value: initialValue,
  onChange,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <Styled.Input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
