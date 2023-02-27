import React, { useState } from 'react';

import LinkInput from './LinkInput/';
import ShortenedLink from './ShortenedLink';

const LinksShortener = () => {
	const [links, setLinks] = useState([]);

	const fetchAPI = async (url) => {
		const id = Math.random();
		setLinks([{ id, loading: true }, ...links]);

		const endPoint = `https://api.shrtco.de/v2/shorten?url=${url}`;
		const response = await fetch(endPoint);
		const { ok, result } = await response.json();

		if (ok) {
			const obj = {
				id,
				originalLink: url,
				shortenedLink: result.full_short_link,
				loading: false,
			}; 

			setLinks([obj, ...links]);

		} else {
			const obj = {
				id,
				originalLink: 'Request is incorrect or invalid :( ',
				shortenedLink: url,
				loading: false,
			};

			setLinks([obj, ...links]);


		}
	};

	return (
		<section className="link-shortener">
			<LinkInput fetchAPI={fetchAPI} />
			{links.map(({ originalLink, shortenedLink, loading }, index) => (
				<ShortenedLink
					key={index}
					originalLink={originalLink}
					shortenedLink={shortenedLink}
					loading={loading}
					handleClick={fetchAPI}
				/>
			))}
		</section>
	);
};

export default LinksShortener;
