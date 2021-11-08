module.exports = class Muttering {
    constructor(id, user, content, create_date) {
        this.id = id;
        this.user = user;
        this.content = content;
        this.create_date = (typeof create_date === 'undefined') ? Date.now() : create_date;
    }
}
