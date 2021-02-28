import styled from 'styled-components'
import Link from 'next/link'

const upperImageSize = [
  { id: 'frist', size: '200px' },
  { id: 'second', size: '180px' },
]
const lowerImageSize = [
  { id: 'trhid', size: '135px' },
  { id: 'fourth', size: '220px' },
  { id: 'fifth', size: '125px' },
]
const upperImageList = ['./person2.png', './person3.png']
const lowerImageList = ['./person4.png', './person5.png', './person6.png']

const FullContainer = styled.div`
  margin: 0px auto;
  max-width: 100%;
  width: 900px;
  margin-top: 3rem;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 0rem;
  }
`

const ImageContainer = styled.div`
  width: 500px;
  max-width: 100%;
  height: 400px;
  align-content: center;
`

const UpperContainer = styled.div`
  width: 400px;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`

const LowerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Circle = styled.div`
  border-radius: 50%;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const TextContainer = styled.div`
  width: 400px;
  height: 400px;
  min-width: 200px;
  @media (max-width: 700px) {
    width: 500px;
  }
`

const MemberText = styled.h1`
  text-decoration: underline;
  font-weight: bold;
  font-size: 3.5vw;
  text-align: center;
  line-height: 400px;
  @media (max-width: 700px) {
    font-size: 50px;
    text-align: center;
    line-height: 250px;
  }
`

const MemberA = styled.a`
  color: black;
  &:hover {
    color: #0070f3;
  }
`

function Members() {
  return (
    <FullContainer>
      <ImageContainer>
        <UpperContainer>
          {upperImageSize.map((current, index) => (
            <Circle style={{ width: current.size, height: current.size }} key={current.id}>
              <Image src={upperImageList[index]} />
            </Circle>
          ))}
        </UpperContainer>
        <LowerContainer>
          {lowerImageSize.map((current, index) => (
            <Circle style={{ width: current.size, height: current.size }} key={current.id}>
              <Image src={lowerImageList[index]} />
            </Circle>
          ))}
        </LowerContainer>
      </ImageContainer>
      <TextContainer>
        <MemberText>
          <Link href="/members">
            <MemberA>MEMBERS &rarr;</MemberA>
          </Link>
        </MemberText>
      </TextContainer>
    </FullContainer>
  )
}

export default Members
