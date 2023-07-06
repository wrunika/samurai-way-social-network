import s from "./Paginator.module.css";
import React, {useState} from "react";


type PaginatorPropsType = {
    pageSize: number
    currentPage: number
    totalItemsCount: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}
export const Paginator = ({portionSize = 10, ...props}: PaginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

  return(
      <div className={s.paginator}>
          {portionNumber > 1 &&
              <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
          {pages
              .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
              .map((p, index) => {
              const pageStyle = s.page + ' ' + ((p === props.currentPage) ? s.selectedPage : '');
              return <span key={index} onClick={()=>props.onPageChanged(p)} className={pageStyle}>{p + ' '}</span>
          })}
          {portionCount > portionNumber &&
              <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
      </div>
  )
}