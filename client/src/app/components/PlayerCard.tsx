'use client';

import IPlayer from '../types/IPlayer';

interface PlayerCardProps {
    player: IPlayer;
    onAddPoints: () => void;
}

export default function PlayerCard({player, onAddPoints}: PlayerCardProps) {

    return (
        <div className="bg-blue-400 h-50 w-80 rounded-lg p-4 text-center">
            <h1 className="text-white text-xl font-bold">{player.name}</h1>
            <h1 className="text-white">{player._id}</h1>
            <h1 className="text-white">{player.points} points</h1>
            <h1 className="text-white">Rank {player.rank}</h1>
            <button className="underline" onClick={onAddPoints}>Click!</button>
        </div>
    );
}

