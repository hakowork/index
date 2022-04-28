import { NextPage } from "next"
import Box from "../components/box"
import Layout from "../components/layout"

const Works: NextPage = () => {
  const workList = [
    { title: "empugaris.com", url: "https://empugaris.com/", description: "web slicing" },
    { title: "sehatcruises.com", url: "https://sehatcruises.com/", description: "web slicing" },
    { title: "duplen.id", url: "https://duplen.id/", description: "web slicing and design" },
    { title: "jaktel.com", url: "https://jaktel.com/", description: "web slicing" },
    { title: "phmi.co.id", url: "https://phmi.co.id/", description: "web slicing" }
  ]
  return (
    <Layout title="work">
      <div className="sm:container sm:mx-auto pt-8 sm:pt-12 px-6 sm:px-0">
        {workList?.map((item) => (
          <Box key={item?.title} title={item?.title} button_title="view" description={item?.description} url={item?.url}/>
        ))}
      </div>
    </Layout>
  )
}

export default Works
