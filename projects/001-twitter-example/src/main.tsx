import { createRoot } from 'react-dom/client'
import TwitterFollowCard from './TwitterFollowCard'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <article className='follow-card-container'>
    <TwitterFollowCard
      userName='p4ttt0'
      isFollowing  >
        Patricio Perez Cardenal
    </ TwitterFollowCard>
    <TwitterFollowCard 
      userName='f4br1'
      isFollowing={false} >
        Fabrizo Franco
    </TwitterFollowCard>
    <TwitterFollowCard 
      userName='florciacevedo'
      isFollowing={false} >
        Florencia Acevedo
    </TwitterFollowCard>
  </article>,
)
