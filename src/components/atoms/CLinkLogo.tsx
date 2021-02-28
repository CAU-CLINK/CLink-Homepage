import Image from 'next/image'
import Link from 'next/link'

function CLinkLogo() {
  return (
    <Link href="/">
      <a href="/">
        <Image src="/clink-logo.png" alt="C-Link Logo" width="625" height="283" />
      </a>
    </Link>
  )
}

export default CLinkLogo
