import React from 'react';
import Layout from "../Layout";
import {Link} from "react-router-dom";
import axios from 'axios'

class ShowAll extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            inquiries: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.delete = this.delete.bind(this)
    }

    componentDidMount () {
        axios.get(global.api + '/inquiry').then(response => {
            this.setState({
                inquiries: response.data
            })
        })
    }

    delete (id) {
        axios.delete(global.api + '/inquiry/' + id).then(() => {
            axios.get(global.api + '/inquiry').then(response => {
                this.setState({
                    inquiries: response.data
                })
            })
        })
    }

    render () {
        return (
            <Layout>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">一覧</div>
                                <div className="card-body">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>名前</th>
                                            <th>メール</th>
                                            <th>メッセージ</th>
                                            <th/>
                                            <th/>
                                            <th/>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.inquiries.map((inquiry) => {
                                            return (
                                                <tr key={inquiry.id}>
                                                    <td>{inquiry.id}</td>
                                                    <td>{inquiry.name}</td>
                                                    <td>{inquiry.mail}</td>
                                                    <td>{inquiry.message}</td>
                                                    <td>
                                                        <Link to={/detail/ + inquiry.id} className="btn btn-primary"
                                                              role="button">詳細
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <Link to={/edit/ + inquiry.id} className="btn btn-secondary"
                                                              role="button">編集
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-danger"
                                                                onClick={() => this.delete(inquiry.id)}>削除
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default ShowAll
