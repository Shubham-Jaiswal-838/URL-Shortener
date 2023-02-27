import React, { useState } from 'react';
import Button from '../Button';
import './_index.css';

const ShortenedLink = ({ originalLink, shortenedLink, loading }) => {
	const [copied, setCopied] = useState(false);

	const handleClick = () => {
		const cb = navigator.clipboard;
		cb.writeText(shortenedLink);

		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 5000);
	};

	if (loading) {
		return (
			<div className="loading link-card" style={{ textAlign: 'center' }}>
				Loading
			</div>
		);
	}

	return (
		<div className="link-card url-input">
			<div className="links-container">
				<p className="link-card__original">{originalLink}</p>
				<p className="link-card__shortened">{shortenedLink}</p>
			</div>
			<div onClick={handleClick}>
				<Button copied={copied}>{copied ? 'Copied!' : 'Copy'}</Button>
			</div>
		</div>
	);
};

export default ShortenedLink;
