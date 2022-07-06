import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/GlobalStyle';
import { dark } from './Styles/Themes';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css'

import Home from './Pages/Home';

import MyWorks from './Pages/MyWorks';
import ScrollTriggerProxy from './Components/ScrollTriggerProxy';
import { AnimatePresence } from "framer-motion"
import Footer from './Pages/Footer';
import MySkills from './Pages/MySkills';
import Contact from './Pages/Contact';
import About from './Pages/About/About'




function App() {

  const containerRef = useRef(null)

  return (
    <>
      <GlobalStyle></GlobalStyle>

      <ThemeProvider theme={dark}>
        <main class="App" ref={containerRef}>

        </main>
        <LocomotiveScrollProvider
          options={
            {
              smooth: true,
              // ... all available Locomotive Scroll instance options 
              smartphone: {
                smooth: true,
              },
              tablet: {
                smooth: true,
              }
            }
          }
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <ScrollTriggerProxy></ScrollTriggerProxy>
          <AnimatePresence>
            <main className='app' data-scroll-container ref={containerRef}>
              <Home></Home>
              <About></About>
              <MyWorks></MyWorks>
              <MySkills></MySkills>
              <Contact></Contact>
              <Footer></Footer>
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>

      </ThemeProvider>

    </>
  );
}

export default App;
