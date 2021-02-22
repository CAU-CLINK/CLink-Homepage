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
  /* @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  } */
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

function Members() {
  return (
    <BigContainer>
      <MoreText>
        <Link href="/members">
          <More href="/members">MORE &rarr;</More>
        </Link>
      </MoreText>
    </BigContainer>
  )
}

export default Members
