import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
import { Card } from "react-bootstrap";
import img from './Name.png';
import Background from './galaxy.png'
import poke1 from './poke1.png'
import decor from './blackhole.png'
import ring from './ledring.png'
import poke2 from './pokemon.png'
import foot from './footer.png'


function Landing() {
    return (
     <div style={{backgroundImage: `url(${Background})`, width: '1481px', height: '3100px', marginTop: '-20px', backgroundRepeat: 'no-repeat', backgroundColor: '#1A0C35'}}>
       <header>
        <img style={{width: '1200px', marginLeft: '170px', marginTop: '100px'}} src={img} />
        <Card style={{background: 'transparent', color: 'white', borderColor: 'white', width: '400px', height: '70px', borderRadius: '50px', textAlign: 'center', marginTop: '-100px', marginLeft: '180px', fontSize: '25px', paddingTop: '12px'}}>Discover</Card>
       </header>
       <p style={{color:'white', marginLeft: '170px', marginTop: '100px', fontSize: '30px'}}>PokeApi is a learning platform to learn us about the Pokemon world. It helps educate <br /> & learn the use of API.</p>
       <h1 style={{color: 'white', marginLeft: '170px', marginTop: '100px'}}>Feautured Pokemon</h1>
       <div style={{width: '1481px'}}>
       <div style={{width: '300px', height: '80px', backgroundColor: ' white', borderRadius: ' 100px', marginLeft: '170px', marginTop: '50px'}}>
       <img style={{width: '90px', marginLeft: '20px', marginTop: '-10px'}} src={poke1} />
       <p style={{color: 'purple', fontSize: '20px', marginLeft: '140px', marginTop: '-75px'}}>Squirtle</p>
       </div>
       <div style={{width: '300px', height: '80px', backgroundColor: ' white', borderRadius: ' 100px', marginLeft: '530px', marginTop: '-80px'}}>
       <img style={{width: '90px', marginLeft: '20px', marginTop: '-10px'}} src={poke1} />
       <p style={{color: 'purple', fontSize: '20px', marginLeft: '140px', marginTop: '-75px'}}>Squirtle</p>
       </div>
       <div style={{width: '300px', height: '80px', backgroundColor: ' white', borderRadius: ' 100px', marginLeft: '890px', marginTop: '-80px'}}>
       <img style={{width: '90px', marginLeft: '20px', marginTop: '-10px'}} src={poke1} />
       <p style={{color: 'purple', fontSize: '20px', marginLeft: '140px', marginTop: '-75px'}}>Squirtle</p>
       </div>
       <div style={{width: '300px', height: '80px', backgroundColor: ' white', borderRadius: ' 100px', marginLeft: '1250px', marginTop: '-80px'}}>
       <img style={{width: '90px', marginLeft: '20px', marginTop: '-10px'}} src={poke1} />
       <p style={{color: 'purple', fontSize: '20px', marginLeft: '140px', marginTop: '-75px'}}>Squirtle</p>
       </div>
       </div>

       <img style={{marginLeft: '800px'}} src={decor} />
       <h1 style={{marginTop: '-500px', color: 'white', fontSize: '30px', marginLeft: '170px', width: '800px', boxShadow: '5px, 10px, 5px'}}>"Strong Pokemon. Weak Pokemon. That is only the selfish perception of people. Truly skilled trainers should try to win with all their favorites." <br/>
       <br/> - Karen.</h1>
       <img style={{width: '400px', marginTop: '180px', marginLeft: '-150px'}} src={ring} />

       <h1 style={{marginTop: '-350px', marginLeft: '170px', color: '#5DC7F3'}}>Compare and see the stronger Pokemon</h1>

       <img style={{width: '1200px', marginTop: '100px', marginBottom: '50px', marginLeft: '150px', boxShadow: '5px'}} src={poke2} />



       <div style={{marginLeft: '150px'}}>
        <h1 style={{color: '#F4AC1C'}}>Umbreon</h1>
        <p style={{color: 'white'}}>Type: Dark <br/> Abilities: Synchronize</p>
       </div>
       
       <div style={{ marginLeft: '420px', marginTop: '-140px'}}>
        <h1 style={{color: '#F4AC1C', fontSize: '35px'}}>Eevee</h1>
        <p style={{color: 'white', fontSize: '15px'}}>Type: Normal <br/> Abilities: Run, Adapt</p>
       </div>

       <div style={{ marginLeft: '670px', marginTop: '-140px'}}>
        <h1 style={{color: '#F4AC1C', fontSize: '30px'}}>Bulbasaur</h1>
        <p style={{color: 'white', fontSize: '15px'}}>Type: Grass, Poison <br/> Abilities: Overgrow</p>
       </div>

       <div style={{ marginLeft: '900px', marginTop: '-75px'}}>
        <h1 style={{color: '#F4AC1C', fontSize: '35px'}}>Sandshrew</h1>
        <p style={{color: 'white', fontSize: '15px'}}>Type: Ground <br/> Abilities: Sand Veil</p>
       </div>

       <div style={{marginLeft: '1140px', marginTop: '-80px'}}>
        <h1 style={{color: '#F4AC1C'}}>Pikachu</h1>
        <p style={{color: 'white'}}>Type: Electric <br/> Abilities: Static</p>
       </div>

       <Card style={{background: 'transparent', color: 'white', borderColor: 'white', width: '400px', height: '70px', borderRadius: '50px', textAlign: 'center', marginTop: '100px', marginLeft: '530px', fontSize: '25px', paddingTop: '12px'}}>View More</Card>

       <img style={{width: '1200px', marginLeft: '120px', marginTop: '400px'}} src={foot} />
       
     </div>
    )
}

export default Landing;