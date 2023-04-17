import { useStyles } from "./styles";
import { Song } from "./components";
import BHOTR from "@global/assets/images/BHOTR.png";
import responsibility from "@global/assets/images/responsibility.png";
import shire from "@global/assets/images/shire.png";
import hotel from "@global/assets/images/hotelcalifornia.png"
import { AboutSection } from "../../components";

const songs = [
    {
        title: "Spider-Man Resposibility Theme",
        artist: "Danny Elfman",
        thumbnail: responsibility
    },
    {
        title: "Hotel California",
        artist: "Eagles",
        thumbnail: hotel
    },
    {
        title: "Sound of The Shire",
        artist: "The City of Prague Philharmonic Orchestra",
        thumbnail: shire
    },
    {
        title: "Battle Hymn Of The Republic",
        artist: "John Mcdermott",
        thumbnail: BHOTR
    },
]

export const BestSongs = () => {
    const classes = useStyles();

    return (
        <AboutSection title={"My Favorite Songs"}>
            <div className={classes.songContainer}>
                {
                    songs.map((song, index) => <Song thumbnail={song.thumbnail} key={index} title={song.title} artist={song.artist}/>)
                }
            </div>
        </AboutSection>
    )
};