import './App.css';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import icon from './logo.svg'

function App() {
  return (
    < >
    <meta name='description' content='This is a food ordering and reserving a tsble app for lttle lemon resteraunt'/>
    <meta name='og:title' content='Little Lemon'/>
    <meta name='og:description' content='This is a food ordering and reserving a tsble app for lttle lemon resteraunt'/>
    <meta name='og:image' content={icon}/>

    <Header/>
    <Nav/>
    <Main/>
    <Footer/>
    </>
  );
}

export default App;
