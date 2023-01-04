import styled from 'styled-components';

export const Table = styled.table`
  text-align: center;
  margin: 20px auto;

  overflow: hidden;

  border: 1px solid #3f3f3f;
  border-radius: 5px;
  border-spacing: 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const TableHead = styled.thead`
  font-size: 18px;
  background-color: #f5f2f2;

  text-transform: uppercase;
`;

export const TableHeadCell = styled.th`
  width: 150px;
  border: 1px solid #3f3f3f;
`;

export const TableBody = styled.tbody`
  border: 1px solid #3f3f3f;
`;

export const Row = styled.tr`
  font-size: 18px;
`;
