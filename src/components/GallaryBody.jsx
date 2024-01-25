import './GallaryBody.css';
export default function GallaryBody(props){
    let imageData=props.data
  return(
    <>
       {
          imageData.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
    </>
  ) 
}