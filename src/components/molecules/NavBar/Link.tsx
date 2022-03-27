import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

function NavigationLink({ children, to, ...props }: LinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  const activeClass = match ? 'active' : '';
  return (
    <Link to={to} className={`${props.className} ${activeClass}`}>
      {children}
    </Link>
  );
}

export default NavigationLink;
