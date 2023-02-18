export const createBasicAuthString = (): string => {
  const username = process.env.SN_INSTANCE_USERNAME
  const password = process.env.SN_INSTANCE_PWD
  const encodedCredentials = Buffer.from(`${username}:${password}`).toString(
    'base64'
  )
  return `Basic ${encodedCredentials}`
}
