export default async function () {
  const { default: vConsole } = await import('vconsole')
  if (import.meta.env.VITE_APP_ENV !== 'PROD') {
    new vConsole()
  }
}
