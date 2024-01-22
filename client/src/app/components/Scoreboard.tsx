'use client';

import {useState} from 'react';

import IPlayer from '../types/IPlayer'

import PlayerCard from './PlayerCard';

// TODO get this data from db via useEffect, refresh on render/state change
const testPlayers: IPlayer[] = [
    {id: 0o1, name: 'Mateo', points: 2, rank: 3},
    {id: 0o2, name: 'Racquel', points: 3, rank: 2},
    {id: 0o3, name: 'Adina', points: 6, rank: 1}
]

export default function Scoreboard() {
    const [players, setPlayers] = useState<IPlayer[]>(testPlayers);

    const handleAddPoints = (clickedPlayer: IPlayer) => {

        const assignRanks = (playerList: IPlayer[]) => {

            // Use a copied list to rerank each player.
            let sortedPlayers = [...playerList];
            sortedPlayers.sort((a: IPlayer, b: IPlayer) => b.points - a.points);
            sortedPlayers.map((playerToSort, i) => playerToSort.rank = i + 1);

            // Map over the input array. Give each player their new rank.
            players.map((player) => {
                // Handling for inherent possibility that find() returns undefined. Bit of a hassle.
                const sortedPlayer: IPlayer | undefined = sortedPlayers.find((sortedPlayer: IPlayer) => sortedPlayer.id === player.id);
                if (sortedPlayer) {
                    player.rank = sortedPlayer.rank;
                } else {
                    player.rank;
                }
            });
            return playerList;
        }

        let newPlayers: IPlayer[] = [...players];
        newPlayers = players.map((player) => player.id === clickedPlayer.id ? {...player, points: player.points + 1} : player);
        newPlayers = assignRanks(newPlayers);
        setPlayers(newPlayers);
    }

    return (
        <div className="flex space-x-4 items-center justify-center h-screen">
            {players.map((player) => (
                <PlayerCard 
                    key={player.id} 
                    player={player} 
                    onAddPoints={() => handleAddPoints(player)}
                />
            ))}
        </div>
    );
}