import React from 'react';

import './styles.scss';

const Shimmer = () => {
	return (
		<div className="dashboard-timeline-wrapper">
			<div className="timeline-item">
				<div className="animated-background">
					<div className="background-masker header-right" />
					<div className="background-masker header-bottom" />
					<div className="background-masker subheader-right" />
					<div className="background-masker subheader-bottom" />
					<div className="background-masker content-first-end" />
				</div>
			</div>
		</div>
	);
};

export default Shimmer;