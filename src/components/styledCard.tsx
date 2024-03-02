


export default function StyledCard({ image, name, description, url }: { image: string, name: string, description: string, url: string }) {
  return (

      <div className="col-12">
        <img src={image} alt={name} />
        <div>
            <h3 className='text-center'>{name}</h3>
            <div className='underline-2'></div>
            {
              description && (
                  <p className="card-body"
                  >{description}</p>

              ) || (
                    <p className="card-body"
                    >Pas de description</p>
              )
            }
            <div className='d-flex justify-content-center'>
                <a href={url} target="_blank" rel="noreferrer" className='btn btn-primary'>
                    Voir
                </a>
            </div>
        </div>
      </div>


  );
}
