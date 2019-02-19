/** @jsx jsx */
import { jsx } from '@emotion/core';
import FolderIcon from '@atlaskit/icon/glyph/folder';
import PortfolioIcon from '@atlaskit/icon/glyph/portfolio';

function CustomProductWordmark() {
  return (
    <div css={{ padding: '0 0 26px 16px' }}>
      <span
        css={{
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
          type: 'Item',
          id: 'projects',
          before: FolderIcon,
          text: 'Projects',
          goTo: 'product/projects'
        },
        {
          type: 'Item',
          id: 'portfolio',
          before: PortfolioIcon,
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
        { type: 'Item', text: 'Atlascat', id: 'atlascat' }
      ]
    }
  ]
};
