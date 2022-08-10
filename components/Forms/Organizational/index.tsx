import { useForm, SubmitHandler } from 'react-hook-form';
import { Process } from '../../../types/entities/Process';
import { Input } from '../../Input/styles';
import Select from '../../Select';
import { TextArea } from '../../Textarea';
import * as Styled from './styles';

const OrganizationalForm = () => {
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
      <Styled.FormLabel htmlFor='name'>Name:</Styled.FormLabel>
      <Input {...register('name', { required: true })} />
      {errors.name && <span>This field is required</span>}
      <Styled.Spacer />
      <Styled.FormLabel htmlFor='macroProcess'>MacroProcess:</Styled.FormLabel>
      <Select
        options={macroProcessList}
        control={control as any}
        name='macroProcess'
      />
      {errors.macroProcess && <span>This field is required</span>}
      <Styled.Spacer />
      <Styled.FormLabel htmlFor='target'>Target:</Styled.FormLabel>
      <TextArea name='target' control={control as any} rows={3} />
      {errors.target && <span>This field is required</span>}
    </form>
  );
};

export default OrganizationalForm;
