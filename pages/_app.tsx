// import App from 'next/app'
import { FirebaseAppProvider } from "reactfire";
export interface MyAppProps {
  Component: any;
  pageProps: any;
}
const firebaseConfig = {
  apiKey: "AIzaSyDZfBs5kE4fUi_V4WhPjz3t_A9PIJ9kMik",
  authDomain: "ios-hello.firebaseapp.com",
  databaseURL: "https://ios-hello.firebaseio.com",
  projectId: "ios-hello",
  storageBucket: "ios-hello.appspot.com",
  messagingSenderId: "289815962780",
  appId: "1:289815962780:web:e8c938fa41e8b2f6467959",
  measurementId: "G-W7FMJE60KE",
};

const MyApp: React.SFC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Component {...pageProps} />
    </FirebaseAppProvider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
