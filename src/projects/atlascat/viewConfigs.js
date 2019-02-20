import React from 'react';
import { ItemAvatar } from '@atlaskit/navigation-next';
import BacklogIcon from '@atlaskit/icon/glyph/backlog';
import BoardIcon from '@atlaskit/icon/glyph/board';
import ComponentIcon from '@atlaskit/icon/glyph/component';
import GraphLineIcon from '@atlaskit/icon/glyph/graph-line';
import IssueIcon from '@atlaskit/icon/glyph/issue';
import PageIcon from '@atlaskit/icon/glyph/page';
import ShipIcon from '@atlaskit/icon/glyph/ship';

const atlascatHomeView = {
  id: 'atlascat/home',
  type: 'container',
  getItems: () => [
    {
      type: 'HeaderSection',
      id: 'atlascat/home:header',
      items: [
        {
          type: 'ContainerHeader',
          before: itemState => (
            <ItemAvatar
              itemState={itemState}
              appearance="square"
              size="large"
            />
          ),
          text: 'Atlascat',
          subText: 'Cats are awesome',
          id: 'atlascat'
        }
      ]
    },
    {
      type: 'MenuSection',
      nestedGroupKey: 'menu',
      id: 'atlascat/home:menu',
      parentId: 'product/home:menu',
      items: [
        {
          type: 'RoutedLinkItem',
          before: BacklogIcon,
          text: 'Backlog',
          to: '/projects/atlascat',
          id: 'backlog'
        },
        {
          type: 'Item',
          before: BoardIcon,
          text: 'Active sprints',
          id: 'active-sprints',
          to: '/projects/atlascat/active-sprints'
        },
        { type: 'Item', before: GraphLineIcon, text: 'Reports', id: 'reports' },
        { type: 'Separator', id: 'separator' },
        { type: 'Item', before: ShipIcon, text: 'Releases', id: 'releases' },
        {
          type: 'Item',
          before: IssueIcon,
          text: 'Issues and filters',
          id: 'issues-and-filters',
          to: '/projects/atlascat/issues-and-filters'
        },
        { type: 'Item', before: PageIcon, text: 'Pages', id: 'pages' },
        {
          type: 'Item',
          before: ComponentIcon,
          text: 'Components',
          id: 'components',
          to: '/projects/atlascat/components'
        }
      ]
    }
  ]
};

export default atlascatHomeView;
