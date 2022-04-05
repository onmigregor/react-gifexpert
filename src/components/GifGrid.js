import { useFetchGifs } from '../hooks/useFecthGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {
    
   const { data : images , loading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            {loading && <p>Loading...</p>}
   
            <div className='col-lg-12 row'>
                {
                    images.map(  (img) =>(

                        <GifGridItem 
                        key      = {img.id}
                        {...img} 
                        />
                    ))
                }
            </div>

            
 
        </>
    )
}




