import IPlayer from '../types/IPlayer'; 


export async function fetchAllPlayers(): Promise<IPlayer[]> {
    let allPlayers: IPlayer[] = [];
    const response = await fetch('http://localhost:3000/api/users', {
        headers: {
            'Cache-Control': 'no-cache',
        },
    });
    const jsonObj = await response.json() as { data: IPlayer[]};
    allPlayers = jsonObj.data;
    return allPlayers;
}


// TODO need to fix the problem where sorting players messes up the order in which they're displayed
export function assignPlayerRanks(playerList: IPlayer[]): IPlayer[] {
    playerList.sort((a: IPlayer, b: IPlayer) => b.points - a.points);
    playerList.map((playerToSort, i) => playerToSort.rank = i + 1)

    // Map over the input array. Give each player their new rank.
    playerList.map((player) => {
        // Handling for inherent possibility that find() returns undefined. Bit of a hassle.
        const sortedPlayer: IPlayer | undefined = playerList.find((sortedPlayer: IPlayer) => sortedPlayer._id === player._id);
        if (sortedPlayer) {
            player.rank = sortedPlayer.rank;
        } else {
            player.rank;
        }
    });
    return playerList;
}

