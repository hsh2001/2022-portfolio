import { NextPage } from 'next';
import React from 'react';

import { Container } from '../components/Container';
import { FadeInOnSlide } from '../components/FadeInOnSlide';
import { GreyText } from '../components/GreyText';
import { Layout } from '../components/Layout';
import { MainTitle } from '../components/MainTitle';
import { MainTitleSection } from '../components/MainTitleSection';
import { Paragraph } from '../components/Paragraph';
import { Section } from '../components/Section';
import { SkillItem } from '../components/SkillItem';
import { SubText } from '../components/SubText';
import { SubTitle } from '../components/SubTitle';

const Page: NextPage = () => {
  return (
    <Layout>
      <MainTitleSection>
        <MainTitle>
          <span className="job">소프트웨어 엔지니어,</span>
          <br />
          <span className="name">황승현.</span>
        </MainTitle>
      </MainTitleSection>

      <FadeInOnSlide>
        <Section>
          <Container>
            <SubTitle>
              뭐든지
              <br />할 수 있는.
            </SubTitle>
          </Container>

          <Paragraph>
            웹 프론트엔드 개발, 웹 서버 개발, 모바일 앱 프론트엔드 개발, 모바일
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
        <Section>
          <Container>
            <SubTitle>
              <GreyText>에코블로그</GreyText>
              <br />
              간편한
              <br />
              결제 시스템
              <br />
              구축.
            </SubTitle>
          </Container>

          <Paragraph>
            2021년 4월, 블로그 마케팅 플랫폼 <b>에코블로그</b>에 결제 시스템을
            도입과 함께 대대적 리뉴얼 작업을 하였습니다. 마케팅을 위한
            인플루언서와 마케터의
          </Paragraph>
        </Section>
      </FadeInOnSlide>

      <FadeInOnSlide>
        <Section>
          <Container>
            <SubTitle>
              <GreyText>Culture Atlas</GreyText>
              <br />
              약 3만건의
              <br />
              데이터를
              <br />
              담은 그래픽.
            </SubTitle>
          </Container>

          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
            incidunt fuga officia, libero hic impedit excepturi saepe mollitia
            id vitae repellendus cum quisquam cupiditate quam maiores labore ea
            dolorum. Dolore.
          </Paragraph>
        </Section>
      </FadeInOnSlide>

      <FadeInOnSlide>
        <Section>
          <Container>
            <SubTitle>
              <GreyText>카드파라</GreyText>
              <br />
              복잡한
              <br />
              재고관리
              <br />
              클릭으로
              <br />
              해결.
            </SubTitle>
          </Container>

          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
            incidunt fuga officia, libero hic impedit excepturi saepe mollitia
            id vitae repellendus cum quisquam cupiditate quam maiores labore ea
            dolorum. Dolore.
          </Paragraph>
        </Section>
      </FadeInOnSlide>
    </Layout>
  );
};

export default Page;
