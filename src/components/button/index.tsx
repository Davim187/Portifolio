import { StyledButton } from './style';

interface Props {
  nameButton: string;
}

export function Button(props: Props) {
  return (
    
    <StyledButton nameButton={props.nameButton}>
      {props.nameButton}
    </StyledButton>
  );
}
