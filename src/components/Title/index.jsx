import "./Title.css"
const Title = (props) => {
    return (
        <h1 className="titulo-tipo" style={{ background: `${props.color}` }}>{props.text}</h1>
    )
}
export default Title;