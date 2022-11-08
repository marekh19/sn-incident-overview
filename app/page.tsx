import { IncidentDetail } from '../components/IncidentDetail'
import { IncidentList } from '../components/IncidentList'
import { Incident } from '../components/IncidentList'

const url = process.env.SN_HOST!
const credentials = process.env.SN_CREDENTIALS

const getData = async () => {
  const res = await fetch(url, {
    method: 'GET',
    cache: 'no-store',
    headers: {
      Authorization: `Basic ${credentials}`,
    },
  })
  return res.json()
}

const sortData = (incidentA: Incident, incidentB: Incident) => {
  if (incidentA.number < incidentB.number) return -1
  if (incidentA.number > incidentB.number) return 1
  return 0
}

const HomePage = async () => {
  const data = await getData()
  const sortedData = data.result.sort(sortData)

  return (
    <div className="h-100 flex justify-center align-middle">
      <IncidentList data={sortedData} />
      <main className="h-100 m-3 w-2/3 rounded-lg bg-base drop-shadow-md">
        <IncidentDetail
          caller="Marek Honzal"
          category="Data"
          subcategory="Access"
          description="I need access to my data as soon as possible"
          number="INC0000123"
          priority="2 - High"
          shortDescription="Cannot access critical data"
          state="Open"
          key="INC0000123"
          opened="2018-10-16 22:47:51"
        />
      </main>
    </div>
  )
}

export default HomePage
