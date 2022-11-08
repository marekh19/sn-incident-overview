import './globals.css';

import { IncidentList } from '../components/IncidentList';
import { Incident } from '../components/IncidentList';

const url = process.env.SN_HOST!;
const credentials = process.env.SN_CREDENTIALS;

const getData = async () => {
  const res = await fetch(url, {
    method: 'GET',
    cache: 'no-store',
    headers: {
      Authorization: `Basic ${credentials}`,
    },
  });
  return res.json();
};

const sortData = (incidentA: Incident, incidentB: Incident) => {
  if (incidentA.number < incidentB.number) return -1;
  if (incidentA.number > incidentB.number) return 1;
  return 0;
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const data = await getData();
  const sortedData = data.result.sort(sortData);

  return (
    <html className='h-100 w-full bg-mantle text-text'>
      <head>
        <title>React & SN Incidents</title>
      </head>
      <body className='h-100 flex justify-center align-middle'>
        <aside className='h-100 m-3 w-1/3 overflow-y-auto rounded-lg bg-base drop-shadow-md'>
          <IncidentList data={sortedData} />
        </aside>
        <main className='h-100 m-3 w-2/3 rounded-lg bg-base drop-shadow-md'>{children}</main>
      </body>
    </html>
  );
}
