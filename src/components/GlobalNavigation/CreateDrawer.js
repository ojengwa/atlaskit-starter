import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Drawer from '@atlaskit/drawer';
import BitbucketBranchesIcon from '@atlaskit/icon/glyph/bitbucket/branches';
import PageIcon from '@atlaskit/icon/glyph/page';
import CalendarIcon from '@atlaskit/icon/glyph/calendar';
import EmojiObjectsIcon from '@atlaskit/icon/glyph/emoji/objects';
import EmojiNatureIcon from '@atlaskit/icon/glyph/emoji/nature';
import EmojiTravelIcon from '@atlaskit/icon/glyph/emoji/travel';

import { DrawerCtx } from './StarterGlobalNav';

const createItems = [
  {
    title: null,
    items: [
      ['/#event', 'Create Event', 'Create Event', CalendarIcon],
      ['/#nature', 'Create Nature', 'Create Nature', EmojiNatureIcon],
      ['/#idea', 'Create Idea', 'Create Idea', EmojiObjectsIcon],
      [
        '/#travel',
        'Create Travel Plans',
        'Create Travel Plans',
        EmojiTravelIcon
      ]
    ]
  },
  {
    title: 'Group with title',
    items: [
      [
        '/#branch',
        <span>
          Create a <strong>Bitbucket branch</strong>
        </span>,
        'Bitbucket branch',
        BitbucketBranchesIcon
      ],
      [
        '/#page',
        <span>
          Create a <strong>Confluence page</strong>
        </span>,
        'Confluence page',
        PageIcon
      ]
    ]
  }
];

function CreateDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useContext(DrawerCtx);

  return (
    <Drawer
      onClose={() => setIsDrawerOpen(false)}
      onCloseComplete={() => null}
      isOpen={isDrawerOpen}
      width="medium"
    >
      {createItems.map(itemGroup => {
        return (
          <section>
            {itemGroup.title && <h2>{itemGroup.title}</h2>}
            <ul>
              {itemGroup.items.map(item => {
                const [url, text, label, Icon] = item;
                return (
                  <li style={{ listStyleType: 'none' }}>
                    <Icon label={label} />
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </Drawer>
  );
}

export default CreateDrawer;
