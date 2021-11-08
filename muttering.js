module.exports = class Muttering {
    constructor(id, user, content, create_date) {
        this.id = id;
        this.user = user;
        this.content = content;
        this.create_date = (typeof create_date === 'undefined') ? new Date() : create_date;
    }

    time_since_created(current_time) {
        current_time = (typeof current_time === 'undefined') ? new Date() : current_time;

        // TODO: find super cool library later
        let diff = current_time.getTime() - this.create_date.getTime();

        return '(' + Math.floor(diff / 60000) + ' minute ago)';
    }
}
