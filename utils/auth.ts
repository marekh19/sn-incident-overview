export const getBasicAuthString = () => {
  const userName = process.env.SN_INSTANCE_USERNAME;
  const pwd = process.env.SN_INSTANCE_PWD;
  const encoded = Buffer.from(`${userName}:${pwd}`);
  return `Basic ${encoded.toString('base64')}`;
};
