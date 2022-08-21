import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Process } from '../../../types/entities/Process';
import Button from '../../Button';
import { DialogContext } from '../../context/DialogContext';
import FormError from '../../FormError';
import { Input } from '../../Input/styles';
import Select from '../../Select';
import { TextArea } from '../../Textarea';
import * as Styled from './styles';

const UserForm = () => {
  const {
    register,
    handleSubmit,
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

  const { closeDialog } = useContext(DialogContext);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Styled.FormLabel htmlFor='name'>Name:</Styled.FormLabel>
      <Input {...register('name', { required: true })} />
      {errors.name && <FormError error='This field is required' />}
      <Styled.Spacer />
      <Styled.FormLabel htmlFor='macroProcess'>MacroProcess:</Styled.FormLabel>
      <Select
        options={macroProcessList}
        control={control as any}
        name='macroProcess'
        required
      />
      {errors.macroProcess && <FormError error='This field is required' />}
      <Styled.Spacer />
      <Styled.FormLabel htmlFor='target'>Target:</Styled.FormLabel>
      <TextArea required name='target' control={control as any} rows={3} />
      {errors.target && <FormError error='This field is required' />}
      <Styled.ActionButtons>
        <Button
          outline
          onClick={closeDialog}
          label='Cancel'
          color='secondary'
        />
        <Button type='submit' label='Save' color='primary' />
      </Styled.ActionButtons>
    </form>
  );
};

export default UserForm;
