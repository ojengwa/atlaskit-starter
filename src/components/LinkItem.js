import React from 'react';
import { Route, Link } from 'react-router-dom';

export default function LinkItem({ components: { Item }, to, ...props }) {
  return (
    <Route
      render={({ location: { pathname } }) => (
        <Item
          component={({ children, className }) => (
            <Link className={className} to={to}>
              {children}
            </Link>
          )}
          isSelected={pathname === to}
          {...props}
        />
      )}
    />
  );
}
