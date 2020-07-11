import React from "react";
import Layout from "./Layout";
import axios from "axios";

class Add extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data: {
                name: '',
                mail: '',
                message: '',
            }
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (e) {
        let data = this.state.data
        switch (e.target.id) {
            case 'name':
                data.name = e.target.value;
                break;
            case 'mail':
                data.mail = e.target.value;
                break;
            case 'message':
                data.message = e.target.value;
                break;
            default:
        }
        this.setState({data: data});
    }

    handleSubmit (e) {
        e.preventDefault()
        axios.post(global.api + '/inquiry', null, {
            params: {
                name: this.state.data.name,
                mail: this.state.data.mail,
                message: this.state.data.message
            }
        }).then(() => {
            this.props.history.push('/')
        })
    }

    render () {
        return (
            <Layout>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">新規追加</div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group row">
                                            <label htmlFor="name"
                                                   className="col-md-4 col-form-label text-md-right">名前</label>

                                            <div className="col-md-6">
                                                <input id="name" type="text" className="form-control"
                                                       value={this.state.name} onChange={this.handleChange}/>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label htmlFor="mail"
                                                   className="col-md-4 col-form-label text-md-right">メールアドレス</label>

                                            <div className="col-md-6">
                                                <input id="mail" type="text" className="form-control"
                                                       value={this.state.mail} onChange={this.handleChange}/>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label htmlFor="message"
                                                   className="col-md-4 col-form-label text-md-right">メッセージ</label>

                                            <div className="col-md-6">
                                                <input id="message" type="text" className="form-control"
                                                       value={this.state.message} onChange={this.handleChange}/>
                                            </div>
                                        </div>

                                        <div className="form-group row mb-0">
                                            <div className="col-md-8 offset-md-4">
                                                <button type="submit" className="btn btn-primary">
                                                    完了
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Add