import PageLayout from 'src/components/layouts/PageLayout'
import PageTitle from 'src/components/layouts/PageTitle'
import styled from 'styled-components'
import Link from 'next/link'

const data = [
  {
    id: 0,
    name: 'JAMES',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person2.png',
    address: {
      github: 'https://github.com/CAU-CLINK',
      facebook: 'https://www.facebook.com/CAUCLink',
      instagram: 'https://www.instagram.com',
    },
    history: {
      '2012 - 2014': ['학생', '학생', '학생'],
      '2017 - 현재': [
        '법무법인 창천 파트너 변호사',
        '메트라이프 생명보험 보험설계사',
        '삼성생명 전문 강사',
        '런인베스트먼트 전임 강사',
      ],
      '2014 - 2015': ['법무법인(유한) JP [舊 정평] 변호사', 'a'],
    },
  },
  {
    id: 1,
    name: 'MICHAEL',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person1.png',
    address: {
      github: 'https://github.com/CAU-CLINK',
      facebook: 'https://www.facebook.com/CAUCLink',
      instagram: '',
    },
    history: {
      '2018 - 현재': ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'b'],
      '2017 - 현재': [
        '법무법인 창천 파트너 변호사',
        '메트라이프 생명보험 보험설계사',
        '삼성생명 전문 강사',
        '런인베스트먼트 전임 강사',
      ],
      '2014 - 2015': ['법무법인(유한) JP [舊 정평] 변호사', 'a'],
    },
  },
  {
    id: 2,
    name: 'LILLY',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person2.png',
    address: {
      github: '',
      facebook: 'https://www.facebook.com/CAUCLink',
      instagram: 'https://www.instagram.com',
    },
    history: {
      '2017 - 현재': [
        '법무법인 창천 파트너 변호사',
        '메트라이프 생명보험 보험설계사',
        '삼성생명 전문 강사',
        '런인베스트먼트 전임 강사',
      ],
      '2014 - 2015': ['법무법인(유한) JP [舊 정평] 변호사', 'a'],
      '2018 - 현재': [
        '저는 중앙대학교를 다니는 학생입니다. 저는 중앙대학교를 다니는 학생입니다. 저는 중앙대학교를 다니는 학생입니다. 저는 중앙대학교를 다니는 학생입니다. ',
        'a',
      ],
    },
  },
  {
    id: 3,
    name: 'JESSICA',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person1.png',
    address: {
      github: 'https://github.com/CAU-CLINK',
      facebook: '',
      instagram: 'https://www.instagram.com',
    },
    history: {
      '2017 - 현재': [
        '법무법인 창천 파트너 변호사',
        '메트라이프 생명보험 보험설계사',
        '삼성생명 전문 강사',
        '런인베스트먼트 전임 강사',
      ],
      '2014 - 2015': ['법무법인(유한) JP [舊 정평] 변호사', 'a'],
    },
  },
  {
    id: 4,
    name: 'PETER',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person2.png',
    address: {
      github: 'https://github.com/CAU-CLINK',
      facebook: '',
      instagram: '',
    },
    history: {
      '2017 - 현재': [
        '법무법인 창천 파트너 변호사',
        '메트라이프 생명보험 보험설계사',
        '삼성생명 전문 강사',
        '런인베스트먼트 전임 강사',
      ],
      '2014 - 2015': ['법무법인(유한) JP [舊 정평] 변호사', 'a'],
    },
  },
  {
    id: 5,
    name: 'JENNY',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person1.png',
    address: {
      github: '',
      facebook: 'https://www.facebook.com/CAUCLink',
      instagram: '',
    },
    history: {
      '2017 - 현재': [
        '법무법인 창천 파트너 변호사',
        '메트라이프 생명보험 보험설계사',
        '삼성생명 전문 강사',
        '런인베스트먼트 전임 강사',
      ],
      '2014 - 2015': ['법무법인(유한) JP [舊 정평] 변호사', 'a'],
    },
  },
]

const MemberDiv = styled.div`
  text-align: center;
`

const MemberText = styled.h1`
  font-size: 13vw;
  font-family: poppin;
  font-weight: 800;
`

const FlexContainer = styled.div`
  margin: 0px auto;
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  align-items: center;
  max-width: 1400px;
  margin-top: 3rem;
  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 700px;
  margin-bottom: 60px;
`

const SuperContainer = styled.div`
  width: 230px;
  height: 280px;
  text-align: center;
  background-color: rgba(80, 33, 40, 0.17);
`
const ImageContainer = styled.div`
  margin: 0px auto;
  width: 200px;
  height: 200px;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const NameContainer = styled.div`
  width: 100%;
  height: 40px;
`

const Name = styled.h3`
  text-decoration: underline;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
`
const HideScrollbar = styled.div`
  width: 400px;
  height: 300px;
  overflow: hidden;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 280px;
  margin: 0 40px;
  overflow: auto;
`

const FlatformContainer = styled.div`
  margin: 10px 0px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 25px;
`
const IconContainer = styled.img`
  margin-right: 10px;
  width: 25px;
  height: 25px;
`

const StyledA = styled.a`
  cursor: pointer;
`

const HistoryContainer = styled.div`
  width: 96%;
  height: 100%;
`

const HistoryTitle = styled.h4`
  font-weight: 800;
  font-family: poppin;
  font-size: 18px;
`

const HistoryContents = styled.h6`
  margin: 0px 10px;
  font-weight: 600;
  font-family: poppin;
  font-size: 12px;
`

function TeamPage() {
  return (
    <PageTitle title="C-Link Team">
      <PageLayout>
        <MemberDiv>
          <MemberText>MEMBERS</MemberText>
        </MemberDiv>
        <FlexContainer>
          {data.map((person) => (
            <CardContainer key={person.id}>
              <SuperContainer>
                <NameContainer />
                <ImageContainer>
                  <Image src={person.image} />
                </ImageContainer>
                <NameContainer>
                  <Name>{person.name}</Name>
                </NameContainer>
              </SuperContainer>
              <HideScrollbar>
                <InfoContainer>
                  <FlatformContainer>
                    {Object.entries(person.address)
                      .filter((item) => item[1] !== '')
                      .map((item) => item[0])
                      .map((flatform) =>
                        flatform === 'facebook' ? (
                          <Link href={person.address.facebook} key={person.address.facebook}>
                            <StyledA href={person.address.facebook} target="_blank">
                              <IconContainer src="./Facebook.png" />
                            </StyledA>
                          </Link>
                        ) : flatform === 'github' ? (
                          <Link href={person.address.github} key={person.address.github}>
                            <StyledA href={person.address.github} target="_blank">
                              <IconContainer src="./Github.png" />
                            </StyledA>
                          </Link>
                        ) : (
                          <Link href={person.address.instagram} key={person.address.instagram}>
                            <StyledA href={person.address.instagram} target="_blank">
                              <IconContainer src="./Instagram.png" />
                            </StyledA>
                          </Link>
                        )
                      )}
                  </FlatformContainer>
                  <HistoryContainer>
                    {Object.entries(person.history)
                      .sort((a, b) => (a[0] > b[0] ? -1 : 1))
                      .map((item) => (
                        <HistoryTitle key={person.id + '\\' + item[0]}>
                          <HistoryTitle>{item[0]}</HistoryTitle>
                          {item[1]!.map((content) => (
                            <HistoryContents key={person.id + '\\' + content}>
                              {content}
                            </HistoryContents>
                          ))}
                        </HistoryTitle>
                      ))}
                  </HistoryContainer>
                </InfoContainer>
              </HideScrollbar>
            </CardContainer>
          ))}
        </FlexContainer>
      </PageLayout>
    </PageTitle>
  )
}

export default TeamPage
