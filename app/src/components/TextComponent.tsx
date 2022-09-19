import { Link } from "@symphony-ui/uitoolkit-components";

export interface TextProps extends React.HTMLProps<HTMLElement> {
  HtmlTag?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body' | 'p';
  value: any; 
  link?: string;
}

export const TextComponent = ({
  HtmlTag = 'span',
  ...props
}: TextProps): JSX.Element => (
  <HtmlTag className={props.className}>
    {props.link ? <Link url={props.link}>{props.value}</Link> : props.value}
    {props.children}
  </HtmlTag>
);