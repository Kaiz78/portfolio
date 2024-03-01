
interface ProjecCard{
  logoSrc: string,
  projectLink: string,
  projectName: string,
  role: string,
  responsibilities: string[],
  tools: string,
  duration: string,
  location: string

}


const ProjectCard = ({
  logoSrc,
  projectLink,
  projectName,
  role,
  responsibilities,
  tools,
  duration,
  location
}: ProjecCard) => {
  return (
    <div className="card mb-5">
      <div className="card-content">
        <div className="d-flex" >
          <div className="my-1">
            <a href={projectLink} target="_blank">
              <img alt={`${projectName} logo`} src={logoSrc} className="responsive-img center-block" />
            </a>
          </div>
          <div className="mx-2">
            <p>
              <span className="card-name">
                <a href={projectLink} target="_blank" className="teal-text hoverline">
                  {projectName}
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className='underline-2'></div>
        
        <div className="role brown-text text-darken-2">{role}</div>
        
        <ul>
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
          <li>
            <b>Tools:</b> {tools}
          </li>
        </ul>
      </div>
      <div className="card-action">
        <span>{duration} | {location}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
