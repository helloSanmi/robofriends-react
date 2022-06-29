import React from "react";


const Card = ({robots}) => {

    if (false) {
        throw new Error ('Nooooooo');
    }

    return(
        <div>
            {robots.map((robot) => {
                const {id, name, email, username} = robot;
                return (
                    <div key={robot.id} className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                        <img alt='robots' src= {`https://robohash.org/${id}?200x200`} />
                        <div>
                            <h2>Name: {name}</h2>
                            <p>Username: {username}</p>
                            <p>Email: <i>{email}</i></p>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    );
}

export default Card