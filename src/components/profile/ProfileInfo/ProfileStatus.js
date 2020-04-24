import React, {Component} from "react";
import s from "../Profile.module.css";
import {updateStatus} from "../../../redux/Redusers/profileReducer";

class ProfileStatus extends Component{

    state = {
        editMode: false,
        status: this.props.status
    }

     onEditModeOn = () => {
        this.setState({
            editMode: true
        })
    }
    onEditModeOff = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onChangeStatusValue = (e) => {
        let value = e.target.value
        this.setState({
            status: value
        })
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.status !== prevProps.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return(
            <div className={s.profile_status}>
                {
                    this.state.editMode ?
                        <input autoFocus={true} onBlur={this.onEditModeOff} onChange={(e)=>this.onChangeStatusValue(e)} value={this.state.status} type="text" />
                        : <div onDoubleClick={this.onEditModeOn}>{this.props.status || "-----"}</div>
                }
           </div>
        )
    }
};
export default ProfileStatus