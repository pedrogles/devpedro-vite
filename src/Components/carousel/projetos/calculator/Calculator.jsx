import './calculator.css'

function Calculator(){
    return (
        <main className='container-fundo'>
            <div className='container-calculadora'>
                <h2 className='h2'>Calculadora</h2>
                <p id='resultado'></p>
                <table>
                    <tr>
                        <td><button className='btn'>C</button></td>
                        <td><button className='btn'>{"<"}</button></td>
                        <td><button className='btn'>/</button></td>
                        <td><button className='btn'>x</button></td>
                    </tr>
                    <tr>
                        <td><button className='btn'>7</button></td>
                        <td><button className='btn'>8</button></td>
                        <td><button className='btn'>9</button></td>
                        <td><button className='btn'>-</button></td>
                    </tr>
                    <tr>
                        <td><button className='btn'>4</button></td>
                        <td><button className='btn'>5</button></td>
                        <td><button className='btn'>6</button></td>
                        <td><button className='btn'>+</button></td>
                    </tr>
                    <tr>
                        <td><button className='btn'>1</button></td>
                        <td><button className='btn'>2</button></td>
                        <td><button className='btn'>3</button></td>
                        <td rowSpan={"2"}><button id='btn-igual' className='btn'>=</button></td>
                    </tr>
                    <tr>
                        <td colSpan={"2"}><button id='btn-zero' className='btn'>0</button></td>
                        <td><button className='btn'>.</button></td>
                    </tr>
                </table>
            </div>
        </main>
    )
}

export default Calculator