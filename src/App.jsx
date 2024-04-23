import { useState } from 'react';
import SimpleButton from './components/buttons/SimpleButton/SimpleButton';
import Game from './components/game/Game';

function App() {

    const [dificult, setDificult] = useState();
    const [playerChances, setPlayerChances] = useState();
    const [pairsQuantity, setPairsQuantity] = useState();

    const setGameOptions = (dificult, playerChances, pairsQuantity) => {
        setDificult(dificult);
        setPlayerChances(playerChances);
        setPairsQuantity(pairsQuantity);
    }

    return (
        <>
            <h1>Jogo da Memória</h1>

            {!dificult ? (
                <div className='main-menu'>
                    <SimpleButton 
                        content="Fácil" 
                        onClick={() => setGameOptions({
                            value: 'easy',
                            title: 'Fácil'
                        }, 6, 4)}
                    />
                    <SimpleButton 
                        content="Mediana" 
                        onClick={() => setGameOptions({
                            value: 'normal',
                            title: 'Mediana'
                        }, 6, 8)}
                    />
                    <SimpleButton 
                        content="Difícil" 
                        onClick={() => setGameOptions({
                            value: 'hard',
                            title: 'Difícil'
                        }, 12, 18)}
                    />
                    <SimpleButton 
                        content="Muito Difícil"
                        onClick={() => setGameOptions({
                            value: 'veryhard',
                            title: 'Muito Difícil'
                        }, 20, 36)}
                    />
                </div>
            ) : (
                <> 
                    <h2>
                        Dificuldade atual {''}
                        <p className={`dificult-title ${dificult.value}`}>
                           {dificult.title}
                        </p>
                    </h2>

                    <Game 
                        actualDificult={dificult}
                        setDificult={setDificult}
                        playerChances={playerChances}
                        pairsQuantity={pairsQuantity}
                    />
                </>
            )}
        </>
    );
}

export default App;
