import React from 'react';
import GreetingMaster from './GreetingMaster';
import GreetingDetail from './GreetingDetail';

let currentId = 0;

const sampleGreetings = [{
    id: currentId++,
    name: 'Olli',
    greeting: 'Huhu'
},
    {
        id: currentId++,
        name: 'Oma',
        greeting: 'Hallo'
    }
];

const MODE_MASTER = 'MODE_MASTER';
const MODE_DETAIL = 'MODE_DETAIL';

export default class GreetingController extends React.Component {
    render() {
        const {mode, greetings} = this.state;
        return (
            <div>
                {mode === MODE_MASTER ?
                    <GreetingMaster greetings={greetings}
                        onAdd={() => this.setState({mode: MODE_DETAIL})}
                    /> : null
                    /*
                        1a. Hier statt null deine GreetingDetail-Komponente einbinden
                        1b. Eine Callback-Funktion für das Hinzufügen eines Grußes an die GreetingDetail-Komponente übergeben
                            (Property-Name: onAdd)
                        1c. Die Callback-Funktion soll die addGreeting-Methode (s.u.) aufrufen

                        2a. In GreetingDetail einen Knopf zum Hinzufügen einbauen
                        2b. Beim Drücken auf den Knopf soll die übergebene Callback-Funktion (1b) mit dem eingegebenen
                            Gruß aufgerufen werden (Parameter: ein Objekt mit der Struktur { name: ..., greeting: ... })
                     */
                }
            </div>);
    }
    constructor(props) {
        super(props);
        this.state = {
            greetings: sampleGreetings,
            mode: MODE_MASTER
        };
    }

    addGreeting(greetingToBeAdded) {
        const {greetings} = this.state;
        greetingToBeAdded.id = currentId++;
        const newGreetings = [...greetings, greetingToBeAdded];
        this.setState({
            greetings: newGreetings,
            mode: MODE_MASTER
        });
    }
}
