import React from 'react'
import {
    Container,
    Icon,
    Form,
    FormWrap,
    FormContent,
    FormButton,
    FormH1,
    FormInput,
    FormLabel,
    FormH3
} from './SigninElements'

const SignIn = () => {
    return (
        <div>
        <Container>
            <FormWrap>
                <Icon to="/">dolla</Icon>
                <FormContent>
                    <Form>
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <FormInput type="email" id='email' required />
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <FormInput type='password' id='password' required />
                        <FormButton type='submit' onClick={() => console.log('Submit button click')}>Continue</FormButton>
                        <FormH3>Forgot password</FormH3>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </div>
    )
}

export default SignIn