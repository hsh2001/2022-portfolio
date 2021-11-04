import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  font-size: 12px;
  color: #333;
  background-color: #fcfcfc;
  margin-top: 3rem;
  padding: 1rem;
  padding-bottom: 3rem;
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      Copyright 2022 Asher Hwang. All rights reserved.
    </FooterContainer>
  );
};
