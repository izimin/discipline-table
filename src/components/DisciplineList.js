import React from "react";

const styles = {
    finishedCell: {
        background: '#d59100',
        textDecoration: 'line-through'
    },

    notFinishedCell: {
        textDecoration: 'none'
    }
};

export default (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Subject Name</th>
                    <th>Hours</th>
                    <th>Finished</th>
                </tr>
            </thead>
            <tbody>
                {props.modules.length ? (
                    props.modules.map(module => module.disciplines.map((discipline, index) =>
                        <tr key={[module.number, index]}>
                            { index === 0 &&
                                <td
                                    style={(module.disciplines.some(d => d.finished === false) ? styles.notFinishedCell : styles.finishedCell)}
                                    rowSpan={module.disciplines.length}
                                >
                                    {module.number + ' module'}
                                </td>
                            }
                            <td
                                className='text-left'
                                style={(discipline.finished ? styles.finishedCell : styles.notFinishedCell)}
                            >
                                {discipline.subjectName}
                            </td>
                            <td style={(discipline.finished ? styles.finishedCell : styles.notFinishedCell)}>
                                {discipline.hours}
                            </td>
                            <td style={(discipline.finished ? styles.finishedCell : styles.notFinishedCell)}>
                                <input
                                    type="checkbox"
                                    checked={discipline.finished}
                                    onChange={() => props.onToggle(module.number, index)}
                                />
                            </td>
                        </tr>)
                    )) : (
                        <div>
                            Ничего не найдено
                        </div>
                    )
                }
            </tbody>
        </table>
    )
}