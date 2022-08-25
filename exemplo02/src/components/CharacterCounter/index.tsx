import styles from './index.module.css'
type Props = {
    sentence: string
    setSentence: (value:string) => void
}

const CharacterCounter = ({sentence,setSentence}:Props) => {
    return(
        <div className={styles.container}>
          <input
          className={styles.sentenceFild} 
          type="text" 
          placeholder="Digite alguma coisa"
          value={sentence}
          onChange={(event)=> setSentence(event.target.value)}
          />
    
          <span className={styles.counter}>Quantidade de caracteres: {sentence.length}</span>
        </div>
      )
}

export default CharacterCounter