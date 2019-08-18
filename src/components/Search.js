import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            textValue: '',
            userObject: {}
        }
    }
    isChangeText= (e) => {
        console.log(e.target.value)
        this.setState({
            textValue: e.target.value
        });
        this.props.getTextSearch(this.state.textValue);
    }
    displayButton = () => {
        if(!this.props.isHidden){
            return <div className="btn btn-success  mb-3" onClick={this.props.changeForm}>Thêm mới</div>
        }else {
            return <div className="btn btn-info  mb-3" onClick={this.props.changeForm} >Đóng lại</div>
        }
    }
    getEditUserInfo = (info) => {
        this.setState({
            userObject: info
        });
        this.props.getEditUserInfoApp(info);     
    }
    displayEditForm = () => {
        if(this.props.isEditForm){
            return <EditUser 
                getEditUserInfo = {(info) => this.getEditUserInfo(info)}
                changeEditUserStatus = {() => this.props.changeEditUserStatus()} 
                editUserObject = {this.props.editUserObject}
                />
        }
    }
    render() {
        return (
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group w-100">
                            <div className="btn-group w-100">
                                <input type="text" onChange ={(e)=>this.isChangeText(e)} className="form-control" placeholder="Nhập từ khóa" aria-describedby="helpId" />
                                <div className="btn btn-info" onClick ={(dl)=>this.props.getTextSearch(this.state.textValue)}>Tim</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="btn-group">
                            { this.displayButton() }
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        this.displayEditForm()
                    }
                </div>
                <div>
                    <hr/>
                </div> 
            </div>         
        );
    }
}

export default Search;