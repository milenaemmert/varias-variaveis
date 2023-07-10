import s from './button.module.css'

export function Button({ content, href }) {
  return <a href={href} className={s.button}>{content}</a>
}