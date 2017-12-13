import React, { Component } from 'react';

import Hero from '../Heroes/Hero/Hero';
import './App.css'

class App extends Component {

  state = {
    heroes: [
      {
        name: "Flash", 
        superpower: "Speed",
        attack: 6,
        life: 11,
        img: 'http://www.freepngimg.com/download/the_flash/12-2-flash.png'
      },
      {
        name: "Thor", 
        superpower: "Lightning",
        attack: 9,
        life: 9,
        img:'http://vignette2.wikia.nocookie.net/thedailybugle/images/b/b4/Asgardian_Thor.png/revision/latest?cb=20150629095146'       
      },
      {
        name: "Hulk", 
        superpower: "Strenght",
        attack: 8,
        life: 10,
        img: 'https://orig00.deviantart.net/d662/f/2012/318/a/3/hulk_by_kevinraganit-d5l1mue.png'         
      }
    ]
  }

  fighteventHandler = () => {
    const life = this.state.heroes[0].life;
    this.setState.heroes[0].life = life - 2;
  }

  render () {
    return (
      <div className="App">
        <h1>Heroes fighting</h1>
        <button>Attack</button>
        <div className="HeroDiv">
          <Hero 
          name={this.state.heroes[0].name} 
          superpowers={this.state.heroes[0].superpower} 
          img={this.state.heroes[0].img} 
          life={this.state.heroes[0].life} />
        </div>
        <div className="HeroDiv">
          <Hero 
          name={this.state.heroes[1].name} 
          superpowers={this.state.heroes[1].superpower} 
          img={this.state.heroes[1].img} />
        </div>
        <div className="HeroDiv">
          <Hero 
          name={this.state.heroes[2].name} 
          superpowers={this.state.heroes[2].superpower} 
          img={this.state.heroes[2].img} />
        </div>
        
      </div>
    );
  }
}

export default App;
