interface HeadingProps {
  children: JSX.Element[] | JSX.Element | string;
  category: string;
}
export function Heading({ children, category }: HeadingProps) {
  return (
    <>
      <h3>{category}</h3>
      {children}
    </>
  );
}
