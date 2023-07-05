import s from "./Paginator.module.css";
import React from "react";


type PaginatorPropsType = {
    pageSize: number
    currentPage: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void
}
export const Paginator = (props: PaginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
  return(
      <div>
          {pages.map((p, index) => {
              const pageStyle = s.page + ' ' + ((p === props.currentPage) ? s.selectedPage : '');
              return <span key={index} onClick={()=>props.onPageChanged(p)} className={pageStyle}>{p + ' '}</span>
          })}
      </div>
  )
}