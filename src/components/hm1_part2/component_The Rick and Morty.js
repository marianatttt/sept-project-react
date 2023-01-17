function Component_TheRickAndMorty (props) {
    let {item} = props;


    return (
        <div className="wrap">
            <div >
                <p>
                    <b>id:</b> {item.id};
                    <b>name:</b> {item.name};
                    <b>status:</b> {item.status};
                    <b>species:</b> {item.species};
                    <b>gender:</b> {item.gender}
                </p>
                <img className="pic" src={item.image}/>
            </div>
        </div>

    )
}
export default Component_TheRickAndMorty