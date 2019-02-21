import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbsStateless, BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import Proptypes from 'prop-types';

RouterLink.propTypes = {
  className: Proptypes.string,
  onMouseEnter: Proptypes.func,
  onMouseLeave: Proptypes.func
};

function RouterLink(props) {
  const { children, className, href, onMouseEnter, onMouseLeave } = props;
  return (
    <Link
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      to={href}
    >
      {children}
    </Link>
  );
}

function generateBreadcrumbsItems(paths, Component, CustomItem) {
  let generatedPaths = [];
  let prevHref = '';
  paths.map(path => {
    prevHref += path.href;
    return generatedPaths.push({
      text: path.text,
      href: prevHref
    });
  });
  return generatedPaths.map(path => (
    <Component {...path} key={path.href} component={CustomItem} />
  ));
}

function BreadCrumbsWithRouter({ paths = [] }) {
  return (
    <>
      <BreadcrumbsStateless onExpand={(...args) => console.log(args)}>
        {generateBreadcrumbsItems(paths, BreadcrumbsItem, RouterLink)}
      </BreadcrumbsStateless>
    </>
  );
}

export default BreadCrumbsWithRouter;
