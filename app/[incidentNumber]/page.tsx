import { IncidentDetail } from "../../components/IncidentDetail";

import { getSingleIncident } from "../../utils/api";

const IncidentDetailPage = async ({ params }: any) => {
  const data = await getSingleIncident(params.incidentNumber);
  const incidentData = data ? data.result[0] : null;

  return <IncidentDetail data={incidentData} />;
};

export default IncidentDetailPage;
