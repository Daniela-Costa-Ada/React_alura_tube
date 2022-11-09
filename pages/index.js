import config from "../config.json"
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavorites } from "../src/components/Favorites";

function HomePage() {
    const estilosDaHomePage = {
        // backgroundColor: "red" 
    };

        //console.log(config.playlists);

        return (
            <>
                <CSSReset />
                <div style={estilosDaHomePage}>
                    <Menu />
                    <Header banner={config.banner}>

                    </Header>
                    <Timeline playlists={config.playlists}>
                        Conteudo
                    </Timeline>
                    <Favorites favorites={config.favorites}>
                    
                    </Favorites>
                </div>
            </>
        );
}

export default HomePage

const StyledHeader = styled.div`
    .foto {
        width: 80px;
        height: 80px;
        border-radius: 50%;        
    }
    .banner {
        width: 100%;
        height: 320px;
        background-position: center;
        //padding: 32px 32px 32px 32px; // fix later
        object-fit: cover;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header(props) {
    return (
        <StyledHeader>
            <img className="banner" src={`https://images.unsplash.com/${props.banner}`} />
            <section className="user-info">
                <img className="foto" src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}
//Statement
//Retorno por expressao pesquisar??

function Timeline(props) {
    //console.log("Dentro do componente", props);
    const playlistsNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistsNames.map((playlistsNames) => {
                const videos = props.playlists[playlistsNames];
                return (
                    <section>
                        <h2>{playlistsNames}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}
function Favorites(props) {
    const fav = Object.keys(props.favorites);
    //console.log(fav);
    return (
        <StyledFavorites>
            {fav.map((fav) => {
                const nameFav = props.favorites[fav];
                return (
                    <section>
                        <h2>{fav}</h2>
                        <StyledFavorites>
                            {nameFav.map((fav)=> {
                                return (
                                    <a href={fav.url}>
                                        <img src={fav.thumb} />
                                        <span>
                                            {fav.nameFav}
                                        </span>
                                    </a>
                                )
                            })}
                        </StyledFavorites>
                    </section>
                )
            })}
        </StyledFavorites>
    )
}