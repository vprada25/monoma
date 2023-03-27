import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Loading from '../../components/Loading/Loading'
import { Header } from '../../components/Header/Header'

const Home = lazy(() => import('../../pages/Private/Home/Home'))

const Error404 = lazy(() => import('../../components/Error404/Error404'))

const Private = () => {
    return (
        <BrowserRouter>
            <Header>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/404' element={<Error404 />} />
                        <Route path='*' element={<Navigate replace to='/404' />} />
                    </Routes>
                </Suspense>
            </Header>
        </BrowserRouter>
    )
}

export default Private
