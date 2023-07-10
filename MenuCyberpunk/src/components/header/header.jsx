import { LOGO } from '../../constants/logo'
import { usePageY } from '../../hooks/usePageY'
import { Button } from '../button/button'
import s from './header.module.css'

export function Header() {
  const isPageTop = usePageY()

  const headerState = isPageTop ? s.header : `${s.header} ${s.small}`

  return (
    <header className={headerState}>
      <div className={s.container}>
        <img src={isPageTop ? LOGO.NORMAL : LOGO.SMALL} alt="" />

        <nav>
          <ul className={s.menu}>
            <li><a href="#">home</a></li>
            <li><a href="#">história</a></li>
            <li><a href="#">personagens</a></li>
            <li><a href="#">loja</a></li>
          </ul>
        </nav>

        <Button content='login' href='#' />
      </div>
    </header>
  )
}