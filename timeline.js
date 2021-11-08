module.exports = class Timeline {
    constructor(mutterings) {
        this.mutterings = mutterings;
    }

    add_muttering(muttering) {
        this.mutterings.push(muttering);
    }

    get_by_user_id(user_id) {
        return this.mutterings.filter(mutter => mutter.user.id == user_id);
    }

}
