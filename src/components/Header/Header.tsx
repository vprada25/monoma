import { ReactNode } from 'react'
import { Layout, Menu, Tooltip } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'

import { useDispatch } from 'react-redux'
import { logout } from '../../services/auth/authSlice'

import styles from './Header.module.scss'

const { Header: NavBar } = Layout

export const Header = ({ children }: { children: ReactNode }) => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <Layout className={styles.mainLayout}>
            <NavBar className={styles.mainLayout_right}>
                <div className={styles.mainLayout_right_item}>
                    <Menu mode='horizontal' theme='dark'>
                        <Menu.Item key={0}>
                            <Tooltip title='Cerrar Sesion'>
                                <LogoutOutlined onClick={handleLogout} />
                            </Tooltip>
                        </Menu.Item>
                    </Menu>
                </div>
            </NavBar>
            <Layout.Content style={{ bottom: 0 }}>{children}</Layout.Content>
            <Layout.Footer style={{ textAlign: 'center' }}>
                TesT Monoma ©2023 Created by:
                <a href='https://www.linkedin.com/in/vprada25/'>
                    Victor A. Prada Noreña
                </a>
            </Layout.Footer>
        </Layout>
    )
}
