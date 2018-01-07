import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';

const Header = ({ location: { pathname } }) => (
	<nav id="header" className="navbar navbar-expand-lg navbar-light bg-white">
		<div className="container">
			<Link className="navbar-brand" to="/">
				Logo
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className={cx("nav-item", { active: pathname === '/' })}>
						<Link className="nav-link" to="/">
							Home
						</Link>
					</li>
					<li className={cx("nav-item", { active: pathname === '/menu' })}>
						<Link className="nav-link" to="/menu">
							Menu
						</Link>
					</li>
					<li className={cx("nav-item", { active: pathname === '/food-store' })}>
						<Link className="nav-link" to="/food-store">
							Food store
						</Link>
					</li>
					<li className="ml-2">
						<Link className="nav-link btn btn-primary" to="/food-store">
							Sign UP
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);

Header.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired
};

export default Header;
