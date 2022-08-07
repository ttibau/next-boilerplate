import styled from 'styled-components';
import * as SelectPrimitive from '@radix-ui/react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledTrigger = styled(SelectPrimitive.SelectTrigger)`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 13px;
  line-height: 1.5;
  height: 40px;
  gap: 5px;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.text.primary};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
`;

const StyledIcon = styled(SelectPrimitive.SelectIcon)`
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledContent = styled(SelectPrimitive.Content)`
  overflow: hidden;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

const StyledViewport = styled(SelectPrimitive.Viewport)`
  padding: 5px;
`;

interface SelectOptions {
  children: React.ReactNode;
}

function Content({ children, ...props }: SelectOptions) {
  return (
    <SelectPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </SelectPrimitive.Portal>
  );
}

const StyledItem = styled(SelectPrimitive.Item)`
  all: unset;
  font-size: 13px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;

  &[data-disabled] {
    color: ${({ theme }) => theme.colors.text.disabled};
    pointer-events: none;
  }

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const StyledLabel = styled(SelectPrimitive.Label)`
  padding: 0 25px;
  font-size: 12px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.gray};
`;

const StyledSeparator = styled(SelectPrimitive.Separator)`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray};
  margin: 5px;
`;

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.primary};
  cursor: default;
`;

const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.primary};
  cursor: default;
`;

export const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  padding: 5px;
  :hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Select = SelectPrimitive.Root;
export const SelectTrigger = StyledTrigger;
export const SelectValue = SelectPrimitive.Value;
export const SelectIcon = StyledIcon;
export const SelectContent = Content;
export const SelectViewport = StyledViewport;
export const SelectGroup = SelectPrimitive.Group;
export const SelectItem = StyledItem;
export const SelectItemText = SelectPrimitive.ItemText;
export const SelectItemIndicator = StyledItemIndicator;
export const SelectLabel = StyledLabel;
export const SelectSeparator = StyledSeparator;
export const SelectScrollUpButton = StyledScrollUpButton;
export const SelectScrollDownButton = StyledScrollDownButton;
