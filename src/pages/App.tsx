import { HelmetProvider } from 'react-helmet-async'

import Public from '../routes/Public/RoutesPublic'
import Private from '../routes/Private/RoutesPrivate'

import { KEY_AUTH } from '../services/auth/authSlice'
import { useData } from '../hooks/useData'

import '../sass/main.scss'

function App() {
    const { authentication } = useData({ reducer: KEY_AUTH })
    const isLogged = localStorage.getItem('token')

    return (
        <HelmetProvider>
            <div className='container-fluid'>
                {authentication || isLogged ? <Private /> : <Public />}
            </div>
        </HelmetProvider>
    )
}

export default App
