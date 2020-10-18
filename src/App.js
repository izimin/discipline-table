import React from 'react';
import DisciplineList from './components/DisciplineList'
import data from './data/disciplines';

function App() {
    const [modules, setModules] = React.useState(
        data.modules
    );

    const toggleDiscipline = (module, index) => {
        const curStatus = modules[module - 1].disciplines[index].finished;
        modules[module - 1].disciplines[index].finished = !curStatus;
        setModules(modules.map(m => m));
        const gif = document.getElementById('gif-finished');

        if (!curStatus) {
            gif.innerHTML = '<img src="https://i.gifer.com/6mx.gif" alt="this slowpoke moves" width="250"/>';
            setTimeout(() => gif.innerHTML = '', 3000);
        }
    };

    return (
        <div className='flex-row'>
            <div id='gif-finished' className='gif'/>
            <div className='wrapper'>
                <div className='title'>Discipline table</div>
                <DisciplineList modules={modules} onToggle={toggleDiscipline}/>
            </div>
        </div>
    );
}

export default App;
