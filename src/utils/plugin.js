export default async function(){
  const {default:vConsole} = await import('vconsole')
  new vConsole()
}