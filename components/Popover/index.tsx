import * as RadixPopover from '@radix-ui/react-popover';

interface PopoverProps {
  children: React.ReactNode;
}

export const Popover = (props: PopoverProps) => {
  return <RadixPopover.Root>{props.children}</RadixPopover.Root>;
};

export const PopoverTrigger = (props: any) => {
  const { children } = props;
  return <RadixPopover.Trigger>{children}</RadixPopover.Trigger>;
};
