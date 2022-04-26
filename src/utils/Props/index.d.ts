export type FeaturedPostProps = {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
  };
};

export type MarkdownProps = {
  fileName: string;
};

export type SelectButtonProps = {
  div?: React.HTMLAttributes<HTMLDivElement>;
  className?: string;
  menuItemsStyle?: SxProps<Theme>;
  selectItems: {
    inputLabel: { text: string };
    menuItems: { id: number | string; text: string }[];
  };
  onChange?: (e: SelectChangeEvent<string>) => void;
  onClick?: (e: SelectChangeEvent<string>) => void;
};



export type MainProps = {
  fileName: string;
};

export type SidebarProps = {
  archives?: ReadonlyArray<{
    url: string;
    title: string;
  }>;
  description?: string;
  social: ReadonlyArray<{
    icon: React.ElementType;
    name: string;
    href: string;
  }>;
  title?: string;
};

export type FooterProps = {
  description: string;
  title: string;
};

export type RecordsProps = {
  id: number;
  swim: string;
  length: string;
  lastName: string;
  firstName: string;
  time: string;
  place: string;
  date: string;
};
