interface ICardprops{
  title: string
  children: React.ReactNode
}

const Card = (props: ICardprops) => {
  return(
    <div style={{ border: '1px solid black'}}>
      <span>Title: { props.title }</span>
      <div>
        { props.children }
      </div>
      <div>
        Footer
      </div>
    </div>
  )
}


export function App() {

  return (
    <div>
      Ola

      <p>Card:</p>
      <Card title='teste'>
        Teste
      </Card>
    </div>
  )
}
