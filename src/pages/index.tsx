import GradientBorder from 'src/components/atoms/GradientBorder'
import ImageBox from 'src/components/atoms/ImageBox'
import InternationalizedLink from 'src/components/InternationalizedLink'
import PageLayout from 'src/components/layouts/PageLayout'
import ProjectContentBox from 'src/components/atoms/ProjectContentBox'
import PageTitle from 'src/components/layouts/PageTitle'
import styled from 'styled-components'
import MainLogo from 'src/components/MainLogo'

const Title = styled.h2`
  margin: 1rem 0;
`

const ExampleParagraph = (
  <p>
    <div>"Lorem ipsum dolor sit amet,</div>
    <div>
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua.
    </div>
    <div>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </div>
    <div>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur.
    </div>
    <div>Excepteur sint occaecat cupidatat non proident,</div>
    <div>sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
  </p>
)

interface Information {
  id: number
  name: string
  content: string[]
  image: string
}

const Projects: Information[] = [
  {
    id: 1,
    name: 'MEETING',
    content: ['Andreas Antonopoulos', 'author of [Mastering Bitcoin]', '@nonce'],
    image: 'https://i.investopedia.com/image/jpeg/1514919556479/eth.jpeg',
  },
  {
    id: 2,
    name: 'OPEN SESSION',
    content: ['History of Blockchain', 'Blochchain Structure', 'Blockchain Use Case 1, 2', '@CAU'],
    image: 'https://i.investopedia.com/image/jpeg/1514919556479/eth.jpeg',
  },
  {
    id: 3,
    name: 'HACKATHON',
    content: [
      'BlockCamp Hackathon',
      'Hosted by [BBR], [DAYBIT]',
      'Creatip 피칭상 : E-voting simluation',
      '@seoulstartuphub, mapo',
    ],
    image: 'https://i.investopedia.com/image/jpeg/1514919556479/eth.jpeg',
  },
  {
    id: 4,
    name: 'CONTEST',
    content: ['Ethcon Korea', 'with Onther Inc.'],
    image: 'https://i.investopedia.com/image/jpeg/1514919556479/eth.jpeg',
  },
  {
    id: 5,
    name: 'MEETING',
    content: ['@ Terraformlabs', 'with', 'Do Kwon, CEO', 'Nicholas, Head of Research'],
    image: 'https://i.investopedia.com/image/jpeg/1514919556479/eth.jpeg',
  },
  {
    id: 6,
    name: 'HACKATHON',
    content: [
      '파운더스 2019 Summer X SK C&C',
      'Hosted by SK C&C, Decenter University',
      '1st Prize : Best BM',
    ],
    image: 'https://i.investopedia.com/image/jpeg/1514919556479/eth.jpeg',
  },
]

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`

function HomePage() {
  return (
    <PageTitle title="중앙대학교 블록체인 학회 C-Link">
      <PageLayout>
        <MainLogo></MainLogo>

        <InternationalizedLink />
        <Container>
          {Projects.map((project) => (
            <ProjectContentBox project={project} key={project.id}></ProjectContentBox>
          ))}
        </Container>
        <ImageBox>
          <GradientBorder borderSize="1rem">
            <img
              src="https://media.vlpt.us/images/gwak2837/profile/fe9e991c-0c0c-44b2-8027-af0c6e29f4ba/filename2.jpg?w=120"
              alt="imaeg"
            />
          </GradientBorder>
          <Title>[2ND WORKSHOP, 2019]</Title>
          {ExampleParagraph}
        </ImageBox>
        <ImageBox rightImage>
          <GradientBorder borderSize="1rem">
            <img
              src="https://media.vlpt.us/images/gwak2837/profile/fe9e991c-0c0c-44b2-8027-af0c6e29f4ba/filename2.jpg?w=120"
              alt="imaeg"
            />
          </GradientBorder>
          <Title>[2ND WORKSHOP, 2019]</Title>
          {ExampleParagraph}
        </ImageBox>
      </PageLayout>
    </PageTitle>
  )
}

export default HomePage
