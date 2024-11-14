import Main from '@/components/Main/Main'

import './page.scss'

export default function Home() {
  const title: string = 'React Avançado'
  const description: string = 'TypeScript, ReactJS, NextJS e Scss'
  return (
    <div className="page">
      <Main title={title} description={description} />
    </div>
  )
}
