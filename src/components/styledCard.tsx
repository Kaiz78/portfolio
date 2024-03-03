
import {translate} from "../i18n";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";




export default function StyledCard({id, image, name, description, url }: {id:number, image: string, name: string, description: string, url: string }) {
  
  const {language} = useSelector((state: RootState) => state.lang);  
  let content = translate('page', language) as any

  return (

      <div className="col-12" key={id}>
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
                    >{content.allProject.msg_2}</p>
              )
            }
            <div className='d-flex justify-content-center'>
                <a href={url} target="_blank" rel="noreferrer" className='btn btn-primary'>
                  {content.allProject.msg_3}
                </a>
            </div>
        </div>
      </div>


  );
}
