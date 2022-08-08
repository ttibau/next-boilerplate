import * as Styled from './styles';
import { Control, Controller } from 'react-hook-form';

interface TextAreaProps {
  name: string;
  control: Control<any, any>;
  placeholder?: string;
  rows?: number;
  cols?: number;
}

export function TextArea({
  name,
  control,
  placeholder,
  rows,
  cols,
}: TextAreaProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur } }) => {
        return (
          <Styled.Textarea
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            rows={rows}
            cols={cols}
          />
        );
      }}
    />
  );
}
