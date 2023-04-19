import { useStyles } from "./styles";
// import type { StaticImageData } from "next/image";

type Props = {
    thumbnail: any,
    title: string, 
    artist: string,
};

export const Song = ({thumbnail, title, artist}: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.song}>
            <div className={classes.thumbnail}>
                <img src={thumbnail} style={{borderRadius: 8, height: "100%", width: "100%"}} alt={"song thumbnail"}/>
            </div>
            <div className={classes.songInfo}>
                <h1 className={classes.songTitle}>
                    {
                        title
                    }
                </h1>
                <p className={classes.songAuthor}>
                    {
                        artist
                    }
                </p>
            </div>
        </div>
    )
};