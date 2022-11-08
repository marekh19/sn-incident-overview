import { IncidentDetail } from '../../components/IncidentDetail';

const IncidentDetailPage = async ({ params }: any) => {
  const url = `https://dev90173.service-now.com/api/now/table/incident?sysparm_query=number%3D${params.incidentNumber}&sysparm_display_value=true&sysparm_fields=number%2Ccaller_id%2Ccategory%2Csubcategory%2Cdescription%2Cshort_description%2Cstate%2Copened_at`;
  const credentials = process.env.SN_CREDENTIALS;

  const getData = async () => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    });
    return res.json();
  };

  const data = await getData();
  const incidentData = data.result[0];

  return <IncidentDetail data={incidentData} />;
};

export default IncidentDetailPage;
