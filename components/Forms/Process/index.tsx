import { useForm, SubmitHandler } from 'react-hook-form';
import { Process } from '../../../types/entities/Process';
import { Input } from '../../Input/styles';
import Select from '../../Select';

const ProcessForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Process>();

  const onSubmit: SubmitHandler<Process> = (data) => {
    console.log(data);
  };

  console.log(watch('name'));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='name'>Name</label>
      <Input {...register('name', { required: true })} />
      {errors.name && <span>This field is required</span>}
      <Select />
    </form>
  );
};

export default ProcessForm;
