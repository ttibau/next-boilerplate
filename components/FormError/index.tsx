import styled from 'styled-components';

export const FormErrorLabel = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.9rem;
`;

interface IFormError {
  error: string;
}

const FormError = ({ error }: IFormError) => {
  return <FormErrorLabel>{error}</FormErrorLabel>;
};

export default FormError;
