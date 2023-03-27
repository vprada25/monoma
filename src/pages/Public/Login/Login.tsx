import { Card } from 'antd'

import Logo from '../../../assets/images/png/logo.png'
import { LoginForm } from '../../../components/forms/LoginForm'

import styles from './Login.module.scss'

const Login = () => {
    return (
        <div
            className={`${styles.login} m-0 justify-content-center align-items-center vh-100 row`}
        >
            <div className='d-flex flex-column text-center px-5 pt-4'>
                <Card className={styles.login__card}>
                    <img className={styles.login__logo} src={Logo} alt='logo' />
                    <LoginForm />
                </Card>
            </div>
        </div>
    )
}

export default Login
