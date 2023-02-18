export const createBasicAuthString = (): string => {
  const userName = process.env.SN_INSTANCE_USERNAME
  const password = process.env.SN_INSTANCE_PWD
  const encodedCredentials = btoa(`${userName}:${password}`)
  return `Basic ${encodedCredentials}`
}
