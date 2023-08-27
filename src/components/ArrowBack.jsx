import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ArrowIcon from '../images/ArrowIcon';

const ArrowBack = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <NavLink to={backLinkHref} className="link_back">
      <ArrowIcon type="back" />
      Back
    </NavLink>
  );
};

export default ArrowBack;
