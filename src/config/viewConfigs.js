import React from 'react';
import FolderIcon from '@atlaskit/icon/glyph/folder';
import PortfolioIcon from '@atlaskit/icon/glyph/portfolio';
import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import LinkItem from '../components/LinkItem';

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
          type: 'Item',
          id: 'projects',
          before: FolderIcon,
          text: 'Projects',
          goTo: 'product/projects'
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

export const productProjectsView = {
  id: 'product/projects',
  type: 'product',
  getItems: () => [
    {
      type: 'HeaderSection',
      id: 'product/projects:header',
      items: [
        {
          type: 'InlineComponent',
          component: CustomProductWordmark,
          id: 'custom-product-wordmark'
        },
        {
          type: 'BackItem',
          id: 'back-item',
          goTo: 'product/home',
          text: 'Back to Atlaskit'
        }
      ]
    },
    {
      type: 'MenuSection',
      nestedGroupKey: 'menu',
      id: 'product/projects:menu',
      parentId: 'product/home:menu',
      alwaysShowScrollHint: true,
      items: [
        {
          type: 'SectionHeading',
          text: 'Available Projects',
          id: 'available-projects-heading'
        },
        // @TODO: generate these dynamically
        {
          type: 'RoutedLinkItem',
          text: 'Atlascat',
          id: 'atlascat',
          to: '/projects/atlascat'
        }
      ]
    }
  ]
};
