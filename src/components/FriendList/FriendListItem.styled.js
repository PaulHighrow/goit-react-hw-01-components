import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 15px;

  align-items: center;

  padding: 8px 12px;

  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const IsOnline = styled.span`
  display: block;
  width: 16px;
  height: 16px;

  border-radius: 50%;

  background-color: ${props => (props.variant ? 'green' : 'red')};
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.7;
`;
