import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { SectionOne } from './components/SectionOne/SectionOne';
import { SectionTwo } from './components/SectionTwo/SectionTwo';
import { SectionThree } from './components/SectionThree/SectionThree';
import { ContactForm } from './components/ContactForm/ContactForm';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div>
    
    <Navbar/>

    <Hero/>

    <SectionOne/>

    <SectionTwo/>
    
    <SectionThree/>

    <ContactForm/>
    
    <Footer/>

</div>
  );
}

export default App;
