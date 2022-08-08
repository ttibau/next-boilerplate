import { Control, Controller } from 'react-hook-form';
import * as Styled from './styles';

interface SelectProps {
  options: Array<{
    value: string;
    label: string;
  }>;
  name: any;
  control: Control<any, any>;
}

const SelectComponent = ({ options, name, control }: SelectProps) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur } }) => {
          return (
            <Styled.SelectComponent
              options={options}
              placeholder={'Choose...'}
              onChange={onChange}
              onBlur={onBlur}
              styles={{
                control: (provided) => ({
                  ...provided,
                  border: '1px solid #e6e6e6',
                  borderRadius: 5,
                  outline: 'none',
                  boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.3s ease-in-out',
                  '&:focus': {
                    borderColor: '#0070f3',
                  },
                }),
              }}
            />
          );
        }}
      />
    </>
  );
};

export default SelectComponent;
