import React from 'react';
import './index.css';

//{series} stick all ur properties to which watever want ur props obj
//was <li key={series.show.id}> in SeriesList
const SeriesListItem = ({ series }) => (
  <li>
    {series.show.name}
  </li>
)

const SeriesList = (props) => {
  return (
    <div>
      <ul className="series-list">
        {props.list.map(series => (
          <SeriesListItem series={series} key={series.show.id}/>
        ))}
      </ul>
    </div>
  )
}
//index as key instead of id for last resort

export default SeriesList;
