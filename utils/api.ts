import { createBasicAuthString } from './auth'
import type { Incident } from '../components/IncidentList'

export const getListOfIncidents = async () => {
  const url = `${process.env.SN_INSTANCE_URL}/api/now/table/incident?sysparm_display_value=true&sysparm_fields=number%2Ccaller_id%2Ccategory%2Csubcategory%2Cshort_description%2Cdescription%2Cstate%2Cpriority%2Copened_at`
  const credentials = createBasicAuthString()

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: credentials,
    },
  })

  if (
    !res.ok ||
    !(res.headers.get('Content-type') === 'application/json;charset=UTF-8')
  ) {
    console.log(`RES NOT OK: ${res.status}\nres: ${JSON.stringify(res.json())}`)
    return null
  }
  return res.json()
}

export const getSingleIncident = async (incidentNumber: string) => {
  const url = `${process.env.SN_INSTANCE_URL}/api/now/table/incident?sysparm_query=number%3D${incidentNumber}&sysparm_display_value=true&sysparm_fields=number%2Ccaller_id%2Ccategory%2Csubcategory%2Cdescription%2Cshort_description%2Cstate%2Copened_at%2Cpriority`
  const auth = createBasicAuthString()

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: auth,
    },
  })

  if (
    !res.ok ||
    !(res.headers.get('Content-type') === 'application/json;charset=UTF-8')
  ) {
    console.log(`RES NOT OK: ${res.status}\nres: ${JSON.stringify(res.json())}`)
    return null
  }
  return res.json()
}

export const getSortedData = (incidentA: Incident, incidentB: Incident) => {
  if (incidentA.number < incidentB.number) return -1
  if (incidentA.number > incidentB.number) return 1
  return 0
}
