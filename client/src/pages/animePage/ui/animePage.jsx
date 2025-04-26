import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AnimeApi } from "../api/AnimeApi";

export const AnimePage = () => {
    const { id } = useParams()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const animeApi = new AnimeApi()

    useEffect(() => {   
        const fetchAnime = async () => {
            const res = await animeApi.getOneAnime(id)
            setData([res])
            setLoading(false)
        }

        fetchAnime()
    }, [])

    if(loading) {
        return <h1>Загрузка...</h1>
    }

    // const anime = data[0].anime
    const anime = data[0]


    return (  
        <>
            <div key={anime.anime_id} className='anime-preview'>
                    <p>{anime.anime_title_eng}</p>
                    <img src={anime.poster_url} alt="" />
                    <p>{anime.description}</p>
                    <p>{new Date(anime.year).toLocaleDateString()}</p>
            </div>
        </>
    );
}
 