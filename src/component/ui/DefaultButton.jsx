import { Button } from "../../style/style";

function DefaultButton(props) {
  return <Button onClick={props.buttonClick}>{props.buttonText}</Button>;
}

export default DefaultButton;
