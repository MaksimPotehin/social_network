import React, {useEffect, useState} from "react";
import s from './Pagination.module.css'

const Pagination = ({pagesInArray = 10, totalItemsCount, pageSize, selectPage, selectedPage}) => {

    let itemCount = Math.ceil(totalItemsCount / pageSize) ;

    let items = [];
    for (let i = 1 ; i <= itemCount; i++){
        items.push(i)
    }

    let countArrayItem = Math.ceil(itemCount / pagesInArray)
    let [arrayItemNumber, setArrayItemNumber] = useState(1)

    useEffect(() => {
        setArrayItemNumber(arrayItemNumber)
    },[])

    let leftItemArrayPage = (arrayItemNumber - 1) * pagesInArray + 1;
    let rightItemArrayPage = arrayItemNumber * pagesInArray;

    let filteredItems = items.filter(i => i >= leftItemArrayPage && i <= rightItemArrayPage)

    return(
        <div className={s.pagination}>
            {arrayItemNumber > 1 ? <div className={s.prevPagesArr} onClick={()=>{setArrayItemNumber(arrayItemNumber - 1)}}>{`<<`}</div> : null}
            {filteredItems.map((item,idx)=>{
                return <span onClick={() => selectPage(item)} className={(selectedPage === item ? s.selected + ' ':'') + s.page} key={idx}> {item} </span>
            })}
            {countArrayItem > arrayItemNumber ? <div className={s.nextPagesArr} onClick={()=>{setArrayItemNumber(arrayItemNumber + 1)}}>{`>>`}</div> : null}
        </div>
    )
}
export default Pagination