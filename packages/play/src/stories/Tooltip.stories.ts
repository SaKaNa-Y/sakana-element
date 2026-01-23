import type { StoryObj, Meta } from '@storybook/vue3';

import { fn } from '@storybook/test';
import { PxTooltip } from '../../../components/Tooltip';
import '../../../components/Tooltip/style.css';

type Story = StoryObj<typeof PxTooltip>;

const meta: Meta<typeof PxTooltip> = {
  title: 'Example/Tooltip',
  component: PxTooltip,
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      options: ['hover', 'click', 'contextmenu'],
      control: {
        type: 'select',
      },
    },
    placement: {
      options: ['top', 'bottom', 'left', 'right'],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    'onVisible-change': fn(),
  },
};

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    placement: 'top',
    trigger: 'hover',
  },
  render: (args) => ({
    components: { PxTooltip },
    setup() {
      return {
        args,
      };
    },
    template: `
      <PxTooltip v-bind="args">
          <div style="height:30px;width:200px;background:red;padding:auto">trigger</div>
      </PxTooltip>
    `,
  }),
};

export default meta;
