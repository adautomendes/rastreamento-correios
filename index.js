const { rastro } = require('rastrojs');

const COD_RASTREAMENTO='OJ846148628BR'

async function find() {
    let allTracks = [];

    const response = await rastro.track(COD_RASTREAMENTO);
    allTracks = response[0].tracks;

    for (let i = allTracks.length-1; i >= 0; i--) {
        console.log(`${allTracks[i].status} - ${allTracks[i].observation}`);
    }
};

find();

