import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return <SignIn afterSignUpUrl="/new-user" redirectUrl="/new-user" />
}

export default SignInPage
