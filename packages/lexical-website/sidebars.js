/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  api: [{dirName: 'api', type: 'autogenerated'}],
  docs: [
    'intro',
    {
      items: [
        'getting-started/quick-start',
        'getting-started/react',
        'getting-started/theming',
        'getting-started/supported-browsers',
        'getting-started/creating-plugin',
      ],
      label: 'Getting Started',
      type: 'category',
    },
    {
      items: [
        'concepts/editor-state',
        'concepts/nodes',
        'concepts/node-replacement',
        'concepts/listeners',
        'concepts/transforms',
        'concepts/commands',
        'concepts/selection',
        'concepts/read-only',
        'concepts/serialization',
        'concepts/dom-events',
      ],
      label: 'Concepts',
      type: 'category',
    },
    {
      items: [
        'packages/lexical',
        'packages/lexical-clipboard',
        'packages/lexical-code',
        'packages/lexical-dragon',
        'packages/lexical-file',
        'packages/lexical-hashtag',
        'packages/lexical-headless',
        'packages/lexical-history',
        'packages/lexical-html',
        'packages/lexical-link',
        'packages/lexical-list',
        'packages/lexical-mark',
        'packages/lexical-markdown',
        'packages/lexical-offset',
        'packages/lexical-overflow',
        'packages/lexical-plain-text',
        'packages/lexical-rich-text',
        'packages/lexical-selection',
        'packages/lexical-table',
        'packages/lexical-text',
        'packages/lexical-utils',
      ],
      label: 'Packages',
      type: 'category',
    },
    {
      items: ['react/plugins', 'react/create_plugin'],
      label: 'React',
      link: {
        id: 'react/index',
        type: 'doc',
      },
      type: 'category',
    },
    {
      items: ['collaboration/react'],
      label: 'Collaboration',
      type: 'category',
    },
    'faq',
  ],
};

module.exports = sidebars;
