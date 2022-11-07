import type { NextPage } from 'next'

const h1styles = ['text-3xl', 'font-bold', 'underline'].join(' ')

const HomePage: NextPage = () => {
  return <h1 className={h1styles}>Hello world!</h1>
}

export default HomePage
