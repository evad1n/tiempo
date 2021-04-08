import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Skeleton, SkeletonProps } from "../components/Skeleton";
import { VStack } from "../components/Stack";

const SkeletonMeta: Meta = {
  title: "Amino/Skeleton",
  component: Skeleton,
};

export default SkeletonMeta;

const Template: Story<SkeletonProps> = (args) => (
  <VStack>
    <Skeleton {...args} />
    <Skeleton {...args} />
    <Skeleton {...args} />
  </VStack>
);

export const BasicSkeleton = Template.bind({});
BasicSkeleton.args = {
  width: 500,
  height: 10,
};
