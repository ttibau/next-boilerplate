import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IUser } from '../../../types/entities/User';
import Button from '../../Button';
import { DialogContext } from '../../context/DialogContext';
import FormError from '../../FormError';
import { Input } from '../../Input/styles';
import Select from '../../Select';
import * as Styled from './styles';

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IUser>();

  const onSubmit: SubmitHandler<IUser> = (data) => {
    console.log(data);
  };

  const companyList = [
    {
      value: '1',
      label: 'Cheese benchmark Account',
    },
    {
      value: '2',
      label: 'Avon Handcrafted Kids',
    },
    {
      value: '3',
      label: 'firewall backing',
    },
  ];

  const { closeDialog } = useContext(DialogContext);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Styled.FormLabel htmlFor='name'>Nome:</Styled.FormLabel>
      <Input {...register('nvarNome', { required: true })} />
      {errors.nvarNome && <FormError error='This field is required' />}
      <Styled.Spacer />
      <Styled.FormLabel htmlFor='name'>Usuário:</Styled.FormLabel>
      <Input {...register('idnVarUsuario', { required: true })} />
      {errors.idnVarUsuario && <FormError error='This field is required' />}
      <Styled.Spacer />
      <Styled.Spacer />
      <Styled.FormLabel htmlFor='password'>Senha:</Styled.FormLabel>
      <Input type='password' {...register('nvarSenha', { required: true })} />
      {errors.nvarSenha && <FormError error='This field is required' />}
      <Styled.FormLabel htmlFor='macroProcess'>Empresa:</Styled.FormLabel>
      <Select
        options={companyList}
        control={control as any}
        name='empresa'
        required
      />
      {errors.empresa && <FormError error='This field is required' />}

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
