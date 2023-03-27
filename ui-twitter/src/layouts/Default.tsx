import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'

import * as S from './Default.style'

export function Default() {
  return (
    <S.divLayout>
      <Sidebar />
      <S.divContent>
        <Outlet />
      </S.divContent>
    </S.divLayout>
  )
}
