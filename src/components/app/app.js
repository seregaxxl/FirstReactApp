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
        {name: 'lokin', salary: 4020, increase: true, like:true, id:1},
        {name: 'Sergey Koko', salary: 42100, increase: false, like:false, id:2},
        {name: 'Rupert Green', salary: 1400, increase: false, like:false, id:3}
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

      const newItem = {name:name, salary:salary,increase: false, like:false, id:data[data.length-1].id + 1}
      const newArr = [...data, newItem]
      return {
        data: newArr
      }
    })
  }

  // onToggleIncrease = (id) => {
  //   this.setState(({data}) => {
  //     const index = data.findIndex(elem => elem.id === id);
  //     const oldItem = data[index];
  //     const newItem = {...oldItem, increase: !oldItem.increase};
  //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
  //     return {
  //       data: newArr
  //     }

  //   })
  // }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
       })
    }))
  }

  // onToggleRise = (id) => {
  //   this.setState(({data}) => ({
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return {...item, like: !item.like}
  //       }
  //       return item;
  //      })
  //   }))
  // }



  render() {
    const employees = this.state.data.length,
          premCount = this.state.data.filter(item => item.increase).length;
    return (
      <div className="app">
          <AppInfo
          count={employees}
          premCount={premCount}
          />
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          />
          <EmployeesAddForm
          onAdd={this.onAdd}
          />
      </div>
    );
  }
}

export default App;
