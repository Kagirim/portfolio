

export default function ProjectCard({ project: { title, description, tags, link, linkIcon, starIcon, gitIcon }}: { project: { title: string, description: string, tags: string[], link: string, linkIcon: any, starIcon: any, gitIcon: any}}) {
  return (
    <section>
      <div className="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300">
        <a href={link}>
          <h1 className="text-xl text-center font-bold font-mono text-darkBlue">
            {title}{" "}{linkIcon}
          </h1>
        </a>
        <hr className="my-4" />
        <p className="">{description}</p>
        <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
          {tags.map((tag) => (
            <div className="px-4 py-1 border-2 rounded-full">{tag}</div>
          ))}
        </div>
        <div className="w-full text-center">
          <a href={link}>
            { }
          </a>
          {gitIcon}
          {"  "}
          {starIcon}
        </div>
      </div>

    </section>
  )
}