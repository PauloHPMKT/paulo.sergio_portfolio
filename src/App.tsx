import { Outlet } from 'react-router-dom'
import { PageLayout } from './components/template/Layout'

export const App = () => {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  )
}
