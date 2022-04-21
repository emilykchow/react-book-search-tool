import React from 'react';
import "../../App.css";

const DisplayList = ({data, searchedItem, searchResults}) => {
  let x = data.docs;
  console.log(x)
  return (
    <div>
      {searchedItem.length < 1 ? (
				<ul className="list-wrapper">
					{x.map((item, i) => {
						{console.log(item.isbn[0])}
						return (
							<li key={i} className="list-item">
								{/* <i className="fa fa-book"></i> */}
								<div className="left-book-cover">
									{/* <img src="https://covers.openlibrary.org/b/isbn/9780385533225-M.jpg" /> */}
									<img src={`https://covers.openlibrary.org/b/isbn/${item.isbn ?? item.isbn[0]}-M.jpg`} />
									{/* <img src="https://covers.openlibrary.org/b/isbn/9780385533225-S.jpg" alt="Cover of: Search results" title="Cover of: Search results"></img> */}
								</div>
								
								<div className="right-book-description">
								<h4>{item.title} </h4>
								<p>By: {item.author_name}</p>
								<p>Publish Date: {item.publish_date[0]}</p>
								</div>
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