import { SendOutlined } from '@ant-design/icons'
import { message, Alert, Input, Button } from 'antd'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PageLayout from 'src/components/layouts/PageLayout'
import PageTitle from 'src/components/layouts/PageTitle'
import styled from 'styled-components'
import { MOBILE_MIN_WIDTH, TABLET_MIN_WIDTH } from 'src/models/constants'
import { CenterAlignedH1 } from '../members'

const FlexContainerColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 3rem;
`

const SNS = styled.div`
  display: flex;
  align-items: center;
  gap: 8rem;
`

const Facebook = styled.div`
  width: min(8rem, 20vw);
  height: min(7rem, 15vw);
  border: 0.5rem solid #1877f2;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Medium = styled.div`
  width: min(8rem, 20vw);
  height: min(7rem, 15vw);
  border: 0.5rem solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SNSName = styled.span`
  font-size: min(1.5rem, 3vw);
  font-weight: 500;
`

const SNSLink = styled.a`
  font-size: min(3rem, 3vw);
  color: inherit;
`

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;

  width: 90%;
  max-width: ${TABLET_MIN_WIDTH};
  padding: 1rem;
  margin: 1rem;
  border: 0.5rem solid black;
`

const FlexContainerGap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
`

const FlexContainerJustifyCenter = styled.div`
  display: flex;
  justify-content: center;
`

const StyledButton = styled(Button)`
  width: max(50%, ${MOBILE_MIN_WIDTH});

  font-weight: bold;
  border: none;
  color: #fff !important;
  background: black !important;

  :hover {
    color: #fff !important;
    background: #444 !important;
  }
`

type FormData = {
  name: string
  email: string
  content: string
}

function ContactPage() {
  const [isSendingEmail, setIsSendingEmail] = useState(false)
  const { control, errors, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: { name: '', email: '', content: '' },
  })

  async function onSubmit(data: FormData) {
    setIsSendingEmail(true)
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
      { name: data.name, email: data.email, content: data.content },
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    )
    setIsSendingEmail(false)

    message.success('이메일 전송 완료')
    setValue('name', '')
    setValue('email', '')
    console.log(response)
  }

  return (
    <PageTitle title="중앙대학교 블록체인 학회 C-Link - Contact">
      <PageLayout>
        <CenterAlignedH1>CONTACT</CenterAlignedH1>
        <FlexContainerColumn>
          <FlexContainerGap>
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
          </FlexContainerGap>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <FlexContainerGap>
              <label htmlFor="name">이름</label>
              <Controller
                control={control}
                name="name"
                render={(p) => (
                  <Input
                    allowClear={true}
                    disabled={isSendingEmail}
                    placeholder="Please input your name"
                    type="text"
                    {...p}
                  />
                )}
                rules={{ required: '자신의 이름을 입력해주세요.' }}
              />
              {errors.name && <Alert message={errors.name.message} type="warning" showIcon />}
            </FlexContainerGap>

            <FlexContainerGap>
              <label htmlFor="email">이메일</label>
              <Controller
                control={control}
                name="email"
                render={(p) => (
                  <Input
                    allowClear={true}
                    disabled={isSendingEmail}
                    placeholder="Please input your email address"
                    type="email"
                    {...p}
                  />
                )}
                rules={{
                  required: '자신의 이메일 주소를 입력해주세요.',
                  pattern: {
                    message: '이메일 주소를 형식에 맞게 입력해주세요.',
                    value: /\S+@\S+\.\S+/,
                  },
                }}
              />
              {errors.email && <Alert message={errors.email.message} type="warning" showIcon />}
            </FlexContainerGap>

            <FlexContainerGap>
              <label htmlFor="content">내용</label>
              <Controller
                control={control}
                name="content"
                render={(p) => (
                  <Input.TextArea
                    autoSize={{ minRows: 10 }}
                    disabled={isSendingEmail}
                    placeholder="Please input email content"
                    {...p}
                  />
                )}
                rules={{ required: '이메일 내용을 입력해주세요.' }}
              />
              {errors.content && <Alert message={errors.content.message} type="warning" showIcon />}
            </FlexContainerGap>

            <FlexContainerJustifyCenter>
              <StyledButton
                htmlType="submit"
                icon={<SendOutlined />}
                loading={isSendingEmail}
                size="large"
                type="primary"
              >
                SEND EMAIL
              </StyledButton>
            </FlexContainerJustifyCenter>
          </Form>
        </FlexContainerColumn>
      </PageLayout>
    </PageTitle>
  )
}

export default ContactPage
