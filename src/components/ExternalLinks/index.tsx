import { useStyles } from "../../hooks/useStyles";

interface LinksProps {
  href: string;
  children: React.ReactNode | string;
}

export const ExternalLink = ({ href, children }: LinksProps) => {
  const classes = useStyles()
  return (
  <a href={href} target="_blank" rel="noreferrer" className={classes.link}>
    {children}
  </a>
)}
