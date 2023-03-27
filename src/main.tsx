import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './pages/App'
import Store from './store/Store'

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
