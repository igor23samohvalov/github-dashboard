import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';

const Button = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 10px;
  background: #fff;
  color: #724C9D;
  width: 70px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    background-color: #2C1B47;
    color: #fff;
  };

  > * {
    margin-right: 5px;
  }
`;
interface GitHubButtonProps {
  children: string;
  href: string;
  align?: string;
  width?: string;
  jf?: string;
}

function GitHubIcon() {
  return (
    <IconContext.Provider value={{ size: "1.2em" }}>
      <FaGithub />
    </IconContext.Provider>
  );
};

export function GitHubButton({ children, href, align }: GitHubButtonProps) {
  return (
    <Button href={href} style={{ alignSelf: align }}>
      <GitHubIcon />
      {children}
    </Button>
  );
};

export function GitHubButtonOne({ children, href }: { children: string, href: string }) {
  return (
    <Button href={href} 
      style={{
        alignSelf: 'center',
        width: '80%',
        justifyContent: 'center',
        backgroundColor: '#2C1B47',
        color: '#fff',
        marginBottom: '1rem',
      }}
    >
      <GitHubIcon />
      {children}
    </Button>
  );
};