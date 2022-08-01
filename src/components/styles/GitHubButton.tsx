import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';

const buttons: any = {
  preview: `
    align-self: flex-end;
    color: #2C1B47;
    background-color: #fff;
    padding: 5px 10px;

    &:hover {
      background-color: #2C1B47;
      color: #fff;
    };
  `,
  detail: `
    align-self: center;
    color: #fff;
    background-color: #2C1B47;
    padding: 10px 15px;
    width: 80%;

    &:hover {
      background-color: #fff;
      color: #2C1B47;
    };
  `,
}

interface ButtonProps {
  type: string;
}

const Button = styled.a<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  ${(props) => buttons[props.type]}

  > * {
    margin-right: 7px;
  }
`;
interface GitHubButtonProps {
  children: string;
  href: string;
  type: string;
}

function GitHubIcon() {
  return (
    <IconContext.Provider value={{ size: "1.2em" }}>
      <FaGithub />
    </IconContext.Provider>
  );
};

export default function GitHubButton(props: GitHubButtonProps) {
  return (
    <Button
      href={props.href}
      type={props.type}
    >
      <GitHubIcon />
      {props.children}
    </Button>
  );
};