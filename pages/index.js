import React from "react";
import config from "../config.json"
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavorites } from "../src/components/Favorites";

function HomePage() {
    const [filterValue, setfilterValue] = React.useState("");

        return (
            <>
                <CSSReset />
                <div style={{display: "flex",
                flexDirection: "column",
                flex: 1}
                }>
                    {/*prop drilling */}
                    <Menu filterValue={filterValue} setfilterValue={setfilterValue} />
                    <Header banner={config.banner}>

                    </Header>
                    <Timeline searchValue={filterValue} playlists={config.playlists}>
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
    /* .banner {
        width: 100%;
        height: 320px;
        background-position: center;
        //padding: 32px 32px 32px 32px; // fix later
        object-fit: cover;
    } */
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
const StyledBanner = styled.div`
    background-color: blue;
    /* background-image: url(${config.bg}); */
    background-image: url(${({ bg }) => bg});
    height: 230px;
`;
function Header(props) {
    return (
        <StyledHeader>
            <StyledBanner bg={config.bg} />           
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

function Timeline({searchValue, ...props}) {
    const playlistsNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistsNames.map((playlistsNames) => {
                const videos = props.playlists[playlistsNames];
                return (
                    <section key={playlistsNames}>
                        <h2>{playlistsNames}</h2>
                        <div>
                            {videos
                            .filter((video) => {
                                const titleNormalized = video.title.toLowerCase();
                                const searchValueNormalized = searchValue.toLowerCase();
                                return titleNormalized.includes(searchValueNormalized)
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
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