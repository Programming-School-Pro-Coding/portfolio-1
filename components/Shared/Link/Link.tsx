import cx from "classnames";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "react-feather";
import NextLink from "next/link";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children?: ReactNode;
  noGradientUnderline?: boolean;
}

const ExternalLink = ({
  href,
  className,
  children,
  noGradientUnderline,
  ...otherProps
}: ExternalLinkProps): JSX.Element => {
  const isInternalLink = href.startsWith("/") || href.startsWith("#");

  return (
    <>
      {isInternalLink ? (
      <NextLink href={href}>
        <a
          className={cx(
            "transition duration-200",
            !noGradientUnderline && "gradient-underline flex items-center",
            className
          )}
          {...otherProps}
        >
        {noGradientUnderline ? children : (

        <span>{children ?? href}</span>
        )}
        </a>
        </NextLink>
      ) : (
        <a
          href={href}
          className={cx(
            "flex items-center space-x-1 text-gray-300 transition duration-200 hover:text-gray-100",
            !noGradientUnderline && "gradient-underline",
            className
          )}
          target="_blank"
          rel="noopener noreferrer"
          {...otherProps}
        >
          <span>{children ?? href}</span> <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
      <style jsx>{`
        .gradient-underline :not(.anchor) {
          text-decoration: none;
          background-image: linear-gradient(to right, #be185d, #1d4ed8);
          background-repeat: no-repeat;
          background-position: bottom left;
          background-size: 0% 3px;
          transition: background-size 150ms ease-in-out;
        }

        .gradient-underline:hover :not(.anchor) {
          background-size: 100% 3px;
          color: inherit;
        }
      `}</style>
    </>
  );
};

export default ExternalLink;
