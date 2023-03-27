import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Loading from '../../components/Loading/Loading'

const Login = lazy(() => import('../../pages/Public/Login/Login'))
const Error404 = lazy(() => import('../../components/Error404/Error404'))

const Public = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/404' element={<Error404 />} />
                    <Route path='*' element={<Navigate replace to='/' />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Public
