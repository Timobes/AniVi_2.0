import { useEffect, useState } from 'react';
import './style.css'
import { AnimeApi } from '../api/AnimeApi';
import { Link } from 'react-router';

export const HomePage = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const animeApi = new AnimeApi()

    useEffect(() => {
        const fetchAnime = async () => {
            try {
                const res = await animeApi.getAllAnime()
                setData([res])
                setLoading(false)
            } catch (error) {
                console.error(error);
            }
        };
        fetchAnime(); 
    }, [])

    if (loading) {
        return <h1>Загрузка данных</h1>
    }

    console.log(data)
    
    return (  
        <main>
            <div className='anime-list'>
                {
                    data[0].map((anime) => (
                        <div key={anime.anime_id} className='anime-preview'>
                            <Link to={`/anime/${anime.anime_id}`}>
                                <img src={anime.poster_url} alt="" />
                            </Link>
                            <p>{anime.anime_title_rus}</p>
                            <p>{anime.description}</p>
                            <p>{new Date(anime.year).toLocaleDateString()}</p>
                        </div>
                    ))
                }
            </div>
        </main>
    );
}

