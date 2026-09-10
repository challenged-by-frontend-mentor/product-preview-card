import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'

import desktopDesign from '../.reference/design/desktop-design.jpg';
import mobileDesign from '../.reference/design/mobile-design.jpg';

function App() {
  return (
    <>
      <picture id='design-overlay'>
      <source media='(min-width: 1025px)' srcSet={desktopDesign} />
      <img src={mobileDesign} alt='Design reference' />
      </picture>

      <main className="main-content">
        <Card />
      </main>
      <Footer />
    </>
  )
}

export default App
