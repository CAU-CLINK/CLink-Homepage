import styled from 'styled-components'

const RelativePosition = styled.div`
  padding: 1rem;
  position: relative;
  z-index: 1;
`

const Clink = styled.h1`
  margin: 0;

  font: bold min(30vw, 20rem) / 1 Poppins;
  text-align: center;
  word-break: keep-all;
`

const Text = styled.p`
  margin: 0;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  font: min(3vw, 2rem) Poppins;
  white-space: nowrap;
  text-align: center;
  color: white;
  background: black;
`

function HeroImage() {
  return (
    <RelativePosition>
      <Clink>CLINK</Clink>
      <Text>Hello, World. 중앙대학교 블록체인학회 씨링크 입니다.</Text>
    </RelativePosition>
  )
}

export default HeroImage
