import type { FC } from "react";
import Link from "next/link";

interface Props {
  number: string;
  state: string;
  priority: string;
}

export const IncidentCard: FC<Props> = ({ number, state, priority }) => {
  return (
    <Link href={`/${number}`}>
      <li className="m-3 flex cursor-pointer items-center justify-between rounded-lg bg-surface0 p-3 drop-shadow-md">
        <p className="font-bold">{number}</p>
        <div>
          <p className="text-right">{state}</p>
          {priority === "1 - Critical" && (
            <p className="text-right font-bold text-red">{priority}</p>
          )}
          {priority === "2 - High" && (
            <p className="text-right font-bold text-peach">{priority}</p>
          )}
          {priority === "3 - Moderate" && (
            <p className="text-right text-yellow">{priority}</p>
          )}
          {priority === "4 - Low" && (
            <p className="text-right text-green">{priority}</p>
          )}
          {priority === "5 - Planning" && (
            <p className="text-right">{priority}</p>
          )}
        </div>
      </li>
    </Link>
  );
};
