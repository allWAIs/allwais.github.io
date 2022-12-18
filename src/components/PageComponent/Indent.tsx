import { Fragment } from 'react';
interface Indent {
  n?: number;
}
export function Indent({ n }: Indent) {
  return (
    <>
      {n
        ? Array(n)
            .fill(0)
            .map((_, index) => <Fragment key={index}>&nbsp;</Fragment>)
        : null}
    </>
  );
}
