import { Heading, ComponentPageLink } from '../PageComponent';
import { data } from '../../pages';

/**
 * type
 */
interface IComponentPageNavigationProps {
  pathname: string;
  keyword?: string;
}
/**
 * Component
 */
export function ComponentPageNavigation({
  pathname,
  keyword,
}: IComponentPageNavigationProps): JSX.Element {
  const componentList = Object.keys(data.english).filter((key) =>
    key.toLocaleLowerCase().includes(keyword?.toLocaleLowerCase() ?? '')
  );
  return (
    <Heading category="Components">
      {componentList.map((key) => (
        <ComponentPageLink
          key={key}
          to={key}
          pathname={pathname}
        ></ComponentPageLink>
      ))}
    </Heading>
  );
}
