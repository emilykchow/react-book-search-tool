import React from "react";
import "../../App.css";
import "./DisplayList.css";

const DisplayList = ({ data, searchedItem, searchResults, setSearchResults, sortAlphabetically, filterDates }) => {
	let x = data;

	return (
		<div className="DisplayList-wrapper">
			<button onClick={sortAlphabetically}>Sort by Title</button>
			<button onClick={filterDates}>Sort by Published Date</button>

			{searchedItem.length < 1 ? (
				<ul className="list-wrapper">
					{x &&
						x.map((item, i) => {
							return (
								<li key={i} className="list-item">
									{/* <i className="fa fa-book"></i> */}
									<div className="left-book-cover">
										{/* <img src="https://covers.openlibrary.org/b/isbn/9780385533225-M.jpg" /> */}
										<img
											src={`https://covers.openlibrary.org/b/isbn/${
												item.isbn !== undefined ? item.isbn[1] : "3129081801"
											}-M.jpg`}
											alt={`${item.title}`}
										/>
										{/* <img src="https://covers.openlibrary.org/b/isbn/9780385533225-S.jpg" alt="Cover of: Search results" title="Cover of: Search results"></img> */}
									</div>

									<div className="right-book-description">
										<h4>{item.title} </h4>
										<p>By: {item.author_name}</p>
										<p>Publish Date: {item.publish_year ? item.publish_year[0] : 'No year'}</p>
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
									{/* <i className="fa fa-book"></i> */}
									<div className="left-book-cover">
										{/* <img src="https://covers.openlibrary.org/b/isbn/9780385533225-M.jpg" /> */}
										<img
											src={`https://covers.openlibrary.org/b/isbn/${
												item.isbn !== undefined ? item.isbn[1] : "3129081801"
											}-M.jpg`}
											alt={`${item.title}`}
										/>
										{/* <img src="https://covers.openlibrary.org/b/isbn/9780385533225-S.jpg" alt="Cover of: Search results" title="Cover of: Search results"></img> */}
									</div>

									<div className="right-book-description">
										<h4>{item.title} </h4>
										<p>By: {item.author_name}</p>
										<p>Publish Date: {item.publish_year ? item.publish_year[0] : 'No year'}</p>
									</div>
								</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default DisplayList;
