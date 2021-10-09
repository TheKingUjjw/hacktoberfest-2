"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useSortRanking = async (profiles, score) => {
    const updateProfiles = [];
    let rank = 1;
    let prev_rank = rank;
    let position = 0;
    for (let index = 0; index < profiles.length; index++) {
        if (index === 0) {
            position = rank;
        }
        else if (profiles[index][score] !== profiles[index - 1][score]) {
            rank++;
            position = rank;
            prev_rank = rank;
        }
        else {
            position = prev_rank;
            rank++;
        }
        const updateProfile = { ...profiles[index], ranking: position };
        updateProfiles.push(updateProfile);
    }
    return updateProfiles;
};
exports.default = useSortRanking;
