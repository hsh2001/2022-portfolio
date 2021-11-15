import { NextPage } from 'next';
import React from 'react';

import { Container } from '../components/Container';
import { FadeInOnSlide } from '../components/FadeInOnSlide';
import { GreyText } from '../components/GreyText';
import { Layout } from '../components/Layout';
import { MainTitle } from '../components/MainTitle';
import { MainTitleSection } from '../components/MainTitleSection';
import { MainTitleSectionContainer } from '../components/MainTitleSectionContainer';
import { Paragraph } from '../components/Paragraph';
import { Section } from '../components/Section';
import { SkillItem } from '../components/SkillItem';
import { SubText } from '../components/SubText';
import { SubTitle } from '../components/SubTitle';

const Page: NextPage = () => {
  return (
    <Layout>
      <MainTitleSectionContainer>
        <MainTitleSection>
          <MainTitle>
            <span className="job">소프트웨어 엔지니어,</span>
            <br />
            <span className="name">황승현.</span>
          </MainTitle>
        </MainTitleSection>
      </MainTitleSectionContainer>

      <FadeInOnSlide>
        <Container style={{ marginBottom: 300, marginTop: '70vh' }}>
          <SubTitle>저는...</SubTitle>
        </Container>
      </FadeInOnSlide>

      <FadeInOnSlide>
        <Section>
          <Container>
            <SubTitle>
              뭐든지
              <br/>할 수 있는.
            </SubTitle>
          </Container>

          <Paragraph>
            웹 프론트엔드, 웹 서버 개발, 모바일 앱 프론트엔드 개발, 모바일
            앱 서버 개발, 결제 서비스 연동, AWS 배포 구축, CI/CD 환경 구축 등.
            프로젝트의 시작부터 끝까지 모두 총괄하는 저는 단순한 소프트웨어
            개발자가 아닌 소프트웨어 엔지니어입니다.
          </Paragraph>

          <Container>
            <SkillItem>HTML</SkillItem>
            <SkillItem>CSS</SkillItem>
            <SkillItem>JavaScript</SkillItem>
            <SkillItem>SCSS</SkillItem>
            <SkillItem>TypeScript</SkillItem>
            <SkillItem>PHP</SkillItem>
            <SkillItem>MySQL</SkillItem>
            <SkillItem>NodeJS</SkillItem>
            <SkillItem>React</SkillItem>
            <SkillItem>ExpressJS</SkillItem>
            <SkillItem>NextJS</SkillItem>
            <SkillItem>TypeORM</SkillItem>
            <SkillItem>Flutter</SkillItem>
            <SkillItem>socket.io</SkillItem>
            <SkillItem>Recoil</SkillItem>
            <SkillItem>Redux</SkillItem>
            <SkillItem>SWR</SkillItem>
            <SkillItem>TensorflowJS</SkillItem>
            <SkillItem>DeepLearning</SkillItem>
            <SkillItem>Git</SkillItem>
            <SkillItem>GitHub</SkillItem>
            <SkillItem>GitHub CI / CD</SkillItem>
          </Container>

          <SubText>
            이 외에도 많은 웹, 모바일 앱, 서버, 머신러닝 개발 기술들...
          </SubText>
        </Section>
      </FadeInOnSlide>

      <FadeInOnSlide>
        <Container style={{ marginBottom: 300, marginTop: 300 }}>
          <SubTitle>프로젝트들...</SubTitle>
        </Container>
      </FadeInOnSlide>

      <FadeInOnSlide>
        <Section>
          <Container>
            <SubTitle>
              <GreyText>트래블핀</GreyText>
              <br />
              지도 위에 여행 계획짜기.
            </SubTitle>
          </Container>

          <Container>
            <img src="/images/travelpin.png" />
          </Container>

          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            architecto animi velit, in aspernatur doloremque laudantium nisi
            neque unde iure ducimus, repellendus magnam optio mollitia ipsa,
            voluptatum sit earum quas.
          </Paragraph>

          <Container>
            <SkillItem>Flutter</SkillItem>
            <SkillItem>GetX</SkillItem>
            <SkillItem>Provider</SkillItem>
            <SkillItem>Firebase</SkillItem>
            <SkillItem>NodeJS</SkillItem>
            <SkillItem>ExpressJS</SkillItem>
            <SkillItem>Google Place API</SkillItem>
            <SkillItem>Signin with Apple</SkillItem>
            <SkillItem>Signin with Kakao</SkillItem>
          </Container>
        </Section>
      </FadeInOnSlide>

      <FadeInOnSlide>
        <Section>
          <Container>
            <SubTitle>
              <GreyText>에코블로그</GreyText>
              <br />
              간편한 결제 시스템 구축.
            </SubTitle>
          </Container>

          <Container>
            <img src="/images/echoblog.png" />
          </Container>

          <Paragraph>
            블로그 마케팅 플랫폼 에코블로그에 결제 시스템을 도입을 포함한 대대적
            리뉴얼 작업을 하였습니다. 마케팅을 위한 인플루언서와 마케터의 매칭을
            도와주고, 매칭에 도움이 되는 부가기능을 유료 서비스로 추가함으로
            수익화에 성공할 수 있었습니다.
          </Paragraph>

          <Container>
            <SkillItem>PHP</SkillItem>
            <SkillItem>MySQL</SkillItem>
            <SkillItem>TossPayments API</SkillItem>
          </Container>
        </Section>
      </FadeInOnSlide>

      <FadeInOnSlide>
        <Section>
          <Container>
            <SubTitle>
              <GreyText>Culture Atlas</GreyText>
              <br />약 3만건의 데이터를 담은 그래픽.
            </SubTitle>
          </Container>

          <Container>
            <img src="/images/culture.png" />
          </Container>

          <Paragraph>
            Cultural Resources LLC. 팀에서 수집한 약 3만건의 역사 자료를 지구
            그래픽 위에 표시하였습니다. 빠른 데이터 처리를 위해 각각의 레코드를
            전처리된 데이터들로 구성하고 이를 활용해 정적 웹 사이트를 구현하며
            서버 구성 비용을 획기적으로 절약할 수 있었습니다.
          </Paragraph>

          <Container>
            <SkillItem>React</SkillItem>
            <SkillItem>NextJS</SkillItem>
            <SkillItem>Data Preprocessing</SkillItem>
            <SkillItem>SQLite</SkillItem>
            <SkillItem>TypeORM</SkillItem>
          </Container>
        </Section>
      </FadeInOnSlide>

      <FadeInOnSlide>
        <Section>
          <Container>
            <SubTitle>
              <GreyText>카드파라</GreyText>
              <br />
              복잡한 재고관리 클릭으로 해결.
            </SubTitle>
          </Container>

          <Container>
            <img src="/images/cardpara.png" />
          </Container>

          <Paragraph>
            TCG 카드를 판매하는 매장 특성상, 몇 만 건의 각기 다른 재고를 하나의
            매장에서 관리합니다. 당시 TCG 게임 매장을 2개 운영하는 카드파라의
            대표님은 저와 함께 이 문제를 해결하기에 나섭니다.
          </Paragraph>

          <Container>
            <SkillItem>React</SkillItem>
            <SkillItem>NextJS</SkillItem>
            <SkillItem>Web Crawling</SkillItem>
            <SkillItem>MySQL</SkillItem>
            <SkillItem>TypeORM</SkillItem>
            <SkillItem>SWR</SkillItem>
            <SkillItem>AWS EC2</SkillItem>
            <SkillItem>AWS Route53</SkillItem>
          </Container>
        </Section>
      </FadeInOnSlide>

      <FadeInOnSlide>
        <Container style={{ marginBottom: 300, marginTop: 300 }}>
          <SubTitle>그래서...</SubTitle>
        </Container>
      </FadeInOnSlide>

      <FadeInOnSlide>
        <Section style={{ marginBottom: 150 }}>
          <Container>
            <SubTitle>당신이 원하는 모든 것을 만들어 드립니다.</SubTitle>
          </Container>

          <Paragraph>
            무엇을 만들고 싶나요? 그것을 단순히 만들기만 하고 싶나요? 아니면
            함께 구상하고 고민하며 완벽한 결과물을 만들 사람이 필요한가요?
          </Paragraph>

          <Container>
            <SkillItem>Email: dev@hsh.kr</SkillItem>
            <br />
            <SkillItem>Phone: 010-6379-0084</SkillItem>
          </Container>
        </Section>
      </FadeInOnSlide>
    </Layout>
  );
};

export default Page;
