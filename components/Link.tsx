import Link from "next/link";

type IProps = {
  href: string;
  className: string;
  children: JSX.Element;
};

const CustomLink = ({ href, children, ...rest }: IProps): JSX.Element => {
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && href.startsWith("#");

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    );
  }

  if (isAnchorLink) {
    return <a href={href} {...rest}>{children}</a>;
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>{children}</a>;
};

export default CustomLink;
