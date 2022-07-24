import styled from 'styled-components';
import * as RadixPopover from '@radix-ui/react-popover';

export const PopoverContent = styled(RadixPopover.PopoverContent)`
  padding: 0;
  margin: 0;
  border-radius: 0;
  border: none;
  background-color: ${({ theme }) => theme.backgroundColors.primary};
`;
