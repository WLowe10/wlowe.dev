import { createUseStyles } from 'react-jss'

const useGlobalStyles = createUseStyles({
  "@global": {
    "body": {
      overflow: "overlay",
      fontSize: "100%",
      backgroundColor: Theme.background
    },
    "button": {
      background: "none",
      color: "inherit",
      border: "none",
      padding: 0,
      font: "inherit",
      cursor: "pointer",
      outline: "inherit"
    },
  }
}, { link: true })

exports.wrapPageElement = ({ element, props }) => {
    useGlobalStyles();

    return (
        <>
        {
            element
        }
        </>
    )
}