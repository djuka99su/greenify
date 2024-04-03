import { SettingsForm } from '@/components/auth/settings-form'
import { auth } from '@/auth'
const SettingsPage = async() => {

  const session = await auth()

  return (
    <SettingsForm userData = {session?.user}/>
  )
}

export default SettingsPage