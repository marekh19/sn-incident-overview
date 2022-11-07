import type { NextPage } from 'next'

import { IncidentDetail } from '../components/IncidentDetail'

const HomePage: NextPage = () => {
  return (
    <div className="h-100 flex justify-center align-middle">
      <ul className="h-100 m-3 w-1/3 rounded-lg bg-base">asd</ul>
      <main className="h-100 bg- m-3 w-2/3 rounded-lg bg-base">
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
        />
      </main>
    </div>
  )
}

export default HomePage
