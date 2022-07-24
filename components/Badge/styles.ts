import styled from 'styled-components';

interface BadgeProps {
  color?: string;
  bgColor: string;
}

export const BadgeContainer = styled.div<BadgeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor || props.theme.colors.primary};
  color: ${(props) => props.color || props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: bold;
  flex-direction: row;
  width: 3rem;
`;
