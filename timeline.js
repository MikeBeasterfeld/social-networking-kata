module.exports = class Timeline {
    constructor(mutterings) {
        this.mutterings = mutterings;
    }

    add_muttering(muttering) {
        this.mutterings.push(muttering);
    }
}
