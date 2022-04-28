import type { NextPage } from 'next'
import Box from '../components/box'
import Layout from '../components/layout'

const Games: NextPage = () => {
  const gameList = [
    { title: "GHOST ID Project", url: "https://www.roblox.com/games/5253868577/gip", description: "Game about fighting the ghost using weapon. This game is inspired by zombie game in Roblox." },
    { title: "Maze Games [closed]", url: "https://www.roblox.com/games/5111122533/mg", description: "Minigame but you are in Maze location and It require 2 Players or more to play. There are murderer who will kill innocent or police will kill murderer in Maze." }
  ]
  return (
    <Layout title="game">
      <div className="sm:container sm:mx-auto pt-8 sm:pt-12 px-6 sm:px-0">
        {gameList?.map((item) => (
          <Box key={item?.title} title={item?.title} button_title="play" description={item?.description} url={item?.url}/>
        ))}
      </div>
    </Layout>
  )
}

export default Games
