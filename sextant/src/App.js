import './App.css';
import Banner from './Components/Banner';
import Exhibit from './Components/Exhibit';
import getIP from './Components/IpFetch'

var ip = ''
getIP('ipv4').then(data => ip = String(data)).catch(er => console.error);
console.log(ip)

var ipSix = ''
getIP('ipv6').then(data => ipSix = String(data)).catch(er => console.error);
console.log(ip)

function App() {
  return (
    <div>
    <Banner bannerText='Sextant'/>
    <Exhibit name = 'Your IPv4' children={ip}/>
    <Exhibit name = 'Your IPv6' children = {ipSix}/>
    <Exhibit name = 'Empty Space'/>
    </div>
  );
}

export default App;
