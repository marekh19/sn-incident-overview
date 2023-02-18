import type { FC } from "react";

import { IncidentCard } from "./parts/Card";

export interface Incident {
  number: string;
  state: string;
  priority: string;
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
