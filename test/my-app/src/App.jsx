import './App.css'
import Main from './Main'
import {Header} from './Header'

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Main />
    </div>
  );
}

