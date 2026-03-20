export default function ContentRenderer({ content }) {
    return (
      <div className="space-y-6">
        {content.map((block, index) => {
          switch (block.type) {
  
            case "text":
              return <p key={index}>{block.value}</p>
  
            case "image":
              return (
                <img
                  key={index}
                  src={block.src}
                  alt={block.alt}
                  className="rounded"
                />
              )
  
            case "file":
              return (
                <a
                  key={index}
                  href={block.src}
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  {block.label}
                </a>
              )
  
            default:
              return null
          }
        })}
      </div>
    )
  }