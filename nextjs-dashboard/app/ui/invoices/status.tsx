import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline'; // Import icons
import clsx from 'clsx'; // Import clsx for conditional class names

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm', // Base styles
        {
          // Apply styles if the status is 'pending'
          'bg-gray-100 text-gray-500': status === 'pending',

          // Apply styles if the status is 'paid'
          'bg-green-500 text-white': status === 'paid',
        }
      )}
    >
      {/* Conditionally render the content based on the status */}
      {status === 'pending' && (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      )}
      {status === 'paid' && (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      )}
    </span>
  );
}