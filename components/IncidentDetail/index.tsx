import type { FC } from 'react'
import { IncidentField } from './parts/Field'

interface Incident {
  number: string
  short_description: string
  opened_at: string
  caller_id: { display_value: string; link: string }
  description: string
  state: string
  category: string
  subcategory: string | null
  priority: string
}

interface Props {
  data: Incident
}

export const IncidentDetail: FC<Props> = ({ data }) => {
  return (
    <>
      {data ? (
        <article>
          <h2 className="m-5 text-3xl">
            Incident <span className="font-bold text-blue">{data.number}</span>
          </h2>
          <ul className="m-5 grid auto-rows-auto grid-cols-2 gap-x-3">
            <IncidentField
              name="Caller"
              value={data.caller_id.display_value}
            />
            <IncidentField
              name="Priority"
              value={data.priority}
            />
            {data.category && (
              <IncidentField
                name="Category"
                value={data.category}
              />
            )}
            {data.subcategory && (
              <IncidentField
                name="Subcategory"
                value={data.subcategory}
              />
            )}
            <IncidentField
              name="State"
              value={data.state}
            />
            <IncidentField
              name="Opened"
              value={data.opened_at}
            />

            <IncidentField
              name="Short Description"
              value={data.short_description}
              wide
            />
            {data.description && (
              <IncidentField
                name="Description"
                value={data.description}
                wide
              />
            )}
          </ul>
        </article>
      ) : (
        <div className="flex h-full flex-col items-center justify-center">
          <h1 className="text-center text-2xl">Incident not found</h1>
          <h2 className="mt-3 text-center text-xl">
            Please select a different one.
          </h2>
        </div>
      )}
    </>
  )
}
