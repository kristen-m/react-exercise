import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let count = 0;
function render() {
    count++;
    const listContents = [
        {
            id: 512,
            name: "Neil Rhodes",
            email: "rhodes@hmc.edu",
            phone: "(909) 555-1212"
        },
        {
            id: 787,
            name: "Barack Obama",
            email: "ex-prez@whitehouse.gov",
            phone: "(312) 555-1212"
        }
    ];

    console.log(listContents);

    const listItems = listContents.map(
        e => <li key={e.id}> <div id="name"> {e.name} </div> </li>,
        b => <li key={b.id}><div id="email"> {b.email} </div></li>,
        c => <li key={c.id}><div id="phone"> {c.phone} </div> </li>);


    ReactDOM.render(
        <div>
            <ul>
                {listItems}
            </ul>
        </div>,
        document.getElementById('root')
    );
}

render();
setInterval(render, 2000);