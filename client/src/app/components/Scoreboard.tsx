'use client';

import {useState, useEffect} from 'react';
import IPlayer from '../types/IPlayer'
import PlayerCard from './PlayerCard';
import { fetchAllPlayers, assignPlayerRanks } from '../utils/playerUtils';


export default function Scoreboard() {
    const [players, setPlayers] = useState<IPlayer[] | null>(null);

    useEffect(() => {
        const fetchAsyncPlayers = async () => {
            const allPlayers: IPlayer[] = await fetchAllPlayers();
            console.log('CONSOLE LOG from Scoreboard component. JSON.stringify(allPlayers): ' + JSON.stringify(allPlayers));
            setPlayers(allPlayers);
        }
        fetchAsyncPlayers();
    }, []);

    const handleAddPoints = (clickedPlayer: IPlayer) => {
        if (players) {
            let updatedPlayers = [...players];
            updatedPlayers = updatedPlayers.map((player) => player._id === clickedPlayer._id ? {...player, points: player.points + 1} : player);
            updatedPlayers = assignPlayerRanks(updatedPlayers);
            setPlayers(updatedPlayers);
        }
        // TODO now update the database
    }

    if (players) {
        return (
            <div className="flex space-x-4 items-center justify-center h-screen">
                {players.map((player) => (
                    <PlayerCard 
                        key={player._id} 
                        player={player} 
                        onAddPoints={() => handleAddPoints(player)}
                    />
                ))}
            </div>
        );
    } else {
        return ( <h1> Idk fail </h1>)
    }

}