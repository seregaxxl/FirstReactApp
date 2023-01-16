import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';



function App() {

  const data = [
    {name: 'lokin', salary: 4020, increase: true, key:0},
    {name: 'Sergey Koko', salary: 42100, increase: false, key:1},
    {name: 'Rupert Green', salary: 1400, increase: false, key:2}
  ]

  return (
    <div className="app">
        <AppInfo />
        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
