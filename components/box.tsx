import Button from "./button"

const Box = ({ title, button_title, description, url }: { title?: string, button_title?: string, description?: string, url?: string }) => {
    return (
        <figure className="bg-neutral-800 mb-6 last:mb-0">
            <div className="p-6 md:p-8 text-left space-y-4">
              <h2 className="text-4xl break-words">{title}</h2>
              <blockquote>
                <p className="text-lg">
                  {description}
                </p>
              </blockquote>
              <Button url={url} title={button_title}/>
            </div>
        </figure>
    )
  }
  
  export default Box