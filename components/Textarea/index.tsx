import * as Styled from './styles';
import { Control, Controller } from 'react-hook-form';

interface TextAreaProps {
  name: string;
  control: Control<any, any>;
  placeholder?: string;
  rows?: number;
  cols?: number;
  required?: boolean;
}

export function TextArea({
  name,
  control,
  placeholder,
  rows,
  cols,
  required,
}: TextAreaProps) {
  return (
    <Controller
      name={name}
      rules={{ required: required }}
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
