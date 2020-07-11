import React from "react";
import Layout from "./Layout";
import axios from "axios";

class Detail extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data: {
                name: '',
                mail: '',
                message: '',
            }
        };
    }

    componentDidMount () {
        axios.get(global.api + '/inquiry/' + this.props.match.params.id).then(response => {
            this.setState({data: response.data})
        })
    }

    render () {
        return (
            <Layout>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">詳細</div>
                                <div className="card-body">
                                    <div className="row">
                                        <label htmlFor="name"
                                               className="col-md-4 col-form-label text-md-right">名前</label>

                                        <div className="col-md-6">
                                            <div id="name">{this.state.data.name}</div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <label htmlFor="mail"
                                               className="col-md-4 col-form-label text-md-right">メールアドレス</label>

                                        <div className="col-md-6">
                                            <div id="mail">{this.state.data.mail}</div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <label htmlFor="message"
                                               className="col-md-4 col-form-label text-md-right">メッセージ</label>

                                        <div className="col-md-6">
                                            <div id="message">{this.state.data.message}</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Detail
