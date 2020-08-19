import React, { Component } from 'react'; //import React Component

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */
export class App extends Component {
  render() {
    let div = React.createElement('div', {className: 'container'});
    let h1 = <h1>"US Senators 2019"</h1>;
    div.appendChild(h1);
    return div;
  }
  
} 
