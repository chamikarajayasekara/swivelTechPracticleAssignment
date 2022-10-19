import '../styles/globals.css'
import '../styles/style.scss'
import type { AppProps } from 'next/app'
import {store} from '../store/store'
import { Provider } from 'react-redux';
import NavBar from "../components/sharedComponents/NavBar/NavBar";
import TodosProvider from "../context/alert";

function MyApp({ Component, pageProps }: AppProps) {
  return( <Provider store={store}>
            <TodosProvider>
                <NavBar/>
                <Component {...pageProps} />
            </TodosProvider>
         </Provider>)
}

export default MyApp
