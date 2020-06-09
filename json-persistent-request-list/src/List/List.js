import React from 'react';
import './List.css';

class List extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            list: []
        }
    }

    getList = (t) => {
        // рекурсия. После получения данных идет отсчет установленного времени 
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(
                result => {
                    this.setState({
                        list: result
                    });
                    console.log('обновил в:', new Date().toLocaleTimeString())
                    setTimeout(() => this.getList(t), t);
                }
            ).catch(error => {
                this.setState({ error });
                setTimeout(() => this.getList(t), t);
            })
    }

    componentDidMount() {
        // изначальный запуск запроса списка после монтирования страницы
        this.getList(2000);
    }

    render() {
        return (
            <div>
                <ul className="list-group mt-4">
                    {this.state.error ? <div>Ошибка: {this.state.error.message}</div>
                        : this.state.list.map(el => {
                            return <li className="list-group-item" key={el.id}>{el.title}</li>
                        })}
                </ul>
            </div>
        )
    }
}

export default List;
