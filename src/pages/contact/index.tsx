import PageHeader from 'src/components/atoms/PageHeader'
import PageLayout from 'src/components/layouts/PageLayout'
import PageTitle from 'src/components/layouts/PageTitle'
import styled from 'styled-components'
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const SNS = styled.div`
  display: flex;
  align-items: center;
  gap: 8rem;
`

const Facebook = styled.div`
  width: 8.5rem;
  border: 0.5rem solid #1877f2;
  padding: 0 0.8rem;
`

const Medium = styled.div`
  width: 8.5rem;
  border: 0.5rem solid black;
  padding: 0 0.8rem;
`

const SNSName = styled.span`
  font-size: 2rem;
  font-weight: 500;
`

const SNSLink = styled.a`
  font-size: 1.5rem;
  color: inherit;
`

const Form = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 0.5rem solid black;
  margin-bottom: 5rem;
`

const Input = styled.input`
  border: none;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.3);
  outline-style: none;
  padding: 0.5em;
  margin-bottom: 1.3rem;
`
const Textarea = styled.textarea`
  border: none;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.3);
  outline-style: none;
  padding: 0.5em;
  margin-bottom: 0.5rem;
`
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.input`
  margin-top: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  background-color: black;
  color: white;
  padding: 0.6rem 0;
  width: 40%;
  cursor: pointer;
`

type FormData = {
  name: string
  email: string
  message: string
}

function ContactPage() {
  //email-js 키값
  const serviceId = 'service_oozorde'
  const templateId = 'template_spwgo7a'
  const userId = 'user_aO4pNuNPo40o3QURHDcSD'
  const { register, handleSubmit } = useForm<FormData>()

  const handleSubmitForm = handleSubmit((data: FormData, r: any) => {
    alert('이메일 전송 완료')
    emailjs.send(
      serviceId,
      templateId,
      { name: data.name, email: data.email, message: data.message },
      userId
    )
    r.target.reset()
  })

  return (
    <PageTitle title="C-Link Contact">
      <PageLayout>
        <PageHeader>Contacts</PageHeader>
        <Wrapper>
          <Container>
            <SNS>
              <Facebook>
                <SNSName>
                  FACE
                  <br />
                  BOOK
                </SNSName>
              </Facebook>
              <SNSLink href="https://www.facebook.com/CAUCLink/">facebook.com/CAUCLink</SNSLink>
            </SNS>
            <SNS>
              <Medium>
                <SNSName>
                  MED
                  <br />
                  IUM
                </SNSName>
              </Medium>
              <SNSLink href="https://medium.com/caulink">medium.com/caulink</SNSLink>
            </SNS>

            <Form onSubmit={handleSubmitForm}>
              <Input
                type="text"
                placeholder="name"
                name="name"
                ref={register({ required: true })}
              />

              <Input
                type="text"
                placeholder="Email"
                name="email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
              <Textarea placeholder="message" name="message" ref={register({ required: true })} />
              <ButtonDiv>
                <Button type="submit" value="SEND" />
              </ButtonDiv>
            </Form>
          </Container>
        </Wrapper>
      </PageLayout>
    </PageTitle>
  )
}

export default ContactPage
