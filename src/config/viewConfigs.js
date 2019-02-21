import React from 'react';
import FolderIcon from '@atlaskit/icon/glyph/folder';
import PortfolioIcon from '@atlaskit/icon/glyph/portfolio';
import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import { LinkItem } from '../components';

function CustomProductWordmark() {
  return (
    <div styles={{ padding: '0 0 26px 16px' }}>
      <span
        styles={{
          color: 'inherit',
          fontFamily: 'Charlie_Display_Regular',
          fontSize: 32,
          height: 32,
          display: 'inline-block',
          userSelect: 'none',
          position: 'relative'
        }}
      >
        Atlaskit
      </span>
    </div>
  );
}

export const productHomeView = {
  id: 'product/home',
  type: 'product',
  getItems: () => [
    {
      type: 'HeaderSection',
      id: 'product/home:header',
      items: [
        {
          type: 'InlineComponent',
          component: CustomProductWordmark,
          id: 'custom-product-wordmark'
        }
      ]
    },
    {
      type: 'MenuSection',
      id: 'product/home:menu',
      parentId: null,
      nestedGroupKey: 'menu',
      items: [
        {
          type: 'InlineComponent',
          id: 'about',
          component: LinkItem,
          before: DashboardIcon,
          text: 'About',
          to: '/'
        },
        {
          type: 'RoutedLinkItem',
          id: 'projects',
          before: FolderIcon,
          text: 'Projects',
          to: '/projects'
        },
        {
          // Example using RoutedLinkItem as a custom component type
          type: 'RoutedLinkItem',
          id: 'portfolio',
          before: PortfolioIcon,
          to: '/portfolio',
          text: 'Portfolio'
        }
      ]
    }
  ]
};
