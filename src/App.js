import React from 'react';

import './App.css';
import chip from './chip.png'
import Number from './number'
import Holder from './holder'
import Date from './date'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'XXXXXX XXX',
      number: '****************',
      month: 'XX',
      year: 'XXXX',

    }

  }
  
    Changename = event => {
      if (
        /^([^0-9]*)$/.test(event.target.value) &&
        event.target.value.length <= 20
      ) {
        this.setState({
          name: event.target.value.toUpperCase()
        });
      } else {
        event.target.value="" ;
        alert("enter valid name!");
      
      }
    };


  Changenumber(nu) {
    if (/^[0-9]*$/.test(nu.target.value)) {
      this.setState({
        number: nu.target.value
      });
    } else {
      alert ('enter valid Number') ;
      nu.target.value= "" ;
    }

  }

  Changemonth(m) {
    if (/^[0-9]*$/.test(m.target.value)&&(m.target.value<=12)&&(m.target.value>0)) {
      this.setState({
        month: m.target.value
      });
      
    } else {
      alert ('enter valid Month') ;
      m.target.value= "" ;
    }


  }
  Changeyear(y) {
    if (/^[0-9]*$/.test(y.target.value)) {
      this.setState({
        year: y.target.value
      });
    } else {
      alert ('enter valid year') ;
      y.target.value= "" ;
    }

  }

  render() {
    return (

      <div className='card'>
        <h1>Credit Card </h1>
        <img src={chip} className='chip'></img>
        <Number numbers={this.state.number} />

        <span id="date">MONTH/YEAR</span>
        <div className="div2">
          <span> 5422 </span>
          <span id="valid">valid THRU</span>
          <span>{this.state.month}/{this.state.year}</span>
        </div>
        <div className="div3">
          <Holder holder={this.state.name} />
          <img src="http://creditcardimagelogos.com/wp-content/themes/e838pqefv3ejmkevzirye533556/files/logos/new/cdn_subdomain/mc_vs_accpt_v_133_gif.gif" alt="img" className="master"></img>

        </div>

        <form className="formulaire" action="">
          <div className='div' >
            <label >Name</label>
            <input type="text" name="name" maxLength="20" onChange={this.Changename.bind(this)} />
          </div>
          <div className='div'>
            <label >Number</label>
            <input type="text" name="Number" maxLength="16" onInput={this.Changenumber.bind(this)} />
          </div>
          <label className="expiration">Expiration Date</label>

          <div className='div date'>
            
            <input className="my" type="text" name="month" maxLength="2" onChange={this.Changemonth.bind(this)} />
          
                  
            <input className="my" type="text" name="year" maxLength="4" onChange={this.Changeyear.bind(this)} />
          
            </div>
           
                </form>


          </div>


          )
        }
      }
      
      export default App;
