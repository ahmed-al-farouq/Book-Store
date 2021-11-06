import styled from 'styled-components';

const Nav = styled.nav`
  margin: 0 0 2.375rem;
  padding: 1.438rem 6.188rem 1.688rem 6.25rem;
  box-shadow: 0 0 4px 1px #0000186e;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 1.438rem 0 1.688rem 0;
    position: relative;
  }
`;

const Logo = styled.span`
  margin: 0.375rem 2.938rem 0.125rem 0;
  font-family:  'Montserrat', sans-serif;
  font-size: 1.875rem;
  font-weight: bold;
  color: #0290ff;
`;

const CollapseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  @media (max-width: 768px) {
    position: absolute;
    top: 95px;
    width: 100%;
    padding: 10px 20px;
    background: #fff;
    flex-direction: column-reverse;
    z-index: 4;
    box-shadow: 0 3px 3px 0px #0000186e;
    height: 0;
    overflow: hidden;
  }
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  width: 25%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Li = styled.li`
  margin: 1.125rem 2.563rem 0.688rem 0;
  font-family:  'Montserrat', sans-serif;
  font-size: 1rem;
  letter-spacing: 1.9px;
  color: #121212;
  opacity: ${(props) => props.active || 0.8};
`;

const Icon = styled.div`
  margin: 0 1rem 0 auto;
  justify-self: flex-end;
  padding: 0.78rem 0.875rem;
  border: solid 1px #e8e8e8;
  border-radius: 50%;

`;

const MenuIcon = styled.div`
  & svg {
    font-size: 30px;
    color: #0290ff;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export {
  Nav, Logo, Ul, Li, Icon, CollapseContainer, MenuIcon,
};
