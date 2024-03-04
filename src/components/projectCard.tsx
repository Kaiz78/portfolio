
interface ProjecCard{
  logoSrc: string,
  projectLink: string,
  projectName: string,
  role: string,
  responsibilities: string[],
  subject: string,
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
  subject,
  tools,
  duration,
  location
}: ProjecCard) => {

  const ROUTE = import.meta.env.VITE_ROUTE;
  return (
    <div className="card mb-5">
      <div className="card-content">
        <div className="d-flex align-items-center" >
          <div className="my-1">
            <a href={projectLink} target="_blank">
              <img alt={`${projectName} logo`} src={`${ROUTE}${logoSrc}`} className="responsive-img center-block" width={80}  />
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
            <li key={index}>
              {/* {responsibility} */}
              <strong>{responsibility.split(':')[0]}:</strong> {responsibility.split(':')[1]}
              </li>
          ))}
          <li>
            <b>{subject}</b> {tools}
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
