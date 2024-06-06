const Button = ({ title, url }: { title?: string, url?: string }) => {
    return (
        <a target="_blank" href={url} rel="noopener noreferrer" className="inline-block font-mont mt-8 mb-6 sm:mb-0 text-lg border border-gray-50 py-2 px-6 bg-transparent text-gray-50 hover:bg-gray-50 hover:text-gray-900 duration-200">
            <span className="text-md sm:text-lg duration-200">{title}</span>
        </a>
    )
  }
  
  export default Button