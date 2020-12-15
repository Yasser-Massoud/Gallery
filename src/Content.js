import React,{useState,useEffect} from 'react'
import ServiceClientManager from './ServiceClientManager';
import Grid from '@material-ui/core/Grid';

export default function Content() {
    const [images,setImages] = useState([])
        // a counter to make the load more button loads more 10 photos each time clicked 

    const [counter,setCounter] = useState(10)
    const increaseCounter = ()=>{
        setCounter(counter+10)
       
    }
    const successCallback = (json)=>{
       
        let imgs = json.filter((pic,index)=>pic.albumId % 2 === 0)
               // we can also load images through the api using apiConfig.baseURL?albumId=..&id=.. but i choose using Array.filter

        imgs = imgs.filter((img,index)=>img.id % 50 ===1 )
        setImages(imgs)
    }
     const errorCallback = (error)=>{
        console.error(error)
    }
    useEffect(() => {
        ServiceClientManager.retrieveAll(successCallback,errorCallback)
        
    }, [])
    return (
        <div>
             <Grid container >
            {
                images && images.filter((photo,index)=>index<counter).map(img=>[
                   
                    
                        <Grid key={img.id} xs={12} md={6} lg={4}>
                            <img src={img.url} alt="" />
                        </Grid>
                   
                ])
            }
             </Grid>
             <button onClick={increaseCounter} 
             style={{backgroundColor:"blue",color:"white",padding:"15px",marginTop:"25px",textAlign:"center",marginLeft:"50%"}}>Load more</button>
        </div>
    )
}
