import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px auto 0;
  min-height: 90vh;
  width: 55%;

  button {
    margin-left: auto;
    margin-top: 15px;
  }
`;

const HeaderBlock = ({ children }) => (
  <div>
    <span>{children}</span>
  </div>
);

const CheckoutHeaderBlock = styled(HeaderBlock)`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

const Header = props => {
  return (
    <div {...props}>
      {props.heads.map((head, idx) => (
        <CheckoutHeaderBlock key={idx}>{head}</CheckoutHeaderBlock>
      ))}
    </div>
  );
};

export const CheckoutHeader = styled(Header)`
  border-bottom: 1px solid darkgrey;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  width: 100%;
`;

const Total = props => (
  <div {...props}>
    <span>TOTAL: ${props.total}</span>
  </div>
);

export const CheckoutTotal = styled(Total)`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const TestWarning = styled.div`
  color: red;
  font-size: 24px;
  margin-top: 40px;
  text-align: center;
`;
