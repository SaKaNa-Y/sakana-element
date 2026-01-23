import type { Meta, StoryObj } from '@storybook/vue3';
import { PxCollapse, PxCollapseItem } from '../../../components/Collapse';
import '../../../components/Collapse/style.css';

type Story = StoryObj<typeof PxCollapse>;

const meta: Meta<typeof PxCollapse> = {
  title: 'Example/Collapse',
  component: PxCollapse,
  subcomponents: { PxCollapseItem },
  tags: ['autodocs'],
};

export const Default: Story = {
  render: (args) => ({
    components: {
      PxCollapse,
      PxCollapseItem,
    },
    setup() {
      return {
        args,
      };
    },
    template: `
    <px-collapse v-bind="args">
      <px-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </px-collapse-item>
      <px-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </px-collapse-item>
      <px-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </px-collapse-item>
    </px-collapse>
    `,
  }),
  args: {
    accordion: true,
    modelValue: ['a'],
  },
};

export default meta;
