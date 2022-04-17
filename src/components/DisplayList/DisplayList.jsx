import React from 'react';
import "../../App.css";

const DisplayList = ({data, searchedItem, searchResults}) => {
  let x = data.docs;
  return (
    <div>
      {searchedItem.length < 1 ? (
				<ul className="list-wrapper">
					{x.map((item, i) => {
						return (
							<li key={i} className="list-item">
								<i className="fa fa-book"></i>
								&nbsp;
								{item.title}
							</li>
						);
					})}
				</ul>
			) : (
				<ul className="list-wrapper">
					{searchResults.map((item, i) => {
						return (
							<li key={i} className="list-item">
								<i className="fa fa-book"></i>
								&nbsp;
								{item.title}
							</li>
						);
					})}
				</ul>
			)}
    </div>
  )
}

export default DisplayList;