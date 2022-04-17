import React from 'react'

const DisplayList = ({data, searchedItem, searchResults}) => {
  let x = data.docs;
  return (
    <div>
      {searchedItem.length < 1 ? (
				<ul className="list">
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
				<ul className="list">
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

export default DisplayList