import 'bootswatch/dist/flatly/bootstrap.min.css'
import '../global.css'


import Head from "next/head"
const MyApp = ({ Component, pageProps }) => {
    return (<>
        <Head>
            <title> Portfolio </title>
            <meta name="description" content="Cristian Diaz Portafolio website"/>
        </Head>
        <Component {...pageProps} />
    </>
    )
}

export default MyApp
