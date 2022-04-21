import React from 'react';
import "./DisplayList.css";

const DisplayList = ({data, searchedItem, searchResults}) => {
  let x = data.docs;
  console.log(x, "x=data.docs")
  return (
    <div>
      {searchedItem.length < 1 ? (
				<ul className="list-wrapper">
					{x && x.map((item, i) => {
						return (							
							<li key={i} className="list-item">
								{/* <i className="fa fa-book"></i> */}
								<div className="left-book-cover">
									{/* <img src={item.isbn ? `https://covers.openlibrary.org/b/isbn/${item.isbn[0]}-M.jpg` : 'https://covers.openlibrary.org/b/isbn/0385472579-M.jpg'} alt={`${item.title}`}/> */}
									<img src={item.isbn ? `https://covers.openlibrary.org/b/isbn/${item.isbn[3]}-M.jpg` : 'https://covers.openlibrary.org/b/isbn/0385472579-M.jpg'} alt={`${item.title}`}/>
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