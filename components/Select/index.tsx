import * as Styled from './styles';
import {
  faChevronDown,
  faChevronUp,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
const Select = () => {
  return (
    <>
      <Styled.Select>
        <Styled.SelectTrigger>
          <Styled.SelectValue placeholder='Select a process' />
          <Styled.SelectIcon>
            <Styled.Icon icon={faChevronDown} />
          </Styled.SelectIcon>
        </Styled.SelectTrigger>
        <Styled.SelectContent>
          <Styled.SelectScrollUpButton>
            <Styled.Icon icon={faChevronUp} />
          </Styled.SelectScrollUpButton>
          <Styled.SelectViewport>
            <Styled.SelectGroup>
              <Styled.SelectLabel>Teste</Styled.SelectLabel>
              <Styled.SelectItem value='apple'>
                <Styled.SelectItemText>Apple</Styled.SelectItemText>
                <Styled.SelectItemIndicator>
                  <Styled.Icon icon={faCheck} />
                </Styled.SelectItemIndicator>
              </Styled.SelectItem>
              <Styled.SelectItem value='banana'>
                <Styled.SelectItemText>Banana</Styled.SelectItemText>
                <Styled.SelectItemIndicator>
                  <Styled.Icon icon={faCheck} />
                </Styled.SelectItemIndicator>
              </Styled.SelectItem>
            </Styled.SelectGroup>
          </Styled.SelectViewport>
          <Styled.SelectScrollDownButton>
            <Styled.Icon icon={faChevronDown} />
          </Styled.SelectScrollDownButton>
        </Styled.SelectContent>
      </Styled.Select>
    </>
  );
};

export default Select;
