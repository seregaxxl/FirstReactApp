import './employees-list-item.css';

 const EmployeesListItem = (props) => {
    let {name, salary, onDelete, increase, like, onToggleProp, onUpdateSalary, id} = props;
    let classNames = 'list-group-item d-flex justify-content-between';
    let newSalary = salary;
    if (increase) {
        classNames += ' increase'
    }
    if (like) {
        classNames += ' like'
    }
    return (
        <li className={classNames}>
            <span className="list-group-item-label" data-toggle='like'
            onClick={onToggleProp}>{name}</span>
            <input type="text" className="list-group-item-input"  defaultValue={salary + ' $'} 
            // value = {salary + '$'} 
            onChange= {(e) => {
                e.target.value = e.target.value.slice(0, -2).replace(/[^0-9]/ig, '')
                + e.target.value.slice(-2, -1).replace(/[^\s]/ig, ' ')
                + e.target.value.slice(-1).replace(/[^$]/ig, '$');


                newSalary = e.target.value.slice(0, -2);
                onUpdateSalary(newSalary, id)}}
                />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm" data-toggle='increase'
                    onClick={onToggleProp}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
} 


export default EmployeesListItem;