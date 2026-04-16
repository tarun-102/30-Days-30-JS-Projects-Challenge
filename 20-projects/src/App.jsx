  import { useState } from 'react'
  import './App.css'
  import Header from './components/Header/Header'
  import Button from './components/Button/Button'
  import Card from './components/Card/Card'
  function App() {


    return (
      <>
        <div>
          <Header />

          <div className='hero-section ' >
            <div className='leftpart'>
              <h1>DESIGN THAT MAKES AN IMPACT</h1>
              <p>We blend creativity and data to build digital experiences that drive growth for your business.</p>
              <Button buttontitle={'Our Portfolio'}/>
              <Button buttontitle='Learn More' className='lernbtn' />
            </div>
            <div className='rightpart'>
              <img src="https://img.freepik.com/premium-vector/business-meeting_602838-1970.jpg?semt=ais_rp_progressive&w=740&q=80" alt="hero img" className='heroimg' />
            </div>
          </div>

          <div id='services'>
            <h3>Our Services</h3>
            <h1>Our Services</h1>
          </div>
         
          <div className='cardsection'>
             <Card 
            cardimg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3cGBEE-QtSFJ4mApPfoJSXrjoPujq0Gm8g&s'
            cardtitle='UI/UX Design'
            paragraph='Ilisound  design rekul UI/UX design and cleany anton UI/UX design'
            />
            <Card cardimg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjhznRXuSNguXSb3YdCpZfSt3OIlsFIlAJg&s' 
              cardtitle='Web Development'
              paragraph='Bond development es skifirl digital experiences and your growth'
            />
            <Card  
              cardimg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQt5o_zwOVIpH5pDeVDoH3FtW4ntNFqMZ_7w&s'
              cardtitle='Digital Marketing'
              paragraph='Digital marketing with a your digital marketing and your acorlony '
            />
          </div>
        </div>
      </>
    )
  }

  export default App
