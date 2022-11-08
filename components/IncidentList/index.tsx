import type { FC } from 'react';

import { IncidentCard } from './parts/Card';

export interface Incident {
  number: string;
  short_description: string;
  caller_id: {
    display_value: string;
    link: string;
  };
  description: string;
  state: string;
  category: string;
  subcategory: string | null;
  priority: string;
  opened_at: string;
}

interface Props {
  data: Incident[];
}

export const IncidentList: FC<Props> = ({ data }) => {
  return (
    <ul>
      {data.map((inc) => (
        <IncidentCard
          key={inc.number}
          number={inc.number}
          state={inc.state}
          priority={inc.priority}
        />
      ))}
    </ul>
  );
};
