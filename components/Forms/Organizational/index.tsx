import { useForm, SubmitHandler } from 'react-hook-form';
import { IOrganizational } from '../../../types/entities/Organizational';
import FormError from '../../FormError';
import { Input } from '../../Input/styles';
import Select from '../../Select';
import { TextArea } from '../../Textarea';
import * as Styled from './styles';

const OrganizationalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IOrganizational>();

  const onSubmit: SubmitHandler<IOrganizational> = (data) => {
    console.log(data);
  };

  const parentList = [
    {
      value: '1',
      label: 'Presidencia',
    },
    {
      value: '2',
      label: 'Diretoria 2',
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Styled.FormLabel htmlFor='name'>Name:</Styled.FormLabel>
      <Input {...register('label', { required: true })} />
      {errors.label && <FormError error='This field is required' />}
      <Styled.Spacer />
      <Styled.FormLabel htmlFor='parent'>Parent:</Styled.FormLabel>
      <Select options={parentList} control={control as any} name='parent' />
      {errors.parentId && <FormError error='This field is required' />}
      <Styled.Spacer />
    </form>
  );
};

export default OrganizationalForm;
