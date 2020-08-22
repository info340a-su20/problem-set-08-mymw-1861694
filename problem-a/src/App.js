import React, { Component } from 'react'; //import React Component
import { render } from 'react-dom';

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */
export class App extends Component {
  render() {
    let div = (<div className='container'>
      <h1>"US Senators 2019"</h1>
      {SenatorTable.render()};
      </div>);
    return div;
  }
} 

export class SenatorTable extends Component {
  render() {
    let table = <table className='table table-bordered'></table>
  }
}

//prop called cols that is an array of column names (as Strings).
export class TableHeader extends Component {
  render() {
    <thead>
      <tr>
        <th>
          //one for each String in the cols prop.
        </th>
      </tr>
    </thead>
  }
}


Use the .map() function to convert the cols prop into an array of <th> DOM elements (using JSX and inline expressions), and then include this array in the returned DOM elements.

    Be sure to give each <th> element a key attribute (the column name string is a fine value) so that React can keep track of it.

Include an instance of the TableHeader class in DOM rendered by the SenatorTable class (as a child of the <table>). The SenatorTable class should pass the TableHeader it creates a cols prop that is the array ['Name', 'State', 'Phone', 'Twitter'].

