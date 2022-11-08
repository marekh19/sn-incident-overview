import type { FC } from 'react';

interface Props {
  name: string;
  value: string | null;
  wide?: boolean;
}

export const IncidentField: FC<Props> = ({ name, value, wide }) => {
  let className = '';
  wide ? (className = 'col-span-2 my-3 flex items-center') : (className = 'my-3 flex items-center');
  return (
    <li className={className}>
      <p>{name}</p>
      <p className='mx-3 grow rounded-md bg-surface0 p-2 font-bold drop-shadow-md'>{value}</p>
    </li>
  );
};
