import type { FC } from 'react'
import { IncidentField } from './parts/Field'

interface Props {
  number: string
  shortDescription: string
  caller: string
  description: string
  state: string
  category: string
  subcategory: string
  priority: string
  opened: string
}

export const IncidentDetail: FC<Props> = ({
  number,
  caller,
  category,
  description,
  priority,
  shortDescription,
  state,
  subcategory,
  opened,
}) => {
  return (
    <article>
      <h2 className="m-5 text-3xl">
        Incident <span className="font-bold text-blue">{number}</span>
      </h2>
      <ul className="m-5 grid auto-rows-auto grid-cols-2 gap-x-3">
        <IncidentField
          name="Caller"
          value={caller}
        />
        <IncidentField
          name="Priority"
          value={priority}
        />
        <IncidentField
          name="Category"
          value={category}
        />
        <IncidentField
          name="Subcategory"
          value={subcategory}
        />
        <IncidentField
          name="State"
          value={state}
        />
        <IncidentField
          name="Opened"
          value={opened}
        />

        <IncidentField
          name="Short Description"
          value={shortDescription}
          wide
        />
        <IncidentField
          name="Description"
          value={description}
          wide
        />
      </ul>
    </article>
  )
}
