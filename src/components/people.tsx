import styled from 'styled-components'
import Link from 'next/link'

const data = [
  {
    id: 0,
    name: 'JAMES',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: 'https://yceffort.kr/2020/10/profile.png',
    address: 'https://www.facebook.com/CAUCLink',
    github: '',
    facebook: '',
    notion: '',
  },
  {
    id: 1,
    name: 'MICHAEL',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person1.png',
    address: 'https://www.naver.com',
    github: '',
    facebook: '',
    notion: '',
  },
  {
    id: 2,
    name: 'LILLY',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: 'https://yceffort.kr/2020/10/profile.png',
    address: 'https://www.naver.com',
    github: '',
    facebook: '',
    notion: '',
  },
  {
    id: 3,
    name: 'JESSICA',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person1.png',
    address: 'https://www.naver.com',
    github: '',
    facebook: '',
    notion: '',
  },
  {
    id: 4,
    name: 'PETER',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person1.png',
    address: 'https://www.naver.com',
    github: '',
    facebook: '',
    notion: '',
  },
  {
    id: 5,
    name: 'JENNY',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person1.png',
    address: 'https://www.naver.com',
    github: '',
    facebook: '',
    notion: '',
  },
]

const BigContainer = styled.div`
  margin: 0px auto;
  align-items: center;
  max-width: 900px;
  margin-top: 3rem;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`

const More = styled.a`
  color: black;
  &:hover {
    color: #0070f3;
  }
`

const MoreText = styled.h6`
  text-align: right;
`

const GridContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 900px;
  margin-top: 1rem;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`

const PersonalBox = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 3rem;

  &:hover {
    background-color: #f7f7f7;
  }
`

const ImageBox = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  background-color: lightblue;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const BlockName = styled.h3`
  text-decoration: underline;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`

const BlockInfo = styled.h5`
  font-weight: bold;
  margin-top: 0.1px;
  margin-bottom: 0.1px;
`

function People() {
  return (
    <BigContainer>
      <MoreText>
        <Link href="/team">
          <More>MORE &rarr;</More>
        </Link>
      </MoreText>
      <GridContainer>
        {data.map((person) => (
          <Link href={person.address} key={person.id}>
            <PersonalBox>
              <ImageBox>
                <Image src={person.image} />
              </ImageBox>
              <BlockName>{person.name}</BlockName>
              <BlockInfo>{person.info1}</BlockInfo>
              <BlockInfo>{person.info2}</BlockInfo>
              <BlockInfo>{person.info3}</BlockInfo>
            </PersonalBox>
          </Link>
        ))}
        )
      </GridContainer>
    </BigContainer>
  )
}

export default People
