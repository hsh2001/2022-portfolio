import styled from 'styled-components';

import { maxWidthWithAutoMargin } from '../styles/maxWidthWithAutoMargin';

export const SubTitle = styled.h2`
  ${maxWidthWithAutoMargin}
  font-size: 56px;
  margin: 1rem auto;
  width: 50%;
  min-width: 300px;
  margin-left: 0;
  word-break: keep-all;
`;
