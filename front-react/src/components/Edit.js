import React from "react";
import Layout from "../Layout";
import axios from "axios";

class Edit extends React.Component {
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

    componentDidMount () {
        axios.get(global.api + '/inquiry/' + this.props.match.params.id).then(response => {
            this.setState({data: response.data})
        })
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
        axios.put(global.api + '/inquiry/' + this.props.match.params.id, null, {
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
                                <div className="card-header">編集</div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group row">
                                            <label htmlFor="name"
                                                   className="col-md-4 col-form-label text-md-right">名前</label>

                                            <div className="col-md-6">
                                                <input id="name" type="text" className="form-control"
                                                       defaultValue={this.state.data.name}
                                                       onChange={this.handleChange}/>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label htmlFor="mail"
                                                   className="col-md-4 col-form-label text-md-right">メールアドレス</label>

                                            <div className="col-md-6">
                                                <input id="mail" type="text" className="form-control"
                                                       defaultValue={this.state.data.mail}
                                                       onChange={this.handleChange}/>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label htmlFor="message"
                                                   className="col-md-4 col-form-label text-md-right">メッセージ</label>

                                            <div className="col-md-6">
                                                <input id="message" type="text" className="form-control"
                                                       defaultValue={this.state.data.message}
                                                       onChange={this.handleChange}/>
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

export default Edit
