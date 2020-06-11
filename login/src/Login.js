import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            submitDisabled: true,
            textDanger: false
        }
    }

    postLogin = (e) => {
        e.preventDefault();
        this.setState({
            submitDisabled: true
        });
        setTimeout(() => {
            this.setState({
                textDanger: true
            });
        }, 3000)
    }

    handleChange = (e) => {
        let value = e.target.value === 'email' ? e.target.value.trim() : e.target.value

        this.setState({
            textDanger: false,
            [e.target.name]: value
        });

        setTimeout(() => {
            if (!!this.state.email && !!this.state.password) {
                this.setState({
                    submitDisabled: false
                });
            } else {
                this.setState({
                    submitDisabled: true
                });
            }
        }, 0)
    }

    render() {
        return (
            <form onSubmit={this.postLogin}>
                <div className="form-group">
                    <label htmlFor="email">Электронная почта</label>
                    <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <button type="submit" disabled={this.state.submitDisabled} onClick={this.submit} className="btn btn-primary">Войти</button>
                {this.state.textDanger ? <small className="form-text text-danger mt-3">Вы ввели неверную почту или пароль. Попробуйте снова</small> : <small></small>}
            </form>
        );
    }
}

export default Login;
