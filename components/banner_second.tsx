const BannerSecond = ({ title }: { title?: string }) => {
    return (
      <div>
          <div className="relative h-48 md:h-96 block bg-left-bottom bg-cover bg-center bg-no-repeat bg-[url('/background.jpg')] b">
            <div className="h-full w-full bg-gradient-to-t from-neutral-900 absolute"></div>
              <div className="h-full sm:container sm:mx-auto">
                <div className="h-full flex items-center">
                    <div className="w-full align-middle text-left z-[2]">
                    <h1 className="font-general-semibold font-mont uppercase text-3xl md:text-3xl xl:text-4xl text-center text-gray-50">{title}</h1>
                    </div>
                </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default BannerSecond