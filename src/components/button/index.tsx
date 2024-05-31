import { StyledButton } from './style';

interface Props {
  nameButton: string;
  onClick:any
  target?:any
}

export function Button(props: Props) {
  return (
    
    <StyledButton nameButton={props.nameButton} onClick={props.onClick}  target={props.target}>
      {props.nameButton}
    </StyledButton>
  );
}
