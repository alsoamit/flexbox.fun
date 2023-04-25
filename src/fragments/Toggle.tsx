import { Switch } from '@headlessui/react';

export interface IToggleProps {
  enabled: boolean;
  setEnabled: any;
}

export default function Toggle({ enabled, setEnabled }: IToggleProps) {
  return (
    <Switch checked={enabled} onChange={setEnabled} as="span">
      {({ checked }) => (
        /* Use the `checked` state to conditionally style the button. */
        <button
          className={`${
            checked ? 'bg-blue-500' : 'bg-gray-600'
          } relative inline-flex h-2 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              checked
                ? 'translate-x-8 dark:border-blue-500'
                : 'translate-x-0 dark:border-gray-600'
            } inline-flex h-4 w-4 transform items-center justify-center rounded-full border bg-gray-900 transition`}
          >
            <span
              className={`block h-2 w-2 rounded-full border ${
                checked ? 'dark:border-blue-500' : 'dark:border-gray-600'
              }`}
            ></span>
          </span>
        </button>
      )}
    </Switch>
  );
}
