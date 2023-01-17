import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classNames: ['btn btn-light','btn btn-outline-light','btn btn-outline-light'],
            filter: 0
        }
      }
    buttonClick = (e) => {
        let cache = ['btn btn-outline-light','btn btn-outline-light','btn btn-outline-light']
        cache[e.target.getAttribute('data-number')] = 'btn btn-light'
        this.setState(({classNames}) => {
            return {
                classNames: cache
            }
          })
        this.onFilter(e);

    }
    onFilter = (e) => {
        let filter = '';
        switch(e.target.getAttribute('data-number')) {
            case '1':
                filter = 'increase';
                this.setState({filter});
                this.props.onFilter(filter);
                break
            case '2':
                filter = 'salaryMore1000';
                this.setState({filter});
                this.props.onFilter(filter);
                break
            default:
                filter = '';
                this.setState({filter});
                this.props.onFilter(filter);
        }
    }
    render() {
        return (
            <div className="btn-group">
                <button type="button"
                        className={this.state.classNames[0]}
                        onClick={this.buttonClick}
                        data-number='0'>
                        Все сотрудники
                </button>
                <button type="button"
                        className={this.state.classNames[1]}
                        onClick={this.buttonClick}
                        data-number='1'>
                        На повышение
                </button>
                <button type="button"
                        className={this.state.classNames[2]}
                        onClick={this.buttonClick}
                        data-number='2'>
                        З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;


// import "./app-filter.css";

// const AppFilter = (props) => {
//     const buttonsData = [
//         {name: 'all', label: 'Все сотрудники'},
//         {name: 'rise', label: 'На повышение'},
//         {name: 'moreThen1000', label: 'З/П больше 1000$'}
//     ];

//     const buttons = buttonsData.map(({name, label}) => {
//         const active = props.filter === name;
//         const clazz = active ? 'btn-light' : 'btn-outline-light';
//         return (
//             <button type="button"
//                     className={`btn ${clazz}`}
//                     key={name}
//                     onClick={() => props.onFilterSelect(name)}>
//                     {label}
//             </button>
//         )
//     })

//     return (
//         <div className="btn-group">
//             {buttons}
//         </div>
//     )
// }

// export default AppFilter;