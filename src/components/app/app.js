import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'lokin', salary: 4020, increase: true, id:1},
        {name: 'Sergey Koko', salary: 42100, increase: false, id:2},
        {name: 'Rupert Green', salary: 1400, increase: false, id:3}
      ]
    }
    
  }
  deleteItem = (id) => {
    this.setState(({data}) => {
      // const index = data.findIndex(elem => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after]

      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  onAdd = (e, {name, salary}) => {
    e.preventDefault();
    this.setState(({data}) => {
      // const index = data.findIndex(elem => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      const newItem = {name:name, salary:salary, id:data.length + 1}
      const newArr = [...data, newItem]
      return {
        data: newArr
      }
    })
  }

  render() {
    return (
      <div className="app">
          <AppInfo />
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
          data={this.state.data}
          onDelete={this.deleteItem}/>
          <EmployeesAddForm
          onAdd={this.onAdd}
          />
      </div>
    );
  }
}

export default App;
