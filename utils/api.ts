import { createBasicAuthString } from "./auth";
import type { Incident } from "../components/IncidentList";

const credentials = createBasicAuthString();
const fetchConfig: RequestInit = {
  headers: {
    Authorization: credentials,
  },
  next: {
    revalidate: 300, // 5 minutes
  },
};

export const getListOfIncidents = async () => {
  try {
    const url = `${process.env.SN_INSTANCE_URL}/api/now/table/incident?sysparm_display_value=true&sysparm_fields=number%2Ccaller_id%2Ccategory%2Csubcategory%2Cshort_description%2Cdescription%2Cstate%2Cpriority%2Copened_at`;
    const res = await fetch(url, fetchConfig);

    if (
      !res.ok ||
      !(res.headers.get("Content-type") === "application/json;charset=UTF-8")
    ) {
      throw new Error("Failed to fetch");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getSingleIncident = async (incidentNumber: string) => {
  try {
    const url = `${process.env.SN_INSTANCE_URL}/api/now/table/incident?sysparm_query=number%3D${incidentNumber}&sysparm_display_value=true&sysparm_fields=number%2Ccaller_id%2Ccategory%2Csubcategory%2Cdescription%2Cshort_description%2Cstate%2Copened_at%2Cpriority`;

    const res = await fetch(url, fetchConfig);

    if (
      !res.ok ||
      !(res.headers.get("Content-type") === "application/json;charset=UTF-8")
    ) {
      throw new Error("Failed to fetch");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getSortedData = (incidentA: Incident, incidentB: Incident) => {
  if (incidentA.number < incidentB.number) return -1;
  if (incidentA.number > incidentB.number) return 1;
  return 0;
};
