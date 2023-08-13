import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Card from '../components/Card'

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = `https://pokeapi.co/api/v2/pokemon/`;

  const res = await fetch(`${api}/?limit=${maxPokemons}`);

  const data = await res.json();

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({pokemons}) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image 
          src="/images/pokeball.png" 
          width="50" 
          height="50"
          alt="PokeNext"
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}


/*export async function getStaticProps() {

  const res = await fetch('http://uni252.unimedmg.coop.br:8252/api/AppUnimed/v1/Beneficiario/AutorizacoesPeriodo?dtInicio=01/05/2023&dtFim=30/05/2023', {
      method: 'GET',
      headers:{
          Authorization: `Bearer 01OddQgQ1CeWUH9DYdr2k_MiI5nXFnnWnH04C9*W_*aI1YjsfKr_QmtCfd_w43yUG3`,
          'X-Carteira': '08570500115752300',
      }
  })

  const data = await res.json()

  data.Data.forEach((item, index) => {
    item.id = index + 1;
  });

  console.log(data)

  return{
      props: {
        pokemons: data.Data,
       
      },
  }
}

export default function Home({pokemons}) {
  return (
    <div>
      <h1>PokeNext</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.guia}>{pokemon.guia},{pokemon.status},{pokemon.id}</li>
          
        ))}
      </ul>
      
    </div>
  )
}

export default function Home({todos}){
  return(
      <>
          <h1>{todos.Result}</h1>
          
          
      </>
  )
}*/