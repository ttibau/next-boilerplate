import { EmojiSad } from '@styled-icons/fluentui-system-regular/EmojiSad';
import styled from 'styled-components';

const ErrorTitle = styled.h1`
  color: #e6e6e6;
`;

const ErrorMessage = () => {
  return (
    <>
      <EmojiSad color='#e6e6e6' />
      <ErrorTitle>Something went wrong</ErrorTitle>
    </>
  );
};

export default ErrorMessage;
