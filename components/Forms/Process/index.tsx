import { useForm, SubmitHandler } from 'react-hook-form';
import { Process } from '../../../types/entities/Process';
import { Input } from '../../Input/styles';
import Select from '../../Select';
import * as Styled from './styles';

const ProcessForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<Process>();

  const onSubmit: SubmitHandler<Process> = (data) => {
    console.log(data);
  };

  const macroProcessList = [
    {
      value: '1',
      label: 'Processo 1',
    },
    {
      value: '2',
      label: 'Processo 2',
    },
    {
      value: '3',
      label: 'Processo 3',
    },
  ];

  console.log(watch('name'));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='name'>Name:</label>
      <Input {...register('name', { required: true })} />
      {errors.name && <span>This field is required</span>}
      <Styled.Spacer />
      <Select
        options={macroProcessList}
        control={control}
        label='Macro Process:'
        name='macroProcess'
      />
      {errors.macroProcess && <span>This field is required</span>}
    </form>
  );
};

export default ProcessForm;
