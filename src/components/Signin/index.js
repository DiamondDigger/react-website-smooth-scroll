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
    Text
} from './SigninElements'

const SignIn = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to="/">dolla</Icon>
                <FormContent>
                    <Form>
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignIn