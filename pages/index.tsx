import { NextPage } from 'next';
import React from 'react';

import { Container } from '../components/Container';
import { FadeInOnSlide } from '../components/FadeInOnSlide';
import { Layout } from '../components/Layout';
import { LinkButton } from '../components/LinkButton';
import { MainTitle } from '../components/MainTitle';
import { MainTitleSection } from '../components/MainTitleSection';
import { MainTitleSectionContainer } from '../components/MainTitleSectionContainer';
import { Paragraph } from '../components/Paragraph';
import { PointText } from '../components/PointText';
import { Section } from '../components/Section';
import { SkillItem } from '../components/SkillItem';
import { SubTitle } from '../components/SubTitle';

const Page: NextPage = () => {
  return (
    <Layout>
      <MainTitleSectionContainer>
        <MainTitleSection>
          <MainTitle>
            <span className="job">Flutter 프론트엔드 개발자,</span>
            <br />
            <span className="name">권오성.</span>
          </MainTitle>
        </MainTitleSection>
      </MainTitleSectionContainer>

      <FadeInOnSlide>
        <Section>
          <Container>
            <SubTitle>뭐든지 배울 수 있고 발전이 가능한 개발자</SubTitle>
          </Container>

          <Paragraph>
            첫 프로젝트를 웹 퍼블리싱으로 시작, 그 이후 점차 프론트엔드로 영역을
            확대하고 flutter라는 크로스 플랫폼을 사용하여 TravelPin이라는 저의
            첫 어플을 배포했습니다. 그리고 두번째 어플인 실크는 프로토타입까지
            완성되었습니다. 저는 무엇이든 이룰 수 있고 배울 수 있다는 자신감과
            근성이 있습니다. 또한 토론을 즐기고 서로의 생각이 다름을 존중합니다
            대화속에서 정답을 찾아내는 방법을 알고 있습니다. 이런 저의 장점들을
            살리고 단점은 수용하여 게을러지지 않고 더욱더 저를 다듬어가는 비전
            있는 개발자가 될 것입니다.
          </Paragraph>

          <Container>
            <SkillItem>HTML</SkillItem>
            <SkillItem>CSS</SkillItem>
            <SkillItem>JavaScript</SkillItem>
            <SkillItem>jQuery</SkillItem>
            <SkillItem>SCSS</SkillItem>
            <SkillItem>TypeScript</SkillItem>
            <SkillItem>PHP</SkillItem>
            <SkillItem>MySQL</SkillItem>
            <SkillItem>React</SkillItem>
            <SkillItem>NextJS</SkillItem>
            <SkillItem>Bootstrap</SkillItem>
            <SkillItem>Flutter</SkillItem>
            <SkillItem>GetX</SkillItem>
            <SkillItem>Provider</SkillItem>
            <SkillItem>GitHub</SkillItem>
          </Container>
        </Section>
      </FadeInOnSlide>

      <FadeInOnSlide>
        <Container style={{ marginBottom: 300, marginTop: 300 }}>
          <SubTitle>프로젝트들</SubTitle>
        </Container>
      </FadeInOnSlide>

      <FadeInOnSlide>
        <Section>
          <Container>
            <SubTitle>
              <PointText>트래블핀</PointText>
              <br />
              지도 위에 여행 계획짜기.
            </SubTitle>
          </Container>

          <Container>
            <img src="/images/travelpin.png" />
          </Container>

          <Paragraph>
            여행을 사랑하는 저는 항상 네이버/구글 지도에 가고 싶은 스팟을
            저장해놓습니다 다만 날짜별로 가고 싶은 스팟을 정리하기에는 위
            어플들이 불편하다는 생각에서 시작된 프로젝트입니다. 여정 제목과
            장소,여행 일 수를 입력하면 자동으로 리스트가 생성되고 스팟을 검색해
            원하는 일차에 지정해 주면 날짜가 적힌 핀이 생성되고 리스트에
            추가되는 게 코어 기능입니다. flutter를 전문적으로 다루기 위해
            전초작업으로 만들어진 어플이라 간단한 기능 위주로 개발되었습니다.
            <br /> <br />
            어플 기획을 총괄했고 전체적인 UI,UX를 맡아서 개발했습니다. GexX와
            Provider등 pub.dev에서 정보를 얻어 패키지의 자연스러운 적용을
            노력했습니다
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
          <Container style={{ marginTop: 20 }}>
            <LinkButton
              href="https://apps.apple.com/kr/app/travelpin/id1580654359"
              target="_blank"
            >
              AppStore에서 보기
            </LinkButton>
            <LinkButton
              href="https://play.google.com/store/apps/details?id=com.travelpin.application"
              target="_blank"
            >
              PlayStore에서 보기
            </LinkButton>
          </Container>
        </Section>
      </FadeInOnSlide>

      <FadeInOnSlide>
        <Section>
          <Container>
            <SubTitle>
              <PointText>에코블로그</PointText>
              <br />
              체험단 플랫폼 리뉴얼 및 확장
            </SubTitle>
          </Container>

          <Container>
            <img src="/images/echoblog.png" />
          </Container>

          <Paragraph>
            국내 체험단 플랫폼 중 10위권 안에 꼽는 에코블로그의 리뉴얼과 모바일
            웹/하이브리드 앱 개발에 참여했습니다 에코앤컴퍼니에서의 첫
            작업이었던 에코블로그 모바일 웹 개발 후 안드로이드 앱 출시를 위해
            웹뷰 하이브리드 앱을 제작하였습니다. 추후 부분유료화를 위해 기능의
            확장과 결제 시스템을 도입했습니다.
            <br /> <br />
            모바일 웹 프론트엔드 작업을 했고 리뉴얼 확장 시에는 php개발과 더불어
            MySQL DB작업도 병행하였습니다.
          </Paragraph>

          <Container>
            <SkillItem>jQuery</SkillItem>
            <SkillItem>PHP</SkillItem>
            <SkillItem>MySQL</SkillItem>
          </Container>
          <Container style={{ marginTop: 20 }}>
            <LinkButton href="https://echoblog.net/" target="_blank">
              에코블로그 보기
            </LinkButton>
          </Container>
        </Section>
      </FadeInOnSlide>

      <FadeInOnSlide>
        <Section>
          <Container>
            <SubTitle>
              <PointText>실크</PointText>
              <br />
              공공기관의 취미 클래스를 한눈에
            </SubTitle>
          </Container>

          <Container>
            <img src="/images/silk.png" />
          </Container>

          <Paragraph>
            공공기관에서 등록되는 클래스들의 목록과 정보를 자신과 가까운
            지역기반으로 볼 수 있고 각 클래스의 단체방 커뮤니티에 참여할 수 있는
            앱입니다. 회원 등급은 강사와 일반 수강생으로 나뉘고 강사는 클래스
            생성,수강생 강퇴,공지작성 등 일반 수강생과는 다른 많은 권한을 갖게
            됩니다.
            <br /> <br />
            모든 UI,UX를 개발했습니다. 단체 채팅방의 위젯들이 부자연스럽지 않게
            여러 경우의 수를 테스트하며 개발했습니다. 현재 프로토타입이
            완성되었고 내부 테스트중입니다.
          </Paragraph>

          <Container>
            <SkillItem>Flutter</SkillItem>
            <SkillItem>GetX</SkillItem>
            <SkillItem>Provider</SkillItem>
            <SkillItem>Firebase</SkillItem>
            <SkillItem>NodeJS</SkillItem>
            <SkillItem>MySQL</SkillItem>
            <SkillItem>Socket.io</SkillItem>
            <SkillItem>Signin with Apple</SkillItem>
            <SkillItem>Signin with Kakao</SkillItem>
          </Container>
        </Section>
      </FadeInOnSlide>

      <FadeInOnSlide>
        <Section>
          <Container>
            <SubTitle>
              <PointText>Culture Atlas</PointText>
              <br />약 3만건의 데이터를 담은 그래픽.
            </SubTitle>
          </Container>

          <Container>
            <img src="/images/culture.png" />
          </Container>

          <Paragraph>
            교육용 앱으로서 아이패드 앱과 함께 웹으로 개발되고 있는 Culture
            Atlas입니다. 각 나라의 문화와 역사를 보여주는 프로젝트로 저는 웹
            프론트엔드 개발에 참여하고 있습니다 먼저 개발되었고 테스트 중인
            아이패드 앱을 기반으로 웹에 그대로 UI를 옮기는 작업을 맡게
            되었습니다 12월에서 1월 프로토타입 완료 예정입니다.
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
        <Section style={{ marginBottom: 200, marginTop: 300 }}>
          <Container>
            <SubTitle>이제는 해내는 것만이 아닌 잘! 해내고 싶습니다.</SubTitle>
          </Container>

          <Paragraph>
            제가 발전할 수 있고 저로인해 발전될 수 있는 회사로의 이직을
            준비하고있습니다
            <br /> 당장은 모자라고 부족해보일지라도 저는 끈임없는 근성과 탐구로
            주어진 목표를 이뤄냅니다.
          </Paragraph>

          <Container>
            <LinkButton
              href="mailto:osung5633@gamil.com"
              style={{ marginBottom: 10 }}
            >
              Email: osung@gmail.com
            </LinkButton>
            <br />
            <LinkButton href="tel:01071966780">Phone: 010-7196-6780</LinkButton>
          </Container>
        </Section>
      </FadeInOnSlide>
    </Layout>
  );
};

export default Page;
