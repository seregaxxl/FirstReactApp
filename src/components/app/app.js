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
        {name: 'lokin', salary: 4020, increase: true, like:true, id:0},
        {name: 'Sergey Koko', salary: 42100, increase: false, like:false, id:1},
        {name: 'Rupert Green', salary: 1400, increase: false, like:false, id:2}
      ],
      term: '',
      filter: ''
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  onAdd = (e, {name, salary}) => {
    e.preventDefault();
    if(name.length >= 3 && salary) {
      this.setState(({data}) => {

        const newItem = {name:name, salary:salary,increase: false, like:false, id:data[data.length-1].id + 1}
        const newArr = [...data, newItem]
        return {
          data: newArr
        }
      })
    } else {
      alert('name must be 3 or more chars long and salary need to exist')
    }
    
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  onFilter = (filter) => {
    this.setState({filter});
  }

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



  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  
//   filterButtons = (items, filter) => {
//     switch (filter) {
//         case 'rise':
//             return items.filter(item => item.rise);
//         case 'moreThen1000':
//             return items.filter(item => item.salary > 1000);
//         default:
//             return items
//     }
// }
  filterButtons = (filter, visibleData) => {
    switch(filter) {
      case 'increase':
        return visibleData.filter(item => item.increase);
      case 'salaryMore1000':
        return visibleData.filter(item => item.salary > 1000);
      default:
        return visibleData;
    }
    // if (filter === '0') {
    //   return visibleData;
    // }
    // if (filter === '1') {
    //   return visibleData.filter(item => item.increase);
    // }
    // if (filter === '2') {
    //   return visibleData.filter(item => item.salary > 1000);
    // }
  }

  onUpdateSalary = (salary, id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, 'salary' : salary}
        }
        return item;
       })
    }))
  }

  render() {
    const {data, term} = this.state;
    const employees = data.length,
          premCount = data.filter(item => item.increase).length,
          visibleData = this.filterButtons(this.state.filter, this.searchEmp(data, term));

    return (
      <div className="app">
          <AppInfo
          count={employees}
          premCount={premCount}
          />
          <div className="search-panel">
              <SearchPanel 
              onUpdateSearch={this.onUpdateSearch}
              />
              <AppFilter
              onFilter={this.onFilter}/>
          </div>
          
          <EmployeesList 
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          onUpdateSalary={this.onUpdateSalary}
          />
          <EmployeesAddForm
          onAdd={this.onAdd}
          />
      </div>
    );
  }
}

export default App;


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