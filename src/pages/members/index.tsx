import Link from 'next/link'
import { Fragment } from 'react'
import PageLayout from 'src/components/layouts/PageLayout'
import PageTitle from 'src/components/layouts/PageTitle'
import { HEADER_HEIGHT } from 'src/models/constants'
import styled from 'styled-components'

const members = [
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
    histories: [
      {
        id: 0,
        period: '2012 - 2014',
        contents: ['학생', '학생', '학생'],
      },
      {
        id: 1,
        period: '2014 - 2015',
        contents: ['법무법인(유한) JP [舊 정평] 변호사', 'a'],
      },
      {
        id: 2,
        period: '2017 - 현재',
        contents: [
          '법무법인 창천 파트너 변호사',
          '메트라이프 생명보험 보험설계사',
          '삼성생명 전문 강사',
          '런인베스트먼트 전임 강사',
        ],
      },
    ],
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
    histories: [
      {
        id: 0,
        period: '2012 - 2014',
        contents: ['학생', '학생', '학생'],
      },
      {
        id: 1,
        period: '2014 - 2015',
        contents: ['법무법인(유한) JP [舊 정평] 변호사', 'a'],
      },
      {
        id: 2,
        period: '2017 - 현재',
        contents: [
          '법무법인 창천 파트너 변호사',
          '메트라이프 생명보험 보험설계사',
          '삼성생명 전문 강사',
          '런인베스트먼트 전임 강사',
        ],
      },
    ],
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
    histories: [
      {
        id: 0,
        period: '2012 - 2014',
        contents: ['학생', '학생', '학생'],
      },
      {
        id: 1,
        period: '2014 - 2015',
        contents: ['법무법인(유한) JP [舊 정평] 변호사', 'a'],
      },
      {
        id: 2,
        period: '2017 - 현재',
        contents: [
          '법무법인 창천 파트너 변호사',
          '메트라이프 생명보험 보험설계사',
          '삼성생명 전문 강사',
          '런인베스트먼트 전임 강사',
        ],
      },
    ],
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
    histories: [
      {
        id: 0,
        period: '2012 - 2014',
        contents: ['학생', '학생', '학생'],
      },
      {
        id: 1,
        period: '2014 - 2015',
        contents: ['법무법인(유한) JP [舊 정평] 변호사', 'a'],
      },
      {
        id: 2,
        period: '2017 - 현재',
        contents: [
          '법무법인 창천 파트너 변호사',
          '메트라이프 생명보험 보험설계사',
          '삼성생명 전문 강사',
          '런인베스트먼트 전임 강사',
        ],
      },
    ],
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
    histories: [
      {
        id: 0,
        period: '2012 - 2014',
        contents: ['학생', '학생', '학생'],
      },
      {
        id: 1,
        period: '2014 - 2015',
        contents: ['법무법인(유한) JP [舊 정평] 변호사', 'a'],
      },
      {
        id: 2,
        period: '2017 - 현재',
        contents: [
          '법무법인 창천 파트너 변호사',
          '메트라이프 생명보험 보험설계사',
          '삼성생명 전문 강사',
          '런인베스트먼트 전임 강사',
        ],
      },
    ],
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
    histories: [
      {
        id: 0,
        period: '2012 - 2014',
        contents: ['학생', '학생', '학생'],
      },
      {
        id: 1,
        period: '2014 - 2015',
        contents: ['법무법인(유한) JP [舊 정평] 변호사', 'a'],
      },
      {
        id: 2,
        period: '2017 - 현재',
        contents: [
          '법무법인 창천 파트너 변호사',
          '메트라이프 생명보험 보험설계사',
          '삼성생명 전문 강사',
          '런인베스트먼트 전임 강사',
        ],
      },
    ],
  },
]

export const CenterAlignedH1 = styled.h1`
  height: 50vh;
  margin: ${HEADER_HEIGHT} auto 0;
  padding: 5rem 0;

  font: bold min(20vmin, 10rem) Poppins;
  text-align: center;
`

const FlexContainerWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
`

const MemberCard = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin: min(3vw, 2rem);
`

const RelativePosition = styled.div`
  width: 300px;
  height: 300px;
  padding: 2.5rem;
  text-align: center;
  position: relative;

  background-color: rgba(80, 33, 40, 0.17);
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
`

const AbsolutePositionH4 = styled.h4`
  margin: 0.5rem 0;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);

  text-decoration: underline;
  font-family: Poppins;
`

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 300px;
  height: 300px;
`

const FlexContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

const IconImage = styled.img`
  width: 2rem;
  height: 2rem;
`

const HistoryContainer = styled.div`
  width: 96%;
  height: 100%;
  overflow: auto;
`

const HistoryPeriod = styled.h3`
  margin: 0.5rem 0;
  font: bold Poppin;
`

const HistoryContents = styled.h5`
  margin: 0 0.5rem;
  font-family: poppin;
`

function MemberPage() {
  return (
    <PageTitle title="중앙대학교 블록체인 학회 C-Link - Members">
      <PageLayout>
        <CenterAlignedH1>MEMBERS</CenterAlignedH1>
        <FlexContainerWrap>
          {members.map((person) => (
            <MemberCard key={person.id}>
              <RelativePosition>
                <StyledImage src={person.image} alt="profile image" />
                <AbsolutePositionH4>{person.name}</AbsolutePositionH4>
              </RelativePosition>

              <FlexContainerColumn>
                <FlexContainer>
                  {Object.entries(person.address)
                    .filter((item) => item[1] !== '')
                    .map((item) => item[0])
                    .map((flatform) =>
                      flatform === 'facebook' ? (
                        <Link href={person.address.facebook} key={person.address.facebook}>
                          <a href={person.address.facebook} target="_blank" rel="noreferrer">
                            <IconImage src="./Facebook.png" />
                          </a>
                        </Link>
                      ) : flatform === 'github' ? (
                        <Link href={person.address.github} key={person.address.github}>
                          <a href={person.address.github} target="_blank" rel="noreferrer">
                            <IconImage src="./Github.png" />
                          </a>
                        </Link>
                      ) : (
                        <Link href={person.address.instagram} key={person.address.instagram}>
                          <a href={person.address.instagram} target="_blank" rel="noreferrer">
                            <IconImage src="./Instagram.png" />
                          </a>
                        </Link>
                      )
                    )}
                </FlexContainer>
                <HistoryContainer>
                  {person.histories
                    .sort((a, b) => (a.period > b.period ? -1 : 1))
                    .map((history) => (
                      <Fragment key={history.id}>
                        <HistoryPeriod>{history.period}</HistoryPeriod>
                        {history.contents.map((content, index) => (
                          <HistoryContents key={index}>{content}</HistoryContents>
                        ))}
                      </Fragment>
                    ))}
                </HistoryContainer>
              </FlexContainerColumn>
            </MemberCard>
          ))}
        </FlexContainerWrap>
      </PageLayout>
    </PageTitle>
  )
}

export default MemberPage
