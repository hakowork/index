import type { NextPage } from 'next'
import Layout from '../components/layout'

const Contact: NextPage = () => {
  const contactList = [
    { title: "discord (server invite)", subtitle: " / datoyacx#5006 (toya)", url: "https://ba-ka.org/discord" },
    { title: "e-mail", subtitle: " / tx@ba-ka.org (tholut x)", url: "mailto:tx@ba-ka.org" },
    { title: "github", url: "https://ba-ka.org/github" },
    { title: "roblox", url: "https://www.roblox.com/groups/6503101/hakowork" },
    { title: "youtube", url: "https://www.youtube.com/channel/UCvFbESDODki3LoaeVlqNv4A" },
  ]
  return (
    <Layout title="contact">
      <div className="sm:container sm:mx-auto pt-8 sm:pt-12 px-6 sm:px-0 text-lg">
        other than in the list are fake
        <ul className="list-disc pl-6">
            {contactList?.map((item) => (
              <li key={item?.title}><a target="_blank" rel="noopener noreferrer" href={item?.url}>{item?.title}</a>{item?.subtitle}</li>
            ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Contact
