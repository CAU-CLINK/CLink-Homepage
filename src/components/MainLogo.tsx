import styled from 'styled-components'

const Group1 = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

const Clink = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 510;
  font-size: 350px;
  line-height: 100vh;
  text-align: center;
  color: #000000;
  white-space: nowrap;
`

const Text = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 50px;
  text-align: center;
  letter-spacing: 0.03em;
  color: white;
  background: black;
  position: absolute;
  top: 50%;
  left: 53%;
  padding-left: 20px;
  padding-right: 20px;
  transform: translate(-50%, -50%);
  white-space: nowrap;
`

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

// eslint-disable-next-line no-empty-pattern
function MainLogo({}: Props) {
  return (
    <>
      <Group1>
        <Clink>CLINK</Clink>
        <Text>Hello, World. 중앙대학교 블록체인학회 씨링크 입니다.</Text>
      </Group1>
    </>
  )
}

export default MainLogo
