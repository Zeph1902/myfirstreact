const Greet = (props) => 
{
    return (
        <div>
            <h1>Hi There! {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )   
}

export default Greet;