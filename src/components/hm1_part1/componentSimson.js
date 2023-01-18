function ComponentSimson (props) {
  let {itemName, pic} = props;
    let classNameIteam = 'item'

    return (
            <div className="wrap">
                <div className={classNameIteam}>
                    <h2>{itemName}</h2>
                    <img className="pic" src={pic}/>
                </div>
            </div>
    )
}
export default ComponentSimson