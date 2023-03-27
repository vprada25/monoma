import { Button, Form, Input } from 'antd'
import { useDispatch } from 'react-redux'
import { loginPending } from '../../../services/auth/authSlice'
import { FormData } from '../../../pages/Public/Login/types'

const { Item } = Form
const { Password } = Input

export const LoginForm = () => {
    const dispatch = useDispatch()

    const handleFormClick = (values: FormData) =>
        dispatch(loginPending({ ...values }))

    return (
        <Form
            onFinish={handleFormClick}
            name='basic'
            layout='vertical'
            autoComplete='off'
        >
            <Item
                label='Email'
                name='email'
                rules={[{ required: true, type: 'email' }]}
                hasFeedback
            >
                <Input />
            </Item>

            <Item
                label='Contraseña'
                name='password'
                rules={[{ required: true, message: 'Please input your password!' }]}
                hasFeedback
            >
                <Password />
            </Item>

            <Item noStyle>
                <Button block type='primary' htmlType='submit'>
                    Submit
                </Button>
            </Item>
        </Form>
    )
}
