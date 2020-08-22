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
    let colItems = this.props.cols.map((item) => {
      let header = <th cols={item} />
      return header;
    })
    return (
    <thead>
      <tr>
        {colItems}
      </tr>
    </thead>
    );
  }
}
let colArray = ['Name', 'State', 'Phone', 'Twitter'];
ReactDOM.render(<TableHeader cols={colArray} />,
  document.getElementById('root'));

export class SenatorRow extends Component {
  render() {
    let senatorItems = this.props.senator.map((items) => {
      let oneSenator = <td content={items} />
    })
    return (
      <tr>
        {oneSenator}
        <td content="name" />
        <td content="state party" />
        let num = <a href="tel:"{ this.props.number } />
        <td content={num} />
        let twit = <a href="https://twitter.com/"{ @+this.props.twitter } />
        <td content={twit} />
      </tr>
    )
  }
}
ReactDOM.render(<SenatorRow content={EXAMPLE_SENATORS} />,
  document.getElementById('root'));


