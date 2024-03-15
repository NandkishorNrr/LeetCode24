var predictPartyVictory = function(senate) {
    const radiant = [];
    const dire = [];

    // Separate senators into radiant and dire
    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === 'R') {
            radiant.push(i);
        } else {
            dire.push(i);
        }
    }

    while (radiant.length && dire.length) {
        // Check the index of the next R senator and D senator
        const radiantIndex = radiant.shift();
        const direIndex = dire.shift();

        if (radiantIndex < direIndex) {
            // R senator eliminated one D senator, add the next R senator
            radiant.push(radiantIndex + senate.length);
        } else {
            // D senator eliminated one R senator, add the next D senator
            dire.push(direIndex + senate.length);
        }
    }

    return radiant.length > dire.length ? "Radiant" : "Dire";
};
