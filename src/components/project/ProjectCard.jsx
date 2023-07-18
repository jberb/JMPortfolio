import React from 'react'




export default function ProjectCard({ title, description, imageUrl,links  }) {
  return (
    <div className="border-2 rounded-lg flex justify-center items-center flex-col bg-bg-1 italic bold py-5 my-5 ">
    <img src={imageUrl} alt={title} className="h-80 w-72 border-2 border-white rounded-full " />
    <h3 className="font-body textStyle1 ">{title}</h3>
    <p className="font-tektur textStyle2 text-xs px-3">{description}</p>
    <div className="">
        {links.map((link, index) => (
            <button
            key={index}
            onClick={() => window.open(link.url, '_blank')}
            className="px-8  m-2 border-2 rounded-md  font-crimson hover:uppercase bg-blue-600 hover:italic hover:text-xl hover:text-yellow-400 hover:bg-purple-900 duration-1000"
          >
            {link.label}
          </button>
        ))}
      </div>
  </div>
  )
}
