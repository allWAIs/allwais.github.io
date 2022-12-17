import { DemoAlert } from './Alert.demo';
import { DemoA11yHidden } from './A11yHidden.demo';
import { DemoTitle } from './Title.demo';
import { DemoBreadcrumb } from './Breaadcrumb.demo';

export function DemoComponent({ componentName }: { componentName: string }) {
  return (
    <>
      {componentName === 'Alert' ? <DemoAlert /> : null}
      {componentName === 'A11yHidden' ? <DemoA11yHidden /> : null}
      {componentName === 'Title' ? <DemoTitle /> : null}
      {componentName === 'Breadcrumb' ? <DemoBreadcrumb /> : null}
    </>
  );
}
