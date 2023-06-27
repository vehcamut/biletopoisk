import { store } from '../app/store';
import Layout from '../components/Layout/Layout'
import '../app/globals.css'
import { Provider } from 'react-redux'


export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}