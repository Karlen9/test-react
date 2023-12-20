import {
  InvitationSendModal,
  SendInvitationModal
} from 'widgets/Team/ui/modals'
import cls from './NotAvailableYet.module.scss'

const NotAvailableYet = () => {
  return (
    <div className={cls.NotAvailableYet}>
      Not available yet
      <SendInvitationModal />
    </div>
  )
}

export default NotAvailableYet
