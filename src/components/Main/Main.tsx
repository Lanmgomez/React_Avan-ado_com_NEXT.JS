// import '@/styles/Main/main.scss'
import '../../styles/Main/main.scss'

type PROP = {
  title: string
  description: string
}

function Main({ title, description }: PROP) {
  return (
    <main className="main-styled">
      <img
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />

      <h1 className="title-styled">{title}</h1>
      <h2 className="description-styled">{description}</h2>

      <img
        className="illustration-styled"
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </main>
  )
}

export default Main
