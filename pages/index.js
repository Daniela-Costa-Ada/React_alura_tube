import React from "react";
import config from "../config.json"
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavorites } from "../src/components/Favorites";
import { videoService } from "../src/service/videoService";

function HomePage() {
    const service = videoService();
    const [filterValue, setfilterValue] = React.useState("");
    const [playlist, setPlaylist] = React.useState({});
    React.useEffect(() => {
        service
        .getAllVideos()
        .then((dados) => {
            // imutable way
            const newPlaylist = { ...playlist };
            dados.data.forEach((video) => {
                if (!newPlaylist[video.playlist]) {
                    newPlaylist[video.playlist] = [];
                }
                newPlaylist[video.playlist]?.push(video);
            })
            setPlaylist(newPlaylist);
        });  
    }, []);

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }
            }>
                {/*prop drilling */}
                <Menu filterValue={filterValue} setfilterValue={setfilterValue} />
                <Header>

                </Header>
                <Timeline searchValue={filterValue} playlists={config.playlists}>
                </Timeline>
                <Favorites favorites={config.favorites}>

                </Favorites>
            </div>
        </>
    );
}

export default HomePage

const StyledHeader = styled.div`
background-color: ${({ theme }) => theme.backgroundLevel1};
    .foto {
        width: 80px;
        height: 80px;
        border-radius: 50%;        
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
const StyledBanner = styled.div`
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
                    <p>
                        {config.joker}
                    </p>
                    {/* <a  href={config.linkedin} target="blank" >
                        Linkedin
                    </a> */}
                </div>
            </section>
        </StyledHeader>
    )
}
//Statement
//Retorno por expressao pesquisar??

function Timeline({ searchValue, ...props }) {
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
                                })
                                .map((video) => {
                                    return (
                                        <a target="_blank" key={video.url} href={video.url} >
                                            <img className="viImg" src={video.thumb} />
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
                            {nameFav.map((fav) => {
                                return (
                                    <a target="_blank" href={fav.url} >
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