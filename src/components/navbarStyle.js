import styled from 'styled-components';

const Nav = styled.nav`
  margin: 0 0 2.375rem;
  padding: 1.438rem 6.188rem 1.688rem 6.25rem;
  box-shadow: 0 0 4px 1px #0000186e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.span`
  margin: 0.375rem 2.938rem 0.125rem 0;
  font-family:  'Montserrat', sans-serif;
  font-size: 1.875rem;
  font-weight: bold;
  color: #0290ff;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  width: 25%;
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

export {
  Nav, Logo, Ul, Li, Icon,
};
