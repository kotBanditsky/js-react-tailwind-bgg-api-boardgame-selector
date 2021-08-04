import Content from './components/Content';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div  className='flex flex-col h-screen justify-between'> 
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
export default App;