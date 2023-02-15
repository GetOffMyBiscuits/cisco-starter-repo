import './App.css';
import Banner from './Components/Banner';
import Card from './Components/Card'
import Exhibit from './Components/Exhibit';

function App() {
  return (
    <div>
    <Banner />
    <Exhibit>
      <Card title='Card Title'
      imageUrl='https://i.ebayimg.com/images/g/dPIAAOSwjL5jDgxv/s-l500.jpg'
      body='This is the body of our new component card.'/>
    </Exhibit>
    </div>
  );
}

export default App;
