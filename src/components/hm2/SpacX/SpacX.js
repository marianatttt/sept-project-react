const SpacX = ({item}) => {

            return (
                <div>
                    <h2>
                        mission_name:{item.mission_name};
                        launch_year:{item.launch_year}
                    </h2>
                    <img src={item.links.mission_patch_small}/>
                </div>
            );
        }

export {SpacX};



