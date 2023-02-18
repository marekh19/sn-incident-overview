import "./globals.css";

import { IncidentList } from "../components/IncidentList";

import { getListOfIncidents, getSortedData } from "../utils/api";
import { InstanceSleeping } from "../components/InstanceSleeping";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getListOfIncidents();
  const sortedData = data ? data.result.sort(getSortedData) : null;

  return (
    <html className="h-full w-full bg-mantle text-text">
      <head>
        <title>React & SN Incidents</title>
      </head>
      {data ? (
        <body className="grid h-full grid-cols-[1fr_2fr] gap-3 p-3">
          <aside className="overflow-y-auto rounded-lg bg-base drop-shadow-md">
            <IncidentList data={sortedData} />
          </aside>
          <main className="rounded-lg bg-base drop-shadow-md">{children}</main>
        </body>
      ) : (
        <body className="flex justify-center">
          <InstanceSleeping />
        </body>
      )}
    </html>
  );
}
