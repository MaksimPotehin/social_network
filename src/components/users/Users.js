import React,{Component} from "react";
import s from './Users.module.css'
import axios from "axios";
import default_avatar from '../../assets/images/631929649c.png'

class Users extends Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.onSetUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    selectPage = (item) => {
        this.props.onSetPage(item)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${item}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.onSetUsers(response.data.items)
            })
    };

    render(){
        let {selectedPage, pageSize, totalUsersCount, users } = this.props;
        let pageCount = Math.ceil(totalUsersCount / pageSize) ;
        let pages = [];
        for (let i = 1 ; i <= pageCount; i++){
            pages.push(i)
        }
        return(
            <div className={s.users_wrapper}>
                {users.map((user) => (
                    <div className={s.users_block} key={user.id}>
                        <div className={s.avatar_block}>
                            <img className={s.avatar} src={user.photos.small != null ? user.photos.small : default_avatar} alt=""/>
                            {user.followed ?
                                <button onClick={() => this.props.onUnFollow(user.id)} >UnFollow</button>
                                : <button onClick={() => this.props.onFollow(user.id)}>Follow</button> }
                        </div>
                        <div className={s.general_info}>
                            <div>
                                <div className={s.fullName}>{user.name}</div>
                                <div className={s.status}>{user.status}</div>
                            </div>
                            <div className='location'>
                                <div className={s.cityName}>{"user.location.city"}</div>
                                <div className={s.countryName}>{"user.location.country"}</div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className={s.pagination}>
                    {pages.map((item,idx)=>{
                        return <span onClick={() =>this.selectPage(item)} className={(selectedPage === item ? s.selected + ' ':'') + s.page} key={idx}> {item} </span>
                    })}
                </div>
            </div>
        )
    }
}
export default Users