export interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: NavItem[];
}
